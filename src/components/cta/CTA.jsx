import { Link } from "react-router-dom";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.card}>
        <p className={styles.tag}>Ready to build?</p>

        <h2 className={styles.title}>
          Let’s create something <span>exceptional</span>
        </h2>

        <p className={styles.desc}>
          We design and build high-performing digital products that stand out.
        </p>

        <Link to="/contact" className={styles.btn}>
          Start a Project →
        </Link>

        <small className={styles.note}>⚡ We reply within 24 hours</small>
      </div>
    </section>
  );
}
