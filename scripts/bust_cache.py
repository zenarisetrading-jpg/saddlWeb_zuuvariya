import glob, re, os

def update_files(directory):
    for root, dirs, files in os.walk(directory):
        if 'node_modules' in root or '.git' in root: continue
        for file in files:
            if file.endswith('.html'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Update CSS cache buster to v=19
                new_content = re.sub(r'href=[\"\'\']/?styles\.css\?v=\d+[\"\'\']', 'href=\"/styles.css?v=19\"', content)
                new_content = re.sub(r'href=[\"\'\']\.\./styles\.css\?v=\d+[\"\'\']', 'href=\"../styles.css?v=19\"', new_content)
                new_content = re.sub(r'href=[\"\'\']/?styles\.css[\"\'\']', 'href=\"/styles.css?v=19\"', new_content)
                
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print('Updated cache to v=19 in', path)

update_files('.')
