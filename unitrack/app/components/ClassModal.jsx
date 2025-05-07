"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/app/styles/class-modal.module.css";
import { getUserByEmailAction } from "../action/server-actions";

export default function ClassModal({ cls, course, isVisible, onClose }) {
  const [userRole, setUserRole] = useState("");
  const modalRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState("Class Details");
  const [instructors, setInstructors] = useState([]);

  const to12Hour = (timeStr) => {
    const [hour, minute] = timeStr.split(":").map(Number);
    const ampm = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minute.toString().padStart(2, "0")} ${ampm}`;
  };

  const generateWeekdaySpans = (type) => {
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    return days.map((day, index) => (
      <span key={index} className={`${styles.day} ${type.includes(day) ? styles.active : ""}`}>
        {day}
      </span>
    ));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    // Load user role from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        setUserRole(parsed.role?.toLowerCase() || "");
      } catch (e) {
        console.error("Invalid user JSON in localStorage");
      }
    }
  
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    const fetchInstructors = async () => {
      if (!cls.instructors?.length) return;
  
      try {
        const results = await Promise.all(
          cls.instructors.map(async (inst) => {
            const user = await getUserByEmailAction(inst.email);
            return { ...inst, ...user }; // Combine dummy info with real user data
          })
        );
        setInstructors(results);
      } catch (error) {
        console.error("Error fetching instructor data:", error);
      }
    };
  
    fetchInstructors();
  }, [cls.instructors]);
  

  if (!isVisible) return null;

  return (
    <div className={`${styles.modal} ${isVisible ? styles.show : ""}`}>
      <div className={styles["modal-popup"]} ref={modalRef}>
        <button className={styles["close-btn"]} onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className={styles["modal-header"]}>
          <div className={styles["course-title-div"]}>
            <h2 className={styles["course-title"]}>{course.courseName}</h2>
            <div className={styles["course-tags-div"]}>
              <span className={styles["course-tag"]}>
                {course.courseId}
              </span>
              <span className={styles["campus-tag"]}>
                {cls.campus}
              </span>
              <span className={styles["crn-tag"]}>
                {cls.classId}
              </span>
              <span className={styles["section-tag"]}>
                Section {cls.section}
              </span>
            </div>
          </div>

          <div className={styles["dropdown-div"]}>
            <span className={["dropdown-text"]}>
              <i className={["fas fa-info-circle"]}></i>
            </span>  
            <div className={styles.dropdown}>
              <div
                className={styles["dropdown-toggle"]}
                onClick={() => {
                  const dropdown = document.getElementById("dropdown-menu");
                  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
                }}
              >
                <span>{selectedTab}</span>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div className={styles["dropdown-menu"]} id="dropdown-menu">
                {["Class Details", "Course Description", "Instructors", "Class Schedule", "Enrollment", "Eligibility"].map(
                  (tab) => (
                    <div
                      key={tab}
                      onClick={() => {
                        setSelectedTab(tab);
                        document.getElementById("dropdown-menu").style.display = "none";
                      }}
                    >
                      {tab}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={styles["modal-content"]}>
          {/* CLASS DETAILS */}
          {selectedTab === "Class Details" && (
            <div className={`${styles["content-section"]} ${styles.active} ${styles["class-details"]}`}>
              <div className={styles["content-info-div"]}>
                <h3>Associated Term</h3>
                <div className={styles["content-info-text"]}>
                  <i className="fa-solid fa-calendar-days"></i>
                  <span>{cls.semester}</span>
                </div>
              </div>
              <div className={styles["content-info-div"]}>
                <h3>CRN</h3>
                <div className={styles["content-info-text"]}>
                  <i className="fa-solid fa-hashtag"></i>
                  <span>{cls.classId}</span>
                </div>
              </div>
              <div className={styles["content-info-div"]}>
                <h3>Campus</h3>
                <div className={styles["content-info-text"]}>
                  <i className="fa-solid fa-building"></i>
                  <span>{cls.campus}</span>
                </div>
              </div>
              <div className={styles["content-info-div"]}>
                <h3>Instructional Method</h3>
                <div className={styles["content-info-text"]}>
                  <i className="fa-solid fa-language"></i>
                  <span>{cls.instructionalMethod}</span>
                </div>
              </div>
              <div className={styles["content-info-div"]}>
                <h3>Course Subject</h3>
                <div className={styles["content-info-text"]}>
                  <i className="fa-solid fa-book-open"></i>
                  <span>{course.subject}</span>
                </div>
              </div>
              <div className={styles["content-info-div"]}>
                <h3>Credit Hours</h3>
                <div className={styles["content-info-text"]}>
                  <i className="fa-solid fa-clock"></i>
                  <span>{course.creditHours} credit hours</span>
                </div>
              </div>
            </div>
          )}

          {/* COURSE DESCRIPTION */}
          {selectedTab === "Course Description" && (
            <div id="Course Description" className={`${styles["content-section"]} ${styles.active}`}>
              <div
                className={styles["course-image"]}
                style={{
                  backgroundImage: `url(${course.courseImage || ""})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className={styles["hover-icon"]}>
                  <i className="fa-solid fa-eye"></i>
                  <span className={styles["hover-text"]}>Learn More</span>
                </div>
                <i className={`fa-solid fa-turn-up ${styles["top-right-icon"]}`}></i>
              </div>

              <div className={styles["content-info-div"]}>
                <h3 className={styles["content-info-attribute"]}>What you'll learn</h3>
                <p className={`${styles["content-info-paragraph"]} ${styles["description"]}`}>
                  {course.description || "No description available."}
                </p>
              </div>

              <div className={styles["content-info-div"]}>
                <h3 className={styles["content-info-attribute"]}>Course Syllabus</h3>
                <p className={`${styles["content-info-paragraph"]} ${styles["attachment"]}`}>
                  <i className="fa-solid fa-file-pdf"></i> Course-Syllabus.pdf
                </p>
              </div>
            </div>
          )}


          {/* INSTRUCTORS */}
          {selectedTab === "Instructors" && (
            <div className={`${styles["instructors-container"]} ${styles.active}`}>
              <h3>Course Instructors</h3>
              <div className={styles["instructors-list"]}>
                {instructors.map((inst, i) => (
                  <div className={styles.instructor} key={i}>
                    <i className="fa-solid fa-user"></i>
                    <div className={styles["instructor-info"]}>
                      <p className={styles["instructor-name"]}>{inst.firstName} {inst.lastName}</p>
                      <p className={styles["instructor-description"]}>{`${inst.department} Department, College of ${inst.college}`}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SCHEDULE */}
          {selectedTab === "Class Schedule" && (
            <div id="Class Schedule" className={`${styles["content-section"]} ${styles.active}`}>
              <div className={`${styles["content-info-div"]} ${styles["class-schedule-container"]}`}>
                <div className={styles["class-schedule"]}>
                  <h3 className={styles["content-info-attribute"]}>Class Schedule</h3>
                  <div className={styles["schedule"]}>
                    <i className="fa-solid fa-calendar-days"></i>
                    <div className={styles["schedule-info"]}>
                      <div className={styles["weekdays"]}>
                        {generateWeekdaySpans(cls.schedule.scheduleType)}
                      </div>
                      <p className={styles["date-range"]}>01/19/2025 - 05/08/2025</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles["content-info-div"]} ${styles["class-schedule-container"]}`}>
                <div className={styles["class-time"]}>
                  <h3 className={styles["content-info-attribute"]}>Class Timings</h3>
                  <div className={styles["time"]}>
                    <i className="fa-solid fa-clock"></i>
                    <div className={styles["time-info"]}>
                      <p className={styles["time"]}>
                        {to12Hour(cls.schedule.startTime)} – {to12Hour(cls.schedule.endTime)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}


          {/* ENROLLMENT */}
          {selectedTab === "Enrollment" && (
            <div id="Enrollment" className={`${styles["content-section"]} ${styles.active}`}>
              <div className={`${styles["content-info-div"]} ${styles["enrollment-container"]}`}>
                <h3 className={styles["content-info-attribute"]}>Enrollment Information</h3>
                <div className={styles["enrollment-info"]}>
                  <div className={styles["enrollment-item"]}>
                    <i className="fa-solid fa-users"></i>
                    <span className={styles.label}>Enrollment Actual:</span>
                    <span className={styles.value}>{cls?.enrollmentActual || 0}</span>
                  </div>
                  <div className={styles["enrollment-item"]}>
                    <i className="fa-solid fa-user-group"></i>
                    <span className={styles.label}>Enrollment Maximum:</span>
                    <span className={styles.value}>{cls?.enrollmentMaximum || 0}</span>
                  </div>
                  <div className={`${styles["enrollment-item"]} ${styles["seats-available"]}`}>
                    <i className="fa-solid fa-chair"></i>
                    <span className={styles.label}>Enrollment Seats Available:</span>
                    <span className={styles.value}>
                      {Math.max(0, (cls?.enrollmentMaximum || 0) - (cls?.enrollmentActual || 0))}
                    </span>
                  </div>
                </div>
                <p className={styles["enrollment-note"]}>
                  Open for all students. Enrollment ends on <strong>March 1st</strong>.
                </p>
              </div>
            </div>
          )}


          {/* ELIGIBILITY */}
          {selectedTab === "Eligibility" && (
            <div id="Eligibility" className={`${styles["content-section"]} ${styles.active}`}>
              <div className={`${styles["content-info-div"]} ${styles["eligibility-container"]}`}>
                <h3 className={styles["content-info-attribute"]}>Prerequisite Courses</h3>
                <div className={styles["prerequisite-list"]}>
                  {course?.prerequisites?.length ? (
                    course.prerequisites.map((pr, index) => (
                      <div className={styles["prerequisite-card"]} key={index}>
                        <div className={styles["prerequisite-header"]}>
                          <span className={styles["course-tag"]}>
                            {typeof pr === "string" ? pr : pr.courseId}
                          </span>
                        </div>
                        <div className={styles["prerequisite-details"]}>
                          <div className={styles["letter-grade-container"]}>
                            <span className={styles["letter-grade"]}>
                              {typeof pr === "object" ? pr.minGrade : "D"}
                            </span>
                          </div>
                          <div className={styles["course-info"]}>
                            <p className={styles["minimum-grade"]}>Minimum Grade Required</p>
                            <h3>{typeof pr === "string" ? pr : pr.courseId}</h3>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className={styles["no-prerequisites"]}>
                      No prerequisite courses required for this class.
                    </p>
                  )}
                </div>
                {course?.prerequisites?.length > 0 && (
                  <p className={styles["eligibility-note"]}>
                    Students must complete the above courses before enrolling.
                  </p>
                )}
              </div>
            </div>
          )}

        </div>

        {userRole !== "admin" && userRole !== "instructor" && (
          <button className={styles["register-btn"]}>Register Class</button>
        )}

      </div>
    </div>
  );
}
