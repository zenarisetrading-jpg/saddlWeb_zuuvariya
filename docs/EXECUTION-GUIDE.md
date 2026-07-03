# Saddl Website — Execution Guide (for AI coding agents)

**Audience:** the person implementing the build via an AI coding agent (Antigravity / Cursor / Claude Code).
**Goal:** turn the approved copy (`saddl_website_copy_FINAL.md`) + design system (`DESIGN.md`) into a live 7-page site, then geo pages + blog.
**Pair this with:** `AGENTS.md` (the rules the agent must always obey).

---

## 0. How to run this with Antigravity (or any agent)

1. **Open this folder as the workspace** so the agent can read `AGENTS.md`, `DESIGN.md`, and `saddl_website_copy_FINAL.md`. Antigravity and most agents auto-load `AGENTS.md` as project rules — confirm it's picked up.
2. **Work one page per task/thread.** Don't ask the agent to build the whole site in one shot — it will drift from the copy and design. One page = one focused task = one review.
3. **For each page:** paste the matching prompt from §4 below. Let the agent build, then run the §5 QA checklist before moving on.
4. **Preview after every page** (open the HTML in the browser / Antigravity's browser tool). Check desktop + mobile widths.
5. **Commit after each accepted page** so you can roll back cleanly.
6. **Never let the agent invent proof data or pricing.** If it asks or tries, stop it and leave the placeholder.

> Suggested order matters: build shared components first (via the homepage), because every other page reuses the nav + footer.

---

## 1. What already exists (don't rebuild)

- **Rebranded + live:** `terms.html`, `privacy.html`, `careers.html`. ⚠️ These were rebranded in the *old* visual style (Inter font, blue `#2A8EC9`) for speed. They are content-correct but NOT yet on the new design system. Restyle them to `DESIGN.md` in the final task (§3, Task 9) — low priority, do them last.
- **Retired → `_archive/`** with 301s in `netlify.toml`. Leave alone.
- **`sitemap.xml`** — new IA, geo pages stubbed (uncomment when built).

## 2. What to build (new/rebuild, from FINAL copy)

| File | Source section in FINAL | Type |
|---|---|---|
| `index.html` | §1 Homepage | rebuild (highest priority) |
| `saddl-os.html` | §2 Saddl OS | new |
| `services.html` | §3 Services | new |
| `about.html` | §4 About | rebuild |
| `apply.html` | §5 Apply | new (form) |
| `faq.html` | §6 FAQ | rebuild |
| `blogs/index.html` | §7 Blog list | rebuild |

---

## 3. Build order (task list)

1. **Homepage** (`index.html`) — establishes shared nav + footer + design tokens the rest reuse.
2. **Extract nav + footer** into a repeatable pattern (copy-paste block or HTML include) so all pages match.
3. **Services** (`services.html`) — owns "amazon managed service", "full service amazon agency".
4. **Saddl OS** (`saddl-os.html`).
5. **Apply** (`apply.html`) — the audit form (the single conversion path).
6. **About** (`about.html`).
7. **FAQ** (`faq.html`) — include `FAQPage` JSON-LD.
8. **Blog index** (`blogs/index.html`) — layout + placeholders for the 8 launch posts (titles in FINAL §7).
9. **Restyle legal/careers** (`terms`, `privacy`, `careers`) to `DESIGN.md` for visual consistency.
10. **Global SEO pass** — schema on every page, OG/meta, add `llms.txt`, uncomment sitemap entries as pages ship.
11. **Phase 2** — geo pages (`amazon-uae.html`, `noon-uae.html`, `mena.html`), then first 2 blog posts.

---

## 4. Copy-paste task prompts

> Give the agent ONE of these per task. Each assumes `AGENTS.md`, `DESIGN.md`, and `saddl_website_copy_FINAL.md` are in the workspace.

### Task 1 — Homepage
```
Build index.html for Saddl. This is a full rebuild — the current index.html is the dead "AdPulse" positioning; replace it entirely.

Copy: use saddl_website_copy_FINAL.md §1 (Homepage) verbatim — hero, the GEO definitional block, "How We Engage" (3 steps), "Saddl OS" (6 module cards), Proof, FAQ teaser, Apply.
Design: follow DESIGN.md exactly — floating dark nav, Jade+Ink palette, Gloock headlines, Bricolage body, Fragment Mono for the data lines. Build the hero OS panel per DESIGN.md §Components. Respect the section rhythm (surface → ink-deep alternation) and the banned anti-patterns in §7.
SEO: add the title, meta description, canonical, and OG tags from FINAL §1 scaffolding. Add the ProfessionalService JSON-LD from FINAL §Schema to <head>.
Rules: obey AGENTS.md. Keep proof numbers as visible placeholders (leave a code comment ⚠️ REPLACE WITH REAL DATA). Primary CTA "Request an account audit" → apply.html; ghost "Explore Saddl OS" → saddl-os.html.
Tech: static HTML + Tailwind CDN + styles.css. Mobile-first, WCAG 2.1 AA, reduced-motion fallback.
After building, list any place you had to make a judgment call.
```

### Task 2 — Nav + footer component
```
From the index.html you just built, extract the floating nav and the footer into a single reusable block (a documented HTML snippet I can paste into every page, or an include if the setup supports it). Nav links: Saddl OS (saddl-os.html), Services (services.html), About (about.html), Blog (blogs/index.html), + CTA "Request an account audit" (apply.html). Footer per DESIGN.md dark style with the four columns already used, entity "Saddl", Meydan Grandstand address, info@saddl.io, © 2026. Output the exact block and tell me where to paste it.
```

### Task 3 — Services
```
Build services.html using saddl_website_copy_FINAL.md §3 verbatim (hero, the 4 service lines, "How the engagement runs" process, "Who this is for", CTA). Reuse the shared nav/footer. Style per DESIGN.md. Add the title/meta/canonical/OG from FINAL §3 and a Service JSON-LD. This page must target "amazon managed service" and "full service amazon agency" — ensure those phrases appear naturally in the H1/intro/meta as written in the copy. Obey AGENTS.md.
```

### Task 4 — Saddl OS
```
Build saddl-os.html from saddl_website_copy_FINAL.md §2 verbatim (hero, the six intelligence layers with their Fragment Mono data lines, closing). Reuse shared nav/footer. Style per DESIGN.md (module cards on ink-deep per §Components). Add title/meta/canonical/OG from FINAL §2 + Service JSON-LD. Data lines are Fragment Mono, format `date · action · metric · delta` — placeholders OK, exact format required. Obey AGENTS.md.
```

### Task 5 — Apply (form)
```
Build apply.html from saddl_website_copy_FINAL.md §5 verbatim (hero, "What you get from the audit", the form, qualification note). Form fields: Name, Brand, Website/storefront, Primary marketplace(s), Approx. annual revenue, What's not working. Wire submission via FormSubmit to info@saddl.io (mirror the pattern in careers.html which uses FormSubmit). Success + validation states. Reuse shared nav/footer, style per DESIGN.md. Add title/meta/canonical + ContactPage JSON-LD. This is the only conversion path — no "book a demo" anywhere. Obey AGENTS.md.
```

### Task 6 — About
```
Rebuild about.html from saddl_website_copy_FINAL.md §4 verbatim (hero, founder story, "What makes Saddl different", CTA). Reuse shared nav/footer, style per DESIGN.md. Add title/meta/canonical/OG from FINAL §4 + Person JSON-LD (founder credentials) + AboutPage. Obey AGENTS.md.
```

### Task 7 — FAQ
```
Rebuild faq.html from saddl_website_copy_FINAL.md §6 verbatim (6 Q&As). Accordion per DESIGN.md §Components. H2s phrased as the literal questions. Add FAQPage JSON-LD with every Q&A. Reuse shared nav/footer. Obey AGENTS.md. Keep the pricing answer as written (pricing set post-audit, never a number).
```

### Task 8 — Blog index
```
Rebuild blogs/index.html as a clean blog listing styled per DESIGN.md, reusing shared nav/footer. Create placeholder cards for the 8 launch posts listed in saddl_website_copy_FINAL.md §7 (title + one-line teaser each, "Coming soon" state, no dead links). Add title/meta/canonical. Obey AGENTS.md.
```

### Task 9 — Restyle legal/careers
```
Restyle terms.html, privacy.html, and careers.html to the DESIGN.md system (currently on old Inter/blue styling). Content is already correct — DO NOT change the legal wording, the Amazon SP-API/compliance sections in privacy/terms, or the careers "no open roles" state. Only swap the visual layer (fonts, palette, nav, footer) to match the rest of the site. Obey AGENTS.md.
```

### Task 10 — Global SEO pass
```
Across all built pages: verify title/meta/canonical/OG are present and match FINAL. Confirm JSON-LD is valid (ProfessionalService on home, Service on saddl-os/services, Person on about, FAQPage on faq). Create /llms.txt using the template in SEO/GEO-ANALYSIS.md. Uncomment the sitemap.xml entries for pages now live. Run each page through an HTML validator and report issues.
```

### Task 11 — Geo pages (Phase 2)
```
Build amazon-uae.html, noon-uae.html, and mena.html. There is no pre-written copy for these — draft it in the Saddl operator register (see PRODUCT.md voice) using SEO/KEYWORD-FARM.md Cluster 3 as the keyword map. Each page MUST have distinct copy (no duplicated boilerplate — thin duplicates get penalised). Targets: amazon-uae → "amazon agency dubai"; noon-uae → "noon uae agency"; mena → "ecommerce agency uae" + "best amazon agency mena". Reuse shared nav/footer, style per DESIGN.md, add LocalBusiness/Service JSON-LD with areaServed. Show me the drafted copy for approval BEFORE finalizing each page.
```

---

## 5. QA checklist (run per page before accepting)

- [ ] Copy matches `saddl_website_copy_FINAL.md` (no invented sentences, no missing sections)
- [ ] Visual matches `DESIGN.md` (fonts, Jade+Ink, radii/shadows, section rhythm; none of the §7 anti-patterns)
- [ ] `<title>`, meta description, canonical, OG/Twitter present and correct
- [ ] Correct JSON-LD present and valid (test in Google Rich Results / a schema validator)
- [ ] Zero old-positioning strings (grep for: AdPulse, "Amazon PPC", "Book a Demo", "© 2025", "diagnostic")
- [ ] No fabricated proof/pricing; placeholders still marked
- [ ] Primary CTA = "Request an account audit" → apply.html; works
- [ ] All internal links resolve (no 404s to unbuilt pages beyond known Phase-2)
- [ ] Responsive at 375px / 768px / 1280px; nav usable on mobile
- [ ] Keyboard-navigable; reduced-motion respected; contrast passes AA

## 6. Project definition of done

All 7 Phase-1 pages built + legal/careers restyled + SEO pass complete + `llms.txt` live + sitemap updated + QA checklist green on every page. Then Phase 2 (geo pages + first 2 blog posts). Final launch gate: human supplies real proof data + confirms legal entity name; re-verify Cloudflare allows AI crawlers.

## 7. Handoffs back to the human (build cannot complete without these)
1. Real proof numbers + ≥1 client testimonial → replaces homepage Proof placeholders.
2. Legal entity name for schema `legalName` and legal pages (Saddl vs registered LLC).
3. Approve geo-page draft copy (Task 11) before it ships.
