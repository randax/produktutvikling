import { isPackageId, type PackageId } from "@/lib/packages";
import { QUESTIONS, type QuestionName } from "./options";
import type { ReservationInput } from "./types";

export type FieldName = "pakke" | "epost" | "postnummer" | QuestionName | "alder" | "kontakt";
export type FieldErrors = Partial<Record<FieldName, string>>;

/** Raw form values, sent back so the form can be refilled after an error. */
export interface FormValues {
  pakke: string;
  epost: string;
  postnummer: string;
  hushald: string;
  bilete: string[];
  viktigast: string;
  pris: string;
  delbetal: string;
  alder: boolean;
  kontakt: boolean;
  intervju: boolean;
}

export const EMPTY_VALUES: FormValues = {
  pakke: "2tb",
  epost: "",
  postnummer: "",
  hushald: "",
  bilete: [],
  viktigast: "",
  pris: "",
  delbetal: "",
  alder: false,
  kontakt: false,
  intervju: false,
};

export const MESSAGES = {
  pakke: "Vel kva storleik du vil reservere.",
  epost: "Skriv inn ei gyldig e-postadresse, til dømes namn@døme.no.",
  postnummer: "Postnummeret må vere fire siffer, til dømes 5003.",
  option: "Vel eitt av svara i lista.",
  alder: "Du må vere 18 år eller eldre for å reservere.",
  kontakt: "Kryss av her, så vi kan gi deg beskjed på e-post når Heima kjem.",
} as const;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const POSTCODE = /^\d{4}$/;

type ValidationResult =
  { ok: true; data: ReservationInput } | { ok: false; errors: FieldErrors; values: FormValues };

function text(formData: FormData, name: string): string {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

/** True if `value` is one of the question's fixed option values. */
function isOption<Q extends QuestionName>(
  question: Q,
  value: string,
): value is (typeof QUESTIONS)[Q]["options"][number]["value"] {
  return QUESTIONS[question].options.some((o) => o.value === value);
}

/** Optional single-choice answer: empty is fine, anything else must be a known option. */
function single<Q extends QuestionName>(question: Q, value: string, errors: FieldErrors) {
  if (value === "") return null;
  if (isOption(question, value)) return value;
  errors[question] = MESSAGES.option;
  return null;
}

export function parseReservationForm(formData: FormData): ValidationResult {
  const values: FormValues = {
    pakke: text(formData, "pakke"),
    epost: text(formData, "epost"),
    postnummer: text(formData, "postnummer"),
    hushald: text(formData, "hushald"),
    bilete: [...new Set(formData.getAll("bilete").filter((v) => typeof v === "string"))],
    viktigast: text(formData, "viktigast"),
    pris: text(formData, "pris"),
    delbetal: text(formData, "delbetal"),
    alder: formData.get("alder") === "ja",
    kontakt: formData.get("kontakt") === "ja",
    intervju: formData.get("intervju") === "ja",
  };

  const errors: FieldErrors = {};
  const pakke: PackageId | null = isPackageId(values.pakke) ? values.pakke : null;
  if (!pakke) errors.pakke = MESSAGES.pakke;
  if (values.epost.length > 254 || !EMAIL.test(values.epost)) errors.epost = MESSAGES.epost;
  if (!POSTCODE.test(values.postnummer)) errors.postnummer = MESSAGES.postnummer;

  const hushald = single("hushald", values.hushald, errors);
  const viktigast = single("viktigast", values.viktigast, errors);
  const pris = single("pris", values.pris, errors);
  const delbetal = single("delbetal", values.delbetal, errors);
  const bilete = values.bilete.filter((v) => isOption("bilete", v));
  if (bilete.length !== values.bilete.length) errors.bilete = MESSAGES.option;

  if (!values.alder) errors.alder = MESSAGES.alder;
  if (!values.kontakt) errors.kontakt = MESSAGES.kontakt;

  if (!pakke || Object.keys(errors).length > 0) return { ok: false, errors, values };

  return {
    ok: true,
    data: {
      pakke,
      email: values.epost,
      postnummer: values.postnummer,
      hushald,
      bilete,
      viktigast,
      pris,
      delbetal,
      consents: { alder: true, kontakt: true, intervju: values.intervju },
    },
  };
}
