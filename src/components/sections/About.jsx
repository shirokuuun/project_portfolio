import { ArrowDownToLine, ArrowUpRight, Award, MapPin } from "lucide-react";
import profilePhoto from "../../assets/formal.jpg";
import { SectionHeading } from "../SectionHeading.jsx";

export const About = () => (
  <section
    id="about"
    className="section about-section"
    aria-labelledby="about-heading"
  >
    <div className="container">
      <SectionHeading
        number="02"
        label="THE PERSON BEHIND THE PIXELS"
        title={
          <span id="about-heading">
            Hi, I’m Marcus Neo<span className="accent">.</span>
          </span>
        }
      >
        <span className="about-wave" aria-hidden="true">
          ↗
        </span>
      </SectionHeading>
      <div className="about-grid">
        <div className="profile-card">
          <div className="profile-photo">
            <img
              src={profilePhoto}
              alt="Marcus Neo Rangel"
              loading="lazy"
              width="500"
              height="500"
            />
            <span className="photo-mark mono">HI, I'M NEO.</span>
          </div>
          <div className="profile-caption">
            <span>
              Marcus Neo Rangel
              <small>
                <MapPin size={12} /> Philippines / UTC+8
              </small>
            </span>
            <span className="profile-spark" aria-hidden="true">
              ✳
            </span>
          </div>
        </div>
        <div className="about-copy">
          <h3>
            Curiosity got me here.
            <br />
            <span>Building keeps me going.</span>
          </h3>
          <p>
            I’ve always been fascinated by how technology can solve everyday
            problems. That curiosity led me to Information Technology — and to
            building web and mobile applications that turn an idea into
            something useful.
          </p>
          <p>
            My favorite part is watching the pieces come together: a thoughtful
            interface, a dependable backend, and an experience that feels right.
            There’s a quiet satisfaction in making something work, and a little
            more in sharing it with the world.
          </p>
          <div className="about-facts">
            <div>
              <span className="eyebrow">MY FOCUS</span>
              <span>Software Engineering</span>
            </div>
            <div>
              <span className="eyebrow">RIGHT NOW</span>
              <span>
                <span className="status-dot" /> Open to opportunities
              </span>
            </div>
          </div>
          <a
            className="text-link"
            href="/Rangel,%20Marcus%20Neo%20-%20Resume.pdf"
            download="Rangel, Marcus Neo - Resume.pdf"
          >
            A little more about me <ArrowDownToLine size={17} />
          </a>
        </div>
      </div>
      <div className="education-row">
        <div className="education-icon">
          <Award size={25} />
        </div>
        <div>
          <p className="eyebrow">EDUCATION / 2022 — 2026</p>
          <h3>BS Information Technology</h3>
          <p>De La Salle Lipa</p>
        </div>
        <span className="award-badge">
          <Award size={14} /> Best Thesis in System Development
        </span>
        <ArrowUpRight
          className="education-arrow"
          size={26}
          aria-hidden="true"
        />
      </div>
    </div>
  </section>
);
