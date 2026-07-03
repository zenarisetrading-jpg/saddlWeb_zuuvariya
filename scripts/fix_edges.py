def fix_edges(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the hero-panel and replace its style to aggressively force clipping and set height to exactly 530px
    old_style = 'style="height: 580px; padding: 0; background: transparent; z-index: 30; position: relative; border-radius: 24px; box-shadow: var(--shadow-panel);"'
    new_style = 'style="height: 530px; padding: 0; background: transparent; z-index: 30; position: relative; border-radius: 24px; box-shadow: var(--shadow-panel); overflow: hidden; transform: translateZ(0); -webkit-mask-image: -webkit-radial-gradient(white, black);"'
    
    if old_style in content:
        content = content.replace(old_style, new_style)
    else:
        # Fallback if I got the old string wrong
        import re
        content = re.sub(
            r'style="height: \d+px; padding: 0; background: transparent; z-index: 30; position: relative; border-radius: 24px; box-shadow: var\(--shadow-panel\);"',
            new_style,
            content
        )
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

fix_edges('index.html')
print("Fixed edges and height!")
