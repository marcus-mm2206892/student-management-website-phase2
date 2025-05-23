"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/app/styles/instructor-home-page.module.css";
import cardStyles from "@/app/styles/course-card-profile.module.css";
import EmptyContent from "@/app/components/EmptyContent";
import ClassModal from "@/app/components/ClassModal";
import { useSearchParams } from "next/navigation";
import {
  getClassByIdAction,
  getCourseByIdAction,
  getInstructorByEmailAction,
} from "@/app/action/server-actions";

export default function InstructorHomePage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [instructor, setInstructor] = useState(null);
  const [user, setUser] = useState(null);
  const [classes, setClasses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [teachingClasses, setTeachingClasses] = useState([]);
  const [pendingClasses, setPendingClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [coursesBeingTaught, setCoursesBeingTaught] = useState([]);

  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  useEffect(() => {
    async function fetchInstructor() {
      let emailToUse = email;

      // fallback to localStorage if searchParams missing
      if (!emailToUse) {
        const stored = localStorage.getItem("user");
        if (stored) {
          const parsed = JSON.parse(stored);
          emailToUse = parsed?.email;
        }
      }

      if (emailToUse) {
        const result = await getInstructorByEmailAction(emailToUse);
        if (result) setInstructor(result);
      }
    }

    fetchInstructor();
  }, [email]);

  useEffect(() => {
    if (instructor) {
      const stored = localStorage.getItem("user");
      const parsed = stored ? JSON.parse(stored) : {};

      setUser({
        firstName: searchParams.get("firstName") || parsed?.firstName || "Unknown",
        lastName: searchParams.get("lastName") || parsed?.lastName || "",
        email: email || parsed?.email || "unknown@qu.com",
        department: instructor.department,
        college: instructor.college,
        avatar: parsed?.profileImage || "/assets/imgs/user-profile-images/male1.png",
      });
    }
  }, [instructor, searchParams, email]);

  useEffect(() => {
    async function fetchClasses() {
      if (!instructor) return;
      const newClasses = await Promise.all(
        instructor.teachingClasses.map((tc) => getClassByIdAction(tc.classId))
      );
      setClasses(newClasses);
    }

    fetchClasses();
  }, [instructor]);

  useEffect(() => {
    async function fetchCourses() {
      if (!classes.length) return;
      const newCourses = [];
      for (const c of classes) {
        const course = await getCourseByIdAction(c.courseId);
        if (course && !newCourses.some((crs) => crs.courseId === course.courseId)) {
          newCourses.push(course);
        }
      }
      setCourses(newCourses);
    }

    fetchCourses();
  }, [classes]);

  useEffect(() => {
    if (classes.length) {
      const teaching = [];
      const pending = [];
      for (const c of classes) {
        if (c.classStatus === "open") teaching.push(c);
        else if (c.classStatus === "pending") pending.push(c);
      }
      setTeachingClasses(teaching);
      setPendingClasses(pending);
    }
  }, [classes]);

  useEffect(() => {
    if (teachingClasses.length && courses.length) {
      const uniqueCourses = [];
      for (const cls of teachingClasses) {
        const course = courses.find((c) => c.courseId === cls.courseId);
        if (course && !uniqueCourses.some((uc) => uc.courseId === course.courseId)) {
          uniqueCourses.push(course);
        }
      }
      setCoursesBeingTaught(uniqueCourses);
    }
  }, [teachingClasses, courses]);

  const handleClassClick = (cls, course) => {
    setSelectedClass(cls);
    setSelectedCourse(course);
    setIsModalVisible(true);
  };

  const renderClassCard = (cls) => {
    const course = courses.find((c) => c.courseId === cls.courseId);
    if (!course) return null;

    const creditHoursText = course.creditHours === 1 ? "credit hour" : "credit hours";

    return (
      <div key={cls.classId} className={cardStyles["course-card"]} onClick={() => handleClassClick(cls, course)}>
        <div className={cardStyles["course-image"]}>
          <img src={course.courseImage} alt="Course" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
            {course.CourseMajorOfferings?.map((major, i) => (
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

  if (!user || !instructor) return <p>Loading...</p>;

  const classCount = teachingClasses.length;
  const classesTaughtText = classCount === 1 ? "class" : "classes";
  const coursesTaughtText = coursesBeingTaught.length === 1 ? "course" : "courses";

  return (
    <main className={styles["instructor-profile"]}>
      <div className={styles["greetings"]}>
        <h1>Welcome back, Professor {user.firstName} {user.lastName} 👋</h1>
        <p>Here’s your teaching overview for this semester.</p>
      </div>

      <div className={styles["instructor-profile-left"]}>
        <section className={styles["credit-hours-card"]}>
          <div className={styles["credit-hours-text"]}>
            <h2>
              You are teaching <strong>{classCount} {classesTaughtText}</strong> and{" "}
              <strong>{coursesBeingTaught.length} {coursesTaughtText}</strong> this semester.
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
            {teachingClasses.length > 0 ? teachingClasses.map(renderClassCard) : <EmptyContent />}
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
            {pendingClasses.length > 0 ? pendingClasses.map(renderClassCard) : <EmptyContent />}
          </div>
        </section>
      </div>

      <section className={styles["instructor-profile-right"]}>
        <section className={styles["about-me-div"]}>
          <h3>About Me</h3>
          <div className={styles["about-me-content"]}>
            <img src={user.avatar} alt="User Avatar" className={styles["about-me-avatar"]} />
            <div className={styles["about-me-content-right"]}>
              <h2>{user.firstName} {user.lastName}</h2>
              <span>{user.email}</span>
              <span className={styles["college-tag"]}>
                College of {user.college?.toLowerCase().replace(/\b\w/g, c => c.toUpperCase())}
              </span>
              <span className={styles["department-tag"]}>{user.department} Department</span>
            </div>
          </div>
        </section>
      </section>

      {selectedClass && selectedCourse && (
        <ClassModal
          cls={selectedClass}
          course={selectedCourse}
          isVisible={isModalVisible}
          onClose={() => {
            setIsModalVisible(false);
            setSelectedClass(null);
            setSelectedCourse(null);
          }}
        />
      )}
    </main>
  );
}
