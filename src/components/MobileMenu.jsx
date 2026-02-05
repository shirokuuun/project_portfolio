import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <div
      className={`fixed inset-0 w-full h-screen bg-[rgba(10,10,10,0.98)] backdrop-blur-sm z-50 flex flex-col items-center justify-center 
        transition-all duration-300 ease-in-out ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl w-12 h-12 flex items-center justify-center hover:text-blue-400 transition-colors focus:outline-none z-50"
        aria-label="Close Menu"
      >
        ×
      </button>

      <nav className="flex flex-col items-center gap-8 px-4">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className={`text-3xl font-semibold text-white hover:text-blue-400 transition-all duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionDelay: menuOpen ? "0.1s" : "0s" }}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className={`text-3xl font-semibold text-white hover:text-blue-400 transition-all duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionDelay: menuOpen ? "0.2s" : "0s" }}
        >
          About
        </a>
        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className={`text-3xl font-semibold text-white hover:text-blue-400 transition-all duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionDelay: menuOpen ? "0.3s" : "0s" }}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className={`text-3xl font-semibold text-white hover:text-blue-400 transition-all duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionDelay: menuOpen ? "0.4s" : "0s" }}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
