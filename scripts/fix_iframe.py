def fix_iframe_radius(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the iframe line and add border-radius: var(--r-panel);
    old_line = '<iframe src="/saddl-os-preview_5.html" width="100%" height="100%" frameborder="0" style="border: none;"></iframe>'
    new_line = '<iframe src="/saddl-os-preview_5.html" width="100%" height="100%" frameborder="0" style="border: none; border-radius: var(--r-panel);"></iframe>'
    
    content = content.replace(old_line, new_line)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

fix_iframe_radius('index.html')
print("Fixed iframe radius!")
