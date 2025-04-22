document.addEventListener("DOMContentLoaded", function () {
    const courseForm = document.querySelector("#create-course-form");
  
    Promise.all([
      fetch("../assets/data/majors.json").then(res => res.json()),
      fetch("../assets/data/courses.json").then(res => res.json()),
      fetch("../assets/data/subjects.json").then(res => res.json())
    ])
      .then(([majors, courses, subjects]) => {
        // 1. Populate Subject Dropdown
        console.log(subjects);

        const subjectNames = subjects.map(s => s.subject);
        document.querySelector("#subjectDropdown").innerHTML = subjectNames
          .map(subject =>
            `<div onclick="selectOption('${subject}')"><i class="fas fa-book"></i>${subject}</div>`
          ).join('');
  
        // 2. Populate prerequisites dropdown
        let prereqCourses = JSON.parse(localStorage.courses) || courses;
        document.querySelector("#prereqDropdown").innerHTML = prereqCourses
          .map(course => `<div onclick="addTag(this, 'prereq')">${course.courseId}</div>`)
          .join('');
  
        // 3. Populate majors dropdown dynamically
        document.querySelector("#majorsDropdown").innerHTML = majors
          .map(major =>
            `<div onclick="addTag(this, 'major')" data-id="${major.majorId}">${major.majorName}</div>`
          ).join('');
      });
  
    // Dropdown toggle
    document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
      toggle.addEventListener("click", function (event) {
        event.stopPropagation();
        let dropdownMenu = this.nextElementSibling;
  
        document.querySelectorAll(".dropdown-menu").forEach(menu => {
          if (menu !== dropdownMenu) menu.style.display = "none";
        });
  
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
      });
    });
  
    document.addEventListener("click", () => {
      document.querySelectorAll(".dropdown-menu").forEach(menu => {
        menu.style.display = "none";
      });
    });
  
    // Handle subject selection
    function selectOption(option) {
      const subjectEl = document.querySelector("#selectedSubject");
      subjectEl.textContent = option;
      subjectEl.setAttribute("data-selected", true);
    }
  
    // Tag handler (for prereqs and majors)
    function addTag(el, type) {
      const value = el.textContent.trim();
      const container = type === "prereq" ? document.querySelector("#selectedPrereqs") : document.querySelector("#selectedMajors");
  
      const existing = Array.from(container.querySelectorAll("span")).map(span => span.dataset.value);
      if (existing.includes(value)) return;
  
      const span = document.createElement("span");
      span.classList.add("tag");
      span.dataset.value = value;
      span.textContent = value;
  
      const close = document.createElement("button");
      close.innerHTML = "&times;";
      close.onclick = () => span.remove();
      span.appendChild(close);
  
      container.appendChild(span);
    }
  
    // Form submission logic
    courseForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const data = new FormData(event.target);
      const courseFormObject = Object.fromEntries(data);
  
      const subject = document.querySelector("#selectedSubject").textContent;
      const courseNumber = courseFormObject["courseNumber"].padStart(3, "0");
      const courseName = courseFormObject["courseName"]
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      const creditHours = parseInt(courseFormObject["creditHours"]);
      const description = courseFormObject["description"];
      const imageUrl = courseFormObject["imageUrl"];
  
      const prereqs = Array.from(document.querySelectorAll("#selectedPrereqs span")).map(s => s.dataset.value);
      const majors = Array.from(document.querySelectorAll("#selectedMajors span")).map(s => s.dataset.value);
  
      // Validations
      if (!subject || subject === "Select Subject") {
        openAlertModal("Missing Subject", "Please select a subject before submitting.");
        return;
      }
  
      if (description.length < 30) {
        openAlertModal("Invalid Description", "Description must be at least 30 characters long.");
        return;
      }
  
      if (courseNumber.length !== 3 || isNaN(courseNumber)) {
        openAlertModal("Invalid Course Number", "Course number must be a 3-digit numeric value.");
        return;
      }
  
      if (creditHours < 1 || creditHours > 4) {
        openAlertModal("Invalid Credit Hours", "Credit hours must be between 1 and 4.");
        return;
      }

      if (majors.length === 0) {
        openAlertModal("Missing Majors", "Please select at least one major.");
        return;
      }

      const subjects = JSON.parse(localStorage.getItem("subjects")) || "[]";
      const index = subjects.findIndex(s => s.subject === subject);
      const subjectCode = subjects[index].code;

      const course = {
        courseId: `${subjectCode}${courseNumber}`,
        courseName,
        creditHours,
        subject,
        courseNumber,
        prerequisites: prereqs,
        majorsOffered: majors,
        currentClasses: [],
        description,
        imageUrl: imageUrl
      };

      console.log(course);
      const existingCourses = JSON.parse(localStorage.getItem("courses") || "[]");
      const existingCoursesIds = existingCourses.map(c => c.courseId);

      if (existingCoursesIds.findIndex(cid => cid === course.courseId) != -1) {
        openAlertModal("Course ID already exists", "Please enter a different course number.");
        return;
      }
      existingCourses.push(course);
      
      localStorage.setItem("courses", JSON.stringify(existingCourses));
  
      openAlertModal("Success", "Course created successfully!");
      courseForm.reset();
      document.querySelector("#selectedSubject").textContent = "Select Subject";
      document.querySelector("#selectedSubject").dataset.selected = "false";
      document.querySelector("#selectedPrereqs").innerHTML = "";
      document.querySelector("#selectedMajors").innerHTML = "";
    });
  
    window.selectOption = selectOption;
    window.addTag = addTag;
  });
  