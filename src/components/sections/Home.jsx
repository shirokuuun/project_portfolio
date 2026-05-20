import { RevealOnScroll } from "../RevealOnScroll.jsx";
import { useState, useRef } from "react";
import profilePhoto from "../../assets/formal_image.jpg";

const TiltCard = ({ children }) => {
  const ref = useRef(null);
  const [transform, setTransform] = useState("");
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -15;
    const rotateY = ((x - cx) / cx) * 15;
    setTransform(
      `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
    );
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    );
    setGlare((g) => ({ ...g, opacity: 0 }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.1s ease-out",
        transformStyle: "preserve-3d",
        willChange: "transform",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "9999px",
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 60%)`,
          pointerEvents: "none",
          zIndex: 10,
          transition: "opacity 0.2s ease",
        }}
      />
      {children}
    </div>
  );
};

export const HomePage = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "var(--dot-color)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="25"
                cy="25"
                r="1"
                fill="var(--dot-color)"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* skip=true disables the skeleton effect on home — it's already visible on load */}
      <RevealOnScroll skip={true}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2
                  className="text-2xl md:text-3xl font-medium mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Hi There,
                </h2>
                <h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  I'm{" "}
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Marcus Neo
                  </span>
                </h1>
              </div>

              <p
                className="text-base md:text-lg max-w-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                I'm a web and mobile app developer specializing in creating
                dynamic and responsive web applications. My goal is to build
                solutions that offer both exceptional performance and an
                engaging user experience.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#projects"
                  className="bg-blue-500 text-white py-3 px-8 rounded-lg font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                  View Projects
                </a>
                <a
                  href="/Rangel, Marcus Neo - Resume.pdf"
                  download="Rangel, Marcus Neo - Resume.pdf"
                  className="border-2 border-blue-500/50 text-blue-500 py-3 px-8 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* 3D Tilt Photo Circle */}
            <div className="flex justify-center lg:justify-end">
              <TiltCard>
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center shadow-2xl shadow-blue-500/30">
                    <div className="w-60 h-60 md:w-76 md:h-76 lg:w-92 lg:h-92 rounded-full overflow-hidden border-4 border-white/10">
                      <img
                        src={profilePhoto}
                        alt="Marcus Neo"
                        className="w-full h-full object-cover object-[50%_10%]"
                      />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-cyan-400 opacity-60 animate-pulse" />
                  <div
                    className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-blue-500 opacity-60 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div
                    className="absolute top-1/4 -left-6 w-4 h-4 rounded-full bg-yellow-400 opacity-60 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
