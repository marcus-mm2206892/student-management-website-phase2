document.addEventListener("DOMContentLoaded", function () {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!user || !user.role) {
    console.error("No user found in localStorage or role missing.");
    return;
  }

  if (user.role === "student") {
    renderStudentNavbar(user);
    setupStudentNavbarEvents();
  } else if (user.role === "instructor") {
    renderInstructorNavbar(user);
    setupInstructorNavbarEvents();
  } else if (user.role === "admin") {
    renderAdminNavbar(user);
    setupAdminNavbarEvents();
  }
});


// ---------- STUDENT NAVBAR HTML ----------
function renderStudentNavbar(user) {
  document.getElementById("navbarContent").innerHTML = `
      <nav class="navbar">
        <div class="navbar-user bordered-div" id="userMenuButton">
          <div class="nav-item">
            <img src=${"../"+user["profile-image"]} alt="User" class="nav-image user-avatar">
            <span class="username">${user.firstName} ${user.lastName}</span>
            <i class="bx bx-chevron-down dropdown-icon"></i>
          </div>
        </div>
  
        <div class="nav-bar-logo bordered-div">
          <img class="unitrack-logo" src="../assets/imgs/unitrack-images/unitrack-logo-blue.png" alt="User">
        </div>
  
        <div class="use-cases bordered-div">
          <ul class="navbar-menu">
            <div class="nav-item"><li><a href="#">Explore</a></li></div>
            <div class="nav-item"><li><a href="#">Browse Courses</a></li></div>
            <div class="nav-item"><li><a href="#">Register Courses</a></li></div>
            <div class="nav-item"><li><a href="#">View Profile</a></li></div>
          </ul>
  
          <div class="mobile-menu">
            <div class="nav-item">
              <button class="browse-btn">
                <i class="fa-solid fa-list"></i> Browse
              </button>
            </div>
          </div>
  
          <button class="learningpath-btn">Learning Path</button>
        </div>
      </nav>
  
      <div class="sidebar-overlay" id="sidebarOverlay"></div>
      <div class="sidebar" id="sidebar">
        <button class="close-btn" id="closeSidebar">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="circle big-circle"></div>
        <div class="circle small-circle"></div>
        <div>
          <img class="unitrack-logo-text" src="../assets/imgs/unitrack-images/unitrack-logo-text-white.png" alt="UniTrack Logo">
          <ul class="menu">
            <li><span class="hover-circle"></span><a href="#">Explore</a></li>
            <li><span class="hover-circle"></span><a href="#">Browse Courses</a></li>
            <li><span class="hover-circle"></span><a href="#">Register Courses</a></li>
            <li><span class="hover-circle"></span><a href="#">View Profile</a></li>
            <li><span class="hover-circle"></span><a href="#">View Learning Path</a></li>
          </ul>
        </div>
      </div>
  
      <div class="user-dropdown" id="userDropdown">
        <div class="dropdown-header">
          <div class="top-header">
            <img src="${"../"+user["profile-image"]}" alt="User Avatar" class="dropdown-avatar"> 
            <button class="close-btn" id="closeDropdown">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div class="bottom-header">
            <h4 class="dropdown-name">${user.firstName} ${user.lastName}</h4>
            <p class="dropdown-email">${user.email}</p>
          </div>
        </div>        
        <div class="dropdown-options">
          <button class="dropdown-btn profile" onClick=" window.location.href = '../html/student-profile.html'">
            <div class="icon-box">
              <img src="${"../"+user["profile-image"]}" alt="User Icon" class="profile-icon">
            </div>
            Profile
          </button>
        </div>
        <!--
        <hr class="hr options-theme">
        <div class="theme-toggle">
          <div class="theme-option">
            <button class="theme-btn active" id="systemMode"><i class="fa-solid fa-laptop"></i></button>
            <span class="theme-label">System</span>
          </div>
          <div class="theme-option">
            <button class="theme-btn" id="lightMode"><i class="fa-solid fa-sun"></i></button>
            <span class="theme-label">Light</span>
          </div>
          <div class="theme-option">
            <button class="theme-btn" id="darkMode"><i class="fa-solid fa-moon"></i></button>
            <span class="theme-label">Dark</span>
          </div>
        </div>
        -->
        <hr class="hr theme-signout">
        <button class="signout-btn"><i class="fa-solid fa-right-from-bracket"></i> Sign Out</button>
      </div>
    `;
}

// ---------- INSTRUCTOR NAVBAR HTML ----------
function renderInstructorNavbar(user) {
  document.getElementById("navbarContent").innerHTML = `
      <nav class="navbar">
        <div class="navbar-user bordered-div" id="userMenuButton">
          <div class="nav-item">
            <img src="${"../"+user["profile-image"]}" alt="User" class="nav-image user-avatar">
            <span class="username">${user.firstName} ${user.lastName}</span>
            <i class="bx bx-chevron-down dropdown-icon"></i>
          </div>
        </div>
  
        <div class="nav-bar-logo bordered-div">
          <img class="unitrack-logo" src="../assets/imgs/unitrack-images/unitrack-logo-blue.png" alt="User">
        </div>
  
        <div class="use-cases bordered-div">
          <ul class="navbar-menu">
            <div class="nav-item"><li><a href="#">Dashboard</a></li></div>
            <div class="nav-item"><li><a href="#">Browse Courses</a></li></div>
          </ul>
  
          <div class="mobile-menu">
            <div class="nav-item">
              <button class="browse-btn">
                <i class="fa-solid fa-list"></i> Browse
              </button>
            </div>
          </div>
  
          <button class="viewgrades-btn">View Grades</button>
        </div>
      </nav>
  
      <div class="sidebar-overlay" id="sidebarOverlay"></div>
      <div class="sidebar" id="sidebar">
        <button class="close-btn" id="closeSidebar"><i class="fa-solid fa-xmark"></i></button>
        <div class="circle big-circle"></div>
        <div class="circle small-circle"></div>
        <div>
          <img class="unitrack-logo-text" src="../assets/imgs/unitrack-images/unitrack-logo-text-white.png" alt="UniTrack Logo">
          <ul class="menu">
            <li><span class="hover-circle"></span><a href="#">Dashboard</a></li>
            <li><span class="hover-circle"></span><a href="#">Browse Courses</a></li>
            <li><span class="hover-circle"></span><a href="#">View Grades</a></li>
          </ul>
        </div>
      </div>
  
      <div class="user-dropdown" id="userDropdown">
        <div class="dropdown-header">
          <div class="top-header">
            <img src="${"../"+user["profile-image"]}" alt="User Avatar" class="dropdown-avatar"> 
            <button class="close-btn" id="closeDropdown"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div class="bottom-header">
            <h4 class="dropdown-name">${user.firstName} ${user.lastName}</h4>
            <p class="dropdown-email">${user.email}</p>
          </div>
        </div>        
        <div class="dropdown-options">
          <button class="dropdown-btn profile" onClick=" window.location.href = '../html/instructor-home-page.html'">
            <div class="icon-box">
              <img src="../assets/imgs/user-icon-black.png" alt="User Icon" class="profile-icon" >
            </div>
            Profile
          </button>
        </div>
        <!-- 
        <hr class="hr options-theme">
        <div class="theme-toggle">
          <div class="theme-option">
            <button class="theme-btn active" id="systemMode"><i class="fa-solid fa-laptop"></i></button>
            <span class="theme-label">System</span>
          </div>
          <div class="theme-option">
            <button class="theme-btn" id="lightMode"><i class="fa-solid fa-sun"></i></button>
            <span class="theme-label">Light</span>
          </div>
          <div class="theme-option">
            <button class="theme-btn" id="darkMode"><i class="fa-solid fa-moon"></i></button>
            <span class="theme-label">Dark</span>
          </div>
        </div>
        -->
        <hr class="hr theme-signout">
        <button class="signout-btn"><i class="fa-solid fa-right-from-bracket"></i> Sign Out</button>
      </div>
    `;
}

// ---------- ADMIN NAVBAR HTML ----------
function renderAdminNavbar(user) {
  document.getElementById("navbarContent").innerHTML = `
      <nav class="navbar">
        <div class="navbar-user bordered-div" id="userMenuButton">
          <div class="nav-item">
            <img src="${"../"+user["profile-image"]}" alt="User" class="nav-image user-avatar">
            <span class="username">${user.firstName} ${user.lastName}</span>
            <i class="bx bx-chevron-down dropdown-icon"></i>
          </div>
        </div>
  
        <div class="nav-bar-logo bordered-div">
          <img class="unitrack-logo" src="../assets/imgs/unitrack-images/unitrack-logo-blue.png" alt="User">
        </div>
  
        <div class="use-cases bordered-div">
          <ul class="navbar-menu">
            <div class="nav-item"><li><a href="#">Browse</a></li></div>
            <div class="nav-item"><li><a href="#">Create Course</a></li></div>
            <div class="nav-item"><li><a href="#">Create Class</a></li></div>
            <div class="nav-item"><li><a href="#">View Schedules</a></li></div>
          </ul>
  
          <div class="mobile-menu">
            <div class="nav-item">
              <button class="browse-btn">
                <i class="fa-solid fa-list"></i> Browse
              </button>
            </div>
          </div>
  
          <button class="classstatus-btn">Class Status</button>
        </div>
      </nav>
  
      <div class="sidebar-overlay" id="sidebarOverlay"></div>
      <div class="sidebar" id="sidebar">
        <button class="close-btn" id="closeSidebar"><i class="fa-solid fa-xmark"></i></button>
        <div class="circle big-circle"></div>
        <div class="circle small-circle"></div>
        <div>
          <img class="unitrack-logo-text" src="../assets/imgs/unitrack-images/unitrack-logo-text-white.png" alt="UniTrack Logo">
          <ul class="menu">
            <li><span class="hover-circle"></span><a href="#">Browse Courses</a></li>
            <li><span class="hover-circle"></span><a href="#">Create Course</a></li>
            <li><span class="hover-circle"></span><a href="#">Create Class</a></li>
            <li><span class="hover-circle"></span><a href="#">View Schedules</a></li>
            <li><span class="hover-circle"></span><a href="#">Class Status</a></li>
          </ul>
        </div>
      </div>
  
      <div class="user-dropdown" id="userDropdown">
        <div class="dropdown-header">
          <div class="top-header">
            <img src="${"../"+user["profile-image"]}" alt="User Avatar" class="dropdown-avatar"> 
            <button class="close-btn" id="closeDropdown"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div class="bottom-header">
            <h4 class="dropdown-name">${user.firstName} ${user.lastName}</h4>
            <p class="dropdown-email">${user.email}</p>
          </div>
        </div>        
        <div class="dropdown-options">
          <button class="dropdown-btn profile" onClick=" window.location.href = '../html/admin-home-page.html'">
            <div class="icon-box">
              <img src="../assets/imgs/user-icon-black.png" alt="User Icon" class="profile-icon">
            </div>
            Profile
          </button>
        </div>
        <hr class="hr options-theme">
        <div class="theme-toggle">
          <div class="theme-option">
            <button class="theme-btn active" id="systemMode"><i class="fa-solid fa-laptop"></i></button>
            <span class="theme-label">System</span>
          </div>
          <div class="theme-option">
            <button class="theme-btn" id="lightMode"><i class="fa-solid fa-sun"></i></button>
            <span class="theme-label">Light</span>
          </div>
          <div class="theme-option">
            <button class="theme-btn" id="darkMode"><i class="fa-solid fa-moon"></i></button>
            <span class="theme-label">Dark</span>
          </div>
        </div>
        <hr class="hr theme-signout">
        <button class="signout-btn"><i class="fa-solid fa-right-from-bracket"></i> Sign Out</button>
      </div>
    `;
}

// ---------- STUDENT EVENTS ----------
function setupStudentNavbarEvents() {
  // Navbar
  document
    .querySelector(".navbar-menu .nav-item:nth-child(1) a")
    ?.addEventListener("click", () => {
      window.location.href = "student-home-page.html";
    });

  document
    .querySelector(".navbar-menu .nav-item:nth-child(2) a")
    ?.addEventListener("click", () => {
      window.location.href = "user-query.html";
    });

  document
    .querySelector(".navbar-menu .nav-item:nth-child(3) a")
    ?.addEventListener("click", () => {
      window.location.href = "register-course.html";
    });

  document
    .querySelector(".navbar-menu .nav-item:nth-child(4) a")
    ?.addEventListener("click", () => {
      window.location.href = "student-profile.html";
    });

  document.querySelector(".learningpath-btn")?.addEventListener("click", () => {
    window.location.href = "learningpath.html";
  });

  // Sidebar
  document
    .querySelector(".menu li:nth-child(1) a")
    ?.addEventListener("click", () => {
      window.location.href = "student-home-page.html";
    });


  document
    .querySelector(".menu li:nth-child(2) a")
    ?.addEventListener("click", () => {
      window.location.href = "user-query.html";
    });

  document
    .querySelector(".menu li:nth-child(3) a")
    ?.addEventListener("click", () => {
      window.location.href = "register-course.html";
    });

  document
    .querySelector(".menu li:nth-child(4) a")
    ?.addEventListener("click", () => {
      window.location.href = "student-profile.html";
    });

  document
    .querySelector(".menu li:nth-child(5) a")
    ?.addEventListener("click", () => {
      window.location.href = "learningpath.html";
    });

  setupSharedNavbarBehavior();
  setupLogoNavigation("student");
}

// ---------- INSTRUCTOR EVENTS ----------
function setupInstructorNavbarEvents() {
  // Navbar
  document
    .querySelector(".navbar-menu .nav-item:nth-child(1) a")
    ?.addEventListener("click", () => {
      window.location.href = "instructor-home-page.html";
    });
  document
    .querySelector(".navbar-menu .nav-item:nth-child(2) a")
    ?.addEventListener("click", () => {
      window.location.href = "user-query.html";
    });

  document.querySelector(".viewgrades-btn")?.addEventListener("click", () => {
    window.location.href = "instructor-grades-submission.html";
  });

  // Sidebar
  document
    .querySelector(".menu li:nth-child(1) a")
    ?.addEventListener("click", () => {
      window.location.href = "instructor-home-page.html";
    });

  document
    .querySelector(".navbar-menu .nav-item:nth-child(2) a")
    ?.addEventListener("click", () => {
      window.location.href = "user-query.html";
    });

  document
    .querySelector(".menu li:nth-child(3) a")
    ?.addEventListener("click", () => {
      window.location.href = "instructor-grades-submission.html";
    });

  setupSharedNavbarBehavior();
  setupLogoNavigation("instructor");
}

// ---------- ADMIN EVENTS ----------
function setupAdminNavbarEvents() {
  // Navbar
  document
    .querySelector(".navbar-menu .nav-item:nth-child(1) a")
    ?.addEventListener("click", () => {
      window.location.href = "user-query.html";
    });

  document
    .querySelector(".navbar-menu .nav-item:nth-child(2) a")
    ?.addEventListener("click", () => {
      window.location.href = "admin-create-course.html";
    });

  document
    .querySelector(".navbar-menu .nav-item:nth-child(3) a")
    ?.addEventListener("click", () => {
      window.location.href = "admin-create-class.html";
    });

  document
    .querySelector(".navbar-menu .nav-item:nth-child(4) a")
    ?.addEventListener("click", () => {
      window.location.href = "admin-view-schedule.html";
    });

  document.querySelector(".classstatus-btn")?.addEventListener("click", () => {
    window.location.href = "admin-approve-class.html";
  });

  // Sidebar
  document
    .querySelector(".menu li:nth-child(1) a")
    ?.addEventListener("click", () => {
      window.location.href = "user-query.html";
    });

  document
    .querySelector(".menu li:nth-child(2) a")
    ?.addEventListener("click", () => {
      window.location.href = "admin-create-course.html";
    });

  document
    .querySelector(".menu li:nth-child(3) a")
    ?.addEventListener("click", () => {
      window.location.href = "admin-create-class.html";
    });

  document
    .querySelector(".menu li:nth-child(4) a")
    ?.addEventListener("click", () => {
      window.location.href = "admin-view-schedule.html";
    });

  document
    .querySelector(".menu li:nth-child(5) a")
    ?.addEventListener("click", () => {
      window.location.href = "admin-approve-class.html";
    });

  document
    .querySelector(".menu li:nth-child(6) a")
    ?.addEventListener("click", () => {
      window.location.href = "admin-approve-class.html";
    });

  setupSharedNavbarBehavior();
  setupLogoNavigation("admin");
}

// SHARED NAVBAR BEHAVIOR
function setupSharedNavbarBehavior() {
  const userMenuButton = document.querySelector("#userMenuButton");
  const userDropdown = document.querySelector("#userDropdown");
  const closeDropdown = document.querySelector("#closeDropdown");
  const browseBtn = document.querySelector(".browse-btn");
  const sidebar = document.querySelector("#sidebar");
  const sidebarOverlay = document.querySelector("#sidebarOverlay");
  const closeSidebar = document.querySelector("#closeSidebar");

  // Sidebar toggle
  browseBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    sidebar.classList.add("active");
    sidebarOverlay.classList.add("active");
  });

  closeSidebar?.addEventListener("click", () => {
    sidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
  });

  sidebarOverlay?.addEventListener("click", () => {
    sidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
  });

  // Dropdown toggle
  userDropdown.style.opacity = "0";
  userDropdown.style.transform = "translateY(-20px)";
  userDropdown.style.display = "none";

  userMenuButton?.addEventListener("click", () => {
    if (
      userDropdown.style.display === "none" ||
      userDropdown.style.opacity === "0"
    ) {
      userDropdown.style.display = "block";
      setTimeout(() => {
        userDropdown.style.opacity = "1";
        userDropdown.style.transform = "translateY(0)";
      }, 10);
    } else {
      userDropdown.style.opacity = "0";
      userDropdown.style.transform = "translateY(-20px)";
      setTimeout(() => {
        userDropdown.style.display = "none";
      }, 300);
    }
  });

  document.addEventListener("click", (event) => {
    if (
      !userDropdown.contains(event.target) &&
      !userMenuButton.contains(event.target)
    ) {
      userDropdown.style.opacity = "0";
      userDropdown.style.transform = "translateY(-20px)";
      setTimeout(() => {
        userDropdown.style.display = "none";
      }, 300);
    }
  });

  closeDropdown?.addEventListener("click", () => {
    userDropdown.style.opacity = "0";
    userDropdown.style.transform = "translateY(-20px)";
    setTimeout(() => {
      userDropdown.style.display = "none";
    }, 300);
  });

  // Theme toggle
  const themeButtons = document.querySelectorAll(".theme-btn");
  themeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      themeButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Sign out
  document.querySelector(".signout-btn")?.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("rememberedUser");
    window.location.href = "index.html";
  });

  // Close sidebar on resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      sidebar.classList.remove("active");
      sidebarOverlay.classList.remove("active");
    }
  });
}

// UNIQUE LOGO NAV
function setupLogoNavigation(role) {
  const logo = document.querySelector(".nav-bar-logo");

  logo?.addEventListener("click", () => {
    switch (role) {
      case "student":
        window.location.href = "student-home-page.html";
        break;
      case "instructor":
        window.location.href = "instructor-home-page.html";
        break;
      case "admin":
        window.location.href = "admin-home-page.html";
        break;
      default:
        console.error("Unknown role in logo navigation.");
    }
  });
}
