import os

def update_files(directory):
    for root, dirs, files in os.walk(directory):
        if 'node_modules' in root or '.git' in root: continue
        for file in files:
            if file.endswith('.html'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Remove mt-6 from h1 tags
                content = content.replace('class="t-display mt-6 reveal"', 'class="t-display reveal"')
                content = content.replace('class="t-display pt-16 reveal"', 'class="t-display reveal"')
                content = content.replace('class="t-display pt-12 pb-8 reveal"', 'class="t-display reveal"')
                
                # Also there's a margin on hero-chip: margin-bottom: 2rem; in styles.css
                # We can't change styles.css from here easily but we removed h1 top margins.
                
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {path}")

update_files('.')
