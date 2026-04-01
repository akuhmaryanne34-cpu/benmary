import { useEffect, useState } from "react";
import { getProjects } from "../../lib/getProjects";

export default function SelectedWorks() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProjects();
      setProjects(data);
    }

    fetchData();
  }, []);

  return (
    <section>
      <h2>Selected Works</h2>

      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <img src={project.image_url} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <small>{project.tech_stack}</small>

            <a href={project.live_url} target="_blank">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
