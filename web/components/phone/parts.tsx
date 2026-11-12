// Small building blocks for the phone screens. The app keeps its own light palette.
import type { ComponentProps, CSSProperties, ReactNode } from "react";
import type { Member } from "./model";

export function Body({
  center = false,
  flush = false,
  children,
}: {
  center?: boolean;
  flush?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`flex min-h-0 flex-1 flex-col gap-3.5 overflow-y-auto ${flush ? "" : "px-5 pb-5 pt-2"} ${center ? "items-center justify-center text-center" : ""}`}
    >
      {children}
    </div>
  );
}

export const Spacer = () => <div className="flex-1" />;

export function H2({ children }: { children: ReactNode }) {
  return <h3 className="mt-1 font-display text-[26px] font-bold leading-[1.1]">{children}</h3>;
}

export function H3({ children }: { children: ReactNode }) {
  return <h4 className="font-display text-[21px] font-bold leading-[1.15]">{children}</h4>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="leading-normal text-app-muted">{children}</p>;
}

export function Muted({ children }: { children: ReactNode }) {
  return <p className="text-[13.5px] text-app-muted">{children}</p>;
}

const BTN = {
  primary: "bg-[#141D2E] text-white",
  amber: "bg-glow text-[#2A1A05]",
  ghost: "border border-app-line text-app-ink",
};

export function Btn({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"button"> & { variant?: keyof typeof BTN }) {
  return (
    <button
      type="button"
      {...props}
      className={`w-full flex-none rounded-2xl px-4 py-3.5 text-[15px] font-semibold disabled:opacity-50 ${BTN[variant]} ${className}`}
    />
  );
}

export function Back({ children, ...props }: ComponentProps<"button">) {
  return (
    <button
      type="button"
      {...props}
      className={`self-start text-[15px] font-semibold text-app-amber ${props.className ?? ""}`}
    >
      {children}
    </button>
  );
}

export function Card({
  className = "",
  children,
  style,
}: {
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      style={style}
      className={`grid gap-1.5 rounded-[18px] border border-app-line bg-app-card px-4 py-3.5 text-left ${className}`}
    >
      {children}
    </div>
  );
}

export function TapCard({ children, ...props }: ComponentProps<"button">) {
  return (
    <button
      type="button"
      {...props}
      className="w-full flex-none rounded-[18px] border border-app-line bg-app-card px-4 py-3.5 text-left"
    >
      {children}
    </button>
  );
}

export function Row({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`flex items-center gap-3 ${className}`}>{children}</div>;
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-app-ok-soft px-3 py-1.5 text-[13px] font-semibold text-app-ok">
      {children}
    </span>
  );
}

export function Chip({ children, muted = false }: { children: ReactNode; muted?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-semibold ${muted ? "border border-app-line bg-app-card text-app-muted" : "bg-app-amber-soft text-[#6B3E07]"}`}
    >
      {children}
    </span>
  );
}

/** Decorative emoji, hidden from screen readers. */
export function Icon({ children, className = "" }: { children: string; className?: string }) {
  return (
    <span aria-hidden className={className}>
      {children}
    </span>
  );
}

export function BigIcon({ children, small = false }: { children: string; small?: boolean }) {
  return (
    <span
      aria-hidden
      className={`grid flex-none place-items-center bg-app-amber-soft ${small ? "size-12 rounded-[14px] text-[22px]" : "size-[88px] rounded-[28px] text-[40px]"}`}
    >
      {children}
    </span>
  );
}

export function Avatar({ member, small = false }: { member: Member; small?: boolean }) {
  return (
    <span
      aria-hidden
      style={{ background: member.color }}
      className={`grid flex-none place-items-center rounded-full font-bold text-white ${small ? "size-8 text-[13px]" : "size-10"}`}
    >
      {member.name[0]}
    </span>
  );
}

export function MemberCard({ member }: { member: Member }) {
  return (
    <Card>
      <Row>
        <Avatar member={member} />
        <div className="min-w-0 flex-1">
          <strong>{member.name}</strong>
          <p className="text-[13.5px] text-app-muted">{member.role}</p>
        </div>
        <Pill>
          <Icon>🔑</Icon> Har nøkkel
        </Pill>
      </Row>
    </Card>
  );
}

const PHOTOS = [
  "linear-gradient(150deg,#C9A57B,#6E7F91)",
  "linear-gradient(160deg,#8FA9B8,#3E5468)",
  "linear-gradient(140deg,#D8C3A5,#A0704A)",
  "linear-gradient(170deg,#9DB59A,#4E6B53)",
  "linear-gradient(150deg,#E2C9A0,#C07A44)",
  "linear-gradient(160deg,#B8C4D0,#5C6B80)",
  "linear-gradient(140deg,#A88B6E,#4B3A2C)",
  "linear-gradient(170deg,#CBB8D6,#6B5A7D)",
  "linear-gradient(150deg,#E7D7B9,#8C9A72)",
];

export const photo = (i: number) => PHOTOS[i % PHOTOS.length];

/** A grid of sample photos. Either selectable, or each opens the photo view. */
export function PhotoGrid({
  count,
  offset = 0,
  selected,
  onPick,
}: {
  count: number;
  offset?: number;
  selected?: number[];
  onPick: (index: number) => void;
}) {
  return (
    <div className="grid flex-none grid-cols-3 gap-1">
      {Array.from({ length: count }, (_, i) => {
        const isSelected = selected?.includes(i) ?? false;
        return (
          <button
            key={i}
            type="button"
            onClick={() => onPick(i)}
            aria-label={`Bilete ${i + 1}`}
            aria-pressed={selected ? isSelected : undefined}
            style={{ background: photo(i + offset) }}
            className="relative aspect-square rounded-lg"
          >
            {isSelected && (
              <span
                aria-hidden
                className="absolute right-1.5 top-1.5 grid size-[22px] place-items-center rounded-full bg-glow text-[13px] font-bold text-[#2A1A05]"
              >
                ✓
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export function Viewfinder({ hint, children }: { hint: string; children: ReactNode }) {
  return (
    <div className="relative grid aspect-[3/4] flex-none place-items-center overflow-hidden rounded-[20px] bg-[#111]">
      {children}
      <p className="absolute inset-x-0 bottom-3.5 text-center text-[13px] text-white">{hint}</p>
    </div>
  );
}

export function Bubble({ me = false, children }: { me?: boolean; children: ReactNode }) {
  return (
    <div
      className={`max-w-[86%] rounded-[18px] px-3.5 py-2.5 leading-[1.45] ${me ? "self-end bg-[#141D2E] text-white" : "self-start border border-app-line bg-app-card"}`}
    >
      {children}
    </div>
  );
}

export function InfoSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.08em] text-app-muted">
        {title}
      </p>
      <p className="leading-normal">{children}</p>
    </div>
  );
}
