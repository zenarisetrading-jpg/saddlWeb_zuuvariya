---
name: Saddl Design System
version: 3.0
register: brand
bg: oklch(0.975 0.005 80)
card: oklch(1.000 0.000 0)
primary: oklch(0.420 0.100 165)
---

# Saddl Design System — The Operator's Ledger

**North star:** An operating firm's control room. Precise, layered, authoritative. The page feels like the inside of a well-run operation: information at depth, decisions visible, confidence tangible.

**Aesthetic lane:** CollectiveOS-structure × Operator-authority. Bold centered display typography, floating dark navigation, hero product panel that breaks section boundaries, dark feature grid with icon tiles, white proof cards elevated on warm neutral. NOT editorial-typographic. NOT SaaS-cream-minimal.

**Visual reference:** https://collectiveos.vercel.app — adopt structure, spacing, component depth, and section rhythm. Replace fonts with Saddl triple; replace color with Jade + Ink.

---

## 1. Color

### Strategy: Committed
Jade carries the brand. Dark/surface alternation creates section rhythm. White is for elevated cards only — never for section backgrounds.

| Token | Value | Use |
|---|---|---|
| `--jade` | `oklch(0.420 0.100 165)` | Brand accent, CTAs, stars, icon tints ≤20% |
| `--jade-dark` | `oklch(0.340 0.090 165)` | Hover / pressed |
| `--jade-mist` | `oklch(0.780 0.065 165)` | Icon color on dark bg |
| `--ink` | `oklch(0.100 0.015 80)` | Primary text |
| `--ink-deep` | `oklch(0.072 0.012 80)` | Dark sections bg |
| `--surface` | `oklch(0.975 0.005 80)` | Primary light bg (Ledger Sheet) |
| `--card` | `oklch(1.000 0.000 0)` | Cards only — never sections |
| `--card-dark` | `oklch(0.115 0.012 80)` | Cards on dark bg |
| `--muted` | `oklch(0.500 0.008 80)` | Secondary text |
| `--hairline` | `oklch(0.900 0.005 80)` | Light dividers / card borders |
| `--hairline-d` | `oklch(1 0 0 / 0.07)` | Dark bg dividers |

### Section rhythm
Hero → surface | How We Engage → surface (white cards) | Saddl OS → ink-deep | Proof → surface (white cards) | FAQ → card | Apply → ink-deep | Footer → ink

---

## 2. Typography

| Role | Family | Weight | Use |
|---|---|---|---|
| Display | Bricolage Grotesque | 800 | Hero headline ONLY |
| Headline | Gloock | 400 | All section h2s |
| UI Title | Bricolage Grotesque | 600–700 | Card titles, nav labels |
| Body | Bricolage Grotesque | 400 | All prose |
| Data | Fragment Mono | 400 | Numbers, metrics, timestamps, step labels |

### Fluid scale
```
display:   clamp(3.25rem, 7vw, 6rem)       letter-spacing: -0.03em
headline:  clamp(1.875rem, 3.8vw, 3rem)    letter-spacing: -0.02em
title:     clamp(1.0625rem, 1.8vw, 1.25rem) letter-spacing: -0.01em
body-lg:   1.125rem
body:      1rem
small:     0.875rem
data:      0.8125rem (mono)
micro:     0.6875rem (mono/sans)
```

Body max-width: 65ch. Dark bg: add 0.05 to line-height. text-wrap: balance on h1–h3.

---

## 3. Radius & Shadow

### Radius
```
--r-sm:  8px   secondary buttons, inner chips
--r-md:  10px  primary buttons
--r-nav: 16px  floating nav
--r-card: 20px  all cards
--r-panel: 24px  hero OS panel
```

### Shadow system
```css
/* Light bg cards */
--shadow-card:
  0 1px 2px oklch(0 0 0 / 0.03),
  0 4px 8px oklch(0 0 0 / 0.05),
  0 16px 32px -8px oklch(0 0 0 / 0.09);

/* Light bg cards on hover */
--shadow-card-hover:
  0 2px 4px oklch(0 0 0 / 0.05),
  0 12px 24px oklch(0 0 0 / 0.09),
  0 32px 64px -16px oklch(0 0 0 / 0.13);

/* Hero OS panel */
--shadow-panel:
  0 8px 24px oklch(0 0 0 / 0.12),
  0 40px 80px -20px oklch(0 0 0 / 0.28),
  0 80px 120px -40px oklch(0 0 0 / 0.16),
  inset 0 0 0 1px oklch(1 0 0 / 0.07);

/* Floating nav */
--shadow-nav:
  0 2px 8px oklch(0 0 0 / 0.12),
  0 8px 24px oklch(0 0 0 / 0.10);
```

---

## 4. Components

### Floating Nav (dark pill, always fixed)
Background: `oklch(0.10 0.012 80)` · Radius: 16px · Top: 16px · Width: calc(100% - 48px) · Max: 1100px
Links: white/60% opacity → white/90% on hover. CTA: white bg, dark text, 10px radius.

### Buttons
- Primary: jade bg, white text, 10px radius, 14px 32px padding, 600 weight
- Secondary: transparent bg, 1.5px `--hairline` border, ink text, 10px radius
- Dark-ghost: transparent, 1.5px white/25% border, white text

### Hero OS Panel (section overflow)
```
section.s-hero { overflow: visible }
.hero-panel {
  position: relative; z-index: 10;
  margin: 3.5rem auto -200px;  /* overflow down into next section */
  max-width: 960px;
  background: linear-gradient(145deg, oklch(0.10 0.012 80), oklch(0.072 0.012 80));
  border-radius: 24px; overflow: hidden;
  box-shadow: var(--shadow-panel);
  animation: panel-enter 1.2s var(--spring) 0.5s both;
}
.s-after-hero { padding-top: calc(200px + clamp(3rem,6vw,5rem)); }
```

Internal structure: chrome bar (3 dot circles + title + Live badge) → two-column (sidebar nav + main decision feed with stats row).

### Icon Tile
48×48px, 10px radius, `oklch(1 0 0 / 0.08)` bg, `var(--jade-mist)` icon color.
SVG icons: 20×20, stroke="currentColor", stroke-width="1.5", fill="none".

### Step Card (white elevated on surface)
20px radius, `var(--shadow-card)`, `1px solid var(--hairline)`. Step label: Fragment Mono, jade. Title: Bricolage 700. Jade bar ::after that scales in on hover.

### Module Card (on ink-deep)
`var(--card-dark)` bg, `1px var(--hairline-d)` border, 20px radius. Icon tile at top. Heading: white, Bricolage 700. Desc: white/55%. Divider: `var(--hairline-d)`. Data: Fragment Mono, white/30%.

### Proof Card (white elevated on surface)
20px radius, `var(--shadow-card)`. Stars: `★★★★★` in jade color. Quote: Bricolage 400, ink. Avatar: 36px circle, jade bg, white initials. Flex column, attribution row at bottom.

### FAQ Accordion
`border-top: 1px solid var(--hairline)` between items on white bg. Question: Bricolage 600. Toggle: `+` / `×` in jade, rotates 45° when open. Answer: max-height transition, `var(--spring)`.

---

## 5. Hero Stripe Texture
```css
background-image: repeating-linear-gradient(
  90deg, transparent, transparent 79px,
  oklch(0 0 0 / 0.022) 79px, oklch(0 0 0 / 0.022) 80px
);
```

---

## 6. Motion

```css
--spring:     cubic-bezier(0.16, 1, 0.3, 1);
--ease-out:   cubic-bezier(0.22, 1, 0.36, 1);
```

| Element | Animation | Notes |
|---|---|---|
| Hero headline words | stagger word-enter 0.9s spring, 80ms per word | Each word wrapped in span |
| Hero subtext | fade-up 0.8s spring, delay 400ms | |
| Hero CTAs | fade-up 0.7s spring, delay 600ms | |
| OS Panel | panel-enter (translateY 40px + scale 0.98) 1.2s spring, delay 500ms | |
| Scroll sections | [data-reveal] fade-up 0.8s spring, threshold 0.10 | |
| Staggered card grids | `data-d="0/1/2"` adds 80ms delay per card | |
| Ticker | linear scroll 30s, pauses on hover | |
| Card hover | translateY(-4px) + shadow-hover 0.4s spring | |
| FAQ open | max-height transition 0.5s spring | |

---

## 7. Anti-patterns (banned)

- Flat navbars edge-to-edge (must float)
- Split-plane hero without panel overflow depth
- Identical info-card grids without icon tiles on dark sections
- Section-level badge chips repeated on every section (≤2 per page)
- Cream/warm bg used for entire page (surface is structural neutral, not decorative warmth)
- Cards without multi-layer shadow on light bg
- Gradient text (`background-clip: text`)
- Glassmorphism for decoration
- Bounce or elastic easing
- Section-level fade-in as the uniform reflex (vary per section)
- Ghost numerals as general scaffolding
- Side-stripe card borders (never border-left as accent)
- Fragment Mono for headings or UI copy (data values only)
