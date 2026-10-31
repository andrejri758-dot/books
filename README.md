# Book Haven

Book Haven is a simple book-catalog website. Visitors can browse a selection of books, see their authors, and explore genres.

## Project structure

- `index.html` is the page the browser opens. It contains the page title, SEO metadata, social-sharing metadata, structured data, and links to the site's styles and scripts.
- `64.js/64.js` uses React to build the page content, including the book list, genre labels, and book cards.
- `64.css/64.css` controls the appearance of the site: colors, spacing, layout, and responsive styles for smaller screens.
- `64.js/64.img/` contains image assets, including the site's favicon.
- `.github/workflows/deploy.yml` tells GitHub Actions how to publish the site with GitHub Pages.

The page uses React to create its interface. Babel translates JSX in the browser into JavaScript the browser can run.

## SEO improvements

SEO means making a website easier for search engines to understand and show in search results. The SEO-related changes are in `index.html`, `64.js/64.js`, and `64.css/64.css`.

### Page title and description

- The `<title>` sets the browser-tab name and the title search engines may show in results.
- The description meta tag gives search engines a short summary of the book catalog. It may appear below the title in search results.

### Preferred address and indexing

- The canonical URL identifies the preferred address of the page: `https://andrejri758-dot.github.io/books/`. This helps search engines recognize the main version of the page.
- The robots meta tag allows search engines to index the page and follow its links.

### Social sharing

Open Graph (`og:`) and Twitter tags specify the title and description that can appear when someone shares the site on social media.

### Structured data

The JSON-LD block describes the website in a format search engines can understand: its name, address, and a short description. It does not change how the page looks to visitors.

### Clear page structure

- There is one main `<h1>` heading that explains what the site offers.
- The book list is a section containing individual `<article>` cards.
- A short introduction and section labels help people and assistive technologies understand the content.
- Each book image has alternative text (`alt`) based on its title.

### Loading performance

- Book images lower on the page load only when needed (`loading="lazy"`). The first image loads immediately.
- The browser is asked to give the first book image a higher loading priority.
- Production versions of React and ReactDOM are used for the live site.

## Publishing with GitHub Pages

The site is published from the `64-site` branch. The workflow in `.github/workflows/deploy.yml` runs when changes are pushed to this branch, or it can be started manually from GitHub Actions.

For publishing to work, open **Settings → Pages** in the GitHub repository and select **GitHub Actions** as the publishing source. The workflow cannot enable Pages itself if GitHub does not grant it permission. If a deployment fails, check the Pages setting and rerun the workflow.

## Things to keep in mind

- SEO metadata can help search engines understand the site, but it does not guarantee a high search ranking or immediate indexing.
- The site must be published and accessible before search engines can index it.
- React renders the book catalog in the browser. The main SEO metadata is present directly in the HTML, while the heading and book cards appear after JavaScript runs.
- Book cover images are loaded from an external image service, so their availability depends on that service.
