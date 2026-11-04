import { cn } from "@/lib/utils";

/* Maps a color token used in the data files to concrete Tailwind classes. */
export const accentMap: Record<
  string,
  {
    text: string;
    bg: string;
    border: string;
    ring: string;
    gradient: string;
    glow: string;
    dot: string;
    chartVar: string;
  }
> = {
  emerald: {
    text: "text-emerald-glow",
    bg: "bg-emerald-glow",
    border: "border-emerald-glow",
    ring: "ring-emerald-glow",
    gradient: "from-emerald-glow to-teal-glow",
    glow: "shadow-[0_0_30px_-8px_var(--emerald-glow)]",
    dot: "bg-emerald-glow",
    chartVar: "var(--emerald-glow)",
  },
  amber: {
    text: "text-amber-glow",
    bg: "bg-amber-glow",
    border: "border-amber-glow",
    ring: "ring-amber-glow",
    gradient: "from-amber-glow to-coral-glow",
    glow: "shadow-[0_0_30px_-8px_var(--amber-glow)]",
    dot: "bg-amber-glow",
    chartVar: "var(--amber-glow)",
  },
  coral: {
    text: "text-coral-glow",
    bg: "bg-coral-glow",
    border: "border-coral-glow",
    ring: "ring-coral-glow",
    gradient: "from-coral-glow to-amber-glow",
    glow: "shadow-[0_0_30px_-8px_var(--coral-glow)]",
    dot: "bg-coral-glow",
    chartVar: "var(--coral-glow)",
  },
  teal: {
    text: "text-teal-glow",
    bg: "bg-teal-glow",
    border: "border-teal-glow",
    ring: "ring-teal-glow",
    gradient: "from-teal-glow to-emerald-glow",
    glow: "shadow-[0_0_30px_-8px_var(--teal-glow)]",
    dot: "bg-teal-glow",
    chartVar: "var(--teal-glow)",
  },
};

export function accent(color: string) {
  return accentMap[color] ?? accentMap.emerald;
}

export function accentText(color: string) {
  return accent(color).text;
}

export function joinClass(...values: (string | false | undefined)[]) {
  return cn(...values);
}
