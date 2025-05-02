"use client";
import styles from "@/app/styles/footer.module.css";
import ThemeResponsiveLogo from "./ThemeResponsiveLogo";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer({ user }) {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (!user?.role) return;

    const role = user.role;

    if (role === "student") {
      setLinks([
        { icon: "fa-solid fa-book", text: "Browse Courses", href: "/browse" },
        { icon: "fa-solid fa-clipboard-check", text: "Register", href: "/student/register" },
        { icon: "fa-solid fa-id-card", text: "My Profile", href: "/student/profile" },
        { icon: "fa-solid fa-route", text: "Learning Path", href: "/student/learning-path" },
      ]);
    } else if (role === "instructor") {
      setLinks([
        { icon: "fa-solid fa-chalkboard", text: "Dashboard", href: "/instructor/home" },
        { icon: "fa-solid fa-pen", text: "Gradebook", href: "/instructor/grades" },
        { icon: "fa-solid fa-book", text: "Browse Courses", href: "/browse" },
      ]);
    } else if (role === "admin") {
      setLinks([
        { icon: "fa-solid fa-plus", text: "Create Course", href: "/admin/create-course" },
        { icon: "fa-solid fa-users", text: "Create Class", href: "/admin/create-class" },
        { icon: "fa-solid fa-calendar", text: "View Schedules", href: "/admin/schedules" },
        { icon: "fa-solid fa-chart-column", text: "Statistics", href: "/admin/statistics" },
        { icon: "fa-solid fa-book", text: "Browse Courses", href: "/browse" },
        { icon: "fa-solid fa-list-check", text: "Class Status", href: "/admin/class-status" },
      ]);
    }
  }, [user]);

  return (
    <footer className={styles.footer}>
      <div className={styles["top-half"]}>
        <div className={styles["contact-div"]}>
            <ThemeResponsiveLogo
                type="icon"
                className={styles["unitrack-logo"]}
                alt="UniTrack Logo"
            />

            <div className={styles["contact-texts"]}>
                <h1>Contact Us</h1>
                <a href="mailto:unitrack@qu.edu.qa">unitrack@qu.edu.qa</a>
                <a href="tel:+97412345678">+974 1234 5678</a>
            </div>
            <div className={styles["social-media-buttons"]}>
                <div id="discord"><i className="fa-brands fa-discord"></i></div>
                <div id="github"><i className="fa-brands fa-github"></i></div>
                <div id="instagram"><i className="fa-brands fa-instagram"></i></div>
                <div id="coffee"><i className="fa-solid fa-mug-hot"></i></div>
            </div>
        </div>

        <div className={styles["links-div"]}>
          <div className={styles["links-content"]}>
            <h3>Quick Links</h3>
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <i className={link.icon}></i>
                  <Link href={link.href} className={styles["text-link"]}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <hr className={styles.hr} />

      <div className={styles["bottom-half"]}>
        <div className={styles["footer-info"]}>
          <span>© 2025 UniTrack. All rights reserved.</span>
          <div>
            <span className={styles["version-tag"]}>v1.0</span>
            <span className={styles["dev-name"]}>Made with 💙 by Team UniTrack</span>
          </div>
        </div>
        <div className={styles["unitrack-name"]}>
          <span>UniTrack</span>
        </div>
      </div>
    </footer>
  );
}
