import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { MobileMenu } from "./components/MobileMenu.jsx";
import { LoadingScreen } from "./components/LoadingScreen.jsx";
import { HomePage } from "./components/sections/Home.jsx";
import { About } from "./components/sections/About.jsx";
import { Skills } from "./components/sections/Skills.jsx";
import { Projects } from "./components/sections/Projects.jsx";
import { Experience } from "./components/sections/Experience.jsx";
import { Contact } from "./components/sections/Contact.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <ThemeProvider>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        style={{
          backgroundColor: "var(--bg)",
          minHeight: "100vh",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease, background-color 0.3s ease",
        }}
      >
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main>
          <HomePage />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
