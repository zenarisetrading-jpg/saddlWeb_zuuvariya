import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Replace Card 1
card1_old = '''<div class="proof-card reveal" style="transition-delay: 0.1s">
          <div class="proof-quote-bg">"</div>
          <div class="star-row text-[var(--jade)] mb-3 text-lg tracking-widest">?????</div>
          <q>"We hadn't seen our true contribution margin until Saddl ran the reconciliation. The number was $2.10 lower per unit than we thought - on 4,000 units a month."</q>
          <div class="proof-author mt-6 flex items-center gap-3">
            <div class="proof-avatar w-9 h-9 rounded-full bg-[var(--jade)] text-white text-[10px] font-bold flex items-center justify-center">CE</div>
            <div class="proof-attr"><span class="proof-name font-semibold text-sm text-[var(--ink)]">Consumer electronics brand</span><br><span class="proof-co text-xs text-[var(--muted)]">Amazon UAE · Q1 2026</span></div>
          </div>
        </div>'''

card1_new = '''<div class="proof-card reveal" style="transition-delay: 0.1s">
          <div class="proof-quote-bg">"</div>
          <div class="star-row text-[var(--jade)] mb-3 text-lg tracking-widest">?????</div>
          <q>"We sell on three marketplaces from one warehouse. When a supplier is late, all three go dark together — for our top seller, that's AED 100K a month at risk. Our inventory management system built around supplier lead time, sales velocity, and cash flow, kept out-of-stock under 10% across 100+ SKUs."</q>
          <div class="proof-author mt-6 flex items-center gap-3">
            <div class="proof-avatar w-9 h-9 rounded-full bg-[var(--jade)] text-white text-[10px] font-bold flex items-center justify-center">HK</div>
            <div class="proof-attr"><span class="proof-name font-semibold text-sm text-[var(--ink)]">Home and Kitchen Essentials brand</span><br><span class="proof-co text-xs text-[var(--muted)]">Amazon+Noon UAE and KSA · H1 2026</span></div>
          </div>
        </div>'''

# Replace Card 2
card2_old = '''<div class="proof-card reveal" style="transition-delay: 0.2s">
          <div class="proof-quote-bg">"</div>
          <div class="star-row text-[var(--jade)] mb-3 text-lg tracking-widest">?????</div>
          <q>"The inventory call saved us $38,000 in storage fees. They flagged it before we'd even thought about Q4 planning. Nobody else was watching that number."</q>
          <div class="proof-author mt-6 flex items-center gap-3">
            <div class="proof-avatar w-9 h-9 rounded-full bg-[var(--jade)] text-white text-[10px] font-bold flex items-center justify-center">HK</div>
            <div class="proof-attr"><span class="proof-name font-semibold text-sm text-[var(--ink)]">Home & kitchen brand</span><br><span class="proof-co text-xs text-[var(--muted)]">Amazon KSA + Noon · Q4 2025</span></div>
          </div>
        </div>'''

card2_new = '''<div class="proof-card reveal" style="transition-delay: 0.2s">
          <div class="proof-quote-bg">"</div>
          <div class="star-row text-[var(--jade)] mb-3 text-lg tracking-widest">?????</div>
          <q>"One of our sellers was paying full price to advertise to customers who'd have bought anyway — 60% of their ad budget was chasing people already searching their own brand name. We cut that spend by a quarter. Revenue didn't drop — it went up. AED 5,400 a month in cost savings, reinvested and reclaimed."</q>
          <div class="proof-author mt-6 flex items-center gap-3">
            <div class="proof-avatar w-9 h-9 rounded-full bg-[var(--jade)] text-white text-[10px] font-bold flex items-center justify-center">HB</div>
            <div class="proof-attr"><span class="proof-name font-semibold text-sm text-[var(--ink)]">Hydration brand</span><br><span class="proof-co text-xs text-[var(--muted)]">Amazon UAE · Q2 2026</span></div>
          </div>
        </div>'''

content = content.replace(card1_old, card1_new)
content = content.replace(card2_old, card2_new)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
