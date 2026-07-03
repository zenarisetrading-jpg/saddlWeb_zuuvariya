def fix_faq_color(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # The FAQ header has style="color: white"
    content = content.replace('<h2 class="t-headline" style="color: white">What you\'re probably wondering.</h2>', '<h2 class="t-headline">What you\'re probably wondering.</h2>')
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

fix_faq_color('index.html')
print("Fixed FAQ color!")
