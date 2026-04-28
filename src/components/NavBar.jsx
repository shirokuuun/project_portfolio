import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import { Sun, Moon } from "lucide-react";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav
      className="fixed top-0 w-full backdrop-blur-md z-40 border-b transition-colors duration-300"
      style={{
        backgroundColor: "var(--nav-bg)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-xl font-bold transition-colors duration-300"
            style={{ color: "var(--text-primary)" }}
          >
            Neo <span className="text-blue-500">Rangel</span>
          </a>

          {/* Mobile: hamburger + theme toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:border-blue-500/40"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
                backgroundColor: "var(--bg-card)",
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <div
              className={`w-7 h-5 relative cursor-pointer z-40 transition-opacity duration-300 ${
                menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              style={{ color: "var(--text-primary)" }}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-7">
            {[
              "home",
              "about",
              "skills",
              "projects",
              "experience",
              "contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-sm font-medium capitalize transition-colors duration-200 hover:text-blue-400"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:border-blue-500/40 hover:text-blue-400"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
                backgroundColor: "var(--bg-card)",
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
