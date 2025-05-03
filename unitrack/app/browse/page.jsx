"use client";
import { useEffect, useState } from "react";
import styles from "@/app/styles/browse.module.css";
import discoverStyles from "@/app/styles/course-card-discover.module.css";
import NoResults from "@/app/components/NoResults";
import CourseModal from "@/app/components/CourseModal";

const loggedInUser = {
  role: "student",
  completedCourses: [{ courseId: "CMPE202" }],
};

const dummyCourses = [
  {
    courseId: "CMPS101",
    courseName: "Intro to CS",
    description: "Learn the basics of programming and computational thinking.",
    creditHours: 3,
    courseImage: "/assets/imgs/course-placeholder.png",
    majorsOffered: ["CMPS", "CMPE"],
    subject: "Computer Science",
    prerequisites: [],
  },
  {
    courseId: "CMPE202",
    courseName: "Digital Logic Design",
    description: "Understand circuits, logic gates, and system architecture.",
    creditHours: 3,
    courseImage: "/assets/imgs/course-placeholder.png",
    majorsOffered: ["CE"],
    subject: "Computer Engineering",
    prerequisites: ["PHYS101"],
  },
  {
    courseId: "CHEM101",
    courseName: "General Chemistry 1",
    description:
      "Chemistry and Measurement and significant figures. Atoms, molecules and ions. Formulas and...",
    creditHours: 3,
    courseImage: "/assets/imgs/course-placeholder.png",
    majorsOffered: ["CMPE", "CMPS"],
    subject: "Chemistry",
    prerequisites: [],
  },
];

export default function BrowsePage() {
  const [search, setSearch] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(dummyCourses);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const isStudent = loggedInUser?.role === "student";
  const completedSet = new Set(
    loggedInUser?.completedCourses?.map((c) => c.courseId) || []
  );

  useEffect(() => {
    const query = search.toLowerCase();
    const results = dummyCourses.filter((course) =>
      `${course.courseId} ${course.courseName} ${course.description}`
        .toLowerCase()
        .includes(query)
    );
    setFilteredCourses(results);
  }, [search]);

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
                  {isStudent && (
                    <div
                      className={discoverStyles["hover-icon"]}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = "/student/register";
                      }}
                    >
                      <i className="fa-solid fa-plus"></i>
                      <span className={discoverStyles["hover-text"]}>
                        Register Course
                      </span>
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
