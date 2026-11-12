// Placeholders until the ISP's legal entity is known (ehandelsloven §§ 8–9).
// Keep the brackets visible on the site until they are filled in.
export const COMPANY = {
  name: "[Selskapsnamn AS]",
  orgNr: "[000 000 000]",
  address: "[adresse]",
  email: "[e-post]",
} as const;

export const SIGN_OFF = "Det som er ditt, blir heima.";

export const COMPANY_LINE = `Heima er eit konsept frå ${COMPANY.name}, org.nr. ${COMPANY.orgNr}, ${COMPANY.address}. Kontakt: ${COMPANY.email}.`;
