"use client";

import { cn } from "@/lib/utils";

/* Infinite marquee. Duplicates children so the loop is seamless. */
export function Marquee({
  children,
  className,
  duration = 38,
  reverse = false,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn(
        "marquee-pause group relative flex w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className
      )}
    >
      <div
        className="flex shrink-0 items-center gap-4 pr-4 animate-marquee"
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 items-center gap-4 pr-4 animate-marquee"
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </div>
  );
}
