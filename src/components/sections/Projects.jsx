import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects.js";
import { projectPath } from "../../data/projectContent.js";
import { SectionHeading } from "../SectionHeading.jsx";
import { PeakPreview } from "../PeakPreview.jsx";

const filters = [
  "All work",
  ...new Set(projects.map((project) => project.type)),
];
export const Projects = () => {
  const [filter, setFilter] = useState("All work");

  const visible = projects.filter(
    (project) => filter === "All work" || project.type === filter,
  );
  return (
    <section
      id="projects"
      className="section projects-section container"
      aria-labelledby="work-heading"
    >
      <SectionHeading
        label="PORTFOLIO"
        title={<span id="work-heading">Selected work</span>}
      >
        <p>Mobile, Web, and Windows applications.</p>
      </SectionHeading>
      <div className="project-toolbar">
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects"
        >
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={filter === item ? "is-active" : ""}
            >
              {item}
              {item === "All work" ? (
                <span>{String(projects.length).padStart(2, "0")}</span>
              ) : null}
            </button>
          ))}
        </div>
        <span className="mono project-count" aria-live="polite">
          {String(visible.length).padStart(2, "0")} PROJECT
          {visible.length === 1 ? "" : "S"}
        </span>
      </div>
      <div className="project-grid">
        {visible.map((project) => (
          <article
            key={project.id}
            className={`project-card project-${project.id}`}
          >
            <a
              className="project-visual"
              href={projectPath(project)}
              aria-label={`View ${project.fullTitle || project.title} details`}
            >
              <span className="project-visual-top mono">
                <span>{project.type} application</span>
                <span>Project preview</span>
              </span>
              {project.id === "busgo" ? (
                <div className="phone-frame">
                  <img
                    src={project.landing}
                    alt="BusGo mobile app welcome screen"
                    loading="lazy"
                    width="322"
                    height="671"
                  />
                </div>
              ) : project.preview === "peak" ? (
                <PeakPreview />
              ) : (
                <div className="browser-frame">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                  />
                </div>
              )}
            </a>
            <div className="project-card-body">
              <p className="eyebrow">{project.category}</p>
              <a className="project-title" href={projectPath(project)}>
                <h3>{project.title}</h3>
              </a>
              <p className="project-summary">{project.summary}</p>
              <div className="tech-tags">
                {project.tech.slice(0, 3).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <a
                className="project-details-link"
                href={projectPath(project)}
                aria-label={`Read about ${project.title}`}
              >
                View project
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="work-footnote mono">
        <span>More code and ongoing projects</span>
        <a
          href="https://github.com/shirokuuun"
          target="_blank"
          rel="noopener noreferrer"
        >
          MORE ON GITHUB <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
};
