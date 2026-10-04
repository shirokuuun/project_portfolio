import { Braces, Database, Layers3, Wrench } from "lucide-react";
import { SectionHeading } from "../SectionHeading.jsx";

const categories = [
  {
    label: "Languages",
    icon: Braces,
    skills: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Dart", "C#"],
  },
  {
    label: "Frameworks",
    icon: Layers3,
    skills: ["React", "Flutter", "Tailwind CSS", "Node.js", ".NET", "WPF"],
  },
  {
    label: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Firebase"],
  },
  { label: "Tools & design", icon: Wrench, skills: ["Git", "Figma"] },
];

export const Skills = () => (
  <section
    id="skills"
    className="section skills-section container"
    aria-labelledby="skills-heading"
  >
    <SectionHeading
      number="03"
      label="MY TOOLKIT"
      title={
        <span id="skills-heading">
          The tools behind the work<span className="accent">.</span>
        </span>
      }
    >
      <p>
        The stack changes.
        <br /> The drive to learn stays.
      </p>
    </SectionHeading>
    <div className="skills-grid">
      {categories.map((category, index) => {
        const Icon = category.icon;
        return (
          <div className="skill-category" key={category.label}>
            <div className="skill-category-top">
              <Icon size={22} />
              <span className="mono">0{index + 1}</span>
            </div>
            <h3>{category.label}</h3>
            <div className="skill-list">
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);
