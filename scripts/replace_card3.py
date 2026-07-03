import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Replace Card 3
# Find Card 3 Quote
content = re.sub(
    r'<q>"Six weeks in, ACoS dropped from 31% to 19%.*?"</q>',
    r'<q>"One seller\'s Noon account went out of budget every single day — a single setting was burning the budget by afternoon. We fixed that: ROAS 1.04× → 2.70× in 20 days. Then we rebuilt the account with a structured approach — brand defense, category targeting, competitor conquest — each with its own budget and bid logic. Current ROAS: 3.15×, nearly tripling where it started."</q>',
    content, flags=re.DOTALL
)

# Find Card 3 Name
content = re.sub(
    r'>Health &amp; beauty brand</span>',
    r'>Hydration brand</span>',
    content
)
content = re.sub(
    r'>Health & beauty brand</span>',
    r'>Hydration brand</span>',
    content
)

# Find Card 3 Co
content = re.sub(
    r'>Amazon Global · Q2 2026</span>',
    r'>Noon UAE · Q2 2026</span>',
    content
)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
