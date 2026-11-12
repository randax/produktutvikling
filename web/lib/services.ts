import "server-only";
import { headers } from "next/headers";
import { ConsoleMailer, type Mailer } from "@/lib/mail/mailer";
import { InMemoryReservationStore } from "@/lib/reservation/memory-store";
import type { ReservationStore } from "@/lib/reservation/types";

/**
 * Mock mode: in-memory store, console mailer, and test previews on /takk and /stadfesta.
 * On when HEIMA_MOCK=1, or by default when no database is configured.
 * HEIMA_MOCK=0 turns it off explicitly.
 */
export function isMockMode(): boolean {
  const flag = process.env.HEIMA_MOCK;
  if (flag === "1") return true;
  if (flag === "0") return false;
  return !process.env.DATABASE_URL;
}

interface Services {
  store: ReservationStore;
  mailer: Mailer;
}

/** The one place that picks implementations. Add the real Postgres store and mailer here. */
export function getServices(): Services {
  if (isMockMode()) {
    return { store: new InMemoryReservationStore(), mailer: new ConsoleMailer() };
  }
  throw new Error(
    "HEIMA_MOCK is off, but no real ReservationStore/Mailer is wired up in lib/services.ts.",
  );
}

/** Absolute origin for links in emails. SITE_URL wins; otherwise the request's host. */
export async function siteOrigin(): Promise<string> {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/$/, "");
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

export const confirmPath = (token: string) => `/stadfesta?token=${encodeURIComponent(token)}`;
export const unsubscribePath = (token: string) => `/meld-av?token=${encodeURIComponent(token)}`;
