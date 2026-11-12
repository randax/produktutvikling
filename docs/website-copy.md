# Heima – website structure and copy

The site map and all nynorsk copy for the Heima demand-test website. The build ticket implements this directly.

> ⚠️ **Review before publishing.** A native nynorsk writer must check all copy. Legal must approve the comparison table, the feature claims, the Heima-lovnaden, the privacy notice and the footer. Heima is a concept, so features are always described as how Heima *skal* work.

Decided in [Website structure and nynorsk copy](https://github.com/randax/produktutvikling/issues/13). Builds on [`docs/messaging.md`](messaging.md) and the funnel decisions in [Reservation funnel and success metrics](https://github.com/randax/produktutvikling/issues/10). The rough prototype (variant **D**) is on the throwaway branch `prototype/website`.

---

## Site map

| Path | Purpose |
|---|---|
| `/` | Landing page. Ends with **the only Reservation form** on the site. |
| `/heima-boksen` | Product page for the box |
| `/heima-appen` | Product page for the app, with the full clickable phone prototype |
| `/personvern` | Full privacy notice in nynorsk |
| `/takk` | Shown after the form is sent |
| `/stadfesta` | Shown after the Buyer clicks the confirmation link in the email |

All "Reserver" buttons link to `/#reserver`. The product pages never have their own form, which keeps measurement simple.

## On every page

**Concept banner** (top, always visible)
> **Heima er eit konsept under utvikling.** Produktet finst ikkje enno. Utsjånad, storleik, funksjonar og pris kan endre seg, og det er ikkje sikkert Heima kjem. Ein reservasjon er heilt uforpliktande.

**Header:** Heima (logo) · Slik verkar det · Personvern · Pris · Spørsmål · **[Reserver]**

**Image caption** on every concept image
> Konseptbilete (3D-illustrasjon)

**Footer**
> **Det som er ditt, blir heima.**
> Heima er eit konsept frå **[Selskapsnamn AS]**, org.nr. [000 000 000], [adresse]. Kontakt: [e-post]. Denne sida er marknadsføring.
> Vi brukar ingen informasjonskapslar (cookies). [Personvernerklæring](/personvern)

*The bracketed company details are legally required (ehandelsloven §§ 8–9) and must be the ISP's real legal entity.*

---

## `/` Landing page

Sections in this order.

### 1. Hero (with the phone)

> # Ingen andre kan sjå bileta dine. Ikkje ein gong vi.
> Heima-boksen tek vare på bileta og dokumenta til familien, heime hos deg. Med ein privat assistent som hjelper deg å finne fram og forstå breva frå NAV og banken. Du treng ikkje kunne noko om teknologi.
>
> **[Reserver – heilt uforpliktande]**
>
> Prøv appen sjølv: **Kom i gang · Finn bilete · Forstå eit brev · Kven kan sjå dette?**

On the right is the phone, running the clickable Heima-appen prototype. The tabs jump to its flows.

### 2. The family album

> *Eyebrow:* Familiealbumet, berre smartare
> **Før stod familiealbumet i bokhylla. Ingen andre hadde det. Heima-boksen er det same, berre smartare.**

### 3. Three reasons

> ## Tre grunnar til å velje Heima
>
> **Berre familien har nøkkelen**
> Bileta og dokumenta ligg heime hos deg. Tryggleikskopien i Noreg er låst med nøkkelen på mobilen din, og ingen andre kan opne han.
>
> **Ein assistent som kan lese breva dine**
> Ta bilete av brevet frå NAV eller Skatteetaten, så forklarer Heima kva det betyr og når fristen er. Ingenting forlèt huset.
>
> **Alle minna, lette å finne**
> Bileta frå mobilane i familien vert tekne vare på automatisk. Skriv «bestemor på hytta sommaren 2019», så finn Heima dei.

### 4. How it works (`#slik`)

> *Eyebrow:* Slik skal Heima fungere
> ## Set han i bokhylla. Ferdig.
> 1. **Set Heima-boksen i straumen** og kople han til ruteren. Han verkar med alle internettleverandørar.
> 2. **Skann koden med mobilen** og lag familienøkkelen med Face ID eller fingeravtrykk.
> 3. **Inviter familien.** Kvar vaksen får sin eigen nøkkel, akkurat som husnøkkelen.

With a concept image of the box on a bookshelf.

### 5. The assistant

> *Eyebrow:* Assistenten
> ## Han kan lese breva dine, fordi han aldri sender noko ut.
> Du ville aldri late Google sin KI lese breva frå NAV, banken og legen. Heima sin assistent kan, fordi han bur heime hos deg.

**Example conversation:**

> **Du:** 📄 Brev frå NAV · *Kva betyr dette?*
> **Heima:** Dette er eit vedtak om foreldrepengar. Du har fått 49 veker. Vil du endre perioden, må du gi beskjed innan **3. desember**. Skal eg minne deg på det ei veke før? *Sjå kva svaret byggjer på →*
> **Du:** Ja takk
>
> *Døme. Assistenten kan ta feil, så originalbrevet er alltid fasit.*

### 6. Heima-lovnaden

> *Eyebrow:* Heima-lovnaden
> **«Boksen verkar alltid, og alt er alltid ditt.»**
> Om du sluttar å betale, eller om vi legg ned, held Heima-boksen fram med å verke heime hos deg. Du kan alltid ta med deg alle bileta og dokumenta.
>
> **Dette skal vi gjere før lansering:**
> - Publisere programvaren i boksen som open kjeldekode, så kven som helst kan sjekke han.
> - La eit uavhengig selskap teste tryggleiken, og publisere rapporten.
> - Skrive Heima-lovnaden inn i avtalen din.

### 7. Comparison table (`#samanlikning`)

> ## Kven kan sjå bileta dine?

| | iCloud | Google Foto | Jottacloud | **Heima** |
|---|---|---|---|---|
| **Kven kan sjå bileta?** | Apple, om du ikkje har slått på «Avansert datavern» | Google | Jottacloud | **Berre familien** |
| **Kvar er dei lagra?** | Hos Apple. Ikkje lova lagra i Noreg | Hos Google. Kan vere utanfor Noreg | Hos Jottacloud, i Noreg | **Heime hos deg, med ein låst kopi i Noreg** |
| **Kva skjer om du sluttar å betale?** | Du går ned til 5 GB gratis lagring | Du går ned til 15 GB gratis lagring | ⚑ *must be checked* | **Boksen verkar vidare, og alt er ditt** |
| **Assistent for breva dine** | Nei | Nei | Nei | **Ja, heime hos deg** |

> *Prisar og vilkår per [dato]. Kjelder: [one source link per claim].*

- **No price row.** Comparative advertising must compare like with like, and the prices are in the Packages section.
- Every cell needs a dated source from the research branches (`research/competitors-norway`, `research/competitors-international`). The Jottacloud "stop paying" cell is still unverified.
- **Legal must approve the table before publishing.**

### 8. Packages (`#pris`)

> ## Vel storleik

| | **Heima 2 TB** · *Tilrådd* | **Heima 4 TB** |
|---|---|---|
| For | Dei fleste familiar. | Familiar med mykje video eller mange år med bilete. |
| Heima-boksen | **7 990 kr** | **9 490 kr** |
| Abonnement | **+ 89 kr/mnd** | **+ 129 kr/mnd** |
| Med i abonnementet | Tryggleikskopi av alt i Noreg, oppdateringar og assistenten. | Tryggleikskopi av alt i Noreg, oppdateringar og assistenten. |
| Button | [Reserver Heima 2 TB] | [Reserver Heima 4 TB] |

> *Estimerte prisar inkl. mva. Prisen er ikkje endeleg. Boksen kan delbetalast.*

Each button scrolls to the form with that Package pre-selected. There is no monthly instalment figure (credit-marketing rules).

### 9. FAQ (`#sporsmal`)

> ## Spørsmål du kanskje har

The six questions and answers from [`docs/messaging.md`](messaging.md#objections-and-answers), in that order.

### 10. Reservation form (`#reserver`)

> *Eyebrow:* Reservasjon
> ## Reserver Heima, heilt uforpliktande
> Dette er ikkje ei bestilling. Det kostar ingenting og bind deg ikkje til noko. Vi gir deg beskjed når Heima kjem, eller om vi vel å ikkje lage han.

**Fields, in order:**
1. **Kva storleik?** Heima 2 TB (pre-selected) / Heima 4 TB
2. **E-post**
3. **Postnummer**, with the hint *«Så vi veit kvar i landet interessa er.»*
4. **Kor mange er de i hushaldet?** 1 / 2 / 3–4 / 5 eller fleire
5. **Kvar ligg bileta dykkar i dag?** *(Vel så mange du vil.)* iCloud / Google Foto / Jottacloud / Telenor eller Telia Sky / Berre på mobilen / Veit ikkje
6. **Kva er viktigast for deg?** Berre familien har nøkkelen / Assistenten som les breva / Alle minna, lette å finne
7. **Ville du kjøpt Heima til denne prisen?** Ja / Kanskje / Nei, det er for dyrt
8. **Vil du kunne delbetale boksen?** Ja / Nei / Veit ikkje

**Consent** (all unticked):
- ☐ Eg er 18 år eller eldre. *(required)*
- ☐ Ja, gi meg beskjed på e-post når Heima kjem. *(required)*
- ☐ Eg vil gjerne bli intervjua eller svare på ei kort undersøking. *(valfritt)*

**Button:** **[Reserver – heilt uforpliktande]**

**Under the button:**
> Vi lagrar berre e-posten, postnummeret og svara dine, i EU, og slettar alt automatisk seinast seks månader etter at vi har bestemt oss. Du kan melde deg av når som helst. [Personvernerklæring](/personvern)

---

## `/heima-boksen`

1. **Hero**
   > # Ser ut som noko du vil ha i bokhylla. Ikkje som ein datamaskin.

   With a concept image of the chosen design.
2. **Kva er inni?**
   > Ein liten, stillegåande datamaskin med plass til bileta og dokumenta til heile familien, og ein assistent som berre arbeider for dykk.
3. **Tal du forstår**
   > - **Plass til om lag 400 000 bilete** (Heima 2 TB) eller **800 000** (Heima 4 TB).
   > - **Skal bruke om lag like mykje straum som ei lyspære.**
   > - **Skal vere nesten lydlaus.**
4. **Lyset**
   > Lyset gløder svakt når assistenten arbeider.

   *Add materials and appearance from [Heima-boksen design and concept images](https://github.com/randax/produktutvikling/issues/11).*
5. **Packages** (as on the landing page), then **[Reserver – heilt uforpliktande]** → `/#reserver`.

## `/heima-appen`

1. **Hero**
   > # Heile familien, på kvar sin mobil.

   With the full clickable prototype showing all six flows (from [Clickable phone prototype of Heima-appen](https://github.com/randax/produktutvikling/issues/12)).
2. **Familiealbumet og ditt eige**
   > Det du legg inn, er ditt eige. Familiealbumet deler de med kvarandre. Brev og dokument deler du med den du vel, eitt om gongen.
3. **Assistenten**
   > Han finn bilete, forklarer brev, minner deg på fristar og svarar på spørsmål om dokumenta dykkar. Han kjenner berre dykkar ting.
4. **Nøkkelen på mobilen**
   > Du låser opp med Face ID eller fingeravtrykk. Kvar vaksen i familien har sin eigen nøkkel. Vil du ha ekstra tryggleik, får du eit nøkkelkort på papir.
5. **For iPhone og Android**, then **[Reserver – heilt uforpliktande]** → `/#reserver`.

---

## After the form

### `/takk`
> # Takk! Sjekk e-posten din for å stadfeste.
> Reservasjonen gjeld først når du har trykt på lenkja i e-posten. Finn du ho ikkje? Sjå i søppelpost-mappa.

### `/stadfesta`
> # Reservasjonen er stadfesta.
> Vi gir deg beskjed når Heima kjem, eller om vi vel å ikkje lage han. Kjenner du nokon som òg vil at bileta skal bli heima? Del gjerne sida.

## Emails

Every email ends with **«Det som er ditt, blir heima.»** and the trader's company details.

### 1. Confirmation (double opt-in)
**Subject:** Stadfest reservasjonen din av Heima
> Hei!
> Takk for at du vil reservere Heima. Trykk på knappen for å stadfeste at det er deg.
> **[Stadfest reservasjonen]**
> Reservasjonen er heilt uforpliktande. Har du ikkje bede om dette, kan du sjå bort frå e-posten, så slettar vi adressa di.

### 2. On the list
**Subject:** Du står på lista
> Hei!
> Reservasjonen din av Heima {pakke} er stadfesta. Vi gir deg beskjed når Heima kjem, eller om vi vel å ikkje lage han.
> Uansett kva som skjer, gjeld Heima-lovnaden: «Boksen verkar alltid, og alt er alltid ditt.»
> Vil du ikkje høyre meir frå oss? **[Meld meg av og slett opplysningane mine]**

### 3. No-go
**Subject:** Vi lagar ikkje Heima likevel
> Hei!
> Takk for at du reserverte Heima. Vi har bestemt oss for ikkje å lage han no. Når denne e-posten er send, slettar vi e-postadressa di og svara dine.

*The launch email is out of scope for this map; it depends on the launch.*

## `/personvern`

The full privacy notice in nynorsk. Start from the draft wording in `research/legal-demand-test.md` (branch `research/legal-demand-test`). It must cover:
- who the controller is;
- purpose and legal basis (consent);
- what is stored, where (EU) and for how long;
- processors;
- the Buyer's rights and how to delete their data;
- that the site uses no cookies.

Legal must approve it.
