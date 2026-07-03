import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

old_block = '''      <div class="flex flex-wrap justify-center gap-6 t-data text-[var(--ink)] text-[13px] font-semibold tracking-wider reveal">
        <span>[figure] decisions logged</span>
        <span class="text-[var(--hairline)]">|</span>
        <span>[figure] brands operated</span>
        <span class="text-[var(--hairline)]">|</span>
        <span>[figure] decision accuracy</span>
        <span class="text-[var(--hairline)]">|</span>
        <span>[figure] reorder windows missed</span>
      </div>'''

new_block = '''      <div class="flex flex-wrap justify-center gap-6 t-data text-[var(--ink)] text-[13px] font-semibold tracking-wider reveal">
        <span>Multi-marketplaces operations</span>
        <span class="text-[var(--hairline)]">|</span>
        <span>3+ geos covered. 100+ SKUs managed</span>
        <span class="text-[var(--hairline)]">|</span>
        <span>AED 40,000+ recovered/saved monthly</span>
        <span class="text-[var(--hairline)]">|</span>
        <span>Below -10% out-of-stock</span>
      </div>'''

if old_block in content:
    content = content.replace(old_block, new_block)
else:
    # Try with regex if exact match fails
    content = re.sub(
        r'<div class="flex flex-wrap justify-center gap-6 t-data.*?</style>',
        new_block,
        content,
        flags=re.DOTALL
    )

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
