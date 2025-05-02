"use client";
import styles from "@/app/styles/footer.module.css";
import ThemeResponsiveLogo from "./ThemeResponsiveLogo";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer({ user }) {
  const [links, setLinks] = useState([]);

  const homeLink =
  user?.role === "student"
    ? "/student/home"
    : user?.role === "instructor"
    ? "/instructor/home"
    : user?.role === "admin"
    ? "/admin/home"
    : "/";

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
            <Link href={homeLink}>
                <ThemeResponsiveLogo
                    type="icon"
                    className={styles["unitrack-logo"]}
                    alt="UniTrack Logo"
                />
            </Link>


            <div className={styles["contact-texts"]}>
                <h1>Contact Us</h1>
                <a href="mailto:unitrack@qu.edu.qa">unitrack@qu.edu.qa</a>
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

          <div className={styles["links-content"]}>
            <h3>Legal & Policies</h3>
            <ul>
            <li>
                <i className="fa-solid fa-scroll"></i>
                <Link href="#terms-and-conditions" className={styles["text-link"]}>
                Terms & Conditions
                </Link>
            </li>
            <li>
                <i className="fa-solid fa-user-shield"></i>
                <Link href="#privacy-policy" className={styles["text-link"]}>
                Privacy Policy
                </Link>
            </li>
            <li>
                <i className="fa-solid fa-shield-halved"></i>
                <Link href="#data-protection" className={styles["text-link"]}>
                Data Protection
                </Link>
            </li>
            </ul>
        </div>

        <div className={styles["links-content"]}>
            <h3>Others</h3>
            <ul>
            <li>
                <i className="fa-solid fa-circle-question"></i>
                <Link href="#help" className={styles["text-link"]}>
                Help & Support
                </Link>
            </li>
            <li>
                <i className="fa-solid fa-university"></i>
                <Link href="#location" className={styles["text-link"]}>
                Qatar University
                </Link>
            </li>
            </ul>
        </div>
        </div>

        

        
      </div>

      <hr className={styles.hr} />

      <div className={styles["bottom-half"]}>
        <div className={styles["footer-info"]}>
            <span>
                Made with ♥️ & ☕️ by{" "}
                <a className={`${styles["text-link"]} ${styles["dev-name"]}`} href="">
                    @marcusmonteiro
                </a>
                ,{" "}
                <a className={`${styles["text-link"]} ${styles["dev-name"]}`} href="">
                    @joshcalma
                </a>
                ,{" "}
                <a className={`${styles["text-link"]} ${styles["dev-name"]}`} href="">
                    @mohdbashar
                </a>
                , &{" "}
                <a className={`${styles["text-link"]} ${styles["dev-name"]}`} href="">
                    @audrecaraig
                </a>
            </span>

          <div>
            <div>
              <span>©2025 UniTrack</span>
            </div>
            <span className={styles["version-tag"]}>v1.0</span>
          </div>
        </div>
        <div className={styles["unitrack-name"]}>
          <span>UniTrack</span>
        </div>
      </div>
    </footer>
  );
}
