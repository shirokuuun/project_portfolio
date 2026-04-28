import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-start justify-center py-24 px-6"
    >
      <RevealOnScroll>
        <div className="max-w-6xl w-full mx-auto">
          {/* Editorial heading */}
          <h2
            className="text-6xl md:text-8xl font-black mb-16 tracking-tight leading-none"
            style={{ color: "var(--text-primary)" }}
          >
            About Me.
          </h2>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: bio text */}
            <div className="space-y-6">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Ever since growing up, I've been fascinated by technology and
                how it can be used to solve real-world problems. This passion
                led me to pursue a degree in Information Technology, where I
                honed my skills in web development and software engineering.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                There's just this subtle feeling of satisfaction that comes with
                seeing a project come to life, and the drive to create something
                impactful that I can share with the world is what keeps me
                motivated.
              </p>

              {/* Education card */}
              <div
                className="mt-8 rounded-2xl p-6 border transition-all duration-200"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border)",
                }}
              >
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  Education
                </p>
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  BS Information Technology
                </h3>
                <p className="text-blue-400 font-medium text-sm mb-1">
                  De La Salle Lipa
                </p>
                <p
                  className="text-sm font-mono"
                  style={{ color: "var(--text-muted)" }}
                >
                  2022 – 2026
                </p>
                <p
                  className="text-sm mt-3 leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Relevant Coursework: Web Development, Mobile App Development,
                  UI/UX Design, Data Structures & Algorithms
                </p>
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/20 text-blue-400 bg-blue-500/5">
                  Best Thesis in System Development
                </div>
              </div>
            </div>

            {/* Right: quick facts / stats */}
            <div className="space-y-4">
              {[
                { label: "Degree", value: "BS Information Technology" },
                { label: "School", value: "De La Salle Lipa" },
                { label: "Specialization", value: "Web & Mobile Development" },
                { label: "Status", value: "Open to Opportunities" },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="flex justify-between items-center py-4 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="text-sm font-medium tracking-wide"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {fact.label}
                  </span>
                  <span
                    className="text-sm font-semibold text-right"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
