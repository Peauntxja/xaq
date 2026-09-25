#!/usr/bin/env python3
"""HPTA catalog in HIGHXLINK-style white layout. Website untouched."""

from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, white
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
OUT = ROOT / "output" / "HPTA_Catalog.pdf"

PAGE_W, PAGE_H = A4
MARGIN = 18 * mm
INK = HexColor("#111111")
MUTED = HexColor("#555555")
LINE = HexColor("#DDDDDD")
FONT_REG = "Helvetica"
FONT_BOLD = "Helvetica-Bold"

SHORT_SPECS = [
    ("Material", "Aluminum"),
    ("Stroke", "4.0mm"),
    ("Motor", "Brushless 8V 6500RPM"),
    ("Battery", "1500mAh"),
    ("Charge Time", "Approx. 2.5 hours"),
    ("Lasting Time", "Approx. 4.5 hours at 8V"),
    ("Operating voltage", "4-12V"),
    ("Charging", "USB-C"),
]

RS_SPECS = [
    ("Material", "Aluminum"),
    ("Stroke Length", "2.4–4.2 mm (7 steps)"),
    ("Motor", "8V, 6500RPM"),
    ("Display", "OLED color screen"),
    ("Output Voltage", "4–12 V"),
    ("Input Voltage", "DC 5V / 1–2 A"),
    ("Charging Port", "USB-C"),
    ("Battery Capacity", "1800 mAh"),
    ("Charge Time", "2.5 hours"),
    ("Average run time", "8 hours"),
    ("Net Weight", "275 g"),
    ("Size", "φ37 × 141 mm"),
]

PRODUCTS = {
    "short": [
        {"name": "J-7", "image": "products/J74.png", "colors": "Black / Blue / Green", "specs": SHORT_SPECS},
        {"name": "L-9", "image": "products/L93.png", "colors": "Brown / Black / Purple", "specs": SHORT_SPECS},
        {"name": "P-8", "image": "products/P82.png", "colors": "Silver / Gold / Brown", "specs": SHORT_SPECS},
    ],
    "stroke": [
        {"name": "RS", "image": "products/RS3.png", "colors": "Red / Silver / Black", "specs": RS_SPECS},
    ],
}


class Catalog:
    def __init__(self):
        OUT.parent.mkdir(parents=True, exist_ok=True)
        self.c = canvas.Canvas(str(OUT), pagesize=A4)
        self.page = 0

    def new_page(self):
        if self.page:
            self.footer()
            self.c.showPage()
        self.page += 1

    def footer(self):
        self.c.setStrokeColor(LINE)
        self.c.setLineWidth(0.5)
        self.c.line(MARGIN, 12 * mm, PAGE_W - MARGIN, 12 * mm)
        self.c.setFillColor(MUTED)
        self.c.setFont(FONT_REG, 8)
        self.c.drawString(MARGIN, 7 * mm, "HPTA  ·  PRODUCT CATALOG")
        self.c.drawRightString(PAGE_W - MARGIN, 7 * mm, f"{self.page:02d}")

    def draw_wrapped(self, text, x, y, max_w, size=9, leading=13, color=MUTED, bold=False):
        f = FONT_BOLD if bold else FONT_REG
        self.c.setFont(f, size)
        self.c.setFillColor(color)
        words = text.split(" ")
        lines, cur = [], ""
        for w in words:
            trial = (cur + " " + w).strip()
            if self.c.stringWidth(trial, f, size) <= max_w:
                cur = trial
            else:
                if cur:
                    lines.append(cur)
                cur = w
        if cur:
            lines.append(cur)
        for i, line in enumerate(lines):
            self.c.drawString(x, y - i * leading, line)
        return y - len(lines) * leading

    def img(self, rel, x, y, w, h):
        path = PUBLIC / rel
        if not path.exists():
            self.c.setFillColor(HexColor("#F5F5F5"))
            self.c.rect(x, y, w, h, fill=1, stroke=0)
            return
        ir = ImageReader(str(path))
        iw, ih = ir.getSize()
        scale = min(w / iw, h / ih)
        dw, dh = iw * scale, ih * scale
        self.c.drawImage(
            ir, x + (w - dw) / 2, y + (h - dh) / 2,
            width=dw, height=dh, mask="auto", preserveAspectRatio=True, anchor="c",
        )

    def cover(self):
        self.new_page()
        c = self.c
        c.setFillColor(white)
        c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 11)
        c.drawString(MARGIN, PAGE_H - 22 * mm, "CATALOG")
        c.setStrokeColor(INK)
        c.setLineWidth(1.2)
        c.line(MARGIN, PAGE_H - 24 * mm, MARGIN + 28 * mm, PAGE_H - 24 * mm)

        c.setFont(FONT_BOLD, 28)
        c.drawString(MARGIN, PAGE_H - 42 * mm, "HPTA")
        c.setFont(FONT_REG, 10)
        c.setFillColor(MUTED)
        c.drawString(MARGIN, PAGE_H - 50 * mm, "Hyper Professional Tattoo Assortment")

        self.img("brand/hpta-hero.png", MARGIN, 72 * mm, PAGE_W - 2 * MARGIN, 100 * mm)

        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 9)
        c.drawString(MARGIN, 58 * mm, "Battery Short Pen  ·  Battery Stroke Pen")
        c.setFont(FONT_REG, 8)
        c.setFillColor(MUTED)
        c.drawString(MARGIN, 52 * mm, "J-7  ·  L-9  ·  P-8  ·  RS")
        c.setFont(FONT_BOLD, 8)
        c.setFillColor(INK)
        c.drawString(MARGIN, 18 * mm, "PRODUCT CATALOG  ·  INQUIRE FOR PRICING")

    def product_page(self, series_title, series_sub, products):
        self.new_page()
        c = self.c
        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 14)
        c.drawString(MARGIN, PAGE_H - 24 * mm, series_title)
        c.setFont(FONT_REG, 8)
        c.setFillColor(MUTED)
        c.drawString(MARGIN, PAGE_H - 29 * mm, series_sub)

        n = len(products)
        gap = 5 * mm
        top = PAGE_H - 36 * mm
        col_w = (PAGE_W - 2 * MARGIN - (n - 1) * gap) / max(n, 1)
        img_h = 72 * mm if n == 1 else 52 * mm

        for i, p in enumerate(products):
            x = MARGIN + i * (col_w + gap)
            c.setStrokeColor(LINE)
            c.rect(x, top - img_h, col_w, img_h, stroke=1, fill=0)
            self.img(p["image"], x + 2 * mm, top - img_h + 2 * mm, col_w - 4 * mm, img_h - 4 * mm)

            ty = top - img_h - 6 * mm
            c.setFillColor(INK)
            c.setFont(FONT_BOLD, 11 if n == 1 else 10)
            c.drawString(x, ty, p["name"])
            ty -= 4.5 * mm
            c.setFont(FONT_REG, 7.5)
            c.setFillColor(MUTED)
            c.drawString(x, ty, f"Colors: {p['colors']}")

            ty -= 6 * mm
            c.setStrokeColor(LINE)
            c.setLineWidth(0.6)
            row_h = 5.2 * mm if n > 1 else 5.8 * mm
            fs = 6.5 if n > 1 else 8
            for k, v in p["specs"]:
                c.line(x, ty + 2.5 * mm, x + col_w, ty + 2.5 * mm)
                c.setFillColor(MUTED)
                c.setFont(FONT_REG, fs)
                c.drawString(x + 1 * mm, ty, k)
                c.setFillColor(INK)
                val = str(v)
                max_val = col_w * 0.55
                while self.c.stringWidth(val, FONT_REG, fs) > max_val and len(val) > 3:
                    val = val[:-4] + "…"
                c.drawRightString(x + col_w - 1 * mm, ty, val)
                ty -= row_h
            c.line(x, ty + 2.5 * mm, x + col_w, ty + 2.5 * mm)

    def contact(self):
        self.new_page()
        c = self.c
        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 22)
        c.drawString(MARGIN, PAGE_H - 36 * mm, "Inquire.")
        c.setFont(FONT_REG, 10)
        c.setFillColor(MUTED)
        y = self.draw_wrapped(
            "Pricing and distributor terms are available on inquiry. "
            "Include your studio or company details and the models you need.",
            MARGIN, PAGE_H - 48 * mm, PAGE_W - 2 * MARGIN, size=10, leading=15,
        )
        y -= 14 * mm
        c.setStrokeColor(INK)
        c.setLineWidth(1)
        c.line(MARGIN, y, MARGIN + 36 * mm, y)
        y -= 12 * mm

        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 12)
        c.drawString(MARGIN, y, "HPTA")
        y -= 5 * mm
        c.setFont(FONT_REG, 9)
        c.setFillColor(MUTED)
        c.drawString(MARGIN, y, "Hyper Professional Tattoo Assortment")
        y -= 12 * mm

        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 10)
        c.drawString(MARGIN, y, "Legal entity")
        y -= 6 * mm
        for line in [
            "SEISHIN CO., LIMITED",
            "FLAT/RM 602, 6/F, KAI YUE COMMERCIAL BUILDING,",
            "No.2C ARGYLE STREET, MONGKOK, KL",
            "Hong Kong",
        ]:
            c.setFont(FONT_REG, 9)
            c.setFillColor(MUTED)
            c.drawString(MARGIN, y, line)
            y -= 5 * mm

        y -= 10 * mm
        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 10)
        c.drawString(MARGIN, y, "Models")
        y -= 6 * mm
        c.setFont(FONT_REG, 9)
        c.setFillColor(MUTED)
        c.drawString(MARGIN, y, "J-7  ·  L-9  ·  P-8  ·  RS")

    def build(self):
        self.cover()
        self.product_page(
            "Battery Short Pen",
            "J-7, L-9 & P-8  ·  Compact battery pens  ·  Brushless motor  ·  4.0 mm stroke",
            PRODUCTS["short"],
        )
        self.product_page(
            "Battery Stroke Pen",
            "RS  ·  Adjustable stroke  ·  OLED display  ·  Extended battery life",
            PRODUCTS["stroke"],
        )
        self.contact()
        self.footer()
        self.c.save()
        print(f"Wrote {OUT} ({self.page} pages)")


if __name__ == "__main__":
    Catalog().build()
