"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EmptyContent from "@/app/components/EmptyContent";
import ClassModal from "@/app/components/ClassModal";
import styles from "@/app/styles/student-profile.module.css";
import cardStyles from "@/app/styles/course-card-profile.module.css";
import { getClassByIdAction, getCourseByIdAction, getStudentByEmailAction } from "@/app/action/server-actions";

export default function StudentProfile() {
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null)
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [user, setUser] = useState(null);
  const [student, setStudent] = useState(null)
  const [completedCourses, setCompletedCourses] = useState(0);
  const [totalCourses, setTotalCourses] = useState(0);
  const [openCoursesCH, setOpenCoursesCH] = useState(0);
  const [pendingCoursesCH, setPendingCoursesCH] = useState(0);
  const [classModalVisible, setClassModalVisible] = useState(false);
  
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
        }, [user]);
  
  // useEffect(() => {
  //       console.log("Updated student:", student);
  //     }, [student]);
  
  
  useEffect(() => {
          async function fetchClasses() {
            const newClasses = [];
    
            if (student && student.semesterEnrollment && student.semesterEnrollment.length > 0) {
              const lastEnrollment = student.semesterEnrollment[student.semesterEnrollment.length - 1];
              for (const c of lastEnrollment.classes) {
                const cls = await getClassByIdAction(c.classId)
                if (cls.classStatus === "open" || cls.classStatus === "pending") {
                  newClasses.push(cls);
                }
              }
            }
            return newClasses;
          }
        
          async function loadClasses() {
            const resolvedClasses = await fetchClasses(); 
            setEnrolledClasses(resolvedClasses);               
          }
        
          loadClasses();
        }, [student]);
  
        // useEffect(() => {
        //   console.log("Updated classes:", enrolledClasses);
        // }, [enrolledClasses]);
  
  useEffect(() => {
    async function fetchCourses() {
      const newCourses = [];

      if (enrolledClasses) {
        for (const cls of enrolledClasses) {
          const crs = await getCourseByIdAction(cls.courseId);
          const crsWithStatus = {...crs , classStatus: cls.classStatus}
          newCourses.push(crsWithStatus);
        }
      }

      return newCourses;
    }

    async function loadCourses() {
      const resolvedCourses = await fetchCourses(); 
      setCourses(resolvedCourses);               
    }

    loadCourses()
  }, [enrolledClasses])

  // useEffect(() => {
  //   console.log("Updated courses:", courses);
  // }, [courses]);

  useEffect(() => {
    if (student) {
      setCompletedCourses(student.completedCourses.length); 
    }
  }, [student])

  useEffect(() => {
    if (student) {
      setTotalCourses(student.major.CourseMajorOfferings.length);
    }
  }, [student])

  useEffect(() => {
    if (courses) {
      let count = 0
      courses.forEach((c) => {
        if (c.classStatus === "open")
          count+=c.creditHours;
      })
      setOpenCoursesCH(count);
    }
  }, [courses])

  useEffect(() => {
    if (courses) {
      let count = 0
      courses.forEach((c) => {
        if (c.classStatus === "pending")
          count+=c.creditHours;
      })
      setPendingCoursesCH(count);
    }
  }, [courses])

  // useEffect(() => {
  //   console.log("Updated open course CH:", openCoursesCH);
  // }, [openCoursesCH]);

  // useEffect(() => {
  //   console.log("Updated pending course CH:", pendingCoursesCH);
  // }, [pendingCoursesCH]);

  const percentCompleted = Math.round((completedCourses / totalCourses) * 100);

  const handleClassClick = (cls, course) => {
    setSelectedClass(cls);
    setSelectedCourse(course);
    setClassModalVisible(true);
  };

  const renderClassCard = (cls) => {

    if (!courses) return <p>Loading courses...</p>;
    const course = courses.find((c) => c.courseId === cls.courseId);
    if (!course) return null;

    const creditHoursText = course.creditHours === 1 ? "credit hour" : "credit hours";

    return (
      <div key={cls.classId} className={cardStyles["course-card"]} onClick={() => handleClassClick(cls, course)}>
        <div className={cardStyles["course-image"]}>
          <img
            src={course.courseImage}
            alt="Course Image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className={cardStyles["hover-icon"]}>
            <i className="fa-solid fa-eye"></i>
            <span className={cardStyles["hover-text"]}>View Class</span>
          </div>
          <i className={`fa-solid fa-turn-up ${cardStyles["top-right-icon"]}`}></i>
        </div>

        <div className={cardStyles["course-info"]}>
          <div className={cardStyles["course-header"]}>
            <div className={cardStyles["card-tags-div"]}>
              <span className={cardStyles["course-tag"]}>{cls.courseId}</span>
              <span className={cardStyles["section-tag"]}>{cls.section}</span>
            </div>
            <span className={cardStyles["semester"]}>{cls.semester}</span>
          </div>
          <h3>{course.courseName}</h3>
          <p className={cardStyles["course-subtitle"]}>{course.description}</p>
          <div className={cardStyles["course-tags"]}>
            <span className={cardStyles["tag"]}>
              <i className="fa-solid fa-hourglass-half"></i> {course.creditHours} {creditHoursText}
            </span>
            {course.CourseMajorOfferings.map((major, i) => (
              <span key={i} className={cardStyles["tag"]}>
                <i className={`fa-solid ${major === "CMPE" ? "fa-microchip" : "fa-laptop-code"}`}></i>{" "}
                {major === "CMPS" ? "CS" : "CE"}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  if (!user || !student) {
    return <p>Loading.. </p>;
  }

  return (
    <>
      <main className={styles["student-profile"]}>
        <div className={styles.greetings}>
          <h1>Hello there, {user.firstName} {user.lastName}</h1>
          <p>Track your course progress and learning in university.</p>
        </div>

        <div className={styles["student-profile-left"]}>
          <div className={styles["course-image-div"]}>
            <div className={styles["course-image"]}>
              <Image
                src={`/assets/major-files/2024-${student.majorId === "CMPS" ? "cs" : "ce"}-flowchart.png`}
                alt="Flowchart"
                fill
                style={{ objectFit: "contain" }}
              />
              <a
                className={styles["hover-icon"]}
                href={`/assets/major-files/2024-${student.majorId === "CMPS" ? "cs" : "ce"}-flowchart.pdf`}
                download
              >
                <i className="fa-solid fa-download"></i>
                <span className={styles["hover-text"]}>Download Flowchart</span>
              </a>
            </div>
          </div>

          <div className={styles["credit-hours-card"]}>
            <div className={styles["credit-hours-text"]}>
              <h2>You are taking <strong>{openCoursesCH} credit hours</strong> this semester</h2>
              <p>with <strong>{pendingCoursesCH} credit hours</strong> waiting to be approved.</p>
            </div>
            <div className={styles["credit-hours-image"]}>
              <img src="/assets/imgs/unitrack-images/login-page-graphic.png" alt="Credit Hours" />
            </div>
          </div>

          <div className={styles.courses}>
            <div className={styles["courses-header"]}>
              <div className={styles["courses-header-left"]}>
                <h2>Current Classes</h2>
                <p>These are the classes you're enrolled in this semester.</p>
              </div>
              <div className={styles["courses-header-right"]}>
                <Link href="/browse" className={styles["browse-courses"]}>
                  Browse more classes <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {enrolledClasses.length === 0 ? (
              <EmptyContent />
            ) : (
              <div className={styles["course-grid"]}>
                {enrolledClasses.map((cls) => renderClassCard(cls))}
              </div>
            )}
          </div>
        </div>

        <div className={styles["student-profile-right"]}>
          <div className={styles["about-me-div"]}>
            <h3>About Me</h3>
            <div className={styles["about-me-content"]}>
              <img
                src="/assets/imgs/user-profile-images/male1.png"
                alt="Avatar"
                className={styles["about-me-avatar"]}
              />
              <div className={styles["about-me-content-right"]}>
                <h2>{user.firstName} {user.lastName}</h2>
                <p>{user.email}</p>
                <span className={styles["major-tag"]}>{user.major}</span>
              </div>
            </div>
          </div>

          <div className={styles["content-info-div"]}>
            <h3 className={styles["content-info-attribute"]}>Download Study Plan</h3>
            <a
              className={`${styles["content-info-paragraph"]} ${styles["attachment"]}`}
              href={`../assets/major-files/2024-${user.department === "Computer Science" ? "cs" : "ce"}-studyplan.pdf`}
              download
            >
              <i className="fa-solid fa-file-pdf"></i> Download {user.department} Study Plan
            </a>
          </div>

          <div className={styles["progress-card"]}>
            <h3 className={styles["content-info-attribute"]}>Your Progress to Graduation</h3>
            <div className={styles["progress-content"]}>
              <div className={styles["progress-text"]}>
                <p className={`${styles["content-info-attribute"]} ${styles["total-tag"]}`}>
                  Completed {completedCourses} of {totalCourses} Total Courses
                </p>
                <p>You are also taking <span>{enrolledClasses.length} courses</span> this semester</p>
              </div>
              <div className={styles["progress-chart"]}>
                <div className={styles["pie-wrapper"]} style={{ "--progress": percentCompleted }}>
                  <span className={styles["label"]}>
                    {percentCompleted}
                    <span className={styles["smaller"]}>%</span>
                  </span>
                  <div className={styles["pie"]}>
                    <div className={`${styles["half-circle"]} ${styles["left-side"]}`}></div>
                    <div className={`${styles["half-circle"]} ${styles["right-side"]}`}></div>
                  </div>
                  <div className={styles["shadow"]}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div id="modalContainer">
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
      </div>
    </>
  );
}
