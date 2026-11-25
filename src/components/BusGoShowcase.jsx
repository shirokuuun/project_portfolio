import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import panorama from "../assets/projects/busgo-panorama.png";

const panels = [
  "Find a bus: BusGo live map and account registration",
  "Pick your route: pickup stops and ticketing services",
  "Scan, board, go: digital receipt and boarding QR ticket",
  "Plan ahead: bus reservations and passenger services",
  "Keep trips moving: conductor dashboard and welcome screen",
];

export const BusGoShowcase = () => {
  const track = useRef(null);

  const move = (direction) => {
    const element = track.current;
    const panel = element.firstElementChild;
    element.scrollBy({
      left: direction * panel.getBoundingClientRect().width,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  return (
    <section className="busgo-showcase" aria-label="BusGo connected app screenshots">
      <div
        className="busgo-showcase-track"
        ref={track}
        tabIndex={0}
        role="region"
        aria-label="BusGo screenshot gallery. Scroll horizontally to explore five panels."
      >
        {panels.map((description, index) => (
          <figure className="busgo-showcase-panel" key={description}>
            <img
              src={panorama}
              alt={description}
              width="2172"
              height="724"
              style={{ transform: `translateX(-${index * 20}%)` }}
            />
          </figure>
        ))}
      </div>
      <div className="busgo-showcase-controls">
        <button className="icon-button" type="button" onClick={() => move(-1)} aria-label="Previous BusGo screenshot">
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
        <button className="icon-button" type="button" onClick={() => move(1)} aria-label="Next BusGo screenshot">
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};
