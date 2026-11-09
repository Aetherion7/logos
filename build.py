"""Build index.html from the sources in src/.

    python3 build.py           # rebuild pages from the glosses, then index.html
"""
import json, os, subprocess, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, "src")

# 1. split the glossed texts into pages -> src/full.json
subprocess.run([sys.executable, "build_pages.py"], cwd=SRC, check=True)

# 2. fill the placeholders in the app shell
read = lambda name: open(os.path.join(SRC, name), encoding="utf-8").read()
app, texts, full, abc = read("app.html"), read("texts.js"), read("full.json"), read("abc.js")
portraits = json.loads(read("portraits.js")[len("const IMG="):-1])
portraits = {k: v for k, v in portraits.items() if k in ("plato", "heraclitus", "epicurus")}

html = (app.replace("/*IMGS*/", "const IMG=" + json.dumps(portraits) + ";")
           .replace("/*TEXTS*/", texts.replace("/*FULL*/", full))
           .replace("/*ABC*/", abc))
page = ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
        '<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}'
        'body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>\n</head>\n<body>\n'
        + html + '\n</body>\n</html>\n')
open(os.path.join(ROOT, "index.html"), "w", encoding="utf-8").write(page)
print("index.html", len(page), "bytes")
