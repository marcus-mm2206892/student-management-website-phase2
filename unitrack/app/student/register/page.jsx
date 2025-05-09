"use client";
import { useEffect, useState } from "react";
import styles from "@/app/styles/register-course.module.css";
import NoResults from "@/app/components/NoResults";
import ClassModal from "@/app/components/ClassModal";
import AlertModal from "@/app/components/AlertModal";
import { createClassEnrollmentAction, deleteClassEnrollmentAction, getAllAvailableClasses, getAllClassesAction, getAllUsersAction, getClassByIdAction, getClassDetailsByIdAction, getStudentByEmailAction, updateClassAction } from "@/app/action/server-actions";
import { redirect, usePathname, useRouter } from "next/navigation";

export default function RegisterCourse() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [failedToLoad, setFailedToLoad] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [classModalVisible, setClassModalVisible] = useState(false);
  const [student, setStudent] = useState(null);
  const [classes, setClasses] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);
  const [availableClasses, setAvailableClasses] = useState([]);
  const [user, setUser] = useState(null);
  const [registrableClasses, setRegistrableClasses] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null)
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [refreshFlag, setRefreshFlag] = useState(false);

    useEffect(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);

      useEffect(() => {
        async function fetchStudent() {
          if (user && user.email) {
            const result = await getStudentByEmailAction(user.email);
            setStudent(result);
          }
        }
    
        fetchStudent();
      }, [user, refreshFlag]);
  
      // useEffect(() => {
      //   console.log("Updated student:", student);
      // }, [student]);

    useEffect(() => {
        async function fetchClasses() {
          const newClasses = [];
          
          if (student && student.semesterEnrollment && student.semesterEnrollment.length > 0) {
            const lastEnrollment = student.semesterEnrollment[student.semesterEnrollment.length - 1];

            for (const c of lastEnrollment.classes) {
              newClasses.push(c);
            }
          }

          return newClasses;
        }
      
        async function loadClasses() {
          const resolvedClasses = await fetchClasses(); 
          setClasses(resolvedClasses);               
        }
      
        loadClasses();
      }, [student, refreshFlag]);

      useEffect(() => {
        console.log("Updated classes:", classes);
      }, [classes]);
  
  useEffect(() => {
        async function fetchCompletedCourses() {
          const completedCourses = [];
          
          if (student && student.completedCourses) {
            for (const c of student.completedCourses) {
              completedCourses.push(c);
            }
          }

          return completedCourses;
        }
      
        async function loadCompletedCourses() {
          const completedCourses = await fetchCompletedCourses(); 
          setCompletedCourses(completedCourses);               
        }
      
        loadCompletedCourses();
      }, [student, refreshFlag]);

      // useEffect(() => {
      //   console.log("Updated completed courses:", completedCourses);
      // }, [student]);

  useEffect(() => {
        async function fetchAvailableClasses() {
          const availableClasses = await getAllAvailableClasses();
          
          return availableClasses;
        }
      
        async function loadAvailableClasses() {
          const availableClasses = await fetchAvailableClasses(); 
          setAvailableClasses(availableClasses);               
        }
      
        loadAvailableClasses();
      }, [student, refreshFlag]);


  useEffect(() => {
        async function fetchUsers() {
          const users = await getAllUsersAction();
          
          return users;
        }
      
        async function loadUsers() {
          const users = await fetchUsers(); 
          setUsers(users);               
        }
      
        loadUsers();
      }, [student, refreshFlag]);
  
    useEffect(() => {
      if (availableClasses.length > 0 && completedCourses.length > 0) {
        const completedCourseIds = completedCourses.map((c) => c.courseId);

        // Filtering out completed courses
        const filtered = availableClasses.filter(
          (cls) => !completedCourseIds.includes(cls.courseId)
        ).sort((a, b) => b.enrollmentActual - a.enrollmentActual);

        filtered.forEach((registrableClass) => {
          const isRegistered = classes.some((c) => c.classId === registrableClass.classId);
          registrableClass.registered = isRegistered;});
        setRegistrableClasses(filtered);
      }
    }, [availableClasses, completedCourses, classes]);

      useEffect(() => {
        console.log("Updated registrable classes:", registrableClasses);
      }, [registrableClasses, refreshFlag]);

      const getInstructorName = (email) => {
        if (users.length) {
          const instructor = users.find((u) => u.email === email);
          if (instructor) {
            const firstName = instructor.firstName;
            const lastName = instructor.lastName;
            return `${firstName} ${lastName}`;
          }
        }
        return "No Name";
      };

  const filteredCourses = registrableClasses.filter((cls) =>
    `${cls.course.courseId} ${cls.course.courseName} ${getInstructorName(cls.instructors?.[0]?.email)}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setNoResults(searchTerm && filteredCourses.length === 0);
  }, [searchTerm, filteredCourses]);

  const handleRegisterToggle = (courseId) => {
    if (!registrableClasses) return;
  
    const course = registrableClasses.find((c) => c.classId === courseId);
    if (!course) return;
  
    if (course.campus.toLowerCase() !== user.gender) {
      setAlertMessage(`This class is offered on the ${course.campus} campus. Please register in a section available for ${user.gender.charAt(0).toUpperCase() + user.gender.slice(1)} students.`);
      setAlertVisible(true);
      return;
    }
  
    const updated = registrableClasses.map((c) =>
      c.courseId === courseId ? { ...c, registered: !c.registered } : c
    );
  
    const task = async () => {
      const updatedEnrollment = !course.registered? course.enrollmentActual + 1 : Math.max(0, course.enrollmentActual - 1);
      //Unregistering from a course
      if (course.registered) {
        if (student?.semesterEnrollment?.length > 0) {
          const lastEnrollment = student.semesterEnrollment[student.semesterEnrollment.length - 1];
          await deleteClassEnrollmentAction(course.classId, lastEnrollment.id);
        }


      } else {
      //Registering from a course
        if (student?.semesterEnrollment?.length > 0) {
          // Alert if already registered for the course in another class
          if (classes.find((c) => c.courseId === course.courseId)) {
            setAlertMessage(`You are already registered in another class for ${course.course.courseName} (${course.courseId}).`);
            setAlertVisible(true);
            return;
          }

          if (course.enrollmentActual === course.enrollmentMaximum) {
            setAlertMessage("This class is already full. Please register for another class.");
            setAlertVisible(true);
            return;
          }

          const selectedCourseDetails = await getClassDetailsByIdAction(course.classId)
          console.log(selectedCourseDetails)

          for (const c of classes) {
            const existingClass = await getClassDetailsByIdAction(c.classId);
            console.log(existingClass)
            if (
              JSON.stringify(existingClass.schedule) === JSON.stringify(selectedCourseDetails.schedule) &&
              existingClass.startTime === selectedCourseDetails.startTime &&
              existingClass.endTime === selectedCourseDetails.endTime
            ) {
              setAlertMessage("Schedule conflict with another registered class. Please register for a different class.");
              setAlertVisible(true);
              return;
            }
          }

          const lastEnrollment = student.semesterEnrollment[student.semesterEnrollment.length - 1];
          await createClassEnrollmentAction({
            classId: course.classId,
            courseId: course.courseId,
            semesterEnrollmentId: lastEnrollment.id,
            letterGrade: "N/A",
            gradeStatus: "ungraded",
          });

        }
      }

      await updateClassAction(course.classId, {enrollmentActual: updatedEnrollment});

      const action = course.registered ? "unregistered from" : "registered for";
      setAlertMessage(`You have successfully ${action} ${course?.course.courseName}`);
      setAlertVisible(true);
      setRegistrableClasses(updated);

      setRefreshFlag((prev) => !prev);
    };
  
    // Set a timeout to delay the task (simulate async behavior)
    setTimeout(task, 500); // 500ms delay (you can adjust the delay as needed)
  }

  useEffect(() => {
        console.log(refreshFlag);
      }, [refreshFlag]);
  

  const getStatusBadgeClass = (status) => {
    return status === "open"
      ? styles["status-approved"]
      : status === "pending"
      ? styles["status-pending"]
      : styles["status-rejected"];
  };

  const handleClassClick = (cls, course) => {
    setSelectedClass(cls);
    setSelectedCourse(course);
    setClassModalVisible(true);
  };

  if (
    registrableClasses.length === 0
  ) {
    return <p>Loading courses...</p>;
  }

  return (
    <main className={styles.register}>
      <header className={styles["register-header"]}>
        <div className={styles["register-top-header"]}>
          <h1 className={styles["register-title"]}>Register Your Courses</h1>
          <span className={styles["major-tag"]}>BSc. Computer Science</span>
        </div>
        <p className={styles["register-description"]}>
          Browse and register for courses that match your curriculum.
        </p>
      </header>

      <section className={styles["register-body"]}>
        <table className={styles["register-table"]}>
          <thead>
            <tr>
              <th colSpan="8">
                <div className={styles["search-bar-div"]}>
                  <div className={styles["search-bar"]}>
                    <input
                      type="text"
                      placeholder="Search by Course No, Name, or Instructor..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button>
                      <i className="fa-solid fa-search"></i>
                    </button>
                  </div>

                  {searchTerm && filteredCourses.length > 0 && (
                    <div className={styles["search-info"]}>
                      <p>
                        Showing <strong>{filteredCourses.length}</strong> result(s) for "<em>{searchTerm}</em>"
                      </p>
                    </div>
                  )}

                </div>
              </th>
            </tr>
            {!noResults && (
              <tr>
                <th className={styles["course-no"]}>Course No.</th>
                <th className={styles["course-name"]}>Name</th>
                <th className={styles["course-campus"]}>Campus</th>
                <th className={styles["course-instructor"]}>Instructor</th>
                <th className={styles["course-section"]}>Section</th>
                <th className={styles["course-enrollment"]}>Enrollment</th>
                <th className={styles["course-status"]}>Status</th>
                <th className={styles["course-action"]}>Action</th>
              </tr>
            )}
          </thead>

          <tbody>
            {filteredCourses.map((course, index) => (
              <tr key={index}>
                <td className={`${styles.data} ${styles["course-no"]}`}>
                  <span onClick={() => handleClassClick(course, course.course)}>
                    {course.course.courseId}
                  </span>
                </td>
                <td className={`${styles.data} ${styles["course-name"]}`}>
                  {course.course.courseName}
                </td>
                <td className={`${styles.data} ${styles["course-campus"]}`}>
                  {course.campus}
                </td>
                <td className={`${styles.data} ${styles["course-instructor"]}`}>
                  {getInstructorName(course.instructors?.[0]?.email)}
                </td>
                <td className={`${styles.data} ${styles["course-section"]}`}>
                  {course.section}
                </td>
                <td className={`${styles.data} ${styles["course-enrollment"]}`}>
                  <span>{course.enrollmentActual} / {course.enrollmentMaximum}</span>
                </td>
                <td className={`${styles.data} ${styles["course-status"]}`}>
                  <div
                    className={`${styles["status-badge"]} ${getStatusBadgeClass(course.classStatus)}`}
                  >
                    <span className={styles["status-circle"]}></span>
                    {/* first letter of the word capital */}
                    {course.classStatus.charAt(0).toUpperCase() + course.classStatus.slice(1)} 
                  </div>
                </td>
                <td className={`${styles.data} ${styles["course-action"]}`}>
                  <button
                    className={`${styles["course-button"]} ${
                      course.registered ? styles["registered-button"] : ""
                    }`}
                    onClick={() => handleRegisterToggle(course.classId)}
                  >
                    {course.registered ? "Unregister" : "Register"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>


        {noResults && (
          <div className="no-results" style={{ display: "flex" }}>
            <NoResults />
          </div>
        )}

        {failedToLoad && (
          <div className="failed-to-load" style={{ display: "flex" }}>
            <p>Failed to load course data. Please try again later.</p>
          </div>
        )}
      </section>

      {selectedClass && selectedCourse && (
                <ClassModal
                  cls={selectedClass}
                  course={selectedCourse}
                  isVisible={classModalVisible}
                  onClose={() => {
                    setClassModalVisible(false);
                    setSelectedClass(null);
                    setSelectedCourse(null);
                  }}
                />
      )}

      <AlertModal
        title="Registration Update"
        description={alertMessage}
        isOpen={alertVisible}
        onClose={() => setAlertVisible(false)}
      />
    </main>
  );
}
