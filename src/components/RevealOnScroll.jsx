import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children, skip = false }) => {
  const ref = useRef(null);
  const doneRef = useRef(false);
  const wordsRef = useRef([]);

  useEffect(() => {
    const el = ref.current;
    if (!el || skip) return;

    const wrapWords = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        if (!node.textContent.trim()) return;
        const parts = node.textContent.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach((part) => {
          if (/^\s+$/.test(part) || part === "") {
            frag.appendChild(document.createTextNode(part));
          } else {
            const span = document.createElement("span");
            span.className = "wr-word wr-hidden";
            span.textContent = part;
            frag.appendChild(span);
          }
        });
        node.parentNode.replaceChild(frag, node);
      } else if (
        node.nodeType === Node.ELEMENT_NODE &&
        ![
          "SCRIPT",
          "STYLE",
          "IMG",
          "SVG",
          "BUTTON",
          "A",
          "INPUT",
          "TEXTAREA",
        ].includes(node.tagName)
      ) {
        Array.from(node.childNodes).forEach(wrapWords);
      }
    };

    wrapWords(el);
    wordsRef.current = Array.from(el.querySelectorAll(".wr-word"));

    if (wordsRef.current.length === 0) return;

    const revealWords = () => {
      if (doneRef.current) return;

      const words = wordsRef.current;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // Section is entirely above the viewport (scrolled past it)
      // OR section bottom is already visible — reveal all immediately
      if (rect.bottom <= 0 || rect.bottom <= vh) {
        words.forEach((w) => {
          w.classList.remove("wr-hidden");
          w.classList.add("wr-shown");
        });
        doneRef.current = true;
        window.removeEventListener("scroll", revealWords);
        return;
      }

      // Section hasn't entered view yet — keep all hidden
      if (rect.top >= vh) return;

      const revealStart = vh * 0.9;
      const revealEnd = vh * 0.1;
      const progressByTop =
        (revealStart - rect.top) / (revealStart - revealEnd);
      const progress = Math.min(1, Math.max(0, progressByTop));
      const toReveal = Math.floor(progress * words.length);

      words.forEach((w, i) => {
        if (i < toReveal) {
          if (!w.classList.contains("wr-shown")) {
            w.classList.remove("wr-hidden");
            w.classList.add("wr-shown");
          }
        } else {
          if (!doneRef.current) {
            w.classList.remove("wr-shown");
            w.classList.add("wr-hidden");
          }
        }
      });

      if (toReveal >= words.length) {
        doneRef.current = true;
        window.removeEventListener("scroll", revealWords);
      }
    };

    window.addEventListener("scroll", revealWords, { passive: true });

    setTimeout(revealWords, 0);

    return () => window.removeEventListener("scroll", revealWords);
  }, [skip]);

  if (skip) return <div className="wr-root">{children}</div>;

  return (
    <div ref={ref} className="wr-root">
      {children}
    </div>
  );
};
