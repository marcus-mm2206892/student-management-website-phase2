"use client";

import styles from "@/app/styles/statistics.module.css";
import { useEffect, useState } from "react";
import {
  getTop3MostEnrolledCoursesAction,
  getAverageGPAByMajorAction,
  getTop3CoursesWithMostAsAction,
  getTop3CoursesWithMostFailsAction,
  getTop3InstructorsWithMostClassesAction,
  getSemesterCourseCountsByMajorAction,
  getTopStudentsByMajorGPAAction,
  getStudentGenderBreakdownByMajorAction,
  getTopSubjectsByInstructorCountAction,
  getTop3WaitlistedClassesAction,
  getTop3CoursesWithMostOpenSectionsAction
} from "@/app/action/server-actions";

export default function StatisticsPage() {
  const [topCourses, setTopCourses] = useState([]);
  const [gpaByMajor, setGpaByMajor] = useState({ CMPS: "Loading...", CMPE: "Loading..." });
  const [mostAsCourses, setMostAsCourses] = useState([]);
  const [mostFailedCourses, setMostFailedCourses] = useState([]);
  const [topInstructors, setTopInstructors] = useState([]);
  const [courseCounts, setCourseCounts] = useState({ csOnly: 0, ceOnly: 0, both: 0 });
  const [topStudents, setTopStudents] = useState({ CMPS: [], CMPE: [] });
  const [genderCounts, setGenderCounts] = useState({ csMale: 0, csFemale: 0, ceMale: 0, ceFemale: 0 });
  const [topSubjects, setTopSubjects] = useState([]);
  const [waitlistedClasses, setWaitlistedClasses] = useState([]);
  const [topOpenCourses, setTopOpenCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [
        topCoursesRes,
        gpaMajorRes,
        asCoursesRes,
        failedCoursesRes,
        instructorsRes,
        courseCountsRes,
        topStudentsRes,
        genderCountsRes,
        topSubjectsRes,
        waitlistedRes,
        topOpenCoursesRes
      ] = await Promise.all([
        getTop3MostEnrolledCoursesAction(),
        getAverageGPAByMajorAction(),
        getTop3CoursesWithMostAsAction(),
        getTop3CoursesWithMostFailsAction(),
        getTop3InstructorsWithMostClassesAction(),
        getSemesterCourseCountsByMajorAction(),
        getTopStudentsByMajorGPAAction(),
        getStudentGenderBreakdownByMajorAction(),
        getTopSubjectsByInstructorCountAction(),
        getTop3WaitlistedClassesAction(),
        getTop3CoursesWithMostOpenSectionsAction()
      ]);
      
      setTopCourses(topCoursesRes);
      setGpaByMajor(gpaMajorRes);
      setMostAsCourses(asCoursesRes);
      setMostFailedCourses(failedCoursesRes);
      setTopInstructors(instructorsRes);
      setCourseCounts(courseCountsRes);
      setTopStudents(topStudentsRes);
      setGenderCounts(genderCountsRes);
      setTopSubjects(topSubjectsRes);
      setWaitlistedClasses(waitlistedRes);
      setTopOpenCourses(topOpenCoursesRes);
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
      label: "Average Grade Point Average",
      value: (
        <>
          CS: {gpaByMajor.CMPS} <br />
          CE: {gpaByMajor.CMPE}
        </>
      ),
      icon: "fa-graduation-cap"
    },
    {
      label: "Courses With Most A Grades",
      value: (
        <>
          {mostAsCourses?.map((course, idx) => (
            <div key={idx}>{course}</div>
          ))}
        </>
      ),
      icon: "fa-trophy"
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
    },
    {
      label: "Gender Breakdown by Major",
      value: (
        <>
          <div>CS Male: {genderCounts.csMale}, CS Female {genderCounts.csFemale}</div>
          <div>CE Male: {genderCounts.ceMale}, CE Female: {genderCounts.ceFemale}</div>
        </>
      ),
      icon: "fa-venus-mars"
    },
    {
      label: "Top 3 Instructor Expertise Areas",
      value: (
        <>
          {topSubjects?.map((subject, idx) => (
            <div key={idx}>{subject}</div>
          ))}
        </>
      ),
      icon: "fa-lightbulb"
    },
    {
      label: "Top 3 Classes by Waitlisted Students",
      value: (
        <>
          {waitlistedClasses?.map((cls, idx) => (
            <div key={idx}>{cls}</div>
          ))}
        </>
      ),
      icon: "fa-hourglass-half"
    },
    {
      label: "Top 3 Courses With Most Open Sections",
      value: (
        <>
          {topOpenCourses?.map((course, idx) => (
            <div key={idx}>{course}</div>
          ))}
        </>
      ),
      icon: "fa-door-open"
    }
  ];

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles["statistics-top-header"]}>
          <h1 className={styles["statistics-title"]}>University Statistics Dashboard</h1>
        </div>
        <p className={styles["statistics-description"]}>
          An overview of academic trends, course performance, and instructor data.
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
