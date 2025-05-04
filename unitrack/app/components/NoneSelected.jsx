import styles from "@/app/styles/none-selected.module.css";

export default function NoneSelected({ title, subtitle }) {
  return (
    <div className={styles["no-class-selected"]}>
      <i className="fa-regular fa-folder-open" style={{ fontSize: "3rem", color: "#aaa" }}></i>
      <p>{title}</p>
      <span>{subtitle}</span>
    </div>
  );
}
