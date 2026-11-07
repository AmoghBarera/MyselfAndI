import type { ExperienceItem } from "./types";

// ─── EDIT ME ───────────────────────────────────────────────
// Add a new object to this array to add another work experience entry.
// ───────────────────────────────────────────────────────────

export const experiences: ExperienceItem[] = [
  {
    id: "goldman-sachs",
    company: "Goldman Sachs",
    role: "Engineering Intern (Incoming)",
    team: "Engineering Division",
    location: "Bengaluru, India",
    type: "Upcoming Internship",
    duration: "Starting January 2027",
    stipend: "Competitive",
    logoText: "GS",
    isUpcoming: true,
    summary:
      "Selected for an upcoming internship at Goldman Sachs starting January 2027. Stepping into premier institutional financial engineering at the intersection of high-throughput distributed systems and quantitative financial technology.",
    highlights: [
      "Secured incoming engineering internship offer starting January 2027.",
      "Will work on enterprise-grade distributed systems and financial market infrastructure.",
      "Direct milestone aligning core software engineering with the quantitative finance roadmap.",
      "Leveraging hands-on expertise in algorithmic problem-solving, systems design, and financial trade workflows.",
    ],
    outcome:
      "A defining career milestone bridging scalable software engineering with institutional financial markets and quantitative systems.",
    skills: [
      "Financial Systems",
      "Software Engineering",
      "Distributed Systems",
      "Quantitative Finance",
      "Algorithms & Data Structures",
    ],
  },
  {
    id: "schneider-gsc",
    company: "Schneider Electric",
    role: "Software Engineering Intern",
    team: "Global Supply Chain (GSC)",
    location: "Bengaluru, India",
    type: "3-month internship",
    duration: "June 2026 - September 2026",
    stipend: "₹35,000 / month",
    logoText: "SE",
    summary:
      "Worked inside the Global Supply Chain organisation integrating the Logs IO platform with the procurement platform — designing, testing, and instrumenting APIs that keep critical procurement signals flowing.",
    highlights: [
      "Integrated the Logs IO platform with the procurement platform end-to-end.",
      "Designed and implemented REST APIs powering procurement logging pipelines.",
      "Built test harnesses and validation suites for API integrations.",
      "Developed dashboards to monitor API call health, latency, and error rates.",
      "Identified an inactive distribution list that was silently swallowing critical alerts.",
      "Raised a ticket and drove follow-ups until the alerting issue was resolved.",
    ],
    outcome:
      "Exposure to enterprise software, API integration, observability, testing, and operational problem-solving at scale.",
    skills: [
      "REST APIs",
      "API Integration",
      "Monitoring",
      "Testing",
      "Dashboards",
      "Procurement Systems",
      "Enterprise Software",
    ],
  },
];
