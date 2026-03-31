import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* LEFT */}
      <div className={styles.left}>
        <span className={styles.tag}>● Digital Agency</span>

        <h1>
          Digital Agency <br />
          <span>For Growth</span>
        </h1>

        <p>
          We help businesses grow by creating stunning digital experiences that
          convert visitors into loyal customers.
        </p>

        <button className={styles.btn}>Get Started →</button>
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        <div className={styles.card}>
          <div className={styles.profile}>
            <div className={styles.avatar}>BM</div>
            <p className={styles.quote}>
              "We design and build digital products that turn ideas into
              scalable experiences."
            </p>
          </div>

          <div className={styles.team}>
            <img src="/team1.jpeg" alt="" />
            <img src="/team2.jpeg" alt="" />
            <span>Team Members</span>
          </div>
        </div>

        {/* FLOATING STATS */}
        <div className={styles.stats}>
          <h2>256+</h2>
          <p>Projects Done</p>
        </div>
      </div>
    </section>
  );
}
