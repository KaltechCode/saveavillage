import { transporter } from "@/libs/mail";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message, phone, organization } = body.values;

    if (!name || !email || !message || !phone || !organization) {
      return NextResponse.json(
        { message: "All credential are required" },
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
      subject: `New message from ${name}`,
      html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
    <div style="padding: 24px; background-color: rgb(102, 0, 155); border-bottom: 3px solid #f3f3f3;">
      <h2 style="margin: 0; color: #fff; font-weight: 600; text-align: center;">New Contact Form Submission</h2>
      <p style="margin: 6px 0 0; color: #fff; text-align: center;">
        A new message has been submitted through your website.
      </p>
    </div>

    <div style="padding: 24px; background-color: rgb(102, 0, 155);">
      <h3 style="margin-top: 0; color: #fff; font-size: 20px; font-weight: 500;">Contact Details</h3>

      <p style="color: #fff;">
        <strong>Name:</strong><br />
        ${name}
      </p>

      <p style="color: #fff;">
        <strong>Email Address:</strong><br />
        <a href="mailto:${email}" style="color: rgb(246, 214, 72);">
          ${email}
        </a>
      </p>

      <div style="margin-top: 24px; color: #fff;">
        <h3 style="margin-bottom: 8px; color: #fff; font-size: 20px; font-weight:700;">Message</h3>

        <div style="padding: 16px; background-color: rgb(102, 0, 155); border-left: 4px solid rgb(102, 0, 155);">
          <p style="margin: 0; white-space: pre-line; color: #fff;">
            ${message}
          </p>
        </div>
      </div>
    </div>

    <div style="padding: 20px 24px; background-color: rgb(102, 0, 155); color: #777; font-size: 13px;">
      <p style="margin: 0; color: #fff; text-align:center;">
        This message was submitted through the website contact form.
      </p>
      <p style="margin: 2px 0 0; color: #fff; text-align:center;">
        You can reply directly to this email to respond to ${name}.
      </p>
    </div>
  </div>
`,
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
        message: error || "Failed to send email",
      },
      { status: 500 },
    );
  }
}
