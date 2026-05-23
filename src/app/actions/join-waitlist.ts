"use server";

import { revalidatePath } from "next/cache";
import { getDb, hasDatabaseUrl } from "@/db/client";
import { waitlistLeads } from "@/db/schema";

export type JoinWaitlistState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export const initialJoinWaitlistState: JoinWaitlistState = {
  status: "idle",
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

  if (!hasDatabaseUrl()) {
    return {
      status: "success",
      message:
        "The form is wired up. Add your Neon DATABASE_URL in .env.local, run db:push, and future submissions will store in PostgreSQL.",
    };
  }

  await getDb().insert(waitlistLeads).values({
    fullName,
    email,
    company: company || null,
    interest,
    notes: notes || null,
  });

  revalidatePath("/");

  return {
    status: "success",
    message: "Thanks. Your Beauteqno request has been captured.",
  };
}

function getText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}
