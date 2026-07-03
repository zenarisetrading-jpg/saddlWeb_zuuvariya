def fix_all(filename_index, filename_preview):
    # 1. Fix the height in index.html to 600px
    with open(filename_index, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We set it to 580px in the last step
    import re
    content = re.sub(
        r'style="height: \d+px;',
        'style="height: 600px;',
        content
    )
    
    with open(filename_index, 'w', encoding='utf-8') as f:
        f.write(content)

    # 2. Fix the rounded corners in saddl-os-preview_5.html by adding border-radius to .app
    with open(filename_preview, 'r', encoding='utf-8') as f:
        preview = f.read()

    # Find the .app style and add border-radius: 24px;
    old_app_style = ".app{display:flex; height:100vh; width:100%; background:var(--bg); color:var(--ink); font-family:'Instrument Sans',system-ui,sans-serif; font-size:13.5px; overflow:hidden;}"
    # Wait, the preview might be minified or slightly different spacing. Let's use regex for .app
    
    preview = re.sub(
        r'\.app\s*\{([^\}]+)\}',
        r'.app {\1; border-radius: 24px; overflow: hidden; }',
        preview
    )
    
    with open(filename_preview, 'w', encoding='utf-8') as f:
        f.write(preview)

fix_all('index.html', 'saddl-os-preview_5.html')
print("Fixed height and rounded corners!")
