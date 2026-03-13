---
slug: why-neobrutalism
title: "Why I Chose Neobrutalism for My Portfolio"
title_es: "Por qué elegí Neobrutalism para mi portafolio"
date: "2026-02-25"
readTime: 4
excerpt: "Bold borders, thick shadows, and strong colors - the story behind this design choice."
excerpt_es: "Bordes gruesos, sombras fuertes y colores vivos - la historia detrás de esta decisión de diseño."
lang: en
---

When it was time to redesign my portfolio, I had a clear goal: it had to feel like software made by a developer who actually cares about design. Not a generic template, not an overused minimal grid. Something with character.

I landed on **neobrutalism**. It was the right call.

## What is neobrutalism?

Neobrutalism is a web design trend rooted in raw, unapologetic aesthetics: thick borders, hard drop shadows (offset, no blur), high-contrast color palettes dominated by blacks, whites, and saturated accent colors like yellow. It's a reaction against years of soft shadows, rounded corners, and "clean minimalism" that ended up making every product look the same.

The style takes inspiration from Brutalist architecture: buildings that expose their raw materials without ornamentation. Applied to web design, it means showing the structure clearly — elements have visible weight, hierarchy is communicated through contrast, and interactivity is tactile and obvious.

## Why it works for a developer portfolio

Most developer portfolios fall into one of two traps: they're either too plain (just a list of skills and projects on a white background) or they try too hard to impress with WebGL, animated shaders, and scroll effects that distract from the actual work.

Neobrutalism hits a different note. It's expressive without being theatrical. The visual system is clear and consistent: thick black borders, offset shadows, high-contrast buttons. Users always know what's interactive and what's structural. That clarity is a design value in itself, and it aligns with how I approach engineering: opinionated, readable, no magic.

There's also a practical reason: it scales well across dark mode, light mode, and different screen sizes without losing its identity. The aesthetic is defined by structure, not by subtle gradients or transparency tricks that break in edge cases.

## The technical implementation

I built this site with **React + Vite + TypeScript** and styled it with **Tailwind CSS v4**, using [neobrutalism.dev](https://www.neobrutalism.dev) as the component foundation — an open-source shadcn-compatible component library designed specifically for this aesthetic.

The design tokens are simple: a yellow `--color-main`, a near-black border, a flat `4px 4px 0px` shadow. Those three values define the entire visual language. Every component (buttons, cards, badges, inputs) inherits from them, so the system stays coherent without having to enforce consistency manually.

I added decorative star SVG components at section corners and empty spaces, subtle at low opacity, just enough to break the grid and add rhythm without competing with content. That balance between decoration and restraint is something I paid close attention to — neobrutalism can become noisy fast if you're not deliberate about it.

## The tradeoff

Neobrutalism is not for every product. It carries a strong personality, and for enterprise software or products that need to signal trust and stability, it can read as too casual. But for a personal portfolio, where the point is to communicate who you are as a builder, that personality is exactly the asset.

I want anyone landing on this site to immediately understand that I'm a developer who thinks about design, makes deliberate choices, and isn't afraid to have an opinion. Neobrutalism communicates all of that before a single word is read.

---

*Source: [Envato — Trend Deep Dive: Neo-Brutalism](https://author.envato.com/hub/trend-deep-dive-neo-brutalism/)*
