import type { PackageId } from "@/lib/packages";
import type { Bilete, Delbetal, Hushald, Pris, Viktigast } from "./options";

/** What the Buyer submitted, after server-side validation. */
export interface ReservationInput {
  pakke: PackageId;
  email: string;
  postnummer: string;
  hushald: Hushald | null;
  bilete: Bilete[];
  viktigast: Viktigast | null;
  pris: Pris | null;
  delbetal: Delbetal | null;
  consents: {
    alder: true;
    kontakt: true;
    intervju: boolean;
  };
}

/** A stored Reservation, including the consent evidence. */
export interface Reservation extends ReservationInput {
  /** Secret used in the confirmation and unsubscribe links. */
  token: string;
  /** When the form was sent and consent given. */
  consentedAt: Date;
  /** Which version of the consent texts the Buyer saw. */
  consentVersion: string;
  /** When the Buyer clicked the link in the confirmation email. Null while pending. */
  confirmedAt: Date | null;
}

export interface ConfirmResult {
  reservation: Reservation;
  /** False if the token had already been confirmed earlier. */
  firstTime: boolean;
}

/**
 * Where Reservations live. The in-memory implementation is for the mock/demo;
 * a Postgres implementation can replace it without touching callers.
 */
export interface ReservationStore {
  /** Saves a pending (unconfirmed) Reservation and returns its token. */
  createPending(input: ReservationInput, consentVersion: string): Promise<string>;
  /** Marks the Reservation as confirmed. Null if the token is unknown. */
  confirm(token: string): Promise<ConfirmResult | null>;
  /** Deletes the Reservation and all its data. False if the token is unknown. */
  deleteByToken(token: string): Promise<boolean>;
}
