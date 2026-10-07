import busPreview from "../assets/portfolioIMG.jpg";
import busLanding from "../assets/bgoLanding.png";
import hrisPreview from "../assets/hris-preview.png";

export const projects = [
  {
    id: "busgo",
    number: "01",
    title: "BusGo",
    category: "MOBILE APPLICATION",
    type: "Mobile",
    summary: "A smarter way to get from here to there.",
    description:
      "A smart public transportation system developed for BATRASCO. Built with Flutter, Google Maps API, and Firebase, BusGo brings real-time bus tracking, digital pre-ticketing, and public and private reservations into one app.",
    features: [
      "Real-time bus locations with Google Maps",
      "Digital pre-ticketing and seat availability",
      "Public and private bus reservations",
    ],
    tech: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    image: busPreview,
    landing: busLanding,
    liveLink: null,
  },
  {
    id: "hris",
    number: "02",
    title: "Human Resource IS",
    fullTitle: "Human Resource Information System",
    category: "FULL STACK APPLICATION",
    type: "Web",
    summary: "Less paperwork. More room for people.",
    description:
      "A full-stack HR information system that centralizes employee records and automates HR processes. A React interface connects to Node.js services and PostgreSQL through RESTful APIs for efficient record management and data tracking.",
    features: [
      "Centralized employee record management",
      "Dynamic interfaces built with React",
      "RESTful services backed by PostgreSQL",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: hrisPreview,
    liveLink: "https://hsi-mini-project.vercel.app/",
  },
  {
    id: "peak",
    number: "03",
    title: "Peak",
    category: "WINDOWS DESKTOP APPLICATION",
    type: "Desktop",
    summary: "Your AI workflow, at a glance.",
    description:
      "A lightweight Windows overlay that brings AI subscription usage and Codex task activity into one expandable island. Peak makes remaining usage, reset times, active chats, and requests for review easy to check without leaving your work. Built as a native desktop app, it keeps its settings and observations on your computer.",
    features: [
      "Codex and Claude usage windows with remaining percentages and reset times",
      "Codex task activity, elapsed time, and reported review requests",
      "An expandable island with hover, pinning, a tray menu, and a recovery shortcut",
      "Dark, light, system, and custom color themes",
      "Local settings and sanitized observations, with no app database or remote backend",
    ],
    tech: ["C#", ".NET 10", "WPF", "XAML", "Windows APIs"],
    preview: "peak",
    platform: "Windows 10 / 11 · x64",
    build: {
      intro:
        "Built around a simple idea: useful information should be available without taking over the screen. The app separates its interface, provider integrations, usage rules, and Windows services so each part can evolve independently.",
      steps: [
        {
          title: "A native interface",
          text: "WPF and XAML render the transparent, always-on-top island. View models drive the limits and task views, while animated size changes, DPI-aware positioning, and monitor selection make it feel at home on Windows.",
        },
        {
          title: "Provider-specific adapters",
          text: "A C# client reads Codex through its app-server interface over standard input and output. A separate Claude status-line bridge writes sanitized local snapshots, which a file watcher and periodic refresh bring into the app.",
        },
        {
          title: "A shared rules layer",
          text: "Provider-neutral models normalize usage windows, reset timestamps, and freshness. Task events track lifecycle changes and reported review requests. Missing or stale readings stay explicitly unknown rather than being presented as zero usage.",
        },
        {
          title: "Windows integration & packaging",
          text: "Dedicated platform services handle the system tray, global hotkey, startup preferences, and local persistence. A self-contained Windows x64 build includes the .NET runtime, so users can run the published app without installing it separately.",
        },
      ],
      flow: ["Provider adapters", "Usage & task rules", "WPF island"],
      note: "Codex supplies task activity. Claude integration currently supplies usage readings; Claude task and approval monitoring are not implemented.",
    },
    liveLink: "https://peakforwindows.vercel.app",
  },
];
