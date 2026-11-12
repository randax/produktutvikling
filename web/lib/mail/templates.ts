import { COMPANY_LINE, SIGN_OFF } from "@/lib/company";

export interface EmailContent {
  subject: string;
  text: string;
  html: string;
}

/** A piece of email body: a paragraph, or a button-style link. */
type Block = string | { button: string; href: string };

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

const FONT = "font-family:Arial,Helvetica,sans-serif;color:#17223A;font-size:16px;line-height:1.5";

/** Builds subject + plain text + simple HTML, always ending with the sign-off and company footer. */
function email(subject: string, blocks: Block[]): EmailContent {
  const text = [
    ...blocks.map((b) => (typeof b === "string" ? b : `${b.button}: ${b.href}`)),
    "--",
    SIGN_OFF,
    COMPANY_LINE,
  ].join("\n\n");

  const body = blocks
    .map((b) =>
      typeof b === "string"
        ? `<p style="margin:0 0 16px">${escapeHtml(b)}</p>`
        : `<p style="margin:0 0 16px"><a href="${escapeHtml(b.href)}" style="display:inline-block;background:#A9620F;color:#fff;text-decoration:none;font-weight:bold;padding:12px 20px;border-radius:999px">${escapeHtml(b.button)}</a></p>`,
    )
    .join("");

  const html = `<!doctype html><html lang="nn"><body style="margin:0;padding:24px;background:#F1F2F1"><div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;padding:28px;${FONT}">${body}<hr style="border:0;border-top:1px solid #D6DAE0;margin:24px 0"><p style="margin:0 0 8px;font-weight:bold">${escapeHtml(SIGN_OFF)}</p><p style="margin:0;font-size:13px;color:#556074">${escapeHtml(COMPANY_LINE)}</p></div></body></html>`;

  return { subject, text, html };
}

/** 1. Double opt-in confirmation. */
export function confirmationEmail({ confirmUrl }: { confirmUrl: string }): EmailContent {
  return email("Stadfest reservasjonen din av Heima", [
    "Hei!",
    "Takk for at du vil reservere Heima. Trykk på knappen for å stadfeste at det er deg.",
    { button: "Stadfest reservasjonen", href: confirmUrl },
    "Reservasjonen er heilt uforpliktande. Har du ikkje bede om dette, kan du sjå bort frå e-posten, så slettar vi adressa di.",
  ]);
}

/** 2. Sent once the Reservation is confirmed. `pakke` is e.g. «2 TB». */
export function onTheListEmail({
  pakke,
  unsubscribeUrl,
}: {
  pakke: string;
  unsubscribeUrl: string;
}): EmailContent {
  return email("Du står på lista", [
    "Hei!",
    `Reservasjonen din av Heima ${pakke} er stadfesta. Vi gir deg beskjed når Heima kjem, eller om vi vel å ikkje lage han.`,
    "Uansett kva som skjer, gjeld Heima-lovnaden: «Boksen verkar alltid, og alt er alltid ditt.»",
    "Vil du ikkje høyre meir frå oss?",
    { button: "Meld meg av og slett opplysningane mine", href: unsubscribeUrl },
  ]);
}

/** 3. Sent to everyone if the decision is no-go. */
export function noGoEmail(): EmailContent {
  return email("Vi lagar ikkje Heima likevel", [
    "Hei!",
    "Takk for at du reserverte Heima. Vi har bestemt oss for ikkje å lage han no. Når denne e-posten er send, slettar vi e-postadressa di og svara dine.",
  ]);
}
