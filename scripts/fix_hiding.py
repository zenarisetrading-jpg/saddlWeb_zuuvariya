def fix_hiding(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the hero-panel and remove the aggressive clipping mask
    old_style = 'style="height: 600px; padding: 0; background: transparent; z-index: 30; position: relative; border-radius: 24px; box-shadow: var(--shadow-panel); overflow: hidden; transform: translateZ(0); -webkit-mask-image: -webkit-radial-gradient(white, black);"'
    new_style = 'style="height: 600px; padding: 0; background: transparent; z-index: 30; position: relative; border-radius: 24px; box-shadow: var(--shadow-panel);"'
    
    content = content.replace(old_style, new_style)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

fix_hiding('index.html')
print("Removed aggressive clipping mask!")
