let allCourses = JSON.parse(localStorage.getItem("courses"));
let allClasses = JSON.parse(localStorage.getItem("classes"));
let allUsers = JSON.parse(localStorage.getItem("users"));
let allInstructors = JSON.parse(localStorage.getItem("instructors"));

allCourses = allCourses.filter((crs) => crs.currentClasses.length > 0); // Only display courses that have classes

let currentCourseId = null;

function toggleDropdown(event) {
  const dropdown = event.currentTarget.parentElement;
  if (!dropdown) return;

  dropdown.classList.toggle("active");

  const menu = dropdown.querySelector(".dropdown-menu");
  if (menu) {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
}
renderCourseDD();
selectOption("course", allCourses[0].courseId); // Selects the first course by default

function selectOption(type, value) {
  if (type === "course") {
    currentCourseId = value;

    console.log(currentCourseId);
    document.getElementById("selectedOption").textContent = value;

    const course = allCourses.find((crs) => crs.courseId == currentCourseId);
    let courseClasses = course.currentClasses;

    console.log(courseClasses);

    const classDropdown = document.querySelectorAll(".dropdown-menu")[1];
    classDropdown.innerHTML = "";

    courseClasses.forEach((classId) => {
      const cls = allClasses.find((cls) => cls.classId == classId);
      if (cls.classStatus == "open" || cls.classStatus == "pending") {    // Only show currently 'open' and 'pending' classes
        const option = document.createElement("div");
        option.innerHTML = `<i class="fas fa-calendar-alt"></i>CRN: ${classId}`;
        option.onclick = () => selectOption("class", classId);
        classDropdown.appendChild(option);
      } else {
        console.log("closed");
      }
    });

    document.querySelector(".course-title").textContent =
      course.courseName || "";
    document.querySelector(".course-tag").textContent = value;

    if (courseClasses.length) {
      const firstClass = allClasses.find(
        (cls) => cls.classId == courseClasses[0]    // Auto select the first class of the course, by default
      ); 
      document.getElementById("selectedCRNOption").textContent =
        "CRN: " + courseClasses[0];
      updateSchedule(firstClass);
    }
  }

  if (type === "class") {
    document.getElementById("selectedCRNOption").textContent = "CRN: " + value;
    const selectedClass = allClasses.find((cls) => cls.classId == value);
    console.log(selectedClass);
    document.querySelector(".section-tag").textContent =
      selectedClass?.section || "";
    document.querySelector(".crn-tag").textContent = `CRN ${
      selectedClass?.classId || ""
    }`;

    updateSchedule(selectedClass);
  }

  // Hide all dropdowns after selection
  document.querySelectorAll(".dropdown").forEach((d) => {
    d.classList.remove("active");
    const menu = d.querySelector(".dropdown-menu");
    if (menu) menu.style.display = "none";
  });
}

function updateSchedule(cls) {
  const scheduleContainer = document.querySelector(".class-schedule");
  const locationContainer = document.querySelector(".class-location");
  document.querySelector(".section-tag").textContent = cls.section || "";   // Set the CRN and section of the class in the modal header
  document.querySelector(".crn-tag").textContent = `CRN ${cls.classId}`;
  document.querySelector(".campus-tag").textContent = `${cls.campus}`;

  // Update the instructor information
  const instructorsContainer = document.querySelector(".instructors-list");
  const instructorEmails = cls.instructors;

  out = ``;
  instructorEmails.forEach((instructorEmail) => {
    const instructor = allInstructors.find(
      (ins) => ins.email == instructorEmail
    );
    const user = allUsers.find((usr) => usr.email == instructorEmail);
    out += instructorTemplate(instructor, user);
  });

  instructorsContainer.innerHTML = out;

  // Update schedule days
  const weekdays = scheduleContainer.querySelector(".weekdays");
  weekdays.innerHTML = "";
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const scheduleDays = cls.schedule.scheduleType;

  if (scheduleDays == "STT") {
    activeDays = ["S", "T"];
  } else if (scheduleDays == "MW") {
    activeDays = ["M", "W"];
  } 

  // For keeping track of how many 'S' we are including, since 'S' refers to both Saturday and Sunday
  let sCount = 0;

  days.forEach((day) => {
    const span = document.createElement("span");
    span.classList.add("day");

    day == "S" ? sCount++ : '';

    if (activeDays.includes(day) && sCount < 2) {
      span.classList.add("active");
    } 
    span.textContent = day;
    weekdays.appendChild(span);
  });

  // Start and end of classes for Spring and Fall semesters in 2025
  let dataRange;
  if (cls.semester == "Spring 2025") {
    dataRange = "19/01/2025 - 05/08/2025";
  } else if (cls.semester == "Fall 2025") {
    dataRange = "24/08/2025 - 11/12/2025";
  }

  // Update date range
  scheduleContainer.querySelector(".date-range").textContent = dataRange;

  // Update time/location
  const locationInfo = locationContainer.querySelector(".location-info");
  locationInfo.querySelector(
    ".time"
  ).textContent = `${cls.schedule.startTime} - ${cls.schedule.endTime} AM`;
}

// Attach toggleDropdown dynamically to both dropdowns
document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
  toggle.addEventListener("click", toggleDropdown);
});

function courseDdTemplate(courseId) {
  return `<div onclick="selectOption('course','${courseId}')"><i class="fas fa-book"></i>${courseId}</div>`;
}

function instructorTemplate(instructor, user) {
  return `
      <div class="instructor">
          <i class="fa-solid fa-user"></i>
          <div class="instructor-info">
              <span class="instructor-name">${user.firstName} ${user.lastName}</span>
              <span class="instructor-description">Professor at College of ${instructor.college}, ${instructor.department}</span>
          </div>
      </div>  
    `;
}

function renderCourseDD() {
  const courseDD = document.querySelector(
    ".view-schedule-header .dropdown-menu"
  );
  out = ``;

  allCourses.forEach((course) => {
    out += courseDdTemplate(course.courseId);
  });

  courseDD.innerHTML = out;
}
