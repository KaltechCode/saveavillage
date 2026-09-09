const convertToCSV = (data: any[]) => {
  if (!data || data.length === 0) {
    return "";
  }

  const headers = Object.keys(data[0]);

  const rows = data.map((row) =>
    headers
      .map((header) => {
        const value = row[header] ?? "";

        return `"${String(value).replace(/"/g, '""')}"`;
      })
      .join(","),
  );

  return [headers.join(","), ...rows].join("\n");
};

const downloadCSV = (data: any[]) => {
  const csv = convertToCSV(data);

  const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "volunteers.csv";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};

export { convertToCSV, downloadCSV };
