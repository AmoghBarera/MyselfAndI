"use client";

import { motion } from "framer-motion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { dataService } from "@/lib/data-service";
import { accent } from "@/lib/accent";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { Reveal, Stagger, StaggerItem, AnimatedCounter } from "@/components/animations/motion";

export default function SkillsPage() {
  const groups = dataService.getSkillGroups();

  const radarData = groups.map((g) => {
    const avg = Math.round(
      g.skills.reduce((s, x) => s + x.level, 0) / g.skills.length
    );
    return { subject: g.title.split(" ")[0], value: avg };
  });

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      {/* header */}
      <div className="mb-12 flex flex-col gap-3">
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-glow" />
          04 — Skills
        </span>
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          The full <span className="text-gradient-emerald">toolkit.</span>
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Self-reported exposure levels — not expert proficiency across the
          board. Honest about where the depth is and where it&apos;s still growing.
        </p>
      </div>

      {/* radar overview */}
      <Reveal className="mb-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-3xl border border-border/60 bg-card/40 p-6 backdrop-blur">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
            Coverage map
          </span>
          <h2 className="mt-1 font-display text-xl font-semibold">
            Average exposure per area
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            A quick read on where the centre of gravity sits today.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {groups.map((g) => {
              const avg = Math.round(
                g.skills.reduce((s, x) => s + x.level, 0) / g.skills.length
              );
              const a = accent(g.color);
              return (
                <div
                  key={g.id}
                  className="flex items-center justify-between rounded-xl border border-border/50 bg-background/40 p-3"
                >
                  <span className="flex items-center gap-2 text-sm">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ background: a.chartVar }}
                    />
                    {g.title.split(" ")[0]}
                  </span>
                  <span className="font-mono text-sm font-semibold">
                    <AnimatedCounter value={avg} suffix="%" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-3xl border border-border/60 bg-card/40 p-6 backdrop-blur">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
            Radar
          </span>
          <div className="mt-2 h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} outerRadius="72%">
                <PolarGrid stroke="var(--border)" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                />
                <PolarRadiusAxis
                  domain={[0, 100]}
                  tick={{ fill: "var(--muted-foreground)", fontSize: 9 }}
                  stroke="var(--border)"
                />
                <Radar
                  name="Exposure"
                  dataKey="value"
                  stroke="var(--emerald-glow)"
                  fill="var(--emerald-glow)"
                  fillOpacity={0.3}
                  strokeWidth={2}
                  isAnimationActive
                  animationDuration={1200}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Reveal>

      {/* skill groups */}
      <Stagger className="grid gap-4 sm:grid-cols-2" gap={0.08}>
        {groups.map((g) => {
          const a = accent(g.color);
          const Icon = getIcon(g.icon);
          return (
            <StaggerItem key={g.id}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-5 backdrop-blur transition-colors hover:border-border">
                <div
                  className="absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-15 blur-3xl transition-opacity group-hover:opacity-30"
                  style={{ background: a.chartVar }}
                />
                <div className="relative flex items-center gap-3">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-lg border border-border/50"
                    style={{ color: a.chartVar }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold">
                      {g.title}
                    </h3>
                    <span className="text-[11px] text-muted-foreground/70">
                      {g.skills.length} skills
                    </span>
                  </div>
                </div>

                <div className="relative mt-4 flex flex-col gap-3">
                  {g.skills.map((s, i) => (
                    <SkillBar
                      key={s.name}
                      name={s.name}
                      level={s.level}
                      note={s.note}
                      color={a.chartVar}
                      delay={i * 0.05}
                    />
                  ))}
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>

      {/* disclaimer */}
      <Reveal className="mt-8 rounded-xl border border-border/40 bg-background/30 p-4 text-center text-xs text-muted-foreground/70">
        Exposure levels are self-reported. These should not all be read as
        expert-level proficiency — they reflect hands-on time and comfort.
      </Reveal>
    </div>
  );
}

function SkillBar({
  name,
  level,
  note,
  color,
  delay,
}: {
  name: string;
  level: number;
  note?: string;
  color: string;
  delay: number;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">
          <AnimatedCounter value={level} suffix="%" />
        </span>
      </div>
      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-border/40">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      {note && <span className="text-[10px] text-muted-foreground/60">{note}</span>}
    </div>
  );
}
