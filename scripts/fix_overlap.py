def fix_overlap(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add margin-bottom: 4rem to hero-panel inline style to override the -200px in css
    old_style = 'style="height: 600px; padding: 0; background: transparent; z-index: 30; position: relative; border-radius: 24px; box-shadow: var(--shadow-panel);"'
    new_style = 'style="height: 600px; padding: 0; background: transparent; z-index: 30; position: relative; border-radius: 24px; box-shadow: var(--shadow-panel); margin-bottom: 4rem;"'
    content = content.replace(old_style, new_style)

    # 2. Remove s-after-hero from the next section
    content = content.replace('<section class="s-xl s-after-hero tex-ledger grain">', '<section class="s-xl tex-ledger grain">')
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

fix_overlap('index.html')
print("Fixed overlap!")
