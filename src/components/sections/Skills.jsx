import { RevealOnScroll } from "../RevealOnScroll.jsx";

const skillCategories = [
  {
    label: "LANGUAGES",
    skills: ["C++", "HTML", "CSS", "JavaScript", "SQL", "PHP", "Dart"],
  },
  {
    label: "FRAMEWORKS",
    skills: ["React", "Flutter"],
  },
  {
    label: "LIBRARIES & TOOLS",
    skills: ["Tailwind CSS", "Git", "Figma"],
  },
  {
    label: "DATABASES",
    skills: ["Firebase", "MySQL", "PostgreSQL"],
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-start justify-center py-24 px-6"
    >
      <RevealOnScroll>
        <div className="max-w-6xl w-full mx-auto">
          <h2
            className="text-6xl md:text-8xl font-black mb-20 tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Skills.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((cat) => (
              <div key={cat.label}>
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-5 pb-3"
                  style={{
                    color: "var(--text-muted)",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {cat.label}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-default hover:text-blue-400"
                      style={{
                        border: "1px solid var(--border)",
                        backgroundColor: "var(--bg-card)",
                        color: "var(--text-secondary)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(59,130,246,0.4)";
                        e.currentTarget.style.backgroundColor =
                          "rgba(59,130,246,0.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.backgroundColor =
                          "var(--bg-card)";
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
