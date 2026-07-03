def fix_corners(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Make the hero-panel force clipping by using transform: translateZ(0) and hardcoded 24px
    content = content.replace(
        '<div class="hero-panel text-left flex flex-col" style="height: 650px; padding: 0; overflow: hidden; background: transparent;">',
        '<div class="hero-panel text-left flex flex-col" style="height: 650px; padding: 0; overflow: hidden; background: transparent; border-radius: 24px; transform: translateZ(0); -webkit-mask-image: -webkit-radial-gradient(white, black);">'
    )
    
    content = content.replace(
        '<iframe src="/saddl-os-preview_5.html" width="100%" height="100%" frameborder="0" style="border: none; border-radius: var(--r-panel);"></iframe>',
        '<iframe src="/saddl-os-preview_5.html" width="100%" height="100%" frameborder="0" style="border: none; border-radius: 24px; overflow: hidden;"></iframe>'
    )
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

fix_corners('index.html')

def fix_preview(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Add border-radius to the html,body,#root of the preview html
    content = content.replace(
        '<style>html,body,#root{margin:0;height:100%;background:#0C110F}</style>',
        '<style>html,body,#root{margin:0;height:100%;background:#0C110F; border-radius: 24px; overflow: hidden; box-sizing: border-box;}</style>'
    )
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

fix_preview('saddl-os-preview_5.html')
print("Fixed corners!")
