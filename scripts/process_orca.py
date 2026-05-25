"""Trim & invert the orca logo so it can be used as a CSS mask.

The original screenshot is a black orca on a white background.
We want: a tightly cropped PNG where the orca pixels are white-opaque
and everything else is transparent.  Used as `mask-image` over a
gradient div, this lets us recolor the orca to match the site theme.
"""
from PIL import Image, ImageOps
from pathlib import Path

SRC = Path(r"C:\Users\Emanuelly\Pictures\Screenshots\Screenshot 2026-05-25 114158.png")
DST = Path(r"C:\Users\Emanuelly\Documents\Portifolio\Portifolio-linktree\src\assets\orca-mask.png")

img = Image.open(SRC).convert("L")  # grayscale
w, h = img.size

# Find the bounding box of dark pixels (the orca itself).
inverted = ImageOps.invert(img)               # so orca becomes bright
bbox = inverted.point(lambda p: 255 if p > 60 else 0).getbbox()
if bbox is None:
    raise SystemExit("Could not find orca bounding box.")

# Crop with a small margin so the silhouette doesn't kiss the edges.
margin = 12
x0, y0, x1, y1 = bbox
x0 = max(0, x0 - margin)
y0 = max(0, y0 - margin)
x1 = min(w, x1 + margin)
y1 = min(h, y1 + margin)
cropped = img.crop((x0, y0, x1, y1))

# Build an RGBA where alpha is driven by darkness of the pixel.
# Dark pixels (the orca) → opaque white.  Light pixels → transparent.
rgba = Image.new("RGBA", cropped.size, (255, 255, 255, 0))
pixels = cropped.load()
out = rgba.load()
cw, ch = cropped.size
for y in range(ch):
    for x in range(cw):
        v = pixels[x, y]
        # invert: darker source → higher alpha
        a = max(0, 255 - v)
        # threshold + smoothstep-ish curve to keep edges crisp but anti-aliased
        if a < 30:
            a = 0
        else:
            # remap [30..255] -> [0..255]
            a = int(min(255, (a - 30) * 255 / (255 - 30)))
        if a > 0:
            out[x, y] = (255, 255, 255, a)

DST.parent.mkdir(parents=True, exist_ok=True)
rgba.save(DST, "PNG")
print(f"saved: {DST}  ({rgba.size[0]}x{rgba.size[1]})")
