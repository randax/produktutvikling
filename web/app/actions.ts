"use server";

import { track } from "@vercel/analytics/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { after } from "next/server";
import { confirmationEmail } from "@/lib/mail/templates";
import { CONSENT_VERSION } from "@/lib/reservation/options";
import {
  parseReservationForm,
  type FieldErrors,
  type FormValues,
} from "@/lib/reservation/validate";
import { confirmPath, getServices, isMockMode, siteOrigin } from "@/lib/services";

export type ReserveState =
  | { status: "idle"; attempt: 0 }
  | { status: "error"; attempt: number; errors: FieldErrors; values: FormValues };

export async function reserve(prev: ReserveState, formData: FormData): Promise<ReserveState> {
  const parsed = parseReservationForm(formData);
  if (!parsed.ok) {
    return {
      status: "error",
      attempt: prev.attempt + 1,
      errors: parsed.errors,
      values: parsed.values,
    };
  }

  const { store, mailer } = getServices();
  const token = await store.createPending(parsed.data, CONSENT_VERSION);
  const confirmUrl = `${await siteOrigin()}${confirmPath(token)}`;
  await mailer.send({ to: parsed.data.email, ...confirmationEmail({ confirmUrl }) });

  const requestHeaders = await headers();
  after(() => track("reservation_sent", { pakke: parsed.data.pakke }, { headers: requestHeaders }));

  // The token only travels in the URL in mock mode, so /takk can show the email preview.
  redirect(isMockMode() ? `/takk?token=${encodeURIComponent(token)}` : "/takk");
}

export async function unsubscribe(formData: FormData): Promise<void> {
  const token = formData.get("token");
  if (typeof token === "string" && token) {
    await getServices().store.deleteByToken(token);
  }
  redirect("/meld-av?sletta=1");
}
