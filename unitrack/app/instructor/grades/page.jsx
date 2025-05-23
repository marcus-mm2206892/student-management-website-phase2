"use client";

import { useEffect, useState } from "react";
import styles from "@/app/styles/grade-submission.module.css";
import cardStyles from "@/app/styles/course-card-view.module.css";
import AlertModal from "@/app/components/AlertModal";
import ClassModal from "@/app/components/ClassModal";
import EmptyContent from "@/app/components/EmptyContent";
import NoneSelected from "@/app/components/NoneSelected";
import { useSearchParams } from "next/navigation";
import { getInstructorByEmailAction, getClassByIdAction, getCourseByIdAction, getAllStudentsAction, getUserByEmailAction, getUsersByRoleAction, createCompletedCourseAction, updateClassAction, updateInstructorGradedClassesAction, updateClassEnrollmentAction } from "@/app/action/server-actions";


export default function Grades() {
  const searchParams = useSearchParams();
  const [courses, setCourses] = useState([]);
  const [classes, setClasses] = useState([]);
  const [instructor, setInstructor] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [enrolledStudents, setEnrolledStudents] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showClassModal, setShowClassModal] = useState(false);
  const [alertContent, setAlertContent] = useState({ title: "", description: "" });
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [grades, setGrades] = useState([]);
  const [students, setStudents] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

    useEffect(() => {
      async function fetchInstructor() {
        if (user && user.email) {
          const result = await getInstructorByEmailAction(user.email);
          setInstructor(result);
        }
      }
  
      fetchInstructor();
    }, [user, refreshFlag]);

    // useEffect(() => {
    //   console.log("Updated instructor:", instructor);
    // }, [instructor]);

    useEffect(() => {
      async function fetchClasses() {
        const newClasses = []
        if (instructor) {
          for (const tc of instructor.teachingClasses) {
            const c = await getClassByIdAction(tc.classId);
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
    }, [instructor, refreshFlag]);
  
    // useEffect(() => {
    //   console.log("Updated classes:", classes);
    // }, [classes]);
  
    useEffect(() => {
  
      async function fetchCourses() {
        const newCourses = []
        if (classes.length) {
          for (const c of classes) {
            const course = await getCourseByIdAction(c.courseId);
            if (!newCourses.find(crs => crs.courseId === course.courseId))
              newCourses.push(course);
          }
        }
        return newCourses
      }
  
      async function loadCourses() {
        const resolvedCourses = await fetchCourses(); 
        setCourses(resolvedCourses);               
      }
    
      loadCourses();
    }, [classes, refreshFlag])
  
    // useEffect(() => {
    //   console.log("Updated courses:", courses);
    // }, [courses]);

  useEffect(() => {
    async function fetchStudents() {
      const allStudents = await getAllStudentsAction()
      return allStudents
    }

    async function loadStudents() {
      const allStudents = await fetchStudents(); 
      setStudents(allStudents);               
    }
  
    loadStudents();
  }, [classes, refreshFlag])

  useEffect(() => {
    async function fetchUsers() {
      const userStudents = await getUsersByRoleAction("student")
      return userStudents
    }

    async function loadUsers() {
      const userStudents = await fetchUsers(); 
      setUsers(userStudents);               
    }
  
    loadUsers();
  }, [classes, refreshFlag])

  // useEffect(() => {
  //   console.log("Updated students:", students);
  // }, [students]);

  // useEffect(() => {
  //   console.log("Updated users:", users);
  // }, [users]);

  const openInstructorClasses = classes.filter(
    (ic) => ic.classStatus === "open" || ic.classStatus === "completed"
  );

  // useEffect(() => {
  //   console.log("Updated open intrusctor classes:", openInstructorClasses);
  // }, [openInstructorClasses]);

  const instructorClassesWithName = openInstructorClasses
    .map((c) => {
      const course = courses.find((co) => co.courseId === c.courseId);
      return {
        ...c,
        courseName: course?.courseName || "Unnamed Course",
        submitted: c.classStatus === "open" ? "P" : "S",
      };
    })
    .sort((a, b) => (a.classStatus === "open" ? -1 : 1));

  const handleClassClick = (cls) => {
    if (!students.length || !users.length) {
      console.log("Loading...")
      return;
    }
    const matchedClass = classes.find((c) => c.classId === cls.classId);

    const matchedStudents = students.filter((s) =>
      s.semesterEnrollment.some((enrollment) =>
        enrollment.classes.some((cl) => cl.classId === matchedClass.classId)
      )
    );

    matchedStudents.forEach((student) => {
      if (localStorage.getItem(student.email)) {
        localStorage.removeItem(student.email);
      }
    });

    const gradeList = matchedStudents.map((student) => {
      const profile = users.find((u) => u.email === student.email);
      return {
        id: student.studentId,
        email: student.email,
        name: `${profile?.firstName || ""} ${profile?.lastName || ""}`,
        grade: localStorage.getItem(student.email) || "Grade",
      };
    });
    setSelectedClass(cls);
    setEnrolledStudents(matchedStudents);
    setGrades(gradeList);

  };
  
  // useEffect(() => {
  //   console.log("Selected class:",selectedClass);
  // }, [selectedClass]);

  const handleGradeChange = (id, value) => {
    setGrades((prev) =>
      prev.map((g) => (g.id === id ? { ...g, grade: value } : g))
    );
    setOpenDropdownId(null);
  };

  const handleSubmit = async () => {
    if (selectedClass) {
      const missing = enrolledStudents.find((s) => !localStorage.getItem(s.email));
      if (missing) {
        const profile = users.find((u) => u.email === missing.email);
        setAlertContent({
          title: "Missing Grades",
          description: `Please choose a grade for student ${profile?.firstName || ""} ${
            profile?.lastName || ""}`,
        });
        setShowAlert(true);
        return;
      }

      await Promise.all(
          enrolledStudents.map(async (student) => {
            const lastEnrollment = student.semesterEnrollment[student.semesterEnrollment.length - 1];
  
            await createCompletedCourseAction({
              studentId: student.studentId,
              courseId: selectedClass.courseId,
              letterGrade: localStorage.getItem(student.email),
            });

            await updateClassEnrollmentAction(
              selectedClass.classId,
              lastEnrollment.id,
              { gradeStatus: "graded", letterGrade: localStorage.getItem(student.email) }
            );
          })
        );

      updateClassAction(selectedClass.classId, { classStatus: "completed" });

      updateInstructorGradedClassesAction(instructor.instructorId, selectedClass);

      setAlertContent({
        title: "Grades Submitted",
        description: `Grades for ${selectedClass.courseName} have been submitted.`,
      });

      enrolledStudents.forEach((student) => {
        if (localStorage.getItem(student.email)) {
          localStorage.removeItem(student.email);
        }
      });

      setShowAlert(true);
      setRefreshFlag((prev) => !prev);

      setTimeout(() => {
        setSelectedClass(null);
      }, 2500);
    }
  };

  return (
    <main className={styles["grade-submission"]}>
      <header className={styles["grade-submission-header"]}>
        <div className={styles["grade-submission-top-header"]}>
          <h1>Submit Student Grades</h1>
          <div className={styles["no-of-classes"]}>
            <span>{instructorClassesWithName.length} Classes</span>
          </div>
        </div>
        <div className={styles["grade-submission-bottom-header"]}>
          <p>Review and finalize student grades for your courses</p>
        </div>
      </header>

      <section className={styles["classes-container"]}>
        <div className={`${styles["classes"]}`}>
          <div className={styles["classes-header"]}>
            <h2><i className="fa-solid fa-circle-dot"></i> Current Classes</h2>
            <p>Grading classes you are currently teaching in the university</p>
          </div>

          <div className={styles["cards-container"]}>
            {instructorClassesWithName.length === 0 ? (
              <EmptyContent />
            ) : (
              instructorClassesWithName.map((ic) => (
                <div
                  key={ic.classId}
                  className={cardStyles["course-card"]}
                  onClick={() => handleClassClick(ic)}
                >
                  <div className={styles["course-header"]}>
                    <span className={cardStyles["course-tag"]}>{ic.courseId}</span>
                    <span className={cardStyles["section-tag"]}>{ic.section}</span>
                    <span className={cardStyles["campus-tag"]}>{ic.campus}</span>
                  </div>
                  <div className={cardStyles["course-completed-main"]}>
                    <div className={cardStyles["course-grade"]}>
                      <div><h3>{ic.courseName}</h3></div>
                      <div className={styles["status-container"]}>
                        <span className={styles["status"]}>{ic.submitted}</span>
                      </div>
                    </div>
                    <div className={cardStyles["course-tags"]}>
                      <span className={cardStyles["tag"]}>
                        <i className="fa-solid fa-user-graduate"></i> {ic.enrollmentActual} Students
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}

          </div>
        </div>

        <div className={`${styles["classes"]} ${styles["selected"]}`}>
          {!selectedClass ? (
            <NoneSelected
              title="No class selected"
              subtitle="Please select a class to view and submit grades."
            />
          ) : (
            <>
              <div className={styles["class-header"]}>
                <div className={styles["course-tags-div"]}>
                  <h3>{selectedClass.courseName}</h3>
                  <span className={cardStyles["course-tag"]}>{selectedClass.courseId}</span>
                  <span className={cardStyles["section-tag"]}>Section {selectedClass.section}</span>
                  <span className={cardStyles["campus-tag"]}>{selectedClass.campus}</span>
                </div>

                <div className={styles["course-tags-div"]}>
                  {enrolledStudents.length > 0 && (
                    <span className={cardStyles["tag"]}>
                      <i className="fa-solid fa-user-graduate"></i> {enrolledStudents.length} Students
                    </span>
                  )}
                </div>

              </div>

              <div className={styles["cards-container"]}>
                {selectedClass.classStatus === "completed" ? (
                  <div className={styles["grades-submitted-message"]}>
                    <i className={`fa-solid fa-circle-check ${styles["circle-check"]}`}></i>
                    <h3>Grades have been submitted!</h3>
                    <p>You can no longer modify grades for this class.</p>
                  </div>
                ) : (
                  grades.map((student) => (
                    <div className={styles["card"]} key={student.id}>
                      <div className={styles["student-grade"]}>
                        <div>
                          <h3>{student.name}</h3>
                          <div className={styles["student-info"]}>
                            <span className={styles["email"]}>{student.email}</span>
                          </div>
                        </div>

                        <div className={styles["dropdown"]}>
                          <div
                            className={styles["dropdown-toggle"]}
                            onClick={(e) => {
                              e.stopPropagation();
                              setOpenDropdownId((prev) => (prev === student.id ? null : student.id));
                            }}
                          >
                            <span>{student.grade}</span>
                            <i className="fa-solid fa-chevron-down"></i>
                          </div>

                          {openDropdownId === student.id && (
                            <div className={styles["dropdown-menu"]}>
                              {["A", "B+", "B", "C+", "C", "D+", "D", "F", "I"].map((g) => (
                                <div
                                  key={g}
                                  onClick={() => {
                                    handleGradeChange(student.id, g);
                                    localStorage.setItem(student.email, g);
                                  }}
                                >
                                  {g}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>


              {selectedClass.classStatus !== "completed" && (
                <div className={styles["submit-container"]}>
                  <button className={styles["submit-btn"]} onClick={handleSubmit}>
                    Submit Grades
                  </button>
                </div>
              )}

            </>
          )}
        </div>
      </section>

      <AlertModal
        title={alertContent.title}
        description={alertContent.description}
        isOpen={showAlert}
        onClose={() => setShowAlert(false)}
      />
      {/* <ClassModal
        isVisible={showClassModal}
        onClose={() => setShowClassModal(false)}
      /> */}
    </main>
  );
}
