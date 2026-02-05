import { RevealOnScroll } from "../RevealOnScroll.jsx";
import { Linkedin, Github, Mail, Instagram } from "lucide-react";

export const HomePage = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#1adbd8",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="25" cy="25" r="1" fill="#1adbd8" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-2">
                  Hi There,
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                  I'm{" "}
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Marcus Neo
                  </span>
                </h1>
              </div>

              <p className="text-gray-400 text-base md:text-lg max-w-xl">
                I'm a passionate web developer specializing in creating dynamic
                and responsive web applications. My goal is to build solutions
                that offer both exceptional performance and an engaging user
                experience.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#projects"
                  className="bg-blue-500 text-white py-3 px-8 rounded-lg font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="border-2 border-blue-500/50 text-blue-500 py-3 px-8 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
                >
                  Contact Me
                </a>
              </div>

              <div className="flex gap-4 pt-6">
                {[
                  {
                    icon: <Linkedin size={20} />,
                    href: "https://www.linkedin.com/in/marcusneorangel/",
                    label: "LinkedIn",
                  },
                  {
                    icon: <Github size={20} />,
                    href: "https://github.com/shirokuuun",
                    label: "GitHub",
                  },
                  {
                    icon: <Instagram size={20} />,
                    href: "https://www.instagram.com/_marcusneo/",
                    label: "Instagram",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-200 text-gray-400 hover:text-blue-400"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center shadow-2xl shadow-yellow-500/20">
                  <div className="w-56 h-56 md:w-72 md:h-72 lg:w-88 lg:h-88 rounded-full bg-gradient-to-br from-blue-500 to-cyan-300 flex items-center justify-center text-white text-6xl md:text-7xl font-bold"></div>
                </div>

                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-cyan-400 opacity-60 animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-blue-500 opacity-60 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute top-1/4 -left-6 w-4 h-4 rounded-full bg-yellow-400 opacity-60 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
