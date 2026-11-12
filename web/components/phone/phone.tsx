"use client";

import { useEffect, useRef, type KeyboardEvent } from "react";
import { SCREENS, type ScreenId, type Tab } from "./model";
import { Avatar, Btn, Card, H3, Icon, P, Row } from "./parts";
import { Screen } from "./screens";
import type { PhoneController } from "./use-phone";

const TABS: { tab: Tab; icon: string; to: ScreenId }[] = [
  { tab: "Bilete", icon: "🖼", to: "home" },
  { tab: "Dokument", icon: "📄", to: "brev-1" },
  { tab: "Spør", icon: "💬", to: "spor-1" },
  { tab: "Familie", icon: "👪", to: "fam-1" },
];

/** The phone frame with the running Heima-appen prototype inside. */
export function Phone({ phone, className = "" }: { phone: PhoneController; className?: string }) {
  const { state, go } = phone;
  const meta = SCREENS[state.screen];
  const screenRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  // After the visitor navigates inside the phone, keep keyboard focus in the phone
  // instead of losing it to <body> when the clicked button disappears.
  useEffect(() => {
    const active = document.activeElement;
    const focusLost = !active || active === document.body || screenRef.current?.contains(active);
    if (phone.hasInteracted() && focusLost) bodyRef.current?.focus({ preventScroll: true });
  }, [state.screen, phone]);

  return (
    <div
      className={`relative mx-auto aspect-[390/844] w-full rounded-[52px] bg-[#0B0F18] p-3 shadow-[0_40px_90px_rgba(20,29,46,.35),inset_0_0_0_2px_#2A3142] ${className}`}
    >
      <div
        ref={screenRef}
        role="region"
        aria-label="Heima-appen (klikkbar prototype)"
        className="relative flex h-full flex-col overflow-hidden rounded-[40px] bg-app text-[15px] text-app-ink"
      >
        <div
          aria-hidden
          className="absolute left-1/2 top-2.5 z-10 h-8 w-28 -translate-x-1/2 rounded-full bg-black"
        />
        <div
          aria-hidden
          className="flex h-[50px] flex-none items-center justify-between px-7 pt-1.5 text-sm font-semibold"
        >
          <span>21:14</span>
          <span>5G ▮</span>
        </div>
        <div ref={bodyRef} tabIndex={-1} className="flex min-h-0 flex-1 flex-col outline-none">
          <Screen phone={phone} />
        </div>
        {meta.tab && (
          <nav
            aria-label="Faner"
            className="grid flex-none grid-cols-4 border-t border-app-line bg-white/90 px-1.5 pb-6 pt-2"
          >
            {TABS.map(({ tab, icon, to }) => {
              const current = meta.tab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => go(to)}
                  aria-current={current ? "page" : undefined}
                  className={`grid justify-items-center gap-0.5 text-[11px] font-semibold ${current ? "text-app-amber" : "text-app-muted"}`}
                >
                  <Icon className={`text-xl ${current ? "" : "opacity-70 grayscale"}`}>{icon}</Icon>
                  {tab}
                </button>
              );
            })}
          </nav>
        )}
        {state.toast && (
          <p
            role="status"
            className="absolute inset-x-4 bottom-24 z-20 animate-toast rounded-[14px] bg-[#141D2E] px-3.5 py-3 text-sm text-white"
          >
            {state.toast}
          </p>
        )}
        {state.sheetOpen && <WhoCanSeeSheet phone={phone} />}
        <p className="sr-only" aria-live="polite">
          {meta.title}
        </p>
      </div>
    </div>
  );
}

function WhoCanSeeSheet({ phone }: { phone: PhoneController }) {
  const { state, go, setSheet } = phone;
  const sheetRef = useRef<HTMLDivElement>(null);
  useEffect(() => sheetRef.current?.focus(), []);
  const close = () => setSheet(false);
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") close();
  };

  return (
    <div
      className="absolute inset-0 z-30 flex items-end bg-[rgba(10,14,22,.45)]"
      onClick={close}
      onKeyDown={onKeyDown}
    >
      <div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="kven-sheet-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="grid max-h-[82%] w-full gap-3.5 overflow-y-auto rounded-t-[26px] bg-app px-5 pb-8 pt-5 outline-none"
      >
        <Row>
          <div id="kven-sheet-title" className="flex-1">
            <H3>Kven kan sjå dette?</H3>
          </div>
          <button
            type="button"
            onClick={close}
            className="text-[15px] font-semibold text-app-amber"
          >
            Lukk
          </button>
        </Row>
        <P>Biletet ligg i Familiealbumet.</P>
        {state.members.map((m) => (
          <Row key={m.name}>
            <Avatar member={m} small />
            <span className="flex-1">{m.name}</span>
            <span className="text-[13.5px] text-app-muted">{m.role}</span>
          </Row>
        ))}
        <Card className="border-transparent bg-app-ok-soft">
          <strong className="text-app-ok">Ingen andre. Ikkje ein gong Heima.</strong>
          <span className="text-[13.5px] text-app-muted">
            Tryggleikskopien i Noreg er låst med familienøkkelen.
          </span>
        </Card>
        <Card>
          <span className="text-[13.5px] text-app-muted">Heima-lovnaden</span>
          <strong>«Boksen verkar alltid, og alt er alltid ditt.»</strong>
        </Card>
        <Btn variant="ghost" onClick={() => go("kven-export")}>
          Ta med deg alt
        </Btn>
      </div>
    </div>
  );
}
