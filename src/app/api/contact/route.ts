import { NextResponse } from "next/server";
import { z } from "zod";

// ─────────────────────────────────────────────────────────────
// CONTACT API — currently a no-op stub that validates input and
// returns success. Ready to be wired up later:
//
//   • Email transport: nodemailer / Resend / SendGrid
//   • Persist to DB:   use `import { db } from "@/lib/db"`
//                      and a Prisma model in prisma/schema.prisma
//   • Queue / webhooks: forward to your CRM here
//
// The front-end posts to this route from src/app/contact/page.tsx.
// ─────────────────────────────────────────────────────────────

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid input", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsed.data;

    // TODO: when ready, send an email or persist to the database here.
    // For now we just log server-side so the flow is observable.
    console.log("[contact] new message:", { name, email, subject, messageLength: message.length });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: "Contact endpoint is live. POST {name,email,subject,message}.",
  });
}
