"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* Animated aurora orbs + grid. Used as a fixed page backdrop.
   Tuned for the cream/espresso palette — warm, low-opacity orbs. */
export function AnimatedBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      {/* base grid */}
      <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />

      {/* orbs — brass / oxblood / clay */}
      <motion.div
        className="absolute -left-[8%] top-[4%] h-[40vmax] w-[40vmax] rounded-full opacity-20 blur-[110px] dark:opacity-25"
        style={{
          background:
            "radial-gradient(circle at center, var(--emerald-glow), transparent 65%)",
        }}
        animate={{ x: [0, 36, -18, 0], y: [0, -26, 18, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10%] top-[10%] h-[36vmax] w-[36vmax] rounded-full opacity-16 blur-[120px] dark:opacity-20"
        style={{
          background:
            "radial-gradient(circle at center, var(--amber-glow), transparent 65%)",
        }}
        animate={{ x: [0, -44, 18, 0], y: [0, 34, -10, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-12%] left-[28%] h-[38vmax] w-[38vmax] rounded-full opacity-14 blur-[130px] dark:opacity-18"
        style={{
          background:
            "radial-gradient(circle at center, var(--coral-glow), transparent 65%)",
        }}
        animate={{ x: [0, 26, -36, 0], y: [0, -18, 8, 0], scale: [1, 1.06, 1.02, 1] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,var(--background)_100%)]" />
    </div>
  );
}
