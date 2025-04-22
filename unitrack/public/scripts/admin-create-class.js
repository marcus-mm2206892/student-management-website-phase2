document.addEventListener("DOMContentLoaded", function () {
  // Load JSON from localStorage or fetch if not loaded yet
  const instructors = JSON.parse(localStorage.getItem("instructors") || "[]");
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  let courses = JSON.parse(localStorage.getItem("courses") || "[]");
  let classes = JSON.parse(localStorage.getItem("classes") || "[]");

  const courseDropdown = document.querySelector("#coursesDropdown");
  const instructorDropdownMenu = document.querySelector("#instructorDropdownMenu");

  const tagContainer = document.querySelector("#selectedInstructors");

  const selectedCourse = document.querySelector("#selectedCourse");
  const selectedInstructor = document.querySelector("#selectedInstructor");
  const selectedCampus = document.querySelector("#selectedCampus");
  const selectedSchedType = document.querySelector("#selectedSchedType");
  const selectedStartTime = document.querySelector("#selectedStartTime");
  const selectedEndTime = document.querySelector("#selectedEndTime");

  // Dropdown toggle logic
  document.addEventListener("click", function () {
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.style.display = "none";
    });
  });

  document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
    toggle.addEventListener("click", function (event) {
      event.stopPropagation();
      const dropdownMenu = this.nextElementSibling;
      const isVisible = dropdownMenu.style.display === "block";

      // Hide all dropdowns
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.style.display = "none";
      });

      // Toggle this one
      dropdownMenu.style.display = isVisible ? "none" : "block";
    });
  });

  // Create tag element
  const createTag = (name) => {
    const span = document.createElement("span");
    span.classList.add("tag");
    span.textContent = name;

    const close = document.createElement("button");
    close.innerHTML = "&times;";
    close.onclick = () => span.remove();
    span.appendChild(close);

    tagContainer.appendChild(span);
  };

  // Populate courses
  courseDropdown.innerHTML = courses
    .map(
      (course) =>
        `<div onclick="selectCourse('${course.courseId}')"><i class="fas fa-book"></i>${course.courseId}</div>`
    )
    .join("");

  // Select course & show instructors by department
  window.selectCourse = function (courseId) {
    selectedCourse.textContent = courseId;
    selectedCourse.dataset.selected = "true";

    const selected = courses.find((c) => c.courseId === courseId);
    const subject = selected.subject;

    const filtered = instructors.filter(
      (i) =>
        Array.isArray(i.expertise) &&
        i.expertise
          .map((e) => e.trim().toLowerCase())
          .includes(subject.trim().toLowerCase())
    );

    const instructorNames = users.filter((u) =>
      filtered.some((i) => i.email === u.email)
    );

    instructorDropdownMenu.innerHTML = instructorNames
      .map(
        (i) =>
          `<div onclick="selectInstructor('${i.firstName} ${i.lastName}')">${i.firstName} ${i.lastName}</div>`
      )
      .join("");

    // Autogenerate section if campus is selected
    const campus = selectedCampus.textContent;
    if (campus === "Male" || campus === "Female") {
      autoGenerateSection(courseId, campus);
    }
  };

  // To autogenerate sections
  function autoGenerateSection(courseId, campus) {
    const relevantClasses = classes.filter(
      (c) => c.courseId === courseId && c.campus === campus
    );

    let base = campus === "Male" ? 1 : 51;
    let sectionNumber = base;

    // Extract all existing section codes for this course & campus
    const usedSections = new Set(relevantClasses.map((c) => c.section));

    // Loop until we find a section not used yet
    while (usedSections.has("L" + sectionNumber.toString().padStart(2, "0"))) {
      sectionNumber++;
    }

    const sectionCode = "L" + sectionNumber.toString().padStart(2, "0");
    document.querySelector("#section").value = sectionCode;
  }

  // Multi-select instructors
  window.selectInstructor = function (name) {
    const tags = Array.from(tagContainer.querySelectorAll("span")).map((s) =>
      s.textContent.replace("×", "").trim()
    );
    if (!tags.includes(name)) createTag(name);
    selectedInstructor.textContent = "Instructors Selected";
    selectedInstructor.dataset.selected = "true";
  };

  // Campus
  window.selectOptionCampus = function (campus) {
    selectedCampus.textContent = campus;
    selectedCampus.dataset.selected = "true";

    const courseId = selectedCourse.textContent;
    if (courseId && courseId !== "Select Course") {
      autoGenerateSection(courseId, campus);
    }
  };

  // Schedule
  window.selectOptionSchedType = function (type) {
    selectedSchedType.textContent = type;
    selectedSchedType.dataset.selected = "true";
  };

  window.selectStartTime = function (time) {
    selectedStartTime.textContent = time;
    selectedStartTime.dataset.selected = "true";

    const timeIndex = timeSlots.indexOf(time);
    if (timeIndex !== -1 && timeIndex + 1 < timeSlots.length) {
      const nextHour = timeSlots[timeIndex + 1];
      selectedEndTime.textContent = nextHour;
      selectedEndTime.dataset.selected = "true";
    } else {
      selectedEndTime.textContent = "Select Time";
      selectedEndTime.dataset.selected = "false";
    }
  };

  window.selectEndTime = function (time) {
    selectedEndTime.textContent = time;
    selectedEndTime.dataset.selected = "true";
  };

  const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  function populateTimeDropdowns() {
    const start = document.querySelector("#startTimeDropdownMenu");
    const end = document.querySelector("#endTimeDropdownMenu");
    start.innerHTML = timeSlots
      .map((t) => `<div onclick="selectStartTime('${t}')">${t}</div>`)
      .join("");
    end.innerHTML = timeSlots
      .map((t) => `<div onclick="selectEndTime('${t}')">${t}</div>`)
      .join("");
  }

  // Populate time dropdown
  populateTimeDropdowns();

  // Form Submission
  document
    .querySelector(".create-class-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const courseId = selectedCourse.textContent;
      const section = document.querySelector("#section").value;
      const maxStudents = parseInt(
        document.querySelector("#maxStudents").value
      );
      const campus = selectedCampus.textContent;
      const schedType = selectedSchedType.textContent;
      const startTime = selectedStartTime.textContent;
      const endTime = selectedEndTime.textContent;
      const semester = "Spring 2025";

      // Validate time
      const startIndex = timeSlots.indexOf(startTime);
      const endIndex = timeSlots.indexOf(endTime);

      if (
        startTime === "Select Time" ||
        endTime === "Select Time" ||
        startIndex === -1 ||
        endIndex === -1 ||
        endIndex - startIndex !== 1
      ) {
        openAlertModal(
          "Invalid Time Selection",
          "Please select a valid start time. The end time must be exactly 1 hour later."
        );
        return;
      }

      // Continue submission
      const instructors = Array.from(tagContainer.querySelectorAll("span")).map(
        (tag) => tag.textContent.replace("×", "").trim()
      );
      const instructorEmails = users
        .filter((u) => instructors.includes(`${u.firstName} ${u.lastName}`))
        .map((u) => u.email);

      const lastClassId = Math.max(...classes.map((c) => parseInt(c.classId)));
      const newClassId = (lastClassId + 1).toString();

      const newClass = {
        classId: newClassId,
        courseId,
        semester,
        instructionalMethods: "English",
        campus,
        enrollmentActual: 0,
        enrollmentMaximum: maxStudents,
        classStatus: "pending",
        schedule: {
          scheduleType: schedType === "Monday, Wednesday" ? "MW" : "STT",
          startTime,
          endTime,
        },
        instructors: instructorEmails,
        section,
      };

      classes.push(newClass);
      localStorage.setItem("classes", JSON.stringify(classes));

      const courseIndex = courses.findIndex((c) => c.courseId === courseId);
      if (!courses[courseIndex].currentClasses.includes(newClassId)) {
        courses[courseIndex].currentClasses.push(newClassId);
      }
      localStorage.setItem("courses", JSON.stringify(courses));

      openAlertModal(
        "Success",
        `Class ${newClassId} created for course ${courseId}`
      );

      this.reset();
      tagContainer.innerHTML = "";
      selectedCourse.textContent = "Select Course";
      selectedInstructor.textContent = "Select Instructor(s)";
      selectedCampus.textContent = "Select Campus";
      selectedSchedType.textContent = "Select Schedule Type";
      selectedStartTime.textContent = "Select Time";
      selectedEndTime.textContent = "Select Time";
    });
});
