import type { Metadata } from "next";
import { Suspense } from "react";
import { unsubscribe } from "@/app/actions";
import { buttonClass, h1Class, NarrowPage, ledeClass } from "@/components/ui";

// Target of «Meld meg av og slett opplysningane mine» in the emails. Deleting needs
// a button press (POST), so link scanners in mail clients can't delete anything.

export const metadata: Metadata = {
  title: "Meld deg av",
  robots: { index: false },
};

async function Unsubscribe({
  searchParams,
}: {
  searchParams: PageProps<"/meld-av">["searchParams"];
}) {
  const { token, sletta } = await searchParams;

  if (sletta) {
    return (
      <>
        <h1 className={h1Class}>Opplysningane dine er sletta.</h1>
        <p className={ledeClass}>Du får ikkje fleire e-postar frå oss om Heima.</p>
      </>
    );
  }

  return (
    <>
      <h1 className={h1Class}>Meld deg av</h1>
      <p className={ledeClass}>
        Trykk på knappen, så slettar vi reservasjonen din, e-postadressa og svara dine.
      </p>
      <form action={unsubscribe}>
        <input type="hidden" name="token" value={typeof token === "string" ? token : ""} />
        <button type="submit" className={buttonClass()}>
          Meld meg av og slett opplysningane mine
        </button>
      </form>
    </>
  );
}

export default function UnsubscribePage({ searchParams }: PageProps<"/meld-av">) {
  return (
    <NarrowPage>
      <Suspense>
        <Unsubscribe searchParams={searchParams} />
      </Suspense>
    </NarrowPage>
  );
}
