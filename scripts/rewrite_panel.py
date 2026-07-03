import re

def rewrite_hero_panel(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the hero-panel block and replace it
    pattern = r'<!-- Hero OS Panel -->.*?</div>\s*</div>\s*</section>'
    
    # We want height ~530px to match the original "normal" height.
    # We want the iframe to have border-radius: 24px and overflow: hidden so its corners are perfectly round.
    # We want hero-panel to have z-index: 30 to guarantee it sits ON TOP of the next section.
    replacement = '''<!-- Hero OS Panel -->
      <div class="hero-panel text-left flex flex-col" style="height: 530px; padding: 0; background: transparent; z-index: 30; position: relative; border-radius: 24px; box-shadow: var(--shadow-panel);">
        <iframe src="/saddl-os-preview_5.html" width="100%" height="100%" frameborder="0" style="border: none; border-radius: 24px; overflow: hidden; display: block;"></iframe>
      </div>
      
    </div>
  </section>'''
    
    new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(new_content)

rewrite_hero_panel('index.html')
print("Rewrote hero panel!")
