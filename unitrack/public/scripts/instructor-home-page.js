document.addEventListener("DOMContentLoaded", function () {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const courses = JSON.parse(localStorage.getItem("courses"));
  const classes = JSON.parse(localStorage.getItem("classes"));

  renderInstructorHome(user, courses, classes);
  renderCurrentCourses(user, courses, classes);
  renderPendingClasses(user, courses, classes);
});

function renderInstructorHome(user, courses, classes) {
  const classCount = classes.reduce((count, cls) => {
    if (cls.instructors.includes(user.email) && cls.classStatus === "open") {
      return count + 1;
    }
    return count;
  }, 0);
  let coursesTaught = [];

  user.teachingClasses.forEach((userClassId) => {
    const match = classes.filter((c) => c.classStatus === "open").find((c) => c.classId === userClassId);
    if (match && !coursesTaught.find((c) => c.courseId === match.courseId)) {
      coursesTaught.push(match);
    }
  });

  const classesTaughtText = classCount === 1? "class" : "classes";
  const coursesTaughtText = coursesTaught.length === 1 ? "course" : "courses";

  document.querySelector(".instructor-profile").innerHTML = `
    <section class="greetings">
      <h2>Hello there, ${user.firstName} ${user.lastName}</h2>
      <span>Track the courses you are teaching at your university.</span>
    </section>

    <section class="instructor-profile-left">

      <section class="credit-hours-card">
        <div class="credit-hours-text">
          <h2>You are teaching <strong>${classCount} ${classesTaughtText}</strong> and <strong>${
    coursesTaught.length
  } ${coursesTaughtText}</strong> this semester.</h2>
        </div>
        <div class="credit-hours-image">
          <img src="../assets/imgs/unitrack-images/login-page-graphic.png" alt="Credit Hours Graphic">
        </div>
      </section>

      <section class="courses teaching-courses">
        <div class="courses-header">
          <div class="courses-header-left">
            <h2>Current Teaching Classes</h2>
            <p>Ongoing classes that you are currently teaching</p>
          </div>
          <div class="courses-header-right">
            <a href="../html/user-query.html" class="browse-courses">
              View all courses <i class="fa-solid fa-chevron-right"></i>
            </a>
          </div>
        </div>
        <div class="course-grid1"></div>
        <div class="empty-content" style="display: none;"></div>
      </section>

      
      <section class="courses pending-classes-section">
        <div class="courses-header">
          <div class="courses-header-left">
            <h2>Pending Approval</h2>
            <p>These classes are waiting to be opened by the administration</p>
          </div>
          <div class="courses-header-right">
              <a href="../html/user-query.html" class="browse-courses">
                View all courses <i class="fa-solid fa-chevron-right"></i>
              </a>
          </div>
        </div>
        <div class="course-grid3"></div>
        <div class="empty-content" style="display: none;"></div>
      </section>
    </section>

    <section class="instructor-profile-right">
      <section class="about-me-div">
        <h3>About Me</h3>
        <div class="about-me-content">
          <img src="${
            "../" + user["profile-image"]
          }" alt="User Avatar" class="about-me-avatar">
          <div class="about-me-content-right">
            <h2>${user.firstName} ${user.lastName}</h2>
            <span>${user.email}</span>
            <span class="department-tag">CSE Department</span>
            <span class="college-tag">College of Engineering</span>
          </div>
        </div>
      </section>
    </section>
  `;
}

function renderCurrentCourses(user, courses, classes) {
  const grid = document.querySelector(".course-grid1");
  const empty = grid.nextElementSibling;
  let output = "";

  const classList = user.teachingClasses
    .map((id) => classes.find((cls) => cls.classId === id))
    .filter((cls) => cls && cls.classStatus.toLowerCase() === "open");

  if (classList.length === 0) {
    grid.innerHTML = "";
    grid.style.display = "none";
    empty.style.display = "flex";
    if (typeof renderEmptyContent === "function") renderEmptyContent();
    return;
  }

  classList.forEach((cls) => {
    const course = courses.find((c) => c.courseId === cls.courseId);
    if (!course) return;

    const creditHoursText =
      course.creditHours === 1 ? "credit hour" : "credit hours";

    const tags = `
      <span class="tag"><i class="fa-solid fa-hourglass-half"></i> ${
        course.creditHours
      } ${creditHoursText}</span>
      ${course.majorsOffered
        .map(
          (major) => `
        <span class="tag">
          <i class="fa-solid ${
            major === "CMPE" ? "fa-microchip" : "fa-laptop-code"
          }"></i> 
          ${major === "CMPS" ? "CS" : "CE"}
        </span>`
        )
        .join("")}
    `;

    output += `
      <div class="course-card open-modal" data-class-id="${cls.classId}">
        <div class="course-image">
          <img src="${course.courseImage}" alt="Course Image" style="width:100%; height:100%; object-fit:cover;">
          <div class="hover-icon">
            <i class="fa-solid fa-eye"></i>
            <span class="hover-text">View Class</span>
          </div>
          <i class="fa-solid fa-turn-up top-right-icon"></i>
        </div>
        <div class="course-info">
          <div class="course-header">
            <div class="card-tags-div">
              <span class="course-tag">${cls.courseId}</span>
              <span class="section-tag">${cls.section}</span>
            </div>
            <span class="semester">${cls.semester}</span>
          </div>
          <h3>${course.courseName}</h3>
          <p class="course-subtitle">${course.description}</p>
          <div class="course-tags">${tags}</div>
        </div>
      </div>
    `;
  });

  grid.innerHTML = output;
  grid.style.display = "grid";
  empty.style.display = "none";

  document.querySelectorAll(".open-modal").forEach((el) => {
    el.addEventListener("click", function () {
      const classId = this.dataset.classId;
      if (classId && typeof openClassModal === "function") {
        openClassModal(classId);
      }
    });
  });
}

function renderPendingClasses(user, courses, classes) {
  const grid = document.querySelector(".course-grid3");
  const empty = grid.nextElementSibling;
  let output = "";

  const pending = user.teachingClasses
    .map((id) => classes.find((cls) => cls.classId === id))
    .filter((cls) => cls && cls.classStatus.toLowerCase() === "pending");

  if (pending.length === 0) {
    grid.innerHTML = "";
    grid.style.display = "none";
    empty.style.display = "flex";
    if (typeof renderEmptyContent === "function") renderEmptyContent();
    return;
  }

  pending.forEach((cls) => {
    const course = courses.find((c) => c.courseId === cls.courseId);
    if (!course) return;

    const creditHoursText =
      course.creditHours === 1 ? "credit hour" : "credit hours";
    const tags = `
      <span class="tag"><i class="fa-solid fa-hourglass-half"></i> ${
        course.creditHours
      } ${creditHoursText}</span>
      ${course.majorsOffered
        .map(
          (major) => `
        <span class="tag">
          <i class="fa-solid ${
            major === "CMPE" ? "fa-microchip" : "fa-laptop-code"
          }"></i> 
          ${major === "CMPS" ? "CS" : "CE"}
        </span>`
        )
        .join("")}
    `;

    output += `
      <div class="course-card open-modal" data-class-id="${cls.classId}">
        <div class="course-image">
          <img src="${course.courseImage}" alt="Course Image" style="width:100%; height:100%; object-fit:cover;">
          <div class="hover-icon">
            <i class="fa-solid fa-eye"></i>
            <span class="hover-text">View Class</span>
          </div>
          <i class="fa-solid fa-turn-up top-right-icon"></i>
        </div>
        <div class="course-info">
          <div class="course-header">
            <div class="card-tags-div">
              <span class="course-tag">${cls.courseId}</span>
              <span class="section-tag">${cls.section}</span>
            </div>
            <span class="semester">${cls.semester}</span>
          </div>
          <h3>${course.courseName}</h3>
          <p class="course-subtitle">${course.description}</p>
          <div class="course-tags">${tags}</div>
        </div>
      </div>
    `;
  });

  grid.innerHTML = output;
  grid.style.display = "grid";
  empty.style.display = "none";

  document.querySelectorAll(".open-modal").forEach((el) => {
    el.addEventListener("click", function () {
      const classId = this.dataset.classId;
      if (classId && typeof openClassModal === "function") {
        openClassModal(classId);
      }
    });
  });
}
