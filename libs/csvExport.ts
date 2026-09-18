export function escapeCsvValue(value: unknown) {
  if (value === null || value === undefined || value === "") {
    return '""';
  }

  return `"${String(value).replaceAll('"', '""')}"`;
}

export function recordsToCsv(
  records: Array<Record<string, unknown>>,
  columns: readonly string[],
  headers: readonly string[],
) {
  const rows = records.map((record) =>
    columns.map((column) => escapeCsvValue(record[column])).join(","),
  );

  return `\uFEFF${headers.map(escapeCsvValue).join(",")}\r\n${rows.join("\r\n")}`;
}

export const APPLICATION_CSV_COLUMNS = [
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

export const APPLICATION_CSV_HEADERS = [
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

export function applicationRecordToCsv(record: Record<string, unknown>) {
  return recordsToCsv(
    [record],
    APPLICATION_CSV_COLUMNS,
    APPLICATION_CSV_HEADERS,
  );
}
