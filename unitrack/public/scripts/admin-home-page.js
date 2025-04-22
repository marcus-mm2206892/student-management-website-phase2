document.addEventListener("DOMContentLoaded", function () {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const courses = JSON.parse(localStorage.getItem("courses"));
  const classes = JSON.parse(localStorage.getItem("classes"));
  renderAdminHome(user, courses, classes);
});

function renderAdminHome(user, courses, classes) {
  const pendingClasses = classes.filter(
    (c) => c.classStatus === "pending" && c.enrollmentActual >= 5
  );  
  const approvedClasses = classes.filter(c => c.classStatus === "open");
  const closedClasses = classes.filter(c => c.classStatus === "closed");
  const students = JSON.parse(localStorage.getItem("students"));
  const instructors = JSON.parse(localStorage.getItem("instructors"));
  const majors = JSON.parse(localStorage.getItem("majors"));
  const totalClasses = classes.length;

  const majorsText = majors.map(m => m.majorName).join(", ");

  document.querySelector(".admin-profile").innerHTML = `
    <section class="greetings">
      <h2>Hello there, Admin</h2>
      <span>Track the information about all the courses at your university</span>
    </section>

    <section class="admin-profile-left">
      <section class="credit-hours-card">
        <div class="credit-hours-text">
          <h2>You have <strong>${pendingClasses.length} courses</strong> awaiting approval.</h2>
        </div>
        <div class="credit-hours-image">
          <img src="../assets/imgs/unitrack-images/login-page-graphic.png" alt="Credit Hours Graphic">
        </div>
      </section>

      <section class="courses pending-courses">
        <div class="courses-header">
          <div class="courses-header-left">
            <h2>Pending Classes</h2>
            <p>Classes with 5 or more waitlisted students waiting for your approval.</p>
          </div>
          <div class="courses-header-right">
            <a href="admin-approve-class.html" class="browse-courses">
              View all class status list <i class="fa-solid fa-chevron-right"></i>
            </a>
          </div>
        </div>
        <div class="course-grid"></div>
        <div class="empty-content" style="display:none;"></div>
      </section>
    </section>

    <section class="admin-profile-right">
      <section class="about-me-div">
        <h3>About Me</h3>
        <div class="about-me-content">
          <img src="../${user["profile-image"]}" alt="User Avatar" class="about-me-avatar">
          <div class="about-me-content-right">
            <h2>${user.firstName} ${user.lastName}</h2>
            <span>${user.email}</span>
            <span class="college-tag">University Admin</span>
          </div>
        </div>
      </section>

      <section class="university-info-div">
        <h3>University Information</h3>

        <div class="info-card approved-classes-total">
          <h3 class="content-info-attribute">Number of Approved Classes</h3>
          <div class="info-text">
            <h2 class="number-tag">${approvedClasses.length} of ${totalClasses}</h2>
            <p><span>${Math.round((approvedClasses.length / totalClasses) * 100)}%</span> of all courses are approved</p>
          </div>
        </div>

        <div class="info-card pending-classes-total">
          <h3 class="content-info-attribute">Number of Eligible Classes</h3>
          <div class="info-text">
            <h2 class="number-tag">${pendingClasses.length} of ${totalClasses}</h2>
            <p><span>${Math.round((pendingClasses.length / totalClasses) * 100)}%</span> of all courses are ready to be approved</p>
          </div>
        </div>

          <div class="info-card pending-classes-total">
          <h3 class="content-info-attribute">Number of Pending Classes</h3>
          <div class="info-text">
            <h2 class="number-tag">${classes.filter((c)=>c.classStatus==="pending").length} of ${totalClasses}</h2>
            <p><span>${Math.round((classes.filter((c)=>c.classStatus==="pending").length / totalClasses) * 100)}%</span> of all courses are pending</p>
          </div>
        </div>

        <div class="info-card rejected-classes-total">
          <h3 class="content-info-attribute">Number of Rejected Classes</h3>
          <div class="info-text">
            <h2 class="number-tag">${closedClasses.length} of ${totalClasses}</h2>
            <p><span>${Math.round((closedClasses.length / totalClasses) * 100)}%</span> of all courses are rejected</p>
          </div>
        </div>

        <div class="info-card students-total">
          <h3 class="content-info-attribute">Total Students</h3>
          <div class="info-text">
            <h2 class="number-tag">${students.length}</h2>
            <p><span>${students.length} students</span> are taking classes</p>
          </div>
        </div>

        <div class="info-card instructors-total">
          <h3 class="content-info-attribute">Total Instructors</h3>
          <div class="info-text">
            <h2 class="number-tag">${instructors.length}</h2>
            <p><span>${instructors.length} instructors</span> are teaching classes</p>
          </div>
        </div>

        <div class="info-card majors-offered-total">
          <h3 class="content-info-attribute">Total Majors Offered</h3>
          <div class="info-text">
            <h2 class="number-tag">${majors.length} Majors</h2>
            <p>${majorsText} ${majors.length <= 1 ? "is" : "are"} offered</p>
          </div>
        </div>
      </section>
    </section>
  `;

  renderCurrentCourses(user, courses, pendingClasses);
}

function renderCurrentCourses(user, courses, classes) {
  const grid = document.querySelector(".course-grid");
  const empty = document.querySelector(".empty-content");
  let output = "";

  const maxClasses = classes.slice(0, 10); // Show up to 10 only

  if (maxClasses.length === 0) {
    grid.innerHTML = "";
    grid.style.display = "none";
    empty.style.display = "flex";
    if (typeof renderEmptyContent === "function") renderEmptyContent();
    return;
  }

  maxClasses.forEach(cls => {
    const course = courses.find(c => c.courseId === cls.courseId);
    if (!course) return;

    const creditHoursText = course.creditHours === 1 ? "credit hour" : "credit hours";

    const tags = `
      <span class="tag"><i class="fa-solid fa-hourglass-half"></i> ${course.creditHours} ${creditHoursText}</span>
      ${course.majorsOffered.map(major => `
        <span class="tag">
          <i class="fa-solid ${major === "CMPE" ? "fa-microchip" : "fa-laptop-code"}"></i> 
          ${major === "CMPS" ? "CS" : "CE"}
        </span>`).join("")}
    `;

    output += `
      <div class="course-card" onclick="window.openClassModal('${cls.classId}')">
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
}
