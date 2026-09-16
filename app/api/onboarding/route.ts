import { NextResponse } from "next/server";
import { brandedEmail, transporter } from "@/libs/mail";
import { createVerificationToken } from "@/libs/volunteerVerification";
import { createAdminClient } from "@/utils/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // return NextResponse.json({ body: body });
    // Ensure body.values exists before destructuring
    if (!body) {
      return NextResponse.json(
        { message: "Invalid request payload structure." },
        { status: 400 },
      );
    }

    const { personalInfo } = body;

    if (!personalInfo?.email || !personalInfo?.first_name) {
      return NextResponse.json(
        { message: "Your Join Us application is missing contact details." },
        { status: 400 },
      );
    }

    const email = personalInfo.email.trim().toLowerCase();
    const supabase = createAdminClient();
    const { data: existingVolunteer, error: lookupError } = await supabase
      .from("join")
      .select("email")
      .ilike("email", email)
      .maybeSingle();

    if (lookupError) {
      console.error("Join Us email lookup error:", lookupError);
      return NextResponse.json(
        { message: "We could not verify your email right now." },
        { status: 500 },
      );
    }

    if (existingVolunteer) {
      return NextResponse.json(
        {
          message:
            "A Save a Village Join Us application already exists for this email address.",
        },
        { status: 409 },
      );
    }

    const verificationBody = {
      ...body,
      personalInfo: { ...personalInfo, email },
    };

    const token = createVerificationToken(verificationBody);
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || request.url.split("/api/")[0];
    const verificationUrl = `${siteUrl}/api/onboarding/verify?token=${encodeURIComponent(token)}`;

    await transporter.sendMail({
      from: {
        name: "Save a Village",
        address: process.env.SMTP_FROM as string,
      },
      to: email,
      subject: "Confirm your Join Us application",
      html: brandedEmail({
        title: "Confirm your Join Us Application",
        intro: `Hello ${personalInfo.first_name}, please confirm your email address to submit your Join Us application.`,
        content:
          '<p style="margin:0;color:#555555;">This confirmation link expires in 30 minutes. If you did not start this application, you can safely ignore this email.</p>',
        action: { label: "Confirm my email address", url: verificationUrl },
      }),
    });

    return NextResponse.json({
      success: true,
      message:
        "Please check your email inbox/spam folder to confirm your Join Us application.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "We could not send the confirmation email for your Join Us application. Please try again.",
      },
      { status: 500 },
    );
  }
}
