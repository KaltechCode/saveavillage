import { brandedEmail, escapeHtml, transporter } from "@/libs/mail";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message, phone, organization } = body?.values ?? {};

    if (!name || !email || !message || !phone) {
      return NextResponse.json(
        { message: "Name, email, phone, and message are required." },
        { status: 400 },
      );
    }

    await transporter.sendMail({
      from: {
        name: "Save a Village",
        address: process.env.SMTP_FROM as string,
      },
      to: "info@saveavillageusa.org",
      replyTo: "admin@saveavillageusa.org",
      subject: `New contact message from ${name}`,
      html: brandedEmail({
        title: "New contact form submission",
        intro:
          "A new message has been submitted through the Save a Village website.",
        content: `
          <div style="padding:20px;background:#f5f3f6;border-left:4px solid #f6d648;">
            <p style="margin:0 0 10px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p style="margin:0 0 10px;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color:#66009b;">${escapeHtml(email)}</a></p>
            <p style="margin:0 0 10px;"><strong>Phone:</strong> ${escapeHtml(phone)}</p>
            <p style="margin:0 0 10px;"><strong>Organization:</strong> ${escapeHtml(organization || "Not provided")}</p>
            <p style="margin:0;"><strong>Message:</strong><br />${escapeHtml(message).replaceAll("\n", "<br />")}</p>
          </div>
        `,
        footer: `You can reply directly to this email to respond to ${name}.`,
      }),
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to send email.",
      },
      { status: 500 },
    );
  }
}
