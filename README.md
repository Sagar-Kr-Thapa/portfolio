# Portfolio — Computer Engineer

A dark, futuristic portfolio website built with React + Vite.

## Features
- Animated particle canvas hero
- Scroll-reveal animations
- Interactive skills tab panel with animated progress bars
- Timeline-style experience section
- Validated contact form
- Fully responsive (mobile → desktop)
- CSS Modules (zero class collisions)
- Accessible markup (ARIA labels, semantic HTML)

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### 1. Update your info
- `src/components/Hero.jsx` — Your name and tagline
- `src/components/About.jsx` — Bio, stats, tags
- `src/components/Skills.jsx` — Your actual skills and levels
- `src/components/Experience.jsx` — Your work history
- `src/components/Contact.jsx` — Your email and social links
- `src/components/Footer.jsx` — Your name

### 2. Connect the contact form
In `Contact.jsx`, replace the `setSent(true)` with a real submission:

**Option A — Formspree (easiest):**
```js
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
if (res.ok) setSent(true)
```

**Option B — EmailJS, Resend, or your own API endpoint.**

## Deployment

### GitHub Pages
```bash
# In vite.config.js, set:
# base: '/your-repo-name/'

npm run build
# Push the dist/ folder to the gh-pages branch
```
Or use the `gh-pages` npm package:
```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run deploy
```

### Vercel (recommended — zero config)
```bash
npm install -g vercel
vercel
```

### Netlify
Drag-and-drop the `dist/` folder at netlify.com/drop, or:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## License
MIT
