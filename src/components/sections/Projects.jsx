import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll.jsx";
import projIMG from "../../assets/portfolioIMG.jpg";
import progIMG2 from "../../assets/socialMediaApp.jpg";

const projects = [
  {
    id: 1,
    category: "mobile · transport",
    title: "BusGo",
    tagline: "Smart. Real-time. Reliable.",
    description:
      "A Flutter-based smart public transportation system developed for BATRASCO that integrates real-time bus tracking, digital pre-ticketing, and public/private reservations. Using Google Maps API and Firebase, the app allows commuters to monitor bus locations, check seat availability, and plan trips efficiently.",
    tech: ["Flutter", "Dart", "Firebase", "Google Maps API", "Git"],
    image: projIMG,
    liveLink: "",
    featured: true,
  },
  {
    id: 2,
    category: "backend · api",
    title: "Social Media App Backend",
    tagline: "RESTful. Scalable. Secure.",
    description:
      "A Node.js and JavaScript-based backend system designed to support core social media functionalities such as user authentication, post management, comments, and media handling. Built using RESTful APIs with secure data processing and scalable server-side logic.",
    tech: ["JavaScript", "Node.js", "Git"],
    image: progIMG2,
    liveLink: "",
    featured: false,
  },
  {
    id: 3,
    category: "fullstack · hr",
    title: "Human Resource Information System",
    tagline: "Automated. Centralized. Efficient.",
    description:
      "A full-stack HRIS using React.js, Node.js, and PostgreSQL to automate and centralize HR processes, including employee record management and data tracking. Features dynamic user interfaces and scalable backend services with efficient data flow through RESTful APIs.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: null,
    liveLink: "https://hsi-mini-project.vercel.app",
    featured: false,
  },
];

const Modal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative z-10 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border"
        style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {project.image && (
          <div className="w-full h-56 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        )}
        <div className="p-8">
          <p
            className="text-xs tracking-widest uppercase mb-2"
            style={{ color: "var(--text-muted)" }}
          >
            {project.category}
          </p>
          <h3
            className="text-3xl font-black mb-1"
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </h3>
          <p className="text-blue-400 font-medium italic mb-5">
            {project.tagline}
          </p>
          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border)",
                  color: "var(--text-secondary)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3 items-center">
            {project.liveLink ? (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-400 transition-colors"
              >
                Live Demo →
              </a>
            ) : (
              <span
                className="px-6 py-2.5 text-sm font-semibold rounded-lg border cursor-not-allowed"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border)",
                  color: "var(--text-muted)",
                }}
              >
                Demo coming soon
              </span>
            )}
            <button
              onClick={onClose}
              className="px-6 py-2.5 text-sm hover:text-blue-400 transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <>
      <section id="projects" className="min-h-screen py-24 px-6">
        <RevealOnScroll>
          <div className="max-w-6xl w-full mx-auto">
            <h2
              className="text-6xl md:text-8xl font-black mb-20 tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Selected Projects.
            </h2>
            <div className="space-y-3">
              {projects.map((project, i) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group flex flex-col md:flex-row md:items-center gap-4 p-6 md:p-8 rounded-2xl border cursor-pointer transition-all duration-300"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-hover)";
                    e.currentTarget.style.backgroundColor =
                      "var(--bg-card-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.backgroundColor = "var(--bg-card)";
                  }}
                >
                  <span
                    className="text-xs font-mono md:w-8 shrink-0"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-xs tracking-widest uppercase md:w-40 shrink-0"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.category}
                  </span>
                  <h3
                    className="text-xl md:text-2xl font-bold flex-1 group-hover:text-blue-400 transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="text-xs px-3 py-1 rounded-full border border-blue-500/30 text-blue-400 font-medium shrink-0">
                      ★ FEATURED
                    </span>
                  )}
                  <span
                    className="group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200 shrink-0 text-lg"
                    style={{ color: "var(--text-muted)" }}
                  >
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>
      <Modal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};
