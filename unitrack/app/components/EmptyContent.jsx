"use client";
import styles from "@/app/styles/empty-content.module.css";

export default function EmptyContent() {

  return (
    <div id="emptyContent" className={styles["empty-content"]}>
      <div className={styles["empty-content-icon"]}>
        
        <svg
        className={styles["svg"]}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        fill="#0d8ce9"
        >
        <g>
            <path d="M14.5,17.5h3c0,0.83-0.67,1.5-1.5,1.5S14.5,18.33,14.5,17.5z" fill="#0d8ce9" />
            <polyline
            points="21.5,1.5 4.5,1.5 4.5,30.5 27.5,30.5 27.5,7.5"
            fill="none"
            stroke="#0d8ce9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            />
            <polyline
            points="21.5,1.5 27.479,7.5 21.5,7.5 21.5,4"
            fill="none"
            stroke="#0d8ce9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            />
            <path
            d="M16,19c-0.83,0-1.5-0.67-1.5-1.5h3C17.5,18.33,16.83,19,16,19z"
            fill="none"
            stroke="#0d8ce9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            />
            <path
            d="M22.5,16c0-0.553-0.448-1-1-1s-1,0.447-1,1"
            fill="none"
            stroke="#0d8ce9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            />
            <path
            d="M11.5,16c0-0.553-0.448-1-1-1s-1,0.447-1,1"
            fill="none"
            stroke="#0d8ce9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            />
        </g>
        </svg>

        
      </div>
      <span>You’re all caught up. Nothing to display for now.</span>
    </div>
  );
}
