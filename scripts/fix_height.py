def fix_height(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Change 650px to 580px
    content = content.replace('style="height: 650px;', 'style="height: 580px;')
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

fix_height('index.html')
print("Fixed height!")
