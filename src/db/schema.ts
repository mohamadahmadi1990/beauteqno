import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const waitlistLeads = pgTable("waitlist_leads", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  interest: text("interest").notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export type WaitlistLead = typeof waitlistLeads.$inferSelect;
export type NewWaitlistLead = typeof waitlistLeads.$inferInsert;
