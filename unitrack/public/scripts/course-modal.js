document.addEventListener("DOMContentLoaded", function () {
    function createCourseModal(course, userRole) {
      const creditHoursText = course.creditHours === 1 ? "Credit Hour" : "Credit Hours";
      const prerequisites = (course.prerequisites || [])
        .map(p => typeof p === "string" ? p : p.courseId)
        .map(p => `<span class="course-tag">${p}</span>`)
        .join("") || "<span>None</span>";
  
      // Button logic
      let registrationButton = "";
      if (userRole === "admin") {
        registrationButton = `<button class="register-btn" onclick="goToClassStatus()">Go to Class Status</button>`;
      } else if (userRole !== "instructor") {
        registrationButton = `<button class="register-btn" onclick="goToRegistration()">Go to Registration</button>`;
      }
      else{
        registrationButton = `<button class="register-btn" onclick="goToGrading()">Go to Grading</button>`;
      }
  
      return `
        <div id="courseModal" class="modal">
          <div class="modal-popup">
            <button class="close-btn close-modal">
              <i class="fa-solid fa-xmark"></i>
            </button>
  
            <div class="course-image">
              <img src="${course.courseImage || '../assets/imgs/default-course.jpg'}" alt="Course Image">
            </div>
  
            <div class="modal-content">
              <div class="course-title-div">
                <h2 class="course-title">${course.courseName}</h2>
                <div class="course-tags-div">
                  <span class="course-tag">${course.courseId}</span>
                </div>
              </div>
  
              <div class="course-info">
                <p class="content-info-text subject"><i class="fa-solid fa-book"></i> ${course.subject || "Unknown"}</p>
                <p class="content-info-text credit-hours"><i class="fa-solid fa-clock"></i> ${course.creditHours} ${creditHoursText}</p>
              </div>
  
              <div class="course-description">
                <h3 class="content-info-attribute">What You'll Learn</h3>
                <p class="content-info-paragraph description">
                  ${course.description || "No description available."}
                </p>
              </div>
  
              <div class="prerequisite-courses">
                <h3 class="content-info-attribute">Prerequisites</h3>
                <div class="prerequisite-tags">${prerequisites}</div>
              </div>
            </div>
  
            ${registrationButton}
          </div>
        </div>
      `;
    }
  
    function openCourseModal(courseId) {
      const courses = JSON.parse(localStorage.getItem("courses") || "[]");
      const course = courses.find(c => c.courseId === courseId);
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      
      const userRole = loggedInUser?.role || "student";
      console.log("running");
  
      if (!course) {
        console.warn("Course not found:", courseId);
        return;
      }
  
      // Remove existing modal if any
      const existing = document.getElementById("courseModal");
      if (existing) existing.remove();
  
      document.body.insertAdjacentHTML("beforeend", createCourseModal(course, userRole));
      setupModalEvents();
  
      document.querySelector("#courseModal").style.display = "flex";
      
    }
    
    function openClassModal(classId) {
      const classes = JSON.parse(localStorage.getItem("classes") || "[]");
      const courseClass = classes.find(clss => clss.classId === classId);
      openCourseModal(courseClass.courseId);
    
    }
  
    function closeModal() {
      const modal = document.querySelector("#courseModal");
      if (modal) {
        modal.style.opacity = "0";
        setTimeout(() => modal.remove(), 300);
      }
    }
  
    function setupModalEvents() {
      document.querySelectorAll(".close-modal").forEach(button => {
        button.addEventListener("click", closeModal);
      });
  
      document.querySelector("#courseModal").addEventListener("click", function (event) {
        if (event.target === this) closeModal();
      });
    }
  
    function goToRegistration() {
      window.location.href = "register-course.html";
    }
  
    function goToClassStatus() {
      window.location.href = "admin-approve-class.html";
    }
    function goToGrading(){
      window.location.href = "instructor-grades-submission.html";
    }
  
    // Global exposure
    window.openCourseModal = openCourseModal;
    window.openClassModal = openClassModal;
    window.goToRegistration = goToRegistration;
    window.goToGrading = goToGrading;
    window.goToClassStatus = goToClassStatus;
  });
  