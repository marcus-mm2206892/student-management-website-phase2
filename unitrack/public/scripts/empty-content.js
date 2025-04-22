window.renderEmptyContent = function () {
  const allEmptyContainers = document.querySelectorAll(".empty-content");

  allEmptyContainers.forEach((el) => {
    el.innerHTML = `
    <!-- Show this if the search has no results -->
    <div class="empty-content-icon">
      
      <!-- Light Mode SVG -->
      <svg class="light-mode-svg"
           viewBox="0 0 32 32"
           enable-background="new 0 0 32 32"
           id="_x3C_Layer_x3E_"
           version="1.1"
           xml:space="preserve"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           fill="#000000">
        <g id="SVGRepo_iconCarrier">
          <g id="page_x2C__document_1_">
            <g id="XMLID_1825_">
              <g id="XMLID_1826_">
                <path id="XMLID_1828_" d="M14.5,17.5h3c0,0.83-0.67,1.5-1.5,1.5S14.5,18.33,14.5,17.5z" fill="#455A64"/>
              </g>
            </g>
            <g id="XMLID_1807_">
              <g id="XMLID_2993_">
                <polyline id="XMLID_2998_" points="21.5,1.5 4.5,1.5 4.5,30.5 27.5,30.5 27.5,7.5" fill="none" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
                <polyline id="XMLID_2997_" points="21.5,1.5 27.479,7.5 21.5,7.5 21.5,4" fill="none" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
                <path id="XMLID_2996_" d="M16,19c-0.83,0-1.5-0.67-1.5-1.5h3C17.5,18.33,16.83,19,16,19z" fill="none" stroke="455A64" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
                <path id="XMLID_2995_" d="M22.5,16c0-0.553-0.448-1-1-1s-1,0.447-1,1" fill="none" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
                <path id="XMLID_2994_" d="M11.5,16c0-0.553-0.448-1-1-1s-1,0.447-1,1" fill="none" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
              </g>
            </g>
          </g>
        </g>
      </svg>

      <!-- Dark Mode SVG -->
      <svg class="dark-mode-svg"
           viewBox="0 0 32 32"
           enable-background="new 0 0 32 32"
           id="_x3C_Layer_x3E_"
           version="1.1"
           xml:space="preserve"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           fill="#000000">
        <g id="SVGRepo_iconCarrier">
          <g id="page_x2C__document_1_">
            <g id="XMLID_1825_">
              <g id="XMLID_1826_">
                <path id="XMLID_1828_" d="M14.5,17.5h3c0,0.83-0.67,1.5-1.5,1.5S14.5,18.33,14.5,17.5z" fill="#ffffff"/>
              </g>
            </g>
            <g id="XMLID_1807_">
              <g id="XMLID_2993_">
                <polyline id="XMLID_2998_" points="21.5,1.5 4.5,1.5 4.5,30.5 27.5,30.5 27.5,7.5" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
                <polyline id="XMLID_2997_" points="21.5,1.5 27.479,7.5 21.5,7.5 21.5,4" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
                <path id="XMLID_2996_" d="M16,19c-0.83,0-1.5-0.67-1.5-1.5h3C17.5,18.33,16.83,19,16,19z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
                <path id="XMLID_2995_" d="M22.5,16c0-0.553-0.448-1-1-1s-1,0.447-1,1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
                <path id="XMLID_2994_" d="M11.5,16c0-0.553-0.448-1-1-1s-1,0.447-1,1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>

    <p>No content found. All finished!</p>
  `;
  });

  applyThemeToSVG();
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    applyThemeToSVG();
  });
};

function applyThemeToSVG() {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const dark = document.querySelector('.dark-mode-svg');
  const light = document.querySelector('.light-mode-svg');

  if (dark && light) {
    dark.style.display = isDark ? 'block' : 'none';
    light.style.display = isDark ? 'none' : 'block';
  }
}

// Run on initial page load if needed
if (document.readyState !== "loading") {
  window.renderEmptyContent();
} else {
  document.addEventListener("DOMContentLoaded", window.renderEmptyContent);
}
