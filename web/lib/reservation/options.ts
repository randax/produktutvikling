// The Reservation form's fixed answer options. Values are stored; labels are shown.

interface Option<V extends string = string> {
  value: V;
  label: string;
}

const HUSHALD = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3-4", label: "3–4" },
  { value: "5+", label: "5 eller fleire" },
] as const satisfies readonly Option[];

const BILETE = [
  { value: "icloud", label: "iCloud" },
  { value: "google-foto", label: "Google Foto" },
  { value: "jottacloud", label: "Jottacloud" },
  { value: "telenor-telia-sky", label: "Telenor eller Telia Sky" },
  { value: "berre-mobilen", label: "Berre på mobilen" },
  { value: "veit-ikkje", label: "Veit ikkje" },
] as const satisfies readonly Option[];

const VIKTIGAST = [
  { value: "nokkel", label: "Berre familien har nøkkelen" },
  { value: "assistent", label: "Assistenten som les breva" },
  { value: "minne", label: "Alle minna, lette å finne" },
] as const satisfies readonly Option[];

const PRIS = [
  { value: "ja", label: "Ja" },
  { value: "kanskje", label: "Kanskje" },
  { value: "nei-for-dyrt", label: "Nei, det er for dyrt" },
] as const satisfies readonly Option[];

const DELBETAL = [
  { value: "ja", label: "Ja" },
  { value: "nei", label: "Nei" },
  { value: "veit-ikkje", label: "Veit ikkje" },
] as const satisfies readonly Option[];

export type Hushald = (typeof HUSHALD)[number]["value"];
export type Bilete = (typeof BILETE)[number]["value"];
export type Viktigast = (typeof VIKTIGAST)[number]["value"];
export type Pris = (typeof PRIS)[number]["value"];
export type Delbetal = (typeof DELBETAL)[number]["value"];

/** The survey questions, in form order. */
export const QUESTIONS = {
  hushald: { legend: "Kor mange er de i hushaldet?", options: HUSHALD, multiple: false },
  bilete: {
    legend: "Kvar ligg bileta dykkar i dag?",
    hint: "Vel så mange du vil.",
    options: BILETE,
    multiple: true,
  },
  viktigast: { legend: "Kva er viktigast for deg?", options: VIKTIGAST, multiple: false },
  pris: { legend: "Ville du kjøpt Heima til denne prisen?", options: PRIS, multiple: false },
  delbetal: { legend: "Vil du kunne delbetale boksen?", options: DELBETAL, multiple: false },
} as const;

export type QuestionName = keyof typeof QUESTIONS;
export const QUESTION_NAMES = Object.keys(QUESTIONS) as QuestionName[];

/**
 * Consent wording shown next to the checkboxes. Bump CONSENT_VERSION whenever
 * any of these texts change, so stored consents can be traced to the exact wording.
 */
export const CONSENT_VERSION = "2026-11-12";
export const CONSENT_TEXT = {
  alder: "Eg er 18 år eller eldre.",
  kontakt: "Ja, gi meg beskjed på e-post når Heima kjem.",
  intervju: "Eg vil gjerne bli intervjua eller svare på ei kort undersøking.",
} as const;
export type ConsentName = keyof typeof CONSENT_TEXT;
