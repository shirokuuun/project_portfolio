import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../context/theme.js";

const links = [
  { id: "projects", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen, setMenuOpen]);
  return (
    <header className="site-header">
      <div className="nav-inner container">
        <a href="#home" className="brand" aria-label="Neo Rangel, home">
          <span className="brand-symbol" aria-hidden="true">
            n<span>r</span>
            <i />
          </span>
          <span className="brand-name">
            NEO RANGEL<span>FULL STACK DEVELOPER</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? "location" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a
            className="resume-link"
            href="/Rangel,%20Marcus%20Neo%20-%20Resume.pdf"
            download="Rangel, Marcus Neo - Resume.pdf"
          >
            Résumé <ArrowUpRight size={16} />
          </a>
          <button
            className="icon-button theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            id="menu-toggle"
            className="icon-button menu-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
};
