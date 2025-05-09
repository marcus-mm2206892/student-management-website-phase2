"use client";

import styles from "@/app/styles/statistics.module.css";
import { useEffect, useState } from "react";
import { 
  getTop3MostEnrolledCoursesAction, 
  getAverageGPAByMajorAction, 
  getTop3CoursesWithMostFailsAction,
  getTop3InstructorsWithMostClassesAction,
  getSemesterCourseCountsByMajorAction,
  getTopStudentsByMajorGPAAction
} from "@/app/action/server-actions";

export default function StatisticsPage() {
  const [topCourses, setTopCourses] = useState([]);
  const [gpaByMajor, setGpaByMajor] = useState({ CMPS: "Loading...", CMPE: "Loading..." });
  const [mostFailedCourses, setMostFailedCourses] = useState([]);
  const [topInstructors, setTopInstructors] = useState([]);
  const [courseCounts, setCourseCounts] = useState({ csOnly: 0, ceOnly: 0, both: 0 });
  const [topStudents, setTopStudents] = useState({ CMPS: [], CMPE: [] });

  useEffect(() => {
    const fetchData = async () => {
      const [
        topCoursesRes,
        gpaMajorRes,
        failedCoursesRes,
        instructorsRes,
        courseCountsRes,
        topStudentsRes
      ] = await Promise.all([
        getTop3MostEnrolledCoursesAction(),
        getAverageGPAByMajorAction(),
        getTop3CoursesWithMostFailsAction(),
        getTop3InstructorsWithMostClassesAction(),
        getSemesterCourseCountsByMajorAction(),
        getTopStudentsByMajorGPAAction()
      ]);
  
      setTopCourses(topCoursesRes);
      setGpaByMajor(gpaMajorRes);
      setMostFailedCourses(failedCoursesRes);
      setTopInstructors(instructorsRes);
      setCourseCounts(courseCountsRes);
      setTopStudents(topStudentsRes);
    };
  
    fetchData();
  }, []);

  const stats = [
    {
      label: "Top 3 Most Popular Courses by Enrolled Students",
      value: (
        <>
          {topCourses?.map((course, idx) => (
            <div key={idx}>{course}</div>
          ))}
        </>
      ),
      icon: "fa-star"
    },
    {
      label: "CS Students Avg. Grade Point Average",
      value: gpaByMajor.CMPS,
      icon: "fa-laptop-code"
    },
    {
      label: "CE Students Avg. Grade Point Average",
      value: gpaByMajor.CMPE,
      icon: "fa-microchip"
    },
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
      icon: "fa-chalkboard-user"
    },
    {
      label: "Courses Offered This Semester",
      value: (
        <>
          <div>CS Only: {courseCounts.csOnly}</div>
          <div>CE Only: {courseCounts.ceOnly}</div>
          <div>Shared: {courseCounts.both}</div>
        </>
      ),
      icon: "fa-chalkboard"
    },
    {
      label: "Top 3 CS Students by GPA",
      value: (
        <>
          {topStudents?.CMPS?.map((s, idx) => (
            <div key={idx}>{`${s.name} (${s.gpa})`}</div>
          ))}
        </>
      ),
      icon: "fa-user-graduate"
    },
    {
      label: "Top 3 CE Students by GPA",
      value: (
        <>
          {topStudents?.CMPE?.map((s, idx) => (
            <div key={idx}>{`${s.name} (${s.gpa})`}</div>
          ))}
        </>
      ),
      icon: "fa-user-graduate"
    }
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
