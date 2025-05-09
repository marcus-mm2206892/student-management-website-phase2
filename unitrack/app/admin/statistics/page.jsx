"use client";

import styles from "@/app/styles/statistics.module.css";
import { useEffect, useState } from "react";
import { 
  getTop3MostEnrolledCoursesAction, 
  getAverageGPAByMajorAction, 
  getTop3CoursesWithMostFailsAction,
  getTop3InstructorsWithMostClassesAction
} from "@/app/action/server-actions"

export default function StatisticsPage() {
  const [topCourses, setTopCourses] = useState([]);
  const [gpaByMajor, setGpaByMajor] = useState({ CMPS: "Loading...", CMPE: "Loading..." });
  const [mostFailedCourses, setMostFailedCourses] = useState([]);
  const [topInstructors, setTopInstructors] = useState([]);





  useEffect(() => {
    const fetchData = async () => {
      const [
        topCoursesRes,
        gpaMajorRes,
        failedCoursesRes,
        instructorsRes
      ] = await Promise.all([
        getTop3MostEnrolledCoursesAction(),
        getAverageGPAByMajorAction(),
        getTop3CoursesWithMostFailsAction(),
        getTop3InstructorsWithMostClassesAction(), // call the action
      ]);
  
      setTopCourses(topCoursesRes);
      setGpaByMajor(gpaMajorRes);
      setMostFailedCourses(failedCoursesRes);
      setTopInstructors(instructorsRes);
    };
  
    fetchData();
  }, []);
  
  
  

  const stats = [
    { label: "Top 3 Most Popular Courses by Enrolled Students", 
      value: (
        <>
          {topCourses?.map((course, idx) => (
            <div key={idx}>{course}</div>
          ))}
        </>
      ), 
      icon: "fa-star" },
    { label: "CS Students Avg. Grade Point Average", value: gpaByMajor.CMPS, icon: "fa-laptop-code" },
    { label: "CE Students Avg. Grade Point Average", value: gpaByMajor.CMPE, icon: "fa-microchip" },
    {
      label: "Courses With Most F Grades in History",
      value: (
        <>
          {mostFailedCourses?.map((course, idx) => (
            <div key={idx}>{course}</div>
          ))}
        </>
      ),
      icon: "fa-triangle-exclamation"
    },
    {
      label: "Top 3 Instructors by Teaching Load",
      value: (
        <>
          {topInstructors?.map((instructor, idx) => (
            <div key={idx}>{instructor}</div>
          ))}
        </>
      ),
      icon: "fa-chalkboard-user",
    },
  ];
  

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles["statistics-top-header"]}>
          <h1 className={styles["statistics-title"]}>University Statistics Dashboard</h1>
        </div>
        <p className={styles["statistics-description"]}>
          A real-time overview of academic trends, course performance, and student engagement.
        </p>
      </header>

      <section className={styles.statsContainer}>
        <div className={styles.grid}>
          {stats.map((stat, idx) => (
            <div className={styles.card} key={idx}>
              <i className={`fa-solid ${stat.icon}`} style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: "var(--clr-contrast-a20)" }}></i>
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
