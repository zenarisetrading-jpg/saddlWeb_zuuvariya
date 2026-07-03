import glob, re, os

def update_files(directory):
    for root, dirs, files in os.walk(directory):
        if 'node_modules' in root: continue
        for file in files:
            if file.endswith('.html'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Remove reveal from site-nav
                new_content = re.sub(r'class=[\"\'\']site-nav\s+reveal[\"\'\']', 'class=\"site-nav\"', content)
                new_content = re.sub(r'class=[\"\'\']coll-nav\s+reveal[\"\'\']', 'class=\"coll-nav\"', new_content)
                
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print('Fixed nav in', path)

update_files('.')
