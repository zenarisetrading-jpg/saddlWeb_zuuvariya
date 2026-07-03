def fix_hero_zindex(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find `section.s-hero { overflow: visible; }` and add position: relative; z-index: 20;
    content = content.replace(
        'section.s-hero { overflow: visible; }',
        'section.s-hero { overflow: visible; position: relative; z-index: 20; }'
    )
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

fix_hero_zindex('styles.css')
print("Fixed hero z-index!")
