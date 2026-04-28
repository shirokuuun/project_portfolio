import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children, skip = false }) => {
  const ref = useRef(null);
  const doneRef = useRef(false);
  const wordsRef = useRef([]);

  useEffect(() => {
    const el = ref.current;
    if (!el || skip) return;

    // ── Wrap every word in a span ──────────────────────────────────
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

    // ── Scroll handler — pure progress, no locking ─────────────────
    const onScroll = () => {
      if (doneRef.current) return;

      const words = wordsRef.current;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // Reveal window:
      // starts when element top hits 90% down the viewport
      // ends   when element top hits 10% down the viewport
      const revealStart = vh * 0.9;
      const revealEnd = vh * 0.1;

      const progress = Math.min(
        1,
        Math.max(0, (revealStart - rect.top) / (revealStart - revealEnd)),
      );

      const toReveal = Math.floor(progress * words.length);

      words.forEach((w, i) => {
        if (i < toReveal) {
          if (!w.classList.contains("wr-shown")) {
            w.classList.remove("wr-hidden");
            w.classList.add("wr-shown");
          }
        } else {
          // Only re-hide if section not fully done
          if (!w.classList.contains("wr-shown") || !doneRef.current) {
            w.classList.remove("wr-shown");
            w.classList.add("wr-hidden");
          }
        }
      });

      // Once fully revealed — lock permanently, stop listening
      if (toReveal >= words.length) {
        doneRef.current = true;
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // check on mount

    return () => window.removeEventListener("scroll", onScroll);
  }, [skip]);

  if (skip) return <div className="wr-root">{children}</div>;

  return (
    <div ref={ref} className="wr-root">
      {children}
    </div>
  );
};
