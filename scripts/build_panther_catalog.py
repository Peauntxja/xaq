#!/usr/bin/env python3
"""Rebuild Panther brochure in HIGHXLINK-style catalog layout. Website untouched."""

from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, white, black
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "tmp" / "panther-assets"
OUT = ROOT / "output" / "Panther_Catalog_Highxlink_Style.pdf"

PAGE_W, PAGE_H = A4
MARGIN = 18 * mm
INK = HexColor("#111111")
MUTED = HexColor("#555555")
LINE = HexColor("#DDDDDD")
ACCENT = HexColor("#1a1a1a")

# Prefer system CJK fonts on macOS
FONT_REG = "Helvetica"
FONT_BOLD = "Helvetica-Bold"
FONT_CJK = None
for name, path in [
    ("ArialUnicode", "/System/Library/Fonts/Supplemental/Arial Unicode.ttf"),
    ("Songti", "/System/Library/Fonts/Supplemental/Songti.ttc"),
    ("HiraginoSansGB", "/System/Library/Fonts/Hiragino Sans GB.ttc"),
]:
    p = Path(path)
    if not p.exists():
        continue
    try:
        if path.endswith(".ttc"):
            pdfmetrics.registerFont(TTFont(name, str(p), subfontIndex=0))
        else:
            pdfmetrics.registerFont(TTFont(name, str(p)))
        FONT_CJK = name
        break
    except Exception:
        continue


def font_for(text: str, bold=False) -> str:
    if FONT_CJK and any("\u4e00" <= c <= "\u9fff" for c in text):
        return FONT_CJK
    return FONT_BOLD if bold else FONT_REG


class Catalog:
    def __init__(self):
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
        self.c.drawString(MARGIN, 7 * mm, "PANTHER TATTOO  ·  BUSINESS CATALOG")
        self.c.drawRightString(PAGE_W - MARGIN, 7 * mm, f"{self.page:02d}")

    def draw_wrapped(self, text, x, y, max_w, size=9, leading=13, color=MUTED, bold=False, align="left"):
        f = font_for(text, bold)
        self.c.setFont(f, size)
        self.c.setFillColor(color)
        words = text.replace("\n", " \n ").split(" ")
        lines, cur = [], ""
        for w in words:
            if w == "\n":
                lines.append(cur)
                cur = ""
                continue
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
            yy = y - i * leading
            if align == "right":
                self.c.drawRightString(x + max_w, yy, line)
            else:
                self.c.drawString(x, yy, line)
        return y - len(lines) * leading

    def img(self, name, x, y, w, h, mask="auto"):
        path = ASSETS / name
        if not path.exists():
            self.c.setFillColor(HexColor("#F5F5F5"))
            self.c.rect(x, y, w, h, fill=1, stroke=0)
            return
        ir = ImageReader(str(path))
        iw, ih = ir.getSize()
        scale = min(w / iw, h / ih)
        dw, dh = iw * scale, ih * scale
        self.c.drawImage(ir, x + (w - dw) / 2, y + (h - dh) / 2, width=dw, height=dh, mask=mask, preserveAspectRatio=True, anchor="c")

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

        c.setFont(FONT_BOLD, 22)
        c.drawString(MARGIN, PAGE_H - 40 * mm, "PANTHER TATTOO")
        c.setFont(FONT_REG, 10)
        c.setFillColor(MUTED)
        c.drawString(MARGIN, PAGE_H - 48 * mm, "Engineered for Professional Artists")

        # hero image
        self.img("p01_01.png", MARGIN, 78 * mm, PAGE_W - 2 * MARGIN, 95 * mm)

        # company block
        y = 68 * mm
        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 9)
        c.drawString(MARGIN, y, "Panther Apex Engineering (Zhangzhou) Co., Ltd.")
        y -= 5 * mm
        for line in [
            "漳州黑豹智擎精密制造有限公司",
            "Building 8-1, No. 23, Zhangzhou High-End Manufacturing Industry Port,",
            "Longtou Road, Longwen District, Zhangzhou City, Fujian, CN",
            "Sales: Mary Ma  ·  Tel / WhatsApp / WeChat: +86 18020712620",
            "Email: 1375931156@qq.com",
        ]:
            f = font_for(line)
            c.setFont(f, 8)
            c.setFillColor(MUTED)
            c.drawString(MARGIN, y, line)
            y -= 4.2 * mm

        c.setFont(FONT_BOLD, 8)
        c.setFillColor(INK)
        c.drawString(MARGIN, 18 * mm, "BUSINESS BROCHURE  ·  黑豹纹身器材产品画册")

    def story(self):
        self.new_page()
        c = self.c
        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 26)
        c.drawString(MARGIN, PAGE_H - 35 * mm, "Built on Experience.")
        c.drawString(MARGIN, PAGE_H - 48 * mm, "Driven by Tattoo Culture.")

        left = (
            "We do not simply build Tattoo Products, we build Tattoo Culture. "
            "PANTHER Tattoo Supply started from PANTHER Tattoo Art Center. "
            "Since 2000, the center has been dedicated to tattoo art and training a new generation of artists."
        )
        mid = (
            "Founder Zhang Qingliang began as a professional tattoo artist. "
            "In the early 2000s, when Chinese artists often had to craft their own supplies, "
            "he developed machines for himself and his students — for artists, by an artist."
        )
        right = (
            "From coil machines to rotary machines to state-of-the-art tattoo pens, "
            "Panther backs high-quality, stable production — peaking at over two million "
            "machines per year. Quality, meticulous standards, and innovation remain the keys."
        )
        y = PAGE_H - 62 * mm
        y = self.draw_wrapped(left, MARGIN, y, PAGE_W - 2 * MARGIN, size=10, leading=15, color=MUTED)
        y -= 6 * mm
        y = self.draw_wrapped(mid, MARGIN, y, PAGE_W - 2 * MARGIN, size=10, leading=15, color=MUTED)
        y -= 6 * mm
        y = self.draw_wrapped(right, MARGIN, y, PAGE_W - 2 * MARGIN, size=10, leading=15, color=MUTED)

        y -= 10 * mm
        c.setStrokeColor(LINE)
        c.line(MARGIN, y, PAGE_W - MARGIN, y)
        y -= 10 * mm
        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 11)
        c.drawString(MARGIN, y, "PANTHER — Engineered for Professional Artists.")
        y -= 8 * mm
        cn = (
            "厦门黑豹纹身器材起源于黑豹纹身艺术中心。2000年开办以来致力于纹身与图案开发设计；"
            "2003年研发出黑豹第一台纹身机；2007年成立公司并持续扩建产线。"
            "2025年漳州黑豹智擎精密制造有限公司投产，工厂面积7500㎡以上。"
        )
        self.draw_wrapped(cn, MARGIN, y, PAGE_W - 2 * MARGIN, size=9, leading=14, color=MUTED)

        # metrics strip
        metrics = [("2000", "Art Center"), ("2003", "First Machine"), ("7500m²", "Factory"), ("QC", "Dedicated")]
        box_y = 28 * mm
        box_h = 22 * mm
        gap = 4 * mm
        box_w = (PAGE_W - 2 * MARGIN - 3 * gap) / 4
        for i, (val, label) in enumerate(metrics):
            x = MARGIN + i * (box_w + gap)
            c.setStrokeColor(LINE)
            c.setLineWidth(0.8)
            c.rect(x, box_y, box_w, box_h, stroke=1, fill=0)
            c.setFillColor(INK)
            c.setFont(FONT_BOLD, 14)
            c.drawCentredString(x + box_w / 2, box_y + 11 * mm, val)
            c.setFont(FONT_REG, 7)
            c.setFillColor(MUTED)
            c.drawCentredString(x + box_w / 2, box_y + 5 * mm, label)

    def factory(self):
        self.new_page()
        c = self.c
        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 22)
        c.drawString(MARGIN, PAGE_H - 32 * mm, "Precision Manufacturing.")
        c.setFont(FONT_REG, 10)
        c.setFillColor(MUTED)
        c.drawString(MARGIN, PAGE_H - 40 * mm, "Factory · Assembly · QC · Packaging")

        photos = [
            ("p03_00.png", "Factory Workshop"),
            ("p03_04.png", "Assembly"),
            ("p04_00.png", "Quality Inspection"),
            ("p05_00.png", "Packing Workshop"),
            ("p05_05.png", "Prototypes"),
            ("p04_02.png", "Laser / Testing"),
        ]
        cols, rows = 3, 2
        gap = 4 * mm
        top = PAGE_H - 50 * mm
        avail_h = top - 28 * mm
        cell_w = (PAGE_W - 2 * MARGIN - (cols - 1) * gap) / cols
        cell_h = (avail_h - (rows - 1) * gap) / rows
        for i, (name, caption) in enumerate(photos):
            r, col = divmod(i, cols)
            x = MARGIN + col * (cell_w + gap)
            y = top - (r + 1) * cell_h - r * gap
            c.setStrokeColor(LINE)
            c.rect(x, y, cell_w, cell_h, stroke=1, fill=0)
            self.img(name, x + 2 * mm, y + 8 * mm, cell_w - 4 * mm, cell_h - 12 * mm)
            c.setFillColor(MUTED)
            c.setFont(FONT_REG, 7)
            c.drawString(x + 2 * mm, y + 3 * mm, caption)

    def chapter(self, eyebrow, title, body, footer_tag):
        self.new_page()
        c = self.c
        c.setFillColor(MUTED)
        c.setFont(FONT_BOLD, 9)
        c.drawString(MARGIN, PAGE_H - 28 * mm, eyebrow)
        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 24)
        # title may be multi-line
        lines = title.split("\n")
        y = PAGE_H - 42 * mm
        for line in lines:
            c.setFont(font_for(line, True), 22 if FONT_CJK and any("\u4e00" <= ch <= "\u9fff" for ch in line) else 24)
            c.drawString(MARGIN, y, line)
            y -= 10 * mm
        y -= 4 * mm
        y = self.draw_wrapped(body, MARGIN, y, PAGE_W - 2 * MARGIN, size=10, leading=15, color=MUTED)
        y -= 12 * mm
        c.setStrokeColor(INK)
        c.setLineWidth(1)
        c.line(MARGIN, y, MARGIN + 40 * mm, y)
        y -= 8 * mm
        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 10)
        c.drawString(MARGIN, y, footer_tag)
        c.setFont(FONT_REG, 9)
        c.setFillColor(MUTED)
        c.drawRightString(PAGE_W - MARGIN, y, "PANTHER — Engineered for Professional Artists.")

    def product_page(self, series_title, series_sub, products):
        """products: list of dict name, cn, image, specs list of (k,v)"""
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
        img_h = 58 * mm if n <= 2 else 48 * mm

        for i, p in enumerate(products):
            x = MARGIN + i * (col_w + gap)
            # image frame
            c.setStrokeColor(LINE)
            c.rect(x, top - img_h, col_w, img_h, stroke=1, fill=0)
            self.img(p["image"], x + 2 * mm, top - img_h + 2 * mm, col_w - 4 * mm, img_h - 4 * mm)

            ty = top - img_h - 6 * mm
            c.setFillColor(INK)
            c.setFont(FONT_BOLD, 10)
            c.drawString(x, ty, p["name"])
            ty -= 4.5 * mm
            c.setFont(font_for(p["cn"]), 8)
            c.setFillColor(MUTED)
            c.drawString(x, ty, p["cn"])

            # specs table
            ty -= 6 * mm
            c.setStrokeColor(LINE)
            c.setLineWidth(0.6)
            row_h = 5.2 * mm
            for k, v in p["specs"]:
                c.line(x, ty + 2.5 * mm, x + col_w, ty + 2.5 * mm)
                c.setFillColor(MUTED)
                c.setFont(FONT_REG, 6.5)
                c.drawString(x + 1 * mm, ty, k)
                c.setFillColor(INK)
                c.setFont(FONT_REG, 6.5)
                # wrap value if needed
                val = str(v)
                while self.c.stringWidth(val, FONT_REG, 6.5) > col_w * 0.55 and len(val) > 3:
                    val = val[:-4] + "…"
                c.drawRightString(x + col_w - 1 * mm, ty, val)
                ty -= row_h
            c.line(x, ty + 2.5 * mm, x + col_w, ty + 2.5 * mm)

    def patents(self):
        self.new_page()
        c = self.c
        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 22)
        c.drawString(MARGIN, PAGE_H - 32 * mm, "Patents.")
        c.setFont(FONT_REG, 9)
        c.setFillColor(MUTED)
        body = (
            "These utility-model patents represent in-house original R&D. "
            "Panther pioneered these structures; most similar structures in today's market "
            "are based on proprietary designs."
        )
        y = self.draw_wrapped(body, MARGIN, PAGE_H - 42 * mm, PAGE_W - 2 * MARGIN, size=9, leading=13)

        patents = [
            ("Adjustable Stroke Tattoo Pen", "ZL20212365182.4", "可调行程纹身笔", "p11_00.png"),
            ("Short Battery Tattoo Pen", "ZL202121365232.9", "纹身电池短笔", "p11_01.png"),
            ("Speed-Adjustable Tattoo Pen", "ZL202222954249.9", "可调速度纹身笔", "p11_02.png"),
            ("Battery Grip", "ZL202121365204.7", "纹身机电池手柄", "p11_03.png"),
        ]
        y -= 8 * mm
        gap = 5 * mm
        cell_w = (PAGE_W - 2 * MARGIN - gap) / 2
        cell_h = 48 * mm
        for i, (en, no, cn, img) in enumerate(patents):
            r, col = divmod(i, 2)
            x = MARGIN + col * (cell_w + gap)
            yy = y - (r + 1) * cell_h - r * gap
            c.setStrokeColor(LINE)
            c.rect(x, yy, cell_w, cell_h, stroke=1, fill=0)
            self.img(img, x + 3 * mm, yy + 14 * mm, cell_w - 6 * mm, cell_h - 20 * mm)
            c.setFillColor(INK)
            c.setFont(FONT_BOLD, 8)
            c.drawString(x + 3 * mm, yy + 9 * mm, en)
            c.setFont(font_for(cn), 7)
            c.setFillColor(MUTED)
            c.drawString(x + 3 * mm, yy + 4.5 * mm, f"{cn}  ·  {no}")

    def timeline(self):
        self.new_page()
        c = self.c
        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 22)
        c.drawString(MARGIN, PAGE_H - 32 * mm, "Development History.")
        items = [
            ("2000", "Founded Panther Tattoo Art Center — tattoo design & education."),
            ("2003", "First Panther-brand tattoo machine — widely praised in trials."),
            ("2007", "Panther Commercial & Trade Co., Ltd. established (1000m²+, 40+ staff)."),
            ("2011–2016", "Expanded to Tong'an industrial sites (2000m² → 5000m²+)."),
            ("2018", "Panther Culture Communication studio for artist evaluation."),
            ("2020–2022", "Battery grip, adjustable stroke, shortest battery pen, adjustable speed."),
            ("2025", "Panther Apex Engineering (Zhangzhou) opens — 7500m²+ factory."),
            ("2026", "Standardized mass-production lines — global delivery capability."),
        ]
        y = PAGE_H - 48 * mm
        for year, text in items:
            c.setStrokeColor(LINE)
            c.line(MARGIN, y + 4 * mm, PAGE_W - MARGIN, y + 4 * mm)
            c.setFillColor(INK)
            c.setFont(FONT_BOLD, 10)
            c.drawString(MARGIN, y - 2 * mm, year)
            self.draw_wrapped(text, MARGIN + 32 * mm, y - 2 * mm, PAGE_W - MARGIN - 32 * mm - MARGIN, size=9, leading=12, color=MUTED)
            y -= 18 * mm

    def contact(self):
        self.new_page()
        c = self.c
        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 22)
        c.drawString(MARGIN, PAGE_H - 36 * mm, "Contact.")
        c.setFont(FONT_REG, 10)
        c.setFillColor(MUTED)
        lines = [
            "Panther Apex Engineering (Zhangzhou) Co., Ltd.",
            "漳州黑豹智擎精密制造有限公司",
            "",
            "Address / 地址",
            "Building 8-1, No. 23, Zhangzhou High-End Manufacturing Industry Port,",
            "Longtou Road, Longwen District, Zhangzhou City, Fujian Province, CN",
            "福建省漳州市龙文区龙头路漳州高端制造产业港23号8-1幢",
            "",
            "Sales Manager / 联系人: Mary Ma / 马翠红",
            "Tel / WhatsApp / WeChat: +86 18020712620",
            "Email: 1375931156@qq.com",
            "QQ: 1375931156",
        ]
        y = PAGE_H - 52 * mm
        for line in lines:
            if not line:
                y -= 4 * mm
                continue
            c.setFont(font_for(line, bold=line.startswith("Address") or line.startswith("Sales") or "Co., Ltd" in line), 9 if not line.startswith("Address") else 8)
            c.setFillColor(INK if "Co., Ltd" in line or line.startswith("Sales") else MUTED)
            c.drawString(MARGIN, y, line)
            y -= 5.5 * mm

        self.img("p01_01.png", MARGIN, 28 * mm, PAGE_W - 2 * MARGIN, 55 * mm)
        c.setFillColor(INK)
        c.setFont(FONT_BOLD, 9)
        c.drawString(MARGIN, 20 * mm, "PANTHER TATTOO  ·  Engineered for Professional Artists.")

    def build(self):
        self.cover()
        self.story()
        self.factory()
        self.timeline()
        self.patents()
        self.chapter(
            "02  PRODUCT INTRODUCTION",
            "Battery Tattoo Pens.\nConsistent Power.",
            "Panther battery tattoo pens are engineered for professional lining, packing, and long sessions. "
            "Each model lists material, stroke, motor, voltage/frequency, battery capacity, charging, weight, and size — "
            "presented in a clean catalog table format for quick comparison.",
            "BATTERY TATTOO PEN",
        )
        self.product_page(
            "M1 / INTELLI",
            "Battery Tattoo Pen",
            [
                {
                    "name": "M1 Tattoo Pen",
                    "cn": "M1电池笔",
                    "image": "p14_00.png",
                    "specs": [
                        ("Material", "Aluminum + Modified ABS"),
                        ("Stroke", "4.0 mm"),
                        ("Motor", "Outrunner Brushless"),
                        ("Operate Volt", "4–12 V"),
                        ("Battery", "Po-Li 2000 mAh"),
                        ("Charging", "USB-C Fast Charge"),
                        ("Net Weight", "207 g"),
                        ("Size", "36 × 124 mm"),
                    ],
                },
                {
                    "name": "Intelli",
                    "cn": "智彩电池笔",
                    "image": "p14_01.png",
                    "specs": [
                        ("Material", "Aluminum"),
                        ("Stroke", "4.0 mm"),
                        ("Motor", "Brushless 8V 6500 RPM"),
                        ("Operate Volt", "4–12 V"),
                        ("Battery", "Po-Li 1800 mAh"),
                        ("Charging", "USB-C"),
                        ("Net Weight", "165 g"),
                        ("Size", "32 × 131 mm"),
                    ],
                },
            ],
        )
        self.product_page(
            "HESTIA / POWERMAX / NANO",
            "Battery Tattoo Pen",
            [
                {
                    "name": "Hestia",
                    "cn": "赫斯提亚",
                    "image": "p15_00.png",
                    "specs": [
                        ("Material", "Aluminum"),
                        ("Stroke", "2.5 / 3.5 / 4.0 mm"),
                        ("Motor", "Coreless 8V/6500 RPM"),
                        ("Operate Volt", "4–12 V"),
                        ("Battery", "Po-Li 750 mAh"),
                        ("Charging", "USB-C"),
                        ("Net Weight", "105 g"),
                        ("Size", "23 × 133 mm"),
                    ],
                },
                {
                    "name": "PowerMax",
                    "cn": "力王调速笔",
                    "image": "p15_01.png",
                    "specs": [
                        ("Material", "Aluminum"),
                        ("Stroke", "4.0 mm"),
                        ("Motor", "Brushless (speed adj.)"),
                        ("Operate Freq.", "3–150 Hz"),
                        ("Battery", "Po-Li 1500 mAh"),
                        ("Charging", "USB-C"),
                        ("Net Weight", "160 g"),
                        ("Size", "32 × 130 mm"),
                    ],
                },
                {
                    "name": "NANO",
                    "cn": "纳诺电池短笔",
                    "image": "p15_02.png",
                    "specs": [
                        ("Material", "Aluminum"),
                        ("Stroke", "4.0 mm"),
                        ("Motor", "Brushless"),
                        ("Operate Volt", "4–12 V"),
                        ("Battery", "Po-Li 1520 mAh"),
                        ("Charging", "USB-C"),
                        ("Net Weight", "127 g"),
                        ("Size", "33 × 92 mm"),
                    ],
                },
            ],
        )
        self.product_page(
            "SMART PRO / POWERMAX V1 / STOKE MINI",
            "Battery Tattoo Pen",
            [
                {
                    "name": "Smart Pro",
                    "cn": "火星无线行程笔",
                    "image": "p16_00.png",
                    "specs": [
                        ("Material", "Aluminum"),
                        ("Stroke", "2.4–4.2 mm (7 steps)"),
                        ("Motor", "Coreless"),
                        ("Operate Volt", "4–12 V"),
                        ("Battery", "Po-Li 1500 mAh"),
                        ("Charging", "USB-C"),
                        ("Net Weight", "215 g"),
                        ("Size", "36 × 107 mm"),
                    ],
                },
                {
                    "name": "PowerMax V1",
                    "cn": "调速笔一代",
                    "image": "p16_01.png",
                    "specs": [
                        ("Material", "Aluminum"),
                        ("Stroke", "4.0 mm"),
                        ("Motor", "Brushless"),
                        ("Speed", "180–9000 rpm"),
                        ("Battery", "Po-Li 1500 mAh"),
                        ("Charging", "USB-C"),
                        ("Net Weight", "160 g"),
                        ("Size", "32 × 112 mm"),
                    ],
                },
                {
                    "name": "Stoke Mini",
                    "cn": "电池行程细笔",
                    "image": "p16_02.png",
                    "specs": [
                        ("Material", "Aluminum"),
                        ("Stroke", "2.5 / 3.0 / 3.5 / 4.0"),
                        ("Motor", "Coreless 8V/6500"),
                        ("Operate Volt", "4–12 V"),
                        ("Battery", "Po-Li 750 mAh"),
                        ("Charging", "USB-C"),
                        ("Net Weight", "164 g"),
                        ("Size", "28 × 142 mm"),
                    ],
                },
            ],
        )
        self.chapter(
            "02  PRODUCT INTRODUCTION",
            "Traditional Pens &\nPower Supply.",
            "Wired traditional tattoo pens and the BigBox power supply complete the professional bench setup — "
            "clear voltage guidance, motor type, and compact dimensions for studio use.",
            "TRADITIONAL PEN  ·  POWER SUPPLY",
        )
        self.product_page(
            "HB095 / HB139 / HB247",
            "Traditional Tattoo Pen",
            [
                {
                    "name": "HB095",
                    "cn": "软硬笔",
                    "image": "p17_00.png",
                    "specs": [
                        ("Material", "Aluminum"),
                        ("Stroke", "3.2 / 3.7 mm"),
                        ("Motor", "Ironcore (custom)"),
                        ("Operate Volt", "≤ 8 V suggested"),
                        ("Net Weight", "150 g"),
                        ("Size", "31 × 122 mm"),
                    ],
                },
                {
                    "name": "HB139",
                    "cn": "变形金刚",
                    "image": "p17_01.png",
                    "specs": [
                        ("Material", "Aluminum"),
                        ("Stroke", "3.5 mm"),
                        ("Motor", "Coreless 8V/6500"),
                        ("Operate Volt", "≤ 10 V suggested"),
                        ("Net Weight", "151 g"),
                        ("Size", "40 × 89 mm"),
                    ],
                },
                {
                    "name": "HB247",
                    "cn": "火星行程笔",
                    "image": "p17_02.png",
                    "specs": [
                        ("Material", "Aluminum"),
                        ("Stroke", "2.4–4.2 mm (7 steps)"),
                        ("Motor", "Coreless"),
                        ("Operate Volt", "≤ 10 V suggested"),
                        ("Net Weight", "163 g"),
                        ("Size", "32 × 118 mm"),
                    ],
                },
            ],
        )
        self.product_page(
            "BIGBOX",
            "Tattoo Power Supply",
            [
                {
                    "name": "BigBox",
                    "cn": "长方形电源",
                    "image": "p18_00.png",
                    "specs": [
                        ("Material", "Aluminum"),
                        ("Adapter", "3.42 A"),
                        ("Jumpstart", "10 V in 0.2 s"),
                        ("Volt", "0–18 V"),
                        ("Net Weight", "349 g"),
                        ("Size", "113 × 65 × 38 mm"),
                    ],
                },
            ],
        )
        self.contact()
        self.footer()
        self.c.save()
        print(str(OUT))


if __name__ == "__main__":
    Catalog().build()
