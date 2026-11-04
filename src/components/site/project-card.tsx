"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/types";
import { accent } from "@/lib/accent";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  index = 0,
  className,
}: {
  project: Project;
  index?: number;
  className?: string;
}) {
  const a = accent(project.color);
  return (
    <Link
      href={`/projects#${project.slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-2xl border border-border/60 bg-card/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-border shimmer-border",
        className
      )}
    >
      {/* accent wash */}
      <div
        className={cn(
          "absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-40",
          "bg-gradient-to-br",
          a.gradient
        )}
      />

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "grid h-9 w-9 place-items-center rounded-lg border text-xs font-semibold",
              a.border,
              "border-border/60"
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
              {project.year}
            </span>
            <span className={cn("text-[11px] font-medium", a.text)}>
              {project.category}
            </span>
          </div>
        </div>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>

      <h3 className="relative mt-4 font-display text-xl font-semibold tracking-tight">
        {project.name}
      </h3>
      <p className="relative mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {project.tagline}
      </p>

      {project.metrics.length > 0 && (
        <div className="relative mt-4 flex flex-wrap gap-1.5">
          {project.metrics.slice(0, 3).map((m) => (
            <span
              key={m.label}
              className="inline-flex items-center gap-1 rounded-md border border-border/50 bg-secondary/40 px-2 py-1 text-[10px] text-muted-foreground"
            >
              <span className="text-foreground/80">{m.value}</span>
              <span className="text-muted-foreground/60">·</span>
              {m.label}
            </span>
          ))}
        </div>
      )}

      <div className="relative mt-4 flex flex-wrap gap-1">
        {project.techStack.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-md bg-secondary/50 px-2 py-0.5 text-[11px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="rounded-md px-2 py-0.5 text-[11px] text-muted-foreground/60">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>
    </Link>
  );
}

export function ProjectCardGrid({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
    >
      {projects.map((p, i) => (
        <motion.div
          key={p.id}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <ProjectCard project={p} index={i} />
        </motion.div>
      ))}
    </motion.div>
  );
}
