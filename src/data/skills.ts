import type { SkillGroup } from "./types";

// ─── EDIT ME ───────────────────────────────────────────────
// Add skills inside the relevant group, or add a new group object.
// `level` is 0–100 self-reported exposure (not expert proficiency).
// ───────────────────────────────────────────────────────────

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Code2",
    color: "emerald",
    skills: [
      { name: "Python", level: 88, note: "Primary — ML, systems, finance" },
      { name: "JavaScript", level: 82, note: "Full-stack web" },
      { name: "Java", level: 72 },
      { name: "C", level: 68, note: "Systems & Arduino" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Software Engineering",
    icon: "ServerCog",
    color: "amber",
    skills: [
      { name: "Node.js + Express", level: 84 },
      { name: "Flask", level: 78 },
      { name: "REST APIs", level: 86, note: "Design + integration" },
      { name: "Prisma ORM", level: 80 },
      { name: "Spring Boot", level: 55, note: "Exposure" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "LayoutDashboard",
    color: "coral",
    skills: [
      { name: "React", level: 84 },
      { name: "Next.js", level: 82 },
      { name: "Tailwind CSS", level: 86 },
      { name: "shadcn/ui", level: 80 },
      { name: "Framer Motion", level: 76 },
    ],
  },
  {
    id: "infra",
    title: "Databases & Infrastructure",
    icon: "Database",
    color: "teal",
    skills: [
      { name: "MySQL", level: 78 },
      { name: "MongoDB", level: 74 },
      { name: "Apache Kafka", level: 70 },
      { name: "Docker (concepts)", level: 72 },
      { name: "Linux", level: 80 },
      { name: "NGINX", level: 64 },
      { name: "Jenkins", level: 60 },
      { name: "Prometheus + Grafana", level: 72 },
    ],
  },
  {
    id: "data",
    title: "Data & Analytics",
    icon: "BarChart3",
    color: "emerald",
    skills: [
      { name: "Data analysis", level: 80 },
      { name: "Statistics", level: 74 },
      { name: "Python data processing", level: 84 },
      { name: "Streamlit", level: 76 },
      { name: "scikit-learn", level: 80 },
    ],
  },
  {
    id: "fintech",
    title: "Financial Technology",
    icon: "LineChart",
    color: "amber",
    skills: [
      { name: "Trade reconciliation", level: 78 },
      { name: "Asset-class tolerances", level: 72 },
      { name: "Anomaly detection", level: 76 },
      { name: "Risk management", level: 70 },
      { name: "EOD reporting", level: 72 },
    ],
  },
];
