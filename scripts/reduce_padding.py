import os, re

def update_files(directory):
    for root, dirs, files in os.walk(directory):
        if 'node_modules' in root or '.git' in root: continue
        for file in files:
            if file.endswith('.html'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Replace pt-24 (6rem) with pt-12 (3rem)
                content = content.replace('pt-24 pb-16', 'pt-12 pb-8')
                content = content.replace('pt-32 pb-16', 'pt-12 pb-8')
                
                # Replace py-24 (6rem) with py-12 (3rem)
                content = content.replace('py-24', 'py-12')
                
                # Replace inline styles
                content = content.replace('style="padding-top: 5rem;"', 'style="padding-top: 2rem;"')
                
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {path}")

update_files('.')
