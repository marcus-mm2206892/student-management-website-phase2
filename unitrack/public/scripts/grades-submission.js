document.addEventListener("DOMContentLoaded", function () {
  const user = JSON.parse(localStorage.loggedInUser);

  let classes = [],
    instructors = [],
    students = [],
    courses = [],
    users = [];

  Promise.all([
    fetch("../assets/data/classes.json").then((res) => res.json()),
    fetch("../assets/data/instructors.json").then((res) => res.json()),
    fetch("../assets/data/students.json").then((res) => res.json()),
    fetch("../assets/data/courses.json").then((res) => res.json()),
    fetch("../assets/data/users.json").then((res) => res.json()),
  ]).then(
    ([classesData, instructorsData, studentsData, coursesData, usersData]) => {
      classes = JSON.parse(localStorage.classes) || classesData;
      instructors = JSON.parse(localStorage.instructors) || instructorsData;
      students = JSON.parse(localStorage.students) || studentsData;
      courses = JSON.parse(localStorage.courses) || coursesData;
      users = JSON.parse(localStorage.users) || usersData;

      const instructorClasses = classes.filter((c) =>
        c.instructors.includes(user.email)
      );

      const openInstructorClasses = instructorClasses.filter((ic) => {
        return ic.classStatus === "open" || ic.classStatus === "completed";
      });

      const instructorClassesWithName = openInstructorClasses
        .map((oic) => {
          const course = courses.find(
            (course) => course.courseId === oic.courseId
          );
          let submitted = oic.classStatus === "open" ? "P" : "S";
          return {
            ...oic,
            courseName: course?.courseName || "Unnamed Course",
            submitted: submitted,
          };
        })
        .sort((a, b) => {
          if (a.classStatus === "open" && b.classStatus === "completed")
            return -1;
          if (a.classStatus === "completed" && b.classStatus === "open")
            return 1;
          return 0;
        });

      document.querySelector(
        "#no-of-classes"
      ).innerHTML = `<span>${openInstructorClasses.length} Classes</span>`;

      const currentTeaching = document.querySelector(
        "#current-teaching-classes"
      );
      const selectedContainer = document.querySelector(".classes.selected");

      selectedContainer.innerHTML = `
        <div class="no-class-selected">
          <i class="fa-regular fa-folder-open" style="font-size: 3rem; color: #aaa;"></i>
          <p>No class selected</p>
          <span>Please select a class to view and submit grades.</span>
        </div>
      `;

      currentTeaching.innerHTML = instructorClassesWithName
        .map(
          (ic) => `
            <div class="card" 
              data-classid="${ic.classId}" 
              data-courseid="${ic.courseId}" 
              data-section="${ic.section}" 
              data-coursename="${ic.courseName}" 
              data-campus="${ic.campus}">

              <div class="course-header">
                <span class="course-tag">${ic.courseId}</span>
                <span class="section-tag">${ic.section}</span>
                <span class="campus-tag">${ic.campus}</span>
              </div>
              <div class="course-completed-main">
                <div class="course-grade">
                  <div><h3>${ic.courseName}</h3></div>
                  <div class="status-container"><span class="status">${ic.submitted}</span></div>
                </div>
                <div class="course-tags">
                  <span class="tag"><i class="fa-solid fa-user-graduate"></i> ${ic.enrollmentActual} Students</span>
                </div>
              </div>
            </div>
        `
        )
        .join("");

      currentTeaching.addEventListener("click", function (event) {
        const card = event.target.closest(".card");
        if (!card) return;

        const classId = card.dataset.classid;
        const courseId = card.dataset.courseid;
        const section = card.dataset.section;
        const courseName = card.dataset.coursename;
        const campus = card.dataset.campus;

        selectedContainer.classList.remove("completed");
        renderStudentsForClass(classId, courseId, courseName, section, campus);
      });
    }
  );

  function renderStudentsForClass(classId, courseId, courseName, section, campus) {
    const selectedContainer = document.querySelector(".classes.selected");

    const selectedClassData = classes.find((c) => c.classId === classId);
    const isCompleted = selectedClassData.classStatus === "completed";

    const enrolledStudents = students.filter((student) =>
      student.semesterEnrollment?.classes?.some(
        (cls) => cls.classId === classId
      )
    );

    if (isCompleted) {
      selectedContainer.classList.add("completed");
      selectedContainer.innerHTML = `
        <div class="class-header completed-view">
          <div class="course-tags-div">
            <span class="course-tag">${courseId}</span>
            <span class="section-tag">Section ${section}</span>
            <span class="campus-tag">${campus}</span>
            <h3>${courseName}</h3>
          </div>
        </div>
    
        <div class="grades-submitted-message">
          <i class="fa-solid fa-circle-check"></i>
          <h3>Grades have been submitted!</h3>
          <p>You can no longer modify grades for this class.</p>
        </div>
      `;
      return;
    }
    

    const studentCards = enrolledStudents
      .map((student) => {
        const userProfile = users.find((u) => u.email === student.email);
        const savedGrade = localStorage.getItem(student.email) || "Grade";

        return `
        <div class="card">
          <div class="student" data-student-id="${student.studentId}">
            <div class="student-grade">
              <div>
                <h3>${userProfile?.firstName || "Unknown"} ${
          userProfile?.lastName || ""
        }</h3>
                <div><span class="student-info email">${
                  student.email
                }</span></div>
              </div>
              <div class="dropdown">
                <div class="dropdown-toggle">
                  <span id="selectedOption">${savedGrade}</span>
                  <i class="fas fa-chevron-down"></i>
                </div>
                <div class="dropdown-menu">
                  ${["A", "B+", "B", "C+", "C", "D+", "D", "F", "I"]
                    .map((g) => `<div>${g}</div>`)
                    .join("")}
                </div>
              </div>
            </div>
          </div>
        </div>`;
      })
      .join("");

    selectedContainer.innerHTML = `
      <div class="class-header">
        <div class="course-tags-div">
          <span class="course-tag">${courseId}</span>
          <span class="section-tag">Section ${section}</span>
          <span class="campus-tag">${campus}</span>
          <h3>${courseName}</h3>
        </div>
        <div class="course-tags-div">
          <span class="tag"><i class="fa-solid fa-user-graduate"></i> ${enrolledStudents.length} Students</span>
        </div>
      </div>
  
      <div class="cards-container" id="students">
        ${studentCards}
      </div>
  
      <div class="submit-container">
        <button class="submit-btn" id="submit-btn">Submit Grades</button>
      </div>
    `;

    initializeDropdownListeners();
    initializeSubmit(classId, enrolledStudents);
  }

  function initializeDropdownListeners() {
    document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
      toggle.addEventListener("click", function (event) {
        event.stopPropagation();
        let dropdownMenu = this.nextElementSibling;
        document.querySelectorAll(".dropdown-menu").forEach((menu) => {
          if (menu !== dropdownMenu) menu.style.display = "none";
        });
        dropdownMenu.style.display =
          dropdownMenu.style.display === "block" ? "none" : "block";
      });
    });

    document.querySelectorAll(".dropdown-menu div").forEach((option) => {
      option.addEventListener("click", function () {
        const selectedText = this.textContent;
        const dropdownToggle =
          this.closest(".dropdown").querySelector("#selectedOption");
        dropdownToggle.textContent = selectedText;

        const email = this.closest(".student-grade").querySelector(
          ".student-info.email"
        ).textContent;
        localStorage.setItem(email, selectedText);

        this.closest(".dropdown-menu").style.display = "none";
      });
    });

    document.addEventListener("click", () => {
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.style.display = "none";
      });
    });

    document.querySelector("#students").addEventListener("scroll", () => {
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.style.display = "none";
      });
    });
  }

  function initializeSubmit(classId, enrolledStudents) {
    document
      .querySelector("#submit-btn")
      .addEventListener("click", function () {
        submitGrades(classId, enrolledStudents);
        setTimeout(() => {location.reload();}, 2500);
      });
  }

  function submitGrades(classId, enrolledStudents) {
    let isGradeMissing = false;
    let studentWithMissingGrade;

    enrolledStudents.forEach((student) => {
      const grade = localStorage.getItem(student.email);
      if (!grade) {
        studentWithMissingGrade = student;
        isGradeMissing = true;
        return;
      }

      const selectedClass = student.semesterEnrollment.classes.find(
        (c) => c.classId === classId
      );
      selectedClass.letterGrade = grade;
      selectedClass.gradeStatus = "graded";

      student.semesterEnrollment.classes =
        student.semesterEnrollment.classes.filter((c) => c.classId !== classId);
      
      student.completedCourses.push({
        courseId: selectedClass.courseId,
        letterGrade: selectedClass.letterGrade,
      });
    });

    if (isGradeMissing) {
      const userProfile = users.find(
        (u) => u.email === studentWithMissingGrade.email
      );
      openAlertModal(
        "Missing Grades",
        `Please choose a grade for student ${userProfile.firstName} ${userProfile.lastName}`
      );
      return;
    }

    localStorage.setItem("students", JSON.stringify(students));

    // Set the status of the class to completed
    const selectedClass = classes.find((c) => c.classId === classId);
    selectedClass.classStatus = "completed";

    // Remove the class from the teaching classes of the instructor(s) and add to graded classes of the instructor(s)
    const instructorsTeachingSelectedClass = selectedClass.instructors;
    instructorsTeachingSelectedClass.map(itsc => {
      const instructor = instructors.find(ins => ins.email === itsc);
      const newTeachingClasses = instructor.teachingClasses.filter(cls => cls != classId);
      instructor.teachingClasses = newTeachingClasses;
      instructor.gradedClasses.push(classId);

      if (instructor.email === user.email) {
        user.teachingClasses = newTeachingClasses;
        user.gradedClasses.push(classId);
      }
    })

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    localStorage.setItem("instructors", JSON.stringify(instructors));
    localStorage.setItem("classes", JSON.stringify(classes));

    openAlertModal(
      "Grades Submitted",
      `Grades for the class with CRN ${classId} have been submitted`
    );
  }

  function adjustLayout() {
    const teachingDiv = document.querySelector(".classes.teaching");
    const selectedDiv = document.querySelector(".classes.selected");
    if (window.innerWidth <= 768) {
      teachingDiv.style.height = "auto";
      selectedDiv.style.height = `calc(100vh - ${teachingDiv.offsetHeight}px - 2rem)`;
    } else {
      teachingDiv.style.height = "100%";
      selectedDiv.style.height = "100%";
    }
  }

  adjustLayout();
  window.addEventListener("resize", adjustLayout);
});
