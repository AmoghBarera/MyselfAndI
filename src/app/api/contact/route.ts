import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// ─────────────────────────────────────────────────────────────
// CONTACT API — validates input and dispatches email via Resend
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

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL;

    if (apiKey && recipientEmail) {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: recipientEmail,
        replyTo: email,
        subject: `[Portfolio Contact] ${subject} from ${name}`,
        text: `You received a new message from your portfolio:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #eaeaea; border-radius: 12px; background: #ffffff;">
            <h2 style="color: #111; margin-top: 0; margin-bottom: 16px; font-size: 20px;">New Message from Portfolio</h2>
            <div style="background: #f9f9f9; padding: 12px 16px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 4px 0; font-size: 14px;"><strong>From:</strong> ${name}</p>
              <p style="margin: 4px 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #10b981;">${email}</a></p>
              <p style="margin: 4px 0; font-size: 14px;"><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 6px;">Message:</p>
              <p style="white-space: pre-wrap; color: #222; line-height: 1.6; font-size: 15px; margin: 0;">${message}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #eaeaea; margin: 24px 0 16px 0;" />
            <p style="font-size: 12px; color: #999; margin: 0;">Tip: You can hit <strong>Reply</strong> in your email client to directly reply to ${email}.</p>
          </div>
        `,
      });

      if (error) {
        console.error("[contact] Resend dispatch error:", error);
        return NextResponse.json(
          { ok: false, error: "Failed to dispatch email" },
          { status: 500 }
        );
      }

      console.log(`[contact] Email sent successfully to ${recipientEmail} from ${email}`);
    } else {
      console.log("[contact] (RESEND_API_KEY or CONTACT_RECEIVER_EMAIL not set — logging to console):", {
        name,
        email,
        subject,
        message,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Server error:", err);
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
