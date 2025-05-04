"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/app/styles/admin-create-class.module.css";

export default function AdminCreateClassPage() {
  const [scheduleType, setScheduleType] = useState("Select Schedule Type");
  const [startTime, setStartTime] = useState("Select Time");
  const [endTime, setEndTime] = useState("Select Time");
  const [course, setCourse] = useState("Select Course");
  const [campus, setCampus] = useState("Select Campus");
  const [section, setSection] = useState("");
  const [maxStudents, setMaxStudents] = useState("");
  const [selectedInstructors, setSelectedInstructors] = useState([]);

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const handleInstructorToggle = (instructor) => {
    setSelectedInstructors((prev) =>
      prev.includes(instructor)
        ? prev.filter((ins) => ins !== instructor)
        : [...prev, instructor]
    );
  };

  const schedules = ["Sunday, Tuesday, Thursday", "Monday, Wednesday"];
  const times = [
    "08:00 AM", "09:00 AM", "10:00 AM",
    "11:00 AM", "12:00 PM", "01:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM",
  ];
  const courses = ["CMPS350", "CMPE202", "CMPS303"];
  const campuses = ["Male", "Female"];
  const instructors = ["Dr. Yasmin R.", "Dr. John Doe", "Dr. Aisha M."];

  return (
    <main className={styles.admin_create}>
      <header className={styles["create-header"]}>
        <h1>Create a Class</h1>
        <p className={styles["view-schedule-description"]}>
          Create a class of a course of your choice this semester.
        </p>
      </header>

      <section className={styles.create}>
        <form className={styles["create-class-form"]}>
          <div className={styles["input-div-container"]}>
            <div className={styles["field-div"]}>
              <h1>Create New Class</h1>
              <p>Please fill in all required fields to create a new class.</p>
            </div>

            <div className={`${styles["field-div"]} ${styles.schedule}`}>
              <div className={styles["schedule-left-div"]}>
                <label>Schedule</label>
                <div className={styles["dropdown-div"]}>
                  <div className={styles.dropdown}>
                    <div
                      className={styles["dropdown-toggle"]}
                      onClick={() => toggleDropdown("schedule")}
                    >
                      <span className={styles.selectedOption}>{scheduleType}</span>
                      <i className="fas fa-chevron-down"></i>
                    </div>
                    {openDropdown === "schedule" && (
                      <div className={styles["dropdown-menu"]}>
                        {schedules.map((s, i) => (
                          <div key={i} onClick={() => {
                            setScheduleType(s);
                            toggleDropdown("schedule");
                          }}>
                            <i className="fas fa-calendar-alt"></i> {s}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles["schedule-middle-div"]}>
                <label>Start Time</label>
                <div className={styles.dropdown}>
                  <div
                    className={styles["dropdown-toggle"]}
                    onClick={() => toggleDropdown("startTime")}
                  >
                    <span className={styles.selectedOption}>{startTime}</span>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                  {openDropdown === "startTime" && (
                    <div className={styles["dropdown-menu"]}>
                      {times.map((t, i) => (
                        <div key={i} onClick={() => {
                          setStartTime(t);
                          toggleDropdown("startTime");
                        }}>{t}</div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className={styles["schedule-right-div"]}>
                <label>End Time</label>
                <div className={styles.dropdown}>
                  <div
                    className={styles["dropdown-toggle"]}
                    onClick={() => toggleDropdown("endTime")}
                  >
                    <span className={styles.selectedOption}>{endTime}</span>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                  {openDropdown === "endTime" && (
                    <div className={styles["dropdown-menu"]}>
                      {times.map((t, i) => (
                        <div key={i} onClick={() => {
                          setEndTime(t);
                          toggleDropdown("endTime");
                        }}>{t}</div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className={styles["field-div"]}>
              <label>Select Course</label>
              <div className={styles["dropdown-div"]}>
                <div className={styles.dropdown}>
                  <div
                    className={styles["dropdown-toggle"]}
                    onClick={() => toggleDropdown("course")}
                  >
                    <span className={styles.selectedOption}>{course}</span>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                  {openDropdown === "course" && (
                    <div className={styles["dropdown-menu"]}>
                      {courses.map((c, i) => (
                        <div key={i} onClick={() => {
                          setCourse(c);
                          toggleDropdown("course");
                        }}>{c}</div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className={styles["field-div"]}>
              <label>Instructor(s)</label>
              <div className={styles.dropdown}>
                <div
                  className={styles["dropdown-toggle"]}
                  onClick={() => toggleDropdown("instructors")}
                >
                  <span className={styles.selectedOption}>Select Instructor(s)</span>
                  <i className="fas fa-chevron-down"></i>
                </div>
                {openDropdown === "instructors" && (
                  <div className={styles["dropdown-menu"]}>
                    {instructors.map((i, idx) => (
                      <div key={idx} onClick={() => handleInstructorToggle(i)}>
                        {selectedInstructors.includes(i) ? "✅" : ""} {i}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className={styles["tag-container"]}>
                {selectedInstructors.map((ins, i) => (
                  <div key={i} className={styles.tag}>
                    {ins}
                    <button type="button" onClick={() => handleInstructorToggle(ins)}>×</button>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles["field-div"]}>
              <label>Max Students</label>
              <input
                type="number"
                className={styles["input-field"]}
                placeholder="e.g. 30"
                value={maxStudents}
                onChange={(e) => setMaxStudents(e.target.value)}
              />
            </div>

            <div className={styles["field-div"]}>
              <label>Campus</label>
              <div className={styles["dropdown-div"]}>
                <div className={styles.dropdown}>
                  <div
                    className={styles["dropdown-toggle"]}
                    onClick={() => toggleDropdown("campus")}
                  >
                    <span className={styles.selectedOption}>{campus}</span>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                  {openDropdown === "campus" && (
                    <div className={styles["dropdown-menu"]}>
                      {campuses.map((c, i) => (
                        <div key={i} onClick={() => {
                          setCampus(c);
                          toggleDropdown("campus");
                        }}>{c}</div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className={styles["field-div"]}>
              <label>Section</label>
              <input
                type="text"
                className={styles["input-field"]}
                placeholder="e.g. L01"
                value={section}
                readOnly
              />
            </div>
          </div>

          <div className={styles["field-div"]}>
              <button type="submit" className={styles["input-submit"]}>
                Create Class
              </button>
            </div>
        </form>
      </section>
    </main>
  );
}
