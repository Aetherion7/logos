import json, glob

def load(units_file, prefix):
    units = json.load(open(units_file, encoding="utf-8"))
    got = {}
    for f in sorted(glob.glob(prefix + "*.txt")):
        for ln in open(f, encoding="utf-8"):
            ln = ln.strip()
            if not ln: continue
            n, e, g = ln.split("|", 2)
            got[int(n)] = (e.strip(), [x.strip() for x in g.split(";")])
    out = []
    for i, u in enumerate(units):
        e, w = got[i]
        assert len(w) == len(u["g"].split()), i
        out.append({"ref": u["ref"], "g": u["g"], "e": e, "w": w})
    return out

def paginate(units, target, breaks=(), fmt=lambda a, b: a if a == b else f"{a}–{b}"):
    pages, cur, n = [], [], 0
    for i, u in enumerate(units):
        if cur and (i in breaks or n + len(u["w"]) > target * 1.25 or (n >= target and u["ref"] != cur[-1]["ref"])):
            pages.append(cur); cur, n = [], 0
        cur.append(u); n += len(u["w"])
    if cur: pages.append(cur)
    return [{"ref": fmt(p[0]["ref"], p[-1]["ref"]), "s": [{"g": u["g"], "e": u["e"], "w": u["w"]} for u in p]} for p in pages]

apol = load("apol2.json", "glosses/apol_")
her = load("her.json", "glosses/her_")
# page breaks where the speech changes: after the verdict (416) and after the sentence (496)
ap = paginate(apol, 120, breaks={416, 496})
hp = paginate(her, 70, fmt=lambda a, b: a if a == b else f"{a} – {b.replace('B ', '')}")
ep = paginate(load("epi.json", "glosses/epi_"), 100, fmt=lambda a, b: f"X {a}" if a == b else f"X {a}–{b}")
json.dump({"apology": ap, "heraclitus": hp, "epicurus": ep}, open("full.json", "w", encoding="utf-8"), ensure_ascii=False)
print(len(ap), len(hp), len(ep))
print([p["ref"] for p in ap][:12], [p["ref"] for p in hp][:8])
