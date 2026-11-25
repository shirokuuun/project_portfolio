import { projectContent } from "./projectContent.js";
import busPreview from "../assets/projects/busgo-panorama.png";
import busLanding from "../assets/bgoLanding.png";
import hrisPreview from "../assets/hris-preview.png";
import peakPreview from "../assets/projects/peak-preview.png";

const assets = {
  busgo: { image: busPreview, landing: busLanding, imageAlt: "BusGo connected screenshots showing maps, tickets, reservations, and conductor tools" },
  hris: { image: hrisPreview, imageAlt: "Human Resource Information System employee portal" },
  peak: { image: peakPreview, imageAlt: "Peak for Windows website: Stay in the work, with the workspace and usage overlay" },
};

export const projects = projectContent.map((project) => ({
  ...project,
  ...assets[project.id],
}));
