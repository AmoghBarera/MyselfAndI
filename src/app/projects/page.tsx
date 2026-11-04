"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Filter, Sparkles } from "lucide-react";
import { dataService } from "@/lib/data-service";
import { accent } from "@/lib/accent";
import { cn } from "@/lib/utils";
import { Reveal, Stagger, StaggerItem, TiltCard } from "@/components/animations/motion";
import { ProjectCard } from "@/components/site/project-card";
import { DiagramView } from "@/components/site/project-diagram";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "featured", label: "Featured" },
  { id: "major", label: "Major" },
  { id: "side", label: "Side" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

export default function ProjectsPage() {
  const all = dataService.getProjects();
  const featured = dataService.getFeaturedProjects();
  const [filter, setFilter] = useState<FilterId>("all");

  const filtered =
    filter === "all" ? all : all.filter((p) => p.status === filter);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      {/* header */}
      <div className="mb-12 flex flex-col gap-3">
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-coral-glow" />
          03 — Projects
        </span>
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Things I&apos;ve designed, <span className="text-gradient-warm">built, and broken.</span>
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          From a Kafka-driven trade reconciliation engine to a daemon-less
          container runtime. Each project below has its own architecture
          diagram and the metrics that matter.
        </p>
      </div>

      {/* ─── Featured deep dives ─── */}
      <div className="flex flex-col gap-16">
        {featured.map((p, i) => {
          const a = accent(p.color);
          const flip = i % 2 === 1;
          return (
            <Reveal key={p.id}>
              <section
                id={p.slug}
                className="relative scroll-mt-24 overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-6 backdrop-blur sm:p-8 lg:p-10"
              >
                {/* accent wash */}
                <div
                  className={cn(
                    "absolute h-72 w-72 rounded-full opacity-20 blur-3xl",
                    flip ? "-left-24 -top-24" : "-right-24 -top-24"
                  )}
                  style={{ background: a.chartVar }}
                />

                <div
                  className={cn(
                    "relative grid gap-8 lg:grid-cols-2 lg:items-center",
                    flip && "lg:[&>div:first-child]:order-2"
                  )}
                >
                  {/* text */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em]"
                        style={{
                          borderColor: `color-mix(in oklch, ${a.chartVar} 35%, transparent)`,
                          color: a.chartVar,
                        }}
                      >
                        <Sparkles className="h-3 w-3" />
                        Featured
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
                        {p.year} · {p.category}
                      </span>
                    </div>

                    <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                      {p.name}
                    </h2>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>

                    {/* metrics */}
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {p.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-xl border border-border/50 bg-background/40 p-3"
                        >
                          <div className="font-display text-base font-bold" style={{ color: a.chartVar }}>
                            {m.value}
                          </div>
                          <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* highlights */}
                    <ul className="flex flex-col gap-2">
                      {p.highlights.slice(0, 4).map((h, hi) => (
                        <motion.li
                          key={hi}
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: hi * 0.06 }}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span
                            className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: a.chartVar }}
                          />
                          {h}
                        </motion.li>
                      ))}
                    </ul>

                    {/* tech */}
                    <div className="flex flex-wrap gap-1.5">
                      {p.techStack.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border/50 bg-secondary/40 px-2.5 py-1 text-[11px] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* diagram */}
                  <div className="flex flex-col gap-3">
                    <TiltCard max={5} className="rounded-2xl border border-border/60 bg-background/50 p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                          {p.diagram?.title ?? "Architecture"}
                        </span>
                        <span
                          className="font-mono text-[10px]"
                          style={{ color: a.chartVar }}
                        >
                          diagram
                        </span>
                      </div>
                      <div className="mt-4">
                        {p.diagram && (
                          <DiagramView diagram={p.diagram} accentVar={a.chartVar} />
                        )}
                      </div>
                    </TiltCard>
                  </div>
                </div>
              </section>
            </Reveal>
          );
        })}
      </div>

      {/* ─── All projects with filters ─── */}
      <div className="mt-20">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-glow" />
              The full catalogue
            </span>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Every project, filterable.
            </h2>
          </div>
          <div className="flex items-center gap-1.5 rounded-xl border border-border/60 bg-card/40 p-1">
            <Filter className="ml-2 h-3.5 w-3.5 text-muted-foreground/60" />
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={cn(
                  "relative rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                  filter === f.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {filter === f.id && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-secondary/70"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" gap={0.07}>
              {filtered.map((p, i) => (
                <StaggerItem key={p.id}>
                  <ProjectCard project={p} index={i} />
                </StaggerItem>
              ))}
            </Stagger>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA */}
      <div className="mt-20 flex flex-col items-center gap-4 rounded-3xl border border-border/60 bg-card/40 p-8 text-center">
        <h3 className="font-display text-2xl font-semibold tracking-tight">
          Want the technical deep dive?
        </h3>
        <p className="max-w-md text-sm text-muted-foreground">
          The skills page breaks down the full stack — languages, infra, data,
          and fintech — with self-reported exposure levels.
        </p>
        <Link
          href="/skills"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
        >
          See the toolkit
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
