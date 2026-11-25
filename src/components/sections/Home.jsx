import { Github, Linkedin } from "lucide-react";
import { site } from "../../data/site.js";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const githubProfile = site.profiles.find((profile) =>
  profile.startsWith("https://github.com/"),
);
const githubUsername = new URL(githubProfile).pathname
  .split("/")
  .filter(Boolean)[0];

function GitHubContributions() {
  const [unavailable, setUnavailable] = useState(false);

  return (
    <a
      className="github-contributions"
      href={githubProfile}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${githubUsername}'s contributions on GitHub (opens in a new tab)`}
    >
      <span className="contributions-heading">
        <span>GitHub</span>
        <span className="contributions-profile">
          @{githubUsername}
          <ArrowUpRight size={15} aria-hidden="true" />
        </span>
      </span>
      {unavailable ? (
        <span className="contributions-fallback">
          View my latest activity on GitHub{" "}
          <ArrowUpRight size={16} aria-hidden="true" />
        </span>
      ) : (
        <span className="contributions-chart">
          <img
            src={`https://ghchart.rshah.org/262626/${githubUsername}`}
            alt={`GitHub contribution calendar for ${githubUsername} over the past year`}
            width="663"
            height="104"
            loading="lazy"
            decoding="async"
            onError={() => setUnavailable(true)}
          />
        </span>
      )}
    </a>
  );
}

export const HomePage = () => (
  <section id="home" className="intro container" aria-labelledby="hero-title">
    <div className="intro-copy">
      <p className="eyebrow">Full Stack Developer</p>
      <h1 id="hero-title">
        Neo
        <br />
        Rangel
      </h1>
      <p className="intro-description">
        I build cool stuff from a bus tracking system to the small tools I want
        on my own computer. Give me problems and I'll solve it for you.
      </p>
      <div className="intro-links">
        <a href="#projects" className="button button-primary">
          View selected work
        </a>
        <a href="#contact" className="text-link">
          Get in touch
        </a>
      </div>
    </div>
    <figure className="intro-portrait">
      <img
        src={site.image}
        alt={site.name}
        width="500"
        height="500"
        fetchPriority="high"
      />
      <figcaption>
        <span>Based in the Philippines</span>
        <span>Open to opportunities</span>
      </figcaption>
    </figure>
    <div className="intro-bottom">
      <GitHubContributions />
      <div className="intro-socials">
        <a href={site.profiles[0]} target="_blank" rel="noopener noreferrer">
          <Github size={16} />
          GitHub
        </a>
        <a href={site.profiles[1]} target="_blank" rel="noopener noreferrer">
          <Linkedin size={16} />
          LinkedIn
        </a>
      </div>
    </div>
  </section>
);
