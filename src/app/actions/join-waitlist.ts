"use server";

import { revalidatePath } from "next/cache";
import { getDb, hasDatabaseUrl } from "@/db/client";
import { waitlistLeads } from "@/db/schema";
import { hasEmailTransportConfig, sendLeadEmails } from "@/lib/email";

export type JoinWaitlistState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function joinWaitlistAction(
  _previousState: JoinWaitlistState,
  formData: FormData,
): Promise<JoinWaitlistState> {
  const fullName = getText(formData, "fullName");
  const email = getText(formData, "email");
  const company = getText(formData, "company");
  const interest = getText(formData, "interest");
  const notes = getText(formData, "notes");

  if (!fullName || !email || !interest) {
    return {
      status: "error",
      message: "Name, email, and interest type are required.",
    };
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return {
      status: "error",
      message: "Enter a valid email address.",
    };
  }

  const payload = {
    fullName,
    email,
    company,
    interest,
    notes,
  };
  const emailConfigured = hasEmailTransportConfig();
  const databaseConfigured = hasDatabaseUrl();

  if (!emailConfigured && !databaseConfigured) {
    return {
      status: "success",
      message:
        "The form is wired up. Add RESEND_API_KEY and RESEND_FROM_EMAIL to send email notifications, and DATABASE_URL if you also want submissions stored in Neon.",
    };
  }

  let adminNotificationSent = false;
  let requesterConfirmationSent = false;
  let leadStored = false;

  if (emailConfigured) {
    try {
      const deliveryResult = await sendLeadEmails(payload);
      adminNotificationSent = deliveryResult.adminNotificationSent;
      requesterConfirmationSent = deliveryResult.requesterConfirmationSent;
    } catch (error) {
      console.error("Failed to send Beauteqno contact emails:", error);
    }
  }

  if (databaseConfigured) {
    try {
      await getDb().insert(waitlistLeads).values({
        fullName,
        email,
        company: company || null,
        interest,
        notes: notes || null,
      });
      leadStored = true;
      revalidatePath("/");
    } catch (error) {
      console.error("Failed to store Beauteqno lead in Neon:", error);
    }
  }

  if (adminNotificationSent || requesterConfirmationSent || leadStored) {
    return {
      status: "success",
      message: buildSuccessMessage({
        adminNotificationSent,
        requesterConfirmationSent,
        leadStored,
      }),
    };
  }

  return {
    status: "error",
    message:
      "We could not deliver your request right now. Please check the email and database configuration and try again.",
  };
}

function getText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function buildSuccessMessage({
  adminNotificationSent,
  requesterConfirmationSent,
  leadStored,
}: {
  adminNotificationSent: boolean;
  requesterConfirmationSent: boolean;
  leadStored: boolean;
}) {
  if (requesterConfirmationSent && (adminNotificationSent || leadStored)) {
    return "Your request has been received. A confirmation email is on its way, and our team will follow up shortly.";
  }

  if (requesterConfirmationSent) {
    return "Your request has been received, and a confirmation email is on its way.";
  }

  if (adminNotificationSent || leadStored) {
    return "Your request has been received and recorded successfully.";
  }

  return "Your request has been received.";
}
