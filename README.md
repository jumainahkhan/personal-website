# jumainah khan · personal website

My personal site: a galaxy you can stir, my career as a constellation, and the things I've built.

It's plain HTML, CSS and JavaScript. No build step, no framework, hosted free on GitHub Pages.

## Editing

| I want to… | Edit |
|---|---|
| Change my bio, skills, links | `assets/js/data.js` (top of the file) |
| Add or change a job | `journey` in `assets/js/data.js` (oldest first) |
| Add a project | `projects` in `assets/js/data.js`. Put a screenshot (1200×750 works best) in `assets/img/projects/` and set `img` and `alt`. `feature: true` shows it large. |
| Write a blog post | See below |
| Change colours or fonts | The tokens at the top of `assets/css/style.css` |

### Writing a blog post

1. Copy `blog/posts/_template.md` to `blog/posts/my-post.md` and write it in Markdown.
2. Add it to `blog/posts.js`:
   ```js
   { slug: "my-post", title: "My first post", date: "2026-11-20", summary: "One line under the title." },
   ```
3. Commit and push. The **Notes** section and nav link appear on the homepage as soon as there's one post.

Add `draft: true` to keep a post hidden while you work on it.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. (Opening `index.html` directly works too, except blog posts, which need a server.)

## Hosting

GitHub Pages serves the `main` branch root: **Settings → Pages → Deploy from a branch → `main` / `/ (root)`**.
