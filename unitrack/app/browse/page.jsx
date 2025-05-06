"use client";

import { getCoursesAction, getCompletedCoursesByStudentEmailAction } from "@/app/action/server-actions";
import { useEffect, useState } from "react";
import styles from "@/app/styles/browse.module.css";
import discoverStyles from "@/app/styles/course-card-discover.module.css";
import NoResults from "@/app/components/NoResults";
import CourseModal from "@/app/components/CourseModal";

export default function BrowsePage() {
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState({ role: "", completedCourses: [] });

  async function loadCourses() {
    const initialCourses = await getCoursesAction();
    setCourses(initialCourses);
    setFilteredCourses(initialCourses);
  }

  useEffect(() => {
    loadCourses();
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        const user = JSON.parse(stored);
        const role = user.role?.toLowerCase() || "";
  
        if (role === "student") {
          (async () => {
            const completed = await getCompletedCoursesByStudentEmailAction(user.email);
            setLoggedInUser({
              role,
              completedCourses: completed || [],
            });
          })();
        } else {
          setLoggedInUser({
            role,
            completedCourses: [],
          });
        }
      } catch (err) {
        console.error("Failed to parse user from localStorage", err);
      }
    }
  }, []);
  
  

  const isStudent = loggedInUser?.role === "student";
  const completedSet = new Set(
    loggedInUser?.completedCourses?.map((c) => c.courseId) || []
  );

  useEffect(() => {
    const query = search.toLowerCase();
    const results = courses.filter((course) =>
      `${course.courseId} ${course.courseName} ${course.description}`
        .toLowerCase()
        .includes(query)
    );
    setFilteredCourses(results);
  }, [search, courses]);

  return (
    <main className={styles.userQuery}>
      <div className={styles.queryHeader}>
        <div className={styles.queryTopHeader}>
          <p className={styles.queryTitle}>
            Results for <b>{search || "All Courses"}</b>
          </p>
          <span className={styles.resultsCount}>
            {filteredCourses.length}{" "}
            {filteredCourses.length === 1 ? "result" : "results"}
          </span>
        </div>

        <div className={styles.searchBarDiv}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search by Course No, Name, or Instructor..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button>
              <i className="fa-solid fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <section className={styles.courseGrid}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => {
            const isCompleted = completedSet.has(course.courseId);
            const creditText =
              course.creditHours === 1 ? "Credit Hour" : "Credit Hours";
            return (
              <div
                key={course.courseId}
                className={discoverStyles["course-card"]}
                onClick={() => setSelectedCourse(course)}
              >
                <div className={discoverStyles["course-image"]}>
                  <img
                    src={course.courseImage}
                    alt={course.courseName}
                  />
                  {isStudent ? (
                    <div
                      className={discoverStyles["hover-icon"]}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = "/student/register";
                      }}
                    >
                      <i className="fa-solid fa-plus"></i>
                      <span className={discoverStyles["hover-text"]}>Register Course</span>
                    </div>
                  ) : (
                    <div className={discoverStyles["hover-icon"]}>
                      <i className="fa-solid fa-eye"></i>
                      <span className={discoverStyles["hover-text"]}>View Course</span>
                    </div>
                  )}

                  <i
                    className={`fa-solid fa-turn-up ${discoverStyles["top-right-icon"]}`}
                  ></i>
                </div>

                <div className={discoverStyles["course-info"]}>
                  <div className={discoverStyles["course-header"]}>
                    <span className={discoverStyles["course-tag"]}>
                      {course.courseId}
                    </span>
                    <span className={discoverStyles.semester}>Spring 2025</span>
                  </div>
                  <h3>{course.courseName}</h3>
                  <p className={discoverStyles["course-subtitle"]}>
                    {course.description}
                  </p>
                  <div className={discoverStyles["course-tags"]}>
                    {isCompleted && (
                      <span className={discoverStyles.tag}>
                        <i className="fa-solid fa-flag-checkered"></i> Completed
                      </span>
                    )}
                    <span className={discoverStyles.tag}>
                      <i className="fa-solid fa-hourglass-half"></i>{" "}
                      {course.creditHours} {creditText}
                    </span>
                    {(course.majorsOffered || []).map((major) => (
                      <span key={major} className={discoverStyles.tag}>
                        <i
                          className={`fa-solid ${
                            major === "CMPE" ? "fa-microchip" : "fa-laptop-code"
                          }`}
                        ></i>{" "}
                        {major === "CMPS" ? "CS" : "CE"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <NoResults />
        )}
      </section>

      {filteredCourses.length > 0 && (
        <span className={styles.endOfResults}>End of Results</span>
      )}

      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </main>
  );
}
