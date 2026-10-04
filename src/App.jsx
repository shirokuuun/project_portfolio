import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { MobileMenu } from "./components/MobileMenu.jsx";
import { HomePage } from "./components/sections/Home.jsx";
import { About } from "./components/sections/About.jsx";
import { Skills } from "./components/sections/Skills.jsx";
import { Projects } from "./components/sections/Projects.jsx";
import { Experience } from "./components/sections/Experience.jsx";
import { Contact } from "./components/sections/Contact.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <ThemeProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main id="main">
        <HomePage />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="site-footer container">
        <a className="wordmark" href="#home">
          neo<span>rangel.</span>
        </a>
        <p>Built with curiosity & a little too much coffee.</p>
        <a href="#home" className="back-top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
        <span className="footer-copyright">
          © {new Date().getFullYear()} Marcus Neo Rangel
        </span>
      </footer>
    </ThemeProvider>
  );
}
export default App;
