
'use client';

import React, { useEffect } from 'react';
import styles from '@/app/styles/navbar.module.css';
import ThemeResponsiveLogo from './ThemeResponsiveLogo';
import Link from 'next/link';

export default function NavBar({ user }) {
  const { firstName, lastName, email, role } = user || {};
  const avatar = "/assets/imgs/user-profile-images/male1.png";

  const homeLink =
  user?.role === "student"
    ? "/student/home"
    : user?.role === "instructor"
    ? "/instructor/home"
    : user?.role === "admin"
    ? "/admin/home"
    : "/";

  useEffect(() => {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const userDropdown = document.getElementById("userDropdown");
    const userButton = document.getElementById("userMenuButton");
    const closeSidebar = document.getElementById("closeSidebar");
    const closeDropdown = document.getElementById("closeDropdown");
    const browseBtn = document.querySelector(`.${styles['browse-btn']}`);

    const openSidebar = () => {
      sidebar?.classList.add(styles.active);
      overlay?.classList.add(styles.active);
    };

    const closeSidebarFn = () => {
      sidebar?.classList.remove(styles.active);
      overlay?.classList.remove(styles.active);
    };

    const toggleDropdown = () => {
      if (!userDropdown) return;
      if (userDropdown.style.display === "block") {
        userDropdown.style.opacity = "0";
        userDropdown.style.transform = "translateY(-20px)";
        setTimeout(() => (userDropdown.style.display = "none"), 300);
      } else {
        userDropdown.style.display = "block";
        setTimeout(() => {
          userDropdown.style.opacity = "1";
          userDropdown.style.transform = "translateY(0)";
        }, 10);
      }
    };

    const handleClickOutside = (e) => {
      const target = e.target;

      if (
        userDropdown &&
        userButton &&
        !userDropdown.contains(target) &&
        !userButton.contains(target)
      ) {
        userDropdown.style.opacity = "0";
        userDropdown.style.transform = "translateY(-20px)";
        setTimeout(() => {
          userDropdown.style.display = "none";
        }, 300);
      }
    };

    browseBtn?.addEventListener("click", openSidebar);
    closeSidebar?.addEventListener("click", closeSidebarFn);
    overlay?.addEventListener("click", closeSidebarFn);
    userButton?.addEventListener("click", toggleDropdown);
    closeDropdown?.addEventListener("click", toggleDropdown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      browseBtn?.removeEventListener("click", openSidebar);
      closeSidebar?.removeEventListener("click", closeSidebarFn);
      overlay?.removeEventListener("click", closeSidebarFn);
      userButton?.removeEventListener("click", toggleDropdown);
      closeDropdown?.removeEventListener("click", toggleDropdown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  if (!role) return null;

  const className = (...names) => names.map(n => styles[n]).join(' ');

  const renderNavLinks = () => {
    if (role === "student") {
      return (
        <>
          <li className={styles['nav-item']}><Link href="/student/home">Explore</Link></li>
          <li className={styles['nav-item']}><Link href="/browse">Browse Courses</Link></li>
          <li className={styles['nav-item']}><Link href="/student/register">Register Courses</Link></li>
          <li className={styles['nav-item']}><Link href="/student/profile">View Profile</Link></li>
        </>
      );
    }
    if (role === "instructor") {
      return (
        <>
          <li className={styles['nav-item']}><Link href="/instructor/home">Dashboard</Link></li>
          <li className={styles['nav-item']}><Link href="/browse">Browse Courses</Link></li>
        </>
      );
    }
    if (role === "admin") {
      return (
        <>
          <li className={styles['nav-item']}><Link href="/browse">Browse</Link></li>
          <li className={styles['nav-item']}><Link href="/admin/statistics">Statistics</Link></li>
          <li className={styles['nav-item']}><Link href="/admin/create-course">Create Course</Link></li>
          <li className={styles['nav-item']}><Link href="/admin/create-class">Create Class</Link></li>
          <li className={styles['nav-item']}><Link href="/admin/schedules">View Schedules</Link></li>
        </>
      );
    }
  };


  const renderSidebarLinks = () => {
    if (role === "student") {
      return (
        <>
          <li><span className="hover-circle"></span><Link href="/student/home">Explore</Link></li>
          <li><span className="hover-circle"></span><Link href="/browse">Browse Courses</Link></li>
          <li><span className="hover-circle"></span><Link href="/student/register">Register Courses</Link></li>
          <li><span className="hover-circle"></span><Link href="/student/profile">View Profile</Link></li>
          <li><span className="hover-circle"></span><Link href="/student/learning-path">View Learning Path</Link></li>
        </>
      );
    }

    if (role === "instructor") {
      return (
        <>
          <li><span className="hover-circle"></span><Link href="/instructor/home">Dashboard</Link></li>
          <li><span className="hover-circle"></span><Link href="/browse">Browse Courses</Link></li>
          <li><span className="hover-circle"></span><Link href="/instructor/grades">View Grades</Link></li>
        </>
      );
    }

    if (role === "admin") {
      return (
        <>
          <li><span className="hover-circle"></span><Link href="/browse">Browse Courses</Link></li>
          <li><span className="hover-circle"></span><Link href="/admin/statistics">Statistics</Link></li>
          <li><span className="hover-circle"></span><Link href="/admin/create-course">Create Course</Link></li>
          <li><span className="hover-circle"></span><Link href="/admin/create-class">Create Class</Link></li>
          <li><span className="hover-circle"></span><Link href="/admin/schedules">View Schedules</Link></li>
          <li><span className="hover-circle"></span><Link href="/admin/class-status">Class Status</Link></li>
        </>
      );
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={className('navbar-user', 'bordered-div')} id="userMenuButton">
          <div className={styles['nav-item']}>
            <img src={avatar} alt="User" className={className('nav-image', 'user-avatar')} />
            <span className={styles.username}>{firstName} {lastName}</span>
            <i className={`bx bx-chevron-down ${styles['dropdown-icon']}`}></i>
          </div>
        </div>

        <div className={className('nav-bar-logo', 'bordered-div')}>
          <Link href={homeLink}>
            <ThemeResponsiveLogo
              type="icon"
              className={className("unitrack-logo")}
            />
          </Link>
        </div>


        <div className={className('use-cases', 'bordered-div')}>
          <ul className={styles['navbar-menu']}>{renderNavLinks()}</ul>
          <div className={styles['mobile-menu']}>
            <div className={styles['nav-item']}>
              <button className={styles['browse-btn']}><i className="fa-solid fa-list"></i> Browse</button>
            </div>
          </div>
          {role === "student" && <Link href="/student/learning-path"><button className={styles['learningpath-btn']}>Learning Path</button></Link>}
          {role === "instructor" && <Link href="/instructor/grades"><button className={styles['viewgrades-btn']}>View Grades</button></Link>}
          {role === "admin" && <Link href="/admin/class-status"><button className={styles['classstatus-btn']}>Class Status</button></Link>}
        </div>
      </nav>

      <div className={styles['sidebar-overlay']} id="sidebarOverlay"></div>
      <div className={styles.sidebar} id="sidebar">
        <button className={styles['close-btn']} id="closeSidebar">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className={`${styles.circle} ${styles["big-circle"]}`}></div>
        <div className={`${styles.circle} ${styles["small-circle"]}`}></div>

        <div className={styles["sidebar-content"]}>
            <Link href={homeLink}>
                <ThemeResponsiveLogo
                    type="text"
                    className={styles["unitrack-logo-text"]}
                    alt="UniTrack Logo"
                />
            </Link>
          <ul className={styles["menu"]}>{renderSidebarLinks()}</ul>
        </div>
      </div>


      <div className={styles['user-dropdown']} id="userDropdown">
        <div className={styles['dropdown-header']}>
          <div className={styles['top-header']}>
            <img src={avatar} alt="User Avatar" className={styles['dropdown-avatar']} />
            <button className={styles['close-btn']} id="closeDropdown"><i className="fa-solid fa-xmark"></i></button>
          </div>
          <div className={styles['bottom-header']}>
            <h4 className={styles['dropdown-name']}>{firstName} {lastName}</h4>
            <p className={styles['dropdown-email']}>{email}</p>
          </div>
        </div>

        <div className={styles['dropdown-options']}>
          <button className={`${styles['dropdown-btn']} ${styles.profile}`}>
            <div className={styles['icon-box']}><img src={avatar} alt="User Icon" className={styles['profile-icon']} /></div>
            Profile
          </button>
        </div>

        <hr className={`${styles.hr} ${styles['theme-signout']}`} />
        <button className={styles['signout-btn']} onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/";
        }}>
          <i className="fa-solid fa-right-from-bracket"></i> Sign Out
        </button>
      </div>
    </>
  );
}
