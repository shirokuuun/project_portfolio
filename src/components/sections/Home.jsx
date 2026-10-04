import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
} from "lucide-react";
import { Workspace } from "../Workspace.jsx";

export const HomePage = () => (
  <>
    <section id="home" className="hero container" aria-labelledby="hero-title">
      <div className="hero-topline mono">
        <span>
          <span className="status-dot" /> OPEN TO OPPORTUNITIES
        </span>
        <span className="hero-location">
          BASED IN THE PHILIPPINES <span aria-hidden="true">↗</span>
        </span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="tiny-cross" aria-hidden="true">
              ✳
            </span>{" "}
            A LITTLE CODE. A LOT OF CURIOSITY.
          </p>
          <h1 id="hero-title">
            NEO
            <br />
            <span>
              RANGEL<span className="name-period">.</span>
            </span>
          </h1>
          <div className="hero-role">
            <span className="role-line" />
            <p>
              Full Stack Developer
              <br />
              <span>Turning ideas into things you can use.</span>
            </p>
          </div>
          <p className="hero-description">
            I build thoughtful digital experiences — from the interface you see
            to the systems that make it all work.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="button button-primary">
              Explore my work <ArrowDownRight size={18} />
            </a>
            <a href="#contact" className="text-link">
              Let’s talk <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="hero-socials">
            <a
              href="https://github.com/shirokuuun"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <Github size={17} /> GitHub <ArrowUpRight size={12} />
            </a>
            <a
              href="https://www.linkedin.com/in/marcusneorangel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={17} /> LinkedIn <ArrowUpRight size={12} />
            </a>
            <span className="mono">ALWAYS LEARNING, ALWAYS BUILDING.</span>
          </div>
        </div>
        <Workspace />
      </div>
      <div className="hero-bottom mono">
        <a href="#projects">
          <ArrowDown size={14} /> SCROLL TO EXPLORE
        </a>
        <span>PORTFOLIO / 2026</span>
      </div>
    </section>
    {/* <div className="capability-strip" aria-label="Development focus">
      <div className="container">
        <span>WEB DEVELOPMENT</span>
        <i aria-hidden="true">✳</i>
        <span>MOBILE APPLICATIONS</span>
        <i aria-hidden="true">✳</i>
        <span>BACKEND SYSTEMS</span>
        <i aria-hidden="true">✳</i>
        <span>THOUGHTFUL EXPERIENCES</span>
        <i aria-hidden="true">✳</i>
      </div>
    </div> */}
  </>
);
