import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Monitor, X } from "lucide-react";
import { projects } from "../../data/projects.js";
import { SectionHeading } from "../SectionHeading.jsx";
import { PeakPreview } from "../PeakPreview.jsx";

const filters = [
  "All work",
  ...new Set(projects.map((project) => project.type)),
];

const ProjectDialog = ({ project, onClose }) => {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (project && !dialog.open) {
      dialog.showModal();
      dialog.querySelector(".dialog-close")?.focus({ preventScroll: true });
    }
    if (!project && dialog.open) dialog.close();
    const previousOverflow = document.body.style.overflow;
    if (project) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);
  const dismiss = () => dialogRef.current.close();
  const dismissBackdrop = (event) => {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      dismiss();
  };
  return (
    <dialog
      className="project-dialog"
      ref={dialogRef}
      onClose={onClose}
      onClick={dismissBackdrop}
      aria-labelledby="project-dialog-title"
    >
      {project ? (
        <>
          <div
            className={`dialog-image ${project.preview === "peak" ? "dialog-image-peak" : ""}`}
          >
            {project.preview === "peak" ? (
              <PeakPreview interactive />
            ) : (
              <img
                src={project.image}
                alt={`${project.fullTitle || project.title} application preview`}
              />
            )}
            <button
              className="dialog-close icon-button"
              onClick={dismiss}
              aria-label="Close project details"
              autoFocus
            >
              <X size={20} />
            </button>
          </div>
          <div className="dialog-body">
            <p className="eyebrow">
              {project.number} / {project.category}
            </p>
            <h2 id="project-dialog-title">
              {project.fullTitle || project.title}
            </h2>
            <p className="dialog-summary">{project.summary}</p>
            <p>{project.description}</p>
            <ul className="project-features">
              {project.features.map((feature) => (
                <li key={feature}>
                  <Check size={16} />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="tech-tags">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            {project.build ? (
              <section
                className="project-build"
                aria-labelledby="project-build-heading"
              >
                <p className="eyebrow">FROM IDEA TO DESKTOP</p>
                <h3 id="project-build-heading">How Peak was built</h3>
                <p>{project.build.intro}</p>
                <ol className="project-build-steps">
                  {project.build.steps.map((step, index) => (
                    <li key={step.title}>
                      <span className="mono">0{index + 1}</span>
                      <div>
                        <h4>{step.title}</h4>
                        <p>{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div
                  className="project-build-flow"
                  aria-label="Peak architecture: provider adapters feed shared usage and task rules, which drive the WPF island"
                >
                  {project.build.flow.map((step, index) => (
                    <span key={step}>
                      {index > 0 ? (
                        <ArrowRight size={13} aria-hidden="true" />
                      ) : null}
                      <span>{step}</span>
                    </span>
                  ))}
                </div>
                <p className="project-build-note">{project.build.note}</p>
              </section>
            ) : null}
            <div className="dialog-actions">
              {project.liveLink ? (
                <a
                  className="button button-primary"
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit live project <ArrowUpRight size={17} />
                </a>
              ) : (
                <span className="preview-note mono">
                  {project.platform ? (
                    <>
                      <Monitor size={13} />
                      {project.platform}
                    </>
                  ) : (
                    "PROJECT PREVIEW · LIVE DEMO UNAVAILABLE"
                  )}
                </span>
              )}
              <button className="text-link" onClick={dismiss}>
                Back to work <X size={15} />
              </button>
            </div>
          </div>
        </>
      ) : null}
    </dialog>
  );
};

export const Projects = () => {
  const [filter, setFilter] = useState("All work");
  const [selected, setSelected] = useState(null);
  const visible = projects.filter(
    (project) => filter === "All work" || project.type === filter,
  );
  return (
    <section
      id="projects"
      className="section container"
      aria-labelledby="work-heading"
    >
      <SectionHeading
        number="01"
        label="SELECTED WORK"
        title={
          <span id="work-heading">
            Ideas, made real<span className="accent">.</span>
          </span>
        }
      >
        <p>
          A few things I’ve built.
          <br /> Each one, a new problem to solve.
        </p>
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
            <button
              className="project-visual"
              onClick={() => setSelected(project)}
              aria-label={`View ${project.fullTitle || project.title} details`}
            >
              <span className="project-visual-top mono">
                <span>
                  {project.id === "busgo"
                    ? "★ FEATURED PROJECT"
                    : project.category}
                </span>
                <span>{project.number}</span>
              </span>
              {project.id === "busgo" ? (
                <>
                  <span className="busgo-background-word" aria-hidden="true">
                    BusGo
                  </span>
                  <div className="phone-frame">
                    <div className="phone-camera" />
                    <img
                      src={project.landing}
                      alt="BusGo mobile app welcome screen"
                      loading="lazy"
                      width="322"
                      height="671"
                    />
                  </div>
                  <span className="busgo-caption mono">
                    TRAVEL WITH CONFIDENCE.
                  </span>
                </>
              ) : project.preview === "peak" ? (
                <PeakPreview />
              ) : (
                <div className="browser-frame">
                  <div className="browser-toolbar">
                    <i />
                    <i />
                    <i />
                    <span>hsi-mini-project.vercel.app</span>
                  </div>
                  <img
                    src={project.image}
                    alt="HRIS employee portal login interface"
                    loading="lazy"
                  />
                </div>
              )}
              <span className="project-open">
                <ArrowUpRight size={20} />
              </span>
            </button>
            <div className="project-card-body">
              <p className="eyebrow">
                {project.number} / {project.category}
              </p>
              <button
                className="project-title"
                onClick={() => setSelected(project)}
              >
                <h3>{project.title}</h3>
                <ArrowUpRight size={22} />
              </button>
              <p className="project-summary">{project.summary}</p>
              <div className="tech-tags">
                {project.tech.slice(0, 3).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="work-footnote mono">
        <span>BUILT TO LEARN. DESIGNED TO BE USED.</span>
        <a
          href="https://github.com/shirokuuun"
          target="_blank"
          rel="noopener noreferrer"
        >
          MORE ON GITHUB <ArrowUpRight size={14} />
        </a>
      </div>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};
