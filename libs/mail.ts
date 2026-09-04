// lib/mail/transporter.ts

import nodemailer from "nodemailer";

export const escapeHtml = (value: unknown) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export function brandedEmail({
  title,
  intro,
  content,
  action,
  footer = "Save a Village | Empowering communities through giving",
}: {
  title: string;
  intro: string;
  content: string;
  action?: { label: string; url: string };
  footer?: string;
}) {
  return `
    <div style="margin:0;background:#f5f3f6;padding:32px 16px;font-family:Arial,sans-serif;color:#22002d;line-height:1.6;">
      <div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #eadfea;">
        <div style="padding:28px 32px;background:#22002d;border-bottom:5px solid #f6d648;">
          <div style="font-size:13px;letter-spacing:1px;text-transform:uppercase;color:#f6d648;font-weight:bold;">Save a Village</div>
          <h1 style="margin:10px 0 0;color:#ffffff;font-size:28px;line-height:1.2;">${escapeHtml(title)}</h1>
        </div>
        <div style="padding:32px;">
          <p style="margin:0 0 18px;font-size:16px;">${escapeHtml(intro)}</p>
          ${content}
          ${action ? `<p style="margin:28px 0;text-align:center;"><a href="${escapeHtml(action.url)}" style="display:inline-block;padding:13px 22px;background:#66009b;color:#ffffff;text-decoration:none;font-weight:bold;border-radius:4px;">${escapeHtml(action.label)}</a></p>` : ""}
        </div>
        <div style="padding:18px 32px;background:#66009b;color:#ffffff;font-size:13px;text-align:center;">${escapeHtml(footer)}</div>
      </div>
    </div>
  `;
}

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST as string,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER as string,
    pass: process.env.SMTP_PASSWORD || "Wisdom@2879",
  },
});
