import styles from "./Services.module.css";
import services from "../../data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      {/* OPTIONAL SMALL HEADER */}
      <div className={styles.top}>
        <span className={styles.tag}>● Our Services</span>
        <h2>What We Do</h2>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </div>
    </section>
  );
}
