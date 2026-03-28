# Godwin Thomas — Portfolio

A premium, modern developer portfolio built with React + Vite + Tailwind CSS.

## ✦ Tech Stack

- **React 18** — Component architecture
- **Vite** — Lightning-fast dev server & bundler
- **Tailwind CSS** — Utility-first styling
- **Custom CSS** — Animations, noise texture, custom cursor

## ✦ Design System

- **Display font**: Fraunces (editorial serif with optical sizing)
- **Body font**: Plus Jakarta Sans (clean, modern sans-serif)
- **Mono font**: JetBrains Mono (code & labels)
- **Color palette**: Near-black void `#080808` base, warm amber `#D4A853` accent, electric blue `#4A9EFF`, jade `#3DD68C`

## ✦ Sections

1. **Hero** — Animated typewriter tagline, availability status
2. **About** — Story + stats grid
3. **Projects** — 4 featured projects with tech stack & badges
4. **Experience** — Timeline layout (internship + leadership)
5. **Skills** — Categorized with progress bars
6. **Achievements** — NASA, research publication, events
7. **Contact** — Links + hiring intent

## ✦ Features

- Custom animated cursor (desktop)
- Scroll-triggered reveal animations
- Ambient background glow blobs
- Subtle noise texture overlay
- Active section tracking in navbar
- Smooth typewriter effect
- Hover effects on all cards
- Fully responsive (mobile + desktop)
- SEO meta tags

## ✦ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or unzip the project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## ✦ Customization

All content is in the component files. Key files to update:

| File | What to update |
|------|---------------|
| `src/components/Hero.jsx` | Name, tagline, social links |
| `src/components/About.jsx` | Bio text, stats |
| `src/components/Projects.jsx` | Project data, GitHub links |
| `src/components/Experience.jsx` | Work & leadership data |
| `src/components/Skills.jsx` | Skills & levels |
| `src/components/Achievements.jsx` | Awards & achievements |
| `src/components/Contact.jsx` | Email, links |
| `index.html` | SEO meta, page title |

## ✦ Deployment

Deploy instantly on **Vercel**:

```bash
npm install -g vercel
vercel
```

Or on **Netlify** — just drag and drop the `dist/` folder after `npm run build`.

---

Built with ♥ by Godwin Thomas
