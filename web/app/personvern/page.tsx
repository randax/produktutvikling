import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Flag, h1Class, NarrowPage } from "@/components/ui";
import { COMPANY } from "@/lib/company";

// DRAFT. Based on research/legal-demand-test.md § 4.5. Legal must approve it, and a
// native nynorsk writer must check it, before the real campaign.

export const metadata: Metadata = {
  title: "Personvernerklæring",
  description: "Korleis Heima handsamar opplysningane du gir oss når du reserverer.",
};

function Part({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="grid gap-3">
      <h2 className="text-2xl font-bold">{title}</h2>
      {children}
    </section>
  );
}

const list = "grid list-disc gap-1.5 pl-6";

export default function PrivacyPage() {
  return (
    <NarrowPage className="gap-8 [&_p]:max-w-[65ch]">
      <div className="grid gap-4">
        <p>
          <Flag>Utkast – skal godkjennast av juridisk</Flag>
        </p>
        <h1 className={h1Class}>Personvernerklæring</h1>
        <p className="text-[19px] text-muted">
          Her står kva vi gjer med opplysningane du gir oss når du reserverer Heima, og kva rettar
          du har. Sist oppdatert: [dato].
        </p>
      </div>

      <Part title="Kven er ansvarleg?">
        <p>
          {COMPANY.name}, org.nr. {COMPANY.orgNr}, {COMPANY.address}, er behandlingsansvarleg for
          opplysningane. Du når oss på {COMPANY.email}. [Personvernombod: namn og e-post, om
          selskapet har det.]
        </p>
      </Part>

      <Part title="Kva vi lagrar">
        <ul className={list}>
          <li>E-postadressa di og postnummeret ditt.</li>
          <li>
            Svara dine i skjemaet: kva storleik du vil ha, kor mange de er i hushaldet, kvar bileta
            dykkar ligg i dag, kva som er viktigast for deg, om du ville kjøpt Heima til denne
            prisen, og om du vil kunne delbetale.
          </li>
          <li>
            Kva du har samtykt til, kva tid du gjorde det, og kva tid du stadfesta reservasjonen i
            e-posten. Dette lagrar vi for å kunne vise at du har samtykt.
          </li>
        </ul>
        <p>Vi spør ikkje om namn, telefonnummer eller adresse.</p>
      </Part>

      <Part title="Kvifor vi lagrar det">
        <ul className={list}>
          <li>For å finne ut om nok familiar vil ha Heima før vi byrjar å lage han.</li>
          <li>For å gi deg beskjed på e-post når Heima kjem, eller om vi vel å ikkje lage han.</li>
          <li>
            For å spørje deg om eit intervju eller ei kort undersøking, berre om du har kryssa av
            for det.
          </li>
        </ul>
        <p>Vi brukar ikkje opplysningane til noko anna, og vi sel dei ikkje.</p>
      </Part>

      <Part title="Grunnlaget for å lagre det">
        <p>
          Vi lagrar opplysningane fordi du har samtykt til det (personvernforordninga artikkel 6 nr.
          1 bokstav a). Det er frivillig å reservere, og alle spørsmåla om hushaldet og bileta er
          frivillige. Du kan trekkje samtykket når som helst, og det er like enkelt som å gi det.
        </p>
      </Part>

      <Part title="Kvar opplysningane er, og kven som hjelper oss">
        <p>
          Opplysningane frå skjemaet blir lagra i EU. Desse leverandørane handsamar dei på vegner av
          oss, og vi har databehandlaravtale med kvar av dei:
        </p>
        <ul className={list}>
          <li>[Leverandør av nettsida og drifta, til dømes Vercel Inc.]</li>
          <li>[Leverandør av databasen, med lagring i EU]</li>
          <li>[Leverandør som sender e-post for oss, med lagring i EU]</li>
        </ul>
        <p>
          [Om ein leverandør er i USA: Overføringa skjer etter EU–US Data Privacy Framework. Må
          stadfestast før publisering.]
        </p>
      </Part>

      <Part title="Kor lenge vi lagrar det">
        <p>
          Vi slettar alt automatisk seinast seks månader etter at vi har bestemt oss for om vi skal
          lage Heima. Stadfestar du ikkje reservasjonen i e-posten, slettar vi opplysningane etter
          [30 dagar]. Melder du deg av, slettar vi dei med ein gong.
        </p>
      </Part>

      <Part title="Rettane dine">
        <p>Du har rett til å</p>
        <ul className={list}>
          <li>få vite kva opplysningar vi har om deg, og få ein kopi av dei</li>
          <li>få retta opplysningar som er feil</li>
          <li>få sletta opplysningane dine</li>
          <li>avgrense eller protestere mot korleis vi brukar dei</li>
          <li>få opplysningane dine utlevert i eit vanleg format</li>
          <li>trekkje samtykket ditt</li>
        </ul>
        <p>
          Den enklaste måten å melde seg av og slette alt på, er lenkja «Meld meg av og slett
          opplysningane mine» nedst i e-postane frå oss. Du treng ikkje logge inn. Du kan òg skrive
          til {COMPANY.email}.
        </p>
        <p>
          Meiner du at vi handsamar opplysningane dine i strid med regelverket, kan du klage til
          Datatilsynet (datatilsynet.no).
        </p>
      </Part>

      <Part title="Ingen automatiske avgjerder">
        <p>Vi tek ingen avgjerder om deg som berre byggjer på automatisk handsaming.</p>
      </Part>

      <Part title="Informasjonskapslar (cookies)">
        <p>
          Nettsida brukar ingen informasjonskapslar og lagrar ingenting på eininga di. Vi tel kor
          mange som besøkjer sidene, og nokre få handlingar, til dømes at skjemaet vart sendt. Det
          gjer vi med Vercel Web Analytics, utan informasjonskapslar og utan å kjenne deg att frå
          dag til dag.
        </p>
      </Part>
    </NarrowPage>
  );
}
