"use client";

import { motion } from "framer-motion";
import type { ProjectDiagram } from "@/data/types";
import { cn } from "@/lib/utils";

/* Renders a node/edge diagram as a bespoke SVG.
   Supports three layouts: pipeline (left→right flow),
   comparison (side by side), and stack (vertical). */
export function DiagramView({
  diagram,
  accentVar = "var(--emerald-glow)",
}: {
  diagram: ProjectDiagram;
  accentVar?: string;
}) {
  if (diagram.kind === "comparison") {
    return <Comparison diagram={diagram} accentVar={accentVar} />;
  }
  if (diagram.kind === "stack") {
    return <Stack diagram={diagram} accentVar={accentVar} />;
  }
  // default: pipeline
  return <Pipeline diagram={diagram} accentVar={accentVar} />;
}

function Pipeline({ diagram, accentVar }: { diagram: ProjectDiagram; accentVar: string }) {
  const nodes = diagram.nodes;
  // arrange in a flowing path; 2 rows
  const perRow = Math.ceil(nodes.length / 2);
  const W = 760;
  const H = 280;
  const pad = 60;
  const cellW = (W - pad * 2) / Math.max(perRow - 1, 1);
  const positions = nodes.map((_, i) => {
    const row = Math.floor(i / perRow);
    const col = i % perRow;
    // snake: reverse second row
    const x = row === 0 ? pad + col * cellW : pad + (perRow - 1 - col) * cellW;
    const y = row === 0 ? 80 : H - 80;
    return { x, y };
  });

  return (
    <div className="overflow-x-auto scrollbar-slim">
      <svg viewBox={`0 0 ${W} ${H}`} className="min-w-[640px] w-full" role="img" aria-label={diagram.title}>
        {/* edges */}
        {diagram.edges.map((e, i) => {
          const from = positions[nodes.findIndex((n) => n.id === e.from)];
          const to = positions[nodes.findIndex((n) => n.id === e.to)];
          if (!from || !to) return null;
          const midX = (from.x + to.x) / 2;
          const midY = (from.y + to.y) / 2;
          return (
            <g key={i}>
              <motion.path
                d={`M ${from.x} ${from.y} Q ${midX} ${(from.y + to.y) / 2 + (from.y === to.y ? -30 : 0)} ${to.x} ${to.y}`}
                fill="none"
                stroke={accentVar}
                strokeOpacity={0.5}
                strokeWidth={1.5}
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + i * 0.12 }}
              />
              {e.label && (
                <text
                  x={midX}
                  y={midY - 4}
                  textAnchor="middle"
                  className="fill-muted-foreground text-[9px]"
                >
                  {e.label}
                </text>
              )}
            </g>
          );
        })}
        {/* nodes */}
        {nodes.map((n, i) => {
          const p = positions[i];
          return (
            <motion.g
              key={n.id}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <circle cx={p.x} cy={p.y} r={26} fill="var(--card)" stroke={accentVar} strokeOpacity={0.4} />
              <circle cx={p.x} cy={p.y} r={4} fill={accentVar} />
              <text x={p.x} y={p.y - 36} textAnchor="middle" className="fill-foreground text-[11px] font-medium">
                {n.label}
              </text>
              {n.sublabel && (
                <text x={p.x} y={p.y + 44} textAnchor="middle" className="fill-muted-foreground text-[9px]">
                  {n.sublabel}
                </text>
              )}
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

function Comparison({ diagram, accentVar }: { diagram: ProjectDiagram; accentVar: string }) {
  const [a, b] = diagram.nodes;
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {[a, b].map((node, i) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.12 }}
          className={cn(
            "rounded-xl border p-4",
            i === 0 ? "border-border/60 bg-secondary/30" : "border-emerald-glow/30 bg-secondary/20"
          )}
        >
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "grid h-7 w-7 place-items-center rounded-md text-[11px] font-semibold",
                i === 0 ? "bg-muted text-muted-foreground" : "text-foreground"
              )}
              style={i === 1 ? { background: accentVar, color: "var(--background)" } : undefined}
            >
              {i === 0 ? "A" : "B"}
            </span>
            <span className="font-display text-sm font-semibold">{node.label}</span>
          </div>
          <p className="mt-2 font-mono text-[11px] leading-relaxed text-muted-foreground">
            {node.sublabel}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

function Stack({ diagram, accentVar }: { diagram: ProjectDiagram; accentVar: string }) {
  return (
    <div className="flex flex-col gap-2">
      {diagram.nodes.map((n, i) => (
        <motion.div
          key={n.id}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="flex items-center gap-3 rounded-lg border border-border/60 bg-card/60 px-4 py-3"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md text-[11px] font-semibold text-foreground" style={{ background: accentVar, color: "var(--background)" }}>
            {i + 1}
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{n.label}</span>
            {n.sublabel && (
              <span className="text-xs text-muted-foreground">{n.sublabel}</span>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
