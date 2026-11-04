"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";
import { dataService } from "@/lib/data-service";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const nav = dataService.getNav();
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 12));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6",
          scrolled ? "mt-2 sm:mt-3" : "mt-0"
        )}
      >
        <div
          className={cn(
            "flex w-full items-center justify-between gap-3 rounded-2xl px-3 py-2 transition-all duration-300 sm:px-4",
            scrolled
              ? "glass border border-border/70 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.4)]"
              : "border border-transparent"
          )}
        >
          {/* Brand */}
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl border border-border/70 bg-card">
              <span className="absolute inset-0 bg-gradient-to-br from-emerald-glow/25 to-amber-glow/20 opacity-80" />
              <span className="relative font-display text-sm font-bold tracking-tight">
                {profile.initials}
              </span>
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-sm font-semibold tracking-tight">
                {profile.fullName}
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {profile.role.split(" ")[0]} · AIML
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-lg px-3 py-1.5 text-sm transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-lg border border-border/70 bg-secondary/60"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            {/* In dark mode: show Sun → click for light */}
            <button
              type="button"
              aria-label="Switch to light theme"
              onClick={() => setTheme("light")}
              className="hidden h-9 w-9 place-items-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:text-foreground dark:grid"
            >
              <Sun className="h-4 w-4" />
            </button>
            {/* In light mode: show Moon → click for dark */}
            <button
              type="button"
              aria-label="Switch to dark theme"
              onClick={() => setTheme("dark")}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:text-foreground dark:hidden"
            >
              <Moon className="h-4 w-4" />
            </button>
            <Link
              href="/contact"
              className="hidden rounded-lg bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95 sm:inline-flex"
            >
              Get in touch
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border/60 lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[78%] max-w-sm flex-col gap-2 border-l border-border bg-card p-5 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-display text-base font-semibold">
                  {profile.shortName}
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border/60"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              {nav.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i + 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-xl border px-4 py-3 text-base transition-colors",
                        active
                          ? "border-emerald-glow/40 bg-secondary text-foreground"
                          : "border-border/50 text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.label}
                      <span className="text-xs text-muted-foreground/60">0{i + 1}</span>
                    </Link>
                  </motion.div>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex justify-center rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
              >
                Get in touch →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
