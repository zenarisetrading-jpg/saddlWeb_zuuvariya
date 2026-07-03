icons = {
    'Advertising Intelligence': '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="2,14 7,8.5 11,11.5 18,4"/><polyline points="13,4 18,4 18,9"/></svg>',
    'Inventory Intelligence': '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 1.5L18 6v8L10 18.5 2 14V6z"/><line x1="2" y1="6" x2="10" y2="10.5"/><line x1="10" y1="10.5" x2="18" y2="6"/><line x1="10" y1="10.5" x2="10" y2="18.5"/></svg>',
    'Listing & Content': '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2H5a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V7z"/><polyline points="12,2 12,7 17,7"/><line x1="7" y1="11" x2="13" y2="11"/><line x1="7" y1="14" x2="11" y2="14"/></svg>',
    'Pricing Intelligence': '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 10.5L9.5 3H18V11.5L11 18.5 2.5 10.5z"/><circle cx="14" cy="7" r="1.2" fill="currentColor" stroke="none"/></svg>',
    'Financial Intelligence & P&L': '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="10" width="4" height="8" rx="1"/><rect x="8" y="6" width="4" height="12" rx="1"/><rect x="14" y="3" width="4" height="15" rx="1"/></svg>',
    'Brand Health': '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 1.5L3 4.5V10c0 4.5 3.1 8.3 7 9.5 3.9-1.2 7-5 7-9.5V4.5z"/><polyline points="7.5,10.5 9.5,12.5 13,8.5"/></svg>'
}

# 1. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

for title, svg in icons.items():
    # Replace the diamond for index.html
    old_str = f'<div class="icon-tile">◆</div>\n          <h3 class="text-white font-bold text-lg mb-2">{title}</h3>'
    new_str = f'<div class="icon-tile">{svg}</div>\n          <h3 class="text-white font-bold text-lg mb-2">{title}</h3>'
    content = content.replace(old_str, new_str)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)


# 2. Update saddl-os.html
with open('saddl-os.html', 'r', encoding='utf-8') as f:
    content2 = f.read()

# Saddl OS uses numbered titles, e.g. "1. Advertising Intelligence"
# and "text-xl mb-3"
for i, (title, svg) in enumerate(icons.items()):
    num = i + 1
    old_str = f'<div class="icon-tile">◆</div>\n          <h3 class="text-white font-bold text-xl mb-3">{num}. {title}</h3>'
    new_str = f'<div class="icon-tile">{svg}</div>\n          <h3 class="text-white font-bold text-xl mb-3">{num}. {title}</h3>'
    content2 = content2.replace(old_str, new_str)

with open('saddl-os.html', 'w', encoding='utf-8') as f:
    f.write(content2)

print('Safely updated all icons without regex!')
