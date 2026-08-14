# Jannatun Ferdous — Portfolio Website

A personal portfolio site for Jannatun Ferdous — Software Engineering student, UI/UX designer,
and AI & automation enthusiast. Built with plain HTML5, CSS3, and vanilla JavaScript (no
frameworks, no build step).

## Live structure

```
portfolio-website/
├── index.html                 ← Home (Hero, About, Skills, Featured Work, Contact CTA)
├── 404.html
├── robots.txt
├── sitemap.xml
├── pages/
│   ├── projects.html          ← Project archive
│   ├── project-details.html   ← Reusable case-study template (?id=<project-id>)
│   ├── experience.html
│   ├── education.html
│   ├── competition.html
│   └── contact.html
├── css/
│   ├── tokens.css             ← Design tokens (color, type, spacing, motion)
│   ├── base.css                ← Reset, typography, buttons, cards, reveal animation
│   ├── nav-footer.css
│   ├── home.css
│   ├── inner-pages.css        ← Shared page-header + timeline used by several pages
│   ├── projects.css
│   ├── details.css
│   ├── competition.css
│   └── contact.css
├── js/
│   ├── main.js                ← Nav toggle, scroll-reveal, back-to-top, contact form
│   ├── projects-data.js       ← Single source of truth for all project content
│   └── details.js             ← Renders project-details.html from projects-data.js
└── assets/images/
    ├── profile/                ← Hero & About portraits
    ├── projects/                ← Project screenshots
    └── awards/                  ← Competition & award photos
```

## Design system

- **Palette:** "Moon" — `#F5D5E0` (blush), `#6667AB` (periwinkle), `#7B337E` (orchid),
  `#420D4B` (plum), `#210635` (night). Defined once in `css/tokens.css` as CSS custom
  properties — change them there and the whole site updates.
- **Type:** Fraunces (display/headings) + Inter (body/UI), loaded from Google Fonts.
- **Signature motif:** the moon's phases — used in the nav mark, the hero, and as a quiet
  visual metaphor for a learning journey (new → full).
- **Motion:** scroll-reveal via `IntersectionObserver`, respects `prefers-reduced-motion`.

## Content policy

All content mirrors `Portfolio Content Master Draft` exactly. Nothing is invented — no
fabricated statistics, employers, dates, or links. Where information isn't available yet
(resume file, blog posts), the site shows an honest empty state instead of a placeholder.

## Running locally

No build step required. Either open `index.html` directly, or serve the folder so relative
paths and the project-details query string behave exactly as in production:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Adding a new project

Add an entry to the array in `js/projects-data.js` (id, name, role, focus, category,
summary, overview, process, technologies, gallery, links). It will automatically appear on
the Projects archive if you add a matching card in `pages/projects.html`, and its case study
will render at `pages/project-details.html?id=<your-id>` with no other code changes.

## Deployment

Static files only — deploy to GitHub Pages, Netlify, or Vercel. Update the domain in
`robots.txt` and `sitemap.xml` once a real domain is chosen.
