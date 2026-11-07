"use client";

import { Reveal } from "@/components/animations/motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  accentColor = "emerald",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  accentColor?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground",
            align === "center" && "justify-center"
          )}
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{
              background:
                accentColor === "amber"
                  ? "var(--amber-glow)"
                  : accentColor === "coral"
                  ? "var(--coral-glow)"
                  : accentColor === "teal"
                  ? "var(--teal-glow)"
                  : "var(--emerald-glow)",
            }}
          />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.7rem] leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
