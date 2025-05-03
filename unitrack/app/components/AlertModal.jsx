import React, { useState } from "react";
import styles from "@/app/styles/alert-modal.module.css"; 

const AlertModal = ({ title, description, isOpen, onClose }) => {

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`${styles["alert-modal"]} ${isOpen ? styles["show"] : ""}`} // display modal if 'isOpen' is true
      onClick={onClose} // clicking outside the modal closes it
    >
      <div
        className={styles["alert-modal-popup"]}
        onClick={handleModalClick} // prevent closing when clicking inside the modal
      >
        <button className={styles["close-btn"]} onClick={onClose}>
          <i className="fa-solid fa-times"></i> {/* Close icon */}
        </button>
        <div className={styles["alert-modal-content"]}>
          <h2 className={styles["alert-title"]}>{title}</h2>
          <p className={styles["alert-description"]}>{description}</p>
        </div>
        <button className={styles["ok-btn"]} onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
