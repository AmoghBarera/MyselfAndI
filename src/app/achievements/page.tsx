"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, BadgeCheck, Trophy } from "lucide-react";
import { dataService } from "@/lib/data-service";
import { getIcon } from "@/lib/icons";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/motion";
import { AnimatedHeading } from "@/components/site/animated-heading";

export default function AchievementsPage() {
  const academic = dataService.getAcademicAchievements();
  const certs = dataService.getCertifications();
  const leadership = dataService.getLeadershipAchievements();

  const sections = [
    {
      id: "academic",
      eyebrow: "Academic",
      icon: Award,
      color: "var(--emerald-glow)",
      title: "In the classroom",
      description: "Recognition earned across six semesters at PES University.",
      items: academic,
    },
    {
      id: "certifications",
      eyebrow: "Certifications",
      icon: BadgeCheck,
      color: "var(--amber-glow)",
      title: "Credentials that compound",
      description: "Formal certifications backing the practical work.",
      items: certs,
    },
    {
      id: "leadership",
      eyebrow: "Leadership & extracurricular",
      icon: Trophy,
      color: "var(--coral-glow)",
      title: "Beyond academics",
      description: "Captaincies, competitions, and sport — the full picture.",
      items: leadership,
    },
  ];

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      {/* header */}
      <div className="mb-12 flex flex-col gap-3">
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-coral-glow" />
          06 — Achievements
        </span>
        <AnimatedHeading
          text="Evidence, not claims."
          accent="not claims."
          accentClass="text-gradient-warm italic"
          className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        />
        <p className="max-w-2xl text-muted-foreground">
          Scholarship medals, formal certifications, and the leadership &
          sport record that rounds out the profile.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        {sections.map((sec) => (
          <section key={sec.id} id={sec.id} className="scroll-mt-24">
            <Reveal className="mb-6 flex items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <span
                  className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground"
                >
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: sec.color }}
                  />
                  {sec.eyebrow}
                </span>
                <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {sec.title}
                </h2>
                <p className="max-w-xl text-sm text-muted-foreground">
                  {sec.description}
                </p>
              </div>
              <sec.icon
                className="hidden h-8 w-8 opacity-30 sm:block"
                style={{ color: sec.color }}
              />
            </Reveal>

            <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" gap={0.07}>
              {sec.items.map((item) => {
                const Icon = getIcon(item.icon);
                return (
                  <StaggerItem key={item.id}>
                    <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/88 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-border shimmer-border">
                      <div
                        className="absolute -right-12 -top-12 h-24 w-24 rounded-full opacity-15 blur-2xl transition-opacity group-hover:opacity-30"
                        style={{ background: sec.color }}
                      />
                      <div className="relative flex items-start gap-3">
                        <span
                          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border/50 transition-transform group-hover:scale-110"
                          style={{ color: sec.color }}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="flex flex-col gap-1">
                          <h3 className="font-display text-base font-semibold leading-snug">
                            {item.title}
                          </h3>
                          {item.issuer && (
                            <span className="text-xs font-medium" style={{ color: sec.color }}>
                              {item.issuer}
                            </span>
                          )}
                          {item.date && (
                            <span className="text-[11px] text-muted-foreground/60">
                              {item.date}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      <div className="relative mt-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground/50">
                        {item.category}
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </section>
        ))}
      </div>

      {/* closing CTA */}
      <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-border/60 bg-card/88 p-8 text-center">
        <h3 className="font-display text-2xl font-semibold tracking-tight">
          The next achievement is in progress.
        </h3>
        <p className="max-w-md text-sm text-muted-foreground">
          Aiming for a strong full-time placement in 2026, then the quant
          pivot. The full plan lives on the ambitions page.
        </p>
        <Link
          href="/ambitions"
          className="inline-flex items-center gap-2 rounded-xl border border-border/70 px-5 py-3 text-sm font-medium transition-colors hover:border-coral-glow/40"
        >
          See the roadmap
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
