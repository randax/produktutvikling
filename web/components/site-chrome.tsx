import Link from "next/link";
import { COMPANY, SIGN_OFF } from "@/lib/company";
import { buttonClass } from "./ui";

export function ConceptBanner() {
  return (
    <div className="bg-night text-[14px] text-night-ink">
      <p className="wrap py-2.5">
        <strong>Heima er eit konsept under utvikling.</strong> Produktet finst ikkje enno. Utsjånad,
        storleik, funksjonar og pris kan endre seg, og det er ikkje sikkert Heima kjem. Ein
        reservasjon er heilt uforpliktande.
      </p>
    </div>
  );
}

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 font-display text-2xl font-bold text-ink no-underline"
    >
      <span aria-hidden className="size-3 rounded-full bg-glow shadow-[0_0_12px_var(--glow)]" />
      Heima
    </Link>
  );
}

const NAV = [
  { href: "/#slik", label: "Slik verkar det" },
  { href: "/#personvern", label: "Personvern" },
  { href: "/#pris", label: "Pris" },
  { href: "/#sporsmal", label: "Spørsmål" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-3">
        <Logo />
        <nav aria-label="Hovudmeny" className="order-last w-full md:order-none md:w-auto">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-[15px]">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted no-underline hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/#reserver" className={buttonClass("primary", "px-4 py-2.5")}>
          Reserver
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="wrap grid gap-3 py-10 text-[14px] text-muted">
        <p className="font-display text-[22px] text-ink">{SIGN_OFF}</p>
        <p>
          Heima er eit konsept frå <strong className="text-ink">{COMPANY.name}</strong>, org.nr.{" "}
          {COMPANY.orgNr}, {COMPANY.address}. Kontakt: {COMPANY.email}. Denne sida er
          marknadsføring.
        </p>
        <p>
          Vi brukar ingen informasjonskapslar (cookies).{" "}
          <Link href="/personvern" className="text-amber-ink underline">
            Personvernerklæring
          </Link>
        </p>
        <nav aria-label="Sider">
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            <li>
              <Link href="/heima-boksen" className="underline">
                Heima-boksen
              </Link>
            </li>
            <li>
              <Link href="/heima-appen" className="underline">
                Heima-appen
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
