import type { EmailContent } from "./templates";

export interface EmailMessage extends EmailContent {
  to: string;
}

/** Sends email. Swap the console implementation for an EU email provider later. */
export interface Mailer {
  send(message: EmailMessage): Promise<void>;
}

/** Mock mailer: prints the email to the server console instead of sending it. */
export class ConsoleMailer implements Mailer {
  async send({ to, subject, text }: EmailMessage): Promise<void> {
    console.info(`\n[heima:mock-mailer] Til: ${to}\nEmne: ${subject}\n\n${text}\n`);
  }
}
