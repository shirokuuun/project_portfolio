import { useState } from "react";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { MobileMenu } from "./components/MobileMenu.jsx";
import { HomePage } from "./components/sections/Home.jsx";
import { About } from "./components/sections/About.jsx";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}
      >
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <HomePage />
        <About />
      </div>
    </>
  );
}

export default App;
