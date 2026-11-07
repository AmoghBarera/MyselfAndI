// ─────────────────────────────────────────────────────────────
// DATA SERVICE
//
// All portfolio content is read through this module.
// Today it reads from the static TypeScript files in `@/data/*`.
//
// 👉 When you add a backend, replace the bodies of these functions
//    with `fetch("/api/...")` calls — the rest of the app won't
//    need to change. A Prisma client is already wired at `@/lib/db`.
// ─────────────────────────────────────────────────────────────

import { profile, heroStats } from "@/data/profile";
import { experiences } from "@/data/experience";
import {
  projects,
  featuredProjects,
  majorProjects,
  sideProjects,
} from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { ambitions, quantDirections } from "@/data/ambitions";
import {
  academicAchievements,
  certifications,
  leadershipAchievements,
} from "@/data/achievements";
import { contactChannels, footerLinks } from "@/data/contact";
import { navLinks } from "@/data/nav";

export const dataService = {
  // Simulate latency for future API swap. Keep 0 in production.
  getProfile: () => profile,
  getHeroStats: () => heroStats,
  getNav: () => navLinks,
  getFooterLinks: () => footerLinks,
  getExperiences: () => experiences,
  getProjects: () => projects,
  getFeaturedProjects: () => featuredProjects,
  getMajorProjects: () => majorProjects,
  getSideProjects: () => sideProjects,
  getSkillGroups: () => skillGroups,
  getAmbitions: () => ambitions,
  getQuantDirections: () => quantDirections,
  getAcademicAchievements: () => academicAchievements,
  getCertifications: () => certifications,
  getLeadershipAchievements: () => leadershipAchievements,
  getContactChannels: () => contactChannels,
};

export type DataService = typeof dataService;
