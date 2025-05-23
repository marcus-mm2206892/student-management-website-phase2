"use client";

import { useState, useEffect } from "react";
import styles from "@/app/styles/admin-create-course.module.css";
import { createPrerequisiteAction, createCourseMajorOfferingAction, createCourseAction, checkCourseIdAction, getAllSubjectCodeAction, getCourseIdsAction, getMajorsNamesAction } from "@/app/action/server-actions";
import AlertModal from "@/app/components/AlertModal";
/*
  To be fixed:
    3. Need to populate subjects in subjects dropdown
    4. Assign subject to new subject ; also fetch from the new table
    5. We should not create courses for other majors?
*/

export default function AdminCreateCourse() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [prerequisites, setPrerequisites] = useState([]);
  const [majors, setMajors] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("Select Subject");
  const [selectedPrereqs, setSelectedPrereqs] = useState([]);
  const [selectedMajors, setSelectedMajors] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(""); // tracks which dropdown is open
  const [courseNumber, setCourseNumber] = useState("");
  const [courseName, setCourseName] = useState("");
  const [creditHours, setCreditHours] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [courseExists, setCourseExists] = useState(false);


  // const subjects = ["CMPS", "CMPE", "ELEC"];
  // const prerequisites = ["CMPS101", "CMPS202", "CMPS303"];
  // const majors = ["Computer Science", "Computer Engineering"];


  useEffect(() => {
    async function fetchSubjects() {
      const codes = await getAllSubjectCodeAction();
      setSubjects(codes);
    }
    fetchSubjects();
  }, []);

  useEffect(() => {
    async function fetchPrereqs() {
        const courseIds = await getCourseIdsAction();
        setPrerequisites(courseIds);
      }
      fetchPrereqs();
  }, []);

  useEffect(() => {
    async function fetchMajors() {
      const majorNames = await getMajorsNamesAction();
      setMajors(majorNames);
    }
    fetchMajors();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Course Created!");
    console.log("Selected Subject:" + selectedSubject);
    console.log("Selected Pre-reqs:" + selectedPrereqs);
    console.log("Selected Majors:" + selectedMajors);
    console.log("Course No: " + courseNumber);
    console.log("Course Name: " + courseName);
    console.log("Credit Hours: " + creditHours);
    console.log("Descriptions: " + description);
    console.log("Image URL: " + imageUrl);

    // Check if the courseNo is valid/exists already
    const isExist = await checkCourseIdAction((selectedSubject+courseNumber));
    //if not valid, do not create, and do not reset the form, also make the courseNo field red

    if (isExist) {
      setCourseExists(true);
      setAlertMessage("The Course ID already exists. Please enter a different Course ID.")
      setAlertVisible(true)
      return; // Stop the form from submitting
    }

    setCourseExists(false); 

    // Create new course
    const newCourse =  {
      courseId: (selectedSubject+String(courseNumber)),  //Concatenate : sub+courseNo
      courseName: courseName,
      creditHours: parseInt(creditHours),
      subject: selectedSubject === "CMPS" 
        ? "Computer Science" 
        : selectedSubject === "CMPE"
        ? "Computer Engineering"
        : selectedSubject === "ELEC"
        ? "Electrical Engineering"
        : "Unknown",      // Need to modify subject
      courseNumber: courseNumber,
      description: description,
      courseImage: imageUrl
    }
    //Push new course to the table
    const pushedCourse = await createCourseAction(newCourse);

    console.log(newCourse);


    // Create prerequesites for the new course
    const preReqs = []
    for( const prereqId of selectedPrereqs){
      const newPreReq =  {  //Id auto generated
        courseId: (selectedSubject+String(courseNumber)), //Concatenate : sub+courseNo
        prerequisiteId: prereqId,
        minGrade: "D"
      }
      preReqs.push(newPreReq);
      //Push to table
    }

    for (const p of preReqs) {
      await createPrerequisiteAction(p);
    }
    console.log(preReqs);

    // Create course major offerings
    const courseMajorOffs = [];
    for (const majorOffid of selectedMajors){
        const newCourseMajorOffering =  {
          courseId: (selectedSubject+String(courseNumber)), //Concatenate : sub+courseNo
          majorId: majorOffid === "Computer Science"
            ? "CMPS"
            : majorOffid === "Computer Engineering"
            ? "CMPE"
            : majorOffid === "Electrical Engineering"
            ? "ELEC"
            : "UNKNOWN"
      }
      //push to table
      courseMajorOffs.push(newCourseMajorOffering)
    }

    for (const cmo of courseMajorOffs) {
      await createCourseMajorOfferingAction(cmo);
    }

    console.log(courseMajorOffs);

    setAlertMessage("The Course has been created successfully!.")
    setAlertVisible(true)

    //Reset the form
    setSelectedSubject("Select Subject");
    setSelectedPrereqs([]);
    setSelectedMajors([]);
    setOpenDropdown("");
    setCourseNumber("");
    setCourseName("");
    setCreditHours("");
    setDescription("");
    setImageUrl("");
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
              className={`${styles["input-field"]} ${courseExists ? styles["error-border"] : ""}`}
              placeholder="e.g. 350"
              value={courseNumber}
              required
              onChange={(e) => {
                setCourseNumber(e.target.value);
                setCourseExists(false); // reset error state on change
              }}
            />
            {courseExists && (
              <p className={styles["error-text"]}>Course ID already exists!</p>
            )}
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
                value={courseName}
                required
                onChange={(e) => {setCourseName(e.target.value)}}
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
                value={creditHours}
                required
                onChange={(e) => {setCreditHours(e.target.value)}}
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
                value={description}
                onChange={(e) => {setDescription(e.target.value)}}
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
                value={imageUrl}
                required
                onChange={(e) => {setImageUrl(e.target.value)}}
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

      <AlertModal
        title="Class Creation"
        description={alertMessage}
        isOpen={alertVisible}
        onClose={() => setAlertVisible(false)}
      />
    </main>
  );
}
