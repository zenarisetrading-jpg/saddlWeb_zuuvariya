import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

new_sections = '''
  <!-- Ticker -->
  <div class="overflow-hidden py-3" style="background: var(--jade);" aria-hidden="true">
    <div class="flex gap-16 whitespace-nowrap" style="animation: ticker-scroll 32s linear infinite;">
      <span class="font-mono text-[13px] text-white/90 flex items-center gap-3">Advertising Intelligence <span class="text-white/40">·</span> +$1,250 validated</span>
      <span class="font-mono text-[13px] text-white/90 flex items-center gap-3">Inventory Intelligence <span class="text-white/40">·</span> Reorder — 47 units · ETA 18d</span>
      <span class="font-mono text-[13px] text-white/90 flex items-center gap-3">Listing & Content <span class="text-white/40">·</span> BSR 4,821 → 3,209</span>
      <span class="font-mono text-[13px] text-white/90 flex items-center gap-3">Financial P&L <span class="text-white/40">·</span> True CM $4,103 (22.3%)</span>
      <span class="font-mono text-[13px] text-white/90 flex items-center gap-3">Brand Health <span class="text-white/40">·</span> 3 suppressions resolved</span>
      <span class="font-mono text-[13px] text-white/90 flex items-center gap-3">Pricing Intelligence <span class="text-white/40">·</span> Buy Box held 94%</span>
      <span class="font-mono text-[13px] text-white/90 flex items-center gap-3">Advertising Intelligence <span class="text-white/40">·</span> +$1,250 validated</span>
      <span class="font-mono text-[13px] text-white/90 flex items-center gap-3">Inventory Intelligence <span class="text-white/40">·</span> Reorder — 47 units · ETA 18d</span>
      <span class="font-mono text-[13px] text-white/90 flex items-center gap-3">Listing & Content <span class="text-white/40">·</span> BSR 4,821 → 3,209</span>
      <span class="font-mono text-[13px] text-white/90 flex items-center gap-3">Financial P&L <span class="text-white/40">·</span> True CM $4,103 (22.3%)</span>
      <span class="font-mono text-[13px] text-white/90 flex items-center gap-3">Brand Health <span class="text-white/40">·</span> 3 suppressions resolved</span>
      <span class="font-mono text-[13px] text-white/90 flex items-center gap-3">Pricing Intelligence <span class="text-white/40">·</span> Buy Box held 94%</span>
    </div>
  </div>

  <!-- Section 3: How We Engage -->
  <section class="s-xl tex-ledger grain" style="padding-top: 5rem;">
    <div class="wrap">
      <div class="text-center mb-16 reveal">
        <h2 class="t-headline mt-4">Three steps from audit to operator.</h2>
        <p class="t-body-lg text-[var(--muted)] mt-2">You shouldn't have to change much. We embed around what you already have.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <!-- Step 01 -->
        <div class="step-card reveal" style="transition-delay: 0.1s;">
          <span class="step-num">STEP 01</span>
          <h3 class="text-xl font-bold text-[var(--ink)] mb-3" style="font-family: var(--font-body)">Diagnostic</h3>
          <p class="text-[var(--muted)] text-sm mb-6 leading-relaxed">We run a free account diagnostic. Read-only access. Contribution margin gaps, attribution blind spots, and inventory exposure surfaced within 48 hours. No commitment required.</p>
          <div class="bg-[var(--surface)] border border-[var(--hairline)] rounded-lg p-4">
            <div class="t-data text-xs text-[var(--muted)]">48h turnaround · read-only · Amazon + Noon + D2C</div>
          </div>
        </div>

        <!-- Step 02 -->
        <div class="step-card reveal" style="transition-delay: 0.2s;">
          <span class="step-num">STEP 02</span>
          <h3 class="text-xl font-bold text-[var(--ink)] mb-3" style="font-family: var(--font-body)">Brief</h3>
          <p class="text-[var(--muted)] text-sm mb-6 leading-relaxed">You receive a full account brief: what's working, what isn't, and what we'd do differently from week one. A decision point — not a sales call. No pressure, no follow-up sequence.</p>
          <div class="bg-[var(--surface)] border border-[var(--hairline)] rounded-lg p-4">
            <div class="t-data text-xs text-[var(--muted)]">Full account brief · decision point · no commitment</div>
          </div>
        </div>

        <!-- Step 03 -->
        <div class="step-card reveal" style="transition-delay: 0.3s;">
          <span class="step-num">STEP 03</span>
          <h3 class="text-xl font-bold text-[var(--ink)] mb-3" style="font-family: var(--font-body)">Embed</h3>
          <p class="text-[var(--muted)] text-sm mb-6 leading-relaxed">Saddl OS goes live on your accounts. Weekly decisions, bi-weekly reports, monthly P&L reconciliation. You stop managing. We start running.</p>
          <div class="bg-[var(--surface)] border border-[var(--hairline)] rounded-lg p-4">
            <div class="t-data text-xs text-[var(--muted)]">Weekly decisions · bi-weekly reports · monthly P&L</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: Saddl OS -->
  <section class="s-modules tex-deep grain">
    <div class="wrap">
      <div class="text-center mb-16 reveal">
        <h2 class="t-headline mt-4" style="color: white;">Six intelligence layers.</h2>
        <p class="t-body-lg text-white/70 mt-2">Built for the data that matters — contribution margin per SKU, not vanity metrics.</p>
        <div class="t-data text-white/40 mt-6">Amazon (Global) · Noon UAE/KSA incl. Minutes · Meta · Google</div>
      </div>

      <div class="modules-grid">
        <div class="module-card reveal">
          <div class="icon-tile">◆</div>
          <h3 class="text-white font-bold text-lg mb-2">Advertising Intelligence</h3>
          <p class="text-white/60 text-sm mb-6 flex-1">SP, SB, SD campaigns managed and validated. Every bid change tracked to a revenue delta.</p>
          <div class="t-data text-[11px] text-white/40 border-t border-[var(--hairline-d)] pt-3">Jun 12 · bid +22% · +$1,250 validated · 14-day window</div>
        </div>

        <div class="module-card reveal" style="transition-delay: 0.1s">
          <div class="icon-tile">◆</div>
          <h3 class="text-white font-bold text-lg mb-2">Inventory Intelligence</h3>
          <p class="text-white/60 text-sm mb-6 flex-1">Reorder forecasting, FBA fee optimisation, stockout prevention. Contribution margin per unit.</p>
          <div class="t-data text-[11px] text-white/40 border-t border-[var(--hairline-d)] pt-3">B08X · 47 units · reorder triggered · ETA 18d</div>
        </div>

        <div class="module-card reveal" style="transition-delay: 0.2s">
          <div class="icon-tile">◆</div>
          <h3 class="text-white font-bold text-lg mb-2">Listing & Content</h3>
          <p class="text-white/60 text-sm mb-6 flex-1">AI-generated copy optimised for search and conversion. A+, brand store, video briefs. Continuously tested.</p>
          <div class="t-data text-[11px] text-white/40 border-t border-[var(--hairline-d)] pt-3">Listing update deployed · rank +12 · BSR 4,821→3,209</div>
        </div>

        <div class="module-card reveal">
          <div class="icon-tile">◆</div>
          <h3 class="text-white font-bold text-lg mb-2">Pricing Intelligence</h3>
          <p class="text-white/60 text-sm mb-6 flex-1">Competitive monitoring, Buy Box optimisation, promotional ROI modelling against real margin.</p>
          <div class="t-data text-[11px] text-white/40 border-t border-[var(--hairline-d)] pt-3">Buy Box 94% · competitor −$1.40 · margin floor: met</div>
        </div>

        <div class="module-card reveal" style="transition-delay: 0.1s">
          <div class="icon-tile">◆</div>
          <h3 class="text-white font-bold text-lg mb-2">Financial Intelligence & P&L</h3>
          <p class="text-white/60 text-sm mb-6 flex-1">True contribution margin per SKU: COGS, FBA fees, ad spend, returns. No rounding, no omissions.</p>
          <div class="t-data text-[11px] text-white/40 border-t border-[var(--hairline-d)] pt-3">Revenue $18,420 · true CM $4,103 (22.3%) · dashboard CM $6,210</div>
        </div>

        <div class="module-card reveal" style="transition-delay: 0.2s">
          <div class="icon-tile">◆</div>
          <h3 class="text-white font-bold text-lg mb-2">Brand Health</h3>
          <p class="text-white/60 text-sm mb-6 flex-1">Review velocity, listing suppression, hijacker detection, BSR trends. Issues resolved, not reported.</p>
          <div class="t-data text-[11px] text-white/40 border-t border-[var(--hairline-d)] pt-3">3 suppressions · 2 resolved · 1 escalated · reviews +8</div>
        </div>
      </div>

      <div class="text-center mt-12 reveal">
        <a href="saddl-os.html" class="font-bold text-[var(--jade-mist)] hover:text-white underline-offset-4 hover:underline transition-all">Explore Saddl OS &rarr;</a>
      </div>
    </div>
  </section>

  <!-- Section 5: Proof -->
  <section class="s-xl tex-ledger grain">
    <div class="wrap">
      <div class="text-center mb-16 reveal">
        <h2 class="t-headline mt-4">Specifics, not promises.</h2>
        <p class="t-body-lg text-[var(--muted)] mt-2">Real outcomes from brands we operate. Names withheld by request.</p>
      </div>

      <div class="proof-grid mb-16">
        <div class="proof-card reveal" style="transition-delay: 0.1s">
          <div class="proof-quote-bg">"</div>
          <div class="star-row text-[var(--jade)] mb-3 text-lg tracking-widest">★★★★★</div>
          <q>"We hadn't seen our true contribution margin until Saddl ran the reconciliation. The number was $2.10 lower per unit than we thought — on 4,000 units a month."</q>
          <div class="proof-author mt-6 flex items-center gap-3">
            <div class="proof-avatar w-9 h-9 rounded-full bg-[var(--jade)] text-white text-[10px] font-bold flex items-center justify-center">CE</div>
            <div class="proof-attr"><span class="proof-name font-semibold text-sm text-[var(--ink)]">Consumer electronics brand</span><br><span class="proof-co text-xs text-[var(--muted)]">Amazon UAE · Q1 2026</span></div>
          </div>
        </div>

        <div class="proof-card reveal" style="transition-delay: 0.2s">
          <div class="proof-quote-bg">"</div>
          <div class="star-row text-[var(--jade)] mb-3 text-lg tracking-widest">★★★★★</div>
          <q>"The inventory call saved us $38,000 in storage fees. They flagged it before we'd even thought about Q4 planning. Nobody else was watching that number."</q>
          <div class="proof-author mt-6 flex items-center gap-3">
            <div class="proof-avatar w-9 h-9 rounded-full bg-[var(--jade)] text-white text-[10px] font-bold flex items-center justify-center">HK</div>
            <div class="proof-attr"><span class="proof-name font-semibold text-sm text-[var(--ink)]">Home & kitchen brand</span><br><span class="proof-co text-xs text-[var(--muted)]">Amazon KSA + Noon · Q4 2025</span></div>
          </div>
        </div>

        <div class="proof-card reveal" style="transition-delay: 0.3s">
          <div class="proof-quote-bg">"</div>
          <div class="star-row text-[var(--jade)] mb-3 text-lg tracking-widest">★★★★★</div>
          <q>"Six weeks in, ACoS dropped from 31% to 19%. Not because we cut spend — because every bid decision was validated against real contribution margin."</q>
          <div class="proof-author mt-6 flex items-center gap-3">
            <div class="proof-avatar w-9 h-9 rounded-full bg-[var(--jade)] text-white text-[10px] font-bold flex items-center justify-center">HB</div>
            <div class="proof-attr"><span class="proof-name font-semibold text-sm text-[var(--ink)]">Health & beauty brand</span><br><span class="proof-co text-xs text-[var(--muted)]">Amazon Global · Q2 2026</span></div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-6 t-data text-[var(--ink)] text-[13px] font-semibold tracking-wider reveal">
        <span>[figure] decisions logged</span>
        <span class="text-[var(--hairline)]">|</span>
        <span>[figure] brands operated</span>
        <span class="text-[var(--hairline)]">|</span>
        <span>[figure] decision accuracy</span>
        <span class="text-[var(--hairline)]">|</span>
        <span>[figure] reorder windows missed</span>
      </div>
    </div>
  </section>

  <!-- Section 6: FAQ -->
  <section class="s-modules tex-deep grain">
    <div class="wrap max-w-4xl mx-auto">
      <div class="text-center mb-12 reveal">
        <h2 class="t-headline" style="color: white">What you're probably wondering.</h2>
      </div>

      <div class="bg-[var(--card)] rounded-[var(--r-card)] shadow-[var(--shadow-card)] overflow-hidden reveal">
        <div class="faq-item">
          <button class="faq-question">
            Is this a retainer or a managed service?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            Neither label fits exactly. We embed as your operating team — present in your accounts every week, making decisions, owning outcomes. Retainers imply advice. Managed services imply outsourcing. We call it embedding because that's what it is.
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-question">
            Do we need to give you access to our Amazon account?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            Yes — operator-level access to Seller Central and Advertising Console. We cannot make decisions in your accounts without it. All access is scoped to what Saddl OS requires and fully logged.
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-question">
            How quickly do you see results?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            Diagnostic surfaces issues in 48 hours. Advertising decisions show validated impact in 14–21 days. Inventory decisions show in the reorder cycle. P&L clarity shows in the first monthly reconciliation. We don't promise timelines — we promise accountability for what the numbers show.
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-question">
            What happens if we want to stop?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            30-day notice, clean handover. Your accounts, your data, always yours. We document everything we've done and why. You leave knowing exactly what the system was doing and how to continue it.
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-question">
            Do you work with brands outside MENA?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            Yes. We operate accounts globally on Amazon. Our edge in MENA is Noon UAE/KSA expertise including Noon Minutes — which most global agencies don't have. For brands with Amazon global and Noon presence, we run both as one system.
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-question">
            What does it cost?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            Pricing is based on account complexity, platform count, and scope — discussed after the diagnostic. We don't publish pricing because a $2M Amazon-only brand and a $15M Amazon + Noon + D2C brand are different engagements. Apply first. We'll tell you exactly what it costs before you commit to anything.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 7: Apply -->
  <section class="s-apply tex-ledger grain">
    <div class="wrap text-center max-w-3xl mx-auto py-16 reveal">
      <h2 class="t-headline">Your accounts are running right now.</h2>
      <p class="t-body-lg text-[var(--muted)] mt-4 mb-8">The question is whether someone accountable is running them.</p>
      
      <div class="mb-10">
        <a href="apply.html" class="btn btn-jade px-8 py-4 text-lg">Apply</a>
      </div>

      <p class="t-data text-xs text-[var(--muted)] max-w-2xl mx-auto">
        Right for brands with $1M–$20M revenue · Amazon · Noon UAE/KSA · Meta · Google
      </p>
    </div>
  </section>
'''

# Find the end of Section 1 (Hero) and replace everything up to Footer
pattern = r'(<!-- Section 3: How We Engage -->|<!-- Section 2: Definitional Block \(s-after-hero\) -->).*?(?=<!-- Footer -->)'
content = re.sub(pattern, new_sections + '\n\n  ', content, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()
if '@keyframes ticker-scroll' not in css:
    css += '\n\n/* Ticker Animation */\n@keyframes ticker-scroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }\n'
    with open('styles.css', 'w', encoding='utf-8') as f:
        f.write(css)

print('Restored and updated index.html!')
