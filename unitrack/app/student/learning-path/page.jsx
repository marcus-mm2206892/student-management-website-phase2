"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/app/styles/learningpath.module.css";
import cardStyles from "@/app/styles/course-card-view.module.css";

import {
  getAllCoursesAction,
  getCompletedCoursesByStudentEmailAction,
  getRegisteredClassRecordsByStudentEmail,
  getMajorCourseIdsByEmailAction,
  getStudentByEmailAction
} from "@/app/action/server-actions";

export default function LearningPath() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [user, setUser] = useState(null);
  const [student, setStudent] = useState(null);
  const [courses, setCourses] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);
  const [inProgressCourses, setInProgressCourses] = useState([]);
  const [scheduledCourses, setScheduledCourses] = useState([]);
  const [upcomingCourses, setUpcomingCourses] = useState([]);

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

  useEffect(() => {
    async function loadAllCourseData(email) {
      const [allCourses, completed, registered, required] = await Promise.all([
        getAllCoursesAction(),
        getCompletedCoursesByStudentEmailAction(email),
        getRegisteredClassRecordsByStudentEmail(email),
        getMajorCourseIdsByEmailAction(email),
      ]);

      setCourses(allCourses);

      const completedCoursesWithInfo = allCourses
        .filter(course => completed.some(c => c.courseId === course.courseId))
        .map(course => {
          const match = completed.find(c => c.courseId === course.courseId);
          return {
            courseId: course.courseId,
            courseName: course.courseName,
            description: course.description,
            letterGrade: match.letterGrade,
          };
        });
      setCompletedCourses(completedCoursesWithInfo);

      const completedIds = completed.map(c => c.courseId);

      const inProgressIds = registered
        .filter(r => r.classStatus === "open" && !completedIds.includes(r.courseId))
        .map(r => r.courseId);

      const scheduledIds = registered
        .filter(r => r.classStatus === "pending" && !completedIds.includes(r.courseId))
        .map(r => r.courseId);

      const inProgressCoursesWithInfo = allCourses
        .filter(c => inProgressIds.includes(c.courseId))
        .map(c => allCourses.find(course => course.courseId === c.courseId))
      setInProgressCourses(inProgressCoursesWithInfo);

      const scheduledCoursesWithInfo = allCourses
        .filter(c => scheduledIds.includes(c.courseId))
        .map(c => allCourses.find(course => course.courseId === c.courseId))
      setScheduledCourses(scheduledCoursesWithInfo);

      const remainingIds = required.filter(
        id => !completedIds.includes(id) && !inProgressIds.includes(id) && !scheduledIds.includes(id)
      );

      const upcomingCoursesWithInfo = allCourses
        .filter(c => remainingIds.includes(c.courseId))
        .map(c => allCourses.find(course => course.courseId === c.courseId))
      setUpcomingCourses(upcomingCoursesWithInfo);
    }

    if (user?.email) {
      loadAllCourseData(user.email);
    }
  }, [user]);

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
      style={{
        display:
          currentIndex === -1 ||
          currentIndex === categories.findIndex(c => c.label === label)
            ? "flex"
            : "none",
      }}
    >
      <div className={styles["category-header"]}>
        <h2>
          <i className={`fa-solid ${icon}`} /> {label}
          <span className={styles["tracking-number"]}>
            {courses.length} {label.toLowerCase()}
          </span>
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

            {label === "Completed" ? (
              <div className={cardStyles["course-completed-main"]}>
                <div className={cardStyles["learning-path-course-grade"]}>
                  <div className={cardStyles["letter-grade-container"]}>
                    <span className={cardStyles["letter-grade"]}>{c.letterGrade}</span>
                  </div>
                  <div>
                    <span className={cardStyles["final-grade"]}>Final Grade</span>
                    <h3>{c.courseName}</h3>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <h3>{c.courseName}</h3>
                <p className={cardStyles["course-subtitle"]}>{c.description}</p>
              </>
            )}

            <div className={cardStyles["course-tags"]}>
              {c.CourseMajorOfferings?.map((major, idx) => (
                <span key={idx} className={cardStyles["tag"]}>
                  <i className={`fa-solid ${major.majorId === "CMPE" ? "fa-microchip" : "fa-laptop-code"}`} />{" "}
                  {major.majorId === "CMPS" ? "CS" : "CE"}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );

  const categories = [
    { label: "Completed", icon: "fa-circle-check", data: completedCourses, key: "completed" },
    { label: "In Progress", icon: "fa-circle-dot", data: inProgressCourses, key: "in-progress" },
    { label: "Scheduled", icon: "fa-calendar-days", data: scheduledCourses, key: "scheduled" },
    { label: "Upcoming", icon: "fa-clock", data: upcomingCourses, key: "upcoming" },
  ];

  const categoryDescriptions = {
    completed: "Courses that have already been completed",
    "in-progress": "Courses being taken in the current semester",
    scheduled: "Courses you're registered for, but haven't started yet",
    upcoming: "Courses you need to complete before graduating",
  };

  if (!user || !student) return <p>Loading...</p>;

  return (
    <main className={styles["learning-path"]}>
      <header className={styles["learning-path-header"]}>
        <div className={styles["learning-path-top-header"]}>
          <h1 className={styles["learning-path-title"]}>Track Your Learning Path</h1>
          <span className={styles["major-tag"]}>
            BSc. {student.majorId === "CMPS" ? "Computer Science" : "Computer Engineering"}
          </span>
        </div>
        <p className={styles["learning-path-description"]}>
          Monitor your course progress and stay on track with your degree.
        </p>
      </header>

      <div className={styles["learning-container"]} ref={containerRef}>
        {categories.map(c => filteredCategory(c.data, c.label, c.icon, c.key))}
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
