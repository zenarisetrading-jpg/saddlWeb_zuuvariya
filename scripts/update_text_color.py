import re

def update_white_text_in_section(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the Saddl OS section
    start_tag = '<section class="s-modules tex-deep grain">'
    end_tag = '</section>'
    
    start_idx = content.find(start_tag)
    if start_idx == -1:
        print(f"Section not found in {filename}")
        return
        
    end_idx = content.find(end_tag, start_idx) + len(end_tag)
    
    section = content[start_idx:end_idx]
    
    # Perform replacements
    section = section.replace('style="color: white;"', '')
    section = section.replace('text-white/70', 'text-[var(--ink)] opacity-70')
    section = section.replace('text-white/60', 'text-[var(--ink)] opacity-60')
    section = section.replace('text-white/40', 'text-[var(--ink)] opacity-40')
    section = section.replace('text-white', 'text-[var(--ink)]')
    
    # Put it back together
    new_content = content[:start_idx] + section + content[end_idx:]
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(new_content)

update_white_text_in_section('index.html')
update_white_text_in_section('saddl-os.html')
print("Updated white text to ink color!")
