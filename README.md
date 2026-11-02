# Book Haven

Book Haven is a responsive book discovery page published with GitHub Pages from the `64-site` branch.

## Project structure

- `index.html` is the GitHub Pages entry point; `64.html` is an alternate entry page.
- `64.ls/64.js` renders the book collection.
- `64.css/64.css` styles the page and its responsive layout.
- `.github/workflows/deploy.yml` publishes the site with GitHub Pages.
- Both HTML pages include search and social sharing metadata, canonical URLs, and WebSite structured data.

## Publishing with GitHub Pages

The workflow deploys when changes are pushed to the `64-site` branch. In the repository settings, select **GitHub Actions** as the GitHub Pages publishing source.
