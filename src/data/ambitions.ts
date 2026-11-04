import type { AmbitionPhase } from "./types";

// ─── EDIT ME ───────────────────────────────────────────────
// Each phase is one column on the ambitions roadmap.
// Add goals to the array to extend a phase.
// ───────────────────────────────────────────────────────────

export const ambitions: AmbitionPhase[] = [
  {
    id: "short",
    period: "2026 — 2027",
    title: "Foundation & Placement",
    color: "emerald",
    focus: "Land a strong full-time software engineering role.",
    goals: [
      "Secure a strong full-time placement.",
      "Target product-based technology companies.",
      "Aim for compensation above ₹20 LPA.",
      "Build a strong software engineering foundation.",
      "Leverage the Schneider Electric internship experience.",
    ],
  },
  {
    id: "medium",
    period: "2027 — 2029",
    title: "Quant Transition",
    color: "amber",
    focus: "Pivot toward quantitative finance & quant development.",
    goals: [
      "Transition toward quantitative finance or quant-related roles.",
      "Build knowledge of financial markets, probability, statistics, and mathematical modelling.",
      "Develop strong programming and algorithmic problem-solving skills.",
      "Explore quantitative research, quant development, and trading-related roles.",
    ],
  },
  {
    id: "long",
    period: "2029+",
    title: "Scale & Entrepreneurship",
    color: "coral",
    focus: "Build a high-paying career at the intersection of tech & finance.",
    goals: [
      "Build a high-paying career at the intersection of technology and finance.",
      "Explore an MBA at ISB Hyderabad.",
      "Develop entrepreneurial opportunities and potentially build a startup.",
      "Establish additional income streams through investments and digital projects.",
    ],
  },
];

// The quant specialisation areas explored.
export const quantDirections: string[] = [
  "Quantitative Research",
  "Quantitative Development",
  "Quantitative Trading",
  "Statistical Arbitrage",
  "Financial Modelling",
  "Risk Management",
  "Trading Infrastructure",
];
