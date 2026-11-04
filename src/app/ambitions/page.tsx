"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Target, TrendingUp, Compass } from "lucide-react";
import { dataService } from "@/lib/data-service";
import { accent } from "@/lib/accent";
import { cn } from "@/lib/utils";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/motion";

export default function AmbitionsPage() {
  const phases = dataService.getAmbitions();
  const quantDirs = dataService.getQuantDirections();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      {/* header */}
      <div className="mb-12 flex flex-col gap-3">
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-glow" />
          05 — Ambitions
        </span>
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          The trajectory, <span className="text-gradient-warm">not the resume.</span>
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          A three-phase plan: land a strong software engineering role, pivot
          into quantitative finance, then build at the intersection of tech,
          finance, and entrepreneurship.
        </p>
      </div>

      {/* trajectory curve */}
      <Reveal className="mb-12 overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-6 backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
              Career trajectory
            </span>
            <h2 className="mt-1 font-display text-xl font-semibold">
              Software → Quant → Scale
            </h2>
          </div>
          <TrendingUp className="h-5 w-5 text-amber-glow" />
        </div>
        <TrajectoryCurve phases={phases} />
      </Reveal>

      {/* phases */}
      <div className="grid gap-4 lg:grid-cols-3">
        {phases.map((phase, i) => {
          const a = accent(phase.color);
          return (
            <Reveal key={phase.id} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur">
                <div
                  className="absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-35"
                  style={{ background: a.chartVar }}
                />
                <div className="relative flex items-center justify-between">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-lg border border-border/50 font-display text-sm font-bold"
                    style={{ color: a.chartVar }}
                  >
                    {i + 1}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground/70">
                    {phase.period}
                  </span>
                </div>

                <h3 className="relative mt-4 font-display text-xl font-semibold tracking-tight">
                  {phase.title}
                </h3>
                <p
                  className="relative mt-1 text-sm font-medium"
                  style={{ color: a.chartVar }}
                >
                  {phase.focus}
                </p>

                <ul className="relative mt-4 flex flex-1 flex-col gap-2.5">
                  {phase.goals.map((goal, gi) => (
                    <motion.li
                      key={gi}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: gi * 0.06 + i * 0.05 }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: a.chartVar }}
                      />
                      <span className="text-foreground/85">{goal}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* phase base bar */}
                <div className="relative mt-5 h-1 w-full overflow-hidden rounded-full bg-border/40">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: a.chartVar }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(i + 1) * 33}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                  />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* quant direction */}
      <Reveal className="mt-16">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-6 backdrop-blur sm:p-8">
          <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-emerald-glow/15 blur-3xl" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex max-w-md flex-col gap-3">
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                <Compass className="h-3.5 w-3.5 text-emerald-glow" />
                The quant north star
              </span>
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Targeting quant within 2–3 years.
              </h2>
              <p className="text-sm text-muted-foreground">
                The Trade Recon project and the NYIF risk-management
                certification form the launchpad. Here are the directions
                being explored.
              </p>
            </div>
            <Stagger
              className="grid flex-1 gap-2 sm:grid-cols-2"
              gap={0.06}
            >
              {quantDirs.map((d) => (
                <StaggerItem key={d}>
                  <div className="flex items-center gap-2 rounded-xl border border-border/50 bg-background/40 p-3">
                    <Target className="h-4 w-4 text-emerald-glow" />
                    <span className="text-sm">{d}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Reveal>

      {/* CTA */}
      <div className="mt-12 flex flex-col items-center gap-4 text-center">
        <p className="text-sm text-muted-foreground">
          Building toward this? Let&apos;s talk.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
        >
          Reach out
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

/* An SVG growth curve with three milestone markers */
function TrajectoryCurve({
  phases,
}: {
  phases: { id: string; period: string; title: string; color: string }[];
}) {
  const W = 1000;
  const H = 220;
  const points = [40, 110, 180]; // y positions decreasing = rising line
  const xs = [80, 500, 920];
  const path = `M ${xs[0]} ${points[0]} C ${xs[0] + 140} ${points[0]}, ${xs[1] - 120} ${points[1]}, ${xs[1]} ${points[1]} C ${xs[1] + 140} ${points[1]}, ${xs[2] - 120} ${points[2]}, ${xs[2]} ${points[2]}`;

  return (
    <div className="mt-4 overflow-x-auto scrollbar-slim">
      <svg viewBox={`0 0 ${W} ${H}`} className="min-w-[700px] w-full" role="img" aria-label="Career trajectory">
        <defs>
          <linearGradient id="traj-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--emerald-glow)" />
            <stop offset="50%" stopColor="var(--amber-glow)" />
            <stop offset="100%" stopColor="var(--coral-glow)" />
          </linearGradient>
        </defs>

        {/* axis baseline */}
        <line x1="40" y1={H - 30} x2={W - 40} y2={H - 30} stroke="var(--border)" strokeWidth="1" />

        {/* area fill */}
        <motion.path
          d={`${path} L ${xs[2]} ${H - 30} L ${xs[0]} ${H - 30} Z`}
          fill="url(#traj-grad)"
          fillOpacity={0.08}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        {/* curve */}
        <motion.path
          d={path}
          fill="none"
          stroke="url(#traj-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* milestone markers */}
        {phases.map((p, i) => {
          const a = accent(p.color);
          const colors = ["var(--emerald-glow)", "var(--amber-glow)", "var(--coral-glow)"];
          const c = colors[i] ?? a.chartVar;
          return (
            <motion.g
              key={p.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.25 }}
            >
              <circle cx={xs[i]} cy={points[i]} r="7" fill="var(--background)" stroke={c} strokeWidth="2.5" />
              <circle cx={xs[i]} cy={points[i]} r="3" fill={c} />
              <text x={xs[i]} y={points[i] - 22} textAnchor="middle" className="fill-foreground text-[12px] font-medium">
                {p.title}
              </text>
              <text x={xs[i]} y={H - 14} textAnchor="middle" className="fill-muted-foreground text-[10px]">
                {p.period}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
