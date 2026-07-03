# Saddl Website Revamp — Handover Kit

**Last updated:** 1 July 2026
**Purpose:** Everything a new team member needs to continue the Saddl website revamp without re-deriving context.
**Owner (founder):** Aslam · info@saddl.io

---

## 1. What this project is

Saddl is pivoting. The old business was an **Amazon PPC SaaS tool ("Saddl AdPulse")** — a self-serve product where sellers uploaded ad reports. That business is dead. The old website still describes it and must be fully replaced.

The new business is a **fully managed, multi-marketplace ecommerce operating firm**, powered by an in-house intelligence layer called **Saddl OS**. We embed as a brand's ecommerce operating team and run advertising, inventory, pricing, listings, financials/P&L, and brand health as one connected system — across Amazon (global), Noon UAE/KSA (incl. Noon Minutes), Walmart, and D2C (Meta/Google). Not a tool. Not an agency. An embedded operator.

- **ICP:** brand owners doing **$1M–$20M/yr**, on Amazon and/or Noon, MENA-based or global.
- **Positioning wedge:** "we own the outcome" (embedded operator) + Noon depth + contribution-margin/P&L transparency — all unclaimed by competitors (see `SEO/COMPETITOR-ANALYSIS.md`).
- **Base:** Dubai (Meydan Grandstand, Nad Al Sheba). Entity name used site-wide: **"Saddl"**.

---

## 2. Source-of-truth files (read these first, in this order)

| File | What it is | Status |
|---|---|---|
| **`saddl_website_copy_FINAL.md`** | ⭐ The reconciled final website copy — all 7 Phase-1 pages, SEO scaffolding, blog list, schema, decision log, disposition map. **This is the master.** | Current |
| `PRODUCT.md` | Brand voice, personality, ICP, and the full homepage section-by-section spec. The register bible. | Current |
| `DESIGN.md` | Design system — colours (Jade + Ink), typography (Bricolage/Gloock/Fragment Mono), components, motion. Build against this. | Current |
| `SEO/KEYWORD-FARM.md` | 111 keywords, 8 clusters, top-10 priority, 20-post blog roadmap, target-page map. | Current |
| `SEO/COMPETITOR-ANALYSIS.md` | MENA + global competitors, market gaps, positioning matrix. | Current |
| `SEO/COMPETITOR-GLOBAL.md` | Deep global competitor landscape (30+ sources). | Current |
| `SEO/GEO-ANALYSIS.md` | AI-search readiness audit, schema/meta/sitemap gaps. | Current (Cloudflare note now resolved) |
| `saddl_website_copy_v1 (1).md` | The FIRST copy draft. **Superseded** by FINAL — kept for reference only. Do not build from this. | Superseded |

> `OpenMontage/` in this folder is an unrelated video-tooling project. Ignore it entirely.

---

## 3. The 6 locked positioning decisions

These were debated and locked with the founder. **Do not reopen without sign-off.**

| # | Decision | Locked outcome |
|---|---|---|
| 1 | Hero register | Declarative ownership. H1: *"Your ecommerce runs on hundreds of decisions a week. We own every one of them."* |
| 2 | Primary CTA | **"Request an account audit"** (+ ghost "Explore Saddl OS"). The word **"audit"** is canonical — never "diagnostic". |
| 3 | Modules | **6** (per `PRODUCT.md`): Advertising, Inventory, Listing & Content, Pricing, Financial/P&L, Brand Health. Returns lives inside Brand Health; Reporting lives in Services. |
| 4 | Site map | Phase 1 = 7 pages. **No `/vs/` pages. No `/pricing` page.** Geo pages fast-follow (Phase 2). |
| — | OS vs Services | Two distinct sections: **Saddl OS = Solutions** (the 6 intelligence layers, *what the system does*) · **Services = engagement** (4 service lines, *how we operate it for you*). |
| 5 | Pricing | **Not published.** Set post-audit, during the pitch, once scope is defined. |
| 6 | Proof | Ships as **clearly-marked placeholders**; real client numbers/testimonials swapped in as approved. Never fabricate. |

---

## 4. Site architecture

**Phase 1 — launch (7 pages + legal):**
`/` (home) · `/saddl-os` (Solutions) · `/services` (engagement + process) · `/about` · `/apply` (audit request) · `/blog` · `/faq` + `/privacy`, `/terms`, `/careers`.

Nav: **Saddl OS · Services · About · Blog · [Request an account audit]**

Homepage is the summary spine — Section "How We Engage" teases `/services`; Section "Saddl OS" teases `/saddl-os`; each links out to its full page.

**Phase 2 — the geo wedge (highest-ROI unbuilt asset):**
`/amazon-uae` · `/noon-uae` · `/mena` — distinct copy each (thin duplicates get penalised). These capture the fastest, lowest-competition search volume.

**Phase 3 — depth:** five intelligence sub-pages (`/financial-intelligence`, etc.) as blog/authority builds.

---

## 5. Status — what's done vs pending

### ✅ Done
- All 6 positioning conflicts reconciled (`saddl_website_copy_FINAL.md`).
- Final copy written for all 7 Phase-1 pages + blog list + Organization schema.
- **Rebranded (HTML edited, live):** `terms.html`, `privacy.html`, `careers.html` — new nav/footer, © 2026, "Saddl". Privacy/Terms retain Amazon SP-API + compliance language for audit-readiness; privacy data-scope corrected to the managed-service model.
- **Careers** converted to a reusable shell — "no open roles" placeholder + commented job-card template + intact application modal. (Role filled; 2 more roles coming.)
- **Archived** (to `_archive/`, reversible): bookdemo, features, compare, agencies, how-it-works, pricing, audit(+audit.js), 2 old blog posts, orphaned AI-engineer job page.
- **301 redirects** added in `netlify.toml` (retired URLs → closest new page).
- **`sitemap.xml`** rewritten to new IA; geo pages stubbed.

### 🔜 Pending — HTML build (copy exists in FINAL, pages not built)
These live pages still carry OLD positioning and must be rebuilt from the FINAL copy against `DESIGN.md`:
- `index.html` (homepage) — **highest priority**
- `services.html` — **new file to create** (owns "amazon managed service", "full service amazon agency")
- `saddl-os.html` — **new file to create**
- `about.html` — rebuild
- `apply.html` — **new file to create** (the audit-request form; replaces old audit.html)
- `faq.html` — rebuild (new copy in FINAL)
- `blogs/index.html` — rebuild + repopulate

### 🔜 Pending — Phase 2
- Build `/amazon-uae`, `/noon-uae`, `/mena` geo pages (distinct copy).
- Write the 8 launch blog posts (list in FINAL §7).

### 🔜 Pending — technical / GEO (see `SEO/GEO-ANALYSIS.md`)
- Add `ProfessionalService` JSON-LD to `<head>` site-wide (block ready in FINAL §Schema); `BlogPosting`, `Person`, `FAQPage`, `Service` per relevant page.
- Add OG/Twitter meta + canonical to each page.
- Add `llms.txt` (template in GEO-ANALYSIS).
- (Cloudflare AI-crawler block — founder says resolved; re-verify at launch.)

---

## 6. Founder inputs still needed (blockers for go-live)

1. **Proof data** — real client numbers + at least one testimonial to replace the ⚠️ placeholders in the homepage Proof section. Until then, ship outcomes-only or omit.
2. **Legal entity name** — brand is "Saddl" everywhere customer-facing. Confirm whether Privacy/Terms + schema `legalName` need the registered LLC ("Zenarise Trading LLC FZ" per the v1 draft). Counsel to confirm.

---

## 7. SEO / GEO — the ranking plan

**The 7 high-intent keywords to index against, and where each is won:**

| # | Keyword | Vol/mo | Target page | Built? |
|---|---|---|---|---|
| 1 | amazon agency dubai | 700–1,400 | `/amazon-uae` | ❌ Phase 2 |
| 2 | noon uae agency | 400–800 | `/noon-uae` | ❌ Phase 2 |
| 3 | ecommerce agency uae | 1,000–2,000 | `/mena` | ❌ Phase 2 |
| 4 | best amazon agency mena | 200–400 | `/mena` | ❌ Phase 2 |
| 5 | amazon managed service | 1,200–2,500 | `/` + `/services` | 🟡 Copy ready, build pending |
| 6 | full service amazon agency | 1,000–2,000 | `/services` | 🟡 Copy ready, build pending |
| 7 | hire amazon agency / agency cost | 600–1,200 | `/services` + FAQ + blog | 🟡 Copy ready, build pending |

**Key point for whoever builds next:** 4 of the 7 require the geo pages. The homepage structurally cannot rank for "amazon agency dubai". Prioritise geo pages if ranking speed matters.

**Coverage now:** strong on service-intent, intelligence/P&L, and ICP long-tail clusters; MENA-geo and competitor-alternative/problem-aware volume is pending (geo pages + blog). Full breakdown in `saddl_website_copy_FINAL.md` §SEO Coverage.

**Blog:** 8 launch posts prioritised in FINAL §7 (full 20-post roadmap in `SEO/KEYWORD-FARM.md`). Retire/rewrite the 2 old posts (already archived).

---

## 8. Recommended next actions (in order)

1. **Build the homepage** (`index.html`) from FINAL §1 against `DESIGN.md` — hero, definitional block, How We Engage, Saddl OS, Proof (placeholders), FAQ teaser, Apply.
2. **Build `/services` and `/saddl-os`** — these own KW #5 and #6 and are the two teased sections.
3. **Build `/apply`** (audit form) — the single conversion path. Wire the form (careers.html uses FormSubmit to `jobs@saddl.io`; use an equivalent to `info@saddl.io`).
4. **Rebuild `/about`, `/faq`, `/blogs/index`** from FINAL copy.
5. **Add schema + meta + llms.txt** across all pages.
6. **Phase 2:** build the 3 geo pages (unlocks 4 of the 7 target KW), then publish the first 2 blog posts.
7. **Before launch:** swap proof placeholders for real data; confirm legal entity; re-verify Cloudflare AI-crawler access.

---

## 9. Build conventions

- **Stack:** static HTML + Tailwind (CDN) + `styles.css`, deployed on Netlify. Fonts per `DESIGN.md`.
- **Design:** follow `DESIGN.md` exactly — Jade (`oklch(0.420 0.100 165)`) + Ink, floating dark nav, hero OS panel, section rhythm (surface → ink-deep alternation). Anti-patterns list in `DESIGN.md §7` is binding.
- **Voice:** declarative, operator, evidence-first (`PRODUCT.md §Brand Personality`). No hype, no "we help you scale", no marketing adjectives in data lines.
- **Data lines:** Fragment Mono, format `date · action · metric · delta`. Placeholder values OK at launch if format is exact; never fabricate proof figures.
- **Canonical term:** "audit" (not "diagnostic"). Entity: "Saddl". © 2026.
- **Nav/footer:** copy the rebranded pattern already in `terms.html` / `privacy.html` / `careers.html` for consistency.
- Archived pages live in `_archive/` — reference only, not served. Redirects handle their old URLs.
