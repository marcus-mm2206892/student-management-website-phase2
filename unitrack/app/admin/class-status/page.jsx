"use client";

import { useEffect, useState } from "react";
import styles from "@/app/styles/class-status.module.css";
import NoResults from "@/app/components/NoResults";
import AlertModal from "@/app/components/AlertModal";
import ClassModal from "@/app/components/ClassModal";
import {
  getAllClassesAction,
  getAllUsersAction,
  updateClassAction,
} from "@/app/action/server-actions";

export default function ApproveClass() {
  const [searchTerm, setSearchTerm] = useState("");
  const [classes, setClasses] = useState([]);
  const [users, setUsers] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState({ title: "", description: "" });
  const [classModalVisible, setClassModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const [classList, userList] = await Promise.all([
        getAllClassesAction(),
        getAllUsersAction(),
      ]);
      setClasses(classList);
      setUsers(userList);
    };
    fetchData();
  }, []);

  const getInstructorName = (instructorEmail) => {
    const user = users.find((u) => u.email === instructorEmail);
    return user ? `${user.firstName} ${user.lastName}` : "Unknown";
  };

  const filteredClasses = classes.filter((cls) =>
    `${cls.courseId} ${cls.course?.courseName ?? ""} ${getInstructorName(cls.instructors?.[0]?.email)}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setNoResults(searchTerm && filteredClasses.length === 0);
  }, [searchTerm, filteredClasses]);

  const getStatusClass = (status) => {
    return status === "open"
      ? styles["status-approved"]
      : status === "pending"
      ? styles["status-pending"]
      : styles["status-rejected"];
  };

  const handleStatusChange = async (index, newStatus) => {
    const updatedClasses = [...classes];
    const targetClass = updatedClasses[index];

    try {
      await updateClassAction(targetClass.classId, { classStatus: newStatus });
      targetClass.classStatus = newStatus;
      setClasses(updatedClasses);
      setAlertContent({
        title: "Status Updated",
        description: `Class ${targetClass.courseId} is now marked as ${newStatus}.`,
      });
    } catch (err) {
      setAlertContent({
        title: "Update Failed",
        description: `Could not update status for ${targetClass.courseId}.`,
      });
    }
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
              <tr key={cls.classId}>
                <td className={styles["data"]}>
                  <span className={styles["course-no-span"]} onClick={() => setClassModalVisible(true)}>
                    {cls.courseId}
                  </span>
                </td>
                <td className={styles["data"]}>{cls.course?.courseName ?? "Unknown"}</td>
                <td className={styles["data"]}>
                  {getInstructorName(cls.instructors?.[0]?.email)}
                </td>
                <td className={styles["data"]}>{cls.section}</td>
                <td className={styles["data"]}>
                  <span className={styles["course-enrollment-span"]}>
                    {cls.enrollmentActual} / {cls.enrollmentMaximum}
                  </span>
                </td>
                <td className={styles["data"]}>
                  <div className={`${styles["status-badge"]} ${getStatusClass(cls.classStatus)}`}>
                    <span className={styles["status-circle"]}></span>
                    {cls.classStatus.charAt(0).toUpperCase() + cls.classStatus.slice(1)}
                  </div>
                </td>
                <td className={styles["data"]}>
                  <select
                    className={styles["status-dropdown"]}
                    value={cls.classStatus}
                    onChange={(e) => handleStatusChange(i, e.target.value)}
                  >
                    <option value="open">Open</option>
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
