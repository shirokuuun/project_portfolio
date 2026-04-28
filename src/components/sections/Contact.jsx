import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll.jsx";
import emailJS from "emailjs-com";
import { Linkedin, Github, Mail } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_5ak5yep";
  const TEMPLATE_ID = "template_2yiragf";
  const PUBLIC_KEY = "uj2hyfVO5k5qougFH";

  const handleSubmit = (e) => {
    e.preventDefault();
    emailJS
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("An error occurred, please try again."));
  };

  const inputStyle = {
    width: "100%",
    backgroundColor: "var(--bg-card)",
    border: "1px solid var(--border)",
    borderRadius: "0.75rem",
    padding: "1rem 1.25rem",
    color: "var(--text-primary)",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s, background-color 0.2s",
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = "rgba(59,130,246,0.5)";
    e.target.style.backgroundColor = "rgba(59,130,246,0.04)";
  };
  const handleBlur = (e) => {
    e.target.style.borderColor = "var(--border)";
    e.target.style.backgroundColor = "var(--bg-card)";
  };

  const socials = [
    {
      icon: <Linkedin size={18} />,
      label: "linkedin.com/in/marcusneorangel",
      href: "https://www.linkedin.com/in/marcusneorangel/",
    },
    {
      icon: <Github size={18} />,
      label: "github.com/shirokuuun",
      href: "https://github.com/shirokuuun",
    },
    {
      icon: <Mail size={18} />,
      label: "marcusneorangel21@gmail.com",
      href: "mailto:marcusneorangel21@gmail.com",
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-24 px-6">
      <RevealOnScroll>
        <div className="max-w-6xl w-full mx-auto">
          <h2
            className="text-6xl md:text-8xl font-black mb-6 tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Get In Touch.
          </h2>
          <p
            className="text-base mb-16 max-w-xl"
            style={{ color: "var(--text-muted)" }}
          >
            Open to opportunities, collaborations, or just a good conversation.
            Reach out through the form or find me on any of the links below.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                placeholder="Your name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{ ...inputStyle, display: "block" }}
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                placeholder="your@email.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{ ...inputStyle, display: "block" }}
              />
              <textarea
                name="message"
                required
                rows={6}
                value={formData.message}
                placeholder="Your message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{ ...inputStyle, display: "block", resize: "none" }}
              />
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl font-semibold text-sm text-white bg-blue-500
                  hover:bg-blue-400 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]
                  transition-all duration-200"
              >
                Send Message →
              </button>
            </form>

            {/* Socials */}
            <div className="flex flex-col justify-center gap-2">
              {socials.map((s, i) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group py-6 transition-all"
                  style={{
                    borderBottom:
                      i < socials.length - 1
                        ? "1px solid var(--border)"
                        : "none",
                  }}
                >
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 group-hover:text-blue-400"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      color: "var(--text-muted)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(59,130,246,0.15)";
                      e.currentTarget.style.borderColor =
                        "rgba(59,130,246,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--bg-card)";
                      e.currentTarget.style.borderColor = "var(--border)";
                    }}
                  >
                    {s.icon}
                  </span>
                  <span
                    className="font-mono text-sm group-hover:text-blue-400 transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {s.label}
                  </span>
                  <span
                    className="ml-auto group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                    style={{ color: "var(--text-muted)" }}
                  >
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
