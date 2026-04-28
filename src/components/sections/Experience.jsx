import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll.jsx";

const experiences = [
  {
    id: 1,
    role: "Web Developer Intern",
    company: "Highly Succeed Inc.",
    period: "Jan 2026 – Apr 2026",
    type: "Internship",
    description:
      "Led the development of the Human Resource Information System (HRIS) into a modern, full-stack web application, improving system architecture, optimizing data flow, and enhancing overall performance. Assisted in developing an Alumni Website and performed quality assurance testing to ensure functionality and user experience.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
];

export const Experience = () => {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="experience"
      className="min-h-screen flex items-start justify-center py-24 px-6"
    >
      <RevealOnScroll>
        <div className="max-w-6xl w-full mx-auto">
          <h2
            className="text-6xl md:text-8xl font-black mb-20 tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Experiences.
          </h2>

          <div className="space-y-2">
            {experiences.map((exp) => {
              const isOpen = openId === exp.id;
              return (
                <div
                  key={exp.id}
                  className="rounded-2xl transition-all duration-300 overflow-hidden"
                  style={{
                    border: `1px solid ${isOpen ? "rgba(59,130,246,0.3)" : "var(--border)"}`,
                    backgroundColor: isOpen
                      ? "rgba(59,130,246,0.04)"
                      : "var(--bg-card)",
                  }}
                >
                  <button
                    onClick={() => toggle(exp.id)}
                    className="w-full flex items-start md:items-center gap-4 p-6 md:p-8 text-left group"
                  >
                    <span
                      className="mt-1 md:mt-0 w-3 h-3 rounded-full border-2 shrink-0 transition-colors duration-200"
                      style={{
                        borderColor: isOpen ? "#60a5fa" : "var(--text-muted)",
                        backgroundColor: isOpen ? "#60a5fa" : "transparent",
                      }}
                    />

                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-lg md:text-xl font-bold transition-colors group-hover:text-blue-400"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {exp.role}
                      </h3>
                      <p className="text-blue-400 font-medium text-sm mt-0.5">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-3 mt-2 items-center">
                        <span
                          className="text-xs font-mono"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {exp.period}
                        </span>
                        <span
                          className="text-xs px-2.5 py-0.5 rounded-full border font-medium"
                          style={{
                            borderColor: "var(--border)",
                            color: "var(--text-secondary)",
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`text-xl shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      style={{ color: "var(--text-muted)" }}
                    >
                      ⌄
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="px-8 pb-8 pl-[4.5rem]">
                      <p
                        className="text-sm leading-relaxed mb-5"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{
                              backgroundColor: "var(--bg-card-hover)",
                              border: "1px solid var(--border)",
                              color: "var(--text-secondary)",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
