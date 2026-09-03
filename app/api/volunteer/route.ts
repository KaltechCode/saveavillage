import { NextResponse } from "next/server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { transporter } from "@/libs/mail";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const createClient = (
  cookieStore: Awaited<ReturnType<typeof cookies>>,
) => {
  return createServerClient(
    "https://vjtzngvkmqyopecrxaeb.supabase.co",
    "sb_publishable_cAM8IA2LtrEydOAtUb_RAg_wOE3Jqnz",
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
};

export async function POST(request: Request) {
  try {
    // 1. Initialize cookies and Supabase INSIDE the handler
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const body = await request.json();

    // return NextResponse.json({ body: body });

    // Ensure body.values exists before destructuring
    if (!body) {
      return NextResponse.json(
        { message: "Invalid request payload structure." },
        { status: 400 },
      );
    }

    const {
      belief,
      personalInfo,
      personalInterest,
      background,
      background_history,
      emergency_contact,
    } = body;

    const { data, error } = await supabase.from("Volunteer").insert({
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
      console.error("Volunteer insert failed:", error);
      return NextResponse.json(
        { message: error.message || "Failed to save data to the database." },
        { status: 500 },
      );
    }

    await transporter.sendMail({
      from: {
        name: "Save a Village",
        address: process.env.SMTP_FROM as string,
      },
      to: "info@saveavillageusa.org",
      replyTo: "admin@saveavillageusa.org",
      subject: `New Volunteer ${personalInfo.first_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <div style="padding: 24px; background-color: rgb(102, 0, 155); border-bottom: 3px solid #f3f3f3;">
            <h2 style="margin: 0; color: #fff; font-weight: 600; text-align: center;">New Volunteer Form Submission</h2>
            <p style="margin: 6px 0 0; color: #fff; text-align: center;">
              A new message has been submitted through your website.
            </p>
          </div>
      
          <div style="padding: 24px; background-color: rgb(102, 0, 155);">
            <h3 style="margin-top: 0; color: #fff; font-size: 20px; font-weight: 500;">Contact Details</h3>
      
            <p style="color: #fff;">
              <strong>Name:</strong><br />
              ${personalInfo.first_name}
            </p>
      
            <p style="color: #fff;">
              <strong>Email Address:</strong><br />
              <a href="mailto:${personalInfo.email}" style="color: rgb(246, 214, 72);">
                ${personalInfo.email}
              </a>
            </p>
      
            <div style="margin-top: 24px; color: #fff;">
              <h3 style="margin-bottom: 8px; color: #fff; font-size: 20px; font-weight:700;">Message</h3>
      
              <div style="padding: 16px; background-color: rgb(102, 0, 155); border-left: 4px solid rgb(102, 0, 155);">
                <p style="margin: 0; white-space: pre-line; color: #fff;">
                  ${personalInfo.message}
                </p>
              </div>
            </div>
          </div>
      
          <div style="padding: 20px 24px; background-color: rgb(102, 0, 155); color: #777; font-size: 13px;">
            <p style="margin: 0; color: #fff; text-align:center;">
              This message was submitted through the website Volunteer form.
            </p>
            <p style="margin: 2px 0 0; color: #fff; text-align:center;">
              You can reply directly to this email to respond to ${personalInfo.first_name}.
            </p>
          </div>
        </div>
      `,
    });

    // 3. Successful execution path
    return NextResponse.json({
      success: true,
      message: "Data saved successfully",
    });
  } catch (error: any) {
    // Safe fallback handling for system/parsing exceptions
    return NextResponse.json(
      { message: error?.message || "An unexpected error occurred" },
      { status: 400 },
    );
  }
}
