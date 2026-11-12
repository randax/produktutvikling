# PROTOTYPE – draws the Heima-appen home screen as a texture for the phone in the renders.
from PIL import Image, ImageDraw, ImageFont

W, H = 720, 1560
img = Image.new("RGB", (W, H), (247, 246, 243))
d = ImageDraw.Draw(img)
F = "/System/Library/Fonts/SFNS.ttf"
f = lambda s: ImageFont.truetype(F, s)
INK, MUTED, LINE, OK, OKS, GLOW = (23, 34, 58), (92, 103, 122), (227, 229, 233), (47, 122, 79), (226, 241, 231), (242, 166, 60)

d.text((56, 52), "21:14", font=f(30), fill=INK)
d.rounded_rectangle((W // 2 - 90, 30, W // 2 + 90, 82), 26, fill=(0, 0, 0))
d.text((48, 150), "Bilete", font=f(72), fill=INK)
d.rounded_rectangle((48, 262, 420, 316), 27, fill=OKS)
d.text((72, 272), "✓  Alt er teke vare på", font=f(28), fill=OK)
d.rounded_rectangle((48, 346, W - 48, 426), 22, fill=(255, 255, 255), outline=LINE, width=2)
d.text((80, 368), "Søk, til dømes «hytta 2019»", font=f(30), fill=MUTED)
d.rounded_rectangle((48, 456, W - 48, 586), 26, fill=(255, 255, 255), outline=LINE, width=2)
d.rounded_rectangle((74, 480, 156, 562), 20, fill=(246, 231, 208))
d.text((180, 486), "Familiealbumet", font=f(34), fill=INK)
d.text((180, 532), "Delt med Kari, Ola, Anne", font=f(26), fill=MUTED)
d.text((48, 616), "Nyleg", font=f(34), fill=INK)

cols = [((201, 165, 123), (110, 127, 145)), ((143, 169, 184), (62, 84, 104)), ((216, 195, 165), (160, 112, 74)),
        ((157, 181, 154), (78, 107, 83)), ((226, 201, 160), (192, 122, 68)), ((184, 196, 208), (92, 107, 128))]
size, gap, x0, y0 = (W - 96 - 16) // 3, 8, 48, 672
for i in range(12):
    a, b = cols[i % len(cols)]
    tile = Image.new("RGB", (size, size))
    td = ImageDraw.Draw(tile)
    for y in range(size):
        t = y / size
        td.line((0, y, size, y), fill=tuple(int(a[k] * (1 - t) + b[k] * t) for k in range(3)))
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size, size), 14, fill=255)
    img.paste(tile, (x0 + (i % 3) * (size + gap), y0 + (i // 3) * (size + gap)), mask)

d.rectangle((0, H - 150, W, H), fill=(255, 255, 255))
d.line((0, H - 150, W, H - 150), fill=LINE, width=2)
for i, label in enumerate(["Bilete", "Dokument", "Spør", "Familie"]):
    cx = int(W / 8 + i * W / 4)
    col = (181, 105, 15) if i == 0 else MUTED
    d.ellipse((cx - 16, H - 128, cx + 16, H - 96), fill=GLOW if i == 0 else LINE)
    tw = d.textlength(label, font=f(24))
    d.text((cx - tw / 2, H - 84), label, font=f(24), fill=col)

img.save("out/phone_screen.png")
print("WROTE out/phone_screen.png")
