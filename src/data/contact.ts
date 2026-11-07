import type { ContactChannel, FooterLink } from "./types";
import { profile } from "./profile";

// ─── EDIT ME ───────────────────────────────────────────────
// Update statuses / add hrefs when you have real contact links.
// status: "available" | "on-request" | "unavailable"
// ───────────────────────────────────────────────────────────

export const contactChannels: ContactChannel[] = [
  {
    id: "email",
    label: "Email",
    value: "Available on request",
    status: "on-request",
    icon: "Mail",
  },
  {
    id: "phone",
    label: "Phone",
    value: "Available on request",
    status: "on-request",
    icon: "Phone",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/amogh-barera-0b1056317/",
    status: "available",
    icon: "Linkedin",
  },
  {
    id: "github",
    label: "GitHub",
    value: "https://github.com/AmoghBarera",
    status: "available",
    icon: "Github",
  },
  {
    id: "portfolio",
    label: "Portfolio",
    value: "You're looking at it",
    status: "available",
    icon: "Globe",
  },
  {
    id: "location",
    label: "Location",
    value: profile.location,
    status: "available",
    icon: "MapPin",
  },
];

export const footerLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Ambitions", href: "/ambitions" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
];
