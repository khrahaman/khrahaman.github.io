# khrahaman.github.io

Personal portfolio of Kazi Habibur Rahaman. Plain HTML, CSS and JavaScript, with no build step.

## Files

| File | What it is |
|---|---|
| `index.html` | All page content. Edit text here. |
| `styles.css` | Colors, fonts and layout. Colors are the variables at the top. |
| `script.js` | Footer year, plus pausing the animation for reduced-motion users. |
| `favicon.svg` | Browser tab icon. |
| `resume.pdf` | Linked from the "Download resume" buttons. Replace it to update. |

## Publish on GitHub Pages

1. Create a **public** repo named exactly `khrahaman.github.io`.
2. Upload these files to the root of the repo (not inside a subfolder).
3. Open **Settings > Pages**. Under "Build and deployment", set Source to
   **Deploy from a branch**, Branch to **main** and folder to **/ (root)**, then save.
4. After a minute or two the site is live at https://khrahaman.github.io

Using git instead of the upload page:

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/khrahaman/khrahaman.github.io.git
git push -u origin main
```

## Updating

Edit a file, then:

```bash
git add .
git commit -m "Update projects"
git push
```

The live site refreshes within a minute or two (hard-refresh your browser if you see the old version).

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000
