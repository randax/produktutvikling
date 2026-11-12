import type { Metadata } from "next";
import { AppPhoneDemo } from "@/components/phone/demos";
import { ConceptImage, h1Class, h2Class, ledeClass, ReserveLink, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Heima-appen",
  description: "Heile familien, på kvar sin mobil.",
};

const SECTIONS = [
  {
    title: "Familiealbumet og ditt eige",
    text: "Det du legg inn, er ditt eige. Familiealbumet deler de med kvarandre. Brev og dokument deler du med den du vel, eitt om gongen.",
  },
  {
    title: "Assistenten",
    text: "Han finn bilete, forklarer brev, minner deg på fristar og svarar på spørsmål om dokumenta dykkar. Han kjenner berre dykkar ting.",
  },
  {
    title: "Nøkkelen på mobilen",
    text: "Du låser opp med Face ID eller fingeravtrykk. Kvar vaksen i familien har sin eigen nøkkel. Vil du ha ekstra tryggleik, får du eit nøkkelkort på papir.",
  },
];

export default function AppPage() {
  return (
    <>
      <section className="wrap py-10 md:py-14">
        <AppPhoneDemo heading={<h1 className={h1Class}>Heile familien, på kvar sin mobil.</h1>} />
      </section>

      <Section className="bg-surface">
        <div className="wrap grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="grid gap-10">
            {SECTIONS.map((s) => (
              <div key={s.title} className="grid gap-3">
                <h2 className={h2Class}>{s.title}</h2>
                <p className={ledeClass}>{s.text}</p>
              </div>
            ))}
          </div>
          <ConceptImage image="phone" />
        </div>
      </Section>

      <Section>
        <div className="wrap grid justify-items-start gap-6">
          <h2 className={h2Class}>For iPhone og Android</h2>
          <ReserveLink />
        </div>
      </Section>
    </>
  );
}
