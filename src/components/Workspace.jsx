import { useRef, useState } from "react";
import { ArrowUpRight, Code2, Layers, Smartphone } from "lucide-react";

const modes = [
  {
    name: "Web",
    icon: Code2,
    title: "Interfaces with intention.",
    detail: "React · Tailwind CSS",
    command: "npm run dev",
    color: "#c3ed87",
  },
  {
    name: "Mobile",
    icon: Smartphone,
    title: "Good ideas. On the go.",
    detail: "Flutter · Dart · Firebase",
    command: "flutter run",
    color: "#87d8ed",
  },
  {
    name: "Backend",
    icon: Layers,
    title: "The thinking behind the screen.",
    detail: "Node.js · PostgreSQL",
    command: "node server.js",
    color: "#edb487",
  },
];

export const Workspace = () => {
  const [active, setActive] = useState(0);
  const sceneRef = useRef(null);
  const mode = modes[active];
  const moveScene = (event) => {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const rect = event.currentTarget.getBoundingClientRect();
    sceneRef.current.style.setProperty(
      "--scene-x",
      `${((event.clientX - rect.left) / rect.width - 0.5) * 5}deg`,
    );
    sceneRef.current.style.setProperty(
      "--scene-y",
      `${((event.clientY - rect.top) / rect.height - 0.5) * -5}deg`,
    );
  };
  const resetScene = () => {
    sceneRef.current.style.setProperty("--scene-x", "0deg");
    sceneRef.current.style.setProperty("--scene-y", "0deg");
  };
  return (
    <div
      className="workspace"
      style={{ "--workspace-accent": mode.color }}
      onPointerMove={moveScene}
      onPointerLeave={resetScene}
    >
      <div className="workspace-top mono">
        <span>
          <span className="status-dot" /> THE DEVELOPER’S CORNER
        </span>
        <span>NR_001</span>
      </div>
      <div className="scene-wrap" ref={sceneRef}>
        <svg
          className="desk-scene"
          viewBox="0 0 680 570"
          role="img"
          aria-labelledby="workspace-title workspace-description"
        >
          <title id="workspace-title">
            Neo’s interactive developer workspace
          </title>
          <desc id="workspace-description">
            An isometric desk with a glowing monitor, a mobile phone, a plant,
            coffee, and books. Choose Web, Mobile, or Backend below to change
            the monitor.
          </desc>
          <defs>
            <linearGradient id="floor" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#333933" />
              <stop offset="1" stopColor="#1e2421" />
            </linearGradient>
            <linearGradient id="wall" x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="#343b33" />
              <stop offset="1" stopColor="#252c26" />
            </linearGradient>
            <linearGradient id="desk-top" x1="0" y1="0" x2="0.8" y2="1">
              <stop stopColor="#d7b78b" />
              <stop offset="1" stopColor="#a88b67" />
            </linearGradient>
            <linearGradient id="monitor-body">
              <stop stopColor="#535956" />
              <stop offset="1" stopColor="#292f2c" />
            </linearGradient>
            <radialGradient id="scene-glow">
              <stop stopColor={mode.color} stopOpacity=".2" />
              <stop offset="1" stopColor={mode.color} stopOpacity="0" />
            </radialGradient>
            <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#b6d99b" stopOpacity=".3" />
              <stop offset="1" stopColor="#b6d99b" stopOpacity="0" />
            </linearGradient>
            <filter id="soft-shadow">
              <feGaussianBlur stdDeviation="12" />
            </filter>
          </defs>
          <ellipse
            cx="350"
            cy="360"
            rx="265"
            ry="190"
            fill="url(#scene-glow)"
          />
          <path
            d="M88 366 349 211 611 365 350 521Z"
            fill="url(#floor)"
            stroke="#485046"
          />
          <path d="M88 366V162L349 8V211Z" fill="url(#wall)" stroke="#434b40" />
          <path
            d="M349 8 611 160V365L349 211Z"
            fill="#222922"
            stroke="#384137"
          />
          <path
            d="M108 374 350 230 590 374M153 400 393 257M198 426 438 284M244 453 483 311M289 480 528 339M111 352 373 507M156 325 418 480M203 299 465 452M250 271 510 425M297 243 557 397"
            stroke="#818e79"
            strokeOpacity=".09"
          />
          <path
            d="M109 166 327 38V196L109 324Z"
            fill="#1c241e"
            stroke="#4b5749"
            strokeWidth="5"
          />
          <path d="M116 171 320 51V191L116 310Z" fill="url(#glass)" />
          <path
            d="M218 109V251M116 241 320 122"
            stroke="#4c5b48"
            strokeWidth="5"
          />
          <path
            d="M121 220 147 182 172 185 196 134 214 151 244 112 264 115 290 78 315 78V187L121 301Z"
            fill="#46573c"
            opacity=".5"
          />
          <path d="M369 67 557 176V185L369 77Z" fill="#8e7958" />
          <path
            d="M374 74V104L383 109V79M541 171V201L549 205V175"
            fill="#665b45"
          />
          <path d="M394 78V51L412 61V89Z" fill="#cd996e" />
          <path d="M416 91V62L424 66V96Z" fill="#8d9e7c" />
          <path d="M428 98V68L440 75V105Z" fill="#b6b49c" />
          <path d="M442 106V83L456 91V114Z" fill="#657b6a" />
          <path
            d="M497 133V96L532 116V154Z"
            fill="#cec7b2"
            stroke="#767c69"
            strokeWidth="3"
          />
          <path d="m505 131 7-12 12 15-5 7Z" fill="#769364" />
          <path
            d="M374 122 565 232V283L374 174Z"
            fill="#2d352b"
            stroke="#515b49"
          />
          <text
            x="392"
            y="-89"
            transform="skewY(30)"
            fill="#a1ae93"
            fontFamily="monospace"
            fontSize="12"
            letterSpacing="3"
          >
            MAKE GOOD THINGS.
          </text>
          <ellipse
            cx="355"
            cy="405"
            rx="169"
            ry="48"
            fill="#10150f"
            opacity=".6"
            filter="url(#soft-shadow)"
          />
          <path
            d="M165 327 189 341V424L165 411ZM485 338 503 329V412L485 423ZM311 408 332 420V495L311 483Z"
            fill="#5f5240"
          />
          <path
            d="M189 341 198 336V419L189 424ZM332 420 340 415V490L332 495Z"
            fill="#8e7857"
          />
          <path
            d="M148 310 326 207 523 321 345 426Z"
            fill="url(#desk-top)"
            stroke="#ddbf92"
          />
          <path d="M148 310V325L345 440V426Z" fill="#8e7454" />
          <path d="M345 426 523 321V336L345 440Z" fill="#b2946d" />
          <path
            d="M165 312 330 218M214 337 377 242M261 366 426 271M309 393 475 299"
            stroke="#e8c99f"
            strokeOpacity=".15"
          />
          <path d="M301 309 345 335 373 319 330 294Z" fill="#4c534d" />
          <path d="M327 265 341 273V315L327 307Z" fill="#626a61" />
          <path
            d="M232 158 397 252V342L232 247Z"
            fill="url(#monitor-body)"
            stroke="#697164"
            strokeWidth="2"
          />
          <path d="M239 169 389 256V328L239 241Z" fill="#101b16" />
          <path d="M244 174 384 256V271L244 190Z" fill="#253a2a" />
          <g transform="matrix(1,.577,0,1,248,189)">
            <circle cx="2" cy="-7" r="2" fill="#d59172" />
            <circle cx="10" cy="-7" r="2" fill="#dcc489" />
            <circle cx="18" cy="-7" r="2" fill="#9ac185" />
            <text
              x="0"
              y="13"
              fill={mode.color}
              fontSize="10"
              fontFamily="monospace"
            >
              &gt; {mode.command}
            </text>
            <text
              x="0"
              y="31"
              fill="#dfebd6"
              fontSize="9"
              fontFamily="monospace"
            >
              hello, world.
            </text>
            <rect
              x="0"
              y="41"
              width="68"
              height="3"
              rx="1"
              fill={mode.color}
              opacity=".55"
            />
            <rect x="0" y="49" width="95" height="3" rx="1" fill="#617860" />
            <rect x="0" y="57" width="50" height="3" rx="1" fill="#617860" />
            <rect
              className="terminal-cursor"
              x="103"
              y="8"
              width="5"
              height="9"
              fill={mode.color}
            />
          </g>
          <circle cx="315" cy="300" r="2" fill={mode.color} />
          <path
            d="M242 301 306 338 346 315 282 278Z"
            fill="#4c534a"
            stroke="#767b6b"
          />
          <path d="M249 301 306 334 338 315 282 283Z" fill="#bbc1aa" />
          <path
            d="m256 302 52 30m-42-35 51 30m-41-36 51 30m-42-36 51 30M265 312l29-17m-17 24 29-17m-16 24 29-17m-16 24 29-17"
            stroke="#626c5d"
            strokeWidth="1.8"
          />
          <path
            d="M349 334 372 347 391 336 368 323Z"
            fill="#c9cbb8"
            stroke="#757b68"
          />
          <g className={active === 1 ? "phone-active" : ""}>
            <path
              d="m438 259 30 17-4 53-30-18Z"
              fill="#343e36"
              stroke="#6b7a65"
              strokeWidth="2"
            />
            <path
              d="m442 266 21 12-3 42-21-12Z"
              fill={active === 1 ? mode.color : "#86a17a"}
            />
            <path
              d="m444 288 14 8m-15 0 11 6"
              stroke="#2b442e"
              strokeWidth="2"
            />
            <circle cx="451" cy="280" r="4" fill="#33513b" />
          </g>
          <path d="m193 300 34 20 25-15-34-20Z" fill="#596c52" />
          <path d="m196 296 34 20 25-15-34-20Z" fill="#bbc2a4" />
          <path d="m203 296 27 16" stroke="#7c886a" />
          <path
            d="M409 350c17-9 30-1 27 6l-4 27c-5 8-24 8-29-1l-4-25Z"
            fill="#d6ccad"
          />
          <ellipse cx="417" cy="353" rx="18" ry="9" fill="#e6dec5" />
          <ellipse cx="417" cy="354" rx="13" ry="6" fill="#4c3a25" />
          <path
            d="M434 360c18-5 19 20-2 16"
            fill="none"
            stroke="#c2b797"
            strokeWidth="6"
          />
          <path
            className="coffee-steam"
            d="M414 338c-9-10 8-12 0-24m9 26c-8-10 9-13 1-24"
            stroke="#dddec5"
            opacity=".35"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <ellipse
            cx="536"
            cy="404"
            rx="32"
            ry="15"
            fill="#141b13"
            opacity=".35"
          />
          <path d="M512 346h43l-6 48c-2 9-29 9-32 0Z" fill="#b88968" />
          <ellipse cx="533" cy="346" rx="22" ry="11" fill="#d1a384" />
          <ellipse cx="533" cy="346" rx="17" ry="7" fill="#4b4632" />
          <path
            d="M533 345v-82m0 44 20-28m-20 42-21-28"
            stroke="#819964"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M531 292c-33-1-45-31-29-41 24 3 32 19 29 41Z"
            fill="#7e9b65"
          />
          <path
            d="M535 284c-9-30 9-48 21-46 16 25-3 42-21 46Z"
            fill="#a0b985"
          />
          <path
            d="M535 312c8-33 34-35 42-21-6 23-22 27-42 21Z"
            fill="#698955"
          />
          <path
            d="M531 324c-28 3-43-16-37-30 25-3 32 12 37 30Z"
            fill="#8fa772"
          />
          <g className="floating-code">
            <path
              d="m162 205 48 27v34l-48-27Z"
              fill="#19251b"
              stroke="#647957"
            />
            <text
              x="173"
              y="109"
              transform="skewY(30)"
              fill={mode.color}
              fontFamily="monospace"
              fontSize="18"
            >
              &lt;/&gt;
            </text>
          </g>
        </svg>
      </div>
      <div className="workspace-caption">
        <div>
          <span className="mono">A SPACE FOR MAKING THINGS</span>
          <p aria-live="polite">{mode.title}</p>
        </div>
        <ArrowUpRight size={22} aria-hidden="true" />
      </div>
      <div
        className="workspace-controls"
        role="group"
        aria-label="Explore development specialties"
      >
        {modes.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              className={index === active ? "is-active" : ""}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
            >
              <Icon size={15} />
              <span>{item.name}</span>
              <span className="mode-number mono">0{index + 1}</span>
            </button>
          );
        })}
      </div>
      <p className="workspace-hint mono">
        {mode.detail} <span>↑ PICK A SPECIALTY</span>
      </p>
    </div>
  );
};
