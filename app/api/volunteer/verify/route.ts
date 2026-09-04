import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { joinUsSchema } from "@/utils/schema";
import { readVerificationToken } from "@/libs/volunteerVerification";
import { brandedEmail } from "@/libs/mail";

function createClient(cookieStore: Awaited<ReturnType<typeof cookies>>) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
      process.env.PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (cookiesToSet) => {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // Cookie writes are unavailable in this route's read-only context.
          }
        },
      },
    },
  );
}

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
    const supabase = createClient(await cookies());
    const { error } = await supabase.from("Volunteer").insert({
      name: `${personalInfo.first_name} ${personalInfo.last_name}`,
      email: personalInfo.email,
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
    });

    if (error) {
      console.error("Volunteer application error:", error);
      return verificationError(
        "We could not submit your volunteer application right now.",
        500,
      );
    }

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ?? new URL(request.url).origin;
    return NextResponse.redirect(new URL("/", siteUrl));
  } catch (error) {
    console.error("Volunteer verification error:", error);
    return verificationError(
      "We could not confirm this volunteer application.",
      400,
    );
  }
}
