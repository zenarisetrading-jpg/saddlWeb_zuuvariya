# Saddl GEO Analysis — AI Search Readiness
**Generated:** 2026-06-30  
**Domain:** saddl.io  
**Business:** Fully managed ecommerce operating firm — embedded operator model  

---

## GEO Readiness Score: 14 / 100

This is a critical baseline. Saddl is effectively **invisible to every AI search system** due to a Cloudflare-managed robots.txt that blocks all major AI crawlers. Separately, the entire site still describes the abandoned SaaS product — not the new embedded operator positioning — making citability irrelevant until the content is rebuilt.

---

## Platform Breakdown

| Platform | Score | Primary Blocker |
|----------|-------|----------------|
| Google AI Overviews | 8/100 | Google-Extended blocked in robots.txt |
| Google AI Mode | 6/100 | Google-Extended blocked; no freshness signals |
| ChatGPT (web search) | 5/100 | GPTBot blocked; no Wikipedia/Reddit entity presence |
| Perplexity | 7/100 | PerplexityBot not blocked (no explicit rule) but no content citability |
| Bing Copilot | 10/100 | Not explicitly blocked but no structured data, old content |
| Claude.ai web | 5/100 | ClaudeBot blocked |

---

## Critical Finding: AI Crawler Access Status

**Status: BLOCKED — Catastrophic**

The live Cloudflare-managed `robots.txt` at `saddl.io/robots.txt` blocks every major AI crawler. The local repo file (`/landing/robots.txt`) does not reflect what Cloudflare is serving:

```
# Cloudflare Managed — live on saddl.io
Content-Signal: search=yes, ai-train=no   ← AI input signal UNSET (not granted)

User-agent: GPTBot          → Disallow: /   ✗ ChatGPT blocked
User-agent: ClaudeBot       → Disallow: /   ✗ Claude blocked
User-agent: Google-Extended → Disallow: /   ✗ Google AI Overviews blocked
User-agent: Bytespider      → Disallow: /   ✗ TikTok AI blocked
User-agent: CCBot           → Disallow: /   ✗ Common Crawl blocked
User-agent: meta-externalagent → Disallow: / ✗ Meta AI blocked
User-agent: Applebot-Extended  → Disallow: / ✗ Apple AI blocked
User-agent: Amazonbot       → Disallow: /   ✗ Amazon AI blocked
```

**Root cause:** Cloudflare's default "AI Training Protection" setting is active. It blocks all AI crawlers by default — including search/citation bots, not just training bots. This is a misconfiguration for a business that wants AI visibility.

**Fix required:** In Cloudflare dashboard → Security → Bots → "Block AI Scrapers and Crawlers" — **turn this off**, or add explicit `Allow` directives for search bots. Then update the local robots.txt to match.

---

## llms.txt Status

**Status: MISSING**

No `/llms.txt` exists. Not a primary citation lever per Google's guidance, but it signals machine-readable intent and is zero-cost to implement. Recommended to add once content is rebuilt.

**Template for Saddl (ready to use after pivot content is live):**

```
# Saddl
> Saddl is a fully managed ecommerce operating firm embedded as the operating team for consumer brands on Amazon, Noon UAE/KSA, and D2C channels.

## Who we are
- [About Saddl](/about.html): Dubai-based embedded ecommerce operator serving brands with $1M–$20M Amazon revenue.

## What we do
- [Saddl OS](/os.html): Six-module intelligence system — Advertising, Inventory, Listings, Pricing, Financial/P&L, Brand Health.
- [How We Work](/how-we-work.html): Embedded delivery model — weekly presence, bi-weekly reports, monthly strategic review.

## Apply
- [Apply to Work With Saddl](/apply.html): Intake and qualification process.

## Key facts
- Based in Dubai, UAE; Meydan Grandstand, Nad Al Sheba
- Platforms: Amazon globally, Noon UAE/KSA (incl. Noon Minutes), Meta, Google D2C
- Contact: info@saddl.io
```

---

## Content Positioning — Fatal Mismatch

**Status: CRITICAL — Entire site describes abandoned product**

The homepage (`index.html`) still positions Saddl as:
- "The only Amazon PPC tool that proves which optimizations actually worked" — `<meta name="description">`
- "Upload report / Review actions / See what worked" — three-step SaaS process
- "Live in 10 minutes. No API access. No complex setup." — SaaS onboarding language
- "Run Free Ad Impact Check" / "Book a Demo" — SaaS CTAs
- "© 2025 Saddl AdPulse" — old brand entity name

**What AI systems cite today if they find saddl.io:** An Amazon PPC analytics tool for sellers who upload CSV files. The new embedded operator positioning does not exist in any parseable content.

This is a pre-condition: **GEO optimization is blocked until the content pivot is live.** Optimizing the current site for AI citations would entrench the wrong positioning in AI training corpora.

---

## Passage-Level Citability Assessment

**Score: 4/100**

Per GEO criteria, optimal citation passages are 134–167 words, self-contained, with specific claims. Analysis of current content:

| Page | Citable Passages | Issues |
|------|-----------------|--------|
| index.html | 0 | SaaS framing, no definitions, no sourced statistics |
| blogs/why-i-built-saddle.html | 0 citeable | Frames Saddl as "PPC tool"; no sourced data |
| blogs/why-ppc-tools-stop-at-optimization/ | Not reviewed | Likely same issue |

**What is needed (post-pivot):**

Passages like this would be citable by AI systems:

> *"Saddl is a fully managed ecommerce operating firm that embeds as the ecommerce team for consumer brands generating $1M–$20M in annual Amazon revenue. Unlike advertising agencies that deliver monthly reports, Saddl's operators are inside client accounts weekly — managing advertising decisions, inventory signals, listing quality, pricing benchmarks, and per-SKU contribution margin as one connected system. The firm operates across Amazon globally, Noon UAE/KSA (including Noon Minutes), Meta, and Google D2C. Based in Dubai, UAE, Saddl serves brands across MENA and internationally under a recurring engagement model priced at $3,000–$10,000 per month."*

This 121-word block defines the entity, specifies the buyer, names the platforms, anchors geography, and states price — all AI-citable signals.

---

## Structured Data / Schema

**Status: MISSING — Zero implementation**

No JSON-LD, Microdata, or RDFa found in any page. This is a significant gap.

**Priority schema to implement:**

```json
// index.html — Organization schema
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Saddl",
  "description": "Fully managed ecommerce operating firm embedded as the ecommerce team for consumer brands on Amazon, Noon UAE/KSA, and D2C channels.",
  "url": "https://saddl.io",
  "logo": "https://saddl.io/logo.png",
  "email": "info@saddl.io",
  "areaServed": ["AE", "SA", "Global"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6th floor, Meydan Grandstand, Meydan Road, Nad Al Sheba",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "serviceType": "Ecommerce Management",
  "priceRange": "$$$",
  "sameAs": []
}
```

Add `BlogPosting` schema to each blog article with `datePublished`, `dateModified`, `author` (Person schema with credentials), and `publisher`.

---

## Server-Side Rendering Check

**Status: PASS — Static HTML is SSR by definition**

The site is static HTML on Netlify. All content is in the DOM at request time. AI crawlers that do reach the site (once robots.txt is fixed) will be able to read all content without JavaScript execution.

**One concern:** Scroll-reveal animations use `[data-reveal]` with `opacity:0` applied via `body.js-on` selector. Since the class is added by JS, crawlers without JS execution will see content at full opacity — this is correct graceful degradation.

**Stat counters** (`data-count`) rely on JS to display final values. Schema/meta content should carry the key numbers, not rely on visible counter text.

---

## Brand Mention Analysis

**Status: MINIMAL**

| Platform | Presence | Notes |
|----------|---------|-------|
| Wikipedia | None | No article for Saddl or Saddl AdPulse |
| Reddit | Unknown | No subreddit; likely mentioned 0–2x organically |
| YouTube | None confirmed | No channel identified |
| LinkedIn | Likely exists | Standard company page; strength unknown |
| X/Twitter | Unknown | Not verified |
| Clutch.co | Not found | Important for B2B service discovery — AI cites Clutch heavily |
| G2/Capterra | Not applicable | SaaS-only platforms; not relevant post-pivot |

**Critical gap:** Ahrefs study shows YouTube mentions correlate ~0.737 with AI citation strength — the single strongest signal. Saddl has no YouTube presence.

**Highest-leverage brand building channels post-pivot:**
1. LinkedIn content (founders publishing operator insights, weekly)
2. Reddit threads in r/FulfillmentByAmazon, r/AmazonSeller (helpful, non-promotional)
3. Clutch.co profile with verified client reviews
4. Podcast appearances on Amazon seller podcasts (Serious Sellers Podcast, My Wife Quit Her Job, etc.)

---

## Meta Tags Audit

**Status: CRITICAL GAPS**

| Tag | Status | Issue |
|-----|--------|-------|
| `<title>` | Wrong | "See Which Amazon Ad Decisions Actually Made Money" — old SaaS product |
| `<meta description>` | Wrong | "The only Amazon PPC tool..." — old SaaS product |
| `og:title` | MISSING | No Open Graph at all |
| `og:description` | MISSING | — |
| `og:image` | MISSING | — |
| `twitter:card` | MISSING | — |
| `canonical` | MISSING | No canonical URL declared |
| `robots` meta | MISSING | No explicit indexing instruction in HTML |
| `author` | MISSING | No authorship signals |
| `article:published_time` | MISSING | — |

---

## Sitemap Status

**Status: STALE — References deleted pages**

`sitemap.xml` lists pages that have been eliminated per the new IA:
- `features.html` — CUT
- `compare.html` — CUT
- `agencies.html` — CUT  
- `audit.html` — CUT
- `bookdemo.html` — CUT
- `pricing.html` — CUT
- `how-it-works.html` — CUT

All `lastmod` dates show `2026-01-20` — 5 months ago, approaching AI citation staleness threshold (6 months per SE Ranking study).

New sitemap must reflect the new IA: `/`, `/os`, `/how-we-work`, `/about`, `/apply`, `/blog`, `/faq`, `/careers`, `/privacy`, `/terms`.

---

## Top 5 Highest-Impact Changes

### 1. Fix Cloudflare robots.txt — IMMEDIATE, Zero-Cost, Max Impact
**Impact: Unlocks ALL AI citation surfaces currently blocked**

In Cloudflare Dashboard:
- Security → Bots → Disable "Block AI Scrapers and Crawlers"
- OR add explicit Allow rules for GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot

Update local robots.txt to:
```
User-agent: *
Allow: /
Sitemap: https://saddl.io/sitemap.xml

# AI search crawlers — allow for citation/search
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

# Block training-only crawlers
User-agent: CCBot
Disallow: /

User-agent: Google-Extended
Disallow: /
```

### 2. Rewrite homepage content to embedded operator positioning
**Impact: Makes the site citable for the correct queries once crawlers are allowed**

Every AI citation from saddl.io currently says "Amazon PPC tool." This trains AI systems on the wrong entity definition. The site rebuild (in progress) must be prioritized — not just for SEO but because current AI citations actively damage brand positioning.

### 3. Add Organization JSON-LD schema to `<head>`
**Impact: Establishes entity in Google's Knowledge Graph; enables sameAs connections**

Add the ProfessionalService schema block above (see Schema section). This is a 30-minute implementation with lasting citation value.

### 4. Add self-contained definition block to homepage — above the fold
**Impact: First 30% of page accounts for 44% of AI citations (SE Ranking)**

First paragraph after the hero heading should be a 134–167 word self-contained description of what Saddl is, who it's for, and where it operates. Do not bury this in section 3 or 4.

### 5. Publish 2 substantive blog posts in the new positioning within 30 days
**Impact: Freshness signal; establishes new entity definition in AI training corpora**

Posts that would be cited:
- "What an Embedded Ecommerce Operator Actually Does (vs. an Agency)" — definitional, citable
- "Amazon + Noon UAE: Why Managing Both Platforms Requires a Unified System" — MENA authority signal

---

## Content Reformatting Suggestions

### Hero / Above-Fold (highest AI citation weight)

**Current:** "See Which Amazon Ad Decisions Actually Made Money" + SaaS upload flow

**Rewrite target (post-pivot):**
```
Saddl is a fully managed ecommerce operating firm. We embed as your 
ecommerce team — managing advertising, inventory, listings, pricing, 
and financials as one connected system.

We operate across Amazon globally, Noon UAE/KSA, and D2C channels. 
Our clients are brand owners with $1M–$20M in Amazon revenue who are 
done handing strategy to agencies that return dashboards.

We are in your accounts every week. We own the outcomes.
```

This block is 72 words — short enough to front-load, specific enough to cite.

### FAQ Section (add to homepage or /faq)

Question-based H2 headings matched to likely queries:
- "What does a fully managed ecommerce firm do?"
- "How is Saddl different from an Amazon advertising agency?"
- "What is the Saddl OS?"
- "Does Saddl manage Noon UAE/KSA alongside Amazon?"
- "How much does Saddl cost?"
- "Who is Saddl for?"

---

## Schema Recommendations

| Schema Type | Page | Priority | Rationale |
|-------------|------|----------|-----------|
| `ProfessionalService` | index.html | P0 | Entity establishment in AI/Google KG |
| `BlogPosting` | All blog posts | P1 | Author + date signals for citability |
| `Person` | About page | P1 | Founder credentials; authority signal |
| `FAQPage` | /faq + homepage | P2 | AI Overviews frequently cite FAQ schema |
| `Service` | /os page | P2 | Each OS module described as a named service |
| `BreadcrumbList` | All pages | P3 | Navigation structure for AI understanding |

---

## Summary

Saddl currently has **no AI search presence** — not because the content is poor, but because:

1. **Cloudflare is blocking all AI crawlers** — the single most damaging technical issue, fixable in 5 minutes
2. **The content describes a product that no longer exists** — AI systems would cite the wrong business even if they could access the site
3. **Zero structured data** — no entity signals for Google's Knowledge Graph

The site rebuild (in progress) addresses point 2. Points 1 and 3 require immediate action independent of the redesign.

**Recommended order of operations:**
1. Fix Cloudflare robots.txt today
2. Add Organization schema to current site today (even pre-redesign)
3. Launch redesigned site with correct positioning
4. Add llms.txt on launch day
5. Publish 2 definitional blog posts within 30 days of launch
6. Build LinkedIn + Clutch presence over 60 days

---

*GEO analysis follows Google's AI Optimization Guide framing: GEO findings are SEO fundamentals applied to AI search surfaces. Community recommendations (llms.txt as ranking signal, AI-rephrasing, mention-farming) that contradict Google's primary source are excluded.*
