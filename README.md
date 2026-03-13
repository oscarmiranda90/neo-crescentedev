# crescente.dev — Neobrutalist Portfolio Template

A bold, fast, bilingual developer portfolio built with React + TypeScript, styled in **neobrutalism** (thick borders, hard drop shadows, high-contrast yellow accent). Fork it, swap your info, deploy in minutes.

Live example → [crescente.dev](https://crescente.dev)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS v4 + tw-animate-css |
| Components | Radix UI primitives |
| Routing | React Router v6 |
| i18n | i18next (EN / ES) |
| Blog | Markdown files + gray-matter + marked |
| Deployment | Cloudflare Workers (via Wrangler) |

---

## Getting Started

```bash
git clone https://github.com/oscarmiranda90/neo-crescentedev.git my-portfolio
cd my-portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and you're live locally.

---

## Customization Guide

All user-facing content lives in a small number of files. You don't need to touch any component logic.

### 1. Your name, title & bio — `src/i18n/en.json` and `src/i18n/es.json`

Every text string on the site is driven by these two files. Open them and replace the values:

```jsonc
// src/i18n/en.json
{
  "hero": {
    "greeting": "Hi, I'm",
    "name": "Your Name",                        // ← your name
    "title": "Your Role Here",                  // ← e.g. "Full-Stack Developer"
    "subtitle": "One-line pitch about what you build."
  },
  "about": {
    "bio1": "First paragraph about you.",
    "bio2": "Second paragraph.",
    "bio3": "Third paragraph.",
    "bio4": "Fourth paragraph."
  },
  "contact": {
    "heading": "Let's work together.",
    "subtext": "A short call-to-action line."
  },
  "footer": {
    "copy": "© 2026 Your Name"                  // ← update year & name
  }
}
```

Mirror the same changes in `src/i18n/es.json` if you want Spanish support. If you only need one language, just keep both files identical.

---

### 2. Your projects — `src/data/projects.ts`

Each project is an object in the `projects` array:

```ts
{
  id: 1,
  title: 'Your Project Name',
  description: {
    en: 'Short English description.',
    es: 'Descripción en español.',             // remove if single-language
  },
  image: 'https://placehold.co/600x400/FDE047/000000?text=MyApp', // or a real image URL
  liveUrl: 'https://yourproject.com',
}
```

Use [placehold.co](https://placehold.co) for quick placeholder images, or drop real screenshots in `src/assets/` and import them.

---

### 3. Social links & contact — `src/components/sections/Contact.tsx`

Update the `SOCIALS` array and the `mailto` / WhatsApp links:

```tsx
const SOCIALS = [
  { label: 'GitHub',     url: 'https://github.com/yourusername' },
  { label: 'LinkedIn',   url: 'https://linkedin.com/in/yourusername' },
  { label: 'Twitter / X', url: 'https://x.com/yourhandle' },
]

// Email button — line ~28
<a href="mailto:you@yourdomain.com">

// WhatsApp button — line ~33 (remove this block if not needed)
<a href="https://wa.me/1234567890">
```

---

### 4. Photos — `src/assets/`

Replace these two images with your own (keep the same filenames or update the imports):

| File | Used in |
|---|---|
| `oscar_travel.png` | Hero section (right column) |
| `oscar-portrait.png` | About section |

Any format works (`.png`, `.jpg`, `.webp`). Vite will auto-optimize them.

---

### 5. Accent color & fonts — `tailwind.config.ts`

The neobrutalist yellow is one line. Change `main` to any hex color:

```ts
colors: {
  main: '#FDE047',      // ← your accent color (buttons, highlights, contact bg)
  bg:   '#FFFBF0',      // ← page background
  text: '#000000',      // ← primary text
},
```

Fonts are loaded from Google Fonts in `index.html`. The defaults are **Space Grotesk** (body) and **Space Mono** (code/labels). Swap them by updating both the `<link>` tag in `index.html` and the `fontFamily` values in `tailwind.config.ts`.

---

### 6. SEO & social preview — `index.html`

```html
<meta name="description" content="Your Name — Your Role" />
<meta property="og:title" content="yourdomain.com" />
<meta property="og:description" content="Your Name — Your Role" />
<meta property="og:url" content="https://yourdomain.com" />
<meta property="og:image" content="https://yourdomain.com/og.png" />
<meta name="twitter:image" content="https://yourdomain.com/og.png" />
```

Replace `og.png` in `public/` with your own 1200×630 banner image. If you have an SVG version, convert it to PNG (Twitter/X requires raster):

```bash
magick your-banner.svg -resize 1200x630 public/og.png
```

---

### 7. Résumé / CV — `public/`

Drop your PDF files here:

```
public/cv_en.pdf   ← served when site language is English
public/cv_es.pdf   ← served when site language is Spanish
```

If you only have one CV, put the same file under both names. The About section "Download Resume" button automatically picks the right one based on the active language.

---

### 8. Favicon — `public/favicon.svg`

Replace `public/favicon.svg` with your own icon. SVG favicons are supported by all modern browsers.

---

## Deployment

### Cloudflare Workers (recommended — free tier)

1. Install and authenticate Wrangler:
   ```bash
   npm install -g wrangler
   wrangler login
   ```
2. Edit `wrangler.toml` — update the `name` and `routes` to your domain:
   ```toml
   name = "my-portfolio"

   [[routes]]
   pattern = "yourdomain.com"
   custom_domain = true
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```

### Any static host (Netlify, Vercel, GitHub Pages)

```bash
npm run build   # outputs to /dist
```

Point your host to the `dist/` folder. The site is a standard SPA — make sure to configure **all routes to serve `index.html`** (404 fallback).

---

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Projects, BlogPreview, Contact
│   ├── stars/        # Decorative SVG star shapes
│   └── ui/           # Button, Badge, Card, Accordion, ImageCard
├── data/
│   └── projects.ts   # ← your projects list
├── i18n/
│   ├── en.json       # ← English copy
│   └── es.json       # ← Spanish copy
├── lib/
│   ├── posts.ts      # Blog post loader (reads src/posts/*.md at build time)
│   └── utils.ts      # Utility functions
├── pages/            # Route-level pages
└── posts/            # ← drop .md files here to publish a blog post
public/
├── og.png            # Social preview image (1200×630)
├── cv_en.pdf         # Résumé (English)
├── cv_es.pdf         # Résumé (Spanish)
└── favicon.svg
```

---

## Blog — Writing & Publishing

Posts are plain Markdown files in `src/posts/`. Vite reads them all at build time via `import.meta.glob` — no CMS, no database, no API.

### Adding a post

Create a file in `src/posts/` with the format `YYYY-MM-DD-your-slug.md`:

```md
---
slug: my-first-post
title: "My Post Title"
title_es: "Título en español"
date: "2026-03-13"
readTime: 5
excerpt: "One sentence shown on the blog listing page."
excerpt_es: "Una línea que aparece en la lista del blog."
lang: en
---

Your article content here in Markdown.

## Section heading

Paragraphs, **bold**, *italic*, [links](https://example.com), `inline code`.

## Another section

> Blockquotes work too.

- Bullet lists
- Are supported

1. Ordered lists
2. Also work
```

The post is live after the next deploy. The blog listing and home preview update automatically — newest posts appear first.

### Frontmatter reference

| Field | Required | Description |
|---|---|---|
| `slug` | ✓ | URL path — `/blog/{slug}` |
| `title` | ✓ | Title shown in English |
| `title_es` | | Spanish title (falls back to `title`) |
| `date` | ✓ | ISO date `YYYY-MM-DD`, used for sorting |
| `readTime` | ✓ | Estimated minutes to read |
| `excerpt` | ✓ | Short description for cards/SEO |
| `excerpt_es` | | Spanish excerpt (falls back to `excerpt`) |
| `lang` | ✓ | Primary language badge shown on cards |

### Automating posts with an AI agent (e.g. OpenClaw)

The file-based blog is designed to work with a daily AI agent. The full pipeline looks like this:

```
OpenClaw (scheduled at 06:00)
  → writes article as .md
  → commits to main via GitHub API (no git CLI needed)
  → GitHub Actions triggers automatically
  → npm run build (Vite bundles the new post)
  → wrangler deploy (using stored Cloudflare secrets)
  → live on your domain in ~60s
```

#### Step 1 — Create a GitHub Fine-Grained Token

Go to: **github.com → (your avatar) → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**

Settings:
- **Resource owner:** your GitHub username
- **Repository access:** Only select your portfolio repo
- **Permissions — repository:**
  - `Contents` → **Read and Write**
  - `Metadata` → Read-only (auto-selected)
  - Everything else → No access

Copy the generated token (`github_pat_...`). Store it only in OpenClaw's credentials vault — never in the codebase.

#### Step 2 — Add Cloudflare secrets to GitHub Actions

Go to: **github.com → your-repo → Settings → Secrets and variables → Actions → New repository secret**

Add these two secrets:

| Secret name | Where to find the value |
|---|---|
| `CLOUDFLARE_API_TOKEN` | [dash.cloudflare.com](https://dash.cloudflare.com) → My Profile → API Tokens → Create Token → use the "Edit Cloudflare Workers" template |
| `CLOUDFLARE_ACCOUNT_ID` | dash.cloudflare.com → Workers & Pages overview → right sidebar, labeled "Account ID" |

Once set, GitHub Actions can deploy to Cloudflare automatically on every push — without any manual `npm run deploy`.

#### Step 3 — Configure OpenClaw

In OpenClaw's agent settings:

1. Add the **GitHub MCP tool** — paste your fine-grained PAT as the credential
2. Set the tool to use the **GitHub API** (`create_or_update_file`) rather than git CLI — this avoids all credential helper issues
3. Schedule the agent daily at your preferred time

> **Why GitHub API instead of `git push`?**  
> OpenClaw runs in an ephemeral environment. The git credential helper (`~/.git-credentials`) can strip tokens from URLs, causing 403 errors. The GitHub MCP tool calls the REST API directly with the PAT — no git, no credential helpers, no caching issues.

#### Step 4 — Set the agent prompt

```
Schedule: daily at 06:00

Task:
1. Pick a topic related to [your niche, e.g. mobile dev, Flutter, AI, product engineering]
2. Write a ~600 word article in English
3. Generate a URL-safe kebab-case slug
4. Create the file src/posts/YYYY-MM-DD-{slug}.md in the repo
   with correct frontmatter (see frontmatter reference above)
5. Commit it to main via the GitHub API tool
   Commit message: "content: new post - {title}"
```

#### How deployment works (no action needed on your end)

The `.github/workflows/deploy.yml` file already handles everything:

```yaml
on:
  push:
    branches:
      - main   # triggers on every commit OpenClaw makes
```

Every time OpenClaw commits a new `.md` file, GitHub Actions runs `npm run build` (which picks up the new post via `import.meta.glob`) and deploys to Cloudflare Workers. You never need to run `npm run deploy` manually for new articles.

#### Security notes

- The PAT only has `Contents: Read/Write` on one repo — even if leaked, it can't touch anything else in your GitHub account
- The Cloudflare API token is stored only in GitHub Secrets — never in the codebase
- Revoke and regenerate either token instantly from their respective dashboards if compromised

---

## Internationalization

The site ships with full EN/ES support via `react-i18next`. Users toggle the language from the navbar. To **add a new language**:

1. Create `src/i18n/xx.json` (copy `en.json` and translate values)
2. Register it in `src/i18n/index.ts`
3. Add the toggle logic in `src/components/layout/Navbar.tsx`

To **remove Spanish** and go single-language, delete `es.json`, remove the language toggle button from the Navbar, and set `lng: 'en'` as the only option in `src/i18n/index.ts`.

---

## Contact

Built by Oscar Crescente.

- Email: [hola@crescente.dev](mailto:hola@crescente.dev)
- LinkedIn: [oscarcrescente](https://linkedin.com/in/oscarcrescente)
- Twitter / X: [@Saturamas](https://x.com/Saturamas)
