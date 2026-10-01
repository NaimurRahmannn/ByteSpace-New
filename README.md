# ByteSpace — Modern EdTech Learning Platform

A modern, high-fidelity responsive landing page for **ByteSpace**, an all-in-one educational platform connecting passionate learners with expert course creators. Built with precision according to Figma design specifications, featuring responsive layouts, semantic structure, micro-interactions, and design tokens.

🔗 **Live Deployment:** [https://byte-space-new-roan.vercel.app](https://byte-space-new-roan.vercel.app)

---

## 📸 Overview

ByteSpace is engineered to provide an engaging educational discovery experience, balancing learning paths, course offerings, and creator enablement through an energetic visual identity with electric lime accents, deep persian blue surfaces, and typographic hierarchy.

### Key Sections:

1. **Header & Navigation**
   - Brand mark and typography with custom SVG logo.
   - Smooth anchor navigation (`Home`, `Courses`, `Creators`).
   - Quick account action triggers (`Sign In`, `Join Us`, Cart icon).
   - Fully accessible responsive mobile hamburger drawer.

2. **Hero Section**
   - High-impact headline: *"Get Access to Hundreds Courses Available"*.
   - Interactive search control with custom SVG iconography.
   - Multi-layer visual composition featuring floating student metrics, 55% completion progress badges, and community social proof indicators.
   - Decorative 3D geometric shapes (torus, coils, springs, cylinders, cones) positioned with controlled overflow.

3. **Partner Logos**
   - Infinite horizontal scrolling brand strip showcasing verified industry partners.
   - Seamless marquee animation with accessible contained viewport.

4. **Course Discovery**
   - Section heading: *"Discover Your Passion, Build Your Skills"*.
   - Dynamic category pill filters across multi-row layouts with active state styling.
   - Responsive 6-card course grid featuring instructor metadata, real ratings with stars, pricing badges, and interactive cards.

5. **Diverse Learning Paths**
   - 6 specialized domain cards: **Design**, **Development**, **Cloud & DevOps**, **Business**, **Marketing**, and **Photography**.
   - Custom icon surfaces, course count badges, and hover state transitions.

6. **Growth & Creator Features**
   - **Row 1:** Professional growth showcase with milestone statistics (`12K`, `70+`, `18`) and multi-layer student visual cards.
   - **Row 2:** Course creation suite breakdown (*"Create & Manage Courses Easily"*), live revenue metric card (`$12,045`), and student community proof.

7. **Creator Call to Action (CTA)**
   - Bold banner: *"Unlock Your Potential as a Creator with ByteSpace"*.
   - Dual-contrast CTA button with high-contrast electric lime styling.
   - Custom decorative floating 3D elements and blueprint grid background.

8. **Community Testimonials**
   - Section intro: *"Discover What Our Community Is Saying"*.
   - 3 verified testimonial cards highlighting learner and creator experiences with star ratings, quotes, roles, and localized high-res avatars.
   - Subtle multi-point radial gradient background washes.

9. **Footer**
   - Semantic `<footer>` outside `<main>` container with full-width 1px border.
   - Newsletter subscription form with full-pill email input, native validation, and custom action button.
   - 3-column navigation hierarchy (*Browse*, continuation, and *Platform*) with internal anchor linking.
   - Legal notice row and copyright attribution.

---

## 🛠️ Tech Stack & Architecture

- **Core Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) using `@tailwindcss/vite`
- **Typography:**
  - Headings: [Poppins](https://fonts.google.com/specimen/Poppins) (Weights: `500`, `600`) via Google Fonts
  - Body & UI: [Satoshi](https://www.fontshare.com/fonts/satoshi) (Weights: `400`, `500`, `700`) via Fontshare CSS API
  - Wordmark: Clash Display Bold vector outlines
- **Linting & Code Quality:** ESLint 10 with React Hooks and React Refresh rules
- **Testing:** Node.js native test runner (`node:test`) with SSR static markup assertions

---

## 🎨 Design System Tokens

The project implements a centralized design token system defined in CSS:

| Token | Hex / Value | Description |
| :--- | :--- | :--- |
| `--color-brand-blue` | `#003BE2` | Hero & CTA deep background surface |
| `--color-brand-lime` | `#D4FB20` | Primary action buttons & highlights |
| `--color-brand-lime-strong`| `#CBFC01` | Hover state for lime actions |
| `--color-text-primary` | `#242528` | Primary dark text & headings |
| `--color-text-body` | `#4F4F4F` | Body and descriptive text |
| `--color-text-secondary` | `#82868E` | Subtext, labels, and secondary hints |
| `--color-surface-light` | `#F5F5F6` | Off-white surfaces & badges |
| `--color-surface-subtle`| `#FAFAFA` | Testimonials & card background fills |
| `--color-border` | `#CED0D3` | Divider lines and control borders |
| `--container-content` | `75rem` (1200px) | Max container width on desktop |
| `--radius-card` | `1.5rem` (24px) | Card corner radius |
| `--radius-pill` | `9999px` | Pill buttons and filter badges |

---

## 📂 Project Directory Structure

```text
bytespace-new/
├── public/                 # Public static assets
├── src/
│   ├── assets/
│   │   └── figma/          # Localized high-fidelity Figma raster & vector assets
│   │       └── vectors/    # SVG logos, partner brands, and decorative curves
│   ├── components/
│   │   ├── layout/         # Header and Footer layout components
│   │   │   ├── Header.jsx
│   │   │   ├── Header.test.mjs
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.test.mjs
│   │   ├── sections/       # Discrete landing page visual sections
│   │   │   ├── HeroSection.jsx
│   │   │   ├── PartnerSection.jsx
│   │   │   ├── CourseDiscoverySection.jsx
│   │   │   ├── LearningPathsSection.jsx
│   │   │   ├── GrowthCreatorSection.jsx
│   │   │   ├── CreatorCTASection.jsx
│   │   │   └── TestimonialsSection.jsx
│   │   └── ui/             # Reusable UI atoms and compound components
│   │       ├── Button.jsx
│   │       ├── SearchBar.jsx
│   │       ├── CategoryPill.jsx
│   │       ├── CourseCard.jsx
│   │       ├── LearningPathCard.jsx
│   │       ├── StudentSocialProofCard.jsx
│   │       ├── TestimonialCard.jsx
│   │       └── NewsletterForm.jsx
│   ├── data/               # Structured data sources
│   │   ├── categories.js
│   │   ├── courses.js
│   │   ├── creatorCta.js
│   │   ├── footer.js
│   │   ├── growthCreator.js
│   │   ├── learningPaths.js
│   │   └── testimonials.js
│   ├── pages/              # Page views
│   │   └── HomePage.jsx
│   ├── styles/             # Global and theme styling
│   │   └── theme.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── docs/                   # Figma audit, specifications, and design system docs
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NaimurRahmannn/ByteSpace-New.git
   cd ByteSpace-New
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

Create an optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Code Quality & Testing

- **Linting:**
  ```bash
  npm run lint
  ```

- **Running Tests:**
  ```bash
  node --test --test-concurrency=1 src/**/*.test.mjs
  ```

---

## 📱 Responsive Design Strategy

The application is thoroughly verified across standard screen sizes:

- **Desktop (1440px):** Pixel-accurate reproduction of the Figma desktop frame (1440 × 6377px) with exact 1200px centered containers and multi-column layouts.
- **Laptop / Tablet (768px – 1024px):** Fluid grids, stacked feature columns, and adaptive spacing ensuring content remains legible.
- **Mobile (375px – 425px):** Touch-friendly action buttons (min 44px height), full-width input controls, single-column card grids, and zero horizontal overflow.

---

## ♿ Accessibility & Performance

- **Semantic Landmarks:** Structured with `<header>`, `<main id="main-content">`, `<section>`, and `<footer>`.
- **Keyboard Navigation:** Explicit visible focus indicators on all interactive inputs, buttons, and links.
- **Screen Reader Support:** Meaningful `aria-label`, `aria-labelledby`, and `.sr-only` labels on form controls.
- **Asset Optimization:** WebP/PNG formats with explicit width and height dimensions to eliminate Cumulative Layout Shift (CLS).

---

## 🚢 Deployment

This project is deployed on **Vercel** with automatic continuous deployment on push to `main`.

Live URL: **[https://byte-space-new-roan.vercel.app](https://byte-space-new-roan.vercel.app)**

---

## 📄 License

This project is created for educational and portfolio demonstration purposes. All rights reserved by ByteSpace.
