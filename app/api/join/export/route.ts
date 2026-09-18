import { createAdminClient } from "@/utils/supabase";
import { applicationRecordToCsv } from "@/libs/csvExport";
import { readJoinExportToken } from "@/libs/exportTokens";

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token");

  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  let joinId: string;

  try {
    joinId = readJoinExportToken(token);
  } catch (error) {
    console.error("Join Us export token error:", error);
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("join")
      .select("*")
      .eq("id", joinId)
      .maybeSingle();

    if (error) {
      console.error("Join Us export query error:", error);
      return new Response("Could not export Join Us data", { status: 500 });
    }

    if (!data) {
      return new Response("Join Us application not found", { status: 404 });
    }

    return new Response(
      applicationRecordToCsv(data as unknown as Record<string, unknown>),
      {
        status: 200,
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": `attachment; filename="join-us-${joinId}.csv"`,
        },
      },
    );
  } catch (error) {
    console.error("Join Us export error:", error);
    return new Response("Could not export Join Us data", { status: 500 });
  }
}
