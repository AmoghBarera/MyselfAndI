"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { dataService } from "@/lib/data-service";
import { Reveal } from "@/components/animations/motion";

export function Footer() {
  const links = dataService.getFooterLinks();
  return (
    <footer className="mt-auto border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Reveal className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Identity */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl border border-border/70 bg-card">
                <span className="absolute inset-0 bg-gradient-to-br from-emerald-glow/25 to-amber-glow/20 opacity-80" />
                <span className="relative font-display text-sm font-bold">
                  {profile.initials}
                </span>
              </span>
              <span className="font-display text-sm font-semibold">
                {profile.fullName}
              </span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              {profile.tagline}
            </p>
            <p className="text-xs text-muted-foreground/70">
              {profile.location} · {profile.university}
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/70">
              Navigate
            </span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/70">
              Currently
            </span>
            <div className="flex flex-wrap gap-2">
              {profile.availableFor.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-glow [animation:float-slow_2s_ease-in-out_infinite]" />
                  {a}
                </span>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-lg border border-border/70 px-3 py-1.5 text-sm transition-colors hover:border-emerald-glow/40 hover:text-foreground"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-border/40 pt-5 text-xs text-muted-foreground/60 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {profile.fullName}. Crafted with intent.
          </span>
          <span>Built with Next.js · Framer Motion · Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
