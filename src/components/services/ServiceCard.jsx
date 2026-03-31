import styles from "./ServiceCard.module.css";

export default function ServiceCard({ title, desc, index }) {
  return (
    <div className={styles.card}>
      {/* NUMBER */}
      <span className={styles.number}>
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* CONTENT */}
      <h3>{title}</h3>
      <p>{desc}</p>

      {/* LINK */}
      <span className={styles.link}>Learn more →</span>
    </div>
  );
}
