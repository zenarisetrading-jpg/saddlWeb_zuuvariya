import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

new_content = content
new_content = re.sub(r'<!-- Section 2: Definitional Block \(s-after-hero\) -->.*?<!-- Section 3: How We Engage -->', '<!-- Section 3: How We Engage -->', new_content, flags=re.DOTALL)

# Section 3
new_content = new_content.replace('Audit</h3>', 'Diagnostic</h3>')
new_content = new_content.replace('We run a free account audit. Read-only access. We surface contribution-margin gaps, attribution blind spots, and inventory exposure within 48 hours. No commitment.', 'We run a free account diagnostic. Read-only access. Contribution margin gaps, attribution blind spots, and inventory exposure surfaced within 48 hours. No commitment required.')
new_content = new_content.replace("You receive a full account brief: what's working, what isn't, and what we'd do differently from week one. This is a decision point, not a sales call.", "You receive a full account brief: what's working, what isn't, and what we'd do differently from week one. A decision point — not a sales call. No pressure, no follow-up sequence.")
new_content = new_content.replace('We embed. Saddl OS goes live on your accounts. Weekly decisions, biweekly reports, monthly P&L reconciliation. You stop managing. We start running.', 'Saddl OS goes live on your accounts. Weekly decisions, bi-weekly reports, monthly P&L reconciliation. You stop managing. We start running.')
new_content = new_content.replace('<div class="t-data text-xs text-[var(--muted)] break-all mb-2">ASIN B08XYZABC · CPC $1.24 · ACoS 38.4% · TACoS 18.2%</div>\n            <div class="t-data text-xs text-red-500 font-bold">GAP: contribution margin not computed</div>', '<div class="t-data text-xs text-[var(--muted)]">48h turnaround · read-only · Amazon + Noon + D2C</div>')
new_content = new_content.replace('<div class="t-data text-xs text-[var(--jade)] mb-1">What\'s working: Brand defense indexing</div>\n            <div class="t-data text-xs text-red-500 mb-1">What\'s broken: OOS risk on top 3 SKUs</div>\n            <div class="t-data text-xs text-blue-500">Week-one actions: Reprioritize ad spend</div>', '<div class="t-data text-xs text-[var(--muted)]">Full account brief · decision point · no commitment</div>')
new_content = new_content.replace('<div class="t-data text-xs text-[var(--muted)] mb-1">Jun 12 · 14:47 · Adv Intelligence</div>\n            <div class="t-data text-[13px] text-[var(--ink)] font-bold mb-1">SB bid +22% · Expected +$840/wk</div>\n            <div class="t-data text-xs text-[var(--jade)]">Status: monitoring</div>', '<div class="t-data text-xs text-[var(--muted)]">Weekly decisions · bi-weekly reports · monthly P&L</div>')

# Section 4
new_content = new_content.replace('One operating system. Six intelligence layers.', 'Six intelligence layers.')
new_content = new_content.replace('Amazon (Global) · Noon UAE/KSA incl. Minutes · Walmart · Meta · Google', 'Amazon (Global) · Noon UAE/KSA incl. Minutes · Meta · Google')
new_content = new_content.replace('Campaign architecture, bid optimisation, and keyword strategy across every channel — every decision inventory-aware and margin-aware, not ROAS in isolation.', 'SP, SB, SD campaigns managed and validated. Every bid change tracked to a revenue delta.')
new_content = new_content.replace('Continuous SKU tracking, OOS-risk flags, and reorders sized against real velocity, not habit.', 'Reorder forecasting, FBA fee optimisation, stockout prevention. Contribution margin per unit.')
new_content = new_content.replace('B08XYZABC · 47 units left · reorder signal triggered · ETA 18 days', 'B08X · 47 units · reorder triggered · ETA 18d')
new_content = new_content.replace('AI-assisted content with operator judgment: correct browse-node classification, full keyword architecture, A+ built for rank and conversion.', 'AI-generated copy optimised for search and conversion. A+, brand store, video briefs. Continuously tested.')
new_content = new_content.replace('Listing update deployed · rank Δ +12 · BSR 4,821 → 3,209', 'Listing update deployed · rank +12 · BSR 4,821→3,209')
new_content = new_content.replace('Competitive monitoring with break-even and margin-floor analysis, so you know exactly how far you can move before price eats profit.', 'Competitive monitoring, Buy Box optimisation, promotional ROI modelling against real margin.')
new_content = new_content.replace('Buy Box hold 94% · competitor Δ -$1.40 · held — margin floor met', 'Buy Box 94% · competitor −$1.40 · margin floor: met')
new_content = new_content.replace('Settlement-level contribution margin per SKU after fees, fulfilment, storage, promotions, and ad spend. The real number, not the dashboard number.', 'True contribution margin per SKU: COGS, FBA fees, ad spend, returns. No rounding, no omissions.')
new_content = new_content.replace('B08XYZABC · rev $18,420 · true CM $4,103 (22.3%) · dashboard CM $6,210', 'Revenue $18,420 · true CM $4,103 (22.3%) · dashboard CM $6,210')
new_content = new_content.replace('Returns root-cause, review velocity, and rating integrity as one diagnostic — managed proactively, not discovered after the damage.', 'Review velocity, listing suppression, hijacker detection, BSR trends. Issues resolved, not reported.')
new_content = new_content.replace('3 suppressed listings · 2 resolved · 1 escalated · reviews +8 this week', '3 suppressions · 2 resolved · 1 escalated · reviews +8')

# Section 5
new_content = new_content.replace('Real figures from brands we operate. Names withheld by request — outcomes are the point.', 'Real outcomes from brands we operate. Names withheld by request.')
new_content = new_content.replace('It was $2.10 lower per unit than we thought', 'The number was $2.10 lower per unit than we thought')
new_content = new_content.replace('Consumer electronics, Amazon UAE', '<span class="proof-name">Consumer electronics brand</span><br><span class="proof-co text-[var(--muted)]">Amazon UAE · Q1 2026</span>')
new_content = new_content.replace("The inventory call saved us ~AED 38,000 in storage fees we were about to rack up — flagged before we'd even started Q4 planning.", "The inventory call saved us $38,000 in storage fees. They flagged it before we'd even thought about Q4 planning. Nobody else was watching that number.")
new_content = new_content.replace('Home & kitchen, Amazon KSA + Noon', '<span class="proof-name">Home & kitchen brand</span><br><span class="proof-co text-[var(--muted)]">Amazon KSA + Noon · Q4 2025</span>')
new_content = new_content.replace('Six weeks in, ACoS dropped from 31% to 19% — not because we cut spend, because every bid was validated.', 'Six weeks in, ACoS dropped from 31% to 19%. Not because we cut spend — because every bid decision was validated against real contribution margin.')
new_content = new_content.replace('Health & beauty, Amazon Global', '<span class="proof-name">Health & beauty brand</span><br><span class="proof-co text-[var(--muted)]">Amazon Global · Q2 2026</span>')
new_content = new_content.replace('⚠️ [127] decisions logged', '[figure] decisions logged')
new_content = new_content.replace('⚠️ [42] brands operated', '[figure] brands operated')
new_content = new_content.replace('⚠️ [98]% decision accuracy', '[figure] decision accuracy')
new_content = new_content.replace('⚠️ [0] reorder windows missed', '[figure] reorder windows missed')

# Section 6
new_content = new_content.replace('1. Is this a retainer or a managed service?', 'Is this a retainer or a managed service?')
new_content = new_content.replace("Neither label fits exactly. We embed as your operating team — in your accounts every week, making decisions, owning outcomes. Retainers imply advice; managed services imply outsourcing. We call it embedding because that's what it is.", "Neither label fits exactly. We embed as your operating team — present in your accounts every week, making decisions, owning outcomes. Retainers imply advice. Managed services imply outsourcing. We call it embedding because that's what it is.")
new_content = new_content.replace('2. Do we need to give you access to our Amazon account?', 'Do we need to give you access to our Amazon account?')
new_content = new_content.replace("Yes — operator-level access to Seller Central and the Advertising Console. We can't make decisions in your accounts without it. All access is scoped to what Saddl OS requires and logged.", "Yes — operator-level access to Seller Central and Advertising Console. We cannot make decisions in your accounts without it. All access is scoped to what Saddl OS requires and fully logged.")
new_content = new_content.replace('3. What does it cost?', 'What happens if we want to stop?')
new_content = new_content.replace("Pricing is set after the audit — based on account complexity, platform count, and scope. We don't publish a rate because a $2M Amazon-only brand and a $15M Amazon + Noon + D2C brand are different engagements. Request an audit first; we'll tell you exactly what it costs before you commit to anything.", "30-day notice, clean handover. Your accounts, your data, always yours. We document everything we've done and why. You leave knowing exactly what the system was doing and how to continue it.")

faq_addition = '''
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
'''
new_content = new_content.replace('</div>\n\n      <div class="text-center mt-12 reveal">', faq_addition + '\n      </div>\n\n      <div class="text-center mt-12 reveal">')

# Section 7
new_content = new_content.replace('Right for brands with $1M–$20M revenue on Amazon. MENA presence welcome. Platforms: Amazon, Noon, Walmart, Meta, Google.', 'Right for brands with $1M–$20M revenue · Amazon · Noon UAE/KSA · Meta · Google')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)
print('Done!')
