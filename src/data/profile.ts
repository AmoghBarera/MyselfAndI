import type { Profile, Stat } from "./types";

// ─── EDIT ME ───────────────────────────────────────────────
// Core identity. Update these values to change name, role, summary.
// ───────────────────────────────────────────────────────────

export const profile: Profile = {
  fullName: "Amogh Barera",
  shortName: "Amogh",
  initials: "AB",
  avatarInitials: "AB",
  role: "AI & Software Engineering Student",
  tagline:
    "Engineering at the intersection of intelligent systems and quantitative finance.",
  location: "Bengaluru, Karnataka, India",
  university: "PES University",
  degree: "Bachelor of Technology (B.Tech)",
  specialization: "Artificial Intelligence & Machine Learning",
  semester: "6th Semester",
  cgpa: 7.98,
  cgpaMax: 10,
  summary:
    "Amogh Barera is a B.Tech student specializing in Artificial Intelligence and Machine Learning at PES University, Bengaluru. He has experience in enterprise software development through his internship at Schneider Electric, where he has worked on API integration, monitoring, testing, and procurement platform integrations. His projects span financial trade reconciliation, lightweight container runtimes, full-stack application development, and personalized clothing recommendation systems. With a strong interest in financial markets, quantitative finance, and analytical problem-solving, Amogh aims to build a career at the intersection of technology and finance.",
  availableFor: ["Full-time SWE roles", "Quant internships", "Collaborations"],
};

// Headline stats shown on the home hero. Tweak numbers freely.
export const heroStats: Stat[] = [
  { label: "CGPA", value: 7.98, suffix: "/10", description: "PES University · AIML" },
  { label: "Internship", value: 6, suffix: " mo", description: "Schneider Electric · GSC" },
  { label: "Projects shipped", value: 9, suffix: "+", description: "Finance · Systems · CV · Web" },
  { label: "Scholarship medals", value: 4, description: "Across 6 semesters" },
];
