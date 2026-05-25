# Emanuelly Dias — Portfolio

Personal portfolio site for **Emanuelly Dias**, software engineer focused on blockchain
infrastructure, developer tooling, and the Solana ecosystem.

> Engineer building the future of crypto infrastructure.

## Stack

- **Vite** + **React 18**
- **TailwindCSS 3** for the design system
- **Framer Motion** for entrance / scroll animations
- Custom CSS for glassmorphism, gradients, cursor glow, scroll progress

## Sections

| # | Section | What's in it |
|---|---------|--------------|
| 1 | Hero | Name, intro, animated background grid + particles, social row, stat cards |
| 2 | About | "Future of crypto infrastructure" pitch + 4 highlight cards |
| 3 | Skills | Frontend, Backend, Blockchain, Tools, Currently learning |
| 4 | Projects | Live iframe of [opendev-kappa.vercel.app](https://opendev-kappa.vercel.app/) + OPEN feature list |
| 5 | Gallery | 15-photo masonry of team / event moments |
| 6 | Contact | Email · Inteli · GitHub · LinkedIn · X · Telegram |
| 7 | Footer | CTA band, navigation, channels |

Extras: animated navbar, scroll-progress bar, cursor glow, noise overlay,
custom Orca logo (CSS-masked from the real silhouette).

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build
```

## Deploy

Hosted on **Vercel** with auto-deploy from `main`.

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

Each push to `main` triggers a new deployment.

## Project layout

```
src/
  App.jsx                 # composition root
  main.jsx                # React entry
  styles.css              # Tailwind + design tokens
  assets/                 # photos + orca mask PNG
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx          # live OPEN iframe
    Gallery.jsx
    Contact.jsx
    Footer.jsx
    Loader.jsx
    CursorGlow.jsx
    ScrollProgress.jsx
    Icons.jsx             # Orca logo + social icons
scripts/
  process_orca.py         # generates src/assets/orca-mask.png
public/
  favicon.png             # purple orca favicon
```

## Credits

- Built by **Emanuelly Dias** ([@Emanuellydias19](https://github.com/Emanuellydias19))
- Featured project: **OPEN** — developer tooling for Solana
  ([@OpenDevT](https://x.com/OpenDevT) · [GitHub](https://github.com/OpenSubmissionn))

---

© Emanuelly Dias · Built with Solana energy.
