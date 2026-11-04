import type { ExperienceItem } from "./types";

// ─── EDIT ME ───────────────────────────────────────────────
// Add a new object to this array to add another work experience entry.
// ───────────────────────────────────────────────────────────

export const experiences: ExperienceItem[] = [
  {
    id: "schneider-gsc",
    company: "Schneider Electric",
    role: "Software Engineering Intern",
    team: "Global Supply Chain (GSC)",
    location: "Bengaluru, India",
    type: "6-month internship",
    duration: "2024 — 2025",
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
