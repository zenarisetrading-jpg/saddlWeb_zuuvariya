def remove_tickers(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    import re
    # Remove any block starting with <!-- Ticker --> and ending with </div>\n  </div>
    # The ticker block is:
    #   <!-- Ticker -->
    #   <div class="overflow-hidden py-3" style="background: var(--jade);" aria-hidden="true">
    #     ...
    #   </div>
    
    # We will just use regex to remove it
    pattern = r'\s*<!-- Ticker -->\s*<div class="overflow-hidden py-3"[^>]*>.*?</div>\s*</div>'
    new_content = re.sub(pattern, '', content, flags=re.DOTALL)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(new_content)

remove_tickers('index.html')
print("Tickers removed!")
