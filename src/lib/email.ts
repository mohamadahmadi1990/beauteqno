import { Resend } from "resend";

export type LeadEmailPayload = {
  fullName: string;
  email: string;
  company: string;
  interest: string;
  notes: string;
};

export type LeadEmailDeliveryResult = {
  adminNotificationSent: boolean;
  requesterConfirmationSent: boolean;
};

const DEFAULT_CONTACT_EMAIL = "beauteqno@gmail.com";

export function hasEmailTransportConfig() {
  return Boolean(getResendApiKey() && getResendFromEmail());
}

export async function sendLeadEmails(
  payload: LeadEmailPayload,
): Promise<LeadEmailDeliveryResult> {
  const resend = getResendClient();

  const [adminNotificationSent, requesterConfirmationSent] = await Promise.all([
    sendEmail(resend, {
      from: getResendFromEmail(),
      to: [getContactEmail()],
      replyTo: payload.email,
      subject: `New Beauteqno inquiry from ${payload.fullName}`,
      text: buildAdminPlainTextBody(payload),
      html: buildAdminHtmlBody(payload),
    }),
    sendEmail(resend, {
      from: getResendFromEmail(),
      to: [payload.email],
      replyTo: getReplyToEmail(),
      subject: "We received your Beauteqno request",
      text: buildRequesterPlainTextBody(payload),
      html: buildRequesterHtmlBody(payload),
    }),
  ]);

  return {
    adminNotificationSent,
    requesterConfirmationSent,
  };
}

function getResendClient() {
  const apiKey = getResendApiKey();

  if (!apiKey) {
    throw new Error(
      "Resend is not configured. Add RESEND_API_KEY and RESEND_FROM_EMAIL to .env.local.",
    );
  }

  return new Resend(apiKey);
}

async function sendEmail(
  resend: Resend,
  payload: Parameters<Resend["emails"]["send"]>[0],
) {
  const { error } = await resend.emails.send(payload);

  if (error) {
    console.error("Resend email delivery failed:", error);
    return false;
  }

  return true;
}

function getContactEmail() {
  return process.env.CONTACT_EMAIL_TO?.trim() || DEFAULT_CONTACT_EMAIL;
}

function getReplyToEmail() {
  return process.env.RESEND_REPLY_TO_EMAIL?.trim() || getContactEmail();
}

function getResendApiKey() {
  const value = process.env.RESEND_API_KEY?.trim();
  return value || "";
}

function getResendFromEmail() {
  const value = process.env.RESEND_FROM_EMAIL?.trim();
  return value || "";
}

function buildAdminPlainTextBody(payload: LeadEmailPayload) {
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

function buildAdminHtmlBody(payload: LeadEmailPayload) {
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

function buildRequesterPlainTextBody(payload: LeadEmailPayload) {
  return [
    `Hi ${payload.fullName},`,
    "",
    "We received your Beauteqno request.",
    "Our team will review your message and follow up shortly.",
    "",
    "Submission summary:",
    `Interest: ${payload.interest}`,
    `Company: ${payload.company || "-"}`,
    `Notes: ${payload.notes || "-"}`,
    "",
    "Thank you,",
    "Beauteqno",
  ].join("\n");
}

function buildRequesterHtmlBody(payload: LeadEmailPayload) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #111827;">
      <p style="margin: 0 0 16px;">Hi ${escapeHtml(payload.fullName)},</p>
      <p style="margin: 0 0 16px;">
        We received your Beauteqno request. Our team will review your message and follow up shortly.
      </p>
      <div style="margin: 24px 0; padding: 16px 18px; border-radius: 16px; background: #f6f2ed;">
        <p style="margin: 0 0 8px;"><strong>Submission summary</strong></p>
        <p style="margin: 0;"><strong>Interest:</strong> ${escapeHtml(payload.interest)}</p>
        <p style="margin: 8px 0 0;"><strong>Company:</strong> ${escapeHtml(payload.company || "-")}</p>
        <p style="margin: 8px 0 0;"><strong>Notes:</strong> ${escapeHtml(payload.notes || "-")}</p>
      </div>
      <p style="margin: 0;">Thank you,<br />Beauteqno</p>
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
