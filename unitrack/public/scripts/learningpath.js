document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll(".category");
  const prevButton = document.getElementById("prevCategory");
  const nextButton = document.getElementById("nextCategory");
  let currentIndex = 0;

  const learningContainer = document.querySelector(
    ".category.completed .cards-container"
  );
  const inProgressContainer = document.querySelector(
    ".category.in-progress .cards-container"
  );
  const scheduledContainer = document.querySelector(
    ".category.scheduled .cards-container"
  );
  const upcomingContainer = document.querySelector(
    ".category.upcoming .cards-container"
  );

  let allCourses = JSON.parse(localStorage.getItem("courses"));
  let allClasses = JSON.parse(localStorage.getItem("classes"));
  let allStudents = JSON.parse(localStorage.getItem("students"));
  const allMajors = JSON.parse(localStorage.getItem("majors"));

  const user = JSON.parse(localStorage.loggedInUser);
  const student = allStudents.find((s) => s.email == user.email);
  console.log(student);

  function updateVisibility() {
    if (window.innerWidth > 768) {
      categories.forEach((category) => {
        category.style.display = "flex";
      });
    } else {
      categories.forEach((category, index) => {
        category.style.display = index === currentIndex ? "flex" : "none";
      });
    }
  }

  if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateVisibility();
      }
    });

    nextButton.addEventListener("click", () => {
      if (currentIndex < categories.length - 1) {
        currentIndex++;
        updateVisibility();
      }
    });
  }
  window.addEventListener("resize", updateVisibility);
  updateVisibility();

  function courseCard(course) {
    return `
            <div class="course-card">
                <div class="course-image">
                    <div class="hover-icon">
                        <i class="fa-solid fa-plus"></i>
                        <span class="hover-text">Register Course</span>
                    </div>
                    <i class="fa-solid fa-turn-up top-right-icon"></i>
                </div>
                <div class="course-info">
                    <div class="course-header">
                        <span class="course-tag">${course.courseId}</span>
                        <span class="semester">Fall 2025</span>
                    </div>
                    <h3>${course.courseName}</h3>
                    <p class="course-subtitle">${course.description}</p>
                    <div class="course-tags">
                        ${course.majorsOffered
                          .map(
                            (major) => `
                            <span class="tag"><i class="fa-solid ${
                              major === "CMPE"
                                ? "fa-microchip"
                                : "fa-laptop-code"
                            }"></i> ${major == "CMPS" ? "CS" : "CE"}</span>`
                          )
                          .join("")}
                    </div>
                </div>
            </div>
        `;
  }

  function courseCardWithGrades(course, grade) {
    return `
            <div class="course-card">
                <div class="course-image">
                    <div class="hover-icon">
                        <i class="fa-solid fa-plus"></i>
                        <span class="hover-text">Register Course</span>
                    </div>
                </div>
                <div class="course-header">
                    <span class="course-tag">${course.courseId}</span>
                    <span class="semester">Spring 2025</span>
                </div>
                <div class="course-completed-main">
                    <div class="course-grade">
                        <div class="letter-grade-container">
                            <span class="letter-grade">${grade}</span>
                        </div>
                        <div>
                            <span class="final-grade">Final Grade</span>
                            <h3>${course.courseName}</h3>
                        </div>
                    </div>
                    <div class="course-tags">
                        ${course.majorsOffered
                          .map(
                            (major) => `
                            <span class="tag"><i class="fa-solid ${
                              major === "CMPE"
                                ? "fa-microchip"
                                : "fa-laptop-code"
                            }"></i> ${major == "CMPS" ? "CS" : "CE"}</span>`
                          )
                          .join("")}
                    </div>
                </div>
            </div>
        `;
  }

  function renderCompletedCourses() {
    const completed = student.completedCourses;
    const completedCourses = completed.map((c) =>
      allCourses.find((cr) => cr.courseId == c.courseId)
    );

    try {
      let out = ``;
      completedCourses.forEach((c) => {
        const grade = completed.find(
          (crs) => crs.courseId == c.courseId
        ).letterGrade;
        out += courseCardWithGrades(c, grade);
      });
      learningContainer.innerHTML = out;
    } catch {
      // Handle error state
    }

    const completedSpan = document.querySelector(
      ".category.completed .tracking-number"
    );
    completedSpan.textContent = `${completedCourses.length} completed`;
  }

  function renderInProgessCourses() {
    const openClasses = student.semesterEnrollment.classes.filter((cls) => {
      const classDetails = allClasses.find((c) => c.classId == cls.classId);
      return classDetails && classDetails.classStatus === "open";
    });

    const inProgressCourses = openClasses.map((cls) =>
      allCourses.find((course) => course.courseId == cls.courseId)
    );

    try {
      let out = ``;
      inProgressCourses.forEach((c) => (out += courseCard(c)));
      inProgressContainer.innerHTML = out;
    } catch {}

    const inProgressSpan = document.querySelector(
      ".category.in-progress .tracking-number"
    );
    inProgressSpan.textContent = `${inProgressCourses.length} courses are in progress`;
  }

  function renderScheduledCourses() {
    const pendingClasses = student.semesterEnrollment.classes.filter((cls) => {
      const classDetails = allClasses.find((c) => c.classId == cls.classId);
      return classDetails && classDetails.classStatus === "pending";
    });

    const scheduledCourses = pendingClasses.map((cls) =>
      allCourses.find((course) => course.courseId == cls.courseId)
    );

    try {
      let out = ``;
      scheduledCourses.forEach((c) => (out += courseCard(c)));
      scheduledContainer.innerHTML = out;
    } catch {}

    const scheduledSpan = document.querySelector(
      ".category.scheduled .tracking-number"
    );
    scheduledSpan.textContent = `${scheduledCourses.length} scheduled`;
  }

  function renderUpcomingCourses() {
    const required = allMajors.find(
      (m) => m.majorName == student.department
    ).requiredCourses;
    const completed = student.completedCourses.map((cc) => cc.courseId);
    const current = student.semesterEnrollment.classes.map((ip) => ip.courseId);

    const upcomingCourseIds = required.filter(
      (courseId) => !completed.includes(courseId) && !current.includes(courseId)
    );
    const upcomingCourses = upcomingCourseIds.map((crsId) =>
      allCourses.find((c) => c.courseId == crsId)
    );

    try {
      let out = ``;
      upcomingCourses.forEach((c) => (out += courseCard(c)));
      upcomingContainer.innerHTML = out;
    } catch {}

    const upcomingSpan = document.querySelector(
      ".category.upcoming .tracking-number"
    );
    upcomingSpan.textContent = `${upcomingCourses.length} courses are upcoming`;
  }

  renderCompletedCourses();
  renderInProgessCourses();
  renderScheduledCourses();
  renderUpcomingCourses();
});
