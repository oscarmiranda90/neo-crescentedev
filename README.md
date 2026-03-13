# crescente.dev

Personal portfolio of **Oscar Crescente** — Mobile Developer & Product Engineer.

Live at [crescente.dev](https://crescente.dev)

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
| Deployment | Cloudflare Workers (via Wrangler) |

---

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Projects, BlogPreview, Contact
│   ├── stars/        # Decorative SVG star components
│   └── ui/           # Button, Badge, Card, Accordion, ImageCard
├── data/             # Static project data
├── i18n/             # en.json / es.json translations
├── pages/            # Home, Blog, BlogPost, RibEye (+ Privacy & Terms)
└── lib/              # Utility functions
public/
├── og.png            # Open Graph / Twitter banner (1200×630)
├── cv_en.pdf         # Résumé — English
├── cv_es.pdf         # Résumé — Spanish
└── favicon.svg
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type-check + production build
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment

The site is deployed to **Cloudflare Workers** as a static SPA with custom domain routing configured in `wrangler.toml`.

```bash
# Build and deploy in one step
npm run deploy
```

Requires Wrangler to be authenticated (`wrangler login`). Deploys to `crescente.dev` and `www.crescente.dev`.

---

## Internationalization

The UI supports English and Spanish via `react-i18next`. Translation files live in `src/i18n/`. The CV download automatically serves the language-matched PDF (`cv_en.pdf` or `cv_es.pdf`) based on the active locale.

---

## Contact

- Email: [hola@crescente.dev](mailto:hola@crescente.dev)
- LinkedIn: [oscarcrescente](https://linkedin.com/in/oscarcrescente)
- Twitter / X: [@Saturamas](https://x.com/Saturamas)
