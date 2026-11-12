import type { ReactNode } from "react";
import type { EmailContent } from "@/lib/mail/templates";

/**
 * Test-mode box: shows the email that would have been sent. Only render this
 * when isMockMode() is true.
 */
export function MockEmailPreview({
  email,
  children,
}: {
  email: EmailContent;
  children?: ReactNode;
}) {
  return (
    <aside
      aria-label="Førehandsvising i testmodus"
      className="grid gap-4 rounded-2xl border-2 border-dashed border-amber bg-amber-soft p-5 text-ink"
    >
      <p className="font-semibold">Førehandsvising (testmodus): e-posten vart ikkje send</p>
      {children}
      <div className="grid gap-2 rounded-xl bg-surface p-4 text-[15px]">
        <p>
          <span className="text-muted">Emne: </span>
          <strong>{email.subject}</strong>
        </p>
        <p className="whitespace-pre-wrap break-words">{email.text}</p>
      </div>
    </aside>
  );
}
