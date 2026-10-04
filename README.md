# Neo Rangel — Portfolio

A responsive React portfolio built with Vite. The remodel combines an editorial layout with a custom, interactive isometric developer workspace, project previews, and dark and light themes.

## Preview locally

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 5173
```

Open [localhost:5173](http://localhost:5173). Review this version before pushing changes or triggering a Vercel deployment.

```sh
npm run lint
npm run build
```

## Editing content

- `src/data/projects.js`: project descriptions, technologies, previews, and live links.
- `src/components/sections/`: biography, education, toolkit, experience, and contact details.
- `src/components/Workspace.jsx`: the original SVG workspace illustration and specialty controls.
- `src/components/PeakPreview.jsx`: Peak's illustrated Windows interface with interactive compact, limits, and task views. All readings and tasks are labeled sample data, based on the app's local demo mode.
- `src/index.css`: responsive layout, color themes, typography, and reduced-motion support.
- `public/Rangel, Marcus Neo - Resume.pdf`: the downloadable résumé.

The HRIS preview image was captured from the existing public project. Other previews and the portrait use the existing portfolio assets. Fonts come from Google Fonts; icons use Lucide.

Peak's project description and build walkthrough were checked against its C#/.NET 10 and WPF source. Its app icon comes from the original project. The portfolio showcases the desktop app without bundling its Windows executable or connecting to providers. The social media backend project has been replaced by Peak, with a Desktop project filter.

The public résumé was replaced with the user's supplied PDF, preserving its original bytes. The header and About links download that file; Experience opens the same updated PDF for viewing.

## Contact form

The form retains the existing EmailJS integration and supports validation, a sending state, inline success and failure messages, and retrying without losing the message. The EmailJS client loads only when the form is submitted.

The original public configuration remains the default. It can optionally be overridden in an ignored `.env` file:

```dotenv
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

These are browser-facing EmailJS identifiers. Never add private keys to `VITE_` variables. Keep the template's `name`, `email`, and `message` field names aligned with the form.

Form success and failure behavior was checked locally using simulated responses; no test email was sent. Actual email delivery should be verified during review.

## Local verification

- Production build and lint checks.
- Layouts at 320, 390, 768, 1280, and 1440 pixels, with no horizontal page overflow.
- Project filters, native project dialogs, Escape dismissal, and focus restoration.
- Workspace specialty controls, theme persistence, and mobile navigation.
- Required form fields, simulated success/reset, and failure/retry behavior.

No deployment or CI/CD changes are included in this local remodel.
