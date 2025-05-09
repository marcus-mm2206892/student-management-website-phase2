"use client";

import styles from "@/app/styles/statistics.module.css";

export default function StatisticsPage() {
  const stats = [
    { label: "Total Enrolled Students", value: "432", icon: "fa-users" },
    { label: "Top Student", value: "Aya Al-Kuwari (GPA 3.96)", icon: "fa-user-graduate" },
    { label: "Most Enrolled Course", value: "CMPS350 - Web Development", icon: "fa-code" },
    { label: "Average Student GPA", value: "3.26", icon: "fa-chart-line" },
    { label: "Most Classes Offered", value: "CMPS497 (6 Classes)", icon: "fa-layer-group" },
    { label: "Total Classes Running", value: "102 Classes", icon: "fa-chalkboard" },
    { label: "Top 3 Most Popular Courses", value: "CMPS303, CMPE202, CMPS405", icon: "fa-star" },
    { label: "Top Performing Major", value: "CMPS (Avg GPA 3.32)", icon: "fa-laptop-code" },
    { label: "Largest Major", value: "CMPE (236 Students)", icon: "fa-microchip" },
    { label: "Courses Shared Between Majors", value: "41", icon: "fa-handshake" },
    { label: "Most Required Course", value: "CMPS303 (Required in 2 Majors)", icon: "fa-file-alt" },
    { label: "Course With Most Sections", value: "CMPS350 (7 Sections)", icon: "fa-copy" },
  ];

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles["statistics-top-header"]}>
          <h1 className={styles["statistics-title"]}>University Statistics Dashboard</h1>
        </div>
        <p className={styles["statistics-description"]}>
          A real-time overview of academic trends, course performance, and student engagement.
        </p>
      </header>

      <section className={styles.statsContainer}>
        <div className={styles.grid}>
          {stats.map((stat, idx) => (
            <div className={styles.card} key={idx}>
              <i className={`fa-solid ${stat.icon}`} style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: "var(--clr-contrast-a20)" }}></i>
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
