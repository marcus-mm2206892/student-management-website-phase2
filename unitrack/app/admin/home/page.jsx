"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/app/styles/admin-home-page.module.css";
import cardStyles from "@/app/styles/course-card-profile.module.css";
import ClassModal from "@/app/components/ClassModal";
import EmptyContent from "@/app/components/EmptyContent";
import { getPendingApprovalClassesAction } from "@/app/action/server-actions";

export default function AdminHome() {
  const [pendingClasses, setPendingClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [showClassModal, setShowClassModal] = useState(false);
  const [user, setUser] = useState({
    firstName: "Admin",
    lastName: "",
    email: "admin@qu.com",
    profileImage: "/assets/imgs/user-profileImages/male1.png",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPendingApprovalClassesAction();
      if (Array.isArray(response)) setPendingClasses(response);
    };

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

    fetchData();
  }, []);

  const openClassModal = (cls) => {
    setSelectedClass(cls);
    setShowClassModal(true);
  };

  const approvedClasses = pendingClasses.filter(c => c.classStatus === "approved");
  const closedClasses = pendingClasses.filter(c => c.classStatus === "rejected");
  const totalClasses = pendingClasses.length;
  const students = new Array(432).fill({});
  const instructors = new Array(25).fill({});
  const majors = ["CMPS", "CMPE"];
  const majorsText = "Computer Science and Computer Engineering";

  return (
    <main className={styles["admin-profile"]}>
      {/* GREETINGS */}
      <section className={styles["greetings"]}>
        <h2>Welcome back, {user.firstName}!</h2>
        <p>Manage courses and view university stats from your dashboard.</p>
      </section>

      {/* LEFT PANEL */}
      <section className={styles["admin-profile-left"]}>

        {/* Approval Notice Card */}
        <div className={styles["credit-hours-card"]}>
          <div className={styles["credit-hours-text"]}>
            <h2>
              You have <strong>{pendingClasses.length} courses</strong> awaiting approval.
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

        {/* Pending Classes Section */}
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
            {pendingClasses.length === 0 ? (
              <EmptyContent />
            ) : (
              pendingClasses.slice(0, 10).map((cls, index) => {
                const creditHoursText = "credit hour" + (cls.creditHours === 1 ? "" : "s");
                return (
                  <div
                    className={cardStyles["course-card"]}
                    key={index}
                    onClick={() => openClassModal(cls)}
                  >
                    <div className={cardStyles["course-image"]}>
                      <img
                        src={cls.courseImage}
                        alt="Course"
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
                      <h3>{cls.courseName}</h3>
                      <p className={cardStyles["course-subtitle"]}>{cls.description}</p>
                      <div className={cardStyles["course-tags"]}>
                        <span className={cardStyles["tag"]}>
                          <i className="fa-solid fa-hourglass-half"></i>{" "}
                          {cls.creditHours} {creditHoursText}
                        </span>
                        {cls.majors?.map((major, i) => (
                          <span className={cardStyles["tag"]} key={i}>
                            <i className={`fa-solid ${major === "CMPE" ? "fa-microchip" : "fa-laptop-code"}`}></i>{" "}
                            {major === "CMPS" ? "CS" : "CE"}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

        </div>

       
      </section>

      {/* RIGHT PANEL */}
      <section className={styles["admin-profile-right"]}>
        {/* About Me Section */}
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

        {/* University Info Section */}
        <section className={styles["university-info-div"]}>
          <h3>University Information</h3>

          <div className={`${styles["info-card"]} ${styles["approved-classes-total"]}`}>
            <h3 className={styles["content-info-attribute"]}>Number of Approved Classes</h3>
            <div className={styles["info-text"]}>
              <h2 className={styles["number-tag"]}>{approvedClasses.length} of {totalClasses}</h2>
              <p><span>{Math.round((approvedClasses.length / totalClasses) * 100)}%</span> of all courses are approved</p>
            </div>
          </div>

          <div className={`${styles["info-card"]} ${styles["pending-classes-total"]}`}>
            <h3 className={styles["content-info-attribute"]}>Number of Eligible Classes</h3>
            <div className={styles["info-text"]}>
              <h2 className={styles["number-tag"]}>
                {pendingClasses.length} of {totalClasses}
              </h2>
              <p>
                <span>
                  {Math.round((pendingClasses.length / totalClasses) * 100)}%
                </span>{" "}
                of all courses are ready to be approved
              </p>

            </div>
          </div>

          <div className={`${styles["info-card"]} ${styles["pending-classes-total"]}`}>
            <h3 className={styles["content-info-attribute"]}>Number of Pending Classes</h3>
            <div className={styles["info-text"]}>
              <h2 className={styles["number-tag"]}>
              {pendingClasses.length} of {totalClasses}
              </h2>
              <p>
                <span>
                  {Math.round((pendingClasses.length / totalClasses) * 100)}%
                </span>{" "}
                of all courses are pending
              </p>
            </div>
          </div>

          <div className={`${styles["info-card"]} ${styles["rejected-classes-total"]}`}>
            <h3 className={styles["content-info-attribute"]}>Number of Rejected Classes</h3>
            <div className={styles["info-text"]}>
              <h2 className={styles["number-tag"]}>{closedClasses.length} of {totalClasses}</h2>
              <p><span>{Math.round((closedClasses.length / totalClasses) * 100)}%</span> of all courses are rejected</p>
            </div>
          </div>

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

      {showClassModal && (
        <ClassModal isVisible={showClassModal} onClose={() => setShowClassModal(false)} />
      )}

    </main>
  );
}
