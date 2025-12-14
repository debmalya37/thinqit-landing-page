import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TextRevealLine({
  text,
  as: Tag = "p",
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.innerHTML = "";

    const words = text.split(" ");

    words.forEach((word) => {
      const span = document.createElement("span");
      span.textContent = word;
      span.className = "word";
      el.appendChild(span);
      el.appendChild(document.createTextNode(" "));
    });

    const wordSpans = Array.from(el.querySelectorAll(".word"));

    requestAnimationFrame(() => {
      const lines = [];
      let currentLine = [];
      let lastTop = null;

      wordSpans.forEach((word) => {
        const top = word.getBoundingClientRect().top;
        if (lastTop === null || Math.abs(top - lastTop) < 6) {
          currentLine.push(word);
        } else {
          lines.push(currentLine);
          currentLine = [word];
        }
        lastTop = top;
      });

      if (currentLine.length) lines.push(currentLine);

      lines.forEach((lineWords) => {
        gsap.fromTo(
          lineWords,
          { opacity: 0.15 },
          {
            opacity: 1,
            ease: "none",
            stagger: 0.07,
            scrollTrigger: {
              trigger: lineWords[0],
              start: "top 88%",
              end: "top 68%",
              scrub: true,
            },
          }
        );
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [text]);

  return (
    <Tag
      ref={ref}
      className={`leading-relaxed max-w-full ${className}`}
      style={{
        whiteSpace: "normal",
        wordBreak: "normal",
        overflowWrap: "normal",
      }}
    />
  );
}
