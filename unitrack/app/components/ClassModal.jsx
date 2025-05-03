"use client";
import { useEffect, useRef, useState } from "react";
import styles from "@/app/styles/class-modal.module.css";

export default function ClassModal() {
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Class Details");

  const dummyClass = {
    classId: "25501",
    section: "L01",
    semester: "Spring 2025",
    instructionalMethods: "English",
    campus: "Male",
    enrollmentActual: 7,
    enrollmentMaximum: 35,
    schedule: {
      startTime: "09:00",
      endTime: "10:00",
      scheduleType: "MW"
    },
    instructors: [
      {
        name: "John Doe",
        department: "Computer Science",
        college: "Engineering"
      }
    ]
  };

  const dummyCourse = {
    courseId: "CMPS303",
    courseName: "Data Structures",
    subject: "Computer Science",
    creditHours: 4,
    description: "Study of data structures and algorithms.",
    courseImage: "https://miro.medium.com/v2/resize:fit:1400/1*J38nYZU7gzu-4lQmtjlSUw.jpeg",
    prerequisites: [
      {
        courseId: "CMPS251",
        minGrade: "D"
      }
    ]
  };

  const to12Hour = (timeStr) => {
    const [hour, minute] = timeStr.split(":").map(Number);
    const ampm = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minute.toString().padStart(2, "0")} ${ampm}`;
  };

  const generateWeekdaySpans = (type) => {
    const days = ["S", "M", "T", "W", "R", "F", "A"];
    return days.map((day, index) => (
      <span
        key={index}
        className={`${styles.day} ${type.includes(day) ? styles.active : ""}`}
      >
        {day}
      </span>
    ));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isOpen) {
    return <button onClick={() => setIsOpen(true)}>Open Class Modal</button>;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} ref={modalRef}>
        <button className={styles.close} onClick={() => setIsOpen(false)}>
          &times;
        </button>

        <div className={styles.header}>
          <h2 className={styles.courseTitle}>{dummyCourse.courseName}</h2>
          <div className={styles.tags}>
            <span className={styles.courseTag}>{dummyCourse.courseId}</span>
            <span className={styles.campusTag}>{dummyClass.campus}</span>
            <span className={styles.crnTag}>CRN {dummyClass.classId}</span>
            <span className={styles.sectionTag}>Section {dummyClass.section}</span>
          </div>
          <div className={styles.dropdown}>
            <div className={styles.dropdownToggle}>
              <span>{selectedTab}</span>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className={styles.dropdownMenu}>
              {["Class Details", "Course Description", "Instructors", "Class Schedule", "Enrollment", "Eligibility"].map(tab => (
                <div key={tab} onClick={() => setSelectedTab(tab)}>{tab}</div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.content}>
          {selectedTab === "Class Details" && (
            <>
              <h3>Associated Term</h3>
              <p>{dummyClass.semester}</p>
              <h3>Campus</h3>
              <p>{dummyClass.campus}</p>
              <h3>Instructional Method</h3>
              <p>{dummyClass.instructionalMethods}</p>
              <h3>Subject</h3>
              <p>{dummyCourse.subject}</p>
              <h3>Credit Hours</h3>
              <p>{dummyCourse.creditHours} credit hours</p>
            </>
          )}

          {selectedTab === "Course Description" && (
            <>
              <div className={styles.courseImage} style={{ backgroundImage: `url(${dummyCourse.courseImage})` }}></div>
              <h3>What you'll learn</h3>
              <p>{dummyCourse.description}</p>
              <h3>Course Syllabus</h3>
              <p><i className="fa-solid fa-file-pdf"></i> Course-Syllabus.pdf</p>
            </>
          )}

          {selectedTab === "Instructors" && (
            <>
              <h3>Course Instructors</h3>
              {dummyClass.instructors.map((inst, i) => (
                <div key={i} className={styles.instructorCard}>
                  <i className="fa-solid fa-user"></i>
                  <div>
                    <p className={styles.instructorName}>{inst.name}</p>
                    <p className={styles.instructorDesc}>{inst.department} Department, College of {inst.college}</p>
                  </div>
                </div>
              ))}
            </>
          )}

          {selectedTab === "Class Schedule" && (
            <>
              <h3>Weekdays</h3>
              <div className={styles.weekdays}>{generateWeekdaySpans(dummyClass.schedule.scheduleType)}</div>
              <h3>Timings</h3>
              <p>{to12Hour(dummyClass.schedule.startTime)} - {to12Hour(dummyClass.schedule.endTime)}</p>
            </>
          )}

          {selectedTab === "Enrollment" && (
            <>
              <h3>Enrollment Actual</h3>
              <p>{dummyClass.enrollmentActual}</p>
              <h3>Enrollment Maximum</h3>
              <p>{dummyClass.enrollmentMaximum}</p>
              <h3>Seats Available</h3>
              <p>{dummyClass.enrollmentMaximum - dummyClass.enrollmentActual}</p>
            </>
          )}

          {selectedTab === "Eligibility" && (
            <>
              <h3>Prerequisite Courses</h3>
              {dummyCourse.prerequisites.length > 0 ? dummyCourse.prerequisites.map((p, i) => (
                <div key={i} className={styles.prerequisiteCard}>
                  <span className={styles.courseTag}>{p.courseId}</span>
                  <span className={styles.letterGrade}>Minimum Grade: {p.minGrade}</span>
                </div>
              )) : (
                <p>No prerequisite courses required for this class.</p>
              )}
            </>
          )}
        </div>

        <button className={styles.registerBtn}>Register Class</button>
      </div>
    </div>
  );
}
