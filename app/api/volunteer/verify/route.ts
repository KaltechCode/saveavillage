import { NextResponse } from "next/server";
import { joinUsSchema } from "@/utils/schema";
import { readVerificationToken } from "@/libs/volunteerVerification";
import { brandedEmail, transporter } from "@/libs/mail";
import { createAdminClient } from "@/utils/supabase";
import { createVolunteerExportToken } from "@/libs/volunteerExport";

function verificationError(message: string, status: number) {
  return new Response(
    brandedEmail({
      title: "We could not confirm your application",
      intro: message,
      content:
        '<p style="margin:0;color:#555555;">Please return to the Save a Village website and try again. If the problem continues, contact our team for help.</p>',
      action: {
        label: "Return to Save a Village",
        url: process.env.NEXT_PUBLIC_SITE_URL ?? "/",
      },
    }),
    {
      status,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    },
  );
}

export async function GET(request: Request) {
  try {
    const token = new URL(request.url).searchParams.get("token");

    if (!token) {
      return verificationError(
        "The confirmation link is missing its token.",
        400,
      );
    }

    const parsed = joinUsSchema.safeParse(readVerificationToken(token));

    if (!parsed.success) {
      return verificationError(
        "This confirmation link is invalid or has expired.",
        400,
      );
    }

    const {
      belief,
      personalInfo,
      personalInterest,
      background,
      background_history,
      emergency_contact,
    } = parsed.data;
    const supabase = createAdminClient();
    const email = personalInfo.email.trim().toLowerCase();
    const { data: existingVolunteer, error: lookupError } = await supabase
      .from("Volunteer")
      .select("email")
      .ilike("email", email)
      .maybeSingle();

    if (lookupError) {
      console.error("Volunteer email lookup error:", lookupError);
      return verificationError(
        "We could not submit your volunteer application right now.",
        500,
      );
    }

    if (existingVolunteer) {
      return verificationError(
        "A volunteer application already exists for this email address.",
        409,
      );
    }

    const { data, error } = await supabase
      .from("Volunteer")
      .insert({
        name: `${personalInfo.first_name} ${personalInfo.last_name}`,
        email,
        phone: personalInfo.phone,
        state: personalInfo.state,
        city: personalInfo.city,
        address_1: personalInfo.address_1,
        address_2: personalInfo.address_2 ?? "",
        country: personalInfo.country,
        zipcode: personalInfo.zipcode,
        belief,
        get_involve: personalInterest.involved.join(", "),
        experience_areas: personalInterest.experience.join(", "),
        inspire: personalInterest.inspired,
        member_faith_community: background.faith_community,
        faith_community: background.faith_journey,
        hear_about_us: background.hear_about.join(", "),
        convicted_crime: background_history.crime,
        crime: background_history.crime_details ?? "",
        background_check: background_history.background_check,
        emergency_name: `${emergency_contact.first_name} ${emergency_contact.last_name}`,
        emergency_email: emergency_contact.email,
        emergency_phone: emergency_contact.phone,
        emergency_relationship: emergency_contact.relationship,
      })
      .select()
      .single();

    if (error) {
      if (error.code === "23505") {
        return verificationError(
          "A volunteer application already exists for this email address.",
          409,
        );
      }

      console.error("Volunteer application error:", error);
      return verificationError(
        "We could not submit your volunteer application right now.",
        500,
      );
    }

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ?? new URL(request.url).origin;
    const exportToken = createVolunteerExportToken();
    const exportUrl = `${siteUrl.replace(/\/$/, "")}/api/volunteers/export?token=${encodeURIComponent(exportToken)}`;

    await transporter.sendMail({
      from: {
        name: "Save a Village",
        address: process.env.SMTP_FROM as string,
      },
      to: "test@kaltechconsultancy.tech",
      subject: "New volunteer application",
      html: brandedEmail({
        title: "New volunteer application",
        intro: `A new volunteer application has been submitted.`,
        content: '<p style="margin:0;color:#555555;">.</p>',
        csv: true,
        action: { label: "Download CSV", url: exportUrl },
      }),
    });

    return NextResponse.redirect(new URL("/thank-you", siteUrl));
    // return NextResponse.json({
    //   success: true,
    //   message: "Your volunteer application has been submitted successfully.",
    // });
  } catch (error) {
    console.error("Volunteer verification error:", error);
    return verificationError(
      "We could not confirm this volunteer application.",
      400,
    );
  }
}
