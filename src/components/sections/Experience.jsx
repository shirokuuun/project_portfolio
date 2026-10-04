import { ArrowUpRight, BriefcaseBusiness, ChevronDown } from "lucide-react";
import { SectionHeading } from "../SectionHeading.jsx";

export const Experience = () => (
  <section
    id="experience"
    className="section experience-section container"
    aria-labelledby="experience-heading"
  >
    <SectionHeading
      number="04"
      label="ALONG THE WAY"
      title={
        <span id="experience-heading">
          Learning by doing<span className="accent">.</span>
        </span>
      }
    >
      <a
        href="/Rangel,%20Marcus%20Neo%20-%20Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-link"
      >
        View full résumé <ArrowUpRight size={16} />
      </a>
    </SectionHeading>
    <details className="experience-card" open>
      <summary>
        <span className="experience-icon">
          <BriefcaseBusiness size={24} />
        </span>
        <span className="experience-role">
          <span className="eyebrow">HIGHLY SUCCEED INC.</span>
          <span className="experience-title">Web Developer Intern</span>
        </span>
        <span className="experience-meta">
          <span>Jan — Apr 2026</span>
          <span className="mono">INTERNSHIP</span>
        </span>
        <ChevronDown className="experience-chevron" size={20} />
      </summary>
      <div className="experience-body">
        <p>
          Helped turn the Human Resource Information System into a modern,
          full-stack web application — improving its architecture, data flow,
          and overall performance.
        </p>
        <ul>
          <li>
            Led development of the HRIS with React, Node.js, and PostgreSQL.
          </li>
          <li>
            Contributed to an Alumni Website and collaborated on its
            development.
          </li>
          <li>
            Performed quality assurance testing for functionality and user
            experience.
          </li>
        </ul>
        <div className="tech-tags">
          {["React", "Node.js", "PostgreSQL", "Tailwind CSS"].map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </details>
  </section>
);
