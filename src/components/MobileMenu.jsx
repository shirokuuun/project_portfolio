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

  const links = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  return (
    <div
      className={`fixed inset-0 w-full h-screen backdrop-blur-sm z-50 flex flex-col items-center justify-center 
        transition-all duration-300 ease-in-out ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      style={{ backgroundColor: "rgba(10,10,10,0.98)" }}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl w-12 h-12 flex items-center justify-center hover:text-blue-400 transition-colors focus:outline-none z-50"
        aria-label="Close Menu"
      >
        ×
      </button>

      <nav className="flex flex-col items-center gap-7 px-4">
        {links.map((item, i) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setMenuOpen(false)}
            className={`text-3xl font-semibold text-white hover:text-blue-400 transition-all duration-300 capitalize
              ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: menuOpen ? `${(i + 1) * 0.07}s` : "0s" }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </nav>
    </div>
  );
};
