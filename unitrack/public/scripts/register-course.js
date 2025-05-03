document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.querySelector("#searchBar");
  const tableHead = document.querySelector("#tableHead");
  const tableHeadRow = tableHead.querySelectorAll("tr")[1]; // Second row (actual column headers)
  const tableBody = document.querySelector("#data-output");
  const searchInfo = document.querySelector("#searchInfo");
  const registerTable = document.querySelector(".register-table");
  const timesClicked = JSON.parse(localStorage.getItem("timesClicked")) ?? 0;

  let allCourses = JSON.parse(localStorage.getItem("courses"));
  let allClasses = JSON.parse(localStorage.getItem("classes"));
  let allStudents = JSON.parse(localStorage.getItem("students"));
  let allUsers = JSON.parse(localStorage.getItem("users"));

  console.log("Courses Loaded:", allCourses);

  console.log("Classes Loaded:", allClasses);

  console.log("Users Loaded:", allUsers);

  //2. When admin closes a section, it should automatically unregister the student if he has been registered
  renderClasses(allClasses);
  function renderClasses(allClasses) {
    try {
      let out = "";
      const user = JSON.parse(localStorage.loggedInUser);
      const student = allStudents.find((s) => s.email == user.email);
      const enrolledClasses = student.semesterEnrollment?.classes || [];

      if (timesClicked === 0) {
        allClasses.sort((a, b) => b.enrollmentActual - a.enrollmentActual);
      }
      // Filter out completed classes
      allClasses
        .filter((c) => c.classStatus !== "completed")
        .forEach((classItem) => {
          let course = allCourses.find(
            (c) => c.courseId === classItem.courseId
          );
          if (!course) return;

          const instructorNames =
            (classItem.instructors || [])
              .map((email) => {
                const user = allUsers.find((u) => u.email === email);
                return user ? `${user.firstName} ${user.lastName}` : email;
              })
              .join("<br>") || "TBA";
          const status = classItem.classStatus?.toLowerCase() || "unknown";
          const isAlreadyEnrolled = enrolledClasses.some(
            (enrolled) => enrolled.classId === classItem.classId
          );

          let statusClass = "";
          let buttonText = "";
          let buttonDisabled = "";
          let buttonStyle = "";
          let buttonClass = "";

          if (isAlreadyEnrolled) {
            buttonText = "Unregister";
            buttonClass = isAlreadyEnrolled ? "registered-button" : "";
          } else {
            switch (status) {
              case "open":
                statusClass = "status-approved";
                if (classItem.enrollmentActual >= classItem.enrollmentMaximum) {
                  buttonDisabled = "disabled";
                  buttonText = "Full";
                } else {
                  buttonText = "Register";
                }
                break;
              case "closed":
                statusClass = "status-rejected";
                buttonText = "N/A";
                buttonDisabled = "disabled";
                break;
              case "pending":
                statusClass = "status-pending";
                buttonText = "Waitlist";
                buttonDisabled = "Register";
                break;
              default:
                statusClass = "status-default";
                buttonText = "N/A";
                buttonDisabled = "disabled";
            }
          }

          out += `
          <tr class="course-row" data-class-id="${classItem.classId}">
            <td class="data course-no"><span class="open-modal" data-class-id="${
              classItem.classId
            }">${course.courseId}</span></td>
            <td class="data course-name"><span>${course.courseName}</span></td>
            <td class="data course-campus"><span>${
              classItem.campus === "Female" ? "F" : "M"
            }</span></td>
            <td class="data course-instructor"><span>${instructorNames}</span></td>
            <td class="data course-section"><span>${
              classItem.section
            }</span></td>
            <td class="data course-enrollment"><span>${
              classItem.enrollmentActual
            }/${classItem.enrollmentMaximum}</span></td>
            <td class="data course-status">
              <span class="status-badge ${statusClass}">
                <span class="status-circle"></span>
                ${status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </td>
            <td>
              <button class="course-button ${buttonClass}"
                data-classid="${classItem.classId}"
                data-courseid="${course.courseId}"
                ${buttonDisabled}>
                <strong><span>${buttonText}</span></strong>
              </button>
            </td>
          </tr>
        `;
        });
      tableBody.innerHTML = out;

      console.log("Courses successfully loaded into table.");

      if (typeof adjustTableColumns === "function") {
        adjustTableColumns();
      }
    } catch (error) {
      console.error("Error fetching course/class data:", error);
      failedToLoad.style.display = "flex";
      registerTable.style.display = "none";
    }
  }

  // search functionality
  searchBar.addEventListener("input", function () {
    let searchQuery = searchBar.value.toLowerCase().trim();
    let rows = document.querySelectorAll(".course-row");
    let matchCount = 0;

    rows.forEach((row) => {
      let courseNo = row.querySelector(".course-no").textContent.toLowerCase();
      let courseName = row
        .querySelector(".course-name")
        .textContent.toLowerCase();
      let instructor = row
        .querySelector(".course-instructor")
        .textContent.toLowerCase();
      let section = row
        .querySelector(".course-section")
        .textContent.toLowerCase();

      if (
        courseNo.includes(searchQuery) ||
        courseName.includes(searchQuery) ||
        instructor.includes(searchQuery) ||
        section.includes(searchQuery)
      ) {
        row.style.display = "";
        matchCount++;
      } else {
        row.style.display = "none";
      }
    });

    if (matchCount > 0) {
      noResults.style.display = "none";
      tableBody.style.display = "table-row-group";
      tableHeadRow.style.display = "table-row";
      searchInfo.innerHTML = `<p>Showing <strong>${matchCount}</strong> result(s) for "<em>${searchQuery}</em>"</p>`;
      searchInfo.style.display = "block";
    } else {
      tableBody.style.display = "none";
      noResults.style.display = "flex";
      tableHeadRow.style.display = "none";
      searchInfo.style.display = "none";
    }

    if (searchQuery === "") {
      searchInfo.style.display = "none";
      tableBody.style.display = "table-row-group";
      tableHeadRow.style.display = "table-row";
      noResults.style.display = "none";
    }
  });

  // Adjust table columns based on screen width
  function adjustTableColumns() {
    let windowWidth = window.innerWidth;

    // Reset all columns before hiding
    tableHeadRow
      .querySelectorAll("th")
      .forEach((th) => (th.style.display = ""));
    tableBody.querySelectorAll("tr").forEach((row) => {
      row.querySelectorAll("td").forEach((td) => (td.style.display = ""));
    });

    // Hide the columns progressively based on screen width
    if (windowWidth < 940) hideColumn("course-instructor");
    if (windowWidth < 840) hideColumn("course-enrollment");
    if (windowWidth < 740) hideColumn("course-section");
    if (windowWidth < 650) hideColumn("course-name");
    if (windowWidth < 530) hideColumn("course-status");
  }

  // Function to hide table headers and corresponding data columns
  function hideColumn(className) {
    let th = tableHeadRow.querySelector(`.${className}`);
    if (th) th.style.display = "none"; // hide the table header

    tableBody.querySelectorAll("tr").forEach((row) => {
      let td = row.querySelector(`.${className}`);
      if (td) td.style.display = "none"; // hide the corresponding data cell
    });
  }

  // Run adjustments on window resize
  window.addEventListener("resize", adjustTableColumns);

  // Initial call on page load
  adjustTableColumns();

  document.addEventListener("click", function (event) {
    if (event.target.closest(".course-button")) {
      let button = event.target.closest(".course-button");
      let courseId = button.getAttribute("data-courseid");
      let classId = button.getAttribute("data-classid");

      handleCourseRegistration(courseId, classId);
    }
  });

  // When clicked, should display a modal about the class
  document.querySelectorAll(".open-modal").forEach((el) => {
    el.addEventListener("click", function () {
      const classId = this.dataset.classId;
      if (classId && typeof openClassModal === "function") {
        openClassModal(classId);
      }
    });
  });

  function handleCourseRegistration(courseId, classId) {
    const user = JSON.parse(localStorage.loggedInUser);
    const student = allStudents.find((s) => s.email == user.email);
    const allEnrollments =
      JSON.parse(localStorage.getItem("courseEnrollments")) || [];
    const course = allCourses.find((c) => c.courseId == courseId);
    const classObj = allClasses.find((cls) => cls.classId == classId);
    const userInfo = allUsers.find((u) => u.email == user.email);
    const isMale = userInfo.gender === "male";

    const semester = student.semesterEnrollment?.semester || "Spring 2025";
    const currentClasses = student.semesterEnrollment?.classes || [];
    const completedCourses = student.completedCourses.map((c) => c.courseId);

    const isAlreadyEnrolled = currentClasses.some(
      (cls) => cls.classId == classId
    );
    const isSameCourseEnrolled = currentClasses.some(
      (cls) => cls.courseId == courseId
    );

    const enrolledCourseCredits = currentClasses.reduce((sum, c) => {
      const course = allCourses.find((co) => co.courseId == c.courseId);
      return sum + (course?.creditHours || 0);
    }, 0);

    const courseCredit = course?.creditHours || 0;
    const totalAfterAdd = enrolledCourseCredits + courseCredit;

    // 1. Completed Course Restriction
    if (completedCourses.find((c) => c === course.courseId)) {
      openAlertModal(
        "Course Already Completed",
        "You have already completed this course."
      );
      return;
    }

    // 2. Gender-based Campus Restriction
    if (isMale && classObj.campus?.toLowerCase() === "female") {
      openAlertModal(
        "Campus Restriction",
        "This class is offered on the Female campus. Please register in a section available for Male students."
      );
      return;
    }

    if (!isMale && classObj.campus?.toLowerCase() === "male") {
      openAlertModal(
        "Campus Restriction",
        "This class is offered on the Male campus. Please register in a section available for Female students."
      );
      return;
    }

    // 3. Already Enrolled -> Offer to Unregister
    if (isAlreadyEnrolled) {
      openAlertModal(
        "Unregister?",
        `You are already enrolled in this class (${courseId}). Do you want to unregister?`
      );
      document.querySelector(".ok-btn").addEventListener("click", () => {
        student.semesterEnrollment.classes = currentClasses.filter(
          (c) => c.classId != classId
        );

        allClasses = allClasses.map((cls) => {
          if (cls.classId == classId) {
            return {
              ...cls,
              enrollmentActual: Math.max(0, cls.enrollmentActual - 1),
            };
          }
          return cls;
        });

        localStorage.setItem("students", JSON.stringify(allStudents));
        localStorage.setItem("classes", JSON.stringify(allClasses));

        location.reload();
      });
      return;
    }

    // 4. Duplicate Course Enrollment Check
    if (isSameCourseEnrolled) {
      const existingClass = currentClasses.find(
        (cls) => cls.courseId === courseId
      );
      const existingClassObj = allClasses.find(
        (cls) => cls.classId === existingClass.classId
      );
      const sectionName = existingClassObj?.section || "another section";

      openAlertModal(
        "Already Enrolled in Course",
        `You are already enrolled in ${courseId} section ${sectionName}. You cannot register for multiple sections of the same course.`
      );
      return;
    }

    // 5. Prerequisite Check
    const prerequisites = course?.prerequisites || [];
    const completedCourseIds = completedCourses.map((c) => c.courseId);
    const passedPreReq = prerequisites.every((prereq) => {
      const requiredCourseId =
        typeof prereq === "string" ? prereq : prereq.courseId;
      const minGrade = typeof prereq === "object" ? prereq.minGrade : "D";

      const completed = student.completedCourses.find(
        (c) => c.courseId === requiredCourseId
      );
      if (!completed) return false;

      // Grade comparison
      const gradeScale = [
        "A",
        "A-",
        "B+",
        "B",
        "B-",
        "C+",
        "C",
        "C-",
        "D+",
        "D",
        "F",
      ];
      const studentGradeIndex = gradeScale.indexOf(completed.letterGrade);
      const requiredGradeIndex = gradeScale.indexOf(minGrade);

      return studentGradeIndex <= requiredGradeIndex; // higher index = worse grade
    });

    if (!passedPreReq) {
      openAlertModal(
        "Missing Prerequisites",
        `You must complete the prerequisite courses with a grade above D before enrolling in ${courseId}.`
      );
      return;
    }

    // 6. Credit Hour Cap

    if (totalAfterAdd > 18) {
      openAlertModal(
        "Credit Hour Limit",
        `Registering in this course would exceed your 18 credit hour limit. You currently have ${enrolledCourseCredits} hours.`
      );
      return;
    }

    // Register the class
    const courseEnrollment = {
      enrollmentId: Date.now(),
      studentId: student.studentId,
      classId: classId,
      courseId: courseId,
      status: "Enrolled",
      courseGrade: 0,
      letterGrade: "NA",
    };

    // Update classes.json
    allClasses = allClasses.map((cls) => {
      if (cls.classId == classId) {
        return { ...cls, enrollmentActual: cls.enrollmentActual + 1 };
      }
      return cls;
    });

    // Update semesterEnrollment
    student.semesterEnrollment.classes.push({
      classId: classId,
      courseId: courseId,
      gradeStatus: "ungraded",
      letterGrade: "N/A",
    });

    // Save everything
    allEnrollments.push(courseEnrollment);
    localStorage.setItem("students", JSON.stringify(allStudents));
    localStorage.setItem("classes", JSON.stringify(allClasses));
    localStorage.setItem("courseEnrollments", JSON.stringify(allEnrollments));

    openAlertModal(
      "Registration Successful",
      `You have been enrolled in class ${classId} of course ${courseId}.`
    );
    setTimeout(() => location.reload(), 1200);
  }
  // sorting Status
  const statusOrders = [
    ["open", "pending", "closed"],
    ["pending", "closed", "open"],
    ["closed", "open", "pending"],
  ];

  document.querySelector(".course-status").addEventListener("click", () => {
    const timesClicked = JSON.parse(localStorage.getItem("timesClicked")) ?? 0;
    if (timesClicked === 0) {
      localStorage.setItem("timesClicked", 1);
    }

    const currentOrder = statusOrders[timesClicked % 3];
    const currentPriority = Object.fromEntries(
      currentOrder.map((status, index) => [status, index + 1])
    );

    allClasses.sort((a, b) => {
      // fixed
      const aPriority = currentPriority[a.classStatus];
      const bPriority = currentPriority[b.classStatus];
      return aPriority - bPriority;
    });
    console.log("sorted by: " + currentOrder);
    localStorage.setItem("timesClicked", timesClicked + 1);
    renderClasses(allClasses);
  });
});
