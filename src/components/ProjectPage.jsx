import { ArrowLeft, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/theme.js";
import { BusGoShowcase } from "./BusGoShowcase.jsx";

const ProjectHeader = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="project-page-header container">
      <a className="project-back" href="/#projects">
        <ArrowLeft size={16} aria-hidden="true" /> Back
      </a>
      <button
        className="icon-button"
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </header>
  );
};

export const ProjectPage = ({ project }) => (
  <>
    <a className="skip-link" href="#main">Skip to content</a>
    <ProjectHeader />
    <main id="main" className="project-page" aria-labelledby="project-page-title">
      <article>
        <header className="project-page-intro">
          <p className="eyebrow">{project.category}</p>
          <h1 id="project-page-title">{project.fullTitle || project.title}</h1>
          <p className="project-page-summary">{project.summary}</p>
          <ul className="project-page-stack" aria-label="Technologies used">
            {project.tech.map((tech) => <li key={tech}>{tech}</li>)}
          </ul>
          {project.liveLink && (
            <a className="button" href={project.liveLink} target="_blank" rel="noopener noreferrer">
              Visit live project
            </a>
          )}
          {project.platform && <p className="project-page-platform">{project.platform}</p>}
        </header>
        {project.id === "busgo" ? (
          <BusGoShowcase />
        ) : (
          <figure className="project-page-image">
            <img src={project.image} alt={project.imageAlt} />
          </figure>
        )}
        <section className="project-page-section" aria-labelledby="project-features">
          <h2 id="project-features">What it does</h2>
          <ul className="project-page-features">
            {project.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </section>
      </article>
    </main>
  </>
);

export const ProjectNotFound = () => (
  <>
    <ProjectHeader />
    <main id="main" className="project-page">
      <div className="project-page-intro">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="project-page-summary">
          That page isn't here. You can find my projects in the portfolio.
        </p>
        <a className="button button-primary" href="/#projects">View selected work</a>
      </div>
    </main>
  </>
);
