import crypto from "node:crypto";

const EXPORT_TOKEN_TTL_MS = 24 * 60 * 60 * 1000;

function getEncryptionKey() {
  const secret = process.env.VERIFICATION_SECRET;

  if (!secret) {
    throw new Error("VERIFICATION_SECRET is not configured.");
  }

  return crypto.createHash("sha256").update(secret).digest();
}

export function createVolunteerExportToken() {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", getEncryptionKey(), iv);
  const payload = JSON.stringify({
    purpose: "volunteer-export",
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

export function readVolunteerExportToken(token: string) {
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
  };

  if (parsed.purpose !== "volunteer-export" || parsed.expiresAt < Date.now()) {
    throw new Error("This export link has expired or is invalid.");
  }
}
