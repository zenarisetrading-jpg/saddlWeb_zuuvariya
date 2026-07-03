def restore_scroll(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove overflow: hidden from the html,body,#root
    content = content.replace(
        '<style>html,body,#root{margin:0;height:100%;background:#0C110F; border-radius: 24px; overflow: hidden; box-sizing: border-box;}</style>',
        '<style>html,body,#root{margin:0;height:100%;background:#0C110F; box-sizing: border-box;}</style>'
    )
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

restore_scroll('saddl-os-preview_5.html')
print("Restored scroll!")
