import type { Metadata } from "next";
import { Suspense } from "react";
import { MockEmailPreview } from "@/components/email-preview";
import { NarrowPage, h1Class, ledeClass } from "@/components/ui";
import { confirmationEmail } from "@/lib/mail/templates";
import { confirmPath, isMockMode, siteOrigin } from "@/lib/services";

export const metadata: Metadata = {
  title: "Takk",
  robots: { index: false },
};

async function MockConfirmPreview({
  searchParams,
}: {
  searchParams: PageProps<"/takk">["searchParams"];
}) {
  if (!isMockMode()) return null;
  const { token } = await searchParams;
  if (typeof token !== "string" || !token) return null;

  const path = confirmPath(token);
  const email = confirmationEmail({ confirmUrl: `${await siteOrigin()}${path}` });
  return (
    <MockEmailPreview email={email}>
      {/* Plain <a>: a prefetch must never confirm the Reservation. */}
      <a href={path} className="justify-self-start font-semibold text-amber-ink underline">
        Simuler at du trykte på lenkja i e-posten
      </a>
    </MockEmailPreview>
  );
}

export default function ThanksPage({ searchParams }: PageProps<"/takk">) {
  return (
    <NarrowPage>
      <h1 className={h1Class}>Takk! Sjekk e-posten din for å stadfeste.</h1>
      <p className={ledeClass}>
        Reservasjonen gjeld først når du har trykt på lenkja i e-posten. Finn du ho ikkje? Sjå i
        søppelpost-mappa.
      </p>
      <Suspense>
        <MockConfirmPreview searchParams={searchParams} />
      </Suspense>
    </NarrowPage>
  );
}
