import { useState } from "react";
import { Activity, Clock3, Layers, Settings2 } from "lucide-react";
import peakIcon from "../assets/peak-icon.ico";

const providers = [
  {
    name: "Codex",
    initials: "Co",
    className: "codex",
    windows: [
      { label: "5-hour", remaining: 10, reset: "Resets in 2h" },
      { label: "Weekly", remaining: 55, reset: "Resets in 4d" },
    ],
  },
  {
    name: "Claude",
    initials: "Cl",
    className: "claude",
    windows: [
      { label: "5-hour", remaining: 68, reset: "Resets in 2h" },
      { label: "Weekly", remaining: 32, reset: "Resets in 4d" },
    ],
  },
];

export const PeakPreview = ({ interactive = false }) => {
  const [view, setView] = useState("Limits");
  return (
    <div
      className={`peak-preview ${interactive ? "peak-preview-interactive" : "peak-preview-card"}`}
    >
      <div
        className="peak-desktop"
        aria-label="Illustrated Peak interface using sample usage and task data"
      >
        <div className="peak-desktop-grid" aria-hidden="true" />
        <div className="peak-desktop-brand">
          <img src={peakIcon} alt="" loading="lazy" width="34" height="34" />
          <span>
            Peak<small>LESS SWITCHING. MORE FOCUS.</small>
          </span>
        </div>
        <div
          className={`peak-island ${view === "Compact" ? "peak-island-compact" : ""}`}
        >
          <div className="peak-island-header">
            <span className="peak-ring-label">
              <i className="peak-provider-ring">Co</i>10%
            </span>
            <span className="peak-island-title">
              <i />
              {view === "Tasks" ? "Working · 2 chats" : "Peak"}
            </span>
            <span className="peak-ring-label">
              32%
              <i className="peak-provider-ring peak-provider-ring-claude">Cl</i>
            </span>
          </div>
          {view !== "Compact" ? (
            <div className="peak-island-content">
              {view === "Limits" ? (
                <div className="peak-providers">
                  {providers.map((provider) => (
                    <div
                      className={`peak-provider ${provider.className}`}
                      key={provider.name}
                    >
                      <div className="peak-provider-heading">
                        <span>{provider.name}</span>
                        <small>Sample data</small>
                      </div>
                      <div className="peak-usage-card">
                        {provider.windows.map((window) => (
                          <div className="peak-usage-window" key={window.label}>
                            <div>
                              <strong>{window.label}</strong>
                              <span>{window.remaining}% remaining</span>
                            </div>
                            <div className="peak-usage-track">
                              <i style={{ width: `${window.remaining}%` }} />
                            </div>
                            <small>
                              <Clock3 size={9} />
                              {window.reset}
                            </small>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="peak-sample-tasks">
                  <p>
                    <Activity size={12} /> Codex task activity
                  </p>
                  <div>
                    <span className="peak-task-dot" />
                    <span>
                      Build the desktop overlay<small>Working · C# / WPF</small>
                    </span>
                    <span>02:14</span>
                  </div>
                  <div>
                    <span className="peak-task-dot review" />
                    <span>
                      Review the interface<small>Review requested</small>
                    </span>
                    <span>00:38</span>
                  </div>
                </div>
              )}
              <div className="peak-island-footer">
                <span>
                  <Activity size={10} />
                  {view === "Limits" ? "2 sample tasks" : "Observed activity"}
                </span>
                <span>
                  {view === "Limits" ? "Tasks" : "Limits"}
                  <Settings2 size={10} />
                </span>
              </div>
            </div>
          ) : null}
        </div>
        <span className="peak-desktop-caption">
          {view === "Compact"
            ? "A quiet island. Always within reach."
            : view === "Tasks"
              ? "Know what needs your attention."
              : "Your usage. A little more visible."}
        </span>
        <div className="peak-desktop-taskbar" aria-hidden="true">
          <span className="peak-windows-mark">
            <i />
            <i />
            <i />
            <i />
          </span>
          <Layers size={12} />
          <span className="peak-taskbar-app">
            <img src={peakIcon} alt="" loading="lazy" width="15" height="15" />
          </span>
          <Activity size={12} />
          <span className="peak-taskbar-time">12:00</span>
        </div>
      </div>
      {interactive ? (
        <div className="peak-preview-bottom">
          <div
            className="peak-preview-controls"
            role="group"
            aria-label="Explore the Peak interface preview"
          >
            {["Compact", "Limits", "Tasks"].map((mode) => (
              <button
                key={mode}
                aria-pressed={view === mode}
                className={view === mode ? "is-active" : ""}
                onClick={() => setView(mode)}
              >
                {mode}
              </button>
            ))}
          </div>
          <p className="mono">ILLUSTRATED PREVIEW · SAMPLE DATA</p>
        </div>
      ) : (
        <span className="peak-sample-label mono">
          ILLUSTRATED PREVIEW · SAMPLE DATA
        </span>
      )}
    </div>
  );
};
