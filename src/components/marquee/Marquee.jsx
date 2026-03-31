import styles from "./Marquee.module.css";

export default function Marquee() {
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {/* FIRST SET */}
        <div className={styles.content}>
          <span>SEO Optimization ✦</span>
          <span>Brand Identity ✦</span>
          <span>UI/UX Design ✦</span>
          <span>Web Development ✦</span>
          <span>Mobile App Design ✦</span>
          <span>Backend Development ✦</span>
          <span>API Integration ✦</span>
          <span>Performance Optimization ✦</span>
          <span>Accessibility ✦</span>
          <span>E-commerce Solutions ✦</span>
          <span>Landing Page Design ✦</span>
          <span>Dashboard Development ✦</span>
          <span>Cloud Integration ✦</span>
          <span>SEO Strategy ✦</span>
          <span>Product Design ✦</span>
          <span>Website Redesign ✦</span>
          <span>Technical Consulting ✦</span>
        </div>

        {/* SECOND SET (duplicate for smooth loop) */}
        <div className={styles.content}>
          <span>SEO Optimization ✦</span>
          <span>Brand Identity ✦</span>
          <span>UI/UX Design ✦</span>
          <span>Web Development ✦</span>
          <span>Mobile App Design ✦</span>
          <span>Backend Development ✦</span>
          <span>API Integration ✦</span>
          <span>Performance Optimization ✦</span>
          <span>Accessibility ✦</span>
          <span>E-commerce Solutions ✦</span>
          <span>Landing Page Design ✦</span>
          <span>Dashboard Development ✦</span>
          <span>Cloud Integration ✦</span>
          <span>SEO Strategy ✦</span>
          <span>Product Design ✦</span>
          <span>Website Redesign ✦</span>
          <span>Technical Consulting ✦</span>
        </div>
      </div>
    </div>
  );
}
