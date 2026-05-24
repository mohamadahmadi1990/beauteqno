"use client";

import { type InputHTMLAttributes, useActionState } from "react";
import { useFormStatus } from "react-dom";
import {
  initialJoinWaitlistState,
  joinWaitlistAction,
} from "@/app/actions/join-waitlist";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const INTEREST_OPTIONS = [
  "Strategic investor",
  "Beauty studio / clinic",
  "Brand / distribution partner",
  "Early access customer",
];

export function BeauteqnoWaitlistForm() {
  const [state, formAction] = useActionState(
    joinWaitlistAction,
    initialJoinWaitlistState,
  );

  return (
    <Card className="p-7 sm:p-9">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="section-kicker">Access request</p>
          <h3 className="mt-4 font-heading text-3xl font-semibold text-white">
            Request access or start a partnership conversation
          </h3>
        </div>
        <Badge className="hidden sm:flex">Beauteqno</Badge>
      </div>

      <form action={formAction} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id="fullName"
            label="Full name"
            name="fullName"
            placeholder="Your name"
            required
          />
          <Field
            id="email"
            label="Email"
            name="email"
            placeholder="you@company.com"
            required
            type="email"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id="company"
            label="Company"
            name="company"
            placeholder="Studio, fund, or brand"
          />

          <label className="space-y-2 text-sm text-white/78" htmlFor="interest">
            <span className="font-medium">Interest type</span>
            <select
              id="interest"
              name="interest"
              required
              defaultValue=""
              className={INPUT_CLASS_NAME}
            >
              <option value="" disabled>
                Select one
              </option>
              {INTEREST_OPTIONS.map((interest) => (
                <option key={interest} value={interest} className="bg-slate-950">
                  {interest}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="space-y-2 text-sm text-white/78" htmlFor="notes">
          <span className="font-medium">Notes</span>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Tell us what kind of partnership, product interest, or intro you have in mind."
            className={cn(INPUT_CLASS_NAME, "min-h-32 resize-y py-3")}
          />
        </label>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div
            aria-live="polite"
            className={cn(
              "text-sm leading-6",
              state.status === "error" ? "text-rose-300" : "text-white/62",
            )}
          >
            {state.message ??
              "Tell us where you fit in the ecosystem and we will follow up with the right next step."}
          </div>
          <SubmitButton />
        </div>
      </form>
    </Card>
  );
}

function Field({
  id,
  label,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="space-y-2 text-sm text-white/78" htmlFor={id}>
      <span className="font-medium">{label}</span>
      <input id={id} className={INPUT_CLASS_NAME} {...props} />
    </label>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="min-w-44">
      {pending ? "Sending..." : "Request access"}
    </Button>
  );
}

const INPUT_CLASS_NAME =
  "w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/32 focus:border-cyan-200/45 focus:ring-3 focus:ring-cyan-200/14";
