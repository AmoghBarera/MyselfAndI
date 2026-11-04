import type { Achievement } from "./types";

// ─── EDIT ME ───────────────────────────────────────────────
// Add achievements by appending to the relevant array.
// `icon` should match a Lucide icon name (see src/lib/icons.ts map).
// ───────────────────────────────────────────────────────────

export const academicAchievements: Achievement[] = [
  {
    id: "scholarship-medals",
    category: "Academic",
    title: "4 Scholarship Medals",
    description: "Awarded four scholarship medals across six semesters at PES University.",
    icon: "Medal",
  },
  {
    id: "cgpa",
    category: "Academic",
    title: "CGPA 7.98 / 10",
    description: "Strong academic standing in the B.Tech AIML programme.",
    icon: "GraduationCap",
  },
];

export const certifications: Achievement[] = [
  {
    id: "dsml",
    category: "Certification",
    title: "Data Science and Machine Learning",
    description: "Certification covering core data science and machine learning concepts.",
    icon: "BrainCircuit",
  },
  {
    id: "risk-mgmt",
    category: "Certification",
    title: "Introduction to Risk Management",
    issuer: "New York Institute of Finance",
    description:
      "Foundational risk-management certification from NYIF — grounding for the quant finance transition.",
    icon: "ShieldCheck",
  },
];

export const leadershipAchievements: Achievement[] = [
  {
    id: "school-captain",
    category: "Leadership",
    title: "School Captain (9th Grade)",
    description: "Elected school captain, leading peers and representing the student body.",
    icon: "Crown",
  },
  {
    id: "marching-win",
    category: "Extracurricular",
    title: "Marching Competition Winner",
    description: "Participated in and won an inter-school marching competition.",
    icon: "Flag",
  },
  {
    id: "volleyball-captain",
    category: "Sports",
    title: "Volleyball Team Captain",
    description: "Captained the school volleyball team.",
    icon: "Volleyball",
  },
  {
    id: "cricket",
    category: "Sports",
    title: "Cricket — School & Clubs",
    description: "Played cricket for school and club teams.",
    icon: "Activity",
  },
  {
    id: "football-motm",
    category: "Sports",
    title: "Football — Man of the Match",
    description: "Earned Man of the Match recognition in football.",
    icon: "Trophy",
  },
];
