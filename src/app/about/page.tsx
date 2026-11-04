"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Calendar,
  Gauge,
  ArrowUpRight,
  Languages,
  Heart,
  Bike,
} from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal, AnimatedCounter } from "@/components/animations/motion";

const QUICK_FACTS = [
  { icon: MapPin, label: "Based in", value: "Bengaluru, India" },
  { icon: GraduationCap, label: "Studying", value: "B.Tech · AIML" },
  { icon: Calendar, label: "Status", value: "6th Semester" },
  { icon: Languages, label: "Code in", value: "Python · JS · Java · C" },
];

const INTERESTS = [
  { icon: Heart, label: "Financial markets & trading" },
  { icon: Gauge, label: "Quantitative finance" },
  { icon: Bike, label: "Yamaha FZ25 rides" },
  { icon: Heart, label: "Football · Badminton · Tennis" },
  { icon: Gauge, label: "Strength training" },
  { icon: Bike, label: "Valorant & gaming" },
];

export default function AboutPage() {
  const pct = (profile.cgpa / profile.cgpaMax) * 100;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      {/* header */}
      <div className="mb-12 flex flex-col gap-3">
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-glow" />
          01 — About
        </span>
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          The person behind <span className="text-gradient-emerald">the projects.</span>
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        {/* summary */}
        <Reveal className="flex flex-col gap-6">
          <div className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur">
            <p className="text-lg leading-relaxed text-foreground/90">
              {profile.summary}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {QUICK_FACTS.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.06}>
                <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-card/40 p-4">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-border/50 text-emerald-glow">
                    <f.icon className="h-4 w-4" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                      {f.label}
                    </span>
                    <span className="text-sm font-medium">{f.value}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* CGPA gauge */}
        <Reveal delay={0.15} className="flex flex-col gap-4">
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-glow/20 blur-3xl" />
            <div className="relative flex flex-col items-center gap-4">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                Academic standing
              </span>
              <CgpaGauge pct={pct} value={profile.cgpa} max={profile.cgpaMax} />
              <div className="text-center">
                <p className="text-sm font-medium">{profile.university}</p>
                <p className="text-xs text-muted-foreground">
                  {profile.specialization}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/50 p-5">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
              Currently available for
            </span>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.availableFor.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center gap-1.5 rounded-full border border-emerald-glow/30 bg-emerald-glow/10 px-3 py-1 text-xs text-foreground"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-glow" />
                  {a}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* interests */}
      <div className="mt-16">
        <SectionHeading
          eyebrow="Beyond the keyboard"
          title="What keeps the engine running."
          description="The hobbies and side-obsessions that feed back into the work."
          accentColor="amber"
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {INTERESTS.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.05}>
              <div className="group flex items-center gap-3 rounded-xl border border-border/50 bg-card/40 p-4 transition-colors hover:border-amber-glow/30">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-border/50 text-amber-glow transition-transform group-hover:scale-110">
                  <it.icon className="h-4 w-4" />
                </span>
                <span className="text-sm">{it.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* nav strip */}
      <div className="mt-16 grid gap-3 sm:grid-cols-2">
        {[
          { href: "/experience", label: "Where I've worked", num: "02" },
          { href: "/projects", label: "What I've built", num: "03" },
        ].map((n) => (
          <Link
            key={n.href}
            href={n.href}
            className="group flex items-center justify-between rounded-2xl border border-border/60 bg-card/40 p-5 transition-colors hover:border-emerald-glow/40"
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

function CgpaGauge({ pct, value, max }: { pct: number; value: number; max: number }) {
  const r = 70;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative grid h-[180px] w-[180px] place-items-center">
      <svg viewBox="0 0 180 180" className="h-full w-full -rotate-90">
        <circle cx="90" cy="90" r={r} fill="none" stroke="var(--border)" strokeWidth="10" opacity="0.5" />
        <motion.circle
          cx="90"
          cy="90"
          r={r}
          fill="none"
          stroke="url(#cgpa-grad)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c - (pct / 100) * c }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
        <defs>
          <linearGradient id="cgpa-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--emerald-glow)" />
            <stop offset="100%" stopColor="var(--amber-glow)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-display text-3xl font-bold">
          <AnimatedCounter value={value} decimals={2} />
        </span>
        <span className="text-xs text-muted-foreground">/ {max} CGPA</span>
      </div>
    </div>
  );
}
