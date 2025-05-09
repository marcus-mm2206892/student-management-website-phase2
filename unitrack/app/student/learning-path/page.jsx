  "use client";

  import { useEffect, useRef, useState } from "react";
  import styles from "@/app/styles/learningpath.module.css";
  import cardStyles from "@/app/styles/course-card-view.module.css";

  import { getCompletedCoursesByStudentEmailAction, getAllCoursesAction, getCurrentCoursesByStudentEmailAction, getMajorCourseIdsByEmailAction, getPendingCourseIdsByStudentEmailAction } from "@/app/action/server-actions";


  export default function LearningPath() {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const[courses, setCourses] = useState([]);
    const[completedCourses, setCompletedCourses] = useState([]);
    const[inProgressCourses, setInProgressCourses] = useState([]);
    const[scheduledCourses, setScheduledCourses] = useState([]);
    const[upcomingCourses, setUpcomingCourses] = useState([]);
    const stored =  JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState({
      email: stored?.email || "",
      studentId: stored?.studentId || "",
      majorId: stored?.majorId || ""
    });

    useEffect(() => {

      async function loadAllCourseData(studentEmail) {
        const majorId = "CMPS"; 
    
        // Getting all the data in parallel
        const [allCourses, completed, current, required, pending] = await Promise.all([
          getAllCoursesAction(),
          getCompletedCoursesByStudentEmailAction(studentEmail),
          getCurrentCoursesByStudentEmailAction(studentEmail),
          getMajorCourseIdsByEmailAction(studentEmail),
          getPendingCourseIdsByStudentEmailAction(studentEmail)  
        ]);
    
        setCourses(allCourses);
    
        // Completed courses
        const completedCoursesWithInfo = allCourses
          .filter(course => completed.some(c => c.courseId === course.courseId))
          .map(course => {
            const match = completed.find(c => c.courseId === course.courseId);
            return {
              courseId: course.courseId,
              courseName: course.courseName,
              description: course.description,
              letterGrade: match.letterGrade
            };
          });
        setCompletedCourses(completedCoursesWithInfo);
        const completedIds = completed.map(c => c.courseId);
        const filteredCurrent = current.filter(courseId => !completedIds.includes(courseId));
    
        // In-progress courses
        const inProgressCoursesWithInfo = allCourses
          .filter(course => filteredCurrent.includes(course.courseId))
          .map(course => ({
            courseId: course.courseId,
            courseName: course.courseName,
            description: course.description
          }));
        setInProgressCourses(inProgressCoursesWithInfo);

        const pendingCoursesWithInfo = allCourses
        .filter(course => pending.includes(course.courseId))
        .map(course => ({
          courseId: course.courseId,
          courseName: course.courseName,
          description: course.description
        }));
        setScheduledCourses(pendingCoursesWithInfo);


        // Remaining Courses
        const inProgressIds = current;

        const remainingIds = required.filter(
        id => !completedIds.includes(id) && !inProgressIds.includes(id)
        );

        const upcomingCoursesWithInfo = allCourses.filter(course => 
          remainingIds.includes(course.courseId))
          .map(course => ({
            courseId: course.courseId,
            courseName: course.courseName,
            description: course.description
          }));
          
        setUpcomingCourses(upcomingCoursesWithInfo);
      }
    
      loadAllCourseData(user.email);
    }, []);

    useEffect(() => {
        console.log("Logged in user:", JSON.parse(localStorage.getItem("user")));
      }, [user]);
      
    
      useEffect(() => {
        console.log(inProgressCourses);
      }, [inProgressCourses]);
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 768) setCurrentIndex(-1);
        else setCurrentIndex(0);
      };
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);


    const filteredCategory = (courses, label, icon, cssCategory) => (
      <div
        key={cssCategory}
        className={`${styles["category"]}`}
        style={{ display: currentIndex === -1 || currentIndex === categories.findIndex(c => c.label === label) ? "flex" : "none" }}>
        <div className={styles["category-header"]}>
          <h2>
            <i className={`fa-solid ${icon}`} /> {label}
            <span className={styles["tracking-number"]}>{courses.length} {label.toLowerCase()}</span>
          </h2>
          <p>{categoryDescriptions[cssCategory]}</p>
        </div>
        <div className={styles["cards-container"]}>
          {courses.map((c, idx) => (
            <div key={idx} className={cardStyles["course-card"]}>
              <div className={cardStyles["course-image"]}>
                <div className={cardStyles["hover-icon"]}>
                  <i className="fa-solid fa-plus"></i>
                  <span className={cardStyles["hover-text"]}>Register Course</span>
                </div>
                <i className={`fa-solid fa-turn-up ${cardStyles["top-right-icon"]}`}></i>
              </div>
              <div className={cardStyles["course-header"]}>
                <span className={cardStyles["course-tag"]}>{c.courseId}</span>
                <span className={cardStyles["semester"]}>Fall 2025</span>
              </div>
              
              
              {/* Conditional rendering for completed courses */}
              {label === "Completed" ? (
              <div className={cardStyles["course-completed-main"]}>
                <div className={cardStyles["course-grade"]}>
                  <div className={cardStyles["letter-grade-container"]}>
                    <span className={cardStyles["letter-grade"]}>{c.letterGrade}</span>
                  </div>
                  <div>
                    <span className={cardStyles["final-grade"]}>Final Grade</span>
                    <h3>{c.courseName}</h3> {/* Title placed under Final Grade */}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <h3>{c.courseName}</h3>
                <p className={cardStyles["course-subtitle"]}>{c.description}</p> {/* This will show only for non-completed courses */}
              </>
            )}


              {/* <div className={cardStyles["course-tags"]}>
                {c.majorsOffered?.map((major, idx) => (
                  <span key={idx} className={cardStyles["tag"]}>
                    <i className={`fa-solid ${major === "CMPE" ? "fa-microchip" : "fa-laptop-code"}`} /> {major === "CMPS" ? "CS" : "CE"}
                  </span>
                ))}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    );


    const categories = [
      { label: "Completed", icon: "fa-circle-check", data: completedCourses, key: "completed" },
      { label: "In Progress", icon: "fa-circle-dot", data: inProgressCourses, key: "in-progress" },
      { label: "Scheduled", icon: "fa-calendar-days", data: scheduledCourses, key: "scheduled" },
      { label: "Upcoming", icon: "fa-clock", data: upcomingCourses, key: "upcoming" }
    ];

    const categoryDescriptions = {
      completed: "Courses that have already been completed",
      "in-progress": "Courses being taken in the current semester",
      scheduled: "Courses you're registered for, but haven't started yet",
      upcoming: "Courses you need to complete before graduating"
    };

    return (
      <main className={styles["learning-path"]}>
        <header className={styles["learning-path-header"]}>
          <div className={styles["learning-path-top-header"]}>
            <h1 className={styles["learning-path-title"]}>Track Your Learning Path</h1>
            <span className={styles["major-tag"]}>BSc. Computer Science</span>
          </div>
          <p className={styles["learning-path-description"]}>Monitor your course progress and stay on track with your degree.</p>
        </header>

        <div className={styles["learning-container"]} ref={containerRef}>
          {categories.map(c =>
            filteredCategory(c.data, c.label, c.icon, c.key)
          )}
        </div>

        <div className={styles["mobile-nav"]}>
          <button onClick={() => setCurrentIndex(prev => Math.max(prev - 1, 0))}>
            <i className="fa-solid fa-arrow-left" />
          </button>
          <button onClick={() => setCurrentIndex(prev => Math.min(prev + 1, categories.length - 1))}>
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      </main>
    );
  }