import nodemailer from "nodemailer";

export type LeadEmailPayload = {
  fullName: string;
  email: string;
  company: string;
  interest: string;
  notes: string;
};

const DEFAULT_CONTACT_EMAIL = "beauteqno@gmail.com";

export function hasEmailTransportConfig() {
  return Boolean(getEmailUser() && getEmailAppPassword());
}

export async function sendLeadNotificationEmail(payload: LeadEmailPayload) {
  const user = getEmailUser();
  const appPassword = getEmailAppPassword();

  if (!user || !appPassword) {
    throw new Error(
      "Email transport is not configured. Add GMAIL_USER and GMAIL_APP_PASSWORD to .env.local.",
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass: appPassword,
    },
  });

  await transporter.sendMail({
    from: formatFromAddress(user),
    to: getContactEmail(),
    replyTo: payload.email,
    subject: `New Beauteqno inquiry from ${payload.fullName}`,
    text: buildPlainTextBody(payload),
    html: buildHtmlBody(payload),
  });
}

function getContactEmail() {
  return process.env.CONTACT_EMAIL_TO?.trim() || DEFAULT_CONTACT_EMAIL;
}

function getEmailUser() {
  const value = process.env.GMAIL_USER?.trim();
  return value || DEFAULT_CONTACT_EMAIL;
}

function getEmailAppPassword() {
  const value = process.env.GMAIL_APP_PASSWORD?.trim();
  return value || "";
}

function formatFromAddress(email: string) {
  return `Beauteqno Contact <${email}>`;
}

function buildPlainTextBody(payload: LeadEmailPayload) {
  return [
    "New Beauteqno contact request",
    "",
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || "-"}`,
    `Interest: ${payload.interest}`,
    "",
    "Notes:",
    payload.notes || "-",
  ].join("\n");
}

function buildHtmlBody(payload: LeadEmailPayload) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h2 style="margin-bottom: 16px;">New Beauteqno contact request</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(payload.company || "-")}</p>
      <p><strong>Interest:</strong> ${escapeHtml(payload.interest)}</p>
      <p><strong>Notes:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(payload.notes || "-")}</p>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
