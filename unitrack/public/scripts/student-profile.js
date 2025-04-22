document.addEventListener("DOMContentLoaded", function () {
  let user = JSON.parse(localStorage.getItem("loggedInUser"));

  // Make classes empty for testing
  // user.semesterEnrollment.classes = [];
  // localStorage.setItem("loggedInUser", JSON.stringify(user));

  const courses = JSON.parse(localStorage.getItem("courses"));
  const majors = JSON.parse(localStorage.getItem("majors"));
  const classes = JSON.parse(localStorage.getItem("classes"));

  renderStudentProfile(user, courses, majors, classes);
  renderCurrentCourses(user, courses);
});

function renderStudentProfile(user, courses, majors, classes) {
  let creditHours = 0; // for "open" classes
  let pendingHours = 0; // for "pending" classes

  user.semesterEnrollment.classes.forEach((userClass) => {
    const course = courses.find((c) => c.courseId === userClass.courseId);
    const classInfo = classes.find((cls) => cls.classId === userClass.classId); // you need to load this from localStorage

    if (course && classInfo) {
      if (classInfo.classStatus === "open") {
        creditHours += course.creditHours;
      } else if (classInfo.classStatus === "pending") {
        pendingHours += course.creditHours;
      }
    }
  });

  const completedCourses = user.completedCourses.length;
  let totalCourses = 0;
  let percentCompleted = 0;

  majors.forEach((major) => {
    if (major.majorName === user.department) {
      totalCourses = major.requiredCourses.length;
      percentCompleted = Math.round((completedCourses / totalCourses) * 100);
    }
  });

  const activeClasses = user.semesterEnrollment.classes.filter((userClass) => {
    const classInfo = classes.find((cls) => cls.classId === userClass.classId);
    return classInfo?.classStatus === "open";
  });

  document.querySelector(".student-profile").innerHTML = `
     <section class="greetings">
            <h2>Hello there, ${user.firstName} ${user.lastName}</h2>
            <span>Track your course progress and learning in university.</span>
        </section>

        <section class="student-profile-left">

            <section class="course-image-div">
                <div class="course-image">
                    <img src="../assets/major-files/2024-${
                      user.department === "Computer Science" ? "cs" : "ce"
                    }-flowchart.png" alt="Flowchart" width="100%" height="100%" />
                    <a class="hover-icon" href="../assets/major-files/2024-${
                      user.department === "Computer Science" ? "cs" : "ce"
                    }-flowchart.pdf" download>
                    <i class="fa-solid fa-download"></i>
                    <span class="hover-text">Download Flowchart</span>
                    </a>

                </div>

            </section>

            <section class="credit-hours-card">
                <div class="credit-hours-text">
                    <h2>You are taking <strong>${creditHours} credit hours</strong> this semester with <strong>${pendingHours} credits hours</strong> waiting to be approved.</h2>
                </div>
                <div class="credit-hours-image">
                    <img src="../assets/imgs/unitrack-images/login-page-graphic.png" alt="Credit Hours Graphic">
                </div>
            </section>
            

            <section class="courses recommended-courses">
                <div class="courses-header">
                    <div class="courses-header-left">
                        <h2>Current Courses</h2>
                        <p>These are the courses that you are taking this semester.</p>
                    </div>
                    <div class="courses-header-right">
                        <a href="../html/user-query.html" class="browse-courses">
                            Browse more courses <i class="fa-solid fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
                <div class="course-grid"></div>
                <div class="empty-content" style="display: none;"></div>
            </section>

        </section>

        <section class="student-profile-right">
            <section class="about-me-div">
                <h3>About Me</h3>
                <div class="about-me-content">
                    <img src="${
                      "../" + user["profile-image"]
                    }" alt="User Avatar" class="about-me-avatar"> 
                    <div class="about-me-content-right">
                        <h2>${user.firstName} ${user.lastName}</h2>
                        <span>${user.email}</span>
                        <span class="major-tag"></i>BSc. ${
                          user.department
                        }</span>
                    </div>
                </div>
            </section>

            <div class="content-info-div">
                <h3 class="content-info-attribute">Download Study Plan</h3>
                <a class="content-info-paragraph attachment" 
                  href="../assets/major-files/2024-${
                    user.department === "Computer Science" ? "cs" : "ce"
                  }-studyplan.pdf" 
                  download>
                  <i class="fa-solid fa-file-pdf"></i> Download ${
                    user.department === "Computer Science"
                      ? "Computer Science"
                      : "Computer Engineering"
                  } Study Plan
                </a>
            </div>

            <div class="progress-card">
                <h3 class="content-info-attribute">Your Progress to Graduation</h3>
                
                <div class="progress-content">
                    <div class="progress-text">
                        <p class="content-info-attribute total-tag">Completed ${completedCourses} of ${totalCourses} Total Courses</p>
                        <p>You are also taking <span>${
                          activeClasses.length
                        } courses</span> this semester</p>
                    </div>
                    
                    <div class="progress-chart">
                        <div class="pie-wrapper progress-66">
                            <span class="label">${percentCompleted}<span class="smaller">%</span></span>
                            <div class="pie">
                                <div class="left-side half-circle"></div>
                                <div class="right-side half-circle"></div>
                            </div>
                            <div class="shadow"></div>
                        </div>
                    </div>
                </div>
            </div>
            

        </section>
        
    `;
}

function renderCurrentCourses(user, courses) {
  const courseGrid = document.querySelector(".course-grid");
  const emptyContent = document.querySelector(".empty-content");
  const classes = JSON.parse(localStorage.getItem("classes")); // load class info to check classStatus

  let out = "";
  let creditHours = 0;

  user.semesterEnrollment.classes.forEach((userClass) => {
    const classInfo = classes.find((cls) => cls.classId === userClass.classId);
    if (!classInfo || classInfo.classStatus !== "open") return;

    const course = courses.find((c) => c.courseId === userClass.courseId);
    if (course) {
      creditHours += course.creditHours;
      const creditHoursText =
        course.creditHours === 1 ? "Credit Hour" : "Credit Hours";
      out += `
        <div class="course-card open-modal" data-course-id="${course.courseId}">
            <div class="course-image">
                <img src="${course.courseImage}" alt="Course Image">
                <div class="hover-icon view-learning" data-course-id="${
                  course.courseId
                }">
                    <i class="fa-solid fa-eye"></i>
                    <span class="hover-text">View Learning Path</span>
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
                    } ${creditHoursText}</span>
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
  });

  if (out.trim() === "") {
    courseGrid.innerHTML = "";
    courseGrid.style.display = "none";
    emptyContent.style.display = "flex";
    emptyContent.innerHTML = "";
    if (typeof renderEmptyContent === "function") renderEmptyContent();
  } else {
    courseGrid.innerHTML = out;
    courseGrid.style.display = "grid";
    emptyContent.style.display = "none";
    emptyContent.innerHTML = "";

    document.querySelectorAll(".open-modal").forEach((card) => {
      card.addEventListener("click", function () {
        const courseId = this.dataset.courseId;
        if (window.openClassModal && courseId) {
          openClassModal(courseId);
        }
      });
    });

    document.querySelectorAll(".view-learning").forEach((el) => {
      el.addEventListener("click", function () {
        window.location.href = "../html/learningpath.html";
      });
    });
  }
}
