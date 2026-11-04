"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send, AlertCircle, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { dataService } from "@/lib/data-service";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/animations/motion";
import { AnimatedHeading } from "@/components/site/animated-heading";

const schema = z.object({
  name: z.string().min(2, "Tell me who you are"),
  email: z.string().email("A valid email helps me reply"),
  subject: z.string().min(3, "Add a short subject"),
  message: z.string().min(10, "A little more context, please"),
});

type FormValues = z.infer<typeof schema>;

const STATUS_META = {
  available: { label: "Available", color: "var(--emerald-glow)" },
  "on-request": { label: "On request", color: "var(--amber-glow)" },
  unavailable: { label: "Not yet public", color: "var(--coral-glow)" },
} as const;

export default function ContactPage() {
  const channels = dataService.getContactChannels();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  async function onSubmit(values: FormValues) {
    setError(null);
    try {
      // 👇 Swap this to a real transport later — see src/app/api/contact/route.ts
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      reset();
    } catch {
      setError("Something went wrong sending the message. Try again.");
    }
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      {/* header */}
      <div className="mb-12 flex flex-col gap-3">
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-glow" />
          07 — Contact
        </span>
        <AnimatedHeading
          text="Let's build something."
          accent="something."
          className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        />
        <p className="max-w-2xl text-muted-foreground">
          Open to full-time SWE roles, quant internships, and collaborations.
          Email and phone are shared on request — drop a note below and
          I&apos;ll get back to you.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        {/* channels */}
        <Reveal className="flex flex-col gap-4">
          <div className="rounded-2xl border border-border/60 bg-card/88 p-6 backdrop-blur">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
              Channels
            </span>
            <div className="mt-4 flex flex-col gap-2">
              {channels.map((c) => {
                const Icon = getIcon(c.icon);
                const meta = STATUS_META[c.status];
                return (
                  <div
                    key={c.id}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-border/50 bg-background/86 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-lg border border-border/50 text-muted-foreground transition-colors group-hover:text-foreground">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{c.label}</span>
                        <span className="text-xs text-muted-foreground">{c.value}</span>
                      </div>
                    </div>
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-medium"
                      style={{
                        borderColor: `color-mix(in oklch, ${meta.color} 35%, transparent)`,
                        color: meta.color,
                      }}
                    >
                      <span
                        className="inline-block h-1.5 w-1.5 rounded-full"
                        style={{ background: meta.color }}
                      />
                      {meta.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/88 p-6 backdrop-blur">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
              Based in
            </span>
            <p className="mt-2 font-display text-lg font-semibold">
              {profile.location}
            </p>
            <p className="text-sm text-muted-foreground">
              {profile.university} · {profile.semester}
            </p>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-emerald-glow/20 bg-emerald-glow/5 p-4">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-emerald-glow" />
            <p className="text-xs leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Want more details added?</span>{" "}
              This portfolio is data-driven — every section reads from typed
              files in <code className="rounded bg-secondary/60 px-1 font-mono">src/data/</code>.
              Add a new project, skill, or achievement there and it shows up
              automatically. A backend can be slotted in later via{" "}
              <code className="rounded bg-secondary/60 px-1 font-mono">src/lib/data-service.ts</code>.
            </p>
          </div>
        </Reveal>

        {/* form */}
        <Reveal delay={0.1} className="flex flex-col">
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/88 p-6 backdrop-blur sm:p-8">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-glow/15 blur-3xl" />
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="relative flex flex-col items-center gap-3 py-12 text-center"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-emerald-glow/40 bg-emerald-glow/10">
                    <CheckCircle2 className="h-7 w-7 text-emerald-glow" />
                  </span>
                  <h3 className="font-display text-xl font-semibold">
                    Message queued.
                  </h3>
                  <p className="max-w-sm text-sm text-muted-foreground">
                    Thanks for reaching out. I&apos;ll get back to you as soon
                    as I can.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-border/70 px-3 py-2 text-sm transition-colors hover:border-emerald-glow/40"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="relative flex flex-col gap-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Your name" error={errors.name?.message}>
                      <input
                        {...register("name")}
                        placeholder="Jane Doe"
                        className="w-full rounded-lg border border-border/60 bg-background/90 px-3 py-2.5 text-sm outline-none transition-colors focus:border-emerald-glow/50"
                      />
                    </Field>
                    <Field label="Email" error={errors.email?.message}>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="jane@company.com"
                        className="w-full rounded-lg border border-border/60 bg-background/90 px-3 py-2.5 text-sm outline-none transition-colors focus:border-emerald-glow/50"
                      />
                    </Field>
                  </div>
                  <Field label="Subject" error={errors.subject?.message}>
                    <input
                      {...register("subject")}
                      placeholder="An opportunity, a collaboration, a question"
                      className="w-full rounded-lg border border-border/60 bg-background/90 px-3 py-2.5 text-sm outline-none transition-colors focus:border-emerald-glow/50"
                    />
                  </Field>
                  <Field label="Message" error={errors.message?.message}>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Tell me what you're working on, or what you'd like to discuss."
                      className="w-full resize-none rounded-lg border border-border/60 bg-background/90 px-3 py-2.5 text-sm outline-none transition-colors focus:border-emerald-glow/50"
                    />
                  </Field>

                  {error && (
                    <div className="flex items-center gap-2 rounded-lg border border-coral-glow/30 bg-coral-glow/5 p-3 text-sm text-coral-glow">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground/80">
        {label}
      </span>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={cn("text-xs text-coral-glow")}
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
}
