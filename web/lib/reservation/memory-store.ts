import { randomBytes } from "node:crypto";
import type { ConfirmResult, Reservation, ReservationInput, ReservationStore } from "./types";

// Kept on globalThis so every route module in the same Node process shares one Map.
const globalForStore = globalThis as typeof globalThis & {
  heimaReservations?: Map<string, Reservation>;
};

/** Mock store: data lives only in this server process and is lost on restart. */
export class InMemoryReservationStore implements ReservationStore {
  private readonly reservations = (globalForStore.heimaReservations ??= new Map());

  async createPending(input: ReservationInput, consentVersion: string): Promise<string> {
    const token = randomBytes(32).toString("base64url");
    this.reservations.set(token, {
      ...input,
      token,
      consentVersion,
      consentedAt: new Date(),
      confirmedAt: null,
    });
    return token;
  }

  async confirm(token: string): Promise<ConfirmResult | null> {
    const reservation = this.reservations.get(token);
    if (!reservation) return null;
    if (reservation.confirmedAt) return { reservation, firstTime: false };
    const confirmed = { ...reservation, confirmedAt: new Date() };
    this.reservations.set(token, confirmed);
    return { reservation: confirmed, firstTime: true };
  }

  async deleteByToken(token: string): Promise<boolean> {
    return this.reservations.delete(token);
  }
}
