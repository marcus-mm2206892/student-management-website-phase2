document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded");
  const allCourses = JSON.parse(localStorage.getItem("courses"));
  const allUsers = JSON.parse(localStorage.getItem("users"));
  const user = JSON.parse(localStorage.loggedInUser);

  document.querySelectorAll(".fa-plus").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      window.location.href = "../html/register-course.html";
    });
  });

  document.querySelectorAll(".more-btn").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      window.location.href = "../html/user-query.html";
    });
  });

  document.addEventListener("click", function (event) {
    const courseCard = event.target.closest(".course-card");
    if (courseCard) {
      const courseId = courseCard
        .querySelector(".course-tag")
        ?.textContent.trim();
      if (courseId && window.openCourseModal) {
        openCourseModal(courseId);
      }
    }
  });

  function renderRecommended() {
    const recommendedCoursesGrid = document.querySelector(
      ".recommended-courses .course-grid"
    );
    const recommendedEmpty = document.querySelector("#recommendedEmpty");
    const errorElement = document.querySelector("#recommendedError");

    if (!allCourses || !Array.isArray(allCourses)) {
      recommendedCoursesGrid.style.display = "none";
      recommendedEmpty.style.display = "none";
      errorElement.style.display = "flex";
      return;
    }

    // Major and electives
    const major = user.department === "Computer Science" ? "CMPS" : "CMPE";
    const electives = major === "CMPS" ? csElectives : ceElectives;

    // Completed & enrolled course IDs
    const completedCourses = user.completedCourses || [];
    const enrolledCourses = user.semesterEnrollment?.classes || [];

    const completedIds = completedCourses.map((c) => c.courseId);
    const enrolledIds = enrolledCourses.map((c) => c.courseId);

    // Map of completed course grades for checking prerequisites
    const completedCoursesMap = {};
    completedCourses.forEach((c) => {
      completedCoursesMap[c.courseId] = c.letterGrade;
    });

    function compareGrades(student, required) {
      const order = ["F", "D", "D+", "C", "C+", "B", "B+", "A", "A+"];
      return order.indexOf(student) - order.indexOf(required);
    }

    function isEligible(course, completedMap) {
      if (!course.prerequisites || course.prerequisites.length === 0)
        return true;

      return course.prerequisites.every((req) => {
        if (typeof req === "string") {
          return completedMap[req];
        } else if (typeof req === "object") {
          const { courseId, minGrade } = req;
          const grade = completedMap[courseId];
          return grade && compareGrades(grade, minGrade) >= 0;
        }
        return false;
      });
    }

    // Filter down to only eligible, non-completed, non-enrolled major courses that are not electives
    const recommendedCourses = allCourses.filter(
      (course) =>
        course.majorsOffered.includes(major) &&
        !completedIds.includes(course.courseId) &&
        !enrolledIds.includes(course.courseId) &&
        !electives.includes(course.courseId) &&
        isEligible(course, completedCoursesMap)
    );

    if (recommendedCourses.length === 0) {
      recommendedCoursesGrid.innerHTML = "";
      recommendedCoursesGrid.style.display = "none";
      recommendedEmpty.style.display = "flex";
      errorElement.style.display = "none";
      return;
    }

    recommendedEmpty.style.display = "none";
    errorElement.style.display = "none";
    recommendedCoursesGrid.style.display = "grid";

    let out = "";
    recommendedCourses.slice(0, 6).forEach((course) => {
      out += courseTemplate(course);
    });
    recommendedCoursesGrid.innerHTML = out;
  }

  function renderSupplementary() {
    const supplementaryGrid = document.querySelector(
      ".supplementary-courses .course-grid"
    );
    const supplementaryEmpty = document.querySelector("#supplementaryEmpty");
    const errorElement = document.querySelector("#supplementaryError");

    if (!allCourses || !Array.isArray(allCourses)) {
      supplementaryGrid.style.display = "none";
      supplementaryEmpty.style.display = "none";
      errorElement.style.display = "flex";
      return;
    }

    const completedIds = (user.completedCourses || []).map((c) => c.courseId);
    const userMajor = user.department === "Computer Science" ? "CMPS" : "CMPE";

    const supplementaryCourses = allCourses.filter(
      (course) =>
        !completedIds.includes(course.courseId) &&
        !course.majorsOffered.includes(userMajor)
    );

    if (supplementaryCourses.length === 0) {
      supplementaryGrid.innerHTML = "";
      supplementaryGrid.style.display = "none";
      supplementaryEmpty.style.display = "flex";
      errorElement.style.display = "none";
      return;
    }

    supplementaryEmpty.style.display = "none";
    errorElement.style.display = "none";
    supplementaryGrid.style.display = "grid";

    let out = "";
    supplementaryCourses.slice(0, 6).forEach((course) => {
      out += courseTemplate(course);
    });
    supplementaryGrid.innerHTML = out;
  }

  const csElectives = ["CMPS497", "CMPS482", "CMPS485", "CMPS360"];
  const ceElectives = ["CMPE457", "CMPE476", "CMPE483"];

  function renderElectives() {
    const electiveGrid = document.querySelector(
      ".elective-courses .course-grid"
    );
    const electivesEmpty = document.querySelector("#electivesEmpty");
    const errorElement = document.querySelector("#electivesError");

    if (!allCourses || !Array.isArray(allCourses)) {
      electiveGrid.style.display = "none";
      electivesEmpty.style.display = "none";
      errorElement.style.display = "flex";
      return;
    }

    const completedIds = (user.completedCourses || []).map((c) => c.courseId);
    const electives =
      user.department === "Computer Science" ? csElectives : ceElectives;

    const electiveCourses = allCourses.filter(
      (course) =>
        electives.includes(course.courseId) &&
        !completedIds.includes(course.courseId)
    );

    if (electiveCourses.length === 0) {
      electiveGrid.innerHTML = "";
      electiveGrid.style.display = "none";
      electivesEmpty.style.display = "flex";
      errorElement.style.display = "none";
      return;
    }

    electivesEmpty.style.display = "none";
    errorElement.style.display = "none";
    electiveGrid.style.display = "grid";

    let out = "";
    electiveCourses.slice(0, 6).forEach((course) => {
      out += courseTemplate(course);
    });
    electiveGrid.innerHTML = out;
  }

  renderRecommended();
  renderSupplementary();
  renderElectives();

  function courseTemplate(course) {
    const creditHoursText =
      course.creditHours === 1 ? "Credit Hour" : "Credit Hours";
    return `
      <div class="course-card">
          <div class="course-image">
              <img src="${course.courseImage}" alt="Course Image">
              <div class="hover-icon">
                  <i class="fa-solid fa-plus"></i>
                  <span class="hover-text">Register Course</span>
              </div>
              <i class="fa-solid fa-turn-up top-right-icon"></i>
          </div>
          <div class="course-info">
              <div class="course-header">
                  <span class="course-tag">${course.courseId}</span>
                  <span class="semester">Spring 2025</span>
              </div>
              <h3>${course.courseName}</h3>
              <p class="course-subtitle">${course.description}</p>
              <div class="course-tags">
                  <span class="tag"><i class="fa-solid fa-hourglass-half"></i> ${
                    course.creditHours
                  } ${creditHoursText} </span>
                  ${course.majorsOffered
                    .map(
                      (major) => `
                  <span class="tag"><i class="fa-solid ${
                    major === "CMPE" ? "fa-microchip" : "fa-laptop-code"
                  }"></i> ${major}</span>
                  `
                    )
                    .join("")}
              </div>
          </div>
      </div>
    `;
  }

  // cool cycle text color animation
  const cycleTexts = document.querySelectorAll(".cycle-text");
  let currentIndex = 0;

  setInterval(() => {
    cycleTexts.forEach((span) => span.classList.remove("active"));
    cycleTexts[currentIndex].classList.add("active");
    currentIndex = (currentIndex + 1) % cycleTexts.length;
  }, 1200);
});
