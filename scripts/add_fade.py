def add_fade(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the iframe inside hero-panel and add a fade-out div after it
    old_html = '<iframe src="/saddl-os-preview_5.html" width="100%" height="100%" frameborder="0" style="border: none; border-radius: 24px; overflow: hidden;"></iframe>\n      </div>'
    
    new_html = '''<iframe src="/saddl-os-preview_5.html" width="100%" height="100%" frameborder="0" style="border: none; border-radius: 24px; overflow: hidden;"></iframe>
        <!-- Fade out bottom to hide the sharp scroll cut-off -->
        <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 120px; background: linear-gradient(to top, #0C110F, transparent); pointer-events: none; border-radius: 0 0 24px 24px; z-index: 50;"></div>
      </div>'''
    
    content = content.replace(old_html, new_html)
    
    # Just in case the exact spacing is different, let's use regex
    import re
    if old_html not in content:
        pattern = r'<iframe src="/saddl-os-preview_5\.html".*?</iframe>\s*</div>'
        replacement = '''<iframe src="/saddl-os-preview_5.html" width="100%" height="100%" frameborder="0" style="border: none; border-radius: 24px; overflow: hidden;"></iframe>
        <!-- Fade out bottom to hide the sharp scroll cut-off -->
        <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 120px; background: linear-gradient(to top, #0C110F 10%, transparent); pointer-events: none; border-radius: 0 0 24px 24px; z-index: 50;"></div>
      </div>'''
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

add_fade('index.html')
print("Added fade out!")
