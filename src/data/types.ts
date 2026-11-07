export interface Profile {
  fullName: string;
  shortName: string;
  initials: string;
  avatarInitials: string;
  role: string;
  tagline: string;
  location: string;
  university: string;
  degree: string;
  specialization: string;
  semester: string;
  cgpa: number;
  cgpaMax: number;
  summary: string;
  availableFor: string[];
  linkedin?: string;
  github?: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description?: string;
}

export interface Achievement {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: string;
  issuer?: string;
  date?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  team: string;
  location: string;
  type: string;
  duration: string;
  stipend?: string;
  logoText: string;
  summary: string;
  highlights: string[];
  outcome: string;
  skills: string[];
  isUpcoming?: boolean;
}

export interface AmbitionPhase {
  id: string;
  period: string;
  title: string;
  color: string;
  focus: string;
  goals: string[];
}

export type QuantDirection = string;

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  
  href: string;
  icon: string;
  primary?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  num?: string;
}

export interface SkillItem {
  name: string;
  level?: number;
  context?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  skills: SkillItem[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectDiagramNode {
  id: string;
  label: string;
  sub?: string;
  color?: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  role?: string;
  tier?: "featured" | "major" | "side";
  featured?: boolean;
  metrics?: ProjectMetric[];
  techStack: string[];
  specs?: ProjectSpec[];
  architecture?: string[];
  highlights?: string[];
  challenges?: string[];
  diagram?: ProjectDiagramNode[];
  githubUrl?: string;
  liveUrl?: string;
}

