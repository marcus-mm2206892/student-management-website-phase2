"use client";

import { useEffect, useState } from "react";
import styles from "@/app/styles/class-status.module.css";
import NoResults from "@/app/components/NoResults";
import AlertModal from "@/app/components/AlertModal";
import ClassModal from "@/app/components/ClassModal";

export default function ApproveClass() {
  const [searchTerm, setSearchTerm] = useState("");
  const [classes, setClasses] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState({ title: "", description: "" });
  const [classModalVisible, setClassModalVisible] = useState(false);

  useEffect(() => {
    const dummyClasses = [
      {
        courseId: "CMPS350",
        name: "Web Development Fundamentals",
        instructor: "John Doe",
        section: "L01",
        enrollment: "12 / 35",
        status: "approved",
      },
      {
        courseId: "CMPE202",
        name: "Computer Organization",
        instructor: "Jane Smith",
        section: "L02",
        enrollment: "20 / 30",
        status: "pending",
      },
      {
        courseId: "ELEC101",
        name: "Intro to Circuits",
        instructor: "Ahmed Zaki",
        section: "L03",
        enrollment: "30 / 30",
        status: "rejected",
      },
    ];
    setClasses(dummyClasses);
  }, []);

  const filteredClasses = classes.filter((c) =>
    `${c.courseId} ${c.name} ${c.instructor}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setNoResults(searchTerm && filteredClasses.length === 0);
  }, [searchTerm, filteredClasses]);

  const getStatusClass = (status) => {
    return status === "approved"
      ? styles["status-approved"]
      : status === "pending"
      ? styles["status-pending"]
      : styles["status-rejected"];
  };

  const handleStatusChange = (index, newStatus) => {
    const updated = [...classes];
    updated[index].status = newStatus;
    setClasses(updated);
    setAlertContent({
      title: "Status Updated",
      description: `Class ${updated[index].courseId} is now marked as ${newStatus}.`,
    });
    setAlertOpen(true);
  };

  return (
    <main className={styles.approve}>
      <header className={styles["approve-header"]}>
        <div className={styles["approve-top-header"]}>
          <h1 className={styles["approve-title"]}>Class Status</h1>
        </div>
        <p className={styles["approve-description"]}>
          Change and review the status of all classes for this semester.
        </p>
      </header>

      <section className={styles["approve-body"]}>
        <table className={styles.table}>
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

                  {searchTerm && filteredClasses.length > 0 && (
                    <div className={styles["search-info"]}>
                      <p>
                        Showing <strong>{filteredClasses.length}</strong> result(s) for "<em>{searchTerm}</em>"
                      </p>
                    </div>
                  )}
                </div>
              </th>
            </tr>
            {!noResults && (
              <tr>
                <th>Course No.</th>
                <th>Name</th>
                <th>Instructor</th>
                <th>Section</th>
                <th>Enrollment</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            )}
          </thead>

          <tbody>
            {filteredClasses.map((cls, i) => (
              <tr key={i}>
                <td className={styles["data"]}>
                  <span
                    className={styles["course-no-span"]}
                    onClick={() => setClassModalVisible(true)}
                  >
                    {cls.courseId}
                  </span>
                </td>
                <td className={styles["data"]}>{cls.name}</td>
                <td className={styles["data"]}>{cls.instructor}</td>
                <td className={styles["data"]}>{cls.section}</td>
                <td className={styles["data"]}>
                  <span className={styles["course-enrollment-span"]}>{cls.enrollment}</span>
                </td>
                <td className={styles["data"]}>
                  <div className={`${styles["status-badge"]} ${getStatusClass(cls.status)}`}>
                    <span className={styles["status-circle"]}></span>
                    {cls.status.charAt(0).toUpperCase() + cls.status.slice(1)}
                  </div>
                </td>
                <td className={styles["data"]}>
                  <select
                    className={styles["status-dropdown"]}
                    value={cls.status}
                    onChange={(e) => handleStatusChange(i, e.target.value)}
                  >
                    <option value="approved">Approve</option>
                    <option value="pending">Pending</option>
                    <option value="rejected">Reject</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {noResults && (
          <div style={{ display: "flex" }}>
            <NoResults />
          </div>
        )}
      </section>

      <ClassModal isVisible={classModalVisible} onClose={() => setClassModalVisible(false)} />

      <AlertModal
        isOpen={alertOpen}
        title={alertContent.title}
        description={alertContent.description}
        onClose={() => setAlertOpen(false)}
      />
    </main>
  );
}
