"use server";

import { revalidatePath } from "next/cache";
import { getDb, hasDatabaseUrl } from "@/db/client";
import { waitlistLeads } from "@/db/schema";
import { hasEmailTransportConfig, sendLeadNotificationEmail } from "@/lib/email";

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
        "The form is wired up. Add GMAIL_APP_PASSWORD to email beauteqno@gmail.com and DATABASE_URL if you also want submissions stored in Neon.",
    };
  }

  let emailSent = false;
  let leadStored = false;

  if (emailConfigured) {
    try {
      await sendLeadNotificationEmail(payload);
      emailSent = true;
    } catch (error) {
      console.error("Failed to send Beauteqno contact email:", error);
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

  if (emailSent || leadStored) {
    return {
      status: "success",
      message: buildSuccessMessage({ emailSent, leadStored }),
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
  emailSent,
  leadStored,
}: {
  emailSent: boolean;
  leadStored: boolean;
}) {
  if (emailSent && leadStored) {
    return "Your request has been received. Our team will review it and follow up shortly.";
  }

  if (emailSent) {
    return "Your request has been received and delivered to our team successfully.";
  }

  return "Your request has been received and recorded successfully.";
}
