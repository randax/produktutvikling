import { h2Class, Section } from "./ui";

// The six objections and answers from docs/messaging.md, in that order.
const FAQ = [
  [
    "Kva om boksen vert øydelagd, eller huset brenn?",
    "Då hentar du alt tilbake frå tryggleikskopien i Noreg med nøkkelen på mobilen. Ny boks, same minne.",
  ],
  [
    "Er det vanskeleg å setje opp?",
    "Set boksen i straumen, kople han til ruteren og skann ein kode med mobilen. Ferdig.",
  ],
  [
    "Kva skjer om eg sluttar å betale, eller om de legg ned?",
    "Boksen held fram med å verke heime hos deg, og du kan alltid ta med deg alt. Det lovar vi skriftleg.",
  ],
  [
    "Kvifor betale når eg får lagring gratis med mobilabonnementet?",
    "Gratis lagring ligg på nokon andre sin server, og forsvinn når du byter selskap. Heima er din.",
  ],
  [
    "Kan eg stole på det assistenten seier om breva mine?",
    "Assistenten forklarer og minner deg på fristar, men originalbrevet er alltid fasit. Du ser alltid kva han byggjer svaret på.",
  ],
  [
    "Kva om eg mistar mobilen?",
    "Alle vaksne i familien har sin eigen nøkkel, akkurat som husnøkkelen. Vil du ha ekstra tryggleik, får du eit nøkkelkort på papir.",
  ],
] as const;

export function FaqSection() {
  return (
    <Section id="sporsmal">
      <div className="wrap">
        <div className="grid max-w-[760px] gap-6">
          <h2 className={h2Class}>Spørsmål du kanskje har</h2>
          <div>
            {FAQ.map(([question, answer]) => (
              <details key={question} className="group border-t border-line py-4 last:border-b">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {question}
                  <span aria-hidden className="text-amber-ink transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2.5 text-muted">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
