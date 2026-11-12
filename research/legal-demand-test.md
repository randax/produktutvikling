# Legal constraints for the Reservation demand test (issue #5)

**Question:** What are the legal constraints on Heima's demand test in Norway, and what must the website say or do to stay within them?

**Researched:** 2026-11-12. **Status:** research notes, **not legal advice**. Several points below are interpretations of primary texts where no authority has ruled. Those are marked **[uncertain]**. Have the ISP's legal and privacy team (or external counsel) sign off before launch. Forbrukertilsynet does not pre-approve marketing but answers questions ([Forbrukertilsynet e-post/SMS guide](https://www.forbrukertilsynet.no/lov-og-rett/veiledninger-og-retningslinjer/forbrukertilsynets-veiledning-markedsforing-via-e-post-sms-o-l)).

Terms follow `GLOSSARY.md` on `main`: **Reservation**, **Buyer**, **Household**, **Heima-boksen**, **Heima-appen**, **Subscription**.

---

## TL;DR

1. **A non-binding Reservation for a product that doesn't exist yet is lawful**, provided the page is honest that it's a concept, isn't on sale and may never launch. The main risk is § 7 of markedsføringsloven (misleading about "ytelsens eksistens eller art", main characteristics and price) and § 8 (misleading omissions) ([§ 7](https://lovdata.no/lov/2009-01-09-2/§7), [§ 8](https://lovdata.no/lov/2009-01-09-2/§8)).
2. **"Konsept" images need a specific disclaimer, not a generic one.** Forbrukertilsynet's guidance on homes not yet built rejects generic disclaimers like "avvik kan forekomme". You must say *what* may differ ([Forbrukertilsynet, prosjekterte boliger](https://www.forbrukertilsynet.no/vi-jobber-med/bolig/veileder-for-markedsforing-av-bolig/prosjekterte-boliger)). It also accepts early marketing to an interest list for homes not yet built ([kanaler og utforming](https://www.forbrukertilsynet.no/vi-jobber-med/bolig/veileder-for-markedsforing-av-bolig/kanaler-og-utforming)), which is the closest Norwegian analogue to a Reservation.
3. **No angrerett or pre-contract duties apply** while the Reservation carries no price, payment or obligation. Angrerettloven only covers contracts where the consumer pays or undertakes to pay ([angrerettloven § 1](https://lovdata.no/dokument/NL/lov/2014-06-20-27)). **[uncertain]** Any promise made on the page (priority, a "reservation price") may still bind the ISP.
4. **The site cannot be fully anonymous.** It can be *branded* without the ISP's name, but three separate rules require the trader to be identified:
   - ehandelsloven § 8: name, address, e-mail, organisation number ([ehandelsloven § 8](https://lovdata.no/lov/2003-05-23-35/§8)).
   - ehandelsloven § 9: "det [skal] fremgå klart hvem markedsføringen skjer på vegne av" ([§ 9](https://lovdata.no/lov/2003-05-23-35/§9)).
   - GDPR art. 13(1)(a): the controller's identity, given when the data is collected ([GDPR art. 13](https://lovdata.no/lov/2018-06-15-38/gdpr/a13)).

   A .no domain also shows the holder's name and organisation number publicly ([Norid](https://www.norid.no/en/domeneoppslag/personvern/domeneoppslag/)).
5. **The customer e-mail must come visibly from the ISP.** The existing-customer exception in mfl. § 15(3) only allows the *same legal entity* to market *its own* products "tilsvarende dem som kundeforholdet bygger på" ([§ 15](https://lovdata.no/lov/2009-01-09-2/§15); [Forbrukertilsynet](https://www.forbrukertilsynet.no/lov-og-rett/veiledninger-og-retningslinjer/forbrukertilsynets-veiledning-markedsforing-via-e-post-sms-o-l)).
6. **It's doubtful that a home-cloud box counts as "tilsvarende" to broadband.** Forbrukertilsynet reads "tilsvarende" narrowly: a PC purchase does not cover software, and a CD does not cover a CD player ([guide](https://www.forbrukertilsynet.no/lov-og-rett/veiledninger-og-retningslinjer/forbrukertilsynets-veiledning-markedsforing-via-e-post-sms-o-l)). **Recommendation:** send the first campaign only to customers with a recorded marketing consent that covers the ISP's other products. If you also use the exception, have legal sign it off first. **[uncertain]**
7. **A survey-style e-mail is still marketing.** The same applies to asking for consent by e-mail ([guide §§ 2.5.1, 2.5.4](https://www.forbrukertilsynet.no/lov-og-rett/veiledninger-og-retningslinjer/forbrukertilsynets-veiledning-markedsforing-via-e-post-sms-o-l)).
8. **The Reservation form needs an explicit, unticked consent before you e-mail Reservers later.** Reservers are not customers, so § 15's existing-customer exception never applies to them. Consent for the form data (GDPR art. 6(1)(a)) is the cleanest basis.
9. **Analytics cookies, local storage, fingerprinting and e-mail tracking pixels need prior GDPR-standard consent** under ekomloven § 3-15, in force since 1 January 2025 ([ekomloven § 3-15](https://lovdata.no/lov/2024-12-13-76/§3-15); [Nkom](https://nkom.no/internett/informasjonskapsler-cookies); [EDPB 2/2023](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-22023-technical-scope-art-53-eprivacy-directive_en)). Rejecting must be as easy as accepting.
10. **US hosting is legal; mixing it with Heima's "not on a US server" message is the bigger risk.** Vercel is listed under the EU-US Data Privacy Framework, which still applies after the General Court upheld it in September 2025. An appeal is pending ([Datatilsynet](https://www.datatilsynet.no/aktuelt/aktuelle-nyheter-2025/eu-domstolen-opprettholder-adekvansbeslutningen-for-usa/); [Vercel](https://vercel.com/changelog/vercel-is-now-certified-under-the-eu-us-data-privacy-framework-dpf)). If the page's privacy claims don't match how the page itself handles data, that could breach § 7 as well as hurt the brand. **[uncertain]**
11. **The EU AI Act's labelling duty (art. 50) is not yet law in Norway.** The government is still preparing the KI-lov, and a consultation closes 11 December 2026 ([regjeringen.no, 30.10.2026](https://www.regjeringen.no/no/aktuelt/regjeringen-sender-forenklinger-i-ki-forordningen-pa-horing/id3187283/)). Label AI images anyway, because mfl. § 7 already requires not misleading. Fully AI-generated people don't trigger the retouching-label duty in § 2 ([Forbrukertilsynet FAQ](https://www.forbrukertilsynet.no/vi-jobber-med/merking-av-retusjert-reklame/ofte-stilte-sporsmal-om-retusjert-reklame)).
12. **AGPL-3.0 (Immich) doesn't affect the demand test but shapes the product a lot:**
    - Shipping Immich on Heima-boksen means shipping the Corresponding Source.
    - Because Heima-boksen is a "User Product" whose software the ISP can update, you must also ship the **Installation Information**, so customers can run modified builds.
    - § 13 obliges you to offer source to network users of any modified version.
    - Building Heima-appen as a fork of Immich's AGPL mobile app or SDK raises the known App Store / (A)GPL conflict.

    Sources: [AGPL §§ 6, 13](https://www.gnu.org/licenses/agpl-3.0.txt); [Immich LICENSE](https://github.com/immich-app/immich/blob/main/LICENSE); [FSF](https://www.fsf.org/blogs/licensing/more-about-the-app-store-gpl-enforcement).
13. **Immich's trademark:** Immich (FUTO) asks commercial resellers not to display Immich trademarks or imply endorsement ([Immich FAQ](https://github.com/immich-app/immich/blob/main/docs/docs/FAQ.mdx)). Don't put "Immich" on the demand-test site.
14. **Net neutrality is irrelevant to the test, and to selling to other ISPs' customers.** The obligations fall on internet access providers. Heima, as an application on top, benefits from them ([Nkom](https://nkom.no/internett/nettnoytralitet/hva-er-nettnoytralitet)). The ISP should not zero-rate or prioritise Heima traffic on its own network without a separate assessment.

---

## 1. Marketing a product that doesn't exist yet (markedsføringsloven, Forbrukertilsynet)

### 1.1 The rules that apply

- **§ 6:** Unfair commercial practices are banned. Practices that are misleading under § 7 or § 8 are always unfair ([§ 6](https://lovdata.no/dokument/NL/lov/2009-01-09-2)).
- **§ 7, misleading actions.** A practice is misleading if it contains incorrect information, or is likely to deceive, about elements including:
  - (a) "ytelsens eksistens eller art"
  - (b) main characteristics, "for eksempel dens tilgjengelighet, fordeler eller risiko"
  - (d) the price or how it is calculated
  - (f) the trader's nature, characteristics and rights

  In each case the practice must be likely to make consumers take a "økonomisk beslutning" (transactional decision) they would not otherwise have taken ([§ 7](https://lovdata.no/lov/2009-01-09-2/§7)).
- **§ 8, misleading omissions.** Hiding material information, or giving it in an unclear or ambiguous way, is misleading. So is failing to make the commercial purpose clear. **For an "oppfordring til kjøp"** (a commercial communication that states the product's characteristics and price and lets the consumer buy), these items are material:
  - main characteristics
  - the trader's identity and geographic address
  - the price including taxes
  - where it applies, the existence of angrerett

  Source: [§ 8](https://lovdata.no/lov/2009-01-09-2/§8).
- **Blacklist (forskrift om urimelig handelspraksis, FOR-2009-06-01-565).** These practices are banned in all circumstances ([forskrift](https://lovdata.no/dokument/SF/forskrift/2009-06-01-565)):
  - Item 5, bait advertising: inviting purchase at a stated price without a reasonable basis to supply.
  - Item 7: falsely claiming a product is available only for a "svært begrenset tidsrom".
  - Item 20: misusing "gratis".

### 1.2 What this means for the demand test

- **Is the page an "oppfordring til kjøp"? [uncertain]** A Reservation page with a product, a price estimate and a CTA, but no way to buy, arguably is *not* one, because the consumer cannot buy. So the full § 8(3) list may not apply strictly. But § 7 (existence, characteristics, price) and the general § 8(1) duty apply to *any* commercial practice. The safe approach is to give the § 8(3) information anyway: identity, address, price incl. mva, and a statement that there is nothing to buy.
- **Existence (§ 7(1)(a)).** The page must not create the impression that Heima exists, is in stock or is sold today. Realistic AI renders combined with "Reserver no" create exactly that risk. The page and every image need a visible concept statement (wording in section 8 below).
- **Specific, not generic, disclaimers.** In its guidance on homes not yet built, Forbrukertilsynet says images must be "balanserte og realistiske". It also says you "kan ikke ta generelle forbehold som «avvik kan forekomme», men må forklare tydelig hva avvikene består i" ([prosjekterte boliger](https://www.forbrukertilsynet.no/vi-jobber-med/bolig/veileder-for-markedsforing-av-bolig/prosjekterte-boliger)). By analogy: say that design, size, materials, features and price are not decided, and that the product may not launch.
- **Early interest lists are an accepted model.** For homes not yet built, Forbrukertilsynet accepts marketing before sale "bare [ved] tidlig markedsføring hvor interessenter kan sette seg på en interessentliste" ([kanaler og utforming](https://www.forbrukertilsynet.no/vi-jobber-med/bolig/veileder-for-markedsforing-av-bolig/kanaler-og-utforming)). That is a sector-specific rule, from eiendomsmeglingsloven. But it shows the authority sees interest lists as the legitimate pre-sale format.
- **Price (§ 7(1)(d), § 8(3)(e)).**
  - Show the price as an *estimate* ("venta pris", "prisestimat") including mva.
  - Show both the Heima-boksen price and the monthly Subscription.
  - ehandelsloven § 9(2) also requires that, where prices are stated in electronic marketing to consumers, the total cost including taxes appears ([ehandelsloven § 9](https://lovdata.no/lov/2003-05-23-35/§9)).
  - Note: the product brief says "149–199 kr/month including the box", while the glossary says the Subscription is paid *on top of* buying the box. Settle the price model before publishing a figure.
- **No fake scarcity or deadlines.** Don't say "Berre 500 boksar" or "Reserver innan fredag" unless it is true (blacklist item 7, [forskrift](https://lovdata.no/dokument/SF/forskrift/2009-06-01-565)).
- **Product claims.** "Vi kan ikkje sjå bileta dine", "kryptert backup i Noreg" and "ingen trening på dataa dine" are claims about main characteristics (§ 7(1)(b)) of something not yet designed. Phrase them as design goals ("Målet er at …", "Heima skal …") rather than facts. **[uncertain]** That is how far a concept disclaimer reaches.
- **No "fake buy" button.** A "Kjøp no" button that reveals "ikkje tilgjengeleg" only after the click misleads about existence (§ 7(1)(a)). The Reservation design avoids this. Keep the CTA as "Reserver – uforpliktande".
- **Environmental claims.** Norway has adopted amendments implementing the EU "empowering consumers for the green transition" directive (2024/825). They change §§ 5, 7 and 8 from a date the King will decide ([lovdata note on §§ 7–8](https://lovdata.no/lov/2009-01-09-2/§8); [Stortinget lovvedtak 85 (2025–2026)](https://stortinget.no/no/Saker-og-publikasjoner/Vedtak/Beslutninger/Lovvedtak/2025-2026/vedtak-202526-085/?m=-1)). Avoid generic green claims ("grøn", "berekraftig", "energismart") on the test site.

### 1.3 AI-generated "konsept" images

- **Retouching-label duty (§ 2).** This applies where the shape, size or skin of a *real* body is changed by retouching or other manipulation, including with AI. Forbrukertilsynet's view is that "dagens lovbestemmelse [åpner ikke] for at generering av en ny kropp omfattes av merkeplikten". Fully AI-generated people are therefore not covered, though radical AI edits of real people are judged case by case ([Forbrukertilsynet FAQ, updated 29.09.2025](https://www.forbrukertilsynet.no/vi-jobber-med/merking-av-retusjert-reklame/ofte-stilte-sporsmal-om-retusjert-reklame)). If you photograph real people and AI-edit their bodies or skin, the standard label is required.
- **EU AI Act art. 50(4).** Deployers of AI that generates a "deep fake" must disclose that the content is artificially generated. Art. 50 has applied in the EU since 2 August 2026 ([art. 50 text](https://artificialintelligenceact.eu/article/50/); [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2024/1689/oj)). **It is not yet Norwegian law.** The government is still preparing the KI-lov and sent the EU "omnibus" changes on consultation on 30 October 2026, with a deadline of 11 December 2026 ([regjeringen.no](https://www.regjeringen.no/no/aktuelt/regjeringen-sender-forenklinger-i-ki-forordningen-pa-horing/id3187283/)). Whether a render of a non-existent product is a "deep fake" at all is **[uncertain]**. Label anyway ("Konseptbilete laga med KI"): it costs nothing and is what § 7 effectively requires.

### 1.4 "Reserver", Reservation wording, angrerett and contract law

- **Angrerettloven** applies to sales where "forbrukeren betaler eller påtar seg å betale en pris" and the contract is made at a distance ([§ 1](https://lovdata.no/dokument/NL/lov/2014-06-20-27)). It also covers contracts where the consumer provides personal data instead of money, but that requires a contract for supply of goods or services. A Reservation with no price, no payment and no obligation is not one. **Angrerett and the § 8 pre-contract information duties are therefore not triggered.** Showing angrerett information on the test site would wrongly suggest a sale.
- **When this changes:** the moment you take a deposit, a payment card or a "binding pre-order", the Reservation becomes a distance contract. Angrerettloven then applies in full, and mfl. § 8(3)(d) makes angrerett information material ([§ 8](https://lovdata.no/lov/2009-01-09-2/§8)). Keep the demand test free of any payment.
- **Avtaleloven § 9.** A message marked "uten forbindtlighet" is not an offer but an invitation to make one. If the sender then receives an offer it must assume was prompted by the message, it must reject it promptly or be deemed to have accepted ([avtaleloven](https://lovdata.no/dokument/NL/lov/1918-05-31-4)). **[uncertain]** A consumer's Reservation is not a purchase offer, because it has no price and is expressly non-binding. Still, state explicitly that it is **non-binding for both parties** and is not an order, so nothing can be read as a purchase offer.
- **Promises made on the page may bind the ISP. [uncertain]** Avoid these unless the company will honour them:
  - "Dei som reserverer får førsteprioritet"
  - "Reservasjonspris 149 kr"
  - "Gratis boks for dei 100 første"

  Under Norwegian contract law, unilateral promises can bind. Breaking them would also be misleading under § 7(1)(c) ("omfanget av den næringsdrivendes forpliktelser") ([§ 7](https://lovdata.no/lov/2009-01-09-2/§7)).
- **"Reserver" vs "venteliste".** "Reserver" is lawful if paired with "uforpliktande" and an explanation. The glossary prefers "Reservation", and the brief's "Sett meg på venteliste" is the more conservative label. If you test both labels, both need the same disclaimers.

---

## 2. Running the site without naming the ISP

**Bottom line:** you may *brand* the site as "Heima" without the ISP's logo. You may **not** hide *who the trader is*: it must be findable on the site and stated in the privacy notice and the e-mail.

| Rule | What it requires | Source |
|---|---|---|
| ehandelsloven § 8 | An information-society service provider must "alltid" give its name, address, e-mail address and other direct contact details, the business register, organisation number and VAT status. These must be "lett og direkte tilgjengelig". | [lovdata](https://lovdata.no/lov/2003-05-23-35/§8) |
| ehandelsloven § 9 | In electronic marketing, "det [skal] fremgå klart hvem markedsføringen skjer på vegne av". Unsolicited e-mail must show on receipt that it is marketing. | [lovdata](https://lovdata.no/lov/2003-05-23-35/§9); [Forbrukertilsynet](https://www.forbrukertilsynet.no/lov-og-rett/veiledninger-og-retningslinjer/forbrukertilsynets-veiledning-markedsforing-via-e-post-sms-o-l) |
| mfl. § 7(1)(f), § 8(1) and (3)(b) | Misleading about the trader's nature, or omitting the trader's identity and address in an invitation to purchase, or hiding the commercial purpose. | [§ 7](https://lovdata.no/lov/2009-01-09-2/§7), [§ 8](https://lovdata.no/lov/2009-01-09-2/§8) |
| GDPR art. 13(1)(a) | "Identity and contact details of the controller" must be given when the personal data is collected. | [lovdata GDPR art. 13](https://lovdata.no/lov/2018-06-15-38/gdpr/a13) |
| Norid | A .no domain held by an organisation shows its organisation number, name, e-mail and postal address in public lookup. Holders need a Brønnøysund organisation number. | [Norid lookup](https://www.norid.no/en/domeneoppslag/personvern/domeneoppslag/); [who can hold .no](https://www.norid.no/en/nytt-domenenavn/hvem-kan-ha-domene/) |

**Notes:**

- **Does ehandelsloven apply to a free landing page? [uncertain]** It covers services "som vanligvis ytes mot vederlag" ([§ 1](https://lovdata.no/dokument/NL/lov/2003-05-23-35)). A commercial site that markets a product is commonly treated as within scope. Compliance costs one footer line, so assume it applies.
- **Option: a separate legal entity** (e.g. a new "Heima AS" owned by the ISP).
  - It can be the named trader and controller on the site without the ISP's name appearing. **[uncertain]** If the entity is a shell meant to hide who is really behind the offer, that could itself mislead under § 7(1)(f).
  - **But:** the § 15(3) existing-customer exception requires the *same legal person* that holds the customer relationship, marketing *its own* products. A subsidiary can't use the parent's customer list, and the parent can't use the exception to market the subsidiary's products ([Forbrukertilsynet guide § 3](https://www.forbrukertilsynet.no/lov-og-rett/veiledninger-og-retningslinjer/forbrukertilsynets-veiledning-markedsforing-via-e-post-sms-o-l)).
  - **So if the first campaign e-mails ISP customers, the ISP itself is the sender, and the e-mail reveals it.**
- **Practical approach:**
  - Hero and branding: "Heima".
  - Footer: "Heima er eit konsept under utvikling hos [Juridisk namn AS], org.nr. …, [adresse], [e-post]."
  - Privacy notice: the same entity as controller.
  - The test can still measure whether the *Heima* concept attracts interest. The brand-free version only really works for traffic that doesn't come from the ISP's own customer e-mail, such as paid social.

---

## 3. E-mailing existing customers (markedsføringsloven § 15)

### 3.1 The rule

- **Main rule:** No electronic marketing to natural persons "uten mottakerens forutgående samtykke" ([§ 15(1)](https://lovdata.no/lov/2009-01-09-2/§15)).
- **Exception (§ 15(3)):** E-mail marketing is allowed without consent "i eksisterende kundeforhold der den næringsdrivende avtaleparten har mottatt kundens elektroniske adresse i forbindelse med salg". It is limited to "den næringsdrivendes egne varer, tjenester eller andre ytelser tilsvarende dem som kundeforholdet bygger på". The customer must be able to opt out "enkelt og gebyrfritt", both when the address is collected and with each message ([§ 15](https://lovdata.no/lov/2009-01-09-2/§15)).
- **ehandelsloven still applies on top**, including § 9 (sender identity, "this is marketing") ([§ 15(4) note](https://lovdata.no/lov/2009-01-09-2/§15)).

### 3.2 Forbrukertilsynet's interpretation

From [Forbrukertilsynet's e-mail/SMS guide, updated 8 May 2026](https://www.forbrukertilsynet.no/lov-og-rett/veiledninger-og-retningslinjer/forbrukertilsynets-veiledning-markedsforing-via-e-post-sms-o-l):

- **What counts as marketing:** "Det skal normalt lite til før en henvendelse er å regne som markedsføring". The label on the message doesn't matter. A market survey that "reelt sett er markedsføring for avsenderen" is covered (§ 2.5.4). A request for consent sent by e-mail is itself a marketing message. **A "help us test a new idea" e-mail linking to a Reservation page is marketing.**
- **Existing customer relationship:** Ongoing agreements such as subscriptions count. A broadband subscription is a clear existing customer relationship. It ends when the agreement ends.
- **"Egne":** This means the same legal person. Group companies are separate.
- **"Tilsvarende":** The exception is read narrowly. "Tilsvarende" does not mean identical. The test is factual similarity and the customer's reasonable expectations. The guide's examples:
  - PC → other PCs, but **not software**
  - trousers → other clothing
  - music CD → other music, but **not CD players**
  - toys → other toys, but not other children's products
  - a bundle counts as the trader's own product
- **Consent:** It must come from an active act (no pre-ticked boxes or terms in a contract). It must be informed about what will be marketed and how often, by whom, on the same screen. The trader carries the burden of proof. Double opt-in is recommended.
- **Opt-out:** Required in every message (a link for e-mail), with no login and no fee.

### 3.3 Application to Heima **[uncertain]**

- Heima (a home device plus a storage/AI Subscription) is a different product from internet access.
  - **Against "tilsvarende":** On Forbrukertilsynet's examples (PC ≠ software, CD ≠ CD player), a broadband customer probably does not "reasonably expect" e-mail marketing for a home-server product.
  - **For "tilsvarende":** The ISP may already sell similar add-ons such as cloud storage, security or Wi-Fi equipment, and Heima would be "Heima – fra [ISP]", sold and billed with broadband.
  - No Norwegian decision on this point was found.
- **Recommendations:**
  1. Send the first campaign **only to customers with a recorded, still-valid marketing consent** that covers the ISP's products and services generally. Check the exact wording of the consent you hold.
  2. Using § 15(3) for customers without consent needs a legal sign-off. If you do it, make sure those customers were given an opt-out when their address was collected.
  3. **Sender:** the ISP's legal entity, visibly. Mark it as marketing on receipt (ehandelsloven § 9), e.g. in the subject or preheader.
  4. **Opt-out link** in every message, honoured promptly and suppressed across all ISP marketing.
  5. **Don't use tracking pixels or per-recipient tracking links** without consent (see § 4.6).
  6. **GDPR basis for using the customer list:** legitimate interest (art. 6(1)(f); recital 47 names direct marketing as a possible legitimate interest), or the existing consent ([GDPR, EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj)). The objection right in art. 21(2)–(3) is absolute for direct marketing ([GDPR art. 21](https://lovdata.no/lov/2018-06-15-38/gdpr/a21)).
- **Reservers are not customers.** The § 15(3) exception needs an address obtained "i forbindelse med salg", and a Reservation is not a sale ([§ 15](https://lovdata.no/lov/2009-01-09-2/§15); [guide](https://www.forbrukertilsynet.no/lov-og-rett/veiledninger-og-retningslinjer/forbrukertilsynets-veiledning-markedsforing-via-e-post-sms-o-l)). **Every later e-mail to a Reserver needs the consent captured on the form.** That covers launch news, surveys and interview invitations. Reservers who arrive from paid ads or word of mouth (non-customers) can only be e-mailed on consent.

---

## 4. GDPR for Reservation data

### 4.1 Controller and roles

- The trader named on the site (the ISP, or a Heima entity) is the **controller**. It must be named with contact details in the privacy notice ([art. 13(1)(a)](https://lovdata.no/lov/2018-06-15-38/gdpr/a13)).
- Hosting, form/database, e-mail-sending and analytics vendors are **processors**. Each needs an art. 28 data processing agreement ([GDPR art. 28](https://lovdata.no/lov/2018-06-15-38/gdpr/a28)).

### 4.2 Legal basis

| Data / purpose | Recommended basis | Why |
|---|---|---|
| Name, e-mail, qualifying answers; analysing demand; contacting the Reserver about Heima | **Consent, art. 6(1)(a)** | It must be specific, informed, unambiguous, given by an active act, documented, and as easy to withdraw as to give ([Datatilsynet, samtykke](https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/om-behandlingsgrunnlag/samtykke/); [art. 7](https://lovdata.no/lov/2018-06-15-38/gdpr/a7)). The same consent satisfies mfl. § 15 for follow-up e-mails, giving one clear story. |
| Optional: interview/survey invitations | **Separate consent** (its own unticked box) | Each purpose needs its own consent ([Datatilsynet](https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/om-behandlingsgrunnlag/samtykke/)). |
| Aggregate, anonymised demand statistics after the test | Not personal data once truly anonymised | Keep only counts and distributions after deletion. |
| Linking a Reservation to an existing customer record (e.g. via a personalised link) | Legitimate interest (art. 6(1)(f)), stated in the notice, **or don't link** | **[uncertain]** This is compatibility of purpose under art. 6(4). Simplest: don't link. Measure campaign conversion with campaign-level (not per-person) parameters. |

- **Art. 6(1)(b) (steps before a contract)** could arguably cover "notify me at launch". It does not cover market-research questions about willingness to pay. **[uncertain]** Consent is cleaner.
- **Making contact consent a condition of the Reservation: [uncertain]** Contact *is* the substance of a Reservation, so a single required consent to "e-post om Heima" is arguably necessary for the service. Forbrukertilsynet says consent cannot be made a condition of something else, for example shopping ([guide](https://www.forbrukertilsynet.no/lov-og-rett/veiledninger-og-retningslinjer/forbrukertilsynets-veiledning-markedsforing-via-e-post-sms-o-l)). The conservative design:
  - The Reservation means "send me a confirmation and tell me if Heima launches". State this plainly next to the button.
  - Any broader updates or newsletter get a separate unticked box.
  - Use double opt-in through a confirmation e-mail.

### 4.3 Data minimisation and purpose limitation

- **Collect only what the test needs** (art. 5(1)(b)–(c), [GDPR art. 5](https://lovdata.no/lov/2018-06-15-38/gdpr/a5)):
  - Name (or first name only), e-mail and postcode or county if regional demand matters.
  - Household size as a bucket ("1", "2", "3–4", "5+").
  - Where photos are stored today (multi-select).
  - Willingness to pay (price buckets).
  - Whether they are a customer of the ISP (optional).
- **Don't ask for:** phone number, full address, date of birth, or names/ages of children. Avoid free-text fields that invite sensitive data, or warn against entering it.
- **Purpose:** "measure interest in Heima and contact you about Heima". Using the data for other ISP marketing, or for profiling the customer base, is a new purpose that needs a new basis.

### 4.4 Retention

- GDPR sets no fixed period. Data must be kept no longer than necessary (art. 5(1)(e)), and the notice must state the period or the criteria (art. 13(2)(a)) ([art. 5](https://lovdata.no/lov/2018-06-15-38/gdpr/a5); [art. 13](https://lovdata.no/lov/2018-06-15-38/gdpr/a13)).
- **Suggested policy** (our proposal, not a legal requirement):
  - Delete all Reservation data at the latest **6 months after the go/no-go decision**, if Heima is not launched.
  - If it is launched, delete **3 months after the launch e-mail**, unless the person becomes a customer or gives new consent.
  - Delete immediately on withdrawal.
  - Keep consent evidence (timestamp, form version, IP or ID) for as long as you rely on the consent, plus a short period to defend complaints.

### 4.5 Privacy notice (art. 13): minimum content

From [art. 13](https://lovdata.no/lov/2018-06-15-38/gdpr/a13), in nynorsk, linked next to the submit button:

- Controller and contact details (and DPO, if the ISP has one).
- Purposes and legal basis for each purpose.
- Recipients and processors by category: hosting, e-mail service, analytics.
- Third-country transfers and the safeguard (e.g. "Vercel Inc., USA – EU-US Data Privacy Framework").
- Retention period.
- Rights: access, rectification, erasure, restriction, objection, portability, withdrawal of consent, and complaint to Datatilsynet.
- That the answers are voluntary.
- No automated decisions.

### 4.6 Cookies and analytics (ekomloven § 3-15)

- **The rule:** Storing or accessing information on the user's device requires that the user is informed of what is processed, why and by whom, and **gives consent meeting GDPR's standard**. The exceptions:
  - pure transmission
  - storage "strengt nødvendig for å levere en informasjonssamfunnstjeneste etter sluttbrukers eller brukers uttrykkelige anmodning"

  Source: [ekomloven § 3-15, in force 1.1.2025](https://lovdata.no/lov/2024-12-13-76/§3-15).
- **Scope:** The rule is technology-neutral and covers "alle slags opplysninger", not only personal data. The strictly-necessary exception applies only where the technology "er en forutsetning for å kunne levere tjenesten". Analytics is not described as exempt ([Nkom, 16.05.2025](https://nkom.no/internett/informasjonskapsler-cookies)). Nkom decides scope and exceptions, and Datatilsynet decides whether the consent is valid ([Datatilsynet](https://www.datatilsynet.no/personvern-pa-ulike-omrader/internett-og-apper/bruk-av-informasjonskapsler-og-andre-sporingsteknologier/)).
- **Datatilsynet's consent checklist** ([page](https://www.datatilsynet.no/personvern-pa-ulike-omrader/internett-og-apper/bruk-av-informasjonskapsler-og-andre-sporingsteknologier/)):
  - consent before setting anything
  - no pre-ticked boxes
  - rejecting takes no more clicks than accepting and is not hidden
  - choice per purpose
  - access to the site is not conditional on consent
  - easy withdrawal
  - consent is documented
- **IP addresses** are as a rule personal data. Other legal bases "vil nesten aldri kunne brukes" for further processing of data collected from the device ([Datatilsynet, analyse og sporing](https://www.datatilsynet.no/personvern-pa-ulike-omrader/internett-og-apper/rad-for-analyse-og-sporing-pa-nettsted/)).
- **E-mail tracking pixels and identifier-carrying links** fall under ePrivacy art. 5(3), which ekomloven § 3-15 implements, according to [EDPB Guidelines 2/2023 v2 (Oct 2024)](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-22023-technical-scope-art-53-eprivacy-directive_en). **[uncertain]** Norway has no ruling on this yet. Turn off open tracking in the e-mail tool, and use **campaign-level** UTM parameters (identical for all recipients), not per-recipient IDs.
- **Recommendation for the test:**
  - **Option A (no banner):** Measure the funnel server-side. Count page views from server logs, and form submissions per campaign parameter. Store nothing on the device and don't read device characteristics (no fingerprinting).
    - § 3-15 is then not triggered **[uncertain; Nkom judges technical cases]**.
    - Processing of IP addresses in logs still needs a GDPR basis (legitimate interest, short retention) and a line in the privacy notice.
  - **Option B:** Use a full analytics tool behind a compliant banner, with "Avslå" and "Godta" given equal weight. This loses data from people who reject.

### 4.7 Processors and US hosting (Vercel etc.)

- **Transfers:** Transfers out of the EEA need a basis under GDPR chapter V. Datatilsynet notes that remote access from a third country also counts as a transfer ([Datatilsynet](https://www.datatilsynet.no/personvern-pa-ulike-omrader/internett-og-apper/rad-for-analyse-og-sporing-pa-nettsted/)).
- **EU-US Data Privacy Framework:** The adequacy decision covers **listed, self-certified** US companies only ([Datatilsynet Q&A](https://www.datatilsynet.no/regelverk-og-verktoy/sporsmal-svar/overforing-av-personopplysninger-ut-av-eos/kan-jeg-overfore-personopplysninger-fritt-til-alle-amerikanske-virksomheter/)). The General Court upheld it on 3 September 2025. Datatilsynet still advises keeping a contingency plan, because the judgment can be appealed ([Datatilsynet](https://www.datatilsynet.no/aktuelt/aktuelle-nyheter-2025/eu-domstolen-opprettholder-adekvansbeslutningen-for-usa/)). An appeal to the Court of Justice was reported lodged in late 2025 **[secondary sources only; not verified on curia.europa.eu]**.
- **Vercel:**
  - It announced DPF certification ([Vercel changelog](https://vercel.com/changelog/vercel-is-now-certified-under-the-eu-us-data-privacy-framework-dpf)) and appears on the DPF list ([DPF participant 6847](https://www.dataprivacyframework.gov/participant/6847)). Verify the listing is "Active" on the day you launch.
  - Its docs say data may be processed in the US, and function regions default to the US ([Vercel compliance](https://vercel.com/docs/security/compliance)). Choose an EU function region and an EU-hosted database for the form.
  - Sign Vercel's DPA, and list Vercel and other vendors in the privacy notice.
- **Brand consistency:** Heima's promise is "without your life being stored on a US server" (product brief). Hosting the Reservation data with US providers is legal under the DPF. **But a claim on the site like "dataa dine blir i Noreg" would be false if the form data goes to US-controlled infrastructure. That is misleading under § 7 and an obvious press angle. [uncertain]** Suggestion: host the form backend and the e-mail-sending service with EEA or Norwegian providers, and keep the US CDN for static assets only. Otherwise make no data-location claims about the *website*.

### 4.8 Other GDPR items

- **Records of processing:** Add the test to the ISP's art. 30 records ([GDPR art. 30](https://lovdata.no/lov/2018-06-15-38/gdpr/a30)).
- **DPIA:** Probably not required. This is low-risk data, with no special categories and no large-scale profiling ([Datatilsynet, DPIA](https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/vurdere-personvernkonsekvenser/vurdering-av-personvernkonsekvenser/)). **[uncertain]**
- **Children:** Under-15s can't give marketing consent themselves ([Forbrukertilsynet guide](https://www.forbrukertilsynet.no/lov-og-rett/veiledninger-og-retningslinjer/forbrukertilsynets-veiledning-markedsforing-via-e-post-sms-o-l)). Add "Du må vere over 18 år for å reservere", which matches the Buyer persona.

---

## 5. AGPL-3.0 and building on Immich (product phase, not the test)

**Facts:**

- Immich is licensed AGPL-3.0. It switched from MIT in February 2024 (commit `dca1bd22`, "Change license to AGPLv3").
- The repository's LICENSE (AGPL-3.0) covers the server, web and mobile code in the repo.
- `packages/sdk` and `packages/plugin-sdk` declare AGPL-3.0 too.

Sources: [LICENSE](https://github.com/immich-app/immich/blob/main/LICENSE); [commit](https://github.com/immich-app/immich/commit/dca1bd22); [packages/sdk/package.json](https://github.com/immich-app/immich/blob/main/packages/sdk/package.json).

**FUTO/Immich's commercial guidelines** ([FAQ, "Commercial Guidelines"](https://github.com/immich-app/immich/blob/main/docs/docs/FAQ.mdx)):

- They ask resellers *not* to display Immich trademarks on websites or marketing.
- They ask resellers not to imply affiliation or endorsement.
- They point to questions@immich.app for edge cases.

These are trademark requests, not licence terms. The AGPL grants no trademark rights, and § 7(e) allows declining them.

What the AGPL text requires ([AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.txt)):

| Situation | AGPL consequence |
|---|---|
| **Heima-boksen ships with Immich (modified or not) installed** | This is "conveying object code … in a physical product". You must ship the Corresponding Source on a durable medium, or a written offer valid ≥ 3 years and as long as you offer spare parts or support, or network access (§ 6(a)/(b)). |
| **Heima-boksen is a "User Product"** (a consumer product used for household purposes, with doubtful cases resolved in favour of coverage) | You must also provide **"Installation Information"**: the keys and procedures to install and run *modified* versions. Modified software must not be prevented from working "solely because modification has been made". The exception only applies if *nobody* can update the software, e.g. ROM. OTA updates from the ISP rule that out (§ 6, User Product paragraphs). **This conflicts with a locked-down box (secure boot or signed images with no user keys).** Design a "developer mode" or user-key path, or isolate Immich from what is locked. |
| **Modified Immich used over a network** (Heima-appen ↔ box, family web access, any ISP-run modified Immich such as backup) | § 13: offer every remote user the Corresponding Source of the modified version, free, via a network server. E.g. an "Om / Kjeldekode" link in the app and web UI. |
| **Your own code alongside Immich** | Separate programs communicating over sockets or HTTP are normally separate works. Code compiled or linked into the same program is "combined". The "semantics of the communication" also matter ([GPL FAQ, MereAggregation](https://www.gnu.org/licenses/gpl-faq.html#MereAggregation)). An aggregate on the same box doesn't extend the licence to the other works (§ 5). **[uncertain]** Heima's own AI service and Norwegian search, talking to Immich over an API, can stay proprietary if they are not built into Immich. Changes *inside* Immich are AGPL. |
| **Heima-appen as a fork of Immich's mobile app, or using `@immich/sdk`** | The app becomes AGPL, so source must be offered and "Appropriate Legal Notices" shown (§§ 0, 5(d)). The FSF considers App Store terms incompatible with the GPL's "no further restrictions" rule ([FSF, 2010](https://www.fsf.org/blogs/licensing/more-about-the-app-store-gpl-enforcement); AGPL § 10 has the equivalent rule). Immich can ship its own app because it owns the copyright, but a third-party fork can't rely on that. **[uncertain]** **Options:** write Heima-appen from scratch against Immich's HTTP API, without copying AGPL client code, or get permission from FUTO. |
| **Charging** | The AGPL allows selling the box and charging a Subscription. You may not charge licence fees for exercising AGPL rights (§ 10). |

Also check the licences of the machine-learning models (CLIP and face models used by Immich, and any LLM). They are separate from the AGPL and some restrict commercial use. **[not researched here]**

**For the demand test:** don't mention Immich on the site (trademark request). "Bygd på open kjeldekode" is fine. Making claims about features that depend on licence decisions not yet made adds to the § 7 risk.

---

## 6. Selling to customers of other ISPs

- **Net neutrality:** EU Regulation 2015/2120 (in force in Norway since 2017) puts obligations on **internet access providers**: equal treatment of traffic "uavhengig av avsender, mottaker, utstyr, applikasjon, tjeneste eller innhold", and users decide what the connection is used for ([Nkom, hva er nettnøytralitet](https://nkom.no/internett/nettnoytralitet/hva-er-nettnoytralitet); [Nkom, europeisk regulering](https://nkom.no/internett/nettnoytralitet/europeisk-regulering-av-nettnoytralitet); [Reg. 2015/2120](https://eur-lex.europa.eu/eli/reg/2015/2120/oj)).
  - Heima is an application and terminal equipment on top of *someone's* access. Other ISPs must not block or throttle it, and Heima needs no permission from them. **Confirmed irrelevant as a constraint for the test and for selling to other ISPs' customers.**
  - **One watch-out for the ISP's own network:** zero-rating or prioritising Heima traffic for its own customers (e.g. as a "specialised service") is regulated under the same rules and Nkom monitors it ([Nkom](https://nkom.no/internett/nettnoytralitet/hva-er-nettnoytralitet)). Don't market "raskare med [ISP]" through traffic-management tricks without an assessment.
- **Marketing to non-customers:** No existing-customer exception, so e-mail/SMS only with consent (mfl. § 15). Use ads, organic channels and the site.
- **Competition law: [uncertain, low relevance]** If the ISP had a dominant position, tying Heima to its broadband, or degrading Heima for rivals' customers, could raise abuse issues ([konkurranseloven § 11](https://lovdata.no/lov/2004-03-05-12/§11)). A product that works on any ISP avoids this.
- **Other regimes that apply later, not to the test** **[not researched in depth]**:
  - **DSA:** The encrypted backup in a Norwegian data centre might be a "hosting service". The DSA is not yet part of the EEA Agreement, and the digitaltjenesteloven was on consultation in 2025 ([regjeringen EØS-notat](https://www.regjeringen.no/no/sub/eos-notatbasen/notatene/2021/feb/forordning-om-digitale-tjenester-digital-services-act-dsa/id2860429/); Stortinget page cited in search results).
  - **EU Data Act** (connected-product data access): EEA status not confirmed.
  - **Radio equipment / CE rules and the Cyber Resilience Act** for the box.
  - **Trademark clearance** for "Heima" (Patentstyret/EUIPO), already a to-do in the brief.

---

## 7. CHECKLIST

### Website: general

- [ ] **Concept banner** above the fold and near every product image: Heima isn't for sale, is under development, may change or never launch, and the images are AI concept images (wording in section 8). [mfl. §§ 7–8](https://lovdata.no/lov/2009-01-09-2/§7)
- [ ] **A caption on each image:** "Konseptbilete laga med KI". People shown are not real (or label real people's AI edits per § 2).
- [ ] **Specific deviations** stated: design, size, materials, features and price not decided. No "avvik kan førekome"-only disclaimer. [Forbrukertilsynet](https://www.forbrukertilsynet.no/vi-jobber-med/bolig/veileder-for-markedsforing-av-bolig/prosjekterte-boliger)
- [ ] **Price shown as an estimate, incl. mva**, with the box price and the monthly Subscription both stated, or no price at all. [§ 8(3)(e)](https://lovdata.no/lov/2009-01-09-2/§8), [ehandelsloven § 9](https://lovdata.no/lov/2003-05-23-35/§9)
- [ ] **Feature claims phrased as goals** ("Heima skal …", "Målet er …"), not facts.
- [ ] **No fake scarcity, deadlines, "gratis" or priority promises** the company won't honour. [Svartelisten](https://lovdata.no/dokument/SF/forskrift/2009-06-01-565)
- [ ] **No claim that the website's own data stays in Norway** unless it does.
- [ ] **No Immich name or logo.** No generic green claims.
- [ ] **Footer and "Om Heima" page:** legal name, org.nr., address, e-mail, VAT status, and "Marknadsføring frå [Juridisk namn AS]". [ehandelsloven §§ 8–9](https://lovdata.no/lov/2003-05-23-35/§8)
- [ ] **Privacy notice in nynorsk** with every art. 13 item, linked next to the form. [art. 13](https://lovdata.no/lov/2018-06-15-38/gdpr/a13)
- [ ] **Measurement:**
  - Either: no cookies, local storage, pixels or fingerprinting (server-side counts only).
  - Or: a consent banner with equal "Avslå" and "Godta", nothing set before consent, and an easy way to withdraw. [ekomloven § 3-15](https://lovdata.no/lov/2024-12-13-76/§3-15), [Datatilsynet](https://www.datatilsynet.no/personvern-pa-ulike-omrader/internett-og-apper/bruk-av-informasjonskapsler-og-andre-sporingsteknologier/)
- [ ] **No third-party embeds** that set cookies (YouTube, Google Fonts loaded from Google, Meta pixel) before consent. Self-host fonts.
- [ ] **Hosting:** DPA signed with each vendor; EU region chosen; DPF listing checked for US vendors; vendors named in the privacy notice. [Datatilsynet](https://www.datatilsynet.no/regelverk-og-verktoy/sporsmal-svar/overforing-av-personopplysninger-ut-av-eos/kan-jeg-overfore-personopplysninger-fritt-til-alle-amerikanske-virksomheter/)
- [ ] **Domain:** you accept that a .no domain shows the holder publicly in Norid lookup. [Norid](https://www.norid.no/en/domeneoppslag/personvern/domeneoppslag/)

### Reservation form

- [ ] **Button text:** "Reserver – heilt uforpliktande" (or "Set meg på lista"). Never "Kjøp" or "Bestill".
- [ ] **Text next to the button** explaining that the Reservation isn't an order, costs nothing, binds nobody, and that there's no guaranteed launch or price.
- [ ] **No payment, card, deposit or binding pre-order.** Otherwise angrerettloven and full pre-contract information apply. [angrerettloven § 1](https://lovdata.no/dokument/NL/lov/2014-06-20-27)
- [ ] **Minimal fields:** first name, e-mail, household-size bucket, current photo storage (multi-select), willingness to pay (buckets), optional postcode/county, optional "er du kunde hos [ISP]?". No children's data, no phone, no free-text "anything else" (or a warning on it).
- [ ] **Qualifying questions marked optional** where possible.
- [ ] **Consent for e-mail about Heima:** unticked, specific (what, how often, who sends), on the same screen. [Forbrukertilsynet](https://www.forbrukertilsynet.no/lov-og-rett/veiledninger-og-retningslinjer/forbrukertilsynets-veiledning-markedsforing-via-e-post-sms-o-l)
- [ ] **Separate unticked consent** for interview/survey invitations.
- [ ] **Age line:** "Du må vere 18 år eller eldre."
- [ ] **Double opt-in** confirmation e-mail. Store timestamp, form version and consent text as evidence (the burden of proof is on the trader).
- [ ] **Short privacy summary under the button** plus a link to the full notice.
- [ ] **Unsubscribe or withdraw** link in every e-mail. Withdrawal deletes the Reservation, or at least stops contact. A "slett meg" path that needs no login.
- [ ] **Retention set and automated:** delete ≤ 6 months after no-go, or ≤ 3 months after the launch e-mail. Stated in the notice.

### Customer e-mail campaign

- [ ] **Recipients:** customers with valid marketing consent. Use the § 15(3) exception only after legal sign-off on "tilsvarende".
- [ ] **Sender:** the ISP's legal entity, visible. Marked as marketing on receipt. [ehandelsloven § 9](https://lovdata.no/lov/2003-05-23-35/§9)
- [ ] **Opt-out link** in every message; no login; free.
- [ ] **Tracking:** open tracking off; campaign-level UTM only, no per-recipient tracking IDs. [EDPB 2/2023](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-22023-technical-scope-art-53-eprivacy-directive_en)
- [ ] **Consistency:** the e-mail uses the same concept, AI-image and price-estimate disclaimers as the site.
- [ ] **Records:** campaign added to the art. 30 records.

---

## 8. Suggested nynorsk wording

> Have a native nynorsk copywriter and legal review these before use. They are drafts.

**Concept banner (top of page):**

> **Heima finst ikkje enno.** Dette er eit konsept vi vurderer å lage, og du kan ikkje kjøpe det i dag. Vi vil finne ut om nok familiar ønskjer seg Heima før vi byrjar å byggje.

**Image caption (on or under every image):**

> Konseptbilete laga med KI. Personane er ikkje verkelege.

**Fuller concept disclaimer (near the images or in "Om Heima"):**

> Bileta på denne sida er konseptbilete laga med kunstig intelligens (KI). Dei viser ein idé, ikkje eit ferdig produkt. Utforming, storleik, materiale, funksjonar og pris er ikkje bestemde, og eit ferdig produkt kan sjå annleis ut og fungere annleis. Det kan òg hende at Heima aldri blir lansert.

**Price estimate:**

> **Venta pris:** om lag [X] kr for Heima-boksen og [Y] kr i månaden for abonnementet (inkl. mva.). Prisane er eit estimat og ikkje bindande.

**Reservation explanation (next to the button):**

> **Ein reservasjon er heilt uforpliktande.** Du bestiller ingenting og betaler ingenting, og du kan trekkje reservasjonen når som helst. Vi lovar ikkje at Heima blir lansert, eller kva det vil koste. Blir Heima lansert, får du beskjed på e-post, og då vel du sjølv om du vil kjøpe.

**Consent checkbox (unticked):**

> ☐ Ja, [Juridisk namn AS] kan sende meg e-post om Heima: ei stadfesting no, nokre få oppdateringar om utviklinga (høgst éin e-post i månaden) og beskjed dersom Heima blir lansert. Eg kan melde meg av når som helst med lenkja nedst i kvar e-post.

**Optional second checkbox (unticked):**

> ☐ De kan gjerne spørje meg om å vere med på eit kort intervju eller ei spørjeundersøking om Heima.

**Privacy summary (under the button):**

> [Juridisk namn AS] (org.nr. [nr.]) er behandlingsansvarleg for opplysningane du gir oss. Vi brukar dei berre til å måle interessa for Heima og til å kontakte deg om Heima slik du har samtykt til. Vi slettar dei seinast [dato/kriterium], eller med ein gong om du ber om det. Du kan trekkje samtykket ditt når som helst. [Les heile personvernerklæringa.]

**Footer:**

> Heima er eit konsept under utvikling hos [Juridisk namn AS], org.nr. [nr.], [adresse], [e-post]. Denne sida er marknadsføring.

**Cookie banner (only if you use analytics that store or read data on the device):**

> Vi vil gjerne bruke informasjonskapslar for å sjå korleis sida blir brukt. Det er valfritt, og sida fungerer like godt utan. **[Avslå]** **[Godta]** · [Les meir]

(Both buttons the same size and colour.)

**E-mail opt-out footer:**

> Du får denne e-posten fordi du er kunde hos [ISP] og har sagt ja til marknadsføring frå oss. [Meld deg av] – det kostar ingenting og krev ikkje innlogging.

---

## Open questions and uncertainties

1. **Whether Heima is "tilsvarende" to broadband under § 15(3).** No ruling was found. This is a decision for legal.
2. **Whether a Reservation page with a price is an "oppfordring til kjøp"** (§ 8(3)). We recommend behaving as if it is.
3. **Whether a separate Heima entity may stand as the trader** without that being misleading about who is really behind the offer (§ 7(1)(f)).
4. **Whether purely server-side, cookieless measurement falls outside ekomloven § 3-15.** Nkom judges technical scope.
5. **Whether e-mail pixels and per-recipient links are caught by § 3-15.** The EDPB says yes. There is no Norwegian ruling.
6. **The AI Act in Norway:** the KI-lov timing, and whether product concept renders are "deep fakes".
7. **The DPF:** status of the Latombe appeal at the Court of Justice (not verified at the primary source).
8. **AGPL:** where the line falls between "aggregate" and "combined work" for Heima's own services, and the App Store question. This needs specialist open-source counsel.
9. **Price model:** the brief and the glossary disagree. Resolve before publishing any price.

## Sources (primary unless noted)

- Markedsføringsloven: [full text](https://lovdata.no/dokument/NL/lov/2009-01-09-2), [§ 7](https://lovdata.no/lov/2009-01-09-2/§7), [§ 8](https://lovdata.no/lov/2009-01-09-2/§8), [§ 15](https://lovdata.no/lov/2009-01-09-2/§15)
- [Forskrift om urimelig handelspraksis (svartelisten), FOR-2009-06-01-565](https://lovdata.no/dokument/SF/forskrift/2009-06-01-565)
- Ehandelsloven: [full text](https://lovdata.no/dokument/NL/lov/2003-05-23-35), [§§ 8–9](https://lovdata.no/lov/2003-05-23-35/§8)
- [Angrerettloven](https://lovdata.no/dokument/NL/lov/2014-06-20-27)
- [Avtaleloven](https://lovdata.no/dokument/NL/lov/1918-05-31-4)
- [Ekomloven § 3-15](https://lovdata.no/lov/2024-12-13-76/§3-15)
- [Konkurranseloven § 11](https://lovdata.no/lov/2004-03-05-12/§11)
- GDPR: [Lovdata art. 5](https://lovdata.no/lov/2018-06-15-38/gdpr/a5), [art. 7](https://lovdata.no/lov/2018-06-15-38/gdpr/a7), [art. 13](https://lovdata.no/lov/2018-06-15-38/gdpr/a13), [art. 21](https://lovdata.no/lov/2018-06-15-38/gdpr/a21), [art. 28](https://lovdata.no/lov/2018-06-15-38/gdpr/a28), [art. 30](https://lovdata.no/lov/2018-06-15-38/gdpr/a30); [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- Forbrukertilsynet:
  - [E-post/SMS guide (updated 8 May 2026)](https://www.forbrukertilsynet.no/lov-og-rett/veiledninger-og-retningslinjer/forbrukertilsynets-veiledning-markedsforing-via-e-post-sms-o-l)
  - [Retouching FAQ (updated 29 Sep 2025)](https://www.forbrukertilsynet.no/vi-jobber-med/merking-av-retusjert-reklame/ofte-stilte-sporsmal-om-retusjert-reklame)
  - [Prosjekterte boliger (updated 15 Oct 2026)](https://www.forbrukertilsynet.no/vi-jobber-med/bolig/veileder-for-markedsforing-av-bolig/prosjekterte-boliger)
  - [Kanaler og utforming (updated 11 Nov 2026)](https://www.forbrukertilsynet.no/vi-jobber-med/bolig/veileder-for-markedsforing-av-bolig/kanaler-og-utforming)
- Datatilsynet:
  - [Cookies and tracking consent (03.04.2025)](https://www.datatilsynet.no/personvern-pa-ulike-omrader/internett-og-apper/bruk-av-informasjonskapsler-og-andre-sporingsteknologier/)
  - [Analytics advice (23.04.2025)](https://www.datatilsynet.no/personvern-pa-ulike-omrader/internett-og-apper/rad-for-analyse-og-sporing-pa-nettsted/)
  - [Samtykke](https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/om-behandlingsgrunnlag/samtykke/)
  - [USA adequacy upheld (3 Sep 2025)](https://www.datatilsynet.no/aktuelt/aktuelle-nyheter-2025/eu-domstolen-opprettholder-adekvansbeslutningen-for-usa/)
  - [DPF Q&A](https://www.datatilsynet.no/regelverk-og-verktoy/sporsmal-svar/overforing-av-personopplysninger-ut-av-eos/kan-jeg-overfore-personopplysninger-fritt-til-alle-amerikanske-virksomheter/)
- Nkom: [Cookies (16.05.2025)](https://nkom.no/internett/informasjonskapsler-cookies); [Hva er nettnøytralitet](https://nkom.no/internett/nettnoytralitet/hva-er-nettnoytralitet); [Europeisk regulering](https://nkom.no/internett/nettnoytralitet/europeisk-regulering-av-nettnoytralitet)
- [EDPB Guidelines 2/2023 on the technical scope of ePrivacy art. 5(3)](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-22023-technical-scope-art-53-eprivacy-directive_en)
- EU AI Act: [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2024/1689/oj); [art. 50 text mirror](https://artificialintelligenceact.eu/article/50/) (secondary mirror of the official text; EUR-Lex blocked automated fetch); [regjeringen.no 30.10.2026](https://www.regjeringen.no/no/aktuelt/regjeringen-sender-forenklinger-i-ki-forordningen-pa-horing/id3187283/)
- [Regulation (EU) 2015/2120 (open internet)](https://eur-lex.europa.eu/eli/reg/2015/2120/oj)
- AGPL and Immich:
  - [AGPL-3.0 text](https://www.gnu.org/licenses/agpl-3.0.txt); [GPL FAQ](https://www.gnu.org/licenses/gpl-faq.html); [FSF on the App Store](https://www.fsf.org/blogs/licensing/more-about-the-app-store-gpl-enforcement)
  - [Immich LICENSE](https://github.com/immich-app/immich/blob/main/LICENSE); [licence-change commit](https://github.com/immich-app/immich/commit/dca1bd22); [Immich FAQ, Commercial Guidelines](https://github.com/immich-app/immich/blob/main/docs/docs/FAQ.mdx); [packages/sdk/package.json](https://github.com/immich-app/immich/blob/main/packages/sdk/package.json)
- Vercel: [DPF changelog](https://vercel.com/changelog/vercel-is-now-certified-under-the-eu-us-data-privacy-framework-dpf); [compliance docs](https://vercel.com/docs/security/compliance); [DPF list entry](https://www.dataprivacyframework.gov/participant/6847) (page content not retrievable by fetch; confirm manually)
- Norid: [Domain lookup](https://www.norid.no/en/domeneoppslag/personvern/domeneoppslag/); [Who can hold .no](https://www.norid.no/en/nytt-domenenavn/hvem-kan-ha-domene/)
- [Stortinget lovvedtak 85 (2025–2026), green-transition amendments](https://stortinget.no/no/Saker-og-publikasjoner/Vedtak/Beslutninger/Lovvedtak/2025-2026/vedtak-202526-085/?m=-1) (identified via search; not opened)
