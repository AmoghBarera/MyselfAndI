"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* AnimatedHeading — splits text into lines and reveals each from
   behind a clip mask with a stagger. Pass a string or an array of
   lines. Supports an accent word via `accent` (matched substring)
   which gets the gradient treatment. */
export function AnimatedHeading({
  text,
  lines,
  accent,
  accentClass = "text-gradient-emerald italic",
  className,
  delay = 0,
  as: Tag = "h1",
  align = "left",
}: {
  text?: string;
  lines?: string[];
  accent?: string;
  accentClass?: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
}) {
  const lineArr = lines ?? (text ? [text] : []);

  return (
    <Tag
      className={cn(
        "flex flex-col gap-1",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {lineArr.map((line, li) => {
        const parts = accent
          ? splitAccent(line, accent)
          : [{ text: line, isAccent: false }];
        return (
          <span key={li} className="mask-line">
            <motion.span
              className="inline-block"
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.85,
                delay: delay + li * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {parts.map((p, pi) =>
                p.isAccent ? (
                  <span key={pi} className={accentClass}>
                    {p.text}
                  </span>
                ) : (
                  <span key={pi}>{p.text}</span>
                )
              )}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}

function splitAccent(
  line: string,
  accent: string
): { text: string; isAccent: boolean }[] {
  const idx = line.toLowerCase().indexOf(accent.toLowerCase());
  if (idx === -1) return [{ text: line, isAccent: false }];
  return [
    { text: line.slice(0, idx), isAccent: false },
    { text: line.slice(idx, idx + accent.length), isAccent: true },
    { text: line.slice(idx + accent.length), isAccent: false },
  ].filter((p) => p.text.length > 0);
}
