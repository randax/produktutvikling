"use client";

import { useRef, type ReactNode, type RefObject } from "react";
import { FLOWS, flowOf, type Flow } from "./model";
import { Phone } from "./phone";
import { usePhone, type PhoneController } from "./use-phone";

const HERO_FLOWS = FLOWS.filter((f) => ["start", "search", "brev", "kven"].includes(f.id));
const SAMPLE_NOTE = "Konsept. Alle namn, bilete og brev er døme.";

function FlowButton({
  flow,
  phone,
  phoneRef,
  children,
  className,
}: {
  flow: Flow;
  phone: PhoneController;
  phoneRef: RefObject<HTMLDivElement | null>;
  children: ReactNode;
  className: string;
}) {
  const current = flowOf(phone.state.screen) === flow.id;
  return (
    <button
      type="button"
      onClick={() => {
        phone.go(flow.first);
        // On narrow screens the phone sits below the buttons; bring it into view.
        phoneRef.current?.scrollIntoView({ block: "nearest" });
      }}
      aria-current={current ? "step" : undefined}
      className={className}
    >
      {children}
    </button>
  );
}

/** Landing hero: copy and image on the left, the phone at rest on its home screen on the right. */
export function HeroPhoneDemo({ copy, image }: { copy: ReactNode; image: ReactNode }) {
  const phone = usePhone("home", "landing");
  const phoneRef = useRef<HTMLDivElement>(null);
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-x-14">
      <div className="grid content-start gap-5">
        {copy}
        <div className="grid gap-2">
          <p className="text-[14px] text-muted">Prøv appen sjølv:</p>
          <div role="group" aria-label="Prøv appen sjølv" className="flex flex-wrap gap-2">
            {HERO_FLOWS.map((flow) => (
              <FlowButton
                key={flow.id}
                flow={flow}
                phone={phone}
                phoneRef={phoneRef}
                className="rounded-full border border-line bg-surface px-3.5 py-2 text-[14px] text-ink aria-[current=step]:border-ink aria-[current=step]:bg-ink aria-[current=step]:text-bg"
              >
                {flow.title}
              </FlowButton>
            ))}
          </div>
          <p className="text-[13px] text-muted">{SAMPLE_NOTE}</p>
        </div>
      </div>
      <div ref={phoneRef} className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <Phone phone={phone} className="max-w-[320px]" />
      </div>
      <div className="lg:col-start-1 lg:row-start-2">{image}</div>
    </div>
  );
}

/** /heima-appen: all six flows listed beside the phone, starting at «Kom i gang». */
export function AppPhoneDemo({ heading }: { heading: ReactNode }) {
  const phone = usePhone("start-1", "heima-appen");
  const phoneRef = useRef<HTMLDivElement>(null);
  return (
    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-14">
      <div className="grid min-w-0 content-start gap-5">
        {heading}
        <p className="text-muted">
          Trykk deg gjennom slik Heima-appen skal fungere. Vel ei forteljing, eller klikk fritt i
          telefonen.
        </p>
        <ol className="grid gap-2">
          {FLOWS.map((flow, i) => (
            <li key={flow.id}>
              <FlowButton
                flow={flow}
                phone={phone}
                phoneRef={phoneRef}
                className="grid w-full grid-cols-[28px_1fr] items-center gap-2.5 rounded-[14px] border border-line px-3.5 py-3 text-left text-[15px] font-semibold aria-[current=step]:border-glow aria-[current=step]:bg-amber-soft"
              >
                <span aria-hidden className="font-display text-amber-ink">
                  {i + 1}
                </span>
                <span>
                  {flow.title}
                  <small className="block text-[13px] font-normal text-muted">{flow.desc}</small>
                </span>
              </FlowButton>
            </li>
          ))}
        </ol>
        <button
          type="button"
          onClick={phone.reset}
          className="justify-self-start text-[14px] font-semibold text-amber-ink"
        >
          <span aria-hidden>↺</span> Start på nytt
        </button>
        <p className="text-[13px] text-muted">{SAMPLE_NOTE}</p>
      </div>
      <div ref={phoneRef}>
        <Phone phone={phone} className="max-w-[380px]" />
      </div>
    </div>
  );
}
