# AGENTS.md — Saddl Website Build Rules

> Rules file for AI coding agents (Antigravity, Cursor, Claude Code, etc.) working in this repo.
> Read this before every task. These rules override any conflicting instinct. When unsure, stop and ask the human — do not guess on brand, legal, or proof content.

## Project in one line
Build the new Saddl marketing site: a fully managed, multi-marketplace ecommerce operating firm (Amazon, Noon incl. Noon Minutes, Walmart, D2C). NOT the old "Saddl AdPulse" PPC SaaS tool.

## Read-first source of truth (do not deviate)
1. `EXECUTION-GUIDE.md` — the build plan and per-page tasks. Follow it in order.
2. `saddl_website_copy_FINAL.md` — the ONLY approved copy. Use it verbatim; do not invent marketing copy.
3. `DESIGN.md` — the design system. Every visual choice comes from here.
4. `PRODUCT.md` — voice/register + homepage section spec.
5. `HANDOVER.md` — background context and decisions.

## Hard guardrails (never violate)
- **Never** reintroduce "AdPulse", "Amazon PPC tool", "Decision intelligence for Amazon PPC", "upload your report", "Book a Demo", or "© 2025". The old positioning is dead.
- **Never fabricate proof.** Proof numbers, client quotes, and aggregate stats stay as clearly-marked placeholders (leave the ⚠️/`[figure]` markers visible in a code comment) until the human supplies real data. Do not invent figures.
- **Canonical term is "audit"** — never "diagnostic". Primary CTA everywhere: "Request an account audit".
- **Do NOT build** `/vs/` comparison pages or a `/pricing` page. They were deliberately cut. Pricing is never published.
- **Entity = "Saddl".** Address: Meydan Grandstand, Nad Al Sheba, Dubai, UAE. Email: info@saddl.io. Footer: © 2026 Saddl.
- **Six modules, exact names:** Advertising Intelligence, Inventory Intelligence, Listing & Content, Pricing Intelligence, Financial Intelligence & P&L, Brand Health. (Returns lives inside Brand Health; Reporting lives in Services — not separate modules.)
- **Two distinct sections:** Saddl OS = Solutions (what the system does) · Services = engagement (how we operate it). Keep them separate.
- Do not touch `_archive/` (retired pages) or `OpenMontage/` (unrelated project).

## Tech + conventions
- Static HTML + Tailwind (CDN) + `styles.css`. No framework, no build step. Deploy: Netlify (`netlify.toml` handles redirects — don't remove them).
- Fonts (per DESIGN.md): **Gloock** (section headlines/H2), **Bricolage Grotesque** (display/body/UI), **Fragment Mono** (data/metrics/timestamps only — never for headings or prose).
- Follow `DESIGN.md` tokens exactly (Jade + Ink palette, radii, shadows, motion). The banned anti-patterns in `DESIGN.md §7` are enforced.
- Every page: valid `<title>`, `<meta description>`, canonical, OG/Twitter tags (values in `saddl_website_copy_FINAL.md` per page), and the appropriate JSON-LD schema.
- Mobile-first, responsive, WCAG 2.1 AA. Reduced-motion fallback for all entrance animations.

## Definition of done (per page)
Copy matches FINAL doc · styled per DESIGN.md · SEO tags + schema present · responsive · no old-positioning strings · no fabricated data · links resolve to real files.

## When to STOP and ask the human
- Any need for a real number, client name, or testimonial.
- Legal entity name for schema `legalName` (Saddl vs registered LLC).
- Anything not covered by the source files above.
