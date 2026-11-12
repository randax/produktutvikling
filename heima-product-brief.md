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
- **The box:** looks like furniture, not electronics. Wood or ceramic, the size of a book, with a soft amber glow when the AI is working. Something people want on the shelf rather than hidden in a cupboard.
- **Voice:** calm, plain Norwegian, slightly dry. Example: *"Bildene dine er heima. Vi kan ikke se dem. Selv om vi ville."* ("Your photos are at home. We can't see them. Even if we wanted to.")

## 3. Value proposition

> **For Norwegian families** whose lives are stored in iCloud and Google Photos, **Heima** is a private cloud and AI assistant that lives in your home. It stores the family's photos and documents, finds anything in seconds, and helps with the paperwork, **without your life being stored on a US server.**

Three reasons a family would buy:

1. **Memories:** every family photo backed up automatically and searchable in Norwegian, e.g. *"bestemor på hytta, sommeren 2019"* ("grandma at the cabin, summer 2019").
2. **Admin help:** take a photo of a letter from NAV or the tax office, a warranty or a contract, and Heima explains it and reminds you of deadlines.
3. **Peace of mind:** no storage prices creeping up, no training on your data, and an encrypted backup in Norway that only you hold the key to.

**Why now:** cloud storage prices keep rising, there's growing concern about digital sovereignty and US jurisdiction over data, AI tools want access to everything you own, and fibre's symmetric upload speed finally makes a cloud at home realistic. That last point is our unfair advantage.

## 4. The decisions to make first

| Decision | Recommendation |
|---|---|
| Separate box or built into the router? | **Separate box.** Router replacement cycles and specs are too limiting for AI. It can integrate with the router later. |
| What does the MVP include? | **Photos first, AI second.** Photo backup is the purchase reason people understand; the AI makes it special. Document help comes in v1.5. |
| Build or reuse? | **Build on open source** (Immich for photos, llama.cpp/Ollama for AI) with our own app and design on top. ⚠️ Immich is AGPL, so get a legal assessment. |
| What happens if there's a fire or theft? | **A 3-2-1 backup is required:** an encrypted copy in a Norwegian data centre, with the key held only by the customer. Without this the product doesn't work. |
| Language model | Test the Norwegian models from the National Library and UiO's language technology group against small international models. **Norwegian quality is a go/no-go criterion.** |
| Price hypothesis | About 149–199 kr/month including the box, 2 TB and the backup. Bundled with internet it should cost about the same as iCloud 2 TB. |

## 5. Biggest risks (test these first)

1. **iPhone:** iOS restricts photo upload in the background. Immich and others work around this, but it has to work flawlessly or the product fails.
2. **Local AI vs ChatGPT:** don't compete on general intelligence. Compete on "knows your family and nobody else does".
3. **Support costs:** hardware in the home creates support calls. Plan for zero setup: plug it in, scan a QR code, done.
4. **Willingness to pay:** do enough people care about privacy to pay for it? This is the most important question.

## 6. The first 90 days

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
- At least **5% conversion** on the fake door.
- Norwegian AI quality that the pilot households call **"good enough"**.
- **Fewer than one support request** per household per month.

## 7. Team for this phase

- Product manager
- Designer
- 2–3 developers (mobile app, backend/embedded)
- Hardware partner
- Help from legal and privacy specialists

## 8. Possible next steps

1. Build the landing page for the fake-door test.
2. Write the interview guide for the customer interviews.
3. Stress-test the idea with a sceptical-investor review.
