// lib/mail/transporter.ts

import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST as string,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER as string,
    pass: process.env.SMTP_PASSWORD || "Wisdom@2879",
  },
});
