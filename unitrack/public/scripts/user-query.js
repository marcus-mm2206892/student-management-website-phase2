document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.querySelector("#searchBar");
  const resultsGrid = document.querySelector("#resultsGrid");
  const noResults = document.querySelector("#noResults");
  const failedToLoad = document.querySelector("#failedToLoad");
  const searchQueryText = document.querySelector("#searchQueryText");
  const resultsCount = document.querySelector("#resultsCount");
  const endOfResultsSpan = document.querySelector(".end-of-results");
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const userRole = loggedInUser?.role || "student";

  let allCourses = JSON.parse(localStorage.getItem("courses") || "[]");

  // If data failed to load
  if (!Array.isArray(allCourses) || allCourses.length === 0) {
    resultsGrid.style.display = "none";
    endOfResultsSpan.style.display = "none";
    failedToLoad.style.display = "flex";
    return;
  }

  function courseTemplate(course) {
    const creditHoursText = course.creditHours === 1 ? "Credit Hour" : "Credit Hours";
  
    const hoverIconHTML = userRole === "student"
      ? `
        <div class="hover-icon" onclick="window.location.href='../html/register-course.html'">
          <i class="fa-solid fa-plus"></i>
          <span class="hover-text">Register Course</span>
        </div>
      `
      : "";
  
    // Check if current student completed this course
    let completedBadgeHTML = "";
    if (userRole === "student") {
      const completedCourses = loggedInUser?.completedCourses || [];
      const hasCompleted = completedCourses.some(c => c.courseId === course.courseId);
      if (hasCompleted) {
        completedBadgeHTML = `<span class="tag"><i class="fa-solid fa-flag-checkered"></i>Completed</span>`;
      }
    }
  
    return `
      <div class="course-card">
        <div class="course-image">
          <img src="${course.courseImage}" alt="Course Image">
          ${hoverIconHTML}
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
            ${completedBadgeHTML}
            <span class="tag"><i class="fa-solid fa-hourglass-half"></i> ${course.creditHours} ${creditHoursText}</span>
            ${course.majorsOffered.map(
              (major) => `
                <span class="tag"><i class="fa-solid ${major === "CMPE" ? "fa-microchip" : "fa-laptop-code"}"></i> ${major == "CMPS" ? 'CS' : 'CE'}</span>
              `
            ).join("")}
          </div>
        </div>
      </div>
    `;
  }
  

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

  function renderCourses(query = "") {
    query = query.trim().toLowerCase();

    // Update heading
    searchQueryText.innerHTML = query ? `“${query}”` : "All Courses";

    const matchedCourses = allCourses.filter(
      (course) =>
        course.courseName.toLowerCase().includes(query) ||
        course.courseId.toLowerCase().includes(query) ||
        (course.instructors || []).join(" ").toLowerCase().includes(query)
    );

    resultsCount.textContent = `${matchedCourses.length} result${
      matchedCourses.length !== 1 ? "s" : ""
    }`;

    if (matchedCourses.length === 0) {
      noResults.style.display = "flex";
      failedToLoad.style.display = "none";
      resultsGrid.innerHTML = "";
      resultsGrid.style.display = "none";
      endOfResultsSpan.style.display = "none";
    } else {
      noResults.style.display = "none";
      failedToLoad.style.display = "none";
      resultsGrid.innerHTML = matchedCourses.map(courseTemplate).join("");
      resultsGrid.style.display = "grid";
      endOfResultsSpan.style.display = "flex";
    }
  }

  // Initial render
  renderCourses();

  // Live search
  searchBar.addEventListener("input", () => {
    const query = searchBar.value;
    renderCourses(query);
  });
});

// // Simulated search term (replace with actual query parameter later)
// const query = "Data";
// searchQueryText.innerHTML = query;

// fetch("../assets/data/courses.json")
// .then(res => res.json())
// .then(courses => {
//     let results = courses.filter(course =>
//         course.courseName.toLowerCase().includes(query.toLowerCase()) ||
//         course.courseId.toLowerCase().includes(query.toLowerCase())
//     );

//     if (results.length === 0) {
//         noResults.style.display = "block";
//         resultsGrid.style.display = "none";
//         resultsCount.innerHTML = "0 results";
//     } else {
//         noResults.style.display = "none";
//         resultsGrid.style.display = "grid";
//         resultsCount.innerHTML = `${results.length} results`;

//         let output = results.map(course => `
//             ${courseTemplate(course)}
//         `).join("");

//         resultsGrid.innerHTML = output;
//     }
// });

// searchBar.addEventListener("input", function () {
//     window.location.href = `student-query.html?q=${searchBar.value}`;
// });
