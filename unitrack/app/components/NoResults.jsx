"use client";
import styles from "@/app/styles/no-results.module.css";

export default function NoResults() {
  return (
    <div id="noResults" className={styles["no-results"]}>
      <div className={styles["no-results-icon"]}>

        <svg
        className={styles["svg"]}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        >
        <g>
            <circle cx="13" cy="13" r="11.5" stroke="#0d8ce9" strokeWidth="2" fill="none" />
            <path
            d="M23.43 23.401L21.214 21.186M29.914 27.086l-3.5-3.5c-0.756-0.756-2.072-0.756-2.828 0C23.208 23.964 23 24.466 23 25s0.208 1.036 0.586 1.414l3.5 3.5c0.378 0.378 0.88 0.586 1.414 0.586s1.036-0.208 1.414-0.586S30.5 29.034 30.5 28.5 30.292 27.464 29.914 27.086z"
            stroke="#0d8ce9"
            strokeWidth="2"
            fill="none"
            />
            <path d="M12 14.521h2c0 0.55-0.45 1-1 1S12 15.07 12 14.521z" fill="#0d8ce9" />
            <circle cx="17.5" cy="13.5" r="0.5" fill="#0d8ce9" />
            <circle cx="8.5" cy="13.5" r="0.5" fill="#0d8ce9" />
        </g>
        </svg>

      </div>
      <span className={styles["text"]}>No matching results found. Try again.</span>
    </div>
  );
}
