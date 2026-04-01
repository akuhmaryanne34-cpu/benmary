import { useEffect, useState } from "react";
import { getProjects } from "../../lib/getProjects";
import styles from "./SelectedWorks.module.css";
import { Link } from "react-router-dom";

export default function SelectedWorks() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProjects();
      setProjects(data.slice(0, 4));
    }

    fetchData();
  }, []);

  return (
    <section className={styles.works}>
      <div className={styles.header}>
        <p className={styles.subtitle}>
          <span className={styles.dot}></span>
          Selected Works
        </p>

        <h2 className={styles.title}>
          Real projects, <span>real impact.</span>
        </h2>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div className={styles.card} key={project.id}>
            {/* IMAGE */}
            <div className={styles.imageWrapper}>
              <img src={project.image_url} alt={project.title} />
            </div>

            {/* CONTENT */}
            <div className={styles.content}>
              <h3 className={styles.projectTitle}>{project.title}</h3>

              <p className={styles.description}>{project.description}</p>

              {/* TECH STACK */}
              <div className={styles.techStack}>
                {project.tech_stack?.split(",").map((tech, i) => (
                  <span key={i} className={styles.tech}>
                    {tech.trim()}
                  </span>
                ))}
              </div>

              {/* BUTTON */}
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                Explore Project →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.btnWrapper}>
        <Link to="/projects" className={styles.viewMore}>
          See More Projects →
        </Link>
      </div>
    </section>
  );
}
