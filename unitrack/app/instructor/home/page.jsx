"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/app/styles/instructor-home-page.module.css";
import cardStyles from "@/app/styles/course-card-profile.module.css";
import EmptyContent from "@/app/components/EmptyContent";
import ClassModal from "@/app/components/ClassModal";

export default function InstructorHomePage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [user] = useState({
    name: "Dr. Marcus Monteiro",
    email: "marcus.monteiro@qu.edu.qa",
    department: "Computer Science",
    college: "College of Engineering",
    avatar: "/assets/imgs/user-profile-images/male1.png",
  });

  const [courses] = useState([
    {
      courseId: "CMPS350",
      courseName: "Web Development",
      creditHours: 3,
      courseImage: "/assets/imgs/course-placeholder.png",
      description: "Client-server interaction fundamentals.",
      majorsOffered: ["CMPS", "CMPE"],
    },
    {
      courseId: "CMPS482",
      courseName: "Cyber Physical Systems",
      creditHours: 3,
      courseImage: "/assets/imgs/course-placeholder.png",
      description: "Security in smart devices and embedded systems.",
      majorsOffered: ["CMPE"],
    },
  ]);

  const [teachingClasses] = useState([
    { classId: "101", courseId: "CMPS350", section: "L01", semester: "Spring 2025" },
    { classId: "102", courseId: "CMPS482", section: "L02", semester: "Spring 2025" },
  ]);

  const [pendingClasses] = useState([
    { classId: "103", courseId: "CMPS350", section: "L02", semester: "Spring 2025" },
  ]);

  const handleClassClick = () => setIsModalVisible(true);

  const renderClassCard = (cls) => {
    const course = courses.find((c) => c.courseId === cls.courseId);
    if (!course) return null;

    const creditHoursText = course.creditHours === 1 ? "credit hour" : "credit hours";

    return (
      <div key={cls.classId} className={cardStyles["course-card"]} onClick={handleClassClick}>
        <div className={cardStyles["course-image"]}>
          <img
            src={course.courseImage}
            alt="Course Image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className={cardStyles["hover-icon"]}>
            <i className="fa-solid fa-eye"></i>
            <span className={cardStyles["hover-text"]}>View Class</span>
          </div>
          <i className={`fa-solid fa-turn-up ${cardStyles["top-right-icon"]}`}></i>
        </div>

        <div className={cardStyles["course-info"]}>
          <div className={cardStyles["course-header"]}>
            <div className={cardStyles["card-tags-div"]}>
              <span className={cardStyles["course-tag"]}>{cls.courseId}</span>
              <span className={cardStyles["section-tag"]}>{cls.section}</span>
            </div>
            <span className={cardStyles["semester"]}>{cls.semester}</span>
          </div>
          <h3>{course.courseName}</h3>
          <p className={cardStyles["course-subtitle"]}>{course.description}</p>
          <div className={cardStyles["course-tags"]}>
            <span className={cardStyles["tag"]}>
              <i className="fa-solid fa-hourglass-half"></i> {course.creditHours} {creditHoursText}
            </span>
            {course.majorsOffered.map((major, i) => (
              <span key={i} className={cardStyles["tag"]}>
                <i className={`fa-solid ${major === "CMPE" ? "fa-microchip" : "fa-laptop-code"}`}></i>{" "}
                {major === "CMPS" ? "CS" : "CE"}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const classCount = courses.length * 2;
  const classesTaughtText = classCount === 1 ? "class" : "classes";
  const coursesTaughtText = courses.length === 1 ? "course" : "courses";

  return (
    <>
      <main className={styles["instructor-profile"]}>
        <div className={styles["greetings"]}>
          <h1>Welcome back, {user.name.split(" ")[0]} 👋</h1>
          <p>Here’s your teaching overview for this semester.</p>
        </div>

        <div className={styles["instructor-profile-left"]}>
          <section className={styles["credit-hours-card"]}>
            <div className={styles["credit-hours-text"]}>
              <h2>
                You are teaching <strong>{classCount} {classesTaughtText}</strong> and{" "}
                <strong>{courses.length} {coursesTaughtText}</strong> this semester.
              </h2>
            </div>
            <div className={styles["credit-hours-image"]}>
              <Image
                src="/assets/imgs/unitrack-images/login-page-graphic.png"
                width={240}
                height={180}
                alt="Credit Hours Graphic"
              />
            </div>
          </section>

          <section className={`${styles["courses"]} ${styles["teaching-courses"]}`}>
            <div className={styles["courses-header"]}>
              <div className={styles["courses-header-left"]}>
                <h2>Current Teaching Classes</h2>
                <p>Ongoing classes that you are currently teaching</p>
              </div>
              <div className={styles["courses-header-right"]}>
                <a href="/instructor/grades" className={styles["browse-courses"]}>
                  View all courses <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>
            <div className={styles["course-grid1"]}>
              {teachingClasses.length > 0
                ? teachingClasses.map(renderClassCard)
                : <EmptyContent />}
            </div>
          </section>

          <section className={`${styles["courses"]} ${styles["pending-classes-section"]}`}>
            <div className={styles["courses-header"]}>
              <div className={styles["courses-header-left"]}>
                <h2>Pending Approval</h2>
                <p>These classes are waiting to be opened by the administration</p>
              </div>
              <div className={styles["courses-header-right"]}>
                <a href="/instructor/grades" className={styles["browse-courses"]}>
                  View all courses <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>
            <div className={styles["course-grid3"]}>
              {pendingClasses.length > 0
                ? pendingClasses.map(renderClassCard)
                : <EmptyContent />}
            </div>
          </section>
        </div>

        <div className={styles["instructor-profile-right"]}>
          <section className={styles["about-me-div"]}>
            <h3>About Me</h3>
            <div className={styles["about-me-content"]}>
              <img
                src={user.avatar}
                alt="User Avatar"
                className={styles["about-me-avatar"]}
              />
              <div className={styles["about-me-content-right"]}>
                <h2>{user.name}</h2>
                <span>{user.email}</span>
                <span className={styles["department-tag"]}>CSE Department</span>
                <span className={styles["college-tag"]}>College of Engineering</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <ClassModal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} />
    </>
  );
}
