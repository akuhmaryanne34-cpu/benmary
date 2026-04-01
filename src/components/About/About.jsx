// src/components/About/About.jsx

import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* LEFT - IMAGE */}
        <div className={styles.imageBox}>
          {/* TOP - TEAM IMAGES */}
          <div className={styles.teamImages}>
            <img src="/team1.jpeg" alt="Frontend Developer" />
            <img src="/team2.jpeg" alt="Backend Developer" />
          </div>

          {/* BOTTOM - WORKSPACE */}
          <div className={styles.workspace}>
            <img src="/workspace.jpg" alt="Workspace" />
          </div>
        </div>

        {/* RIGHT - CONTENT */}
        <div className={styles.content}>
          <p className={styles.kicker}>
            <span className={styles.dot}></span>
            How We Work
          </p>

          <h2 className={styles.title}>
            We design and build <span>high-impact digital products</span>
          </h2>

          <p className={styles.desc}>
            We are a creative development team focused on building modern,
            scalable and user-centered solutions. From intuitive interfaces to
            powerful backend systems, we deliver products that perform.
          </p>

          {/* STEPS */}
          <div className={styles.steps}>
            <div className={styles.step}>
              <h4>01. Strategy</h4>
              <p>Understanding your goals, users and product direction.</p>
            </div>

            <div className={styles.step}>
              <h4>02. Design</h4>
              <p>Crafting clean, modern and intuitive user experiences.</p>
            </div>

            <div className={styles.step}>
              <h4>03. Development</h4>
              <p>Building fast, scalable and maintainable applications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
