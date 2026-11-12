import { ConceptImage, Eyebrow, h2Class, ledeClass, Section } from "./ui";

export function AlbumSection() {
  return (
    <Section night>
      <div className="wrap grid gap-4">
        <Eyebrow night>Familiealbumet, berre smartare</Eyebrow>
        <p className="max-w-[30ch] font-display text-[clamp(26px,3.6vw,40px)] leading-[1.25]">
          Før stod familiealbumet i bokhylla. Ingen andre hadde det. Heima-boksen er det same, berre
          smartare.
        </p>
      </div>
    </Section>
  );
}

const REASONS = [
  {
    title: "Berre familien har nøkkelen",
    text: "Bileta og dokumenta ligg heime hos deg. Tryggleikskopien i Noreg er låst med nøkkelen på mobilen din, og ingen andre kan opne han.",
  },
  {
    title: "Ein assistent som kan lese breva dine",
    text: "Ta bilete av brevet frå NAV eller Skatteetaten, så forklarer Heima kva det betyr og når fristen er. Ingenting forlèt huset.",
  },
  {
    title: "Alle minna, lette å finne",
    text: "Bileta frå mobilane i familien vert tekne vare på automatisk. Skriv «bestemor på hytta sommaren 2019», så finn Heima dei.",
  },
];

export function ReasonsSection() {
  return (
    <Section id="personvern">
      <div className="wrap grid gap-10">
        <h2 className={h2Class}>Tre grunnar til å velje Heima</h2>
        <ol className="grid gap-8 md:grid-cols-3">
          {REASONS.map((r, i) => (
            <li key={r.title} className="grid content-start gap-2.5">
              <span aria-hidden className="font-display font-bold text-amber-ink">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold">{r.title}</h3>
              <p className="text-muted">{r.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function HowItWorksSection() {
  const steps = [
    [
      "Set Heima-boksen i straumen",
      " og kople han til ruteren. Han verkar med alle internettleverandørar.",
    ],
    ["Skann koden med mobilen", " og lag familienøkkelen med Face ID eller fingeravtrykk."],
    ["Inviter familien.", " Kvar vaksen får sin eigen nøkkel, akkurat som husnøkkelen."],
  ];
  return (
    <Section id="slik">
      <div className="wrap grid items-center gap-10 md:grid-cols-2">
        <div className="grid gap-4">
          <Eyebrow>Slik skal Heima fungere</Eyebrow>
          <h2 className={h2Class}>Set han i bokhylla. Ferdig.</h2>
          <ol className="grid">
            {steps.map(([strong, rest], i) => (
              <li
                key={strong}
                className="grid grid-cols-[48px_1fr] gap-4 border-t border-line py-4"
              >
                <span
                  aria-hidden
                  className="font-display text-[28px] font-bold leading-none text-amber-ink"
                >
                  {i + 1}
                </span>
                <p>
                  <strong>{strong}</strong>
                  {rest}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <ConceptImage image="shelfEvening" />
      </div>
    </Section>
  );
}

export function AssistantSection() {
  return (
    <Section>
      <div className="wrap grid items-center gap-10 md:grid-cols-2">
        <div className="grid gap-4">
          <Eyebrow>Assistenten</Eyebrow>
          <h2 className={h2Class}>Han kan lese breva dine, fordi han aldri sender noko ut.</h2>
          <p className={ledeClass}>
            Du ville aldri late Google sin KI lese breva frå NAV, banken og legen. Heima sin
            assistent kan, fordi han bur heime hos deg.
          </p>
          <ConceptImage image="phone" className="mt-2" />
        </div>
        <figure
          aria-label="Døme på samtale med assistenten"
          className="m-0 grid gap-3 rounded-[20px] border border-line bg-surface p-5"
        >
          <p className="max-w-[92%] justify-self-end rounded-2xl bg-amber-soft px-4 py-3 text-[15.5px]">
            <span aria-hidden>📄 </span>Brev frå NAV · <em>Kva betyr dette?</em>
          </p>
          <p className="max-w-[92%] rounded-2xl border border-line bg-bg px-4 py-3 text-[15.5px]">
            Dette er eit vedtak om foreldrepengar. Du har fått 49 veker. Vil du endre perioden, må
            du gi beskjed innan <strong>3. desember</strong>. Skal eg minne deg på det ei veke før?
            <span className="mt-2 block text-[13px] font-semibold text-amber-ink">
              Sjå kva svaret byggjer på →
            </span>
          </p>
          <p className="max-w-[92%] justify-self-end rounded-2xl bg-amber-soft px-4 py-3 text-[15.5px]">
            Ja takk
          </p>
          <figcaption className="text-[13.5px] text-muted">
            Døme. Assistenten kan ta feil, så originalbrevet er alltid fasit.
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}

export function PromiseSection() {
  return (
    <Section>
      <div className="wrap">
        <div className="max-w-[760px]">
          <div className="grid gap-4 rounded-[20px] border border-line bg-surface p-6 md:p-8">
            <Eyebrow>Heima-lovnaden</Eyebrow>
            <blockquote className="m-0 font-display text-[clamp(24px,3vw,32px)] leading-tight text-amber-ink">
              «Boksen verkar alltid, og alt er alltid ditt.»
            </blockquote>
            <p>
              Om du sluttar å betale, eller om vi legg ned, held Heima-boksen fram med å verke heime
              hos deg. Du kan alltid ta med deg alle bileta og dokumenta.
            </p>
            <p>
              <strong>Dette skal vi gjere før lansering:</strong>
            </p>
            <ul className="grid gap-2.5">
              {[
                "Publisere programvaren i boksen som open kjeldekode, så kven som helst kan sjekke han.",
                "La eit uavhengig selskap teste tryggleiken, og publisere rapporten.",
                "Skrive Heima-lovnaden inn i avtalen din.",
              ].map((item) => (
                <li key={item} className="relative pl-7">
                  <span aria-hidden className="absolute left-0 font-bold text-amber-ink">
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
