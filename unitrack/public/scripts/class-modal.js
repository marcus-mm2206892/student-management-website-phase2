document.addEventListener("DOMContentLoaded", function () {
  // GLOBAL: Expose this for use in register-course.js
  window.openClassModal = function (classId) {
    const courses = JSON.parse(localStorage.getItem("courses"));
    const classes = JSON.parse(localStorage.getItem("classes"));
    const users = JSON.parse(localStorage.getItem("users"));
    const instructorsData = JSON.parse(localStorage.getItem("instructors"));

    const courseClass = classes.find((cls) => cls.classId === classId);
    if (!courseClass) return;

    const course = courses.find((c) => c.courseId === courseClass.courseId);

    const instructors = (courseClass?.instructors || [])
      .map((email) => {
        const user = users.find((u) => u.email === email);
        const instructorMeta = instructorsData.find(
          (inst) => inst.email === email
        );

        return {
          name: user ? `${user.firstName} ${user.lastName}` : email,
          title: user?.title || "Instructor",
          department: instructorMeta?.department || "Department",
          college: instructorMeta?.college || "College",
        };
      })

      .map(
        (instructor) => `
          <div class="instructor">
            <i class="fa-solid fa-user"></i>
            <div class="instructor-info">
              <span class="instructor-name">${instructor.name}</span>
              <span class="instructor-description">${instructor.department} Department, College of ${instructor.college}</span>
            </div>
          </div>`
      )
      .join("");

    // Helper function to convert 24hr to 12hr format
    function to12Hour(timeStr) {
      const [hour, minute] = timeStr.split(":").map(Number);
      const ampm = hour >= 12 ? "PM" : "AM";
      const hour12 = hour % 12 || 12;
      return `${hour12}:${minute.toString().padStart(2, "0")} ${ampm}`;
    }

    // Get schedule times and convert if available
    const startTime = courseClass?.schedule?.startTime
      ? to12Hour(courseClass.schedule.startTime)
      : "TBA";

    const endTime = courseClass?.schedule?.endTime
      ? to12Hour(courseClass.schedule.endTime)
      : "TBA";

    const scheduleType = courseClass?.schedule?.scheduleType || "TBA";

    function generateWeekdaySpans(scheduleType) {
      const allDays = ["S", "M", "T", "W", "T", "F", "S"];
      const uniqueDays = ["S", "M", "T", "W", "T", "F", "SAT"];
      const activeSet = new Set(scheduleType.split(""));

      return allDays
        .map((day, index) => {
          const matchChar = uniqueDays[index];
          const isActive = activeSet.has(matchChar);
          return `<span class="day${isActive ? " active" : ""}">${day}</span>`;
        })
        .join("");
    }

    const modalHTML = `
        <div id="classDetailsModal" class="modal">
          <div class="modal-popup">
            <button class="close-btn close-modal">
              <i class="fa-solid fa-xmark"></i>
            </button>
  
            <div class="modal-header">
              <div class="course-title-div">
                <h2 class="course-title">${course?.courseName || "N/A"}</h2>
                <div class="course-tags-div">
                  <span class="course-tag">${course?.courseId || ""}</span>
                  <span class="campus-tag">${courseClass?.campus || ""}</span>
                  <span class="crn-tag">CRN ${
                    courseClass?.classId || "TBA"
                  }</span>
                  <span class="section-tag">Section ${
                    courseClass?.section || "TBA"
                  }</span>
                </div>
              </div>
              <div class="dropdown-div">
                <span class="dropdown-text">
                  <i class="fas fa-info-circle"></i>
                </span>                    
                <div class="dropdown">
                  <div class="dropdown-toggle" onclick="toggleDropdown()">
                    <span id="selectedOption">Class Details</span>
                    <i class="fas fa-chevron-down"></i>
                  </div>
                  <div class="dropdown-menu">
                    <div onclick="selectOption('Class Details')"><i class="fas fa-info-circle"></i> Class Details</div>
                    <div onclick="selectOption('Course Description')"><i class="fas fa-book"></i> Course Description</div>
                    <div onclick="selectOption('Instructors')"><i class="fas fa-chalkboard-teacher"></i> Instructors</div>
                    <div onclick="selectOption('Class Schedule')"><i class="fas fa-calendar-alt"></i> Class Schedule</div>
                    <div onclick="selectOption('Enrollment')"><i class="fas fa-user-check"></i> Enrollment</div>
                    <div onclick="selectOption('Eligibility')"><i class="fas fa-list"></i> Eligibility</div>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="modal-content">
              <div id="Class Details" class="content-section class-details active">
                <div class="content-info-div">
                  <h3 class="content-info-attribute">Associated Term</h3>
                  <p class="content-info-text term"><i class="fa-solid fa-calendar-days"></i> Spring 2025</p>
                </div>
  
                <div class="content-info-div">
                  <h3 class="content-info-attribute">CRN</h3>
                  <p class="content-info-text crn"><i class="fa-solid fa-hashtag"></i> ${
                    courseClass?.classId || "TBA"
                  }</p>
                </div>
  
                <div class="content-info-div">
                  <h3 class="content-info-attribute">Campus</h3>
                  <p class="content-info-text campus"><i class="fa-solid fa-school"></i> ${
                    courseClass?.campus || "N/A"
                  }</p>
                </div>
  
                <div class="content-info-div">
                  <h3 class="content-info-attribute">Instructional Method</h3>
                  <p class="content-info-text instructionalMethod"><i class="fa-solid fa-language"></i> English</p>
                </div>
  
                <div class="content-info-div">
                  <h3 class="content-info-attribute">Course Subject</h3>
                  <p class="content-info-text subject"><i class="fa-solid fa-book"></i> ${
                    course?.subject || "Computer Science"
                  }</p>
                </div>
  
                <div class="content-info-div">
                  <h3 class="content-info-attribute">Credit Hours</h3>
                  <p class="content-info-text creditHours"><i class="fa-solid fa-clock"></i> ${
                    course?.creditHours || "0"
                  } credit hours</p>
                </div>
              </div>
  
              <div id="Course Description" class="content-section">
                <div class="course-image" style="background-image: url('${
                  course?.courseImage || ""
                }'); background-size: cover; background-position: center;">
                <div class="hover-icon">
                    <i class="fa-solid fa-eye"></i>
                    <span class="hover-text">Learn More</span>
                </div>
                <i class="fa-solid fa-turn-up top-right-icon"></i>
                </div>

  
                <div class="content-info-div">
                  <h3 class="content-info-attribute">What you'll learn</h3>
                  <p class="content-info-paragraph description">${
                    course?.description || "No description available."
                  }</p>
                </div>
  
                <div class="content-info-div">
                  <h3 class="content-info-attribute">Course Syllabus</h3>
                  <p class="content-info-paragraph attachment">
                    <i class="fa-solid fa-file-pdf"></i> Course-Syllabus.pdf
                  </p>
                </div>
              </div>
  
              <div id="Instructors" class="content-section">
                <div class="content-info-div instructors-container">
                  <h3 class="content-info-attribute">Course Instructors</h3>
                  <div class="instructors-list">
                    ${instructors}
                  </div>
                </div>
              </div>
  
            <div id="Class Schedule" class="content-section">
                <div class="content-info-div class-schedule-container">
                    <div class="class-schedule">
                    <h3 class="content-info-attribute">Class Schedule</h3>
                    <div class="schedule">
                        <i class="fa-solid fa-calendar-days"></i>
                        <div class="schedule-info">
                        <div class="weekdays">
                            ${generateWeekdaySpans(scheduleType)}
                        </div>
                        <p class="date-range">01/19/2025 - 05/08/2025</p>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="content-info-div class-schedule-container">
                    <div class="class-time">
                    <h3 class="content-info-attribute">Class Timings</h3>
                    <div class="time">
                        <i class="fa-solid fa-clock"></i>
                        <div class="time-info">
                        <p class="time">${startTime} - ${endTime}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>


  
              <div id="Enrollment" class="content-section">
                <div class="content-info-div enrollment-container">
                  <h3 class="content-info-attribute">Enrollment Information</h3>
                  <div class="enrollment-info">
                    <div class="enrollment-item">
                      <i class="fa-solid fa-users"></i>
                      <span class="label">Enrollment Actual:</span>
                      <span class="value">${
                        courseClass?.enrollmentActual || 0
                      }</span>
                    </div>
                    <div class="enrollment-item">
                      <i class="fa-solid fa-user-group"></i>
                      <span class="label">Enrollment Maximum:</span>
                      <span class="value">${
                        courseClass?.enrollmentMaximum || 0
                      }</span>
                    </div>
                    <div class="enrollment-item seats-available">
                      <i class="fa-solid fa-chair"></i>
                      <span class="label">Enrollment Seats Available:</span>
                      <span class="value">${Math.max(
                        0,
                        (courseClass?.enrollmentMaximum || 0) -
                          (courseClass?.enrollmentActual || 0)
                      )}</span>
                    </div>
                  </div>
                  <p class="enrollment-note">Open for all students. Enrollment ends on <strong>March 1st</strong>.</p>
                </div>
              </div>
  
             <div id="Eligibility" class="content-section">
                <div class="content-info-div eligibility-container">
                  <h3 class="content-info-attribute">Prerequisite Courses</h3>
                  <div class="prerequisite-list">
                    ${
                      course?.prerequisites?.length
                        ? course.prerequisites
                            .map(
                              (pr) => `
                            <div class="prerequisite-card">
                              <div class="prerequisite-header">
                                <span class="course-tag">${
                                  typeof pr === "string" ? pr : pr.courseId
                                }</span>
                              </div>
                              <div class="prerequisite-details">
                                <div class="letter-grade-container">
                                  <span class="letter-grade">${
                                    typeof pr === "object" ? pr.minGrade : "D"
                                  }</span>
                                </div>
                                <div class="course-info">
                                  <p class="minimum-grade">Minimum Grade Required</p>
                                  <h3>${
                                    typeof pr === "string" ? pr : pr.courseId
                                  }</h3>
                                </div>
                              </div>
                            </div>
                          `
                            )
                            .join("")
                        : `<p class="no-prerequisites">No prerequisite courses required for this class.</p>`
                    }
                  </div>
                  ${
                    course?.prerequisites?.length
                      ? `<p class="eligibility-note">Students must complete the above courses before enrolling.</p>`
                      : ""
                  }
                </div>
              </div>
            </div>
  
            <button class="register-btn">Register Class</button>
          </div>
        </div>
      `;

    const modalContainer = document.getElementById("modalContainer");
    modalContainer.innerHTML = modalHTML;

    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user?.role === "admin" || user?.role === "instructor") {
      const registerBtn = document.querySelector(".register-btn");
      if (registerBtn) {
        registerBtn.style.display = "none";
      }
    }

    setupModalEvents();
    document.getElementById("classDetailsModal").style.display = "flex";
  };

  function setupModalEvents() {
    document.querySelectorAll(".close-modal").forEach((btn) => {
      btn.addEventListener("click", closeModal);
    });

    document
      .getElementById("classDetailsModal")
      .addEventListener("click", function (event) {
        if (event.target === this) {
          closeModal();
        }
      });
  }

  function closeModal() {
    const modal = document.getElementById("classDetailsModal");
    if (modal) {
      modal.style.display = "none";
      setTimeout(() => modal.remove(), 300);
    }
  }

  function toggleDropdown() {
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const isOpen = dropdown.classList.contains("active");

    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  }

  function openDropdown() {
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdown.classList.add("active");
    dropdownMenu.style.display = "block";

    document.addEventListener("click", closeDropdownOutside, true);
  }

  function closeDropdown() {
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdown.classList.remove("active");
    dropdownMenu.style.display = "none";

    document.removeEventListener("click", closeDropdownOutside, true);
  }

  function closeDropdownOutside(event) {
    const dropdown = document.querySelector(".dropdown");
    if (!dropdown.contains(event.target)) {
      closeDropdown();
    }
  }

  function selectOption(option) {
    document.querySelector("#selectedOption").textContent = option;

    closeDropdown();

    document
      .querySelectorAll(".content-section")
      .forEach((section) => section.classList.remove("active"));

    document.getElementById(option).classList.add("active");
  }

  window.toggleDropdown = toggleDropdown;
  window.openDropdown = openDropdown;
  window.closeDropdown = closeDropdown;
  window.selectOption = selectOption;
});
