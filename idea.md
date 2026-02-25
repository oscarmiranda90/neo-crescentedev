# crescente.dev — Site Plan

> Personal portfolio & brand · Vite + React · Neobrutalism UI · Bilingual EN/ES

---

## 1. Goal

A bold, memorable personal site that establishes identity as a **senior web developer** and positions expertise in **hiring & recruiting** as a differentiator. Visitors should instantly understand who you are, what you build, and how to work with you.

---

## 2. Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | **Vite + React 18** | Fast SPA, minimal overhead |
| Language | **TypeScript** | Type safety, better DX |
| Styling | **Tailwind CSS v4** | Required by neobrutalism.dev |
| Components | **shadcn/ui + neobrutalism.dev** | Bold, distinctive look |
| Routing | **React Router v6** | SPA navigation |
| i18n | **i18next + react-i18next** | Bilingual EN/ES |
| Blog | **MDX or markdown files** | Simple, no CMS needed |
| Deployment | **Vercel / Cloudflare Pages** | Free, fast CDN |

---

## 3. Design System — Neobrutalism

- **Source:** https://www.neobrutalism.dev/docs/installation
- **Setup:** Init shadcn → replace `globals.css` → copy neobrutalism component variants
- **Core rules:**
  - Thick black borders (`border-2 border-black`)
  - Offset box shadows (`shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`)
  - High-contrast backgrounds (main: `#FDE047` yellow or custom)
  - Bold/heavy fonts — `Inter` or `Space Grotesk`
  - No rounded corners (or minimal, `rounded-base`)
  - Hover states shift shadow (translate + shadow collapse)

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--main` | `#FDE047` | Primary accent (yellow) |
| `--bg` | `#FFFBF0` | Page background |
| `--text` | `#000000` | All text |
| `--border` | `#000000` | All borders |
| `--secondary-bg` | `#E4F0D0` | Card / section alternates |

---

## 4. Site Structure

```
crescente.dev/
├── /                   → Home (all sections as single page)
├── /blog               → Blog post list
├── /blog/:slug         → Blog post detail
└── /404                → Not found
```

### Single-Page Sections (Home)

```
[Navbar]
  ↓
[Hero]           — Name, title, CTA
  ↓
[About]          — Story, background, photo
  ↓
[Projects]       — Card grid of selected work
  ↓
[Blog preview]   — 2–3 latest posts
  ↓
[Contact / CTA]  — Social links + contact form or email
[Footer]
```

---

## 5. Section Breakdown

### 5.1 Navbar
- Logo (text-based, bold monospace)
- Links: About · Projects · Blog · Contact
- Language switcher: `EN | ES`
- Mobile: hamburger sheet

### 5.2 Hero
- Headline: `"Hi, I'm [Name]."` — massive bold text
- Subline: `"Web developer. I build things people use."` (or recruiting angle)
- Two CTAs: `View Projects` (primary) · `Read Blog` (secondary outline)
- Optional: animated blob / geometric shape in neobrutalism style

### 5.3 About
- Short bio paragraph (EN/ES)
- Highlight: dev background + hiring/recruiting expertise as a unique combo
- Skills badge list (neobrutalism chip/badge components)
- Link to CV/resume PDF

### 5.4 Projects
- Grid of cards (neobrutalism `Card` component)
- Each card: title, description, tech stack tags, GitHub + live link
- Filter by tag (optional v2)
- 4–6 featured projects

### 5.5 Blog Preview
- Show 2–3 latest posts from `/blog`
- Post card: title, date, language flag, read time, excerpt
- CTA button → `/blog`

### 5.6 Contact / CTA
- Section headline: `"Let's work together."`
- Social links: GitHub, LinkedIn, Twitter/X
- Email button (mailto or form)
- Optional: simple contact form (Formspree or Resend)

### 5.7 Footer
- Copyright · Language switcher · Back to top

---

## 6. File & Folder Structure

```
neo-crescentedev/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn + neobrutalism overrides
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Projects.tsx
│   │       ├── BlogPreview.tsx
│   │       └── Contact.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Blog.tsx
│   │   └── BlogPost.tsx
│   ├── content/
│   │   └── blog/
│   │       ├── post-1.en.md
│   │       └── post-1.es.md
│   ├── i18n/
│   │   ├── index.ts
│   │   ├── en.json
│   │   └── es.json
│   ├── lib/
│   │   └── utils.ts
│   ├── data/
│   │   └── projects.ts       # Project data array
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css             # Tailwind + neobrutalism CSS vars
├── index.html
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## 7. Build Phases

### Phase 1 — Foundation (now)
- [x] Plan & structure (this document)
- [ ] Scaffold Vite + React + TypeScript
- [ ] Install Tailwind CSS v4
- [ ] Init shadcn/ui
- [ ] Apply neobrutalism global styles
- [ ] Install neobrutalism components: Button, Card, Badge

### Phase 2 — Layout & Sections
- [ ] Navbar (with lang switcher)
- [ ] Hero section
- [ ] About section
- [ ] Projects section (static data)
- [ ] Contact section
- [ ] Footer

### Phase 3 — Blog
- [ ] Blog list page `/blog`
- [ ] Blog post detail `/blog/:slug`
- [ ] Markdown parsing

### Phase 4 — i18n
- [ ] Set up i18next
- [ ] Translate all UI strings EN/ES
- [ ] Per-language blog posts

### Phase 5 — Polish & Deploy
- [ ] SEO meta tags (react-helmet or vite-plugin-html)
- [ ] OpenGraph image
- [ ] Lighthouse audit
- [ ] Deploy to Vercel
- [ ] Point `crescente.dev` domain

---

## 8. Key Neobrutalism Components to Install

| Component | shadcn CLI | Neobrutalism override |
|---|---|---|
| Button | `npx shadcn@latest add button` | Yes — thick border, offset shadow |
| Card | `npx shadcn@latest add card` | Yes — bold border, flat bg |
| Badge | `npx shadcn@latest add badge` | Yes — solid fill + border |
| Sheet | `npx shadcn@latest add sheet` | Yes — mobile nav |
| Separator | `npx shadcn@latest add separator` | Optional |

---

## 9. Content Checklist

- [ ] Profile photo (square, high-res)
- [ ] Bio text (EN + ES, ~100 words each)
- [ ] 4–6 project entries (title, desc, url, tech, image)
- [ ] Resume/CV PDF
- [ ] 1–2 blog posts drafted
- [ ] Social links: GitHub · LinkedIn · Twitter/X
- [ ] Custom domain DNS configured

---

*Last updated: 2026-02-25*
