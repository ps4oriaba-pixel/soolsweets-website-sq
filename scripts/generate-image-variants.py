#!/usr/bin/env python3
"""Pre-generate responsive WebP variants for every raster image under public/images.

Why: on Cloudflare there is no built-in Next.js image optimizer, so lib/image-loader.ts
points next/image at these static files instead (static assets are free and unlimited).

Output: public/img-v/<width>/<path-without-extension>.webp   (widths: 480, 960; larger requests use the original)
Run:    python3 scripts/generate-image-variants.py          (needs Pillow)
Re-running only (re)creates variants that are missing or older than their source.
"""
import os, sys
from PIL import Image

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
SRC = os.path.join(ROOT, 'public', 'images')
OUT = os.path.join(ROOT, 'public', 'img-v')
WIDTHS = [480, 960]
EXTS = ('.webp', '.png', '.jpg', '.jpeg')

made = skipped = 0
for dirpath, _, files in os.walk(SRC):
    for f in files:
        if not f.lower().endswith(EXTS):
            continue
        sp = os.path.join(dirpath, f)
        rel = os.path.splitext(os.path.relpath(sp, SRC))[0]
        im = None
        for w in WIDTHS:
            op = os.path.join(OUT, str(w), rel + '.webp')
            if os.path.exists(op) and os.path.getmtime(op) >= os.path.getmtime(sp):
                skipped += 1
                continue
            if im is None:
                im = Image.open(sp)
                im.load()
                if im.mode not in ('RGB', 'RGBA'):
                    im = im.convert('RGBA' if 'transparency' in im.info or im.mode in ('LA', 'P') else 'RGB')
            ow, oh = im.size
            nw = min(w, ow)
            nh = max(1, round(oh * nw / ow))
            out = im.resize((nw, nh), Image.LANCZOS) if nw != ow else im
            os.makedirs(os.path.dirname(op), exist_ok=True)
            out.save(op, 'WEBP', quality=80, method=4)
            made += 1
print(f'made {made}, up to date {skipped}')
