"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EmptyContent from "@/app/components/EmptyContent";
import CourseModal from "@/app/components/CourseModal";
import styles from "@/app/styles/student-profile.module.css";
import discoverStyles from "@/app/styles/course-card-discover.module.css";

export default function Page() {
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    major: "",
  });

  useEffect(() => {
    const dummyUser = {
      firstName: "Marcus",
      lastName: "Monteiro",
      email: "marcus.monteiro@qu.com",
      major: "BSc. Computer Science",
    };

    const dummyClasses = [
      {
        classId: "25501",
        courseId: "CMPS 350",
        courseName: "Operating Systems",
        creditHours: 3,
        courseImage: "/assets/imgs/course-placeholder.png",
        description: "Introduction to operating system principles",
        majorsOffered: ["CMPS", "CMPE"],
      },
      {
        classId: "25502",
        courseId: "CMPS 351",
        courseName: "Software Engineering",
        creditHours: 3,
        courseImage: "/assets/imgs/course-placeholder.png",
        description: "Software development lifecycle and best practices",
        majorsOffered: ["CMPS"],
      },
    ];

    setUser(dummyUser);
    setEnrolledClasses(dummyClasses);
  }, []);

  const completedCourses = 20;
  const totalCourses = 30;
  const percentCompleted = Math.round((completedCourses / totalCourses) * 100);

  const handleOpenModal = (course) => setSelectedClass(course);
  const handleCloseModal = () => setSelectedClass(null);

  return (
    <>
      <main className={styles["student-profile"]}>
        {/* GREETINGS */}
        <div className={styles.greetings}>
          <h1>
            Hello there, {user.firstName} {user.lastName}
          </h1>
          <p>Track your course progress and learning in university.</p>
        </div>

        <div className={styles["student-profile-left"]}>
            <div className={styles["course-image-div"]}>
                <div className={styles["course-image"]}>
                    <Image
                    src={`/assets/major-files/2024-${
                        user.department === "Computer Science" ? "cs" : "ce"
                    }-flowchart.png`}
                    alt="Flowchart"
                    fill
                    style={{ objectFit: "contain" }}
                    />
                    <a
                        className={styles["hover-icon"]}
                        href={`/assets/major-files/2024-${
                            user.department === "Computer Science" ? "cs" : "ce"
                        }-flowchart.pdf`}
                        download
                    >
                        <i className="fa-solid fa-download"></i>
                        <span className={styles["hover-text"]}>Download Flowchart</span>
                    </a>
                </div>
            </div>


            {/* Credit Hours Card */}
            <div className={styles["credit-hours-card"]}>
                <div className={styles["credit-hours-text"]}>
                <h2>
                    You are taking <strong>6 credit hours</strong> this semester
                </h2>
                <p>
                    with <strong>7 credit hours</strong> waiting to be approved.
                </p>
                </div>
                <div className={styles["credit-hours-image"]}>
                <img
                    src="/assets/imgs/unitrack-images/login-page-graphic.png"
                    alt="Credit Hours"
                />
                </div>
            </div>
          {/* … study-plan image & credit-hours card unchanged … */}

          <div className={styles.courses}>
            <div className={styles["courses-header"]}>
              <div className={styles["courses-header-left"]}>
                <h2>Current Courses</h2>
                <p>These are the courses that you are taking this semester.</p>
              </div>
              <div className={styles["courses-header-right"]}>
                <Link href="/browse" className={styles["browse-courses"]}>
                  Browse more courses <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {enrolledClasses.length === 0 ? (
              <EmptyContent />
            ) : (
              <div className={styles["course-grid"]}>
                {enrolledClasses.map((course) => {
                  const creditText =
                    course.creditHours === 1 ? "Credit Hour" : "Credit Hours";
                  return (
                    <div
                      key={course.classId}
                      className={discoverStyles["course-card"]}
                      onClick={() => handleOpenModal(course)}
                    >
                      <div className={discoverStyles["course-image"]}>
                        <Image
                          src={course.courseImage}
                          alt="Course Image"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                        <div className={discoverStyles["hover-icon"]}>
                          <i className="fa-solid fa-plus"></i>
                          <span className={discoverStyles["hover-text"]}>
                            Register Course
                          </span>
                        </div>
                        <i className={`fa-solid fa-turn-up ${discoverStyles["top-right-icon"]}`}></i>
                      </div>

                      <div className={discoverStyles["course-info"]}>
                        <div className={discoverStyles["course-header"]}>
                          <span className={discoverStyles["course-tag"]}>
                            {course.courseId}
                          </span>
                          <span className={discoverStyles["semester"]}>
                            Spring 2025
                          </span>
                        </div>
                        <h3>{course.courseName}</h3>
                        <p className={discoverStyles["course-subtitle"]}>
                          {course.description}
                        </p>
                        <div className={discoverStyles["course-tags"]}>
                          <span className={discoverStyles["tag"]}>
                            <i className="fa-solid fa-hourglass-half"></i>{" "}
                            {course.creditHours} {creditText}
                          </span>
                          {course.majorsOffered.map((maj) => (
                            <span
                              key={maj}
                              className={discoverStyles["tag"]}
                            >
                              <i
                                className={`fa-solid ${
                                  maj === "CMPE"
                                    ? "fa-microchip"
                                    : "fa-laptop-code"
                                }`}
                              ></i>{" "}
                              {maj}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className={styles["student-profile-right"]}>
            <div className={styles["about-me-div"]}>
                <h3>About Me</h3>
                <div className={styles["about-me-content"]}>
                <img
                    src="/assets/imgs/user-profile-images/male1.png"
                    alt="Avatar"
                    className={styles["about-me-avatar"]}
                />
                <div className={styles["about-me-content-right"]}>
                    <h2>
                    {user.firstName} {user.lastName}
                    </h2>
                    <p>{user.email}</p>
                    <span className={styles["major-tag"]}>{user.major}</span>
                </div>
                </div>
            </div>

            <div className={styles["content-info-div"]}>
                <h3 className={styles["content-info-attribute"]}>Download Study Plan</h3>
                <a
                className={`${styles["content-info-paragraph"]} ${styles["attachment"]}`}
                href={`../assets/major-files/2024-${
                    user.department === "Computer Science" ? "cs" : "ce"
                }-studyplan.pdf`}
                download
                >
                <i className="fa-solid fa-file-pdf"></i> Download{" "}
                {user.department === "Computer Science"
                    ? "Computer Science"
                    : "Computer Engineering"}{" "}
                Study Plan
                </a>
            </div>

            <div className={styles["progress-card"]}>
                <h3 className={styles["content-info-attribute"]}>
                Your Progress to Graduation
                </h3>
                <div className={styles["progress-content"]}>
                <div className={styles["progress-text"]}>
                    <p className={`${styles["content-info-attribute"]} ${styles["total-tag"]}`}>
                    Completed {completedCourses} of {totalCourses} Total Courses
                    </p>
                    <p>
                    You are also taking <span>{enrolledClasses.length} courses</span> this semester
                    </p>
                </div>
                <div className={styles["progress-chart"]}>
                    <div
                        className={styles["pie-wrapper"]}
                        style={{ "--progress": percentCompleted }}
                        >
                        <span className={styles["label"]}>
                            {percentCompleted}
                            <span className={styles["smaller"]}>%</span>
                        </span>
                        <div className={styles["pie"]}>
                            <div className={`${styles["half-circle"]} ${styles["left-side"]}`}></div>
                            <div className={`${styles["half-circle"]} ${styles["right-side"]}`}></div>
                        </div>
                        <div className={styles["shadow"]}></div>
                    </div>

                </div>
                </div>
            </div>
        </div>

      </main>

      {/* FOOTER & MODAL */}
      <div id="footerContent"></div>
      <div id="modalContainer">
        {selectedClass && (
          <CourseModal course={selectedClass} onClose={handleCloseModal} />
        )}
      </div>
    </>
  );
}

