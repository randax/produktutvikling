import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PackagesSection } from "@/components/packages-section";
import { ConceptImage, h1Class, h2Class, ledeClass, ReserveLink, Section } from "@/components/ui";
import type { ImageKey } from "@/lib/images";

export const metadata: Metadata = {
  title: "Heima-boksen",
  description: "Ser ut som noko du vil ha i bokhylla. Ikkje som ein datamaskin.",
};

function Feature({
  title,
  image,
  children,
}: {
  title: string;
  image: ImageKey;
  children: ReactNode;
}) {
  return (
    <Section>
      <div className="wrap grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <div className="grid gap-4">
          <h2 className={h2Class}>{title}</h2>
          {children}
        </div>
        <ConceptImage image={image} />
      </div>
    </Section>
  );
}

export default function BoxPage() {
  return (
    <>
      <section className="wrap grid gap-8 py-10 md:py-14">
        <h1 className={`${h1Class} max-w-[18ch]`}>
          Ser ut som noko du vil ha i bokhylla. Ikkje som ein datamaskin.
        </h1>
        <ConceptImage image="hero" priority sizes="(min-width: 1080px) 1048px, 100vw" />
      </section>

      <Feature title="Kva er inni?" image="back">
        <p className={ledeClass}>
          Ein liten, stillegåande datamaskin med plass til bileta og dokumenta til heile familien,
          og ein assistent som berre arbeider for dykk.
        </p>
      </Feature>

      <Feature title="Tal du forstår" image="size">
        <ul className="grid gap-3 text-[18px]">
          <li>
            <strong>Plass til om lag 400 000 bilete</strong> (Heima 2 TB) eller{" "}
            <strong>800 000</strong> (Heima 4 TB).
          </li>
          <li>
            <strong>Skal bruke om lag like mykje straum som ei lyspære.</strong>
          </li>
          <li>
            <strong>Skal vere nesten lydlaus.</strong>
          </li>
        </ul>
      </Feature>

      <Feature title="Lyset" image="detail">
        <p className={ledeClass}>Lyset gløder svakt når assistenten arbeider.</p>
      </Feature>

      <Feature title="Utsjånad" image="shelfDay">
        <p className={ledeClass}>
          Heima-boksen skal vere laga av eik og vere på storleik med ei bok: om lag 7,5 × 21 × 27
          cm. Framme har han ei smal, ravfarga lysstripe. Bak er det berre ein straumkontakt og ein
          nettverkskontakt.
        </p>
      </Feature>

      <PackagesSection />
      <div className="wrap pb-16">
        <ReserveLink />
      </div>
    </>
  );
}
