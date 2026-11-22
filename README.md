# Coffee Day

A responsive café website for Coffee Day, Hitech City. Built with React + Vite and plain CSS. No backend, database or API keys.

## Run locally

```bash
npm install
npm run dev      # open the URL shown (usually http://localhost:5173)
npm run build    # creates the production site in dist/
npm run preview  # optional: preview the built site
```

## Customize

| What | Where |
| --- | --- |
| Phone, hours, location, hero image, directions link | `src/data/shop.js` |
| Menu items, prices (₹), descriptions, images | `src/data/menu.js` |
| Colors, fonts, spacing | `src/styles.css` (variables at the top) |
| Page text (hero, about) | `src/components/Hero.jsx`, `About.jsx` |

To use your own food photos, put them in `public/images/` and set `image: '/images/latte.jpg'`
(use `./images/latte.jpg` if you see a broken image on GitHub Pages). If any image fails to load,
the site shows a styled placeholder instead.

## Publish on GitHub Pages

1. Create a new GitHub repository and push this project to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Coffee Day website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds and deploys on every push to `main`.
   Your site will be live at `https://<your-username>.github.io/<your-repo>/`.

`vite.config.js` uses `base: './'`, so it works under any repository name.
