import re

def fix_layout(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Restore iframe height to something that fits the UI nicely, say 620px
    content = content.replace(
        'style="height: 580px; padding: 0; overflow: hidden; background: transparent; border-radius: 24px; transform: translateZ(0); -webkit-mask-image: -webkit-radial-gradient(white, black);"',
        'style="height: 620px; padding: 0; overflow: hidden; background: transparent; border-radius: 24px; transform: translateZ(0); -webkit-mask-image: -webkit-radial-gradient(white, black);"'
    )
    
    # 2. Fix the next section so its content is pushed down properly by the overlapping panel
    # The original next section is:
    # <section class="s-xl tex-ledger grain" style="padding-top: 5rem;">
    # We change it to:
    # <section class="s-xl s-after-hero tex-ledger grain">
    content = content.replace(
        '<section class="s-xl tex-ledger grain" style="padding-top: 5rem;">',
        '<section class="s-xl s-after-hero tex-ledger grain">'
    )
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

fix_layout('index.html')
print("Fixed layout overlap!")
