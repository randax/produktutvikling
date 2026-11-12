# Heima – product brief

> *Det som er ditt, blir heima.* ("What's yours stays home.")

A private cloud and AI assistant that lives in the family's living room. Status: idea / pre-discovery.

---

## 1. Name: Heima

*Heima* is Nynorsk and dialect for "at home". It's warm, short, works in both written forms of Norwegian, and is easy to say in English. Most importantly, the name is the promise: your data stays home.

- **Tagline:** *Det som er ditt, blir heima.*
- **Alternative taglines:** *Smart som skyen. Privat som dagboka.* ("Smart like the cloud. Private like a diary.") / *Skyen din bor i stua.* ("Your cloud lives in the living room.")
- **Assistant name:** also "Heima". One name for the box, the app and the AI keeps it simple.
- **Brand structure:** "Heima – fra [ISP]". This borrows the trust we already have but leaves room to sell to other ISPs' customers later.
- **Other names considered:** *Loftet* (the attic, where family treasures are kept), *Kista* (the chest), *Lun* (cosy and sheltered). *Stabburet* was dropped because Orkla already owns it as a food brand.
- ⚠️ **To do:** search Patentstyret and EUIPO before committing to the name.

## 2. Branding direction

- **Feeling:** a lamp in the window on a November evening, not a server room. Wool, wood, warm light. No padlocks or circuit boards.
- **Colours:** deep evening blue, warm amber, wool white.
- **The box:** looks like furniture, not electronics. **Decided: direction A «Boka»**, an oak block the size of a book (about 7.5 × 21 × 27 cm) with a thin amber light slit on the front that glows when the assistant works, and only power and network sockets on the back. Something people want on the shelf rather than hidden in a cupboard.
- **Voice:** calm, plain Norwegian, slightly dry. Example: *"Bildene dine er heima. Vi kan ikke se dem. Selv om vi ville."* ("Your photos are at home. We can't see them. Even if we wanted to.")

## 3. Positioning

*Decided in [Positioning against Jottacloud, iCloud and NAS](https://github.com/randax/produktutvikling/issues/6), 2026-11-12.*

> **For Norwegian families who want their digital life to be their own, Heima is the private cloud that lives in your home. Unlike iCloud, Google Photos and Jottacloud, nobody but you can see the family's photos and documents (not us, and not foreign authorities), and they stay yours whatever happens to us. No technical skills needed.**

- **Frame:** *Someone else's cloud* (iCloud, Google Photos, Jottacloud) is easy but not private. A NAS is private but technical. Heima is both.
- **Main message: digital sovereignty.**
  - **Control:** the data lives at home, and only the family holds the key.
  - **Jurisdiction:** no foreign law can reach it.
  - **Independence:** it stays theirs whatever happens to Heima.
- **Second message: the assistant, which privacy makes possible.** *"You'd never let Google's AI read your letters from NAV, the bank and the doctor. Heima's assistant can, because it lives at home with you and never sends anything out."*
- **The key:** a Household key that only Members can unlock.
  - Every adult Member unlocks it with their own Passkey (Face ID or fingerprint), and synced passkeys are allowed.
  - An optional paper Key card is available as a last resort.
  - Heima never holds the key.
- **Proof points:**
  - Open-source software on Heima-boksen.
  - A published independent security audit.
  - A public Continuity guarantee: the box keeps working locally and all data can be exported even if the Subscription ends or Heima shuts down.
- **Competitors are named** in a factual comparison table on the site, verified by legal before publishing.
- **Why not "data in Norway":** Jotta, Telenor and Telia already offer it, often for free. What no Norwegian competitor can say is "we can't see your photos". Jottacloud is not end-to-end encrypted.

## 4. Value proposition

> **For Norwegian families** whose lives are stored in someone else's cloud, **Heima** is a private cloud and assistant that lives in your home. It stores the family's photos and documents, finds anything in seconds, and helps with the paperwork, **and nobody but you can ever look.**

Three reasons a family would buy:

1. **Digital sovereignty:** the photos and documents live at home, only the family holds the key, and the data stays theirs whatever happens to Heima.
2. **A private assistant:** take a photo of a letter from NAV or the tax office, a warranty or a contract, and Heima explains it and reminds you of deadlines, without anything leaving the house.
3. **Memories:** every family photo backed up automatically and searchable in Norwegian, e.g. *"bestemor på hytta, sommaren 2019"* ("grandma at the cabin, summer 2019").

**Why now:** cloud storage prices keep rising, there's growing concern about digital sovereignty and US jurisdiction over data, AI tools want access to everything you own, and fibre's symmetric upload speed finally makes a cloud at home realistic.

## 5. The decisions to make first

*Original proposals. Business model and price since decided in [Pricing of Heima-boksen and the Subscription](https://github.com/randax/produktutvikling/issues/8): the Buyer buys Heima-boksen and pays a monthly Subscription. See the [map](https://github.com/randax/produktutvikling/issues/1) for current decisions.*

| Decision | Recommendation |
|---|---|
| Separate box or built into the router? | **Separate box.** Router replacement cycles and specs are too limiting for AI. It can integrate with the router later. |
| What does the launch include? | **Decided** in [Launch features and prototype flows](https://github.com/randax/produktutvikling/issues/9): photo backup and Norwegian search, letter help with deadline reminders, questions about the family's documents, Private spaces plus a shared Family album, and access away from home. No general chat. Phone app on iPhone and Android. |
| Build or reuse? | **Build on open source** (Immich for photos, llama.cpp/Ollama for AI) with our own app and design on top. ⚠️ Immich is AGPL, so get a legal assessment. |
| What happens if there's a fire or theft? | **A 3-2-1 backup is required:** an encrypted copy in a Norwegian data centre, with the key held only by the customer. Without this the product doesn't work. |
| Language model | Test the Norwegian models from the National Library and UiO's language technology group against small international models. **Norwegian quality is a go/no-go criterion.** |
| Price | **Decided:** two Packages. Heima 2 TB: box 7,990 kr + 89 kr/mnd (recommended). Heima 4 TB: box 9,490 kr + 129 kr/mnd. Assistant in both, backup of everything on the box, no discounts. Hardware sized to fit the price (16–24 GB, gemma-4-12B). |

## 6. Biggest risks (test these first)

1. **iPhone:** iOS restricts photo upload in the background. Immich and others work around this, but it has to work flawlessly or the product fails.
2. **Local AI vs ChatGPT:** don't compete on general intelligence. Compete on "knows your family and nobody else does".
3. **Support costs:** hardware in the home creates support calls. Plan for zero setup: plug it in, scan a QR code, done.
4. **Willingness to pay:** do enough people care about privacy to pay for it? This is the most important question.

## 7. The first 90 days

### Weeks 1–3: find out whether anyone wants it
- Interview 12–15 households: families with young children (who take lots of photos), grandparents, and privacy-conscious households.
- Run a fake-door test: email 10,000 existing customers a link to a landing page with a price and a "Sett meg på venteliste" (join the waiting list) button. Measure conversion.

### Weeks 2–6: find out whether it can be built (in parallel)
- Technical spike: a mini PC with an NPU running Immich, a local LLM and Norwegian search. Measure Norwegian quality, speed, power use and noise.
- Get rough per-unit hardware cost (BOM) quotes from 2–3 hardware partners.

### Weeks 6–12: does it work in real homes?
- Pilot with 20 employee households for 6 weeks, using off-the-shelf hardware and our own app.
- Measure: weekly active use, how many photos get uploaded, support requests per household, and whether they would keep paying.

### Go/no-go criteria

**Demand test** (decided in [Reservation funnel and success metrics](https://github.com/randax/produktutvikling/issues/10)). All of these must be met:
- At least **5%** of unique visitors from the campaign link make a **confirmed** Reservation.
- At least **40%** of confirmed reservers answer «Ja» to the price question, and at most **30%** answer «Nei, det er for dyrt».
- At least **1,000 campaign visitors** before the result is read. Below that, the result is inconclusive, not a no-go.

**Pilot** (after the demand test):
- Norwegian AI quality that the pilot households call **"good enough"**.
- **Fewer than one support request** per household per month.

## 8. Team for this phase

- Product manager
- Designer
- 2–3 developers (mobile app, backend/embedded)
- Hardware partner
- Help from legal and privacy specialists

## 9. Possible next steps

1. Build the landing page for the fake-door test.
2. Write the interview guide for the customer interviews.
3. Stress-test the idea with a sceptical-investor review.
