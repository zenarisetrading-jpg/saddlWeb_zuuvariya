import re

def embed_iframe(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # We need to find the hero-panel div and replace everything inside it up to its closing div.
    # It starts at: <!-- Hero OS Panel -->\n      <div class="hero-panel
    
    start_str = '<!-- Hero OS Panel -->'
    start_idx = content.find(start_str)
    
    if start_idx == -1:
        print("Hero panel not found!")
        return
        
    # The div ends before section 3, let's find the exact end.
    # The structure is:
    # <!-- Hero OS Panel -->
    # <div class="hero-panel text-left flex flex-col">
    #   ...
    # </div>
    # </div> (wrap end)
    # </section>
    
    # We can just replace the whole block between <!-- Hero OS Panel --> and     </div>\n  </section>
    
    # Let's use regex
    pattern = r'<!-- Hero OS Panel -->.*?</div>\s*</div>\s*</section>'
    
    replacement = '''<!-- Hero OS Panel -->
      <div class="hero-panel text-left flex flex-col" style="height: 650px; padding: 0; overflow: hidden; background: transparent;">
        <iframe src="/saddl-os-preview_5.html" width="100%" height="100%" frameborder="0" style="border: none;"></iframe>
      </div>
      
    </div>
  </section>'''
    
    new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(new_content)

embed_iframe('index.html')
print("Embedded saddl-os-preview_5.html!")
