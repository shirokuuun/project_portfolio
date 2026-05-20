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

      if (rect.bottom <= 0) {
        words.forEach((w) => {
          w.classList.remove("wr-hidden");
          w.classList.add("wr-shown");
        });
        doneRef.current = true;
        window.removeEventListener("scroll", revealWords);
        return;
      }

      const revealStart = vh * 0.9;
      const revealEnd = vh * 0.1;

      const progressByTop =
        (revealStart - rect.top) / (revealStart - revealEnd);
      const progressByBottom = rect.bottom <= vh * 0.5 ? 1 : progressByTop;

      // ✅ KEY FIX: if the element's bottom is already within the
      // visible viewport (rect.bottom <= vh), the section is on screen
      // but there's nothing left to scroll. Reveal everything.
      const isBottomVisible = rect.bottom <= vh;

      const progress = isBottomVisible
        ? 1
        : Math.min(1, Math.max(0, Math.max(progressByTop, progressByBottom)));

      const toReveal = Math.floor(progress * words.length);

      words.forEach((w, i) => {
        if (i < toReveal) {
          if (!w.classList.contains("wr-shown")) {
            w.classList.remove("wr-hidden");
            w.classList.add("wr-shown");
          }
        } else {
          if (!w.classList.contains("wr-shown") || !doneRef.current) {
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
    revealWords();

    return () => window.removeEventListener("scroll", revealWords);
  }, [skip]);

  if (skip) return <div className="wr-root">{children}</div>;

  return (
    <div ref={ref} className="wr-root">
      {children}
    </div>
  );
};
