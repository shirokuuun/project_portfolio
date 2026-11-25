import { Cloud, Database, Layers3, Wrench } from "lucide-react";
import { SectionHeading } from "../SectionHeading.jsx";

const categories = [
  {
    label: "Frontend",
    icon: Layers3,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Dart",
      "Flutter",
      "WPF",
    ],
  },
  {
    label: "Backend",
    icon: Database,
    skills: ["Node.js", "PHP", "C#", ".NET", "SQL", "PostgreSQL", "MySQL"],
  },
  {
    label: "Cloud",
    icon: Cloud,
    skills: ["Firebase"],
  },
  { label: "Developer tools", icon: Wrench, skills: ["Git", "Figma"] },
];

export const Skills = () => (
  <section
    id="skills"
    className="section skills-section container"
    aria-labelledby="skills-heading"
  >
    <SectionHeading
      label="MY TOOLKIT"
      title={<span id="skills-heading">What I work with</span>}
    />
    <div className="skills-grid">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <div className="skill-category" key={category.label}>
            <div className="skill-category-top">
              <Icon size={22} />
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
