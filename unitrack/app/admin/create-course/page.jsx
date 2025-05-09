"use client";

import { useState } from "react";
import styles from "@/app/styles/admin-create-course.module.css";

export default function AdminCreateCourse() {
  const [selectedSubject, setSelectedSubject] = useState("Select Subject");
  const [selectedPrereqs, setSelectedPrereqs] = useState([]);
  const [selectedMajors, setSelectedMajors] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null); // tracks which dropdown is open

  const subjects = ["CMPS", "CMPE", "ELEC"];
  const prerequisites = ["CMPS101", "CMPS202", "CMPS303"];
  const majors = ["Computer Science", "Computer Engineering", "Electrical Engineering"];

  const handleMultiSelect = (item, list, setter) => {
  if (list.includes(item)) {
    setter(list.filter((i) => i !== item));
  } else {
    setter([...list, item]);
  }
};

  const removeTag = (item, list, setter) => {
    setter(list.filter((i) => i !== item));
  };

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Course Created!");
  };

  return (
    <main className={styles.admin_create}>
      <header className={styles["create-header"]}>
        <h1>Create a Course</h1>
        <p className={styles["view-schedule-description"]}>
          Fill in the form to add a new course to the system.
        </p>
      </header>

      <section className={styles.create}>
        <form className={styles["create-class-form"]} onSubmit={handleSubmit}>
          <div className={styles["input-div-container"]}>
            <div className={styles["field-div"]}>
              <h1>Create New Course</h1>
              <p>Please fill in all required fields to create a new course.</p>
            </div>

            {/* Subject Dropdown */}
            <div className={styles["field-div"]}>
              <label htmlFor="subject">Subject</label>
              <div className={`${styles.dropdown} ${styles["class-dropdown"]}`}>
                <div className={styles["dropdown-toggle"]} onClick={() => toggleDropdown("subject")}>
                  <span className="selectedOption">{selectedSubject}</span>
                  <i className="fas fa-chevron-down"></i>
                </div>
                {openDropdown === "subject" && (
                  <div className={styles["dropdown-menu"]}>
                    {subjects.map((subject) => (
                      <div
                        key={subject}
                        onClick={() => {
                          setSelectedSubject(subject);
                          setOpenDropdown(null);
                        }}
                      >
                        {subject}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Course Number */}
            <div className={styles["field-div"]}>
              <label htmlFor="courseNumber">Course Number</label>
              <input
                type="number"
                id="courseNumber"
                name="courseNumber"
                className={styles["input-field"]}
                placeholder="e.g. 350"
                required
              />
            </div>

            {/* Course Name */}
            <div className={styles["field-div"]}>
              <label htmlFor="courseName">Course Name</label>
              <input
                type="text"
                id="courseName"
                name="courseName"
                className={styles["input-field"]}
                placeholder="e.g. Operating Systems"
                required
              />
            </div>

            {/* Credit Hours */}
            <div className={styles["field-div"]}>
              <label htmlFor="creditHours">Credit Hours</label>
              <input
                type="number"
                id="creditHours"
                name="creditHours"
                className={styles["input-field"]}
                min="1"
                max="5"
                placeholder="e.g. 3"
                required
              />
            </div>

            {/* Description */}
            <div className={styles["field-div"]}>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                className={styles["input-field"]}
                rows="4"
                placeholder="Brief course overview..."
                required
              ></textarea>
            </div>

            {/* Image URL */}
            <div className={styles["field-div"]}>
              <label htmlFor="imageUrl">Image URL</label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                className={styles["input-field"]}
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>

            {/* Prerequisites Multi-select */}
            <div className={styles["field-div"]}>
              <label htmlFor="prerequisites">Prerequisite Courses</label>
              <div className={`${styles.dropdown} ${styles["multi-dropdown"]}`}>
                <div className={styles["dropdown-toggle"]} onClick={() => toggleDropdown("prereqs")}>
                  <span className="selectedOption">Select Prerequisites</span>
                  <i className="fas fa-chevron-down"></i>
                </div>
                {openDropdown === "prereqs" && (
                  <div className={styles["dropdown-menu"]}>
                    {prerequisites.map((p) => (
                      <div key={p} onClick={() => handleMultiSelect(p, selectedPrereqs, setSelectedPrereqs)}>
                        {selectedPrereqs.includes(p) ? "✅ " : ""}{p}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className={styles["tag-container"]}>
                {selectedPrereqs.map((tag, i) => (
                  <span key={i} className={styles["tag"]}>
                    {tag} <button type="button" onClick={() => removeTag(tag, selectedPrereqs, setSelectedPrereqs)}>×</button>
                  </span>
                ))}
              </div>
            </div>

            {/* Majors Multi-select */}
            <div className={styles["field-div"]}>
              <label htmlFor="majors">Availability to Majors</label>
              <div className={`${styles.dropdown} ${styles["multi-dropdown"]}`}>
                <div className={styles["dropdown-toggle"]} onClick={() => toggleDropdown("majors")}>
                  <span className="selectedOption">Select Majors</span>
                  <i className="fas fa-chevron-down"></i>
                </div>
                {openDropdown === "majors" && (
                  <div className={styles["dropdown-menu"]}>
                    {majors.map((m) => (
                      <div key={m} onClick={() => handleMultiSelect(m, selectedMajors, setSelectedMajors)}>
                        {selectedMajors.includes(m) ? "✅ " : ""}{m}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className={styles["tag-container"]}>
                {selectedMajors.map((tag, i) => (
                  <div key={i} className={styles["tag"]}>
                    {tag} <button type="button" onClick={() => removeTag(tag, selectedMajors, setSelectedMajors)}>×</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className={styles["field-div"]}>
            <button type="submit" className={styles["input-submit"]}>
              Create Course
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
