# Heima demand-test website

The Next.js site for the Heima demand test. Copy and structure come from
[`docs/website-copy.md`](../docs/website-copy.md) and [`docs/messaging.md`](../docs/messaging.md).
All user-facing copy is nynorsk.

## Run it

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm lint
pnpm build && pnpm start
```

Node 20+ and pnpm. No environment variables are needed locally: with no `DATABASE_URL`, the site
runs in **mock mode**.

## Pages

| Path | What |
|---|---|
| `/` | Landing page with the hero phone prototype and **the only Reservation form** (`#reserver`) |
| `/heima-boksen` | Product page for the box |
| `/heima-appen` | Product page for the app, full phone prototype (six flows) |
| `/personvern` | Privacy notice (**draft, needs legal approval**) |
| `/takk` | After the form is sent |
| `/stadfesta?token=…` | After the confirmation link in the email |
| `/meld-av?token=…` | Unsubscribe and delete (target of the link in the «Du står på lista» email) |

Package buttons («Reserver Heima 4 TB») link to `/?pakke=4tb#reserver` and preselect that
Package in the form (client state in `components/package-choice.tsx`, also read from `?pakke=`).

## How the Reservation funnel works

1. The form (`components/reservation-form.tsx`) posts to the server action `reserve` in
   `app/actions.ts`. It also works without JavaScript.
2. `lib/reservation/validate.ts` validates on the server (email, 4-digit postcode, the two
   required consents, fixed answer options) and returns nynorsk error messages.
3. The store saves a **pending** Reservation with consent evidence (`consentedAt`,
   `consentVersion`, later `confirmedAt`) and returns a random token.
4. The mailer sends the confirmation email (`lib/mail/templates.ts`) with a link to
   `/stadfesta?token=…`.
5. `/stadfesta` confirms the token (idempotent) and, the first time, sends «Du står på lista».
6. `/meld-av` deletes the Reservation after a button press (a POST, so email link scanners can't
   delete anything).

### Where the mocks live

| Piece | Interface | Mock implementation |
|---|---|---|
| Storage | `ReservationStore` in `lib/reservation/types.ts` | `InMemoryReservationStore` in `lib/reservation/memory-store.ts` (a `Map` on `globalThis`; lost on restart) |
| Email | `Mailer` in `lib/mail/mailer.ts` | `ConsoleMailer` (prints the email to the server console) |
| Selection | `getServices()` in `lib/services.ts` | the **only** place implementations are chosen |

**Mock mode** (`isMockMode()` in `lib/services.ts`) is on when `HEIMA_MOCK=1`, or by default
when `DATABASE_URL` is unset. `HEIMA_MOCK=0` turns it off. In mock mode only:

- `/takk` gets the token in the URL and shows a box «Førehandsvising (testmodus): e-posten vart
  ikkje send» with the confirmation email and a link «Simuler at du trykte på lenkja i e-posten».
- `/stadfesta` shows the «Du står på lista» email and a link to simulate unsubscribing.

With mock mode off, the token never appears in the `/takk` URL and no preview is rendered.

The in-memory store is for local demos only. On Vercel, different function instances don't share
memory, so a confirm link can miss the Reservation. Don't run a real campaign in mock mode.

### Swapping in a real database and mailer

1. Write a `PostgresReservationStore implements ReservationStore`. Suggested table:
   `reservations(token text primary key, email text, postnummer char(4), pakke text, hushald text null,
   bilete text[], viktigast text null, pris text null, delbetal text null, consent_alder bool,
   consent_kontakt bool, consent_intervju bool, consent_version text, consented_at timestamptz,
   confirmed_at timestamptz null)`. Consider a unique index on lower(email) and upserting.
2. Write a `Mailer` for an EU email provider (e.g. one with an EU region and the ISP's verified
   sending domain). Turn **off** open and click tracking.
3. Return both from `getServices()` in `lib/services.ts` when mock mode is off.
4. Set `DATABASE_URL`, the mail provider's key, `SITE_URL` (absolute origin for links in emails;
   otherwise the request host is used) and `HEIMA_MOCK=0`.
5. Add scheduled deletion: pending Reservations after N days (the privacy notice says [30 dagar]),
   and everything six months after the go/no-go decision. Send `noGoEmail()` on a no-go.

## Analytics

`@vercel/analytics` (`<Analytics />` in `app/layout.tsx`) counts page views without cookies.
Campaign visits with `?kjelde=…` show up in page views. Custom events:

| Event | Where | Fired |
|---|---|---|
| `prototype_opened` `{page}` | `components/phone/use-phone.ts` | first click in or beside a phone prototype |
| `package_selected` `{pakke}` | `components/package-choice.tsx` | package button, or changing the size in the form |
| `form_started` | `components/reservation-form.tsx` | first focus in the form |
| `reservation_sent` `{pakke}` | `app/actions.ts` (server) | valid form saved |
| `reservation_confirmed` `{pakke}` | `app/stadfesta/page.tsx` (server) | first confirmation of a token |

Custom events are only recorded on Vercel Pro/Enterprise plans. Locally they are logged to the
server console (server events) or ignored (client events).

## Code map

```
app/            routes, root layout, server actions
components/     page sections, form, site chrome
components/phone/  the clickable Heima-appen prototype (model, state hook, screens, frame)
lib/            packages, images, company placeholders, reservation domain, mail, services
public/images/  the seven concept renders (each shown with «Konseptbilete (3D-illustrasjon)»)
```

## Before the real campaign

- [ ] **Move the project to the ISP's own Vercel team.** The current link is a personal Hobby
      team, which is for non-commercial use only.
- [ ] **Provision EU Postgres** and an **EU email sender** with the ISP's verified domain; implement
      the real store and mailer (see above); set function region to the EU.
- [ ] **Fill in the company details** in `lib/company.ts` (`[Selskapsnamn AS]`, org.nr., address,
      email). They appear in the footer, emails and privacy notice.
- [ ] **Legal approval** of all copy, the comparison table (and its sources/date line,
      `components/comparison.tsx`; the Jottacloud «stop paying» cell is unverified), the
      Heima-lovnaden, the privacy notice (`app/personvern/page.tsx`, marked «Utkast») and the footer.
      Fill in the processor list and dates in the privacy notice.
- [ ] **Nynorsk native review** of all copy, including text written during the build that is not in
      `docs/website-copy.md` (form error messages, `/meld-av`, `/stadfesta` invalid-token message,
      privacy notice, image alt texts, skip link).
- [ ] **Turn off mock mode**: `HEIMA_MOCK=0` in production, and check that `/takk` shows no preview.
- [ ] Remove the «Utkast» flags only once legal has signed off.
