"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/app/styles/admin-create-class.module.css";
import { createClassAction, getAllCoursesAction, getAllInstructorsAction, getClassByIdAction, getLatestCreatedClassAction } from "@/app/action/server-actions";
import AlertModal from "@/app/components/AlertModal";

export default function AdminCreateClassPage() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [scheduleType, setScheduleType] = useState("Select Schedule Type");
  const [startTime, setStartTime] = useState("Select Time");
  const [endTime, setEndTime] = useState("Select Time");
  const [course, setCourse] = useState("Select Course");
  const [campus, setCampus] = useState("Select Campus");
  const [section, setSection] = useState("");
  const [maxStudents, setMaxStudents] = useState("");
  const [selectedInstructors, setSelectedInstructors] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [courses, setCourses] = useState([]);
  const [lastClass, setLastClass] = useState(null);

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const handleInstructorToggle = (instructor) => {
    setSelectedInstructors((prev) => {
      const exists = prev.some((ins) => ins.instructorId === instructor.instructorId);
      if (exists) {
        return prev.filter((ins) => ins.instructorId !== instructor.instructorId);
      } else {
        return [...prev, instructor];
      }
    });
  };

  useEffect(() => {
    async function fetchInstructors() {
      const instructors = getAllInstructorsAction();
      return instructors;
    }
  
    async function loadInstructors() {
      const instructors = await fetchInstructors(); 
      setInstructors(instructors);               
    }
  
    loadInstructors();
  }, []);

  useEffect(() => {
        console.log("Updated instructors:", instructors);
      }, [instructors]);


  useEffect(() => {
        console.log("Updated selected instructors:", selectedInstructors);
  }, [selectedInstructors]);

  useEffect(() => {
    async function fetchCourses() {
      const courses = getAllCoursesAction();
      return courses;
    }
      
    async function loadCourses() {
      const courses = await fetchCourses(); 
      setCourses(courses);               
    }
      
    loadCourses();
  }, []);
    
  useEffect(() => {
    console.log("Updated courses:", courses);
  }, [courses]);

  useEffect(() => {
    console.log("Updated selected course:", course);
  }, [course]);

  useEffect(() => {
    console.log("Updated start time:", startTime);
    console.log("Updated start time index:", times.indexOf(startTime));
  }, [startTime]);

  useEffect(() => {
    console.log("Updated end time:", endTime);
    console.log("Updated end time index:", times.indexOf(endTime));
  }, [endTime]);

  useEffect(() => {
          async function fetchLastClass() {
              const result = await getLatestCreatedClassAction();
              setLastClass(result);
          }
      
          fetchLastClass();
        }, []);
  
  useEffect(() => {
    console.log("Updated last class:", lastClass);
        }, [lastClass]);

  useEffect(() => {
    if (lastClass)
      console.log("Updated last class id in Int:", parseInt(lastClass.classId));
  }, [lastClass]);

  const schedules = ["Sunday, Tuesday, Thursday", "Monday, Wednesday"];
  const times = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const campuses = ["Male", "Female"];

  // To extract the classes for the selected course in the selected campus
  async function getRelevantClasses(course, campus) {
    if (!course?.CourseCurrentClasses?.length) return [];
  
    const detailedClasses = await Promise.all(
      course.CourseCurrentClasses.map((cls) => getClassByIdAction(cls.classId))
    );
  
    const relevantClasses = detailedClasses.filter((cls) => cls.campus === campus);
    return relevantClasses;
  }

  // To autogenerate sections
  async function autoGenerateSection(course, campus) {
    const relevantClasses = await getRelevantClasses(course, campus);
  
    let base = campus === "Male" ? 1 : 51;
    let sectionNumber = base;

    // Extract all existing section codes for this course & campus
    const usedSections = new Set(relevantClasses.map((cls) => cls.section));

    // Loop until we find a section not used yet
    while (usedSections.has("L" + sectionNumber.toString().padStart(2, "0"))) {
      sectionNumber++;
    }
  
    const sectionCode = "L" + sectionNumber.toString().padStart(2, "0");
    setSection(sectionCode);
  }

  useEffect(() => {
    // Autogenerate section if course and campus is selected
    if (typeof course === "object" && campus !== "Select Campus") {
      autoGenerateSection(course, campus);
    }
  }, [course, campus]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedCourseId = course.courseId;
    const selectedCampus = campus;
    const selectedSchedType = scheduleType;
    const selectedStartTime = startTime;
    const setSelectedEndTime = endTime;
    const semester = "Spring 2025";

    // Validate time
    const startIndex = times.indexOf(startTime);
    const endIndex = times.indexOf(endTime);

    if (
      selectedStartTime === "Select Time" ||
      setSelectedEndTime === "Select Time" ||
      startIndex === -1 ||
      endIndex === -1 ||
      endIndex - startIndex !== 1
    ) {
      setAlertMessage("Please select a valid start time. The end time must be exactly 1 hour later.")
      setAlertVisible(true)
      return;
    }

    const lastClassId = parseInt(lastClass.classId)
    const newClassId = (lastClassId + 1).toString();

    const newClass = {
      classId: newClassId,
      courseId: selectedCourseId,
      semester: semester,
      instructionalMethod: "English",
      campus: selectedCampus,
      enrollmentActual: 0,
      enrollmentMaximum: parseInt(maxStudents),
      classStatus: "pending",
      schedule: {
        scheduleType: selectedSchedType === "Monday, Wednesday" ? "MW" : "STT",
        startTime: selectedStartTime,
        endTime: setSelectedEndTime,
      },
      instructors: selectedInstructors,
      section,
    };

    const result = await createClassAction(newClass);

    if (result) {
      setAlertMessage("Class successfully created.")
      setAlertVisible(true)

      // Reset form
      setSection("");
      setMaxStudents("");
      setCourse("Select Course");
      setSelectedInstructors([]);
      setCampus("Select Campus");
      setScheduleType("Select Schedule Type");
      setStartTime("Select Time");
      setEndTime("Select Time");
    } else {
      setAlertMessage("Failed to create class.")
      setAlertVisible(true)
    }
  };

  return (
    <main className={styles.admin_create}>
      <header className={styles["create-header"]}>
        <h1>Create a Class</h1>
        <p className={styles["view-schedule-description"]}>
          Create a class of a course of your choice this semester.
        </p>
      </header>

      <section className={styles.create}>
        <form className={styles["create-class-form"]} onSubmit={handleSubmit}>
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
                    <span className={styles.selectedOption}>
                      {typeof course === "object" ? course.courseId : course}
                    </span>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                  {openDropdown === "course" && (
                    <div className={styles["dropdown-menu"]}>
                      {courses.map((c, i) => (
                        <div key={i} onClick={() => {
                          setCourse(c);
                          toggleDropdown("course");
                        }}>
                          {c.courseId}
                        </div>
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
                  <span className={styles.selectedOption}>
                    {selectedInstructors.length > 0 ? "Instructors Selected" : "Select Instructor(s)"}
                  </span>
                  <i className="fas fa-chevron-down"></i>
                </div>
                {openDropdown === "instructors" && (
                  <div className={styles["dropdown-menu"]}>
                    {instructors.map((i, idx) => {
                      const fullName = `${i.user.firstName} ${i.user.lastName}`;
                      return (
                        <div key={idx} onClick={() => handleInstructorToggle(i)}>
                          {selectedInstructors.includes(i) ? "✅" : ""} {fullName}
                        </div>
                      );
                    })}   
                  </div>
                )}
              </div>
              <div className={styles["tag-container"]}>
              {selectedInstructors.map((ins, i) => {
                const fullName = `${ins.user.firstName} ${ins.user.lastName}`;
                return (
                  <span key={i} className={styles.tag}>
                    {fullName}
                    <button type="button" onClick={() => handleInstructorToggle(ins)}>×</button>
                  </span>
                );
              })}
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
                placeholder={section || "e.g. L01"}
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

      <AlertModal
        title="Class Creation"
        description={alertMessage}
        isOpen={alertVisible}
        onClose={() => setAlertVisible(false)}
      />
    </main>
  );
}
