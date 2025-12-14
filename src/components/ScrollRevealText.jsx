import { motion, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

export default function ScrollRevealText({
  children,
  as = "p",
  className = "",
}) {
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [lines, setLines] = useState([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 30%"],
  });

  const Tag = motion[as] || motion.p;

  // Split plain text only (SalesLetter already wraps blocks correctly)
  const words =
    typeof children === "string" ? children.split(" ") : [];

  // Group words into visual lines
  useLayoutEffect(() => {
    if (!wordRefs.current.length) return;

    const lineMap = new Map();

    wordRefs.current.forEach((el, i) => {
      if (!el) return;
      const top = Math.round(el.getBoundingClientRect().top);

      if (!lineMap.has(top)) lineMap.set(top, []);
      lineMap.get(top).push(i);
    });

    setLines(Array.from(lineMap.values()));
  }, [children]);

  return (
    <Tag
      ref={containerRef}
      className={`leading-relaxed ${className}`}
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {words.map((word, i) => {
        const lineIndex = lines.findIndex(line =>
          line.includes(i)
        );

        const start = lineIndex * 0.15;
        const end = start + 0.2;

        const opacity = useTransform(
          scrollYProgress,
          [start, end],
          [0.15, 1]
        );

        return (
          <motion.span
            key={i}
            ref={el => (wordRefs.current[i] = el)}
            style={{ opacity }}
            className="inline-block whitespace-pre"
          >
            {word + " "}
          </motion.span>
        );
      })}
    </Tag>
  );
}
