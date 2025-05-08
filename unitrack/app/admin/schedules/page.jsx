"use client";

import { useEffect, useState } from "react";
import styles from "@/app/styles/admin-view-schedule.module.css";
import cardStyles from "@/app/styles/course-card-view.module.css";
import NoneSelected from "@/app/components/NoneSelected";

import {
  getAllCourseIdsAction,
  getClassIdsByCourseAction,
  getClassDetailsByIdAction,
} from "@/app/action/server-actions";

export default function AdminViewSchedule() {
  const [courseIds, setCourseIds] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("Select Course");
  const [classIds, setClassIds] = useState([]);
  const [selectedClassId, setSelectedClassId] = useState("Select Class");
  const [selectedClassData, setSelectedClassData] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (name) => {
    setDropdownOpen((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    async function loadCourses() {
      const ids = await getAllCourseIdsAction();
      setCourseIds(ids);
    }
    loadCourses();
  }, []);

  useEffect(() => {
    if (selectedCourse !== "Select Course") {
      async function loadClasses() {
        const ids = await getClassIdsByCourseAction(selectedCourse);
        setClassIds(ids);
        setSelectedClassId("Select Class");
        setSelectedClassData(null);
      }
      loadClasses();
    }
  }, [selectedCourse]);

  useEffect(() => {
    if (selectedClassId !== "Select Class") {
      async function loadClassDetails() {
        const data = await getClassDetailsByIdAction(selectedClassId);
        setSelectedClassData(data);
      }
      loadClassDetails();
    }
  }, [selectedClassId]);

  const courseSelected = selectedCourse !== "Select Course";
  const classSelected = selectedClassId !== "Select Class" && selectedClassData;

  return (
    <main className={styles["view-schedule"]}>
      <header className={styles["view-schedule-header"]}>
        <div className={styles["view-schedule-top-header"]}>
          <h1 className={styles["view-schedule-title"]}>View Registered Class Schedules</h1>

          {/* Course Dropdown */}
          <div className={styles["dropdown-div"]}>
            <span className={styles["dropdown-text"]}>Course</span>
            <div className={styles.dropdown}>
              <div className={styles["dropdown-toggle"]} onClick={() => toggleDropdown("course")}>
                <span>{selectedCourse}</span>
                <i className="fas fa-chevron-down"></i>
              </div>
              {dropdownOpen === "course" && (
                <div className={styles["dropdown-menu"]}>
                  {courseIds.map((id) => (
                    <div key={id} onClick={() => { setSelectedCourse(id); toggleDropdown(null); }}>
                      {id}
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
            <h2 className={styles["course-title"]}>
              {classSelected ? selectedClassData.courseId : "Select a Class"}
            </h2>

            <div className={styles["dropdown-div"]}>
              <span className={styles["dropdown-text"]}><i className="fas fa-info-circle"></i></span>
              <div className={styles.dropdown}>
                <div className={styles["dropdown-toggle"]} onClick={() => toggleDropdown("crn")}>
                  <span>{selectedClassId}</span>
                  <i className="fas fa-chevron-down"></i>
                </div>
                {dropdownOpen === "crn" && (
                  <div className={styles["dropdown-menu"]}>
                    {classIds.map((id) => (
                      <div key={id} onClick={() => { setSelectedClassId(id); toggleDropdown(null); }}>
                        CRN {id}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {!courseSelected ? (
          <NoneSelected title="No course selected" subtitle="Please select a course and CRN to view the schedule." />
        ) : !classSelected ? (
          <NoneSelected title="No class selected" subtitle="Please select a class to view the schedule." />
        ) : (
          <div className={styles["modal-content"]}>
            <div className={styles["content-section"]}>
              <div className={styles["course-title-div"]}>
                <h2 className={styles["course-title"]}>{selectedClassData.courseId}</h2>
                <div className={styles["course-tags-div"]}>
                  <span className={cardStyles["course-tag"]}>{selectedClassData.courseId}</span>
                  <span className={cardStyles["campus-tag"]}>{selectedClassData.campus}</span>
                  <span className={cardStyles["section-tag"]}>{selectedClassData.crn}</span>
                  <span className={cardStyles["section-tag"]}>{selectedClassData.section}</span>
                </div>
              </div>

              <div className={styles["content-info-div"] + " " + styles["instructors-container"]}>
                <h3 className={styles["content-info-attribute"]}>Course Instructors</h3>
                <div className={styles["instructors-list"]}>
                  {selectedClassData.instructorIds.map((id, i) => (
                    <div className={styles["instructor"]} key={i}>
                      <i className="fa-solid fa-user"></i>
                      <div className={styles["instructor-info"]}>
                        <span className={styles["instructor-name"]}>Instructor ID: {id}</span>
                        <span className={styles["instructor-description"]}>Department of ???</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles["content-info-div"] + " " + styles["class-schedule-container"]}>
                <div className={styles["class-schedule"]}>
                  <h3 className={styles["content-info-attribute"]}>Class Schedule</h3>
                  <div className={styles["schedule"]}>
                    <i className="fa-solid fa-calendar-days"></i>
                    <div className={styles["schedule-info"]}>
                      <div className={styles["weekdays"]}>
                        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                          <div
                            key={i}
                            className={`${styles.day} ${selectedClassData.schedule.includes(day) ? styles.active : ""}`}
                          >
                            {day}
                          </div>
                        ))}
                      </div>
                      <p className={styles["date-range"]}>
                        {selectedClassData.startTime} - {selectedClassData.endTime}
                      </p>
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
