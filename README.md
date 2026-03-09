# Adventure Journeys Travel & Tourism

A production-ready, fully responsive tourism agency website built with **React + Vite + Tailwind CSS**.

---

## ✈️ Pages

| Route | Description |
|---|---|
| `/` | Home – hero, features, featured destinations, stats, testimonials |
| `/destinations` | Searchable & filterable grid of 8 destination cards |
| `/tours` | 3 detailed tour packages with itinerary & booking CTAs |
| `/about` | Agency story, team, values, and trust badges |
| `/contact` | Validated enquiry form, office info, and map placeholder |

---

## 🛠 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18.x | UI framework |
| Vite | 5.x | Dev server & bundler |
| Tailwind CSS | 3.x | Utility-first styling |
| React Router | 6.x | Client-side navigation |
| Google Fonts | — | Playfair Display + Inter |
| picsum.photos | — | Placeholder images |

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18 or newer
- **npm** 9+ (or `pnpm` / `yarn`)

### 1 – Install dependencies

```bash
npm install
```

### 2 – Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3 – Build for production

```bash
npm run build
```

Output is written to the `dist/` folder. Preview the production build:

```bash
npm run preview
```

---

## 📁 Project Structure

```
Portfolio-Website/
├── index.html                   # HTML entry point (Google Fonts loaded here)
├── package.json
├── vite.config.js
├── tailwind.config.js           # Brand colours, custom fonts, animations
├── postcss.config.js
└── src/
    ├── main.jsx                 # ReactDOM.render + BrowserRouter
    ├── App.jsx                  # Routes + ScrollToTop + Navbar/Footer shell
    ├── index.css                # Tailwind layers + custom component classes
    ├── data/
    │   ├── destinations.js      # 8 destination objects (image, price, category)
    │   ├── tours.js             # 3 tour package objects (itinerary, highlights)
    │   └── team.js              # 4 team member objects
    ├── components/
    │   ├── Navbar.jsx           # Sticky nav – transparent to white on scroll, mobile drawer
    │   ├── Footer.jsx           # 4-column footer with newsletter signup
    │   ├── HeroSection.jsx      # Full-viewport hero with dual CTA + stats
    │   ├── PageBanner.jsx       # Inner-page hero banner (shorter)
    │   ├── DestinationCard.jsx  # Destination card with image, price, Book Now
    │   ├── TourCard.jsx         # Detailed tour card with itinerary & includes
    │   └── SectionHeading.jsx   # Reusable label + title + subtitle block
    └── pages/
        ├── Home.jsx
        ├── Destinations.jsx     # Live search + category filter
        ├── Tours.jsx
        ├── About.jsx
        └── Contact.jsx          # Validated form with success state
```

---

## 🎨 Design System

### Colour Palette

| Token | Hex | Usage |
|---|---|---|
| `brand-blue` | `#0369a1` | Primary actions, links |
| `brand-blue-dark` | `#075985` | Dark backgrounds, hero overlays |
| `brand-orange` | `#f97316` | CTAs, badges, highlights |
| `brand-sand` | `#f5e6c8` | Light section backgrounds, chips |
| `brand-cream` | `#faf6ee` | Alternate section fill |

### Typography
- **Headings** – Playfair Display (serif, elegant)
- **Body** – Inter (clean, modern sans-serif)

### Reusable CSS Classes (defined in `src/index.css`)

| Class | Description |
|---|---|
| `.btn-primary` | Filled orange CTA button |
| `.btn-outline` | White outlined button (for dark backgrounds) |
| `.btn-outline-blue` | Blue outlined button (for light backgrounds) |
| `.card` | Base card with hover lift + shadow transition |
| `.form-input` | Styled text / select / textarea input |
| `.section-label` | Small category chip above headings |

---

## 🔧 Customisation

### Swap placeholder images
All images use [picsum.photos](https://picsum.photos) seed URLs. Replace any image URL in
`src/data/destinations.js`, `src/data/tours.js`, or directly in component files with your production images.

### Add or edit destinations
Edit `src/data/destinations.js`. Each object follows this shape:

```js
{
  id: 9,
  name: 'New Destination, Country',
  tagline: 'Short tagline',
  description: 'One paragraph description.',
  image: 'https://picsum.photos/seed/my-seed/800/560',
  price: 1999,
  currency: 'USD',
  badge: 'New',
  badgeColor: 'bg-purple-600',
  category: 'Adventure',
}
```

### Add or edit tour packages
Edit `src/data/tours.js`. See the existing objects for the full shape
(highlights array, itinerary array, includes array, rating, reviews, etc.).

### Extend the colour palette
Open `tailwind.config.js` and add tokens under `theme.extend.colors.brand`.

---

## 🌐 Deployment

The site is a standard SPA. Deploy the `dist/` output to any static host:

| Platform | Steps |
|---|---|
| **Vercel** | `vercel --prod` (auto-detects Vite) |
| **Netlify** | Drag-and-drop `dist/` or connect the repo |
| **GitHub Pages** | Use `gh-pages` package; set `base` in `vite.config.js` |

> **React Router note:** Configure your host to redirect all routes to `index.html`.
> Vercel and Netlify do this automatically for Vite projects.

---

## 📝 Licence

© 2025 Adventure Journeys Travel & Tourism cc. All rights reserved.
