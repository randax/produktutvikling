import { PACKAGE_INCLUDED, PACKAGES, PRICE_NOTE } from "@/lib/packages";
import { ReservePackageButton } from "./package-choice";
import { h2Class, Section } from "./ui";

/** «Vel storleik». Each button preselects its Package in the form on /. */
export function PackagesSection() {
  return (
    <Section id="pris">
      <div className="wrap grid gap-7">
        <h2 className={h2Class}>Vel storleik</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={`grid content-start gap-3 rounded-[20px] bg-surface p-6 md:p-7 ${pkg.recommended ? "border-2 border-amber" : "border border-line"}`}
            >
              {pkg.recommended && (
                <span className="justify-self-start rounded-full bg-amber-soft px-2.5 py-0.5 text-xs font-semibold uppercase tracking-[0.06em] text-amber-ink">
                  Tilrådd
                </span>
              )}
              <h3 className="text-[22px] font-bold">Heima {pkg.size}</h3>
              <p className="text-muted">{pkg.forWho}</p>
              <dl className="grid gap-3">
                <div>
                  <dt className="text-[14px] text-muted">Heima-boksen</dt>
                  <dd className="font-display text-[34px] font-bold leading-tight tabular-nums">
                    {pkg.boxPrice}
                  </dd>
                </div>
                <div>
                  <dt className="text-[14px] text-muted">Abonnement</dt>
                  <dd className="font-display text-xl tabular-nums">{pkg.subscription}</dd>
                </div>
                <div>
                  <dt className="text-[14px] text-muted">Med i abonnementet</dt>
                  <dd className="text-[15px]">{PACKAGE_INCLUDED}</dd>
                </div>
              </dl>
              <div className="mt-2">
                <ReservePackageButton id={pkg.id} primary={pkg.recommended} />
              </div>
            </article>
          ))}
        </div>
        <p className="text-[13.5px] text-muted">{PRICE_NOTE}</p>
      </div>
    </Section>
  );
}
