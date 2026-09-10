import { createAdminClient } from "@/utils/supabase";
import { readVolunteerExportToken } from "@/libs/volunteerExport";

const VOLUNTEER_COLUMNS = [
  "id",
  "created_at",
  "name",
  "email",
  "phone",
  "state",
  "city",
  "address_1",
  "address_2",
  "country",
  "zipcode",
  "belief",
  "get_involve",
  "experience_areas",
  "inspire",
  "member_faith_community",
  "faith_community",
  "hear_about_us",
  "convicted_crime",
  "crime",
  "background_check",
  "emergency_name",
  "emergency_email",
  "emergency_phone",
  "emergency_relationship",
] as const;

const CSV_HEADERS = [
  "ID",
  "Registration Date",
  "Name",
  "Email",
  "Phone",
  "State",
  "City",
  "Address 1",
  "Address 2",
  "Country",
  "Zip Code",
  "Belief",
  "Areas of Involvement",
  "Experience Areas",
  "What Inspires Them",
  "Member of Faith Community",
  "Faith Community",
  "How They Heard About Us",
  "Convicted of Crime",
  "Crime Details",
  "Background Check",
  "Emergency Contact Name",
  "Emergency Contact Email",
  "Emergency Contact Phone",
  "Emergency Contact Relationship",
] as const;

function escapeCsvValue(value: unknown) {
  if (value === null || value === undefined) {
    return '""';
  }

  return `"${String(value).replaceAll('"', '""')}"`;
}

function recordsToCsv(records: Record<string, unknown>[]) {
  const rows = records.map((record) =>
    VOLUNTEER_COLUMNS.map((column) => escapeCsvValue(record[column])).join(","),
  );

  return `\uFEFF${CSV_HEADERS.map(escapeCsvValue).join(",")}\r\n${rows.join("\r\n")}`;
}

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token");

  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    readVolunteerExportToken(token);
  } catch (error) {
    console.error("Volunteer export token error:", error);
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("Volunteer")
      .select(VOLUNTEER_COLUMNS.join(", "))
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Volunteer export query error:", error);
      return new Response("Could not export volunteer data", { status: 500 });
    }

    return new Response(
      recordsToCsv((data ?? []) as Record<string, unknown>[]),
      {
        status: 200,
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": 'attachment; filename="volunteers.csv"',
        },
      },
    );
  } catch (error) {
    console.error("Volunteer export error:", error);
    return new Response("Could not export volunteer data", { status: 500 });
  }
}
