"use client";

import { useEffect, useState, type ReactNode } from "react";
import type { ScreenId } from "./model";
import {
  Back,
  BigIcon,
  Body,
  Btn,
  Bubble,
  Card,
  Chip,
  H2,
  H3,
  Icon,
  InfoSection,
  MemberCard,
  Muted,
  P,
  Pill,
  PhotoGrid,
  Row,
  Spacer,
  TapCard,
  Viewfinder,
  photo,
} from "./parts";
import { useReducedMotion, type PhoneController } from "./use-phone";

const SEARCH = "bestemor på hytta sommaren 2019";

/** Renders the body of the current screen. */
export function Screen({ phone }: { phone: PhoneController }) {
  const { state, go, advance, toggle, setSheet } = phone;
  const names = state.members.map((m) => m.name).join(", ");
  const to = (id: ScreenId, toast?: string) => () => go(id, toast);

  switch (state.screen) {
    // 1. Kom i gang
    case "start-1":
      return (
        <Body center>
          <BigIcon>📦</BigIcon>
          <H2>Velkomen til Heima</H2>
          <P>
            Set Heima-boksen i straumen og kople han til ruteren. Så skannar du koden under boksen.
          </P>
          <Spacer />
          <Btn onClick={to("start-2")}>Skann koden</Btn>
        </Body>
      );
    case "start-2":
      return (
        <Body>
          <H3>Skann koden under boksen</H3>
          <Viewfinder hint="Hald koden inne i ramma">
            <div className="grid aspect-square w-[62%] place-items-center rounded-[18px] border-[3px] border-glow">
              <div
                aria-hidden
                className="aspect-square w-3/5 rounded opacity-85"
                style={{
                  background:
                    "conic-gradient(#fff 0 25%, #222 0 50%, #fff 0 75%, #222 0) 0 0 / 22% 22%",
                }}
              />
            </div>
          </Viewfinder>
          <Btn onClick={to("start-3")}>Kode funnen</Btn>
        </Body>
      );
    case "start-3":
      return (
        <Body>
          <Pill>✓ Heima-boksen er funnen</Pill>
          <BigIcon>🔑</BigIcon>
          <H2>Lag familienøkkelen</H2>
          <P>
            Nøkkelen blir verande på mobilen din, akkurat som husnøkkelen i lomma. Utan han kan
            ingen opne bileta og dokumenta dykkar.{" "}
            <strong className="text-app-ink">Ikkje ein gong vi.</strong>
          </P>
          <Card>
            <Muted>Du låser opp med Face ID. Du treng ikkje hugse noko passord.</Muted>
          </Card>
          <Spacer />
          <Btn variant="amber" onClick={to("start-4")}>
            Lag nøkkel med Face ID
          </Btn>
        </Body>
      );
    case "start-4":
      return (
        <Body center>
          <span
            aria-hidden
            className="grid size-24 animate-pulse-soft place-items-center rounded-[28px] border-4 border-glow text-[44px]"
          >
            🙂
          </span>
          <P>Ser på deg …</P>
        </Body>
      );
    case "start-5":
      return (
        <Body>
          <BigIcon>🔐</BigIcon>
          <H2>Familienøkkelen er klar</H2>
          <P>
            Vil du ha eit nøkkelkort på papir i tillegg? Det er ein ekstra nøkkel du kan leggje i
            ein skuff, i tilfelle de mistar alle mobilane.
          </P>
          <Spacer />
          <Btn onClick={to("start-6", "Nøkkelkortet er klart til utskrift")}>Lag nøkkelkort</Btn>
          <Btn variant="ghost" onClick={to("start-6")}>
            Hopp over
          </Btn>
        </Body>
      );
    case "start-6":
      return (
        <Body>
          <H2>Heima tek vare på bileta dine</H2>
          <P>Du kan bruke mobilen som vanleg imens.</P>
          <Card>
            <Row>
              <strong className="flex-1">2 418 av 8 312 bilete</strong>
              <span className="text-[13.5px] text-app-muted">29 %</span>
            </Row>
            <BackupProgress />
          </Card>
          <PhotoGrid count={9} onPick={to("kven-1")} />
          <Spacer />
          <Btn onClick={to("home")}>Ferdig</Btn>
        </Body>
      );

    // Home (Bilete)
    case "home":
      return (
        <Body>
          <H2>Bilete</H2>
          <Pill>✓ Alt er teke vare på</Pill>
          <SearchField onClick={to("search-1")}>Søk, til dømes «hytta 2019»</SearchField>
          <TapCard onClick={to("kven-1")}>
            <Row>
              <BigIcon small>📚</BigIcon>
              <span className="min-w-0 flex-1">
                <strong className="block">Familiealbumet</strong>
                <span className="text-[13.5px] text-app-muted">Delt med {names}</span>
              </span>
              <Icon>›</Icon>
            </Row>
          </TapCard>
          <strong>Nyleg</strong>
          <PhotoGrid count={12} offset={2} onPick={to("kven-1")} />
        </Body>
      );

    // 3. Finn bilete
    case "search-1":
      return (
        <Body>
          <Back onClick={to("home")}>‹ Bilete</Back>
          <TypedSearch text={SEARCH} onDone={() => advance("search-2")} />
          <Muted>Skriv som du snakkar. Heima forstår kven, kvar og når.</Muted>
        </Body>
      );
    case "search-2":
      return (
        <Body>
          <Back onClick={to("home")}>‹ Bilete</Back>
          <SearchField typed>{SEARCH}</SearchField>
          <div className="flex flex-wrap gap-1.5">
            <Chip>
              <Icon>👤</Icon> Bestemor
            </Chip>
            <Chip>
              <Icon>📍</Icon> Hytta
            </Chip>
            <Chip>
              <Icon>📅</Icon> Juni–august 2019
            </Chip>
          </div>
          <Row>
            <strong className="flex-1">Fann 23 bilete</strong>
            <span className="text-[13.5px] text-app-muted">
              {state.selected.length ? `${state.selected.length} valt` : "Trykk for å velje"}
            </span>
          </Row>
          <PhotoGrid count={15} offset={4} selected={state.selected} onPick={toggle} />
          <Btn variant="amber" disabled={!state.selected.length} onClick={to("search-3")}>
            Legg til i Familiealbumet
          </Btn>
        </Body>
      );
    case "search-3":
      return (
        <Body center>
          <BigIcon>📚</BigIcon>
          <H2>{state.lastAdded} bilete lagt til i Familiealbumet</H2>
          <P>No kan {names} sjå dei.</P>
          <Spacer />
          <Btn onClick={to("home")}>Ferdig</Btn>
        </Body>
      );

    // 2. Inviter familien
    case "fam-1": {
      const count = state.members.length;
      return (
        <Body>
          <H2>Familien</H2>
          <P>Kvar vaksen har sin eigen nøkkel på mobilen sin.</P>
          {state.members.map((m) => (
            <MemberCard key={m.name} member={m} />
          ))}
          <Btn onClick={to(count === 1 ? "fam-2" : count === 2 ? "fam-4" : "fam-1")}>
            {count < 3 ? "+ Inviter nokon" : "+ Inviter fleire"}
          </Btn>
        </Body>
      );
    }
    case "fam-2":
      return (
        <Body>
          <Back onClick={to("fam-1")}>‹ Familien</Back>
          <H3>Kven vil du invitere?</H3>
          <Card>
            <Muted>Namn</Muted>
            <strong>Ola</strong>
          </Card>
          <div className="flex flex-wrap gap-1.5">
            <Chip>Partnar</Chip>
            <Chip muted>Barn</Chip>
            <Chip muted>Besteforelder</Chip>
          </div>
          <Card>
            <Muted>
              Ola får sin eigen nøkkel på mobilen sin. Han ser Familiealbumet og det du vel å dele
              med han. Bileta dine elles er berre dine.
            </Muted>
          </Card>
          <Spacer />
          <Btn variant="amber" onClick={to("fam-3")}>
            Send invitasjon på SMS
          </Btn>
        </Body>
      );
    case "fam-3":
      return (
        <Body center>
          <BigIcon>✉️</BigIcon>
          <H2>Invitasjonen er send</H2>
          <P>Ola får ei lenkje på SMS og lagar nøkkelen sin med Face ID …</P>
        </Body>
      );
    case "fam-4":
      return (
        <Body>
          <Back onClick={to("fam-1")}>‹ Familien</Back>
          <H3>Inviter bestemor</H3>
          <Card>
            <Muted>Namn</Muted>
            <strong>Bestemor Anne</strong>
          </Card>
          <Card>
            <Muted>
              Treng ho hjelp? Du kan setje opp mobilen hennar saman med henne. Det tek to minutt.
            </Muted>
          </Card>
          <Spacer />
          <Btn variant="amber" onClick={to("fam-5")}>
            Send invitasjon på SMS
          </Btn>
        </Body>
      );
    case "fam-5":
      return (
        <Body center>
          <BigIcon>✉️</BigIcon>
          <H2>Invitasjonen er send</H2>
          <P>Anne lagar nøkkelen sin …</P>
        </Body>
      );

    // 4. Forstå eit brev
    case "brev-1":
      return (
        <Body>
          <H2>Dokument</H2>
          <Btn variant="amber" onClick={to("brev-2")}>
            <Icon>📷</Icon> Skann eit brev
          </Btn>
          {DOCUMENTS.map((d) => (
            <TapCard key={d.title} onClick={to(d.opens)}>
              <Row>
                <Icon className="text-[22px]">{d.icon}</Icon>
                <span className="min-w-0 flex-1">
                  <strong className="block">{d.title}</strong>
                  <span className="text-[13.5px] text-app-muted">{d.date}</span>
                </span>
                <Icon>›</Icon>
              </Row>
            </TapCard>
          ))}
        </Body>
      );
    case "brev-2":
      return (
        <Body>
          <Back onClick={to("brev-1")}>‹ Dokument</Back>
          <H3>Hald brevet inne i ramma</H3>
          <Viewfinder hint="Brevet blir lese her på boksen, ikkje på nettet">
            <div
              aria-hidden
              className="mb-8 grid aspect-[0.72] w-[70%] content-start gap-1.5 rounded-md bg-white p-3.5"
            >
              <b className="text-[11px] text-[#17223A]">NAV</b>
              {[100, 80, 100, 60, 100, 70].map((w, i) => (
                <i
                  key={i}
                  className="block h-1.5 rounded-sm bg-[#D5D8DE]"
                  style={{ width: `${w}%` }}
                />
              ))}
            </div>
          </Viewfinder>
          <Btn onClick={to("brev-3")}>Ta bilete</Btn>
        </Body>
      );
    case "brev-3":
      return (
        <Body center>
          <BigIcon>📄</BigIcon>
          <H3>Heima les brevet …</H3>
          <P>Ingenting forlèt huset.</P>
        </Body>
      );
    case "brev-4":
      return (
        <Body>
          <Back onClick={to("brev-1")}>‹ Dokument</Back>
          <div>
            <Muted>Brev frå NAV · 12. november 2026</Muted>
            <H3>Vedtak om foreldrepengar</H3>
          </div>
          <InfoSection title="Kva er dette?">
            NAV har godkjent søknaden din. Du har fått foreldrepengar i 49 veker.
          </InfoSection>
          <InfoSection title="Kva må du gjere?">
            Ingenting, viss perioden stemmer. Vil du endre han, må du gi beskjed til NAV.
          </InfoSection>
          <div className="rounded-[14px] bg-app-amber-soft px-3.5 py-3">
            <span className="text-[13.5px] text-app-muted">Frist for å endre</span>
            <strong className="block font-display text-[22px]">3. desember</strong>
          </div>
          <Btn variant="amber" onClick={to("brev-1", "Påminning sett: 26. november")}>
            Minn meg på det 26. november
          </Btn>
          <Back onClick={to("brev-src")}>Sjå kva svaret byggjer på ›</Back>
          <Muted>Assistenten kan ta feil. Originalbrevet er alltid fasit.</Muted>
        </Body>
      );
    case "brev-src":
      return (
        <Body>
          <Back onClick={to("brev-4")}>‹ Forklaringa</Back>
          <H3>Originalbrevet</H3>
          <div className="grid gap-2 rounded-[10px] border border-app-line bg-white p-4 text-[12.5px] leading-[1.55] text-[#333]">
            <b>NAV · Vedtak</b>
            <span>Vi har gått gjennom søknaden din om foreldrepengar.</span>
            <span>
              <Mark>Du har fått innvilga foreldrepengar i 49 veker</Mark> med 100 prosent dekning.
            </span>
            <span>Perioden startar 6. januar 2027.</span>
            <span>
              <Mark>
                Dersom du ønskjer å endre perioden, må du melde frå innan 3. desember 2026.
              </Mark>
            </span>
            <span>Med venleg helsing, NAV Familie- og pensjonsytelser</span>
          </div>
          <Muted>Det gule er det Heima bygde svaret på. Brevet er eit døme.</Muted>
        </Body>
      );

    // 5. Spør om dokumenta
    case "spor-1":
      return (
        <Body>
          <H2>Spør Heima</H2>
          <P>Heima kjenner berre dykkar bilete og dokument. Alt skjer på boksen heime.</P>
          <TapCard onClick={to("spor-2")}>Når går garantien på vaskemaskina ut?</TapCard>
          <TapCard onClick={to("spor-1")}>Kva for forsikringar har vi?</TapCard>
          <TapCard onClick={to("home")}>Vis bilete frå 17. mai i fjor</TapCard>
        </Body>
      );
    case "spor-2":
      return (
        <Body>
          <Back onClick={to("spor-1")}>‹ Spør Heima</Back>
          <Bubble me>Når går garantien på vaskemaskina ut?</Bubble>
          <Bubble>
            <DelayedAnswer pending="Leitar i dokumenta …">
              Reklamasjonsretten på vaskemaskina varer til <strong>14. mars 2029</strong>, fem år
              etter at du kjøpte ho. Produsentgarantien gjekk ut 14. mars 2026.
              <Back onClick={to("brev-1")} className="mt-2 block text-[13px]">
                <Icon>🧾</Icon> Kvittering · 14. mars 2024 ›
              </Back>
            </DelayedAnswer>
          </Bubble>
        </Body>
      );

    // 6. Kven kan sjå dette?
    case "kven-1":
      return (
        <Body flush>
          <div className="relative h-[56%] flex-none" style={{ background: photo(0) }}>
            <Back onClick={to("home")} className="absolute left-4 top-3 text-white!">
              ‹ Bilete
            </Back>
          </div>
          <div className="grid gap-3 px-5 py-4">
            <div>
              <strong>Hytta, juli 2019</strong>
              <Muted>Bestemor, Kari · I Familiealbumet</Muted>
            </div>
            <Btn onClick={() => setSheet(true)} aria-haspopup="dialog">
              <Icon>👁</Icon> Kven kan sjå dette?
            </Btn>
          </div>
        </Body>
      );
    case "kven-export":
      return (
        <Body>
          <Back onClick={to("kven-1")}>‹ Tilbake</Back>
          <BigIcon>📦</BigIcon>
          <H2>Ta med deg alt</H2>
          <P>
            Du kan kopiere alle bileta og dokumenta til ein vanleg harddisk eller ei anna teneste,
            når som helst. Det er dykkar.
          </P>
          <Card>
            <Row>
              <span className="flex-1">8 312 bilete · 214 dokument</span>
              <strong>412 GB</strong>
            </Row>
          </Card>
          <Spacer />
          <Btn onClick={to("kven-1", "Kopieringa har starta. Vi seier frå når ho er ferdig.")}>
            Start kopiering
          </Btn>
        </Body>
      );
  }
}

const DOCUMENTS: { icon: string; title: string; date: string; opens: ScreenId }[] = [
  { icon: "🧾", title: "Kvittering vaskemaskin", date: "14. mars 2024", opens: "spor-2" },
  { icon: "🏠", title: "Forsikringsbevis heim", date: "2. januar 2026", opens: "spor-1" },
  { icon: "📄", title: "Skattemelding 2025", date: "18. mars 2026", opens: "spor-1" },
];

function Mark({ children }: { children: ReactNode }) {
  return <mark className="rounded-[3px] bg-[#FBE2B5] px-0.5 text-inherit">{children}</mark>;
}

function SearchField({
  typed = false,
  onClick,
  children,
}: {
  typed?: boolean;
  onClick?: () => void;
  children: ReactNode;
}) {
  const className = `flex w-full flex-none gap-2 rounded-[14px] border border-app-line bg-app-card px-3.5 py-3 text-left ${typed ? "text-app-ink" : "text-app-muted"}`;
  const content = (
    <>
      <Icon>🔍</Icon> <span>{children}</span>
    </>
  );
  return onClick ? (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  ) : (
    <div className={className}>{content}</div>
  );
}

/** Types the search phrase letter by letter, then moves on. */
function TypedSearch({ text, onDone }: { text: string; onDone: () => void }) {
  const reduced = useReducedMotion();
  const [length, setLength] = useState(0);
  const shown = reduced ? text.length : length;

  useEffect(() => {
    const finished = shown >= text.length;
    const timer = setTimeout(
      finished ? onDone : () => setLength((n) => n + 1),
      finished ? 600 : 45,
    );
    return () => clearTimeout(timer);
  }, [shown, text.length, onDone]);

  return <SearchField typed>{text.slice(0, shown)}</SearchField>;
}

function BackupProgress() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="h-2 overflow-hidden rounded-lg bg-app-line">
      <span
        className="block h-full rounded-lg bg-glow transition-[width] duration-[1200ms] ease-out"
        style={{ width: done ? "100%" : "29%" }}
      />
    </div>
  );
}

function DelayedAnswer({ pending, children }: { pending: string; children: ReactNode }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 1300);
    return () => clearTimeout(timer);
  }, []);
  return ready ? <div>{children}</div> : <span className="text-app-muted">{pending}</span>;
}
