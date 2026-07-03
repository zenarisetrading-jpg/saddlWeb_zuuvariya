import re

files = ['index.html', 'saddl-os.html']

icons = {
    'Advertising Intelligence': '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 1.5L3 4.5V10c0 4.5 3.1 8.3 7 9.5 3.9-1.2 7-5 7-9.5V4.5z"/><polyline points="7.5,10.5 9.5,12.5 13,8.5"/></svg>',
    'Inventory Intelligence': '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="14" height="14" rx="2" ry="2"/><path d="M7 7h6M7 11h6M7 15h6"/></svg>',
    'Listing & Content': '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 2l6 14-6-3-6 3 6-14z"/></svg>',
    'Pricing Intelligence': '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10" cy="10" r="8"/><path d="M10 6v8M8 8h4M8 12h4"/></svg>',
    'Financial Intelligence & P&L': '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="16" height="12" rx="2" ry="2"/><path d="M2 10h16"/></svg>',
    'Brand Health': '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 2v16M2 10h16"/></svg>'
}

for path in files:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for title, icon in icons.items():
        # Specifically match the diamond symbol so it doesn't over-consume
        pattern = r'(<div class="icon-tile">)◆(</div>\s*<h3[^>]*>\s*(?:\d\.\s*)?' + re.escape(title) + r'\s*</h3>)'
        content = re.sub(pattern, r'\g<1>' + icon + r'\g<2>', content, flags=re.DOTALL)
        
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print('Updated icons safely!')
