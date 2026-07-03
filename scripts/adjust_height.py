def adjust_height(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Change 620px to 750px
    content = content.replace(
        'style="height: 620px;',
        'style="height: 750px;'
    )
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

adjust_height('index.html')
print("Adjusted height!")
