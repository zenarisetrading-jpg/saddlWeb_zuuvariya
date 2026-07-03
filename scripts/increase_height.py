def increase_height(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Change 530px to 580px
    content = content.replace(
        'style="height: 530px;',
        'style="height: 580px;'
    )
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

increase_height('index.html')
print("Increased height!")
