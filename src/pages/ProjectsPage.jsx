import { projectList } from "../data/siteData";

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero small-hero">
        <p className="eyebrow">Selected Work</p>
        <h1>Projects</h1>
        <p className="page-intro">
          A selection of software, data, and systems projects, from business
          applications to technical explorations.
        </p>
      </section>

      <section className="project-grid" aria-label="Project portfolio">
        {projectList.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-art">
              <span>
                {project.index} / {project.category}
              </span>
              <strong>{project.name}</strong>
            </div>
            <div className="project-content">
              <p className="stack">{project.stack}</p>
              <h2>{project.name}</h2>
              <p>{project.summary}</p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                View repository <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
