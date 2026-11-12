# International competitors and analogues for Heima

**Question (issue #3):** Who does Heima compete with internationally, and which products come closest to "a private cloud and AI assistant in a box at home for non-technical families"?

**Researched:** 2026-11-12. Every price carries the date it was observed or published. Prices are in the vendor's currency and are **not** converted. Exchange rates and Norwegian VAT are left out on purpose.

**Method:** Official product, pricing and support pages, company announcements and post-mortems came first. Trade press was used only where no primary source exists, and is marked as such. Where only secondary sources exist, or sources disagree, the claim is marked **(unverified)**. GitHub star counts were read from the GitHub API on 2026-11-12.

**Terms:** Heima, Heima-boksen, Heima-appen, Subscription, Household, Buyer and Member are used as defined in `GLOSSARY.md`.

---

## TL;DR

1. **Nobody sells Heima's exact combination today:** a furniture-like box, phone-first photo backup, a local assistant that works in Norwegian, an encrypted national off-site copy, and sales through a trusted ISP. The pieces exist separately, sold by NAS vendors, privacy-cloud companies and the platform giants.
2. **Synology BeeStation is the closest commercial analogue,** and the one to study. It is a plug-in box set up with a QR code, with on-device face and object recognition and an optional encrypted cloud backup (BeeProtect) that is priced flat. It has no assistant, no natural-language search in its photo app, and no Norwegian-language positioning.
3. **The "AI NAS" wave of 2025–2026 is aimed at prosumers, not families.** Ugreen iDX6011, Zettlab, Olares One, Ugreen HomeAgent and Anker MindBase all list in the high hundreds to thousands of USD. They are sold through Kickstarter to enthusiasts. Local LLMs are a selling point, but reviewers still describe the software as unfinished.
4. **Immich has become the default open-source photo engine.** It is AGPL-3.0 and backed by FUTO, with about 119k GitHub stars. It welcomes "strategic collaborations", but **its FAQ asks resellers not to use the Immich trademark.** That suits a white-labelled Heima-appen, but the AGPL question in the brief still needs a legal assessment.
5. **The platform giants are the real positioning threat.** iCloud+ 2 TB costs **NOK 129/month in Norway** (Apple, published 2026-09-16). Apple Intelligence supports Norwegian and promotes on-device processing plus Private Cloud Compute. Google's Ask Photos is spreading through Europe. "Smart search" alone will not set Heima apart.
6. **Telco home clouds have mostly been cloud services, not boxes, and many of them were closed:** Orange's Livebox storage and Le Cloud d'Orange (2019) and BT Cloud (2024). The survivors are white-label or partner clouds: Telekom MagentaCLOUD on Nextcloud with 2.2 M active users, Verizon on Synchronoss, and **Telenor Min Sky merged into a 50/50 joint venture with Jottacloud in 2025.**
7. **The home-server graveyard is large, and the causes repeat:** hardware cost and supply chain (Helm, Lima), cloud-dependent features that die with the vendor (Lima, Humane, ibi), losing to built-in phone clouds (Lyve, Ever), and the incumbent losing interest (Windows Home Server, Orange). **Monument, the closest prior "AI photo box", moved its business to a cloud service** because users asked "what if my house burns down?" and some did not want a device at home.

---

## 1. Direct analogues: a box at home plus a phone app, aimed at consumers

### 1.1 Synology BeeStation / BeeStation Plus with the BeePhotos app (closest analogue)

- **What it is:** A personal-cloud box that is a "one-time purchase". BeePhotos backs up the phone camera roll and offers AI Albums (faces and subjects), map and timeline views, and shared albums. [Synology BST170-4T](https://www.synology.com/en-us/store/BST170-4T), [BeeStation](https://bee.synology.com/en-us/BeeStation/Standard)
- **AI:** Face and object recognition run locally. Synology: "BeeStation's built-in AI is completely local and does not send anything to cloud." [BeeStation](https://bee.synology.com/en-us/BeeStation/Standard) It has no LLM assistant. Synology's natural-language AI search, Deep Search, is a separate desktop app for Mac and PC with a suggested retail price of USD 49.99. It was announced for BeeDrive on 2025-12-03. [Synology Deep Search](https://www.synology.com/en-global/products/deep-search), [press release](https://www.synology.com/en-global/company/news/article/deepsearch) On the DSM NAS line, the AI Console mainly connects to cloud LLM providers (OpenAI, Gemini, Bedrock and others). A local GPU model is offered only on GPU-equipped models. [AI Console spec](https://www.synology.com/en-us/dsm/7.4/software_spec/ai_console), [NASCompares review](https://nascompares.com/2025/08/13/synology-ai-console-review/) I found no evidence of natural-language search inside BeePhotos (**unverified**; the BeePhotos release-notes page would not render).
- **Setup effort:** Connect Ethernet, scan the QR code on the quick-start guide, then follow the guided steps. It also works from a mobile browser, has no Wi-Fi, and supports up to 8 users. [BeeStation](https://bee.synology.com/en-us/BeeStation/Standard)
- **Price:**
  - BeeStation Plus 8 TB: USD 409.99 (9to5Mac, 2025-07-09). [9to5Mac](https://9to5mac.com/?p=1009353)
  - 2026 line-up, before VAT (Blackvoid, 2026-06-02): BST151-4T USD 329, BST170-4T USD 399, BST170-8T USD 520. [Blackvoid](https://www.blackvoid.club/two-new-synology-beestation-models-for-2026/) **(unverified, secondary source)**
- **Off-site backup (BeeProtect):** Client-side AES-256 encryption, and Synology says it cannot decrypt the data. One flat price regardless of how much data is stored. The page does not say where the data is stored. [BeeProtect](https://bee.synology.com/en-us/BeeStation/BeeProtect) The official page shows price placeholders. 9to5Mac (2025-07-09) reports USD 11.99/month or USD 119/year for the Plus, and 50% less for the standard model. [9to5Mac](https://9to5mac.com/?p=1009353)
- **Target customer:** "families, creative teams, and professionals"; "everyday users … without needing advanced storage or networking knowledge". [Synology press release, 2025-05-20](https://www.synology.com/en-us/company/news/article/BeeStation_Plus)
- **Traction:** No unit figures are published. The line is expanding: new models in 2026 and BeeCamera home monitoring from April 2026. [Blackvoid](https://www.blackvoid.club/two-new-synology-beestation-models-for-2026/) One reviewer found face recognition "hit-or-miss". [Notebookcheck](https://www.notebookcheck.net/Synology-BeeStation-NAS-review-Excellent-entry-level-backup-solution-with-one-glaring-disadvantage.989042.0.html)
- **Why it matters for Heima:** BeeStation already ships the "box + flat-fee encrypted backup + QR setup" model that the brief describes. Heima can only stand apart through the assistant, Norwegian language, design, the ISP channel and Norwegian data residency.

### 1.2 Ugreen NASync, iDX "AI NAS" and HomeAgent

- **NASync (2024):**
  - Ugreen's move into NAS was funded on Kickstarter. NASCompares reported nearly £5 M from more than 12,000 backers (2024-05). [NASCompares](https://nascompares.com/2024/05/03/the-ugreen-nas-range-1-month-later-should-you-back-it-or-bail-on-it/)
  - Ugreen's own page claims about 30,134 backers and about USD 6.68 M, "highest-funded NAS on Kickstarter" (company claim). [Ugreen](https://ai.ugreen.com/pages/ugreen-ai-nas-feature-introduction)
  - Entry model DXP2800 (diskless): USD 389.99, compare-at USD 439.99, read from the Ugreen store's product JSON on 2026-11-12. Its Photos app does AI face, scene and object recognition. [Ugreen store](https://ai.ugreen.com/products/ugreen-nasync-dxp2800-nas-storage), [Ugreen photo guide](https://ai.ugreen.com/blogs/knowledge/ugreen-nas-photos)
- **iDX6011 / iDX6011 Pro (CES 2026):**
  - Hardware: Intel Core Ultra, up to 64 GB RAM.
  - Software: "Uliya" local chatbot with modes for AI Chat, File Chat (summarise and translate documents) and a Knowledge Base. AI Album offers natural-language search, OCR search, similar-photo detection and face, scene and object recognition. [Ugreen AI NAS](https://ai.ugreen.com/pages/ugreen-ai-nas-feature-introduction), [PR Newswire via StreetInsider, 2026-01-06](https://www.streetinsider.com/PRNewswire/UGREEN+Debuts+New+Smart+Ecosystem+at+CES+2026%2C+Led+by+AI+NAS/25810992.html)
  - Launch pricing (2026-01-06): iDX6011 64 GB USD 1,199 early bird (MSRP 1,999); Pro USD 1,559 (MSRP 2,599). [StreetInsider](https://www.streetinsider.com/PRNewswire/UGREEN+Debuts+New+Smart+Ecosystem+at+CES+2026%2C+Led+by+AI+NAS/25810992.html)
  - On 2026-11-12 the Ugreen site menu listed iDX6011 32 GB USD 2,349.99, 64 GB USD 3,599.99 and Pro USD 5,999.99. [Ugreen](https://ai.ugreen.com/pages/ugreen-ai-nas-feature-introduction) **(unverified: I could not open the product page to confirm these are current list prices.)**
  - Reviews are broadly positive for creators and SMBs; TechRadar calls it "the ultimate NAS for creatives and small businesses". [TechRadar](https://www.techradar.com/pro/ugreen-nasync-idx6011-pro-nas-device-review)
- **HomeAgent (announced 2026-09, Kickstarter):**
  - A local-AI home hub that combines storage, cameras, a voice assistant (Uliya), Matter control and photo frames.
  - Prices on 2026-11-12: HA100 USD 799 early bird (MSRP 1,599); HA100 Pro USD 2,699 (MSRP 5,399); MA100 USD 9,999 (MSRP 19,999). The reservation deposit deadline is 2026-11-16. [Ugreen HomeAgent](https://ai.ugreen.com/pages/ugreen-homeagent-crowdfunding)
  - Cult of Mac called the line "expensive and unproven". [Cult of Mac](https://www.cultofmac.com/?p=938462) **(secondary)**
- **Target:** Enthusiasts, creators and SMBs. HomeAgent is Ugreen's first push toward the whole household.

### 1.3 Umbrel Home / Umbrel Pro (umbrelOS)

- **What:** A palm-sized home server running umbrelOS, an app-store OS with 300+ apps (files, photos, media, Bitcoin node, AI agents, Ollama). Setup: plug in Ethernet and power, then open `umbrel.local`, which Umbrel says takes "under a minute". [Umbrel Home](https://umbrel.com/umbrel-home)
- **Price:**
  - Umbrel Home relaunched at "from USD 399 / EUR 279 / GBP 239" on 2025-06-10. [Umbrel community](https://community.umbrel.com/t/introducing-the-all-new-umbrel-home-now-with-up-to-4tb-ssd-storage/22968) The 2026 price is **unverified**: the product page shows "From" without a figure.
  - Umbrel Pro: USD 699, read from the store's product JSON on 2026-11-12.
  - The original Umbrel Home launched at USD 699 in 2023. [Decrypt](https://decrypt.co/143086/umbrel-ceo-says-diy-bitcoin-node-blocks-corporations-from-spying-on-us)
- **Licence:** umbrelOS is under the **PolyForm Noncommercial 1.0.0** licence, so it is not open source for commercial reuse. [GitHub LICENSE](https://github.com/getumbrel/umbrel/blob/master/LICENSE.md)
- **Traction:** USD 3 M seed round (2021, led by OSS Capital). [Umbrel community](https://community.umbrel.com/t/we-ve-raised-a-3m-seed-round-and-are-now-hiring/4365) 12.6k GitHub stars (2026-11-12). No unit sales are published.
- **Target:** Self-hosters and the Bitcoin and privacy crowd. The UX is polished, but the mental model is "run your own server", not "family photos".

### 1.4 Zettlab AI NAS (D4 / D6 / D6 Ultra)

- An AI NAS with local LLM chat over your files, transcription and natural-language photo search. The D6 Ultra uses an Intel Core Ultra 5 125H; the D4 and D6 use an RK3588. [Impress Watch, 2025-12](https://internet.watch.impress.co.jp/docs/topic/special/2069547.html), [PetaPixel](https://petapixel.com/2025/10/28/zettlabs-sleek-new-nas-uses-ai-to-find-the-photos-you-want)
- **Kickstarter (2025-04-28 to 06-12):** HK$10,578,386 from 1,666 backers. [Kicktraq](https://www.kicktraq.com/projects/zettlab/zettlab-ai-nas-personal-cloud-for-smart-data-management/) Early-bird prices were USD 399–1,099 and retail USD 599–1,599 (2025). [Liliputing](https://liliputing.com/zettlab-ai-nas-stores-transcribes-and-makes-all-your-data-searchable-crowdfunding/) **(secondary)**
- **Reviews:** TechRadar on the D6 Ultra: "the operating system needs to mature". [TechRadar](https://www.techradar.com/pro/zettlab-d6-ultra-nas-review)

### 1.5 Olares One ("personal AI cloud")

- **What:** A desktop AI box with an RTX 5090 Mobile, 96 GB RAM and Olares OS. It offers one-click apps (200+, including Immich), local LLMs and agents, and a knowledge base. [Olares shop](https://shop.olares.com/products/olares-one)
- **Price:** USD 4,999 on 2026-11-12, up from about USD 2,899–2,999 on Kickstarter in December 2025. [Olares shop](https://shop.olares.com/products/olares-one), [Yanko Design](https://www.yankodesign.com/2025/12/21/this-2899-desktop-ai-computer-with-rtx-5090m-lets-you-cancel-every-ai-subscription-forever/amp/)
- **Traction:** More than USD 1 M in orders in the first Kickstarter week. [Olares blog, 2025-12-31](https://www.olares.com/blog/?p=4551) Olares OS has 5.4k GitHub stars and is AGPL-3.0 (2026-11-12).
- **Target:** "developers, creators, small businesses", gamers. Not families.

### 1.6 Anker eufy MindBase (IFA 2026)

- A local AI home hub: 26 TOPS, up to 48 TB across two bays, an agent ("TrueSmart"), Matter, cameras, and no subscription. **No price or launch date** had been announced as of the reports. [Android Authority](https://androidauthority.com/anker-mindbase-ai-smart-home-hub-3702979), [Yanko Design, 2026-09-03](https://www.yankodesign.com/2026/09/03/anker-mindbase-gives-your-old-eufy-cameras-a-real-brain-and-48tb-of-memory-hands-on-at-ifa-2026/)
- **Signal:** A mass-market consumer-electronics brand is moving into "local AI box at home", starting from home security rather than photos.

### 1.7 Monument (Monument 1 and 2): the closest prior "AI photo box", which pivoted

- **What:** A home photo-storage device with on-device AI (face grouping), funded by two Kickstarter rounds, first generation from 2017. [Backblaze case study](https://www.backblaze.com/blog/shooting-for-the-clouds-how-one-photo-storage-service-moved-beyond-physical-devices/)
- **Pivot:** Monument launched Monument Cloud on Backblaze because customers kept asking what would happen to their photos if the house burned down, and "a lot of users … didn't want a physical device in their home". The cloud product has about 25,000 active users and "has become Monument's flagship offering". [Backblaze](https://www.backblaze.com/blog/shooting-for-the-clouds-how-one-photo-storage-service-moved-beyond-physical-devices/) (undated case study)
- **Status 2026-11-12:** `getmonument.com` does not resolve in DNS, and `monument.app` shows "Coming Soon / under construction" (checked directly). **The product's status is unverified;** it appears dormant.

---

## 2. Open-source building blocks

### 2.1 Immich

- **What:** A self-hosted Google Photos alternative with mobile backup, faces and CLIP search. **Licence: AGPL-3.0**, and it will stay AGPL with no CLA. [Immich licensing post, 2024-07-18](https://v1.110.0.archive.immich.app/blog), GitHub API.
- **Backing and business model:**
  - The core team works full time under FUTO. It is funded by optional lifetime "product keys": **Server USD 99.99, Individual USD 24.99** (2024-07-18), with "never any paywalled features". [Immich licensing post](https://v1.110.0.archive.immich.app/blog), [FAQ](https://github.com/immich-app/immich/blob/main/docs/docs/FAQ.mdx)
  - v2.0.0 "stable" shipped on 2025-10-01. The team said it planned paid services that would not paywall features, starting with E2E-encrypted off-site backup. [v2.0.0 release](https://immich.app/blog/v2.0.0-release) I found no evidence that this backup service has launched (**unverified**). The 2026 blog shows v3.0.0 on 2026-07-01 and v3.4.0 on 2026-11-10. [Immich blog](https://immich.app/blog)
- **Commercial use:** The FAQ says Immich is "working to commercialize" and welcomes "strategic collaborations". Resellers should **not** display Immich trademarks and must not imply endorsement. [Immich FAQ](https://github.com/immich-app/immich/blob/main/docs/docs/FAQ.mdx) The FAQ describes no official commercial support offering. Only third-party hosts sell managed Immich (**secondary**).
- **Norwegian search:** Non-English search requires switching to a multilingual CLIP model. [Immich FAQ](https://github.com/immich-app/immich/blob/main/docs/docs/FAQ.mdx)
- **Adoption:**
  - 118,947 GitHub stars (2026-11-12, GitHub API), up from 78k at v2.0 (2025-10-01). [v2.0.0 release](https://immich.app/blog/v2.0.0-release)
  - About 1,700 contributors, 35k+ Discord and 42k+ Reddit members (end of 2025). [2025 year in review](https://immich.app/blog/2025-year-in-review)
  - Install counts are not published.
- **Bundled hardware:** Olares lists Immich as a one-click app. [Olares shop](https://shop.olares.com/products/olares-one) I found no NAS vendor that ships Immich as its first-party photo app.

### 2.2 Nextcloud, and Nextcloud-based boxes

- **Nextcloud Box (2016):** A Raspberry Pi with a 1 TB WD drive for about EUR 70, built with Canonical and WDLabs. It was **discontinued** when Western Digital shut down WDLabs. [Nextcloud Box](https://nextcloud.com/box/), [Nextcloud press release](https://nextcloud.com/?p=13002)
- **Today:** Nextcloud Hub is AGPL software (37.5k stars). Its Assistant can run local LLMs (the llm2 app) and offers Context Chat over the user's documents. [Nextcloud Assistant](https://nextcloud.com/assistant/), [llm2 docs](https://docs.nextcloud.com/server/stable/admin_manual/ai/app_llm2.html)
- **Biggest consumer deployment:** an ISP. Deutsche Telekom's **MagentaCLOUD** runs on Nextcloud with 2.2 M active users and 7.2 PB of data (2024-03-07). [Nextcloud blog](https://nextcloud.com/blog/magentacloud-t-systems-building-a-2m-user-nextcloud/) See §5.
- **Takeaway:** Nextcloud succeeded as hosted, ISP-branded software. As a consumer box it failed.

---

## 3. Privacy-first photo clouds (no box)

### 3.1 Ente

- **What:** An E2E-encrypted photo backup service with on-device face recognition and "magic search", and an open-source AGPL-3.0 server (30k stars). [Ente pricing](https://ente.com/pricing), [Ente ML help](https://ente.com/help/photos/features/search-and-discovery/machine-learning), GitHub API.
- **Price (2026-11-12, USD):** Free 10 GB; 50 GB 2.49/mo; 200 GB 4.99/mo; 1 TB 9.99/mo; 2 TB 19.99/mo. Family sharing for up to 5 members at no extra cost. [Ente pricing](https://ente.com/pricing)
- **Traction (published openly, figures dated 2026-01):** revenue USD 780,996 (the page does not say whether this is ARR or MRR), 12,018 paying customers, 290,703 registered accounts after inactive accounts were pruned. [ente.com/open](https://ente.com/open) TechCrunch reported 12 employees in 2025. [TechCrunch](https://techcrunch.com/2025/04/01/ente-wants-to-take-on-google-photos-with-its-privacy-first-photo-storage-service)
- **Setup:** Install the app and sign up. This is the lowest-friction privacy option.

### 3.2 Proton Drive (photos) and Lumo

- **Price (2026-11-12, USD):** Drive Plus 200 GB from 2.49/mo; Unlimited 500 GB 6.49/mo; Duo 2 TB 14.99/mo; **Family 3 TB, up to 6 users, 23.99/mo**. [Proton Drive pricing](https://proton.me/drive/pricing)
- **Photos:** E2E-encrypted albums and shared albums, launched 2025-05-14. The announcement mentions no AI, face or object search. [Proton blog](https://proton.me/blog/proton-drive-photo-albums)
- **Assistant:** Lumo is a "no-logs" AI assistant on open models hosted in Europe, launched 2025-07-23. [Proton blog](https://proton.me/blog/lumo-ai) Lumo Plus is about EUR 12.99/mo. [Pasquale Pillitteri](https://pasqualepillitteri.it/en/news/27410/what-is-lumo-ai-proton-how-it-works-price) **(secondary)**
- **Traction:** 100 M+ Proton accounts across all products (2023-04-18). [Proton blog](https://proton.me/blog/proton-100-million-accounts)
- **Relevance:** Proton is the European privacy brand families already know. It is the most likely brand to own "private AI + private photos" without any hardware.

### 3.3 Mylio Photos

- **What:** Peer-to-peer sync across the family's own devices, with no required cloud, offline face recognition and AI search. [Mylio](https://mylio.com/)
- **Price (CEO note, 2025-03-04):** Individual USD 20/mo or USD 240/yr; Family of 5 USD 50/mo or USD 480/yr; Family of 10 USD 75/mo or USD 750/yr, including Zoom-based setup help. [Mylio blog](https://inspire.mylio.com/new-mylio-plans-a-note-from-the-mylio-ceo)
- **Signal:** In 2025 Mylio raised prices and **added human setup help**. The local-first model needs hand-holding for non-technical users. Its 2014 launch was described as "tepid". [PetaPixel](https://petapixel.com/2021/06/29/is-mylio-any-different-now-than-it-was-at-its-tepid-2014-launch) User numbers are not published.

### 3.4 Jottacloud and Telenor Min Sky (Norwegian context)

- Telenor's Min Sky and Jottacloud merged into a 50/50 joint venture (Telenor Amp and Hawk Infinity), announced 2025-03-19. It has 2 M+ active customers, an expected NOK ~200 M revenue in 2025, an enterprise value of about NOK 1.5 bn, and is positioned as "an all-Norwegian alternative to global players" with data in Norwegian data centres. [Telenor press release](https://www.telenor.com/media/newsroom/press-releases/jottacloud-and-telenor-software-lab-merge/)
- **Relevance:** "Norwegian cloud, from your telco" is already taken. Heima's difference has to be **at home + AI**, not "in Norway".

---

## 4. The big platforms: the positioning threat

### 4.1 Apple: iCloud+, Apple Intelligence, Private Cloud Compute

- **Price in Norway (support page published 2026-09-16):** iCloud+ 50 GB NOK 12, 200 GB NOK 39, **2 TB NOK 129**, 6 TB NOK 399, 12 TB NOK 799 per month. [Apple Support](https://support.apple.com/en-us/108047) This is Heima's price anchor (the brief says "about the same as iCloud 2 TB").
- **Apple Intelligence** supports **Norwegian**. [Apple Support, 2026-11-05](https://support.apple.com/en-us/121115) Norwegian was added with iOS 26.1. [9to5Mac](https://9to5mac.com/2025/11/11/ios-26-1-brings-apple-intelligence-to-these-eight-new-languages/)
- **Siri AI** (personal context, including finding and acting on photos) launched on 2026-10-26 in five languages. **Norwegian is promised "by the end of the year".** It is "currently unavailable in the EU" on iOS. [Apple Newsroom](https://www.apple.com/newsroom/2026/10/siri-ai-is-available-in-more-languages-starting-today/) Whether Norway, as an EEA member, is treated like the EU is **unverified**.
- **Private Cloud Compute:** Requests are processed statelessly with no retention. Apple publishes every production build for researchers to verify, and the system is designed so Apple staff cannot reach user data. [Apple Security, 2024-06-10](https://security.apple.com/blog/private-cloud-compute/)
- **Home hardware:** Reports say Apple launched a "HomeView" smart-home display at a 2026-10-13 event, at about USD 299. [MacRumors](https://macrumors.com/2026/10/13/apple-announces-homeview-smart-home-hub) **(unverified, secondary)** It is a home hub, not a storage box.
- **Threat:** For iPhone households, Apple already offers on-device AI with a credible, auditable privacy story. Heima's "not on a US server" argument has to work against Apple's "not even Apple can see it" message.

### 4.2 Google Photos: Ask Photos

- Ask Photos is natural-language Q&A over your library, powered by Gemini. It expanded to "more than 100 new countries and regions, and 17 new languages" on 2025-11-11. [Google blog](https://blog.google/products-and-platforms/products/photos/nano-banana-ai-templates-ask-photos/) Europe was excluded at that time. [Tech Advisor](https://www.techadvisor.com/article/2969419/google-photos-free-upgrade-skips-europe.html) Google then said Europe would follow "starting this week". [heise, 2026-03-11](https://www.heise.de/en/news/Google-AI-powered-Ask-Photos-can-soon-be-easily-switched-off-11206504.html) Availability in **Norway or in Norwegian: unverified.** Google's help page says only "isn't available in all regions". [Google Help](https://support.google.com/photos/answer/15318661)
- **Privacy terms:** Ask Photos queries "may be reviewed by humans". Google "doesn't train any generative AI models outside of Google Photos with your personal data in Google Photos". [Gemini in Photos privacy hub](https://support.google.com/photos/answer/15344015)
- **Threat:** This is exactly the "bestemor på hytta, sommeren 2019" use case, and it is free. Heima can only win on **where the data lives** and **who can look at it**.

---

## 5. Telco and ISP-led home cloud products

| Operator | Product | What happened |
|---|---|---|
| **Orange (FR)** | *Stockage Livebox*: a 1 TB drive inside the router (EUR 10 activation; EUR 5/mo for Play customers) | Sales stopped in 2018-10 and the service closed on **2019-07-07**. The drive only worked with the Livebox. Reason given: low usage, and OTT clouds and external drives exist. [Next INpact](https://next.ink/7039/107345-orange-arrete-son-service-stockage-livebox-hdd-1-to-inutilisable-des-7-juillet/) Le Cloud d'Orange closed for consumers on the same date. [MacG](https://www.macg.co/ailleurs/2019/03/vous-avez-jusquau-7-juillet-pour-vider-le-cloud-dorange-105411) |
| **BT (UK)** | *BT Cloud* storage bundled with broadband (white-label; Synchronoss ran BT's personal-cloud platform per [Synchronoss coverage](https://rcrwireless.com/20251208/telco-cloud/lumine-telco-cloud-synchronoss)) | Read-only from 2024-09-09 and **closed 2024-10-31**. All files were deleted. [BT Help](https://www.bt.com/help/broadband/bt-cloud/bt-cloud-is-closing), [ISPreview](https://www.ispreview.co.uk/index.php/2024/07/broadband-isp-bt-confirms-closure-of-uk-cloud-storage-service.html) |
| **Deutsche Telekom (DE)** | *MagentaCLOUD* on Nextcloud, hosted on Open Telekom Cloud | **Alive:** 2.2 M active users and 7.2 PB (2024-03). [Nextcloud](https://nextcloud.com/blog/magentacloud-t-systems-building-a-2m-user-nextcloud/) Added Nextcloud Office in 2023. [Telekom](https://www.telekom.com/en/newsroom/latest-updates/media-information/2023/3/new-functionality-for-the-magentacloud) |
| **Telenor (NO)** | *Min Sky* | Merged into a 50/50 joint venture with Jottacloud (announced 2025-03-19); 2 M+ active customers combined. [Telenor](https://www.telenor.com/media/newsroom/press-releases/jottacloud-and-telenor-software-lab-merge/) |
| **Swisscom (CH)** | *myCloud* ("stored in Switzerland") | Went paid in 2021-10; first 10 GB free. [Netzwoche](https://www.netzwoche.ch/news/2021-10-07/swisscoms-mycloud-wird-kostenpflichtig), [Swisscom](https://www.swisscom.ch/en/residential/internet-subscription/mycloud.html) |
| **Verizon (US)** | *Verizon Cloud* on Synchronoss white-label | Contract extended to at least 2030 (2023). [SDxCentral](https://www.sdxcentral.com/articles/interview/synchronoss-scores-verizon-cloud-extension-2/2023/07/) Synchronoss is being acquired by Lumine for USD 116 M (2025-12). [TelecomTV](https://www.telecomtv.com/content/digital-platforms-services/lumine-buys-the-rest-of-synchronoss-for-116m-54461/amp/) |
| **Free (FR)** | NAS built into the Freebox Server (Révolution, Delta, Ultra) | Delta had 4 HDD bays and was withdrawn from sale at the end of January 2024. Ultra has one NVMe slot, no disk included. [Univers Freebox](https://www.universfreebox.com/?p=591679), [Tom's Guide FR](https://www.tomsguide.fr/freebox-ultra-vs-freebox-delta-quelles-sont-les-differences/) |

- **What I did not find:** any ISP that has launched a **separate local-AI home box** for consumers (2024–2026). For ISPs this is open space, and also untested.

---

## 6. The graveyard: consumer home servers and personal-cloud devices that failed

| Product | Years | What it was | Why it failed or ended (source) |
|---|---|---|---|
| **Windows Home Server** and **HP MediaSmart** | 2007–2013 | A home server OS shipped by OEMs (HP the largest) | Microsoft removed Drive Extender, the most-loved feature, in 2010 after problems under server loads. [The Register](https://www.theregister.com/2010/11/25/vail_drive_extender_ditched/) HP dropped MediaSmart days later. [ITPro Today](https://itprotoday.com/windows-server/hp-drops-windows-home-server-product-line) Microsoft said WHS saw its "greatest success" with SOHO and enthusiasts and folded it into Server 2012 Essentials. [SlashGear](https://www.slashgear.com/microsoft-confirms-no-new-windows-home-server-06237425) **Lesson:** it never reached ordinary families, and the platform owner lost interest. |
| **Pogoplug** (Cloud Engines) | 2009–2016 | Plug-in device that made USB drives reachable remotely, plus a cloud tier | The cloud tier shut down on 2016-09-28 and the data was destroyed. The company has ceased operations. [VentureBeat](https://venturebeat.com/ai/pogoplug-unlimited-cloud-storage-service-is-shutting-down-on-september-28) |
| **Lyve** (Lyve Minds, later Seagate) | ~2014–2016 | Home photo hub with a drive and screen | Could not compete with Apple and Google, hardware needed scale, cloud was easier, and it drifted toward a cloud service. [Allen Chen, 2016-10-10](https://allenc.com/the-demise-of-lyve) |
| **Lima** | 2013–2019 | USD 59–79 "personal cloud" dongle, USD 1.2 M Kickstarter, 80k+ users | Cash ran out financing production in 2017. Little or no margin on hardware. Key features depended on company servers. When the servers went down, remote access and new-device pairing stopped. [ex-employee post-mortem, 2019-02-15](https://blog.separateconcerns.com/2019-02-15-goodbye-lima.html), [Crowdfund Insider](https://www.crowdfundinsider.com/?p=22277) |
| **Helm** (Privacy Labs) | 2018–2022 | USD 499 home email/calendar/file server, then USD 99/yr, with an encrypted cloud backup whose keys were held locally (very close to the Heima model) | BOM came in above USD 300 against a USD 100 target, forcing USD 499 instead of USD 199. Contract manufacturers failed. The Series A failed on "market size and unit economics". COVID broke the v2 supply chain. Service ended **2022-12-30**: backups purged, domains removed. [CEO post-mortem, 2023-03-29](https://giri.co/looking-back-on-helm/), [thehelm.com](https://thehelm.com/), [Engadget](https://www.engadget.com/2018/10/17/helm-personal-server/) |
| **Nextcloud Box** | 2016–~2017 | EUR 70 Raspberry Pi with 1 TB | The hardware partner (WDLabs) was shut down. [Nextcloud](https://nextcloud.com/box/) |
| **Orange Stockage Livebox** | –2019 | 1 TB drive in the ISP router | Low usage. [Next INpact](https://next.ink/7039/107345-orange-arrete-son-service-stockage-livebox-hdd-1-to-inutilisable-des-7-juillet/) |
| **SanDisk ibi** (WD) | 2018–2024 | Consumer "smart photo manager" box for families | Cloud, app and remote access reportedly ended on 2024-08-31; the device works only on the LAN. [ibiRecovery timeline](https://alandtse.github.io/ibiRecovery/ibi_discontinuation.html) **(unverified, third-party)**. [WD community](https://community.wd.com/t/mobile-and-cloud-access-for-ibi-which-uses-the-same-firmware-as-the-my-cloud-home-is-ending-will-the-same-fate-await-the-mc-home/291441) |
| **WD My Book Live** | –2021 | Consumer NAS with remote access, out of support | A firmware bug let attackers factory-reset devices remotely. Mass wipes happened in June 2021 (CVE-2021-35941). WD offered free data recovery. [Intego](https://www.intego.com/mac-security-blog/what-to-do-if-you-have-western-digital-my-book-live-or-my-book-live-duo-devices/), [TechRadar](https://techradar.com/news/a-decade-old-vulnerability-led-to-wd-my-book-live-devices-getting-wiped) WD My Cloud Home support is planned to end in **December 2027**. [WD lifecycle policy](https://www.westerndigital.com/support/software/product-life-cycle-policy) |
| **Monument** | 2017–? | AI photo box | Pivoted to cloud (see §1.7). |
| **Humane AI Pin** | 2024–2025 | Cloud-dependent AI hardware (not a home device) | HP bought the assets for USD 116 M. Devices stopped working on 2025-02-28 and customer data was deleted. [Tom's Hardware](https://www.tomshardware.com/peripherals/hp-buys-humane-ai-start-up-for-us-usd116-million-halts-sales-discontinues-ai-pin-support-offers-refunds) **Lesson:** AI hardware that depends on the vendor's cloud dies with the vendor. |

---

## 7. Comparison table

Prices as observed; see the sections above for sources and dates. "Assistant" means an LLM you can chat with about your own data.

| Product | Type | Hardware price (date) | Recurring | Setup effort | Local AI photo search | Assistant | Off-site encrypted copy | Target | Traction signal |
|---|---|---|---|---|---|---|---|---|---|
| **Heima (plan)** | Box + app + Subscription, sold via ISP | instalments | ~NOK 149–199/mo incl. box (brief) | Plug in + QR (goal) | Yes, Norwegian | Yes, Norwegian | Yes, in Norway, customer-held key | Non-technical NO families | — |
| Synology BeeStation / Plus | Box + app | USD 329–520 pre-VAT (2026-06) | BeeProtect ~USD 119/yr for Plus (2025-07) | Ethernet + QR | Faces/objects, no NL search | No | Yes (Synology cloud, client-side AES) | Everyday users, families | Growing line-up; no unit data |
| Ugreen DXP2800 | NAS | USD 389.99 (2026-11-12), diskless | None | Moderate (drives, app) | Faces/scenes | No | No first-party | Prosumers | NASync Kickstarter ~£5 M/12k+ backers (2024) |
| Ugreen iDX6011 | AI NAS | USD 1,199–1,559 early bird (2026-01) | None | Moderate | NL + OCR | Yes (Uliya, local) | No first-party | Creators/SMB | Kickstarter 2026; good reviews |
| Ugreen HomeAgent | Local AI home hub | USD 799–9,999 early bird (2026-11-12) | "No subscription" | Moderate | Frames/highlights | Voice (Uliya) | No | Smart-home households | Pre-launch |
| Anker MindBase | Local AI home hub | Not announced (2026-09) | "No subscription" | ? | ? | Agent | ? | eufy households | Pre-launch |
| Umbrel Home / Pro | Home server OS + box | From USD 399 (2025-06) / USD 699 (2026-11-12) | None | Plug in + browser | Via apps (e.g. Immich) | Via apps (Ollama, agents) | No first-party | Self-hosters | USD 3 M seed; 12.6k stars |
| Zettlab D-series | AI NAS | USD 399–1,099 early bird (2025) | None | Moderate | NL search | Yes, local | No | Prosumers | HK$10.6 M, 1,666 backers |
| Olares One | AI workstation/server | USD 4,999 (2026-11-12) | None | Technical | Via Immich | Yes, local | No | Devs/creators | >USD 1 M first week |
| Monument 2 | AI photo box | ? | ? | Easy | Faces | No | Moved to cloud | Families | Cloud ~25k users; site dormant |
| Immich | OSS server + app | DIY | Optional key USD 99.99 server (2024) | Technical (Docker) | Yes (CLIP; multilingual model) | No | No (planned) | Self-hosters | 118.9k stars |
| Nextcloud | OSS suite | DIY / via ISP | — | Technical | Limited | Yes (local LLM option) | — | Orgs, ISPs | MagentaCLOUD 2.2 M users |
| Ente | E2E cloud | — | USD 9.99/mo 1 TB; 19.99 2 TB (2026-11-12) | App signup | Yes, on-device | No | Is the cloud (E2E) | Privacy-minded consumers | 12k paying / 291k accounts (2026-01) |
| Proton Drive + Lumo | E2E cloud + private AI | — | Family 3 TB USD 23.99/mo (2026-11-12) | App signup | No (albums only) | Lumo (cloud, no-logs) | Is the cloud (E2E) | Privacy-minded consumers | 100 M+ accounts (2023) |
| Mylio Photos | P2P local-first software | Your own devices | USD 240/yr individual; 480/yr family (2025-03) | Needs setup help | Yes, offline | No | Optional | Families/archivists | Price up + human onboarding |
| iCloud+ / Apple Intelligence | Platform cloud + on-device AI | — | **NOK 129/mo 2 TB** (2026-09-16) | Zero | Yes (Norwegian supported) | Siri AI (Norwegian "by end of 2026") | Apple cloud (+PCC) | Everyone with an iPhone | Default |
| Google Photos Ask Photos | Platform cloud + Gemini | — | Google One | Zero | Yes (NL Q&A) | Ask Photos | Google cloud | Everyone with Android | 100+ countries; Norway unverified |
| Telekom MagentaCLOUD | ISP cloud (Nextcloud) | — | Tariffs | Zero | — | — | Telekom DC | Telekom customers | 2.2 M active |
| Jottacloud + Telenor Min Sky | Norwegian cloud (telco JV) | — | — | Zero | — | — | Norwegian DCs | Norwegian consumers | 2 M+ active |

---

## 8. Lessons for Heima

### What worked

1. **Appliance-grade setup sells.** BeeStation's "Ethernet + QR code + guided steps" and Umbrel's "under a minute" setup are the bar. [Synology](https://bee.synology.com/en-us/BeeStation/Standard), [Umbrel](https://umbrel.com/umbrel-home) The brief's "plug it in, scan a QR code, done" is the right goal, but it is already standard, so it does not set Heima apart.
2. **A flat-fee, client-side-encrypted off-site copy is the accepted answer to "what if there's a fire".** BeeProtect does exactly this. [BeeProtect](https://bee.synology.com/en-us/BeeStation/BeeProtect) Monument's customers asked this question so often that the company pivoted to cloud. [Backblaze](https://www.backblaze.com/blog/shooting-for-the-clouds-how-one-photo-storage-service-moved-beyond-physical-devices/) This supports the brief's view that the 3-2-1 backup is mandatory.
3. **The ISP channel works for cloud storage at scale when it is white-labelled or partner-built.** Examples: MagentaCLOUD on Nextcloud (2.2 M), Verizon on Synchronoss, and Telenor partnering with Jotta rather than building alone. [Nextcloud](https://nextcloud.com/blog/magentacloud-t-systems-building-a-2m-user-nextcloud/), [SDxCentral](https://www.sdxcentral.com/articles/interview/synchronoss-scores-verizon-cloud-extension-2/2023/07/), [Telenor](https://www.telenor.com/media/newsroom/press-releases/jottacloud-and-telenor-software-lab-merge/)
4. **Open source can be the engine.** Immich is mature (v3.x in 2026), active, and open to "strategic collaborations". [Immich FAQ](https://github.com/immich-app/immich/blob/main/docs/docs/FAQ.mdx) Telekom showed that an operator can run an open-source suite for millions of users.
5. **Transparency builds trust for privacy brands.** Ente publishes its revenue and customer numbers [ente.com/open](https://ente.com/open), and Apple publishes PCC builds for verification [Apple Security](https://security.apple.com/blog/private-cloud-compute/). "We can't see your photos" claims are being met with verifiable evidence, and Heima's claims will be judged against that bar.

### What failed, and why

1. **Hardware economics kill small players.** Helm's BOM came in three times its target, forcing a USD 499 price and a failed Series A. [Helm](https://giri.co/looking-back-on-helm/) Lima made little or no money per device and ran out of cash. [Lima](https://blog.separateconcerns.com/2019-02-15-goodbye-lima.html) Lyve needed scale it did not have. [Lyve](https://allenc.com/the-demise-of-lyve) Heima needs a BOM and margin model, plus an ODM partner, before launch. Buying off-the-shelf hardware from a NAS ODM is safer than custom hardware.
2. **Features that depend on the vendor's cloud become a liability when the vendor exits.** Lima (remote access stopped), Humane (devices bricked), ibi (cloud ended) and Helm (backups purged) all show this. Families lose trust when a "private" box turns out to depend on a vendor's servers. Heima needs a written **end-of-life promise** covering local-only operation, data export and key escrow with the customer.
3. **Platform defaults win the mainstream.** Lyve lost to Apple and Google; Ever cited "competition with the default services offered by Apple and Google" when it shut down. [Paravision/Ever](https://www.paravision.ai/news/why-we-are-closing-the-ever-photo-storage-service-and-what-it-means-for-paravision-face-recognition/) Heima will not win on features. It has to win on a reason the defaults cannot offer.
4. **Incumbents lose interest in side businesses.** Microsoft dropped WHS, HP dropped MediaSmart, Orange dropped Livebox storage for low usage, and BT closed BT Cloud and deleted files. [The Register](https://www.theregister.com/2010/11/25/vail_drive_extender_ditched/), [Next INpact](https://next.ink/7039/107345-orange-arrete-son-service-stockage-livebox-hdd-1-to-inutilisable-des-7-juillet/), [BT](https://www.bt.com/help/broadband/bt-cloud/bt-cloud-is-closing) An ISP-run Heima has to show Buyers that it will not be the next Orange or BT shutdown, for example with a public data-portability and continuity commitment.
5. **Out-of-support devices with remote access become security incidents** (WD My Book Live mass wipe). [Intego](https://www.intego.com/mac-security-blog/what-to-do-if-you-have-western-digital-my-book-live-or-my-book-live-duo-devices/) Automatic updates plus a defined support lifetime (WD publishes about 10 years: [WD](https://www.westerndigital.com/support/software/product-life-cycle-policy)) belong in the Subscription.
6. **Local-first needs hand-holding.** Mylio added paid human onboarding and raised prices. [Mylio](https://inspire.mylio.com/new-mylio-plans-a-note-from-the-mylio-ceo) Windows Home Server never got past enthusiasts. The brief's support-cost risk (fewer than one support request per Household per month) is the right thing to test first.
7. **"AI box" hardware is expensive and still unfinished.** Local-LLM devices start around USD 800 and reach USD 5,000 (HomeAgent, iDX, Olares). Reviewers say the operating systems "need to mature". [TechRadar](https://www.techradar.com/pro/zettlab-d6-ultra-nas-review), [Olares](https://shop.olares.com/products/olares-one), [Ugreen](https://ai.ugreen.com/pages/ugreen-homeagent-crowdfunding) A family-priced box (the brief's hypothesis is NOK 149–199/month all-in) cannot carry a big GPU. Assistant quality on an NPU-class box is the technical go/no-go, as the brief already says.

---

## 9. Which positioning is still open for a non-technical family product

1. **"A finished family appliance with an assistant, in your language, from someone you already pay."** Every local-AI box found is either (a) a NAS for enthusiasts (Ugreen iDX, Zettlab, Olares, Umbrel) or (b) a family photo box without an assistant (BeeStation). No one offers a Norwegian-language assistant over family photos and documents on a box sold and supported by the household's ISP. The brief's "NAV letter or tax-office letter" admin help has **no international equivalent** among the products reviewed. The closest are Ugreen's File Chat and Nextcloud Context Chat, both of which are tools for technical users.
2. **"No other company can look at it, and it keeps working if we disappear."** Apple's PCC and Proton's E2E encryption set a high bar for privacy claims. A box Heima does not control remotely, plus an off-site copy only the customer can decrypt, plus a public end-of-life guarantee (local mode, export, open formats), is a promise none of the platforms can make. The graveyard (Lima, Helm, ibi, BT Cloud) gives Buyers a concrete reason to want it.
3. **Retiring the household's subscription, not "a cheaper cloud".** iCloud 2 TB at NOK 129/month is the anchor. [Apple](https://support.apple.com/en-us/108047) The wedge is "own it, plus a small Subscription" (BeeStation's model) together with the assistant. Competing on price per TB alone is a losing game against Jotta, Ente and Apple.
4. **Leave these positions alone:**
   - "Norwegian cloud": already taken by Jotta and Min Sky. [Telenor](https://www.telenor.com/media/newsroom/press-releases/jottacloud-and-telenor-software-lab-merge/)
   - "Smart photo search": Apple, Google, Ente and Synology all have it.
   - "Powerful local AI server": Ugreen, Olares and Zettlab already compete there, at prices families will not pay.
5. **Open for ISPs specifically:** I found no ISP worldwide offering a separate local-AI home box (2024–2026). The ISP-led attempts at local storage (Orange's Livebox drive, the Freebox NAS) put storage inside the router and stayed niche. That supports the brief's "separate box" decision.

---

## Unverified items and gaps

- BeeProtect's current (2026) price and data-centre location. Official pages show placeholders; the 9to5Mac 2025-07 figure is used.
- Current Ugreen iDX6011 list prices. The site menu showed USD 2,349.99 / 3,599.99 / 5,999.99 on 2026-11-12, but the product page could not be opened (rate-limited).
- Current Umbrel Home price; the last confirmed figure is "from USD 399" (2025-06).
- Whether Ask Photos and Siri AI are available in Norway and in Norwegian.
- Monument's current status (its domain is dormant).
- The exact SanDisk ibi end-of-support date (third-party source only).
- Synology BeeStation unit sales and Immich install counts are not published.
- Whether Immich's announced paid E2E backup service has launched.
- Apple "HomeView" details (secondary reporting only).
- Google One NOK pricing was not checked.
