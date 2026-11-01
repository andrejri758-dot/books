# Book Store

The 67-site book details page is published as the GitHub Pages homepage from the `64-site` branch.

## Project structure

- `index.html` is the GitHub Pages entry point. It loads React, Babel, and the page script.
- `67.html` is the original entry page for the 67-site.
- `67.js/67.js` renders the book details and related books.
- `67.css/67.css` styles the page and its responsive layout.
- `.github/workflows/deploy.yml` publishes the site with GitHub Pages.

The `64.css/` and `64.js/` files are preserved from the original site branch and are not used by this page.

## Publishing with GitHub Pages

The workflow deploys when changes are pushed to the `64-site` branch. In the repository settings, select **GitHub Actions** as the GitHub Pages publishing source.
