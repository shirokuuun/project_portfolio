import { useState } from "react";
import { MessageSquare, Monitor, RotateCw, Settings } from "lucide-react";
import peakIcon from "../assets/peak-icon.ico";
import codexIcon from "../assets/peak/codex.png";
import claudeIcon from "../assets/peak/claude.png";
import "./PeakPreview.css";

const appearances = [
  { id: "notch", label: "Notch", description: "Attached to the screen edge." },
  {
    id: "island",
    label: "Dynamic Island",
    description: "Floating, with a little room to breathe.",
  },
];

const views = [
  {
    id: "limits",
    label: "Limits",
    description: "Remaining usage and reset times, at a glance.",
  },
  {
    id: "compact",
    label: "Compact",
    description: "Your usage stays visible while you work.",
  },
  {
    id: "tasks",
    label: "Tasks",
    description: "Local Codex activity and elapsed time.",
  },
  {
    id: "attention",
    label: "Attention",
    description: "Notice in Peak. Review and respond in Codex.",
  },
];

const usageWindows = [
  { label: "5-hour limit", reset: "Resets in 1h 16m", remaining: 91 },
  { label: "Weekly limit", reset: "Resets in 2d 1h", remaining: 74 },
];

const PeakBrand = () => (
  <div className="peak-brand">
    <img src={peakIcon} alt="" loading="lazy" width="34" height="34" />
    <span>
      Peak<small>YOUR AI WORKFLOW, AT A GLANCE.</small>
    </span>
  </div>
);

const PeakInterface = ({ appearance = "island", view = "limits" }) => {
  const isExpanded = view === "limits" || view === "tasks";
  const isAttention = view === "attention";

  return (
    <div
      className={`peak-device peak-device-${appearance} peak-device-${view}`}
      role="img"
      aria-label={`Sample Peak ${appearances.find((item) => item.id === appearance).label} interface in black. ${
        view === "limits"
          ? "Codex Plus: 91% of the 5-hour limit and 74% of the weekly limit remaining, with reset times."
          : view === "compact"
            ? "Compact summary with 91% Codex usage remaining."
            : view === "tasks"
              ? "Two sample Codex tasks: one working and one idle."
              : "A reported approval request to review in Codex."
      }`}
    >
      <div aria-hidden="true">
        <div className="peak-device-header">
          <span className="peak-device-provider">
            <span className="peak-provider-badge">
              <img src={codexIcon} alt="" width="20" height="20" />
            </span>
            <strong>91%</strong>
          </span>
          <span
            className={`peak-device-title ${isAttention ? "needs-attention" : ""}`}
          >
            <i />
            <span>{isAttention ? "Review requested" : "Peak"}</span>
          </span>
          <span className="peak-device-provider peak-provider-unavailable">
            <span>—</span>
            <span className="peak-provider-badge peak-provider-badge-claude">
              <img src={claudeIcon} alt="" width="14" height="14" />
            </span>
          </span>
        </div>
        {view === "limits" ? (
          <div className="peak-device-body">
            <div className="peak-device-heading">
              <strong>Codex limits</strong>
              <span>Plus</span>
            </div>
            <div className="peak-usage-card">
              {usageWindows.map((window) => (
                <div className="peak-usage-window" key={window.label}>
                  <strong>{window.label}</strong>
                  <div className="peak-usage-meta">
                    <span>{window.reset}</span>
                    <span>{window.remaining}% left</span>
                  </div>
                  <div className="peak-usage-track">
                    <span style={{ width: `${window.remaining}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : view === "tasks" ? (
          <div className="peak-device-body">
            <div className="peak-device-heading">
              <strong>Codex tasks</strong>
              <span>Sample activity</span>
            </div>
            <div className="peak-task-card">
              <strong>Build the portfolio interface</strong>
              <span>project_portfolio</span>
              <div>
                <span className="peak-task-working">
                  Working · editing files
                </span>
                <span>02:14</span>
              </div>
            </div>
            <div className="peak-task-card">
              <strong>Review the notch layout</strong>
              <span>notch</span>
              <div>
                <span>Finished / idle</span>
                <span>00:38</span>
              </div>
            </div>
          </div>
        ) : isAttention ? (
          <div className="peak-device-attention">
            <span>Approval requested · review in Codex</span>
            <span>02:14</span>
          </div>
        ) : null}
        {isExpanded ? (
          <div className="peak-device-footer">
            <div className="peak-footer-chats">
              <span>
                <MessageSquare />
                <strong>portfolio</strong>
                <small>{view === "tasks" ? "Working" : "Idle"}</small>
              </span>
              <span>
                <MessageSquare />
                <strong>notch</strong>
                <small>Idle</small>
              </span>
            </div>
            <span className="peak-footer-tools">
              <RotateCw />
              <span>{view === "tasks" ? "Limits" : "Tasks"}</span>
              <Settings />
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export const PeakPreview = ({ interactive = false }) => {
  const [appearanceId, setAppearanceId] = useState("island");
  const [viewId, setViewId] = useState("limits");
  const appearance = appearances.find((item) => item.id === appearanceId);
  const view = views.find((item) => item.id === viewId);

  if (!interactive) {
    return (
      <div className="peak-preview peak-preview-card">
        <PeakBrand />
        <div className="peak-card-stage">
          <PeakInterface />
        </div>
        <span className="peak-capture-note mono">
          NOTCH / DYNAMIC ISLAND · SAMPLE DATA
        </span>
      </div>
    );
  }

  return (
    <div className="peak-preview peak-preview-interactive">
      <div className="peak-showcase-header">
        <PeakBrand />
      </div>
      <div className="peak-showcase-intro">
        <span className="peak-platform mono">
          <Monitor size={12} aria-hidden="true" /> NATIVE WINDOWS APP
        </span>
        <h3>Small presence. Clear picture.</h3>
        <p>
          Your AI limits and Codex activity, in a notch or a dynamic island.
        </p>
      </div>
      <div className="peak-control-row">
        <span className="peak-control-label mono">APPEARANCE</span>
        <div
          className="peak-preview-controls peak-appearance-controls"
          role="group"
          aria-label="Peak appearance"
        >
          {appearances.map((item) => (
            <button
              type="button"
              key={item.id}
              aria-pressed={appearanceId === item.id}
              aria-controls="peak-interface-preview"
              className={appearanceId === item.id ? "is-active" : ""}
              onClick={() => setAppearanceId(item.id)}
            >
              <span
                className={`peak-shape-icon peak-shape-${item.id}`}
                aria-hidden="true"
              />
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="peak-control-row">
        <span className="peak-control-label mono">VIEW</span>
        <div
          className="peak-preview-controls"
          role="group"
          aria-label="Peak preview view"
        >
          {views.map((item) => (
            <button
              type="button"
              key={item.id}
              aria-pressed={viewId === item.id}
              aria-controls="peak-interface-preview"
              className={viewId === item.id ? "is-active" : ""}
              onClick={() => setViewId(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <figure className="peak-showcase-figure">
        <div
          className={`peak-capture-stage peak-appearance-${appearanceId}`}
          id="peak-interface-preview"
        >
          <PeakInterface appearance={appearanceId} view={viewId} />
          <span className="peak-screen-label mono">
            {appearance.label.toUpperCase()} / BLACK
          </span>
        </div>
        <figcaption aria-live="polite">
          {appearance.description} {view.description}
        </figcaption>
      </figure>
      <p className="peak-customization-note">
        Peak supports custom colors. This preview uses black.
      </p>
      <div className="peak-preview-bottom mono">
        <span>INTERACTIVE PREVIEW · SAMPLE DATA</span>
        <span>WINDOWS 10 / 11</span>
      </div>
    </div>
  );
};
