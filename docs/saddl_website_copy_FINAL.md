# Saddl — Website Copy (Final Draft)

**Version:** 2.0 — reconciled | **Date:** July 2026
**Register:** PRODUCT.md (declarative, operator voice) | **Entity:** Saddl — Meydan Grandstand, Nad Al Sheba, Dubai · info@saddl.io

> This draft reconciles `saddl_website_copy_v1`, `PRODUCT.md`, `DESIGN.md`, and the SEO research into one source of truth. Six positioning conflicts were resolved before writing (see decision log at the end). Phase 1 = 7 pages. Geo pages (`/amazon-uae`, `/noon-uae`, `/mena`) and the five intelligence sub-pages are Phase 2/3.
>
> ⚠️ = placeholder requiring real client data before the page goes live. Never ship these as fact.

---

# NAVIGATION

Fixed floating dark nav. Four links + one CTA:

`Saddl OS` · `Services` · `About` · `Blog` + **[ Request an account audit ]**

No dropdowns. No secondary row.

---
---

# 1. HOMEPAGE

**SEO / GEO scaffolding**
- `<title>` — Amazon & Noon Managed Service | Embedded Ecommerce Operator, Dubai — Saddl
- `<meta name="description">` — Saddl runs your ecommerce end-to-end across Amazon, Noon, and D2C — advertising, inventory, pricing, and P&L as one system. A Dubai-based embedded operator for $1M–$20M brands, not an agency that sends reports.
- `og:title` / `og:description` — mirror the above · `og:image` — hero OS panel export
- `canonical` — https://saddl.io/
- Schema: `ProfessionalService` (see SCHEMA section)

---

## Section 1 — Hero

**Badge chip:** `embedded ecommerce operations`

**Headline (H1):**
Your ecommerce runs on hundreds of decisions a week.
We own every one of them.

**Subheadline:**
Advertising, inventory, pricing, listings, and contribution margin — run as one system everywhere you sell, from Amazon and Walmart to Noon and your own D2C. Not software you operate. A team that operates it for you.

**CTAs:** Primary: `Request an account audit` · Ghost: `Explore Saddl OS`

**Platforms row:** `Amazon (Global)` · `Noon UAE/KSA` · `Walmart` · `Meta & Google D2C`

**Right column — Saddl OS Intelligence Panel:** floating dark glass card, one live-looking decision-log entry (`decision type → change made → expected delta → actual delta`), real SKU-format names and figures. Data line beneath: `127 decisions logged this week · $18,340 net impact` ⚠️ *(representative format — swap for real weekly figure at launch)*

---

## Section 2 — The definitional block (GEO citation anchor)

*Sits immediately below the hero — the first prose on the page. This is the AI-citable, keyword-bearing entity definition. Renders as the lead-in to "How We Engage."*

Saddl is a fully managed ecommerce operating firm. We embed as your operating team and run advertising, inventory, pricing, listings, and contribution margin as one connected system — across Amazon globally, Noon UAE/KSA including Noon Minutes, Walmart, and your own D2C. Our clients are brand owners doing $1M–$20M in revenue who are done handing strategy to agencies that return dashboards. Based in Dubai, we operate accounts across MENA and internationally. We're in your accounts every week. We own the outcomes.

---

## Section 3 — How We Engage  *(blurb → /services)*

**Badge chip:** `how it works`

**Headline (H2):** Three steps from audit to operator.

**Sub:** You shouldn't have to change much. We embed around what you already have.

**Step 01 — Audit**
We run a free account audit. Read-only access. We surface contribution-margin gaps, attribution blind spots, and inventory exposure within 48 hours. No commitment.
*Visual anchor: audit summary card — `ASIN B08XYZABC · CPC $1.24 · ACoS 38.4% · TACoS 18.2% · GAP: contribution margin not computed`*

**Step 02 — Brief**
You receive a full account brief: what's working, what isn't, and what we'd do differently from week one. This is a decision point, not a sales call.
*Visual anchor: brief card — "What's working / What's broken / Week-one actions," three real rows.*

**Step 03 — Embed**
We embed. Saddl OS goes live on your accounts. Weekly decisions, biweekly reports, monthly P&L reconciliation. You stop managing. We start running.
*Visual anchor: live decision-log entry — `Jun 12 · 14:47 · Advertising Intelligence · SB bid +22% · Expected +$840/wk · Status: monitoring`*

**Link:** See how we operate →  `/services`

---

## Section 4 — Saddl OS  *(blurb → /saddl-os)*

**Badge chip:** `saddl os`

**Headline (H2):** One operating system. Six intelligence layers.

**Sub:** Built for the number that matters — contribution margin per SKU, not vanity metrics.

**Platform line:** `Amazon (Global) · Noon UAE/KSA incl. Minutes · Walmart · Meta · Google`

Six module cards (one declarative sentence + one Fragment Mono data line each):

1. **Advertising Intelligence** — Campaign architecture, bid optimisation, and keyword strategy across every channel — every decision inventory-aware and margin-aware, not ROAS in isolation.
   `Jun 12 · bid +22% · +$1,250 validated impact · 14-day window`
2. **Inventory Intelligence** — Continuous SKU tracking, OOS-risk flags, and reorders sized against real velocity, not habit.
   `B08XYZABC · 47 units left · reorder signal triggered · ETA 18 days`
3. **Listing & Content** — AI-assisted content with operator judgment: correct browse-node classification, full keyword architecture, A+ built for rank and conversion.
   `Listing update deployed · rank Δ +12 · BSR 4,821 → 3,209`
4. **Pricing Intelligence** — Competitive monitoring with break-even and margin-floor analysis, so you know exactly how far you can move before price eats profit.
   `Buy Box hold 94% · competitor Δ -$1.40 · held — margin floor met`
5. **Financial Intelligence & P&L** — Settlement-level contribution margin per SKU after fees, fulfilment, storage, promotions, and ad spend. The real number, not the dashboard number.
   `B08XYZABC · rev $18,420 · true CM $4,103 (22.3%) · dashboard CM $6,210`
6. **Brand Health** — Returns root-cause, review velocity, and rating integrity as one diagnostic — managed proactively, not discovered after the damage.
   `3 suppressed listings · 2 resolved · 1 escalated · reviews +8 this week`

**Link:** Explore Saddl OS →  `/saddl-os`

---

## Section 5 — Proof

**Badge chip:** `client outcomes`

**Headline (H2):** Specifics, not promises.

**Sub:** Real figures from brands we operate. Names withheld by request — outcomes are the point.

**Quote cards (3):** ⚠️ *placeholders in correct register — replace with real client quotes before live.*
- ⚠️ "We hadn't seen our true contribution margin until Saddl ran the reconciliation. It was $2.10 lower per unit than we thought — on 4,000 units a month." — *Consumer electronics, Amazon UAE*
- ⚠️ "The inventory call saved us ~AED 38,000 in storage fees we were about to rack up — flagged before we'd even started Q4 planning." — *Home & kitchen, Amazon KSA + Noon*
- ⚠️ "Six weeks in, ACoS dropped from 31% to 19% — not because we cut spend, because every bid was validated." — *Health & beauty, Amazon Global*

**Aggregate row:** ⚠️ *placeholders — omit any figure you can't substantiate.*
`⚠️ [N] decisions logged` · `⚠️ [N] brands operated` · `⚠️ [N]% decision accuracy` · `⚠️ [N] reorder windows missed`

---

## Section 6 — FAQ  *(condensed 3–4 items → full /faq)*

**Headline (H2):** What you're probably wondering.

Show the 3 highest-friction items here (retainer-or-service, account access, what-it-costs); full six on `/faq`. Copy identical to the FAQ page below.

**Link:** All questions →  `/faq`

---

## Section 7 — Apply

**Badge chip:** `cleared desk`

**Headline (H2):** Your accounts are running right now.

**Sub:** The question is whether someone accountable is running them.

**Primary CTA:** `Request an account audit`

**Qualification note:** Right for brands with $1M–$20M revenue on Amazon. MENA presence welcome. Platforms: Amazon, Noon, Walmart, Meta, Google.

---
---

# 2. SADDL OS  *(Solutions — what the system does)*

**SEO / GEO scaffolding**
- `<title>` — Saddl OS: Ecommerce Intelligence for Amazon & Noon — Advertising, Inventory, Pricing, P&L
- `<meta description>` — Saddl OS is the six-layer intelligence system behind every account we run: advertising, inventory, listings, pricing, financial/P&L, and brand health — connected, margin-aware, operated for you.
- `canonical` — https://saddl.io/saddl-os · Schema: `Service` per layer
- Target keywords: amazon advertising intelligence, amazon inventory management service, amazon listing optimization service, amazon pricing intelligence, ecommerce financial intelligence, amazon p&l management, amazon brand health

## Hero

**Headline (H1):** The system that runs underneath the service.

**Sub:** Saddl OS connects the six functions every ecommerce brand runs in parallel — so no decision is made in isolation. Every ad bid knows your inventory position. Every price knows your margin floor. Every reorder knows your velocity. One system, not six tabs.

**Platform line:** Amazon (Global) · Noon UAE/KSA incl. Minutes · Walmart · Meta · Google

---

## The six layers

### 1. Advertising Intelligence
Saddl runs your advertising as one AI-powered system, not a series of disconnected campaigns. We handle campaign architecture, bid optimisation, and keyword strategy across every channel you sell on — with every decision informed by real inventory position and real margin, not ROAS in isolation. Spend scales when it should and pulls back before it becomes waste.
`SP · SB · SD managed and validated · every bid tracked to a revenue delta · 14-day attribution window`

### 2. Inventory Intelligence
We track every SKU continuously, using AI-driven signals to flag out-of-stock risk before it happens and to size reorders against actual velocity rather than habit. Procurement decisions are made with full visibility into lead times, MOQs, and coverage — so capital goes into the products driving revenue, not sitting in the wrong place.
`reorder forecasting · FBA fee optimisation · stockout prevention · contribution margin per unit`

### 3. Listing & Content
Your listings are built and maintained with AI-assisted content generation paired with operator judgment: correct browse-node classification, full keyword architecture, and A+ content built for conversion and search rank — not just technical compliance. This is the function most brands neglect until it's already costing them organic visibility.
`AI-generated copy · A+, brand store, video briefs · continuously tested · rank Δ tracked`

### 4. Pricing Intelligence
We monitor your competitive landscape and benchmark your market position continuously, with break-even and margin-floor analysis built in. You always know exactly how much room you have to move on price before a decision starts eating into profitability — instead of discounting reactively and finding out the damage afterward.
`competitive monitoring · Buy Box optimisation · promo ROI modelling · price vs margin floor`

### 5. Financial Intelligence & P&L
Using an AI-powered reconciliation pipeline, we produce settlement-level contribution margin for every SKU — after platform fees, fulfilment costs, storage, promotions, and ad spend. This is the real number behind your business, not the inflated one your seller dashboard shows you.
`true CM per SKU · all cost layers · monthly reconciliation · dashboard vs reality`

### 6. Brand Health
We treat returns and reputation as one diagnostic, not two problems. Root-cause analysis identifies whether returns stem from a listing, product, or fulfilment issue, while review velocity and rating integrity are tracked alongside — so brand health is something you manage proactively, not discover after the damage is visible.
`returns root-cause · review velocity & sentiment · listing suppression & hijacker detection · BSR trend`

---

## Closing

**Headline (H2):** The OS is ours. So is the outcome.

**Body:** Saddl OS isn't a dashboard we hand you. It's the intelligence layer our operators run on your accounts every week. You don't log in and interpret it — we act on it and report what happened. That's the difference between a tool and an operator.

**CTA:** `Request an account audit`

---
---

# 3. SERVICES  *(how we engage — the operating model)*

**SEO / GEO scaffolding**
- `<title>` — Fully Managed Amazon & Noon Service — Embedded Ecommerce Operator | Saddl
- `<meta description>` — Saddl doesn't deliver a retainer or a project — we embed as your ecommerce operating team across Amazon, Noon (incl. Minutes), Walmart, and D2C. Weekly decisions, biweekly reporting, monthly P&L. Not an agency.
- `canonical` — https://saddl.io/services · Schema: `Service`
- Target keywords: amazon managed service, full service amazon agency, amazon account management service, outsource amazon operations, embedded ecommerce team, fractional head of ecommerce

## Hero

**Headline (H1):** One engagement. Your entire ecommerce operation.

**Sub:** We don't sell modules and we don't hand you recommendations to act on yourself. We embed into your business and run the commercial engine — advertising, inventory, pricing, listings, financials, and brand health — as one connected system across every marketplace you sell on.

---

## The four service lines

### Embedded Ecommerce Management
This is the operating model underneath everything else. Saddl doesn't deliver a retainer or a project — we embed as your ecommerce operating team on a recurring basis. We're in your accounts, making decisions, every week — taking ownership of outcomes instead of handing you a dashboard and a list of things to do yourself.

### Multi-Platform Operations
We run your business across Amazon globally and Noon UAE and KSA — including Noon Minutes, the quick-commerce layer most agencies in this region don't operate at all — alongside Walmart and other marketplaces as you expand. Each platform has its own seller mechanics, fee structures, and quirks, and we manage all of them as one connected system, not separate engagements.

### Full-Funnel Paid Media
Beyond marketplace advertising, we manage Meta and Google campaigns as part of the same connected system — traffic and spend decisions made with full visibility into how they affect marketplace performance, rather than paid social and marketplace ads run in isolation by different teams with no shared context.

### Account Management & Reporting
Every two weeks you receive a unified snapshot across every channel and function — what happened, why, and what we're doing next. Monthly strategic reviews zoom out to the portfolio level: where the next unit of investment should go, and which SKUs are underinvested or burning budget. No dashboards to interpret. No numbers to chase down.

---

## How the engagement runs

**Onboarding (≈2 weeks).** We connect to your accounts, audit the current state across every function, and establish baseline metrics. By the end you have a clear picture of the gaps and what we're going after first.

**Ongoing operations.** Ads managed weekly. Inventory monitored continuously. Pricing benchmarked against the market in real time. Returns diagnosed and acted on. Financials reconciled at settlement level every period.

**Reporting.** Biweekly unified snapshots across all channels — what happened, why, what's next. No interpretation required.

**Strategic reviews.** Monthly: what's working at the portfolio level, where the next unit of investment should go, which SKUs to push and which to pause.

---

## Who this is for

Saddl works with ecommerce brands past the early stage and ready to operate with discipline. You're likely a fit if:
- You're selling on Amazon, Noon, or both — and growing
- You have a catalogue of meaningful size (20+ SKUs) with real revenue at stake
- You're making operational decisions without a full picture of what they cost
- You want a team that takes ownership — not another vendor that sends reports

**CTA:** `Request an account audit`

---
---

# 4. ABOUT

**SEO / GEO scaffolding**
- `<title>` — About Saddl — Built by an Operator, Run by Operators | Dubai
- `<meta description>` — Saddl was built by an ecommerce operator with a background in enterprise identity and incrementality measurement (Acxiom, LiveRamp, MediaHub). Enterprise-grade analytical rigour, applied to $1M–$20M brands.
- `canonical` — https://saddl.io/about · Schema: `Person` (founder credentials) + `AboutPage`

## Hero

**Headline (H1):** Built by an operator who got tired of guessing.

## Founder story

I've been selling on Amazon for years. Built a seven-figure business. Spent hundreds of thousands on advertising. Managed a catalogue across UAE and Saudi Arabia. And for most of that time, I was running on instinct — the same way most ecommerce founders do.

The ads dashboard told me ROAS. The inventory tool told me stock levels. The pricing tool showed me competitors. None of them talked to each other. None of them told me what was actually happening to the business.

Before Saddl, I spent five years at Acxiom and LiveRamp — inside the infrastructure that powers identity resolution and measurement for the world's largest advertisers, through the Data Plus Math acquisition. I understood, at a technical level, what it meant to connect data sources into a single decision layer. Then I moved to MediaHub Worldwide as Analytics Director and SVP, building incrementality measurement systems for Fortune 500 brands — the kind of rigorous attribution most brands spend millions trying to reach.

When I came back to my own ecommerce business, I couldn't believe the gap. The tools available to a growing brand were nowhere near the analytical standard I'd been working at. And the agencies filling the gap were operating without any real data infrastructure underneath them. So I built it.

Saddl is what happens when you take the analytical rigour of an enterprise data team and apply it to the operational reality of a growing ecommerce brand. Not a SaaS product. Not an agency. An embedded operating team with the infrastructure to back it.

## What makes Saddl different

**We're operators, not vendors.** We run our own ecommerce business across Amazon and Noon — verified storefronts, live inventory, real ad spend. Everything we do for clients we've done for ourselves first.

**We built the infrastructure.** The data pipeline, the intelligence layer, the reporting system — all proprietary. We didn't stitch together third-party tools and call it a platform. We built the connections between ads, inventory, pricing, returns, and financials because they didn't exist anywhere else.

**We own the outcome.** We don't hand you a dashboard and walk away. We're in the account, making decisions, every week. When something's wrong, we catch it. When something's working, we push it further.

**CTA:** `Request an account audit`

---
---

# 5. APPLY  *(audit request)*

**SEO / GEO scaffolding**
- `<title>` — Request an Account Audit — Saddl
- `<meta description>` — Start with a free, read-only account audit. We surface contribution-margin gaps, attribution blind spots, and inventory exposure within 48 hours. For $1M–$20M brands on Amazon and Noon.
- `canonical` — https://saddl.io/apply · Schema: `ContactPage`
- `robots` — index, follow (do not noindex — this is the conversion + high-intent keyword page)

## Hero

**Headline (H1):** Start with an audit, not a contract.

**Sub:** Read-only access. Within 48 hours you'll have a clear picture of where your accounts are leaking margin, missing attribution, and carrying inventory risk. No commitment, no sales sequence — just the brief. If it's a fit, we talk about running it.

## What you get from the audit
- Contribution-margin gaps by SKU your dashboard isn't showing
- Attribution blind spots across advertising
- Inventory and OOS exposure across the catalogue
- A week-one action list — what we'd change first

## The form
Fields: Name · Brand · Website / storefront · Primary marketplace(s) · Approx. annual revenue · What's not working right now.

**Qualification note:** Saddl is built for brands doing $1M–$20M in revenue on Amazon, with or without Noon. If you're earlier than that, we may not be the right fit yet — but tell us where you are.

**Submit CTA:** `Request my account audit`

---
---

# 6. FAQ

**SEO / GEO scaffolding**
- `<title>` — Saddl FAQ — Managed Ecommerce, Access, Pricing, MENA
- `canonical` — https://saddl.io/faq · Schema: `FAQPage` (each Q as `Question`/`Answer`) — AI Overviews cite FAQ schema frequently
- H2 headings phrased as the literal search queries.

**1. Is this a retainer or a managed service?**
Neither label fits exactly. We embed as your operating team — in your accounts every week, making decisions, owning outcomes. Retainers imply advice; managed services imply outsourcing. We call it embedding because that's what it is.

**2. Do we need to give you access to our Amazon account?**
Yes — operator-level access to Seller Central and the Advertising Console. We can't make decisions in your accounts without it. All access is scoped to what Saddl OS requires and logged.

**3. How quickly do you see results?**
The audit surfaces issues in 48 hours. Advertising decisions typically show validated impact in 14–21 days. Inventory decisions show impact in the reorder cycle. P&L clarity shows in the first monthly reconciliation. We don't promise timelines — we promise accountability for what the numbers show.

**4. What happens if we want to stop?**
30-day notice, clean handover. Your accounts, your data, your access — always yours. We document everything we've done and why. You leave knowing exactly what the system was doing.

**5. Do you work with brands outside MENA?**
Yes. We operate accounts globally on Amazon. Our edge in MENA is Noon UAE/KSA including Noon Minutes, which most global agencies don't have. For brands running both Amazon global and Noon, we're the only firm that runs both as one system.

**6. What does it cost?**
Pricing is set after the audit — based on account complexity, platform count, and scope. We don't publish a rate because a $2M Amazon-only brand and a $15M Amazon + Noon + D2C brand are different engagements. Request an audit first; we'll tell you exactly what it costs before you commit to anything.

---
---

# 7. BLOG — launch topics

The `/blog` is where you capture the ~35k–73k monthly search volume the homepage can't. Full 20-post roadmap lives in `SEO/KEYWORD-FARM.md`; these eight are the launch priority — highest volume × lowest difficulty × best fit to the new positioning. Retire or rewrite the two existing "PPC tool" posts first (they train AI on the dead positioning).

**Tier 0 — publish in the first 30 days (definitional + bridge):**

1. **"What an embedded ecommerce operator actually does (vs. an agency)"** — the category-defining, AI-citable piece. Targets: *ecommerce operating firm, embedded ecommerce team, amazon operator.* This is the post that teaches the entity you want AI engines to cite.
2. **"Should you use an Amazon PPC tool or hire a managed service?"** — one post captures Perpetua + Pacvue + Teikametrics alternative searches (~1,400–2,600/mo) and bridges directly from your old business to the new. Targets: *perpetua alternative, amazon ppc tool vs managed service.*

**Tier 1 — next 60 days (financial + MENA authority):**

3. **"Why your Amazon ROAS looks great and your profit is shrinking"** — the exact financial vocabulary of your ICP. Targets: *amazon contribution margin, amazon unit economics, amazon roas dropping.*
4. **"Amazon vs. Noon UAE: what brands get wrong about running both platforms"** — nobody owns this. Targets: *sell on noon uae, amazon noon management dubai, noon uae agency.*
5. **"Noon Minutes: what Amazon sellers need to know before selling in the UAE"** — zero competitor content exists. Targets: *noon minutes seller, noon marketplace management.*

**Tier 2 — problem-aware + cost (highest-shareability, funnel entry):**

6. **"7 signs your Amazon agency is costing you more than it's making you"** — most shareable piece in the farm, flows straight to the audit. Targets: *amazon agency red flags, signs your amazon agency is failing.*
7. **"How much does Amazon management cost in 2026? (and what you're actually getting)"** — catches the cost searchers without putting a price on your site; frames the market range and explains scope-based pricing. Targets: *amazon agency cost, amazon managed services pricing.*
8. **"What to look for when hiring an Amazon management firm in the UAE"** — buyer's-guide format; captures SalesDuo / Chain Reaction / Amazon Sellers Society alternative searches. Targets: *salesduo review, best amazon agency dubai.*

Each post: `BlogPosting` schema with `datePublished`, `dateModified`, `author` (Person + credentials), `publisher`. 1,200–1,800 words. Ends in a single audit CTA — no "book a demo."

---
---

# FOOTER & ENTITY

**Footer line:** © 2026 Saddl · Meydan Grandstand, Nad Al Sheba, Dubai, UAE · info@saddl.io

**Footer nav:** Saddl OS · Services · About · Blog · FAQ · Request an audit · Privacy · Terms · Careers

⚠️ **Legal-pages check:** Footer/brand = "Saddl." Confirm whether Privacy & Terms must name the *registered* entity (`website_copy_v1` cited "Zenarise Trading LLC FZ"). If the LLC is the legal signatory, it belongs in the legal pages and schema `legalName` — the brand name "Saddl" stays everywhere customer-facing.

---
---

# SCHEMA — Organization (site-wide, in `<head>`)

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Saddl",
  "description": "Fully managed ecommerce operating firm embedded as the operating team for consumer brands on Amazon, Noon UAE/KSA, Walmart, and D2C channels.",
  "url": "https://saddl.io",
  "email": "info@saddl.io",
  "areaServed": ["AE", "SA", "Global"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Meydan Grandstand, Meydan Road, Nad Al Sheba",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "serviceType": "Ecommerce Management",
  "priceRange": "$$$",
  "sameAs": []
}
```
Add `BlogPosting` to each post, `Person` to About, `FAQPage` to FAQ, `Service` to Saddl OS + Services.

---
---

# STILL PENDING BEFORE GO-LIVE  *(content only — technical audit deferred per your note)*

1. **Real proof data** — swap every ⚠️ in the Proof section (3 client quotes + the aggregate figures) for approved numbers, or cut what you can't substantiate.
2. **Legal entity confirmation** — resolve the "Saddl" vs "Zenarise Trading LLC FZ" question for Privacy/Terms + schema `legalName`.
3. **Geo pages (Phase 2)** — `/amazon-uae`, `/noon-uae`, `/mena`: your fastest ranking wins, not yet drafted. Need distinct copy each (thin duplicates get penalized).
4. **Retire the 2 old blog posts** — currently in the dead "PPC tool" positioning.
5. **Legal pages** — Privacy, Terms, Careers copy still on old positioning; refresh to match.
6. **Build** — this is copy; the HTML rebuild against `DESIGN.md` is the next production step.

---
---

# EXISTING PAGES — DISPOSITION MAP

None of the current pages can ship as-is: every one still carries "Saddl AdPulse / Decision intelligence for Amazon PPC / © 2025" in title, footer, or body. Even a single AdPulse footer re-anchors AI/Google to the dead positioning. Three actions:

| Existing page | Action | Notes |
|---|---|---|
| `index.html` | **Rebuild** | New homepage (section 1 above) |
| `about.html` | **Rebuild** | New About (section 4 above) |
| `audit.html` ("Free Ad Impact Check", CSV upload) | **Rebuild → `/apply`** | Old = SaaS self-serve upload. New = request read-only access, 48h brief. Different form. |
| `bookdemo.html` | **Retire** | No demo in a managed-service model. Single path = Request an account audit. |
| `features.html`, `compare.html`, `agencies.html`, `how-it-works.html`, `pricing.html` | **Retire** | Replaced by new IA (no /vs/, no /pricing). 301-redirect to closest new page. |
| `careers.html` + `/jobs/*` | **Rebuild as reusable shell** | Structure kept. Current role is filled → show "No open roles right now — more coming soon, reach out at info@saddl.io." Template ready to drop the 2 upcoming roles into. |
| `blogs/index.html` | **Rebuild** | Layout reusable; rebrand + repopulate with new posts |
| `blogs/why-i-built-saddle.html`, `blogs/why-ppc-tools-stop-at-optimization/` | **Retire or rewrite** | Old "PPC tool" positioning — actively harmful to keep indexed |
| `terms.html` | **Rebrand + retain compliance language** | Keep the service/data sections; update service description to managed-service; strip AdPulse branding. **Retain Amazon SP-API / data-access language for audit-readiness** (see legal note). |
| `privacy.html` | **Rebrand + retain compliance language** | Keep all Amazon data-handling and API-access sections verbatim — still required (operator-level Seller Central + SP-API). Rebrand only; add managed-service context. |

**Legal / Amazon-audit note:** Under the managed-service model Saddl holds Seller Central operator access and likely SP-API credentials, so the existing Amazon data-access, retention, and API-compliance language in Privacy/Terms is *still required* — arguably more so than under the SaaS model. Keep those sections and their language in place for future Amazon audit, even if not prominently linked. Rebrand off "AdPulse" and update the service description; do not delete the compliance clauses. Counsel to confirm final legal-entity name (Saddl vs Zenarise Trading LLC FZ) in `legalName`.

---
---

# SEO COVERAGE — what this draft captures vs what's pending

The 7-page draft is keyword-primed for the service/intelligence/ICP clusters and fully reflects the competitor-analysis differentiators. It does NOT yet capture the MENA geo terms or the competitor-alternative/problem-aware volume — those live in pages not yet written.

| Cluster | Est. vol/mo | Status | Vehicle |
|---|---|---|---|
| 1. Service intent | 8–15k | ✅ Covered | Home + Services |
| 4. Intelligence / P&L | 4–8k | ✅ Covered | Saddl OS |
| 8. Long-tail operator | 0.6–1.5k | ✅ Covered | ICP language throughout |
| 2. Embedded operator | 2–4.5k | 🟡 Partial | On-page + blog |
| 3. **MENA geo** | **5–10k** | ❌ Pending | **Phase 2 geo pages — fastest wins** |
| 5. Competitor-alternatives | 8–18k | ❌ Pending | Blog (8 posts listed) |
| 6. Problem-aware | 4–9k | ❌ Pending | Blog |
| 7. High-intent decision | 4–8k | 🟡 Partial | FAQ/blog + geo pages |

**Priority implication:** the geo pages (`/amazon-uae`, `/noon-uae`, `/mena`) are the single highest-ROI unbuilt asset — highest volume × lowest difficulty × zero premium competitor. They should likely precede the full HTML build.

---
---

# DECISION LOG — the six conflicts, resolved

| # | Conflict | Decision |
|---|---|---|
| 1 | Hero register | H3 hybrid — "…We own every one of them" + scope subline |
| 2 | Primary CTA | "Request an account audit" + "Explore Saddl OS" ghost; "audit" is canonical (not "diagnostic") |
| 3 | Modules | 6 per PRODUCT.md; Returns → Brand Health; Reporting → Services |
| 4 | Site map | Phase 1 = 7 pages; no /vs/, no /pricing; geo pages fast-follow |
| — | OS vs Services | Two sections: **Saddl OS = Solutions** (6 layers) · **Services = engagement** (4 lines) |
| 5 | Pricing | Not published — set post-audit at pitch |
| 6 | Proof | Placeholder, real data swapped in before live |
