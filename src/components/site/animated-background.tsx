"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* Animated aurora orbs + grid. Used as a fixed page backdrop. */
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
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />

      {/* orbs */}
      <motion.div
        className="absolute -left-[10%] top-[5%] h-[42vmax] w-[42vmax] rounded-full opacity-30 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle at center, var(--emerald-glow), transparent 65%)",
        }}
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-12%] top-[12%] h-[38vmax] w-[38vmax] rounded-full opacity-25 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle at center, var(--amber-glow), transparent 65%)",
        }}
        animate={{ x: [0, -50, 20, 0], y: [0, 40, -10, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[30%] h-[40vmax] w-[40vmax] rounded-full opacity-20 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle at center, var(--coral-glow), transparent 65%)",
        }}
        animate={{ x: [0, 30, -40, 0], y: [0, -20, 10, 0], scale: [1, 1.06, 1.02, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,var(--background)_100%)]" />
    </div>
  );
}
