"use client";
import { useRef, useEffect, useState } from "react";
import styles from "@/app/styles/course-modal.module.css";
import { getCourseWithPrerequisitesAction } from "@/app/action/server-actions";

export default function CourseModal({ course, onClose }) {
  const modalRef = useRef(null);
  const [role, setRole] = useState("");
  const [prerequisites, setPrerequisites] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        setRole(parsed.role?.toLowerCase() || "");
      } catch (e) {
        console.error("Invalid user JSON");
      }
    }

    async function loadPrereqs() {
      const detailed = await getCourseWithPrerequisitesAction(course.courseId);
      setPrerequisites(detailed?.prerequisites || []);
    }

    loadPrereqs();

    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose, course.courseId]);

  const isStaff = role === "admin" || role === "instructor";

  return (
    <div className={styles.modal}>
      <div className={styles["modal-popup"]} ref={modalRef}>
        <button className={styles["close-btn"]} onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className={styles["course-image"]}>
          <img
            src={course.courseImage}
            alt={course.courseName}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          {!isStaff && (
            <div className={styles["hover-icon"]}>
              <i className="fa-solid fa-plus"></i>
              <span className={styles["hover-text"]}>Register Course</span>
            </div>
          )}
        </div>

        <div className={styles["modal-content"]}>
          <div className={styles["course-title-div"]}>
            <h2 className={styles["course-title"]}>{course.courseName}</h2>
            <span className={styles["course-tag"]}>
              {course.courseId || "Unknown"}
            </span>
          </div>

          <div className={styles["course-info"]}>
            <p className={`${styles["content-info-text"]} ${styles["subject"]}`}>
              <i className="fa-solid fa-book"></i> {course.subject || "Unknown"}
            </p>
            <p className={`${styles["content-info-text"]} ${styles["credit-hours"]}`}>
              <i className="fa-solid fa-clock"></i> {course.creditHours}{" "}
              {course.creditHours === 1 ? "Credit Hour" : "Credit Hours"}
            </p>
          </div>

          <div className={styles["course-description"]}>
            <h3 className={styles["content-info-attribute"]}>What Students Learn</h3>
            <p className={styles["content-info-paragraph"]}>{course.description}</p>
          </div>

          <div className={styles["prerequisite-courses"]}>
            <h3 className={styles["content-info-attribute"]}>Prerequisites</h3>
            <div className={styles["prerequisite-tags"]}>
              {prerequisites.length > 0 ? (
                prerequisites.map((p) => (
                  <span key={p.prerequisiteId} className={styles["course-tag"]}>
                    {p.prerequisiteId} (Min: {p.minGrade})
                  </span>
                ))
              ) : (
                <span className={styles["course-tag"]}>
                  <i className="fa-solid fa-ban"></i> None
                </span>
              )}
            </div>
          </div>

        </div>

        {!isStaff && (
          <button className={styles["register-btn"]} onClick={() => alert("Registered!")}>
            Register
          </button>
        )}
      </div>
    </div>
  );
}
