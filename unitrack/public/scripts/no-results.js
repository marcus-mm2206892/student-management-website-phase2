const noResultsContainer = document.querySelector("#noResults");
noResultsContainer.innerHTML = `
  <!-- show this if the search has no results -->
          <div class="no-results-icon">
            <!-- Light Mode SVG -->
            <svg
              class="light-mode-svg"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="search_x2C__magnifier_x2C__magnifying_x2C__emoji_x2C__happy"
              >
                <circle
                  cx="13"
                  cy="13"
                  r="11.5"
                  stroke="#455A64"
                  stroke-width="2"
                  fill="none"
                ></circle>
                <path
                  d="M23.43 23.401L21.214 21.186M29.914 27.086l-3.5-3.5c-0.756-0.756-2.072-0.756-2.828 0C23.208 23.964 23 24.466 23 25s0.208 1.036 0.586 1.414l3.5 3.5c0.378 0.378 0.88 0.586 1.414 0.586s1.036-0.208 1.414-0.586S30.5 29.034 30.5 28.5 30.292 27.464 29.914 27.086z"
                  stroke="#455A64"
                  stroke-width="2"
                  fill="none"
                ></path>
                <path
                  d="M12 14.521h2c0 0.55-0.45 1-1 1S12 15.07 12 14.521z"
                  fill="#263238"
                ></path>
                <path
                  d="M17.5 13c0.27 0 0.5 0.23 0.5 0.5S17.77 14 17.5 14S17 13.77 17 13.5S17.23 13 17.5 13z"
                  fill="#263238"
                ></path>
                <path
                  d="M8.5 13C8.77 13 9 13.23 9 13.5S8.77 14 8.5 14S8 13.77 8 13.5S8.23 13 8.5 13z"
                  fill="#263238"
                ></path>
              </g>
            </svg>

            <!-- Dark Mode SVG -->
            <svg
              class="dark-mode-svg"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="search_x2C__magnifier_x2C__magnifying_x2C__emoji_x2C__happy"
              >
                <circle
                  cx="13"
                  cy="13"
                  r="11.5"
                  stroke="#ffffff"
                  stroke-width="2"
                  fill="none"
                ></circle>
                <path
                  d="M23.43 23.401L21.214 21.186M29.914 27.086l-3.5-3.5c-0.756-0.756-2.072-0.756-2.828 0C23.208 23.964 23 24.466 23 25s0.208 1.036 0.586 1.414l3.5 3.5c0.378 0.378 0.88 0.586 1.414 0.586s1.036-0.208 1.414-0.586S30.5 29.034 30.5 28.5 30.292 27.464 29.914 27.086z"
                  stroke="#ffffff"
                  stroke-width="2"
                  fill="none"
                ></path>
                <path
                  d="M12 14.521h2c0 0.55-0.45 1-1 1S12 15.07 12 14.521z"
                  fill="#ffffff"
                ></path>
                <path
                  d="M17.5 13c0.27 0 0.5 0.23 0.5 0.5S17.77 14 17.5 14S17 13.77 17 13.5S17.23 13 17.5 13z"
                  fill="#ffffff"
                ></path>
                <path
                  d="M8.5 13C8.77 13 9 13.23 9 13.5S8.77 14 8.5 14S8 13.77 8 13.5S8.23 13 8.5 13z"
                  fill="#ffffff"
                ></path>
              </g>
            </svg>
          </div>
          <p>
            Nothing found. Try searching for a course number, name, or
            instructor.
          </p>
        </div>
  `;
applyThemeToSVG();

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    applyThemeToSVG();
  });

function applyThemeToSVG() {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  document.querySelector(".dark-mode-svg").style.display = isDark
    ? "block"
    : "none";
  document.querySelector(".light-mode-svg").style.display = isDark
    ? "none"
    : "block";
}
