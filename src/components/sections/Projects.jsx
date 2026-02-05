import projIMG from "../../assets/portfolioIMG.jpg";
import progIMG2 from "../../assets/socialMediaApp.jpg";
import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to bg-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <img
                src={projIMG}
                alt="Bus Go Project"
                className="mb-4 rounded-lg "
              />
              <h3 className="text-xl font-bold mb-2">Bus Go </h3>
              <p className="text-gray-400 mb-4">
                A Flutter-based smart public transportation system developed for
                BATRASCO that integrates real-time bus tracking, digital
                pre-ticketing, and public/private reservations. Using Google
                Maps API and Firebase, the app allows commuters to monitor bus
                locations, check seat availability, and plan trips efficiently.
                The project aimed to improve reliability, reduce waiting times,
                and modernize local public transport operations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Flutter", "Dart", "Firebase", "Git"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href=""
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <img
                src={progIMG2}
                alt="Social Media App Backend"
                className="mb-4 rounded-lg "
              />
              <h3 className="text-xl font-bold mb-2">
                Social Media App Backend
              </h3>
              <p className="text-gray-400 mb-4">
                A Node.js and JavaScript–based backend system designed to
                support core social media functionalities such as user
                authentication, post management, comments, and media handling.
                Built using RESTful APIs, the backend manages secure data
                processing, meaningfully structured endpoints, and scalable
                server-side logic.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "Node.JS", "Git"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href=""
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
