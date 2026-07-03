import os
import shutil

# Move .py files to scripts
for f in os.listdir('.'):
    if f.endswith('.py') and os.path.isfile(f):
        shutil.move(f, os.path.join('scripts', f))

# Move .html files to public, except index.html
for f in os.listdir('.'):
    if f.endswith('.html') and os.path.isfile(f) and f != 'index.html':
        shutil.move(f, os.path.join('public', f))

# Move .md files to docs, except README.md and AGENTS.md
for f in os.listdir('.'):
    if f.endswith('.md') and os.path.isfile(f) and f not in ['README.md', 'AGENTS.md']:
        shutil.move(f, os.path.join('docs', f))
