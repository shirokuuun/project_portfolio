import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll.jsx";
import emailJS from "emailjs-com";

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
      .then((result) => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("An error occurred, please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="w-full max-w-md md:max-w-3xl lg:max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get in touch
          </h2>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 
                text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                id="name"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 
                text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 
                text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 resize-none"
                placeholder="Send a message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
