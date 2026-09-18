import crypto from "node:crypto";

const EXPORT_TOKEN_TTL_MS = 24 * 60 * 60 * 1000;

type ExportPurpose = "volunteer-export" | "join-export";

function getEncryptionKey() {
  const secret = process.env.VERIFICATION_SECRET;

  if (!secret) {
    throw new Error("VERIFICATION_SECRET is not configured.");
  }

  return crypto.createHash("sha256").update(secret).digest();
}

function createExportToken(purpose: ExportPurpose, recordId: string | number) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", getEncryptionKey(), iv);
  const payload = JSON.stringify({
    purpose,
    recordId: String(recordId),
    expiresAt: Date.now() + EXPORT_TOKEN_TTL_MS,
  });
  const encrypted = Buffer.concat([
    cipher.update(payload, "utf8"),
    cipher.final(),
  ]);
  const authTag = cipher.getAuthTag();

  return [iv, authTag, encrypted]
    .map((part) => part.toString("base64url"))
    .join(".");
}

function readExportToken(token: string, expectedPurpose: ExportPurpose) {
  const [ivValue, authTagValue, encryptedValue] = token.split(".");

  if (!ivValue || !authTagValue || !encryptedValue) {
    throw new Error("Invalid export link.");
  }

  const decipher = crypto.createDecipheriv(
    "aes-256-gcm",
    getEncryptionKey(),
    Buffer.from(ivValue, "base64url"),
  );
  decipher.setAuthTag(Buffer.from(authTagValue, "base64url"));
  const payload = Buffer.concat([
    decipher.update(Buffer.from(encryptedValue, "base64url")),
    decipher.final(),
  ]).toString("utf8");
  const parsed = JSON.parse(payload) as {
    purpose: string;
    expiresAt: number;
    recordId?: string;
    volunteerId?: string;
  };

  const recordId = parsed.recordId ?? parsed.volunteerId;

  if (
    parsed.purpose !== expectedPurpose ||
    parsed.expiresAt < Date.now() ||
    !recordId
  ) {
    throw new Error("This export link has expired or is invalid.");
  }

  return recordId;
}

export function createVolunteerExportToken(volunteerId: string | number) {
  return createExportToken("volunteer-export", volunteerId);
}

export function readVolunteerExportToken(token: string) {
  return readExportToken(token, "volunteer-export");
}

export function createJoinExportToken(joinId: string | number) {
  return createExportToken("join-export", joinId);
}

export function readJoinExportToken(token: string) {
  return readExportToken(token, "join-export");
}
