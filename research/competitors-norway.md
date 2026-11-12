# Competitors in Norway: offers, NOK prices, and privacy and data-location claims

*Research for GitHub issue #2, "Competitors in Norway". Compiled 2026-11-12. All prices are in NOK including VAT and were read on 2026-11-12 unless marked otherwise. "Unverified" means I could not confirm the claim from a primary source.*

**Question.** Who does Heima compete with in Norway, what do they charge in NOK, and how do they talk about privacy and data location?

**Short answer.**

- Heima is entering a market where "your data stays in Norway" is already the default, and often free, for most Norwegian households. Jotta Group runs Jottacloud and the white-label clouds of Telenor (Min Sky) and Telia (Telia Sky). Telenor includes unlimited photo storage with every private mobile subscription. Telia includes unlimited storage with every mobile and fibre subscription.
- No Norwegian cloud we checked is end-to-end encrypted. Jottacloud says outright that it does not support customer-held keys.
- Heima's real differentiator is "**we cannot see your data, even if we wanted to**", together with a local assistant for family paperwork. "In Norway" is not a differentiator, and neither is photo search: Jottacloud already has Norwegian-language AI photo search, and added face grouping in November 2026.

---

## 1. Jottacloud / Jotta Group (most important competitor)

### Company, ownership and scale

- **Legal entity:** Jotta Group AS, Øvre Slottsgate 5, Oslo, org. no. 992 603 615 ([jottacloud.com/nb/pricing](https://jottacloud.com/nb/pricing)).
- **Founded:** 2008, by Roland Rabben. It has stored data only in Norway since the start ([jottacloud.com/nb/about](https://jottacloud.com/nb/about)).
- **Ownership:**
  - In March 2025 Jotta's cloud business merged with Telenor Software Lab, the company behind Telenor's Min Sky, to form a joint venture. Telenor described it as "owned 50/50 by Hawk Infinity and Telenor Amp", with an estimated enterprise value of NOK 1.5 billion and expected 2025 revenue of about NOK 200 million ([Telenor press release, 2025-03-19](https://www.telenor.com/media/newsroom/press-releases/jottacloud-and-telenor-software-lab-merge/); [Jottacloud press release](https://jottacloud.com/en/blog/jottacloud-min-sky)).
  - Telenor completed its purchase of the 50% stake in Jotta AS on 2025-04-30, according to a secondary report that has not been verified against a primary filing ([MarketScreener](https://ca.marketscreener.com/quote/stock/TELENOR-ASA-1413298/news/Telenor-ASA-OB-TEL-acquired-50-stake-in-Jotta-AS-from-Hawk-Infinity-Software-AS-for-Approximately-49787314/)).
  - **So Norway's largest telco co-owns the leading "Norwegian cloud".**
- **Leadership:** Ina Halvorsen Seim has been CEO since 2026-03-01. Founder Rabben stepped down after 18 years ([Jotta blog, 2026-02-12](https://jottacloud.com/en/blog/new-ceo-jotta-group)). A new Chief Product Officer was appointed in March 2026 ([Jotta blog](https://jottacloud.com/en/blog/new-cpo-jotta-group)).
- **Customers:**
  - "More than 1.2 million paying customers in over 120 countries" ([Jotta blog, 2026-02-12](https://jottacloud.com/en/blog/new-ceo-jotta-group)).
  - The Norwegian homepage says "over 1,9 millioner brukere" (over 1.9 million users) ([jottacloud.com/nb/](https://jottacloud.com/nb/)).
  - At the time of the merger the combined company had "over 2 million active customers" ([Telenor](https://www.telenor.com/media/newsroom/press-releases/jottacloud-and-telenor-software-lab-merge/)).
  - **No Norway-only figure is public. Unverified.**
- **Growth driver (own claim):** the company names increased scepticism toward American services as a driver of customer growth ([Jotta blog, 2026-02-12](https://jottacloud.com/en/blog/new-ceo-jotta-group)).
- **White-label platform:**
  - The Jottacore site says "Jotta Group powers solutions for" Telenor, Telia, Tele2, Elkjøp, MediaMarkt and OBOS ([jottacore.com](https://jottacore.com/)).
  - Telia's Telia Sky page names Jotta as the supplier of the service ([telia.no](https://www.telia.no/trygghet/tjenester/telia-sky/)).
  - Elkjøp runs an "Elkjøp Cloud" service with its own help centre ([intercom.help/elkjopcloud](https://intercom.help/elkjopcloud/nb/)). Its prices are unverified because elkjop.no returned HTTP 429.
- **Jottacore (B2B object storage):**
  - S3-compatible storage, with data residency "Europe (Norway)" ([jottacore.com](https://jottacore.com/)).
  - Pay-as-you-go price is **NOK 89 per TB per month**. Egress is included up to 2× the stored volume. The page does not say whether the price includes VAT; it is likely ex VAT.

### Consumer prices (read 2026-11-12, [jottacloud.com/nb/pricing](https://jottacloud.com/nb/pricing))

| Plan | Monthly | Yearly | Users | Notes |
|---|---|---|---|---|
| Free | 0 | 0 | 1 | 5 GB |
| Ubegrenset (Unlimited) | **129 kr** | 1 290 kr | 1 | Unlimited storage; upload speed "reduseres gradvis etter 5 TB" (gradually reduced after 5 TB) |
| Home 1 TB | **79 kr** | 790 kr | 5 family members | 1 TB shared |
| Home 5 TB | **159 kr** | 1 590 kr | 5 family members | 5 TB shared |
| Pro 10 / 20 / 30 / 50 TB | 299 / 599 / 899 / 1 499 kr | 2 990 / 5 990 / 8 990 / 14 990 kr | 1 | Licensed for commercial use |

- The App Store listing says Home goes up to 20 TB for a family ([App Store NO](https://apps.apple.com/no/app/jottacloud/id1055315751)). The Norwegian pricing page shows only the 1 TB and 5 TB tiers.

### Features

- **Backup and sync:**
  - Automatic backup of phones, tablets and computers.
  - Original, uncompressed quality, including RAW files.
  - Version history of the last 5 versions, and a trash bin kept for 30 days.
  - An "Arkiv" (archive) feature to free up space on devices.
  - Link sharing and shared albums that friends can add photos to.
  - A command-line tool (CLI).
  - Source for all of the above: [jottacloud.com/nb/features](https://jottacloud.com/nb/features).
  - Supports NAS backup ([why-jottacloud comparison table](https://jottacloud.com/nb/why-jottacloud)).
- **Photo features:**
  - Timeline, albums and a Memories widget.
  - Album search now finds people (App Store "What's New", v26.11.1) ([App Store NO](https://apps.apple.com/no/app/jottacloud/id1055315751)).
- **AI photo search:**
  - Free-text search that describes the photo you want, using pre-trained image and text models and vector embeddings.
  - Supports "48 forskjellige språk, inkludert norsk" (48 languages, including Norwegian), with about 0.3 s per search ([jottacloud.com/nb/ai-powered-photo-search](https://jottacloud.com/nb/ai-powered-photo-search)).
  - It does not yet use where a photo was taken (same page).
  - Jottacloud says it does not train the models on user photos (same page; [docs](https://docs.jottacloud.com/en/articles/7325344-the-technology-behind-our-ai-powered-photo-search)).
- **Face grouping ("People"), new in November 2026:**
  - Introduced in app version 26.11.0 ([App Store NO](https://apps.apple.com/no/app/jottacloud/id1055315751)).
  - It is opt-in. "The processing happens on our own servers in Norway", and embeddings, groups and names "stay within your account" ([docs: Face grouping](https://docs.jottacloud.com/en/articles/16235637-face-grouping)).
  - The legal basis given is "legitimate interests (GDPR Art. 6(1)(f))". Users must be 13 or older.
- **Assistant, document help or LLM features:** none found on the product pages ([features](https://jottacloud.com/nb/features)). Treat this as unverified: it is absence of evidence, not proof.
- **App rating:** 4.6/5 from about 2.3k ratings on the Norwegian App Store ([App Store NO](https://apps.apple.com/no/app/jottacloud/id1055315751)).

### How Jottacloud talks about privacy and data location

- **Headline claim:** "Vi lagrer dataen din dypt inne i den norske fjellheimen… kryptert og beskyttet av strenge norske og europeiske personvernlover" (we store your data deep inside Norwegian mountains, encrypted and protected by strict Norwegian and European privacy laws) ([why-jottacloud](https://jottacloud.com/nb/why-jottacloud)).
  - Supporting themes: "100 % grønn energi" (100% green energy) and servers cooled by seawater.
- **Access claim:** "Ingen, verken myndigheter, tredjepartsleverandører eller andre, vil få tilgang til det du lagrer i Jottacloud" (no one, neither authorities, third-party suppliers nor others, will get access to what you store in Jottacloud) ([jottacloud.com/nb/](https://jottacloud.com/nb/)).
- **US jurisdiction:** the US CLOUD Act "does not apply to data stored here" because Jotta is Norwegian ([encryption and data](https://jottacloud.com/en/why-jottacloud/encryption-and-data)).
- **Encryption reality:**
  - Data is encrypted in transit (TLS) and at rest (AES-256). Jottacloud owns and runs its own servers, and all its data centres are in Norway ([features](https://jottacloud.com/nb/features)).
  - **It is not end-to-end encrypted:** "Jottacloud does not support the creating of your own private encryption keys", in order to support web viewing, sharing and sync ([docs](https://docs.jottacloud.com/en/articles/1292923-does-jottacloud-support-private-encryption-keys)).
  - The About page frames this as a deliberate choice: "Mens noen leverandører fokuserer på ende-til-ende-kryptering, har vi valgt å bygge en tjeneste som tilbyr både robust personvern og sømløs brukervennlighet" (while some providers focus on end-to-end encryption, we have chosen to build a service that offers both robust privacy and seamless ease of use) ([about](https://jottacloud.com/nb/about)).
  - **Implication:** Jotta holds the keys. It can technically read customer data, and so can anyone who can lawfully compel Jotta.

### Simplicity for a non-technical family

High. It is an app-store install with automatic backup, phone support for paying customers ([pricing](https://jottacloud.com/nb/pricing)) and a family plan for 5 members. Customers do not manage any hardware.

---

## 2. Norwegian ISPs and mobile operators

### Telenor: Min Sky (run by the Jotta joint venture)

- **Offer:**
  - "Du får ubegrenset bildelagring med i alle våre private mobilabonnement, helt uten ekstra kostnad" (you get unlimited photo storage with all our private mobile subscriptions, at no extra cost) ([telenor.no/min-sky](https://www.telenor.no/min-sky/)).
  - Min Sky is also part of the security bundle "Sikre" (ibid.).
  - Features: albums, editing, "Minner" (memories) and "Kolleksjoner" (collections).
  - The App Store listing advertises photo search by "tid, sted, filtype og personer" (time, place, file type and people) ([App Store](https://apps.apple.com/no/app/min-sky-bildelagring/id633980795?l=nb)). The app is 4.6/5 from about 12k ratings, with Telenor Software Lab AS as seller.
- **Price for non-Telenor customers:** anyone can use Min Sky and gets 2 GB free. Paid tiers are 25 GB for 29 kr/mnd, 50 GB for 49 kr/mnd and **5 TB for 99 kr/mnd** ([telenor.no/min-sky](https://www.telenor.no/min-sky/)).
  - "Ubegrenset lagring: Kun inkludert i private mobilabonnement fra Telenor" (unlimited storage is only included in Telenor's private mobile subscriptions) (ibid.).
- **Sikre bundle:**
  - Sikre Mobil costs 699 kr/mnd. The family price is 499 kr/mnd per extra subscription.
  - It includes fraud insurance, ID-vakt (identity monitoring), credit-loan alerts, protection against unsafe websites, Min Sky and unlimited data.
  - Broadband with Sikre costs "Fra 849,-/md" (from 849 kr/mnd).
  - Source: [telenor.no/sikre](https://www.telenor.no/sikre/).
- **Data location:** all Min Sky data was to move to Jottacloud's Norwegian data centres as part of the merger ([Telenor press release](https://www.telenor.com/media/newsroom/press-releases/jottacloud-and-telenor-software-lab-merge/)). Whether the migration is finished is unverified.
  - The Min Sky product page itself says only "trygg" (safe). The App Store listing says photos are "trygt lagret i skyen" (stored safely in the cloud) and does not name a country.
- **Market context:** on 2026-06-08 the Norwegian Competition Authority approved, with remedies, Telenor's purchase of GlobalConnect's consumer fibre business, about 125k customers after remedies ([Konkurransetilsynet](https://konkurransetilsynet.no/telenors-acquisition-of-globalconnect-approved-with-remedies/?lang=en); [Concurrences](https://www.concurrences.com/en/bulletin/news-issues/june-2026/the-norwegian-competition-authority-conditionally-clears-a-telecommunications)).
- **Simplicity:** high. It is an app plus Telenor ID, setup is guided step by step, and it costs nothing extra for Telenor mobile customers.

### Telia: Telia Sky (supplied by Jotta)

- **Offer:** "Telia Sky er inkludert i alle våre mobilabonnement" (Telia Sky is included in all our mobile subscriptions). It is also included with fibre, hybrid-fibre and wireless broadband ([telia.no/telia-sky](https://www.telia.no/trygghet/tjenester/telia-sky/)).
  - **Unlimited storage** for photos, video and documents.
  - **AI-based photo search** ("bare beskriv bildet du leter etter", just describe the photo you are looking for).
  - Office Online integration ([help centre](https://intercom.help/teliasky/nb/)).
- **Price:** no extra charge for Telia mobile or broadband customers. It cannot be kept without a Telia subscription. When customers leave, "Jotta (leverandør av skytjenesten)" (Jotta, the cloud service's supplier) emails instructions for moving the data to Jottacloud ([telia.no](https://www.telia.no/trygghet/tjenester/telia-sky/)).
- **Security bundle:** Telia Trygg costs "fra 129,-/md." (from 129 kr/mnd), after a 3-month free trial (ibid.).
- **Privacy and data-location claim:** "Alle data lagres på norske servere i henhold til norsk personvernlov" (all data is stored on Norwegian servers under Norwegian privacy law). Also: "Norge har en av verdens strengeste personvernlover, derfor står alle våre servere i Norge" (Norway has one of the world's strictest privacy laws, which is why all our servers are in Norway) (ibid.).
- **Simplicity:** high. Login reuses the Min Side credentials, and the service is bundled.

### Ice and Altibox (Lyse Tele)

- **Ownership and scale:** Ice and Altibox are both part of Lyse Tele AS. At the end of H1 2026, Ice had 1,087,641 mobile customers and the Altibox partnership had 951,052 broadband and entertainment customers, 61,324 of them in Denmark ([Lyse half-year release, 2026-08-27](https://kommunikasjon.ntb.no/pressemelding/19037269/stabil-drift-for-lyse?lang=no)).
- **Ice:**
  - No consumer cloud-storage product found. I scanned the 761 URLs in [ice.no/sitemap.xml](https://www.ice.no/sitemap.xml) for sky, cloud, lagring and bilde.
  - Its security add-on, iceTrygg, costs 69 kr/mnd and covers insurance (ID theft, net-erasure help, safe online shopping) with HELP forsikring. It does not include storage ([ice.no/produkt/icetrygg](https://www.ice.no/produkt/icetrygg/)).
- **Altibox:** no consumer cloud-storage product found. I scanned [altibox.no/sitemap.xml](https://www.altibox.no/sitemap.xml) and found only blog posts about backup.
- **So:** Lyse's roughly 2 million customer relationships are an open space with no bundled cloud. That makes Lyse either a channel or a target for Jotta, and also for Heima.

### GlobalConnect and others

- **GlobalConnect consumer:** no consumer cloud product found (search, 2026-11-12). Its Norwegian consumer fibre business is being transferred to Telenor ([Konkurransetilsynet](https://konkurransetilsynet.no/telenors-acquisition-of-globalconnect-approved-with-remedies/?lang=en)).
- **Tele2, OBOS, Elkjøp and MediaMarkt:** all listed as Jotta Group partners ([jottacore.com](https://jottacore.com/)). Their Norwegian offers were not checked in detail.

---

## 3. Apple iCloud+ and Google One (the default for most families)

### Apple iCloud+ (Norway, VAT included; [Apple Support, published 2026-09-16](https://support.apple.com/en-us/108047))

| 50 GB | 200 GB | 2 TB | 6 TB | 12 TB |
|---|---|---|---|---|
| 12 kr | 39 kr | **129 kr** | 399 kr | 799 kr per month |

- **Family:** every tier can be shared with up to five other family members. Plans also include Private Relay, Hide My Email and HomeKit Secure Video (ibid.).
- **Privacy:**
  - The default "standard data protection" encrypts Photos in transit and on the server, with Apple holding the keys.
  - The optional **Advanced Data Protection** setting makes Photos end-to-end encrypted, with keys on trusted devices. It is off by default.
  - "Both Apple and third-party data centers may be used to store and process your data."
  - Source: [Apple Support 102651](https://support.apple.com/en-us/102651). Apple makes no promise that data stays in Norway.
- **AI:** Apple Intelligence is available with the device language set to Norwegian. Siri AI in Norwegian is "coming by the end of the year" (2026) ([Apple Newsroom, 2026-10-26](https://www.apple.com/newsroom/2026/10/siri-ai-is-available-in-more-languages-starting-today/)). Whether natural-language search in the Photos app works in Norwegian is unverified.

### Google One (Norway, [one.google.com plans, hl=no, gl=NO](https://one.google.com/about/plans?hl=no&gl=NO))

| Plan | Storage | Price |
|---|---|---|
| Free | 15 GB | 0 |
| Basic | 100 GB | **24 kr/mnd** |
| Google AI Plus | 2 TB | **125 kr/mnd** |
| Google AI Pro | 5 TB | **259 kr/mnd** |

- **Bundling and family:** the 2 TB and 5 TB tiers are bundled with Gemini features. All plans can share storage "med opptil fem andre" (with up to five others), and yearly billing saves "opptil 17 %" (up to 17%) (ibid.).
  - Caveat: the page was fetched from outside Norway with `gl=NO`. The kr prices it showed should be checked from a Norwegian IP.
- **Privacy:** "your information may be processed on servers located outside of the country where you live" ([Google privacy frameworks](https://policies.google.com/privacy/frameworks?hl=en)).
- **Ask Photos:** rolling out to "a select number of countries"; Norway is not listed ([Google Photos help](https://support.google.com/photos/answer/15318661?hl=en)). Availability in Norway is unverified.

### Proton Drive (privacy reference point, Swiss)

- **Prices:** shown in USD on the Norwegian-language page. Drive Plus 200 GB is 4.99 USD/mnd. Proton Family 3 TB for up to 6 users is 29.99 USD/mnd, or 23.99 USD/mnd billed yearly ([proton.me/nb/drive/pricing](https://proton.me/nb/drive/pricing)).
- **Encryption:** every plan is end-to-end encrypted. "Takket være vår nulltilgangs- og ende-til-ende-kryptering kan ikke engang Proton se eller redigere filene dine" (thanks to our zero-access, end-to-end encryption, not even Proton can see or edit your files) (ibid.).
- **Why it is included:** Proton is the clearest example of a "the provider can't see it" claim aimed at consumers. It is not Norwegian.

---

## 4. NAS products sold through Norwegian retailers

- **Retailer access:** Komplett (connection refused) and Elkjøp (HTTP 429) blocked automated access, so **their NAS prices are unverified**.
- **Sources used instead:** Power's own product API, and the Norwegian price aggregator godpris.no, which lists shop-level prices.
- **Prices exclude disks unless noted.**

| Product | Lowest price seen | Where | Source |
|---|---|---|---|
| Synology DS223j (2-bay, entry) | 2 390 kr | CS Megastore, CDON; Multicom 2 422; Proshop 2 438; NetOnNet 2 528 | [godpris.no](https://godpris.no/produkt/656179) |
| Synology DS223 (2-bay) | 4 199 kr at Power; 3 490 kr lowest on godpris | Power | [Power API](https://www.power.no/api/v2/productlists?q=synology&size=40); [godpris.no](https://godpris.no/produkt/8227607) |
| Synology DS225+ (2-bay, Intel) | 4 439 kr | CS Megastore; Proshop 4 513; Multicom 4 550; NetOnNet 4 990 | [godpris.no](https://godpris.no/produkt/11089967) |
| Synology DS723+ | 6 490 kr | Power | [Power API](https://www.power.no/api/v2/productlists?q=synology&size=40) |
| Ugreen NASync DXP2800 (2-bay, N100, 8 GB) | 4 163 kr | CS Megastore; Kjell & Company 4 190; Proshop 5 290 | [godpris.no](https://godpris.no/produkt/8227607) |
| QNAP 2-bay ARM, 4 GB RAM (model as listed) | 3 419 kr | — | [godpris.no](https://godpris.no/produkt/8227607) |
| QNAP TS-433 (4-bay) | 5 255 kr | — | [godpris.no](https://godpris.no/produkt/8227607) |
| Seagate IronWolf 4 TB NAS disk | 2 430 kr each | — | [godpris.no search](https://godpris.no/sok?q=ironwolf+4tb) |

- **Power's range is small.** Power's whole NAS category has 5 products, 3 of them Synology NAS units, and no Ugreen or QNAP ([Power API, q=nas-server](https://www.power.no/api/v2/productlists?q=nas-server&size=60)).
  - Inference: NAS is a niche, enthusiast product in mainstream Norwegian electronics retail.
- **Typical cost of a family setup:**
  - An entry 2-bay NAS with two mirrored 4 TB disks (4 TB usable) costs about **7 250 kr**: DS223j 2 390 + 2 × 2 430. A Ugreen DXP2800 build costs about **9 000 kr**.
  - Spread over 3 years, that is roughly **200–250 kr/mnd**, before any off-site backup.
- **Privacy positioning:**
  - Synology markets Synology Photos with "100% data ownership and privacy", plus face and object recognition, real-time mobile backup and link sharing ([synology.com](https://www.synology.com/en-global/dsm/feature/photos)).
- **Ugreen's AI NAS (iDX6011 / iDX6011 Pro):**
  - Launched at CES 2026 with an on-device LLM assistant, "Uliya", that offers natural-language search, face recognition, document Q&A and local transcription.
  - Early-bird price was USD 1,559 and shipping started in May 2026 ([TechRadar review](https://www.techradar.com/computing/ugreen-nasync-idx6011-pro-nas-review)).
  - TechRadar found that some features needed Terminal access or a paid cloud API key (OpenAI or Claude) to reach their full potential (ibid.).
  - Norwegian retail availability and price are unverified.
- **Synology drive lock:** Synology's 2025 rule restricting disks to its own drives was rolled back in DSM 7.3 on 2025-10-08 for the 2025 Plus, Value and J series ([Tom's Hardware](https://www.tomshardware.com/pc-components/nas/synology-walks-back-controversial-compatibility-policy-for-2025-nas-units-third-party-hdd-and-ssd-support-returns-with-diskstation-manager-7-3-update)). It was a recent trust hit for the category.
- **Simplicity for a non-technical family: low.** The family has to:
  - buy disks separately and choose a RAID level;
  - set up remote access and user accounts;
  - arrange off-site backup themselves.

  Even an AI NAS needs technical setup for its best features, per TechRadar above. This is our judgement, based on the cited product material.

---

## 5. Norwegian home-AI and privacy home-cloud startups

- **No Norwegian startup found** that sells a home box for family photos and documents with local AI. I searched in Norwegian and English on 2026-11-12 with queries such as "norsk oppstartsselskap privat sky hjemme boks…" and "Norwegian startup personal home server…". The nearest results were Jottacloud (cloud) and foreign players.
  - Foreign players found: Freeshard (Munich), a managed personal server hosted in an EU data centre ([Munich Startup](https://www.munich-startup.de/en/startups-and-ecosystem/freeshard)), and ZimaOS Photos ([Zima](https://shop.zimaspace.com/blogs/zima-campaign-hub/meet-zimaos-photos-private-photo-library)).
  - Treat "no Norwegian competitor" as **unverified**. A search cannot prove absence.
- **Cautionary Norwegian precedent: Futurehome (smart-home hub).**
  - Futurehome AS went bankrupt in May 2025. The company that bought the estate then demanded an annual subscription for hubs that customers had already bought:
    - 99 kr/mnd for existing customers and 115 kr/mnd for new ones, paid yearly;
    - without it, "huben og sentralstyringen via app vil bortgå" (the hub and central control via the app will be lost).
  - Customers reacted with fury ([Tek.no, 2025-06-21](https://www.tek.no/nyheter/nyhet/i/alMe04/rasende-kunder-opplever-smarthjem-utpressing)).
  - This is directly relevant to a box-plus-Subscription model.

---

## 6. Comparison table

*Prices per month, read 2026-11-12. "Simplicity" is our judgement for a non-technical family.*

| Offer | Price (NOK) | Storage | Data location claim | Provider can read data? | AI / photo search | Simplicity |
|---|---|---|---|---|---|---|
| **Jottacloud Home** | 79 (1 TB) / 159 (5 TB); 5 members | 1–5 TB (App Store says up to 20 TB) | "Lagret i Norge" (stored in Norway); own servers | **Yes**: no customer-held keys | Norwegian free-text photo search; face grouping (opt-in, Nov 2026); no assistant found | High |
| **Jottacloud Unlimited** | 129; 1 user | Unlimited (slower after 5 TB) | Norway | Yes | As above | High |
| **Telenor Min Sky** | 0 with Telenor mobile; 99 for 5 TB otherwise | Unlimited / 5 TB | Moving to Jotta's Norwegian data centres | Likely yes (Jotta platform); **unverified** | Search by time, place, people | High |
| **Telia Sky** | 0 with Telia mobile or broadband | Unlimited | "Norske servere" (Norwegian servers) | Likely yes (Jotta supplier); **unverified** | AI photo search | High |
| **Ice / Altibox** | — | No product found | — | — | — | — |
| **Apple iCloud+** | 129 (2 TB), 39 (200 GB); 6 people | 50 GB–12 TB | Apple and third-party data centres; no Norway promise | Yes by default; no with Advanced Data Protection (opt-in) | On-device Photos; Apple Intelligence in Norwegian | Very high on iPhone |
| **Google One** | 125 (2 TB, AI Plus), 24 (100 GB); 6 people | 100 GB–5 TB | "Servers around the world" | Yes | Strong; Ask Photos not confirmed in Norway | Very high on Android |
| **Proton Drive Family** | ≈ 24–30 USD; 6 users | 3 TB | Switzerland | **No** (end-to-end) | Minimal | Medium |
| **NAS (Synology / Ugreen / QNAP)** | ≈ 7 000–9 000 kr upfront incl. disks (≈ 200–250 kr/mnd over 3 years) | 4 TB usable (2 × 4 TB mirror) | In your home | **No** (you hold it) | Synology faces and objects; Ugreen local LLM (high-end) | Low |
| **Heima (hypothesis from the brief)** | 149–199 incl. box | 2 TB + encrypted backup in Norway | In your home + Norway | **No**, if the backup is truly customer-keyed | Norwegian search + document assistant | Must be "plug in, scan QR" |

---

## 7. Gaps left for a non-technical, privacy-concerned family

1. **"Norwegian" does not mean "private from the provider".**
   - Every Norwegian consumer cloud we found is Jottacloud, Telenor Min Sky, Telia Sky or Elkjøp Cloud. All of them run on Jotta's platform, which is not end-to-end encrypted and where Jotta holds the keys ([docs](https://docs.jottacloud.com/en/articles/1292923-does-jottacloud-support-private-encryption-keys)).
   - End-to-end options are either foreign and pricier per TB (Proton), or opt-in and buried (Apple Advanced Data Protection).
2. **No easy option where the data lives at home.**
   - NAS boxes deliver home storage but require disks, RAID, remote access and an off-site backup that the family has to design themselves.
   - Mainstream retail barely stocks them: Power lists 3 NAS units.
3. **No assistant for the family's own paperwork.**
   - No Norwegian provider offers help with letters from NAV, Skatteetaten, contracts or warranty deadlines on the family's own documents. Jottacloud's AI covers photos only (features page).
   - Apple's and Google's assistants are general-purpose and cloud-backed.
4. **Lock-in to the telco.**
   - Bundled "free" storage disappears when the household changes operator. Telia Sky cannot be kept without a Telia subscription ([telia.no](https://www.telia.no/trygghet/tjenester/telia-sky/)).
   - Telenor's unlimited tier is "kun inkludert i private mobilabonnement" (only included in private mobile subscriptions) ([telenor.no](https://www.telenor.no/min-sky/)).
5. **Fragmentation.** Families commonly pay for iCloud or Google storage while also getting a free Norwegian cloud through their telco, with photos split across both. This is an inference, not measured.
6. **Trust in hardware plus subscription is fragile.** Futurehome showed Norwegian consumers that a box can be crippled after the fact ([Tek.no](https://www.tek.no/nyheter/nyhet/i/alMe04/rasende-kunder-opplever-smarthjem-utpressing)).

---

## 8. Implications for Heima's positioning and pricing

### Does "your data stays in your home" beat Jottacloud's "your data stays in Norway"?

**Only if it is sharpened into "nobody but you can open it". On its own, location is not enough.**

- **Data location is already a commodity.** "In Norway" is Jotta's whole brand. It is also delivered at no extra charge to every Telenor and Telia mobile customer, and to Telia broadband customers. Heima cannot charge a premium for "not on a US server" when Telenor gives that away.
- **Heima's real difference is who holds the key.**
  - Jottacloud deliberately chose not to offer customer-held keys ([about](https://jottacloud.com/nb/about); [docs](https://docs.jottacloud.com/en/articles/1292923-does-jottacloud-support-private-encryption-keys)).
  - The brief's line "Vi kan ikke se dem. Selv om vi ville." ("We can't see them. Even if we wanted to.") is a claim **no Norwegian competitor can make**. "Stays in your home" is the tangible, easy-to-grasp proof of that claim.
  - Position it as: *"Jotta keeps your photos in Norway. Heima keeps them in your living room, and only you hold the key."*
  - The claim must be technically true for the backup copy too, meaning end-to-end encrypted with the customer holding the key. Otherwise Heima's privacy pitch is no stronger than Jotta's.
- **Watch the trade-off Jotta named.**
  - Jotta says end-to-end encryption costs convenience (web viewing, sharing) ([about](https://jottacloud.com/nb/about)). A non-technical family will also lose its data if it loses its key.
  - Heima needs a recovery design that is both simple and honest. This is a product risk, not just marketing.
- **Photo search is no longer a moat.**
  - Jottacloud already has Norwegian free-text photo search ([AI search](https://jottacloud.com/nb/ai-powered-photo-search)) and launched face grouping in November 2026 ([docs](https://docs.jottacloud.com/en/articles/16235637-face-grouping)). Telia Sky markets AI photo search too ([telia.no](https://www.telia.no/trygghet/tjenester/telia-sky/)).
  - Heima's AI wedge is the **local document assistant** (NAV and tax letters, deadlines). The brief has it in v1.5; consider bringing at least a thin version forward.

### Pricing

- **Reference prices (per month, read 2026-11-12):**
  - iCloud 2 TB: 129 kr
  - Google AI Plus 2 TB: 125 kr
  - Jottacloud Home 5 TB: 159 kr
  - Jottacloud Home 1 TB: 79 kr
  - Min Sky 5 TB: 99 kr
  - Telia Sky and Telenor Min Sky: unlimited at 0 kr for their own customers
- **What this means for the 149–199 kr/mnd hypothesis:**
  - It costs more than every pure-storage alternative, for less storage (2 TB).
  - The premium has to be justified by ownership, provider-blind encryption and the assistant, not by gigabytes.
  - Matching iCloud 2 TB (129 kr) is the right anchor for the internet-bundled price, as the brief proposes.
- **Unit-economics flag.**
  - Jotta's own B2B storage, Jottacore, lists at **NOK 89 per TB per month** pay-as-you-go ([jottacore.com](https://jottacore.com/)).
  - A household that fills 2 TB would therefore cost about 178 kr/mnd in backup storage alone at list price, which is more than the Subscription.
  - Heima needs either its own Norwegian storage, a reserved-capacity deal, or backup quotas sized to real usage (most families use far less than 2 TB; unverified, needs pilot data).
  - Buying backup from Jotta would also mean buying from the main competitor, which is co-owned by Telenor.
- **The NAS comparison helps.** A do-it-yourself NAS costs about 7 000–9 000 kr upfront, equal to 200–250 kr/mnd over 3 years, with no off-site backup and real setup effort. A box sold on instalments plus a Subscription can be framed as "a NAS without the homework, with backup included".
- **Make a public "box keeps working" promise.**
  - After Futurehome, Heima should commit publicly that photos and files stay accessible locally even if the Subscription lapses or the company fails. Only the backup and updates stop.
  - That is a positioning asset as well as a risk mitigation.

### Channel note

- **Telenor and Telia are tied to Jotta** (Telenor as co-owner, Telia as customer). Lyse (Ice and Altibox, about 2 million customer relationships) has no consumer cloud product ([Lyse H1 2026](https://kommunikasjon.ntb.no/pressemelding/19037269/stabil-drift-for-lyse?lang=no)).
- If Heima's ISP is not one of the big two, Heima can be the ISP's answer to bundled Min Sky and Telia Sky.
- If Heima is sold to anyone in Norway regardless of ISP, the Lyse base is the most open co-sell target.

---

## Sources not reachable or not verified

- **Komplett.no:** connection refused. **Elkjøp.no:** HTTP 429. NAS prices from these two retailers are unverified, and so are Elkjøp Cloud's prices.
- **Telenor's 50% stake in Jotta:** the completion date (2025-04-30) comes from a secondary source (MarketScreener).
- **Jottacloud customer count:** no Norway-only figure is public.
- **Google One:** prices were fetched with `gl=NO` from a non-Norwegian network. Confirm from Norway.
- **Ugreen iDX6011:** Norwegian availability and price not found.
- **Apple Photos:** whether natural-language search works in Norwegian is unverified.
- **Min Sky migration:** whether all Min Sky data has finished moving to Jotta's Norwegian data centres is unverified.
