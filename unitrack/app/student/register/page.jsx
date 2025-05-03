"use client";
import { useEffect, useState } from "react";
import styles from "@/app/styles/register-course.module.css";
import NoResults from "@/app/components/NoResults";
import ClassModal from "@/app/components/ClassModal";
import AlertModal from "@/app/components/AlertModal";

export default function RegisterCourse() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [failedToLoad, setFailedToLoad] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [classModalVisible, setClassModalVisible] = useState(false);

  useEffect(() => {
    try {
      const dummyData = [
        {
          courseId: "CMPS303",
          courseName: "Data Structures",
          campus: "Male",
          instructor: "John Doe",
          section: "L01",
          enrollment: "12 / 35",
          status: "approved",
          registered: false,
        },
        {
          courseId: "CMPS351",
          courseName: "Operating Systems",
          campus: "Female",
          instructor: "Jane Smith",
          section: "L02",
          enrollment: "29 / 30",
          status: "pending",
          registered: true,
        },
        {
          courseId: "CMPS482",
          courseName: "Cyber Security",
          campus: "Male",
          instructor: "Dr. Xavier",
          section: "L03",
          enrollment: "30 / 30",
          status: "rejected",
          registered: false,
        },
      ];
      setCourses(dummyData);
    } catch (error) {
      setFailedToLoad(true);
    }
  }, []);

  const filteredCourses = courses.filter((course) =>
    `${course.courseId} ${course.courseName} ${course.instructor}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setNoResults(searchTerm && filteredCourses.length === 0);
  }, [searchTerm, filteredCourses]);

  const handleRegisterToggle = (courseId) => {
    setCourses((prev) => {
      const updated = prev.map((c) =>
        c.courseId === courseId ? { ...c, registered: !c.registered } : c
      );

      const course = prev.find((c) => c.courseId === courseId);
      const action = course?.registered ? "unregistered from" : "registered for";
      setAlertMessage(`You have successfully ${action} ${course?.courseName}`);
      setAlertVisible(true);

      return updated;
    });
  };

  const getStatusBadgeClass = (status) => {
    return status === "approved"
      ? styles["status-approved"]
      : status === "pending"
      ? styles["status-pending"]
      : styles["status-rejected"];
  };

  return (
    <main className={styles.register}>
      <header className={styles["register-header"]}>
        <div className={styles["register-top-header"]}>
          <h1 className={styles["register-title"]}>Register Your Courses</h1>
          <span className={styles["major-tag"]}>BSc. Computer Science</span>
        </div>
        <p className={styles["register-description"]}>
          Browse and register for courses that match your curriculum.
        </p>
      </header>

      <section className={styles["register-body"]}>
        <table className={styles["register-table"]}>
          <thead>
            <tr>
              <th colSpan="8">
                <div className={styles["search-bar-div"]}>
                  <div className={styles["search-bar"]}>
                    <input
                      type="text"
                      placeholder="Search by Course No, Name, or Instructor..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button>
                      <i className="fa-solid fa-search"></i>
                    </button>
                  </div>

                  {searchTerm && filteredCourses.length > 0 && (
                    <div className={styles["search-info"]}>
                      <p>
                        Showing <strong>{filteredCourses.length}</strong> result(s) for "<em>{searchTerm}</em>"
                      </p>
                    </div>
                  )}

                </div>
              </th>
            </tr>
            {!noResults && (
              <tr>
                <th className={styles["course-no"]}>Course No.</th>
                <th className={styles["course-name"]}>Name</th>
                <th className={styles["course-campus"]}>Campus</th>
                <th className={styles["course-instructor"]}>Instructor</th>
                <th className={styles["course-section"]}>Section</th>
                <th className={styles["course-enrollment"]}>Enrollment</th>
                <th className={styles["course-status"]}>Status</th>
                <th className={styles["course-action"]}>Action</th>
              </tr>
            )}
          </thead>

          <tbody>
            {filteredCourses.map((course, index) => (
              <tr key={index}>
                <td className={`${styles.data} ${styles["course-no"]}`}>
                  <span onClick={() => setClassModalVisible(true)}>
                    {course.courseId}
                  </span>
                </td>
                <td className={`${styles.data} ${styles["course-name"]}`}>
                  {course.courseName}
                </td>
                <td className={`${styles.data} ${styles["course-campus"]}`}>
                  {course.campus}
                </td>
                <td className={`${styles.data} ${styles["course-instructor"]}`}>
                  {course.instructor}
                </td>
                <td className={`${styles.data} ${styles["course-section"]}`}>
                  {course.section}
                </td>
                <td className={`${styles.data} ${styles["course-enrollment"]}`}>
                  <span>{course.enrollment}</span>
                </td>
                <td className={`${styles.data} ${styles["course-status"]}`}>
                  <div
                    className={`${styles["status-badge"]} ${getStatusBadgeClass(course.status)}`}
                  >
                    <span className={styles["status-circle"]}></span>
                    {/* first letter of the word capital */}
                    {course.status.charAt(0).toUpperCase() + course.status.slice(1)} 
                  </div>
                </td>
                <td className={`${styles.data} ${styles["course-action"]}`}>
                  <button
                    className={`${styles["course-button"]} ${
                      course.registered ? styles["registered-button"] : ""
                    }`}
                    onClick={() => handleRegisterToggle(course.courseId)}
                  >
                    {course.registered ? "Unregister" : "Register"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>


        {noResults && (
          <div className="no-results" style={{ display: "flex" }}>
            <NoResults />
          </div>
        )}

        {failedToLoad && (
          <div className="failed-to-load" style={{ display: "flex" }}>
            <p>Failed to load course data. Please try again later.</p>
          </div>
        )}
      </section>

      <ClassModal isVisible={classModalVisible} onClose={() => setClassModalVisible(false)} />

      <AlertModal
        title="Registration Update"
        description={alertMessage}
        isOpen={alertVisible}
        onClose={() => setAlertVisible(false)}
      />
    </main>
  );
}
