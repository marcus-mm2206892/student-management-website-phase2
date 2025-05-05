"use client";

import { useState } from "react";
import styles from "@/app/styles/admin-view-schedule.module.css";
import cardStyles from "@/app/styles/course-card-view.module.css";
import NoneSelected from "@/app/components/NoneSelected";

export default function AdminViewSchedule() {
  const [selectedCourse, setSelectedCourse] = useState("Select Course");
  const [selectedCRN, setSelectedCRN] = useState("Select Class");
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const courses = [
    { id: "CMPS350", title: "Web Development Fundamentals" },
    { id: "CMPE202", title: "Computer Organization" },
    { id: "ELEC101", title: "Intro to Circuits" }
  ];

  const classes = [
    { crn: "25501", section: "L01", schedule: "MW", time: "09:00 - 10:00", instructor: "Dr. John Smith" },
    { crn: "25502", section: "L02", schedule: "STT", time: "10:30 - 12:00", instructor: "Prof. Jane Lee" },
    { crn: "25503", section: "L03", schedule: "MW", time: "14:00 - 15:30", instructor: "Dr. Ahmed Zaki" }
  ];

  const selectedClass = classes.find(cls => `CRN ${cls.crn}` === selectedCRN);

  const toggleDropdown = (menu) => {
    setDropdownOpen(prev => (prev === menu ? null : menu));
  };

  const courseSelected = selectedCourse !== "Select Course";
  const classSelected = selectedCRN !== "Select Class" && selectedClass;

  return (
    <main className={styles["view-schedule"]}>
      <header className={styles["view-schedule-header"]}>
        <div className={styles["view-schedule-top-header"]}>
          <h1 className={styles["view-schedule-title"]}>View Registered Class Schedules</h1>
          <div className={styles["dropdown-div"]}>
            <span className={styles["dropdown-text"]}>Course</span>
            <div className={styles.dropdown}>
              <div className={styles["dropdown-toggle"]} onClick={() => toggleDropdown("course")}>
                <span>{selectedCourse}</span>
                <i className="fas fa-chevron-down"></i>
              </div>
              {dropdownOpen === "course" && (
                <div className={styles["dropdown-menu"]}>
                  {courses.map((course, i) => (
                    <div key={i} onClick={() => {
                      setSelectedCourse(course.id);
                      setSelectedCRN("Select Class"); // Reset class when course changes
                      toggleDropdown(null);
                    }}>
                      {course.id}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <p className={styles["view-schedule-description"]}>
          Monitor all registered class schedules of all courses in the university.
        </p>
      </header>

      <div className={styles["view-schedule-container"]}>
        {courseSelected && (
          <div className={styles["modal-header"]}>
            {classSelected ? (
              <div className={styles["course-title-div"]}>
                <h2 className={styles["course-title"]}>
                  {courses.find(c => c.id === selectedCourse)?.title || "Course Title Unavailable"}
                </h2>
                <div className={styles["course-tags-div"]}>
                  <span className={cardStyles["course-tag"]}>{selectedCourse}</span>
                  <span className={cardStyles["campus-tag"]}>Male</span>
                  <span className={cardStyles["section-tag"]}>{selectedClass.crn}</span>
                  <span className={cardStyles["section-tag"]}>{selectedClass.section}</span>
                </div>
              </div>
            ) : (
              <h2 className={styles["course-title"]}>Select a Class</h2>
            )}

            <div className={styles["dropdown-div"]}>
              <span className={styles["dropdown-text"]}>
                <i className="fas fa-info-circle"></i>
              </span>
              <div className={styles.dropdown}>
                <div className={styles["dropdown-toggle"]} onClick={() => toggleDropdown("crn")}>
                  <span>{selectedCRN}</span>
                  <i className="fas fa-chevron-down"></i>
                </div>
                {dropdownOpen === "crn" && (
                  <div className={styles["dropdown-menu"]}>
                    {classes.map((cls, i) => (
                      <div key={i} onClick={() => {
                        setSelectedCRN(`CRN ${cls.crn}`);
                        toggleDropdown(null);
                      }}>
                        CRN {cls.crn}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}


        {!courseSelected ? (
          <NoneSelected
            title="No course selected"
            subtitle="Please select a course and CRN to view the schedule."
          />
        ) : !classSelected ? (
          <NoneSelected
            title="No class selected"
            subtitle="Please select a class to view the schedule."
          />
        ) : (
          <div className={styles["modal-content"]}>
            <div className={styles["content-section"]} id="Class Schedule">
              <div className={styles["content-info-div"] + " " + styles["instructors-container"]}>
                <h3 className={styles["content-info-attribute"]}>Course Instructors</h3>
                <div className={styles["instructors-list"]}>
                  <div className={styles["instructor"]}>
                    <i className="fa-solid fa-user"></i>
                    <div className={styles["instructor-info"]}>
                      <span className={styles["instructor-name"]}>{selectedClass.instructor}</span>
                      <span className={styles["instructor-description"]}>Department of Computer Science</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles["content-info-div"] + " " + styles["class-schedule-container"]}>
                <div className={styles["class-schedule"]}>
                  <h3 className={styles["content-info-attribute"]}>Class Schedule</h3>
                  <div className={styles["schedule"]}>
                    <i className="fa-solid fa-calendar-days"></i>
                    <div className={styles["schedule-info"]}>
                      <div className={styles["weekdays"]}>
                        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                          <div
                            key={i}
                            className={`${styles.day} ${selectedClass.schedule.includes(d) ? styles.active : ""}`}
                          >
                            {d}
                          </div>
                        ))}
                      </div>
                      <p className={styles["date-range"]}>01/19/2025 - 05/08/2025</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles["content-info-div"] + " " + styles["class-schedule-container"]}>
                <div className={styles["class-location"]}>
                  <h3 className={styles["content-info-attribute"]}>Class Timings</h3>
                  <div className={styles["location"]}>
                    <i className="fa-solid fa-clock"></i>
                    <div className={styles["location-info"]}>
                      <p className={styles["time"]}>{selectedClass.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
