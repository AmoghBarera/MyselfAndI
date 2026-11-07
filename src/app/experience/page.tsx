"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  Clock,
  Wallet,
  CheckCircle2,
  ArrowUpRight,
  GitBranch,
} from "lucide-react";
import { dataService } from "@/lib/data-service";
import { Reveal } from "@/components/animations/motion";
import { AnimatedHeading } from "@/components/site/animated-heading";

const META = [
  { icon: Building2, label: "Team", key: "team" as const },
  { icon: MapPin, label: "Location", key: "location" as const },
  { icon: Clock, label: "Duration", key: "duration" as const },
  { icon: Wallet, label: "Stipend", key: "stipend" as const },
];

export default function ExperiencePage() {
  const experiences = dataService.getExperiences();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      {/* header */}
      <div className="mb-12 flex flex-col gap-3">
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-glow" />
          02 — Experience
        </span>
        <AnimatedHeading
          text="Where I've earned the reps."
          accent="the reps."
          accentClass="text-gradient-warm italic"
          className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        />
      </div>

      <div className="flex flex-col gap-10">
        {experiences.map((exp) => (
          <Reveal key={exp.id}>
            <article className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/90 p-6 backdrop-blur sm:p-8">
              {/* accent wash */}
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-amber-glow/10 blur-3xl" />
              <div className="absolute -left-20 bottom-0 h-40 w-40 rounded-full bg-emerald-glow/10 blur-3xl" />

              {/* header row */}
              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative grid h-14 w-14 place-items-center overflow-hidden rounded-2xl border border-border/70 bg-card">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-glow/20 to-amber-glow/20" />
                    <span className="relative font-display text-lg font-bold">
                      {exp.logoText}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                      {exp.type}
                    </span>
                    <h2 className="font-display text-2xl font-semibold tracking-tight">
                      {exp.company}
                    </h2>
                    <span className="text-sm text-muted-foreground">
                      {exp.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* meta grid */}
              <div className="relative mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {META.map((m) => (
                  <div
                    key={m.label}
                    className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/86 p-3"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-lg border border-border/50 text-amber-glow">
                      <m.icon className="h-4 w-4" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                        {m.label}
                      </span>
                      <span className="text-sm font-medium">
                        {exp[m.key]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* summary */}
              <p className="relative mt-6 text-base leading-relaxed text-muted-foreground">
                {exp.summary}
              </p>

              {/* work flow diagram */}
              <div className="relative mt-8">
                <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-glow" />
                  The work, end to end
                </span>
                <div className="mt-4">
                  <WorkFlowDiagram />
                </div>
              </div>

              {/* highlights timeline */}
              <div className="relative mt-8">
                <h3 className="font-display text-lg font-semibold">
                  What I shipped
                </h3>
                <div className="mt-4 flex flex-col">
                  {exp.highlights.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-10% 0px" }}
                      transition={{ duration: 0.5, delay: i * 0.07 }}
                      className="group relative flex gap-4 pb-6 last:pb-0"
                    >
                      {/* timeline rail */}
                      <div className="flex flex-col items-center">
                        <span className="relative grid h-7 w-7 place-items-center rounded-full border border-amber-glow/40 bg-card">
                          <span className="h-2 w-2 rounded-full bg-amber-glow" />
                        </span>
                        {i < exp.highlights.length - 1 && (
                          <span className="mt-1 w-px flex-1 bg-gradient-to-b from-amber-glow/40 to-transparent" />
                        )}
                      </div>
                      <div className="flex flex-1 flex-col gap-1 pt-0.5">
                        <p className="text-sm leading-relaxed text-foreground/90">
                          {h}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* skills */}
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border/50 bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* outcome */}
              <div className="relative mt-6 flex items-start gap-3 rounded-xl border border-emerald-glow/25 bg-emerald-glow/5 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-glow" />
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-glow">
                    Takeaway
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                    {exp.outcome}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* what's next strip */}
      <div className="mt-16 grid gap-3 sm:grid-cols-2">
        {[
          { href: "/projects", label: "Projects built with these skills", num: "03" },
          { href: "/ambitions", label: "Where this is heading", num: "05" },
        ].map((n) => (
          <Link
            key={n.href}
            href={n.href}
            className="group flex items-center justify-between rounded-2xl border border-border/60 bg-card/88 p-5 transition-colors hover:border-amber-glow/40"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-muted-foreground/60">{n.num}</span>
              <span className="font-display text-lg font-semibold">{n.label}</span>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
          </Link>
        ))}
      </div>
    </div>
  );
}

/* A bespoke horizontal pipeline showing the Schneider work flow */
function WorkFlowDiagram() {
  const stages = [
    { label: "Logs IO", sub: "log platform" },
    { label: "Procurement", sub: "core platform" },
    { label: "REST APIs", sub: "designed + built" },
    { label: "Validation", sub: "test harnesses" },
    { label: "Dashboards", sub: "monitor calls" },
    { label: "Alerts", sub: "DL fixed" },
  ];
  return (
    <div className="overflow-x-auto scrollbar-slim">
      <div className="flex min-w-[640px] items-stretch gap-0">
        {stages.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-1 items-center"
          >
            <div className="relative flex flex-1 flex-col items-center gap-2 rounded-xl border border-border/50 bg-background/86 p-4 text-center">
              <span className="font-mono text-[10px] text-muted-foreground/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-sm font-semibold">{s.label}</span>
              <span className="text-[10px] text-muted-foreground/70">{s.sub}</span>
              {i === 4 && (
                <span className="absolute -right-1 -top-2 rounded-full bg-coral-glow px-1.5 py-0.5 text-[9px] font-medium text-background">
                  bug found
                </span>
              )}
            </div>
            {i < stages.length - 1 && (
              <div className="relative flex h-10 w-8 items-center justify-center">
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.1 }}
                  className="h-0.5 w-full origin-left bg-gradient-to-r from-amber-glow/60 to-emerald-glow/60"
                />
                <GitBranch className="absolute h-3 w-3 text-muted-foreground/60" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
