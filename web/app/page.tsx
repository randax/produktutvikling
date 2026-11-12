import { ComparisonSection } from "@/components/comparison";
import { FaqSection } from "@/components/faq-section";
import {
  AlbumSection,
  AssistantSection,
  HowItWorksSection,
  PromiseSection,
  ReasonsSection,
} from "@/components/landing-sections";
import { PackagesSection } from "@/components/packages-section";
import { HeroPhoneDemo } from "@/components/phone/demos";
import { ReservationForm } from "@/components/reservation-form";
import {
  ConceptImage,
  Eyebrow,
  h1Class,
  h2Class,
  ledeClass,
  ReserveLink,
  Section,
} from "@/components/ui";

export default function LandingPage() {
  return (
    <>
      <section className="wrap py-10 md:py-14">
        <HeroPhoneDemo
          copy={
            <>
              <h1 className={h1Class}>Ingen andre kan sjå bileta dine. Ikkje ein gong vi.</h1>
              <p className={ledeClass}>
                Heima-boksen tek vare på bileta og dokumenta til familien, heime hos deg. Med ein
                privat assistent som hjelper deg å finne fram og forstå breva frå NAV og banken. Du
                treng ikkje kunne noko om teknologi.
              </p>
              <div>
                <ReserveLink />
              </div>
            </>
          }
          image={<ConceptImage image="hero" priority sizes="(min-width: 1024px) 640px, 100vw" />}
        />
      </section>
      <AlbumSection />
      <ReasonsSection />
      <HowItWorksSection />
      <AssistantSection />
      <PromiseSection />
      <ComparisonSection />
      <PackagesSection />
      <FaqSection />
      <Section id="reserver" night>
        <div className="wrap">
          <div className="grid max-w-[760px] gap-6">
            <Eyebrow night>Reservasjon</Eyebrow>
            <h2 className={h2Class}>Reserver Heima, heilt uforpliktande</h2>
            <p className={`${ledeClass} text-night-muted!`}>
              Dette er ikkje ei bestilling. Det kostar ingenting og bind deg ikkje til noko. Vi gir
              deg beskjed når Heima kjem, eller om vi vel å ikkje lage han.
            </p>
            <ReservationForm />
          </div>
        </div>
      </Section>
    </>
  );
}
