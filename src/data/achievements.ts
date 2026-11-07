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
    title: "CGPA 8.14 / 10",
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
  {
    id: "aws-ai-fundamentals",
    category: "Certification",
    title: "AWS: AI Fundamentals and the Cloud",
    issuer: "Amazon Web Services · Coursera",
    description:
      "Foundational certification covering artificial intelligence, machine learning, and cloud infrastructure on AWS.",
    icon: "Cloud",
  },
  {
    id: "aws-ideas-to-life",
    category: "Certification",
    title: "AWS: Bringing Ideas to Life Using AI",
    issuer: "Amazon Web Services · Coursera",
    description:
      "Hands-on certification applying generative AI and AWS intelligence capabilities to create real-world solutions.",
    icon: "Sparkles",
  },
  {
    id: "aws-generative-ai-pro",
    category: "Certification",
    title: "AWS Professional: Generative AI",
    issuer: "Amazon Web Services · Coursera",
    description:
      "Advanced professional certification in generative AI concepts, foundation models, and cloud-native AI engineering on AWS.",
    icon: "BrainCircuit",
  },
  {
    id: "aws-services-ai-solutions",
    category: "Certification",
    title: "AWS Services for AI Solutions",
    issuer: "Amazon Web Services · Coursera",
    description:
      "Deep dive into specialized AWS AI services, deployment pipelines, and scalable cloud AI architecture.",
    icon: "ServerCog",
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
