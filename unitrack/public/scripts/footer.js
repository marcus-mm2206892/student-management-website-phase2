document.addEventListener("DOMContentLoaded", function () {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const role = user.role;

  renderFooter(role);
});

function renderFooter(role) {
  const footer = document.getElementById("footerContent");

  const quickLinks = {
    student: `
        <li><i class="fa-solid fa-compass"></i><span class="hover-circle"></span><a href="#" onclick="navigateTo('student-home-page.html')" class="text-link">Explore Courses</a></li>
      <li><i class="fa-solid fa-book-open"></i><span class="hover-circle"></span><a href="#" onclick="navigateTo('user-query.html')" class="text-link">Browse Courses</a></li>
      <li><i class="fa-solid fa-pen-to-square"></i><span class="hover-circle"></span><a href="#" onclick="navigateTo('register-course.html')" class="text-link">Register Courses</a></li>
      <li><i class="fa-solid fa-user"></i><span class="hover-circle"></span><a href="#" onclick="navigateTo('student-profile.html')" class="text-link">View Profile</a></li>
      <li><i class="fa-solid fa-road"></i><span class="hover-circle"></span><a href="#" onclick="navigateTo('learningpath.html')" class="text-link">View Learning Path</a></li>
    `,

    instructor: `
      <li><i class="fa-solid fa-gauge-high"></i><span class="hover-circle"></span><a href="#" onclick="navigateTo('instructor-home-page.html')" class="text-link">Dashboard</a></li>
      <li><i class="fa-solid fa-book-open-reader"></i><span class="hover-circle"></span><a href="#" onclick="navigateTo('user-query.html')" class="text-link">Browse Courses</a></li>
      <li><i class="fa-solid fa-clipboard-check"></i><span class="hover-circle"></span><a href="#" onclick="navigateTo('instructor-grades-submission.html')" class="text-link">View Grades</a></li>
    `,

    admin: `
      <li><i class="fa-solid fa-house-chimney-window"></i><span class="hover-circle"></span><a href="#" onclick="navigateTo('admin-home-page.html')" class="text-link">Dashboard</a></li>
      <li><i class="fa-solid fa-book-atlas"></i><span class="hover-circle"></span><a href="#" onclick="navigateTo('user-query.html')" class="text-link">Browse Courses</a></li>
      <li><i class="fa-solid fa-circle-plus"></i><span class="hover-circle"></span><a href="#" onclick="navigateTo('admin-create-course.html')" class="text-link">Create Course</a></li>
      <li><i class="fa-solid fa-plus-square"></i><span class="hover-circle"></span><a href="#" onclick="navigateTo('admin-create-class.html')" class="text-link">Create Class</a></li>
      <li><i class="fa-solid fa-calendar-week"></i><span class="hover-circle"></span><a href="#" onclick="navigateTo('admin-view-schedule.html')" class="text-link">View Schedule</a></li>
      <li><i class="fa-solid fa-check-to-slot"></i><span class="hover-circle"></span><a href="#" onclick="navigateTo('admin-approve-class.html')" class="text-link">Class Status</a></li>
    `,
  };

  footer.innerHTML = `
      <footer class="footer">
        <div class="top-half">
          <div class="contact-div">
            <img class="unitrack-logo" src="../assets/imgs/unitrack-images/unitrack-logo-blue.png" alt="UniTrack Logo">
            <div class="contact-texts">
              <h1>UniTrack</h1>
              <a href="mailto:contact@unitrack.com" class="text-link">contact@unitrack.com</a>
            </div>
            <div class="social-media-buttons">
              <div><i id="discord" class="fa-brands fa-discord"></i></div>
              <div><i id="github" class="fa-brands fa-github"></i></div>
              <div><i id="instagram" class="fa-brands fa-instagram"></i></div>
              <div><i id="coffee" class="fa fa-coffee"></i></div>
            </div>
          </div>
  
          <div class="links-div">
            <div class="links-content">
              <h3>Quick Links</h3>
              <ul>${quickLinks[role]}</ul>
            </div>
  
            <div class="links-content">
              <h3>Legal & Policies</h3>
              <ul>
                <li><i class="fa-solid fa-scroll"></i> <a href="#terms-and-conditions" class="text-link">Terms & Conditions</a></li>
                <li><i class="fa-solid fa-user-shield"></i> <a href="#privacy-policy" class="text-link">Privacy Policy</a></li>
                <li><i class="fa-solid fa-shield-halved"></i> <a href="#data-protection" class="text-link">Data Protection</a></li>
              </ul>
            </div>
  
            <div class="links-content">
              <h3>Others</h3>
              <ul>
                <li><i class="fa-solid fa-circle-question"></i> <a href="#help" class="text-link">Help & Support</a></li>
                <li><i class="fa-solid fa-university"></i> <a href="#location" class="text-link">Qatar University</a></li>
              </ul>
            </div>
          </div>
        </div>
  
        <hr class="hr">
  
        <div class="bottom-half">
          <div class="footer-info">
            <span>Made with ♥️ & ☕️ by 
              <a class="text-link dev-name" href="">@marcusmonteiro</a>, 
              <a class="text-link dev-name" href="">@joshcalma</a>, 
              <a class="text-link dev-name" href="">@mohdbashar</a>, & 
              <a class="text-link dev-name" href="">@audrecaraig</a>
            </span>
            <div>
              <span>©2025 UniTrack</span>
              <p class="version-tag">v1.0.0</p>
            </div>
          </div>
          <div class="unitrack-name">
            <span>UniTrack</span>
          </div>
        </div>
      </footer>
    `;
}

function navigateTo(link) {
  window.location.href = link;
}
