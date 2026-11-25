import { Award, Download } from "lucide-react";
import { SectionHeading } from "../SectionHeading.jsx";

export const About = () => (
  <section
    id="about"
    className="section about-section"
    aria-labelledby="about-heading"
  >
    <div className="container">
      <SectionHeading
        label="BACKGROUND"
        title={<span id="about-heading">A bit about me</span>}
      />
      <div className="about-grid">
        <div className="about-copy">
          <p>
            I’m Marcus Neo, a developer based in the Philippines. I studied
            Information Technology at De La Salle Lipa, where I worked on BusGo,
            a public transportation system for BATRASCO.
          </p>
          <p>
            My work spans mobile apps, full-stack web systems, and native
            Windows software. I like working across the interface and the
            backend—figuring out how the parts fit together, then testing them
            as a whole.
          </p>
        </div>
        <aside className="education-note" aria-label="Education">
          <p className="eyebrow">EDUCATION · 2022–2026</p>
          <h3>BS Information Technology</h3>
          <p>De La Salle Lipa</p>
          <div className="education-award">
            <Award size={19} />
            <span>
              Best Thesis in
              <br />
              System Development
            </span>
          </div>
        </aside>
      </div>
    </div>
  </section>
);
