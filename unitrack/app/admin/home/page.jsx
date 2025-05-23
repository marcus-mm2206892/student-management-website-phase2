"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/app/styles/admin-home-page.module.css";
import cardStyles from "@/app/styles/course-card-profile.module.css";
import ClassModal from "@/app/components/ClassModal";
import EmptyContent from "@/app/components/EmptyContent";

import {
  getAllClassesAction,
  getApprovedClassesAction,
  getPendingClassesAction,
  getRejectedClassesAction,
  getAllStudentsAction,
  getAllInstructorsAction,
  getAllMajorsAction,
  getPendingApprovalClassesAction,
  getAllCoursesAction,
} from "@/app/action/server-actions";

export default function AdminHome() {
  const [allClasses, setAllClasses] = useState([]);
  const [approvedClasses, setApprovedClasses] = useState([]);
  const [pendingClasses, setPendingClasses] = useState([]);
  const [rejectedClasses, setRejectedClasses] = useState([]);
  const [eligiblePendingClasses, setEligiblePendingClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [majors, setMajors] = useState([]);
  const [courses, setCourses] = useState([]);

  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showClassModal, setShowClassModal] = useState(false);

  const [user, setUser] = useState({
    firstName: "Admin",
    lastName: "",
    email: "admin@qu.com",
    profileImage: "/assets/imgs/user-profile-images/male1.png",
  });

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setUser({
          firstName: parsed.firstName || "Admin",
          lastName: parsed.lastName || "",
          email: parsed.email || "admin@qu.com",
          profileImage: parsed.profileImage || "/assets/imgs/user-profile-images/male1.png",
        });
      } catch (err) {
        console.error("Error parsing user from localStorage:", err);
      }
    }

    const fetchStats = async () => {
      const [
        all,
        approved,
        pending,
        rejected,
        studentList,
        instructorList,
        majorList,
        approvalCandidates,
        courseList,
      ] = await Promise.all([
        getAllClassesAction(),
        getApprovedClassesAction(),
        getPendingClassesAction(),
        getRejectedClassesAction(),
        getAllStudentsAction(),
        getAllInstructorsAction(),
        getAllMajorsAction(),
        getPendingApprovalClassesAction(),
        getAllCoursesAction(),
      ]);

      setAllClasses(all || []);
      setApprovedClasses(approved || []);
      setPendingClasses(pending || []);
      setRejectedClasses(rejected || []);
      setStudents(studentList || []);
      setInstructors(instructorList || []);
      setMajors(majorList || []);
      setCourses(courseList || []);
      setEligiblePendingClasses((approvalCandidates || []).filter((cls) => cls.enrollmentActual >= 5));
    };

    fetchStats();
  }, []);

  const openClassModal = (cls, course) => {
    setSelectedClass(cls);
    setSelectedCourse(course);
    setShowClassModal(true);
  };

  const renderClassCard = (cls) => {
    const course = courses.find((c) => c.courseId === cls.courseId);
    if (!course) return null;

    const creditHoursText = course.creditHours === 1 ? "credit hour" : "credit hours";

    return (
      <div
        key={cls.classId}
        className={cardStyles["course-card"]}
        onClick={() => openClassModal(cls, course)}
      >
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

  const majorsText = majors.map((m) => m.majorName).join(" and ");
  const totalClasses = allClasses.length;

  return (
    <main className={styles["admin-profile"]}>
      <section className={styles["greetings"]}>
        <h2>Welcome back, {user.firstName}!</h2>
        <p>Manage courses and view university stats from your dashboard.</p>
      </section>

      <section className={styles["admin-profile-left"]}>
        <div className={styles["credit-hours-card"]}>
          <div className={styles["credit-hours-text"]}>
            <h2>
              You have <strong>{eligiblePendingClasses.length} courses</strong> awaiting approval.
            </h2>
          </div>
          <div className={styles["credit-hours-image"]}>
            <Image
              src="/assets/imgs/unitrack-images/login-page-graphic.png"
              width={200}
              height={200}
              alt="Credit Hours Graphic"
            />
          </div>
        </div>

        <div className={`${styles["courses"]} ${styles["pending-courses"]}`}>
          <div className={styles["courses-header"]}>
            <div className={styles["courses-header-left"]}>
              <h2>Pending Classes</h2>
              <p>Classes with 5 or more waitlisted students waiting for your approval.</p>
            </div>
            <div className={styles["courses-header-right"]}>
              <a href="/admin/class-status" className={styles["browse-courses"]}>
                View all class status list <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
          </div>

          <div className={styles["course-grid"]}>
            {eligiblePendingClasses.length === 0 ? (
              <EmptyContent />
            ) : (
              eligiblePendingClasses.slice(0, 10).map(renderClassCard)
            )}
          </div>
        </div>
      </section>

      <section className={styles["admin-profile-right"]}>
        <section className={styles["about-me-div"]}>
          <h3>About Me</h3>
          <div className={styles["about-me-content"]}>
            <img
              src={user.profileImage}
              alt="User Avatar"
              className={styles["about-me-avatar"]}
            />
            <div className={styles["about-me-content-right"]}>
              <h2>{user.firstName} {user.lastName}</h2>
              <span>{user.email}</span>
              <span className={styles["college-tag"]}>University Admin</span>
            </div>
          </div>
        </section>

        <section className={styles["university-info-div"]}>
          <h3>University Information</h3>

          <InfoCard label="Number of Approved Classes" value={approvedClasses.length} total={totalClasses} />
          <InfoCard label="Number of Eligible Classes" value={eligiblePendingClasses.length} total={totalClasses} />
          <InfoCard label="Number of Pending Classes" value={pendingClasses.length} total={totalClasses} />
          <InfoCard label="Number of Rejected Classes" value={rejectedClasses.length} total={totalClasses} />

          <div className={`${styles["info-card"]} ${styles["students-total"]}`}>
            <h3 className={styles["content-info-attribute"]}>Total Students</h3>
            <div className={styles["info-text"]}>
              <h2 className={styles["number-tag"]}>{students.length}</h2>
              <p><span>{students.length} students</span> are taking classes</p>
            </div>
          </div>

          <div className={`${styles["info-card"]} ${styles["instructors-total"]}`}>
            <h3 className={styles["content-info-attribute"]}>Total Instructors</h3>
            <div className={styles["info-text"]}>
              <h2 className={styles["number-tag"]}>{instructors.length}</h2>
              <p><span>{instructors.length} instructors</span> are teaching classes</p>
            </div>
          </div>

          <div className={`${styles["info-card"]} ${styles["majors-offered-total"]}`}>
            <h3 className={styles["content-info-attribute"]}>Total Majors Offered</h3>
            <div className={styles["info-text"]}>
              <h2 className={styles["number-tag"]}>{majors.length} Majors</h2>
              <p>{majorsText} {majors.length <= 1 ? "is" : "are"} offered</p>
            </div>
          </div>
        </section>
      </section>

      {showClassModal && selectedClass && selectedCourse && (
        <ClassModal
          isVisible={showClassModal}
          onClose={() => setShowClassModal(false)}
          cls={selectedClass}
          course={selectedCourse}
        />
      )}
    </main>
  );
}

function InfoCard({ label, value, total }) {
  const percent = Math.round((value / total) * 100) || 0;
  return (
    <div className={styles["info-card"]}>
      <h3 className={styles["content-info-attribute"]}>{label}</h3>
      <div className={styles["info-text"]}>
        <h2 className={styles["number-tag"]}>{value} of {total}</h2>
        <p><span>{percent}%</span> of all courses are {label.toLowerCase().replace("number of ", "")}</p>
      </div>
    </div>
  );
}
