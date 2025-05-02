"use client";
import { useEffect } from "react";
import styles from "@/app/styles/empty-content.module.css";

export default function EmptyContent() {
  useEffect(() => {
    function applyThemeToSVG() {
      const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const darkSVG = document.querySelector("#emptyContent .dark-mode-svg");
      const lightSVG = document.querySelector("#emptyContent .light-mode-svg");

      if (darkSVG && lightSVG) {
        darkSVG.style.display = darkMode ? "block" : "none";
        lightSVG.style.display = darkMode ? "none" : "block";
      }
    }

    applyThemeToSVG();
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyThemeToSVG);

    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", applyThemeToSVG);
    };
  }, []);

  return (
    <div id="emptyContent" className={styles["empty-content"]}>
      <div className={styles["empty-content-icon"]}>
        
      <svg
        className={styles["light-mode-svg"]}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        >
        <g>
            <path d="M14.5,17.5h3c0,0.83-0.67,1.5-1.5,1.5S14.5,18.33,14.5,17.5z" fill="#455A64" />
            <polyline
            points="21.5,1.5 4.5,1.5 4.5,30.5 27.5,30.5 27.5,7.5"
            fill="none"
            stroke="#455A64"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            />
            <polyline
            points="21.5,1.5 27.479,7.5 21.5,7.5 21.5,4"
            fill="none"
            stroke="#455A64"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            />
            <path
            d="M16,19c-0.83,0-1.5-0.67-1.5-1.5h3C17.5,18.33,16.83,19,16,19z"
            fill="none"
            stroke="#455A64"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            />
            <path
            d="M22.5,16c0-0.553-0.448-1-1-1s-1,0.447-1,1"
            fill="none"
            stroke="#455A64"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            />
            <path
            d="M11.5,16c0-0.553-0.448-1-1-1s-1,0.447-1,1"
            fill="none"
            stroke="#455A64"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            />
        </g>
        </svg>

        <svg
        className={styles["dark-mode-svg"]}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        >
        <g>
            <path d="M14.5,17.5h3c0,0.83-0.67,1.5-1.5,1.5S14.5,18.33,14.5,17.5z" fill="#ffffff" />
            <polyline
            points="21.5,1.5 4.5,1.5 4.5,30.5 27.5,30.5 27.5,7.5"
            fill="none"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            />
            <polyline
            points="21.5,1.5 27.479,7.5 21.5,7.5 21.5,4"
            fill="none"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            />
            <path
            d="M16,19c-0.83,0-1.5-0.67-1.5-1.5h3C17.5,18.33,16.83,19,16,19z"
            fill="none"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            />
            <path
            d="M22.5,16c0-0.553-0.448-1-1-1s-1,0.447-1,1"
            fill="none"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            />
            <path
            d="M11.5,16c0-0.553-0.448-1-1-1s-1,0.447-1,1"
            fill="none"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            />
        </g>
        </svg>

        
      </div>
      <span>Nothing to show here</span>
    </div>
  );
}
