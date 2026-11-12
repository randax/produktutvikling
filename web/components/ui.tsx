import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { IMAGES, IMAGE_CAPTION, type ImageKey } from "@/lib/images";

type Variant = "primary" | "ghost" | "ghost-night";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-amber text-on-amber hover:brightness-110",
  ghost: "border border-line text-ink hover:border-amber",
  "ghost-night": "border border-night-line text-night-ink hover:border-glow",
};

export function buttonClass(variant: Variant = "primary", extra = ""): string {
  return `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-base font-semibold no-underline transition ${VARIANTS[variant]} ${extra}`;
}

export function ButtonLink({
  variant,
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return <Link {...props} className={buttonClass(variant, className)} />;
}

export const RESERVE_LABEL = "Reserver – heilt uforpliktande";

export function ReserveLink({ className }: { className?: string }) {
  return (
    <ButtonLink href="/#reserver" className={className}>
      {RESERVE_LABEL}
    </ButtonLink>
  );
}

export function Eyebrow({ children, night = false }: { children: ReactNode; night?: boolean }) {
  return (
    <p
      className={`text-[13px] font-semibold uppercase tracking-[0.12em] ${night ? "text-glow" : "text-amber-ink"}`}
    >
      {children}
    </p>
  );
}

export function Section({
  id,
  night = false,
  className = "",
  children,
}: {
  id?: string;
  night?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`py-14 md:py-[72px] ${night ? "bg-night text-night-ink" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

export const h1Class = "text-[clamp(36px,6.4vw,64px)] font-bold tracking-[-0.02em]";
export const h2Class = "text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.01em]";
export const ledeClass = "max-w-[58ch] text-[19px] text-muted";

/** A concept render with its required caption. */
export function ConceptImage({
  image,
  priority = false,
  sizes = "(min-width: 1080px) 520px, (min-width: 768px) 50vw, 100vw",
  className = "",
}: {
  image: ImageKey;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const { src, alt } = IMAGES[image];
  return (
    <figure className={`m-0 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1000}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full rounded-2xl"
      />
      <figcaption className="mt-2 text-[13px] text-muted">{IMAGE_CAPTION}</figcaption>
    </figure>
  );
}

/** Small red marker for content that still needs checking. */
export function Flag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-md bg-flag-soft px-2 py-0.5 text-xs font-semibold text-flag">
      {children}
    </span>
  );
}

/** A simple, narrow page body (thank-you pages, privacy notice). */
export function NarrowPage({
  children,
  className = "gap-5",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className="wrap py-14 md:py-20">
      <div className={`grid max-w-[760px] ${className}`}>{children}</div>
    </section>
  );
}
