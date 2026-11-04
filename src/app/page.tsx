"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  Cpu,
  LineChart,
  Boxes,
} from "lucide-react";
import { profile, heroStats } from "@/data/profile";
import { AnimatedCounter, Magnetic, Reveal } from "@/components/animations/motion";
import { Marquee } from "@/components/site/marquee";
import { ProjectCard } from "@/components/site/project-card";
import { dataService } from "@/lib/data-service";

const TECH_MARQUEE = [
  "Python", "Next.js", "Apache Kafka", "Flask", "React", "Prisma",
  "Linux", "Prometheus", "Grafana", "scikit-learn", "Tailwind CSS",
  "Node.js", "MySQL", "MongoDB", "Docker", "OpenCV", "Framer Motion",
  "Isolation Forest", "CLIP", "Express",
];

const PILLARS = [
  {
    icon: Cpu,
    title: "Systems & Software Engineering",
    body: "From daemon-less container runtimes in Python to enterprise API integrations at Schneider Electric — building things that actually run.",
    color: "var(--emerald-glow)",
  },
  {
    icon: LineChart,
    title: "Quantitative Finance",
    body: "Trade reconciliation engines, asset-class tolerance logic, anomaly detection — and a roadmap toward quant research & trading.",
    color: "var(--amber-glow)",
  },
  {
    icon: Boxes,
    title: "Applied AI & ML",
    body: "AIML specialisation at PES University, Isolation Forest anomaly models, CLIP retrieval, Siamese similarity scoring.",
    color: "var(--coral-glow)",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const featured = dataService.getFeaturedProjects();
  const major = dataService.getMajorProjects().slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* ─────────── HERO ─────────── */}
      <section
        ref={heroRef}
        className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl flex-col justify-center px-4 sm:px-6"
      >
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="flex flex-col gap-6">
          {/* availability badge */}
          <Reveal>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-glow opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-glow" />
              </span>
              {profile.location} · Open to {profile.availableFor[0]}
            </span>
          </Reveal>

          {/* eyebrow */}
          <Reveal delay={0.05}>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground/80">
              {profile.role}
            </p>
          </Reveal>

          {/* name reveal */}
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            <NameReveal name={profile.fullName} />
          </h1>

          {/* tagline */}
          <Reveal delay={0.35} className="max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {profile.tagline}
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.45} className="flex flex-wrap items-center gap-3">
            <Magnetic strength={0.4}>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform"
              >
                Explore my work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Magnetic>
            <Magnetic strength={0.3}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card/40 px-5 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-emerald-glow/40"
              >
                About me
              </Link>
            </Magnetic>
          </Reveal>

          {/* hero stats */}
          <Reveal delay={0.6} className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroStats.map((s) => (
              <div
                key={s.label}
                className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/50 p-4 backdrop-blur"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-emerald-glow to-amber-glow transition-transform duration-500 group-hover:scale-x-100" />
                <div className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  <AnimatedCounter
                    value={s.value}
                    suffix={s.suffix}
                    prefix={s.prefix}
                    decimals={s.value % 1 !== 0 ? 2 : 0}
                  />
                </div>
                <div className="mt-1 text-xs font-medium">{s.label}</div>
                {s.description && (
                  <div className="mt-0.5 text-[10px] text-muted-foreground/70">
                    {s.description}
                  </div>
                )}
              </div>
            ))}
          </Reveal>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:flex"
          animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </section>

      {/* ─────────── TECH MARQUEE ─────────── */}
      <section className="relative border-y border-border/40 bg-card/20 py-5">
        <Marquee duration={42}>
          {TECH_MARQUEE.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Sparkles className="h-3 w-3 text-emerald-glow/70" />
              {t}
            </span>
          ))}
        </Marquee>
      </section>

      {/* ─────────── PILLARS ─────────── */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-glow" />
              The intersection
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Three currents run through everything I build.
            </h2>
            <p className="text-muted-foreground">
              Not a generalist buzzword soup — a deliberate overlap between
              systems engineering, quantitative finance, and applied AI.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-5">
                  <div
                    className="absolute -right-12 -top-12 h-28 w-28 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                    style={{ background: p.color }}
                  />
                  <span
                    className="relative grid h-10 w-10 place-items-center rounded-lg border border-border/60"
                    style={{ color: p.color }}
                  >
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="relative mt-4 font-display text-base font-semibold">
                    {p.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── FEATURED WORK ─────────── */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-glow" />
              Featured work
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Projects I&apos;m known for.
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            All projects <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─────────── MORE WORK ─────────── */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
        <div className="mb-6 flex items-center gap-3">
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Also built
          </span>
          <span className="h-px flex-1 bg-border/40" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {major.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <ProjectCard project={p} index={i + featured.length} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 rounded-xl border border-border/70 px-4 py-2.5 text-sm transition-colors hover:border-emerald-glow/40"
          >
            See every project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

/* Word-by-word name reveal animation */
function NameReveal({ name }: { name: string }) {
  const words = name.split(" ");
  return (
    <span className="flex flex-col gap-1 sm:flex-row sm:gap-3">
      {words.map((word, wi) => (
        <span key={wi} className="relative inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1 + wi * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {wi === 0 ? (
              <span className="text-gradient-emerald">{word}</span>
            ) : (
              word
            )}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
