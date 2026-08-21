# Sowik Wellness — Website

A full, responsive React (Vite) website for **Sowik Wellness**, built from your
services note: Ayurvedic massage, cupping, Basti, navel care, Shatkarma detox
and yoga.

## Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (opens on http://localhost:5173)
npm run dev

# 3. Build for production (creates a /dist folder you can upload anywhere)
npm run build

# 4. Preview the production build locally
npm run preview
```

## Project structure

```
sowik-wellness/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── images/            ← service/hero photos
└── src/
    ├── main.jsx            ← React entry point
    ├── App.jsx             ← page layout (assembles all sections)
    ├── index.css           ← all styling (colors, type, layout)
    ├── data/
    │   └── services.js     ← ⭐ edit this to change services, prices, contact info
    └── components/
        ├── NavBar.jsx
        ├── Hero.jsx
        ├── TrustStrip.jsx
        ├── ServicesSection.jsx
        ├── HowItWorks.jsx
        ├── AboutSection.jsx
        ├── ContactCTA.jsx
        ├── Footer.jsx
        └── WhatsAppFloat.jsx
```

## Editing content

Almost everything you'll want to change — phone numbers, address, service
names and descriptions — lives in **`src/data/services.js`**. You don't need
to touch any component file to update text.

To change colors or fonts, edit the CSS variables at the top of
**`src/index.css`** (`:root { ... }`).

## Deploying

The `npm run build` command produces a `dist/` folder containing plain
HTML/CSS/JS. You can drag-and-drop that folder onto **Netlify** or
**Vercel**, or upload it to any standard web host / cPanel `public_html`.

## Contact numbers used on the site

- Primary (call + WhatsApp): **+91 96901 48288**
- Secondary: **+91 72486 32019**
- Address: Gyan Khand 1, Plot No. 70, Indirapuram, Ghaziabad, Uttar Pradesh

## A note on images

Your upload included a few personal/event photos (HEIC files) alongside the
service-category photos. Those weren't used on the site — they show
identifiable people who aren't part of the Sowik Wellness service catalog, so
using them for public marketing needs your (and their) explicit sign-off
first. The site currently uses the spa/wellness stock photos from your
upload. Swap any image by replacing the file in `public/images/` and updating
the matching `src="/images/..."` path in the component.
