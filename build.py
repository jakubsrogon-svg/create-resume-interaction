"""Inline brand fonts and logo into src/prototype.html -> dist/create-resume-prototype.html."""
import base64, pathlib, re

root = pathlib.Path(__file__).parent
html = (root / "src/prototype.html").read_text()

def data_uri(path, mime):
    return f"data:{mime};base64," + base64.b64encode((root / path).read_bytes()).decode()

html = (html
    .replace("__GRAPHIK_400__", data_uri("assets/fonts/Graphik-Regular-Web.woff2", "font/woff2"))
    .replace("__GRAPHIK_500__", data_uri("assets/fonts/Graphik-Medium-Web.woff2", "font/woff2"))
    .replace("__HENK_400__", data_uri("assets/fonts/Henk-Work-Regular.woff", "font/woff"))
    .replace("__LOGO_SVG__", (root / "assets/kickresume-colored.svg").read_text().strip()
        .replace('width="152" height="24"', 'viewBox="0 0 152 24" width="152" height="24"')))

html = (html
    .replace("__AUTH_STEVE__", data_uri("assets/auth/steve.jpg", "image/jpeg"))
    .replace("__AUTH_IBRAHIM__", data_uri("assets/auth/ibrahim.jpg", "image/jpeg")))

# __ASSET:<path under assets/>__ becomes a data URI (the upgrade pages' logos, icons and photos)
MIME = {".svg": "image/svg+xml", ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg"}
html = re.sub(r"__ASSET:([\w./-]+)__", lambda m: data_uri("assets/" + m.group(1), MIME[pathlib.Path(m.group(1)).suffix]), html)

html = html.replace("__LOGO_SYMBOL__",(root / "assets/kickresume-symbol-red.svg").read_text().strip()
    .replace('width="71" height="77"', 'viewBox="0 0 71 77" width="71" height="77"'))

out = root / "dist/create-resume-prototype.html"
out.write_text(html)
print(f"wrote {out} ({out.stat().st_size // 1024} KB)")
