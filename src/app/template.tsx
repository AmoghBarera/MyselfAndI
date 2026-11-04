"use client";

import { motion } from "framer-motion";

/* template.tsx re-mounts on every navigation in the App Router.
   A restrained "page turn": a cream/espresso panel wipes upward
   with a thin brass edge, layered with a fade + blur on the
   content — so each route feels drawn rather than just swapped. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* curtain wipe */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[70] origin-bottom"
        style={{
          background: "var(--background)",
          boxShadow: "inset 0 2px 0 0 var(--emerald-glow)",
        }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
