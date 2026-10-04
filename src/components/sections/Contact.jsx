import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";

const email = "marcusneorangel21@gmail.com";

export const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    if (form.elements.website.value) return;
    setStatus("sending");
    try {
      const { default: emailJS } = await import("emailjs-com");
      await emailJS.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_5ak5yep",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_2yiragf",
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "uj2hyfVO5k5qougFH",
      );
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setCopyFailed(false);
    } catch {
      setCopied(false);
      setCopyFailed(true);
    }
  };
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <p className="eyebrow">
          <span className="section-number">05 /</span> YOUR IDEA COULD BE NEXT
        </p>
        <div className="contact-grid">
          <div className="contact-copy">
            <h2 id="contact-heading">
              Let’s make
              <br />
              something{" "}
              <span>
                good<span className="contact-period">.</span>
              </span>
            </h2>
            <p>
              A project, an opportunity, or just a hello.
              <br />
              I’d love to hear what you have in mind.
            </p>
            <div className="contact-email">
              <a href={`mailto:${email}`}>{email}</a>
              <button
                className="icon-button"
                onClick={copyEmail}
                aria-label={
                  copied ? "Copy email address again" : "Copy email address"
                }
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
            <span className="copy-status mono" aria-live="polite">
              {copied
                ? "EMAIL COPIED"
                : copyFailed
                  ? "PLEASE SELECT THE EMAIL ADDRESS TO COPY IT"
                  : "LET’S START A CONVERSATION"}
            </span>
            <div className="contact-socials">
              <a
                href="https://github.com/shirokuuun"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={17} /> GitHub <ArrowUpRight size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/marcusneorangel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            aria-busy={status === "sending"}
          >
            <div className="form-topline mono">
              <span>
                <Mail size={14} /> A NOTE TO NEO
              </span>
              <span>
                INBOX IS OPEN <span className="status-dot" />
              </span>
            </div>
            <div className="form-fields-row">
              <label htmlFor="contact-name">
                Your name
                <input
                  id="contact-name"
                  name="name"
                  placeholder="Alex, for example"
                  autoComplete="name"
                  maxLength={100}
                  required
                />
              </label>
              <label htmlFor="contact-email">
                Email address
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="alex@yourcompany.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                />
              </label>
            </div>
            <label htmlFor="contact-message">
              What’s on your mind?
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me a little about your idea…"
                rows={5}
                maxLength={5000}
                required
              />
            </label>
            <div className="form-honeypot" aria-hidden="true">
              <label>
                Website
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <button
              className="button button-primary"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending your message…" : "Send message"}
              <Send size={16} />
            </button>
            <p className={`form-status ${status}`} role="status">
              {status === "success"
                ? "Message sent. Thanks for reaching out!"
                : status === "error"
                  ? "Your message couldn’t be sent. Please try again or email me directly."
                  : "Have something in mind? Let’s talk it through."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
