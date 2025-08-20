
# VBS Solutions — 3D Modeling Portfolio

A clean, responsive portfolio site you can deploy to **GitHub Pages**.

## Quick start
1. Create a repo named `vbs-3d-portfolio` (or any name).
2. Upload these files (or drag the whole folder).
3. In GitHub: **Settings → Pages → Build and deployment → Source → Deploy from a branch**.
4. Select branch `main` and folder **/root** (or `/docs` if you move files there). Save.
5. Your site will be available at `https://<your-username>.github.io/<repo>/`.

### Customize
- Replace images in `/assets` with your renders.
- Edit colors/typography in `styles.css` (top `:root` variables).
- Update contact form: replace Formspree action with your endpoint or use `mailto:your@email.com`.
- Add more projects by duplicating a gallery `.tile` block in `index.html`.

### Local preview
Just open `index.html` in a browser, or use a simple HTTP server:
```bash
python3 -m http.server 8000
```

---
Built with vanilla HTML/CSS/JS for maximum performance and easy hosting.
