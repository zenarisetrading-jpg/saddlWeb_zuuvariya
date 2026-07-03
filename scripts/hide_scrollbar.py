def hide_scrollbar(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the .scroll class and add scrollbar hiding CSS
    import re
    # We can just inject it into the style block
    style_injection = """
    /* Hide scrollbars */
    .scroll::-webkit-scrollbar { display: none; }
    .scroll { -ms-overflow-style: none; scrollbar-width: none; }
    """
    
    content = content.replace('</style>', f'{style_injection}</style>')
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

hide_scrollbar('saddl-os-preview_5.html')
print("Hidden scrollbar!")
