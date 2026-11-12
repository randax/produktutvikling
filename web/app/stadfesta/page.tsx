import { track } from "@vercel/analytics/server";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { after } from "next/server";
import { Suspense } from "react";
import { MockEmailPreview } from "@/components/email-preview";
import { NarrowPage, h1Class, ledeClass, ReserveLink } from "@/components/ui";
import { onTheListEmail } from "@/lib/mail/templates";
import { PACKAGES } from "@/lib/packages";
import { getServices, isMockMode, siteOrigin, unsubscribePath } from "@/lib/services";

export const metadata: Metadata = {
  title: "Reservasjonen er stadfesta",
  robots: { index: false },
};

async function Confirmation({
  searchParams,
}: {
  searchParams: PageProps<"/stadfesta">["searchParams"];
}) {
  const { token } = await searchParams;
  const { store, mailer } = getServices();
  const result = typeof token === "string" && token ? await store.confirm(token) : null;

  if (!result) {
    return (
      <>
        <h1 className={h1Class}>Vi fann ikkje reservasjonen.</h1>
        <p className={ledeClass}>
          Lenkja er ugyldig, eller reservasjonen er sletta. Prøv lenkja i den nyaste e-posten frå
          oss, eller reserver på nytt.
        </p>
        <div>
          <ReserveLink />
        </div>
      </>
    );
  }

  const { reservation, firstTime } = result;
  const pakke = PACKAGES.find((p) => p.id === reservation.pakke)?.size ?? reservation.pakke;
  const email = onTheListEmail({
    pakke,
    unsubscribeUrl: `${await siteOrigin()}${unsubscribePath(reservation.token)}`,
  });

  if (firstTime) {
    const requestHeaders = await headers();
    after(async () => {
      await mailer.send({ to: reservation.email, ...email });
      await track(
        "reservation_confirmed",
        { pakke: reservation.pakke },
        { headers: requestHeaders },
      );
    });
  }

  return (
    <>
      <h1 className={h1Class}>Reservasjonen er stadfesta.</h1>
      <p className={ledeClass}>
        Vi gir deg beskjed når Heima kjem, eller om vi vel å ikkje lage han. Kjenner du nokon som òg
        vil at bileta skal bli heima? Del gjerne sida.
      </p>
      {isMockMode() && (
        <MockEmailPreview email={email}>
          <a
            href={unsubscribePath(reservation.token)}
            className="justify-self-start font-semibold text-amber-ink underline"
          >
            Simuler at du trykte på «Meld meg av» i e-posten
          </a>
        </MockEmailPreview>
      )}
    </>
  );
}

export default function ConfirmedPage({ searchParams }: PageProps<"/stadfesta">) {
  return (
    <NarrowPage>
      <Suspense>
        <Confirmation searchParams={searchParams} />
      </Suspense>
    </NarrowPage>
  );
}
