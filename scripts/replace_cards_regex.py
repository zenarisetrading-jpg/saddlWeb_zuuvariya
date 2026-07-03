import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Replace Card 1 (Consumer electronics brand -> Home and Kitchen Essentials brand)
pattern1 = re.compile(r'<div class="proof-card reveal".*?<q>.*?</q>.*?<div class="proof-avatar.*?</div>.*?<div class="proof-attr"><span class="proof-name.*?</span><br><span class="proof-co.*?</span></div>.*?</div>\s*</div>', re.DOTALL)

# Find all cards
cards = re.findall(r'<div class="proof-card reveal".*?</div>\s*</div>\s*</div>', content, re.DOTALL)

# Let's do string replacement more carefully.
# Find Card 1 Quote
content = re.sub(
    r'<q>"We hadn\'t seen our true contribution margin.*?"</q>',
    r'<q>"We sell on three marketplaces from one warehouse. When a supplier is late, all three go dark together — for our top seller, that\'s AED 100K a month at risk. Our inventory management system built around supplier lead time, sales velocity, and cash flow, kept out-of-stock under 10% across 100+ SKUs."</q>',
    content, flags=re.DOTALL
)

# Find Card 1 Avatar
content = re.sub(
    r'>CE</div>',
    r'>HK</div>',
    content
)

# Find Card 1 Name
content = re.sub(
    r'>Consumer electronics brand</span>',
    r'>Home and Kitchen Essentials brand</span>',
    content
)

# Find Card 1 Co
content = re.sub(
    r'>Amazon UAE · Q1 2026</span>',
    r'>Amazon+Noon UAE and KSA · H1 2026</span>',
    content
)

# Find Card 2 Quote
content = re.sub(
    r'<q>"The inventory call saved us \$38,000 in storage fees.*?"</q>',
    r'<q>"One of our sellers was paying full price to advertise to customers who\'d have bought anyway — 60% of their ad budget was chasing people already searching their own brand name. We cut that spend by a quarter. Revenue didn\'t drop — it went up. AED 5,400 a month in cost savings, reinvested and reclaimed."</q>',
    content, flags=re.DOTALL
)

# Find Card 2 Avatar
# Wait, it's already HK in the original file. We need to change it to HB!
# But there are two HKs now because I changed Card 1. Let's rely on name replacement to guide us.
content = re.sub(
    r'HK</div>(?=\s*<div class="proof-attr"><span class="proof-name font-semibold text-sm text-\[var\(--ink\)\]">Home &amp; kitchen brand</span>)',
    r'HB</div>',
    content
)

# Also check without &amp;
content = re.sub(
    r'HK</div>(?=\s*<div class="proof-attr"><span class="proof-name font-semibold text-sm text-\[var\(--ink\)\]">Home & kitchen brand</span>)',
    r'HB</div>',
    content
)

# Find Card 2 Name
content = re.sub(
    r'>Home &amp; kitchen brand</span>',
    r'>Hydration brand</span>',
    content
)
content = re.sub(
    r'>Home & kitchen brand</span>',
    r'>Hydration brand</span>',
    content
)

# Find Card 2 Co
content = re.sub(
    r'>Amazon KSA \+ Noon · Q4 2025</span>',
    r'>Amazon UAE · Q2 2026</span>',
    content
)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
