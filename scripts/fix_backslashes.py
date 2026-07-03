with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Fix literal backslashes added during regex substitution
content = content.replace(r"who\'d have bought", "who'd have bought")
content = content.replace(r"Revenue didn\'t drop", "Revenue didn't drop")
content = content.replace(r"One seller\'s Noon", "One seller's Noon")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
