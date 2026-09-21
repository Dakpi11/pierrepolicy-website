# Pierre Policy & Strategy Consulting — website

Live site: https://dakpi11.github.io/pierrepolicy-website/

## How the site works

The site is hosted free on **GitHub Pages**, which builds it with **Jekyll** every time something changes (1–2 minutes).

| Part | Where it lives |
|---|---|
| Main pages (Home, Crisis Monitor, Research, Contracting, About) | `index.html`, `crisis-monitor.html`, `papers.html`, `contracting.html`, `about.html` |
| Styles for every page | `style.css` (after editing, bump `?v=` in each page's stylesheet link) |
| Articles | one Markdown file each in `_posts/` |
| Article layout (header, key points, notes, author box, More analysis) | `_layouts/article.html` |
| Article list used by the homepage and Research page | `articles.js` (generated automatically from `_posts/`, do not edit by hand) |
| Crisis Monitor figures and backgrounds | the `COUNTRIES` list near the top of `crisis-monitor.html` |
| Admin dashboard settings | `.pages.yml` |
| Uploaded images and PDFs | `assets/uploads/` |
| Site settings (address, author) | `_config.yml` |

## Writing and publishing an article (no code needed)

1. Go to **https://app.pagescms.org** and sign in with GitHub. Open `pierrepolicy-website`.
2. Click **Articles → Add an entry**.
3. Fill in the fields: title, date, topic tag, summary, key points, author, optional PDF.
4. Write or paste the article into **Article text**. Use the toolbar for headings, bold, links, lists, quotes, tables and images.
5. **Sources:** add each source as a separate entry under **Notes / sources**, then type `[1]`, `[2]` … in the text where you cite them. They become clickable footnotes automatically.
6. Leave **Status = Draft** and save. After about 2 minutes the draft can be previewed at
   `https://dakpi11.github.io/pierrepolicy-website/articles/<file-name>/`
   It is marked DRAFT, hidden from the homepage, Research page, sitemap and search engines.
7. When it is ready, change **Status → Published** and save. It becomes the featured article on the homepage and appears on the Research page.

Note: draft pages are unlisted, not password-protected. Anyone with the exact link could open one.

## Adding team members

Repository **Settings → Collaborators → Add people**. They can then sign in to Pages CMS with their own GitHub account.

## Backups and reverting

- Every change is saved in the repository history (Commits), so any version can be restored.
- The `stock-site` branch holds the site as it was before the article system was added.

## Custom domain (later)

1. Buy the domain and add DNS records: four `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; `CNAME` `www` → `dakpi11.github.io`.
2. Repository **Settings → Pages → Custom domain**, then **Enforce HTTPS**.
3. In `_config.yml` set `url: "https://yourdomain.com"` and `baseurl: ""`.
4. Update the `og:url` / `og:image` addresses in the five main pages, the SAM record, and the capability statement.
