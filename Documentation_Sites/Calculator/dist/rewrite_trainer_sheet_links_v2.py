#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# rewrite_trainer_sheet_links_v2.py
#
# Deterministic rewrite of "Open Calculator" links:
# - For each <table class="trainer-block">...</table>:
#     * species  := first non-empty <th> inside that table
#     * set name := caption text (trainer name) found right after the trainer image
# - Replaces ONLY the anchor inside that table's <caption> whose text contains "Open Calculator"
# - Builds href as:  {calc}?p2s=SPECIES[&p2set=SET]
#
# Usage (Windows CMD or PowerShell, single line):
#   py rewrite_trainer_sheet_links_v2.py --gen9 path\to\gen9.js --in path\to\trainer_sheet.html --out path\to\trainer_sheet.html --calc https://.../Calculator/dist/index.html

import argparse, io, re, json, sys
from urllib.parse import quote_plus

def load_setdex_species(gen9_path):
    raw = io.open(gen9_path, "r", encoding="utf-8", errors="ignore").read()
    m = re.search(r"SETDEX_SV\s*=\s*({.*});?\s*$", raw, flags=re.DOTALL | re.MULTILINE)
    if not m:
        m = re.search(r"=\s*({.*});", raw, flags=re.DOTALL)
    if not m:
        print("WARNING: Could not find SETDEX_SV object in gen9.js; will not validate species names.", file=sys.stderr)
        return set()
    obj_text = m.group(1)
    # Remove trailing commas before } or ]
    obj_text = re.sub(r",\s*([}\]])", r"\\1", obj_text)
    try:
        data = json.loads(obj_text)
    except Exception as e:
        print("WARNING: Could not parse SETDEX_SV JSON:", e, file=sys.stderr)
        return set()
    return set(data.keys())

def clean_text(s):
    s = re.sub(r"<[^>]+>", "", s)  # strip tags
    s = re.sub(r"\s+", " ", s).strip()
    return s

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--gen9", required=True, help="Path to gen9.js")
    ap.add_argument("--in", dest="inp", required=True, help="Path to trainer_sheet HTML input")
    ap.add_argument("--out", required=True, help="Path to write patched HTML")
    ap.add_argument("--calc", required=True, help="Base calculator URL (prefer absolute URL)")
    args = ap.parse_args()

    if args.calc.startswith("."):
        print("NOTE: --calc looks relative; if trainer_sheet lives elsewhere, links may point to itself. Prefer an absolute URL.", file=sys.stderr)

    html = io.open(args.inp, "r", encoding="utf-8", errors="ignore").read()
    species_catalog = load_setdex_species(args.gen9)

    # Regex to isolate each table block
    table_re = re.compile(r'(<table\b[^>]*class="[^"]*trainer-block[^"]*"[^>]*>)(.*?)</table>', re.I | re.S)

    def patch_one_table(m):
        table_open, inner = m.group(1), m.group(2)
        table_html = table_open + inner + "</table>"

        # Extract caption content
        cap_m = re.search(r"<caption[^>]*>(.*?)</caption>", table_html, flags=re.I | re.S)
        caption_html = cap_m.group(1) if cap_m else ""

        # Trainer/Set name: take text right after the trainer image inside caption
        #   ... </img>Trainer NAME<span> · </span> <a ...>Open Calculator</a>
        t_m = re.search(r"</img>\s*([^<]+)", caption_html, flags=re.I | re.S)
        trainer_name = clean_text(t_m.group(1)) if t_m else clean_text(caption_html)
        trainer_name = trainer_name.replace("·", "").strip()

        # Species: first non-empty <th> text inside table
        species = None
        for th in re.findall(r"<th[^>]*>(.*?)</th>", table_html, flags=re.I | re.S):
            name = clean_text(th)
            if name:
                species = name
                break

        if not species:
            # Fallback: first non-empty alt of sprite <img alt="...">
            for alt in re.findall(r'<img[^>]+alt="([^"]+)"', table_html, flags=re.I | re.S):
                name = clean_text(alt)
                if name:
                    species = name
                    break

        if not species:
            # Nothing to do for this table
            return m.group(0)

        # Optional sanity: if species doesn't exist in setdex, keep anyway; calc's resolver will try name-match
        # Build href
        href = args.calc.rstrip("#")
        qs = "p2s=" + quote_plus(species)
        if trainer_name:
            qs += "&p2set=" + quote_plus(trainer_name)
        new_href = href + ("?" + qs if "?" not in href else "&" + qs)

        # Replace ONLY the anchor with 'Open Calculator' inside the caption
        def repl_anchor(a):
            full = a.group(0)
            text = clean_text(a.group("text"))
            if "open calculator" not in text.lower():
                return full
            attrs = a.group("attrs") or ""
            if re.search(r'href\s*=\s*["\']', attrs, flags=re.I):
                full2 = re.sub(r'(href\s*=\s*["\'])([^"\']*)(["\'])', r'\1' + new_href + r'\3', full, count=1, flags=re.I)
            else:
                full2 = full.replace("<a", '<a href="{}"'.format(new_href), 1)
            return full2

        anchor_re = re.compile(r'<a(?P<attrs>[^>]*)>(?P<text>.*?)</a>', flags=re.I | re.S)
        table_patched = anchor_re.sub(repl_anchor, table_html)

        return table_patched

    new_html = table_re.sub(patch_one_table, html)
    io.open(args.out, "w", encoding="utf-8", newline="\n").write(new_html)
    print("Rewritten:", args.out)

if __name__ == "__main__":
    main()
