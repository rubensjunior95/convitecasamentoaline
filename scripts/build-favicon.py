"""Gera public/favicon.svg com o monograma de public/images/logo.png embutido."""

import base64
import io
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
LOGO = ROOT / "public" / "images" / "logo.png"
FAVICON = ROOT / "public" / "favicon.svg"

TEAL = "#0e6b5e"
GOLD = "#edc967"
RENDER_HEIGHT = 128
MONOGRAM_HEIGHT = 42.0


def drop_white_halo(image: Image.Image) -> Image.Image:
    """Descarta o rastro claro que sobrou da remoção do fundo branco do logo.

    O recorte original deixou uma faixa cinza-clara semitransparente em volta das
    letras, que vira uma franja visível quando o monograma é aplicado sobre o
    disco teal. Como essa faixa não tem cor da arte, ela é simplesmente removida
    e o antisserrilhado é refeito na redução de escala.
    """
    pixels = image.load()
    for y in range(image.height):
        for x in range(image.width):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue
            chroma = max(r, g, b) - min(r, g, b)
            is_halo = a < 200 or (chroma < 24 and min(r, g, b) > 200)
            pixels[x, y] = (r, g, b, 0) if is_halo else (r, g, b, 255)
    return image


def main() -> None:
    image = Image.open(LOGO).convert("RGBA")
    image = image.crop(image.getbbox())
    image = drop_white_halo(image)
    image = image.crop(image.getbbox())
    width = max(1, round(image.width * RENDER_HEIGHT / image.height))
    image = image.resize((width, RENDER_HEIGHT), Image.LANCZOS)

    buffer = io.BytesIO()
    image.save(buffer, format="PNG", optimize=True)
    encoded = base64.b64encode(buffer.getvalue()).decode("ascii")

    box_width = MONOGRAM_HEIGHT * width / RENDER_HEIGHT
    x = (64 - box_width) / 2
    y = (64 - MONOGRAM_HEIGHT) / 2
    href = "data:image/png;base64," + encoded

    svg = "\n".join(
        [
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Aline e Hebert">',
            f'  <circle cx="32" cy="32" r="32" fill="{TEAL}"/>',
            f'  <circle cx="32" cy="32" r="29" fill="none" stroke="{GOLD}" stroke-width="1" stroke-opacity="0.7"/>',
            f'  <image x="{x:.2f}" y="{y:.2f}" width="{box_width:.2f}" height="{MONOGRAM_HEIGHT:.2f}" href="{href}"/>',
            "</svg>",
            "",
        ]
    )

    FAVICON.write_text(svg, encoding="utf-8")
    print(f"favicon.svg: {len(svg.encode('utf-8'))} bytes, monograma {image.size}")


if __name__ == "__main__":
    main()
