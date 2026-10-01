# ByteSpace — Modern EdTech Learning Platform

A modern, high-fidelity responsive web application for **ByteSpace**, featuring a comprehensive educational landing page alongside dedicated **Login** and **Registration** authentication experiences. Built with precision according to Figma design specifications, featuring responsive layouts, client-side routing, semantic structure, micro-interactions, and a cohesive design system.

🔗 **Live Deployment:** [https://byte-space-new-roan.vercel.app](https://byte-space-new-roan.vercel.app)

---

## 📑 Table of Contents

| # | Section | Description |
| :-: | :--- | :--- |
| 1 | [📸 Overview & Landing Page](#overview) | Platform purpose, core vision, and walkthrough of all 9 landing page sections |
| 2 | [🔐 Authentication Pages (Login & Registration)](#authentication-pages) | Dedicated Login and Registration experiences with Figma-faithful showcase layout |
| 3 | [🛠️ Tech Stack & Architecture](#tech-stack--architecture) | React 19, React Router v7, Vite 8, Tailwind CSS v4, fonts, and test tooling |
| 4 | [🎨 Design System Tokens](#design-system-tokens) | Color palette, typography scale, container widths, and geometry |
| 5 | [📂 Project Directory Structure](#project-directory-structure) | Full codebase tree (`src/` components, auth, layout, sections, data, assets) |
| 6 | [🚀 Getting Started](#getting-started) | Prerequisites, installation, dev server, build, lint, and test scripts |
| 7 | [📱 Responsive Design Strategy](#responsive-design-strategy) | 1440px desktop baseline, tablet adaptation, and 375px mobile fluid flow |
| 8 | [♿ Accessibility & Performance](#accessibility--performance) | Semantic landmarks, keyboard navigation, screen readers, and zero-CLS |
| 9 | [🚢 Deployment](#deployment) | Live Vercel production hosting with SPA rewrites |
| 10 | [📄 License](#license) | Usage rights and educational project attribution |

---

<a id="overview"></a>
## 📸 Overview & Landing Page

ByteSpace is engineered to provide an engaging educational discovery experience, balancing learning paths, course offerings, and creator enablement through an energetic visual identity with electric lime accents, deep persian blue surfaces, and typographic hierarchy.

### Key Sections:

1. **Header & Navigation**
   - Brand mark and typography with custom SVG logo.
   - Smooth anchor navigation (`Home`, `Courses`, `Creators`).
   - Quick account action triggers (`Sign In` ➔ `/login`, `Join Us` ➔ `/register`, Cart icon).
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

<a id="authentication-pages"></a>
## 🔐 Authentication Pages (Login & Registration)

ByteSpace features dedicated, production-ready authentication pages implemented directly from the official Figma designs (Login: `49:195`, Registration: `47:351`) and verified against reference screenshots. Both pages share a unified, immersive split-layout architecture with an energetic visual showcase and precision form panels.

### 1. Login Page (`/login` — Figma `49:195`)
- **Header & Branding:** Eyebrow tag *"Sign In"* and primary title *"Welcome Back"*.
- **Input Controls:** Standard 52px height inputs with 12px rounded radius and `#E5E6E8` borders for **Email** and **Password** with accessible labels and custom focus rings.
- **Primary CTA:** High-contrast electric lime button (*"Sign In"*) with hover micro-animations.
- **Social Authentication Section:** A clean `"or"` divider followed by dedicated **Facebook** and **Google** social login buttons with exact brand SVGs.
- **Page Switching:** Seamless navigation link: *"Don't have an account? Sign Up"* redirecting directly to `/register`.
- **Top Navigation:** Clicking the ByteSpace brand mark in the top-left returns users directly to the homepage (`/`).

### 2. Registration Page (`/register` — Figma `47:351`)
- **Header & Branding:** Eyebrow tag *"Create an Account"* and primary title *"Welcome to ByteSpace"*.
- **Input Controls:** Three dedicated 52px fields: **Full Name**, **Email**, and **Password**.
- **Primary CTA:** Full-width electric lime *"Continue"* button.
- **Figma Design Invariant:** Per Figma specification `47:351`, third-party social login buttons are intentionally omitted on the registration screen to maintain a focused, distraction-free signup flow.
- **Page Switching:** Navigation footer: *"Already have an account? Sign In"* leading directly to `/login`.

### 3. Shared Visual Showcase Layout (`AuthShowcase` & `AuthLayout`)
- **Architectural Surface:** Deep `#003BE2` background overlaid with a subtle 120px blueprint grid pattern and brand icon watermark.
- **Dual Overlapping Course Discovery Showcase:**
  - **Upper (Foreground) Card:** *"the Power of Big Data"* featured with thumbnail asset `course-discovery-asset-06.jpg`, top overlay chips (*17 Lessons*, *2 hours 16 mins*, *59 Comments*), 4.5-star rating, beginner level badge, and `$25/lifetime` pricing.
  - **Under (Background) Card:** *"Build Digital Asset"* featured with thumbnail asset `course-discovery-asset-05.jpg`, positioned at an offset down-left with single chip *17 Lessons*.
- **Floating 3D Decorative Ornaments:** Curated 3D geometries (lime torus, lime pyramid, white wave coil) rendered with calibrated CSS filter color transforms matching the Figma lighting.
- **Community Social Proof:** An overlaid electric lime *"Happy Students"* card displaying a `2K+` badge and stacked circular student avatars.
- **Fluid Responsiveness:** A 2-column desktop layout (showcase + 579×784px auth card) that gracefully collapses into a stacked single-column view on tablet and mobile viewports.

---

<a id="tech-stack--architecture"></a>
## 🛠️ Tech Stack & Architecture

- **Core Framework:** [React 19](https://react.dev/)
- **Client-Side Routing:** [React Router v7](https://reactrouter.com/) (`react-router-dom`) with client-side SPA routing (`/`, `/login`, `/register`)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) using `@tailwindcss/vite`
- **Typography:**
  - Headings: [Poppins](https://fonts.google.com/specimen/Poppins) (Weights: `500`, `600`) via Google Fonts
  - Body & UI: [Satoshi](https://www.fontshare.com/fonts/satoshi) (Weights: `400`, `500`, `700`) via Fontshare CSS API
  - Wordmark: Clash Display Bold vector outlines
- **Linting & Code Quality:** ESLint 10 with React Hooks and React Refresh rules
- **Testing:** Node.js native test runner (`node:test`) with SSR static markup assertions

---

<a id="design-system-tokens"></a>
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

<a id="project-directory-structure"></a>
## 📂 Project Directory Structure

```text
bytespace-new/
├── public/                 # Public static assets
├── src/
│   ├── assets/
│   │   └── figma/          # Localized high-fidelity Figma raster & vector assets
│   │       └── vectors/    # SVG logos, partner brands, and decorative curves
│   ├── components/
│   │   ├── auth/           # Authentication showcase & course card components
│   │   │   ├── AuthCourseCard.jsx
│   │   │   ├── AuthLayout.jsx
│   │   │   └── AuthShowcase.jsx
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
│   │       ├── CategoryPill.jsx
│   │       ├── CourseCard.jsx
│   │       ├── FormField.jsx
│   │       ├── LearningPathCard.jsx
│   │       ├── NewsletterForm.jsx
│   │       ├── SearchBar.jsx
│   │       ├── StudentSocialProofCard.jsx
│   │       └── TestimonialCard.jsx
│   ├── data/               # Structured data sources
│   │   ├── categories.js
│   │   ├── courses.js
│   │   ├── creatorCta.js
│   │   ├── footer.js
│   │   ├── growthCreator.js
│   │   ├── learningPaths.js
│   │   └── testimonials.js
│   ├── pages/              # Page views & route integration tests
│   │   ├── AuthPages.test.mjs
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   └── RegisterPage.jsx
│   ├── styles/             # Global and theme styling
│   │   └── theme.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── docs/                   # Figma audit, specifications, and design system docs
├── index.html
├── package.json
├── vercel.json             # Vercel SPA rewrite configuration for direct route loads
└── vite.config.js
```

---

<a id="getting-started"></a>
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

<a id="responsive-design-strategy"></a>
## 📱 Responsive Design Strategy

The application is thoroughly verified across standard screen sizes:

- **Desktop (1440px):** Pixel-accurate reproduction of the Figma desktop frame (1440 × 6377px) with exact 1200px centered containers and multi-column layouts.
- **Laptop / Tablet (768px – 1024px):** Fluid grids, stacked feature columns, and adaptive spacing ensuring content remains legible.
- **Mobile (375px – 425px):** Touch-friendly action buttons (min 44px height), full-width input controls, single-column card grids, and zero horizontal overflow.

---

<a id="accessibility--performance"></a>
## ♿ Accessibility & Performance

- **Semantic Landmarks:** Structured with `<header>`, `<main id="main-content">`, `<section>`, and `<footer>`.
- **Keyboard Navigation:** Explicit visible focus indicators on all interactive inputs, buttons, and links.
- **Screen Reader Support:** Meaningful `aria-label`, `aria-labelledby`, and `.sr-only` labels on form controls.
- **Asset Optimization:** WebP/PNG formats with explicit width and height dimensions to eliminate Cumulative Layout Shift (CLS).

---

<a id="deployment"></a>
## 🚢 Deployment

This project is deployed on **Vercel** with automatic continuous deployment on push to `main`.

- **Live URL:** **[https://byte-space-new-roan.vercel.app](https://byte-space-new-roan.vercel.app)**
- **Single Page Application (SPA) Routing:** Configured with `vercel.json` rewrite rules (`{ "source": "/(.*)", "destination": "/index.html" }`), ensuring direct browser navigation, deep linking, and page reloads on `/login` and `/register` route seamlessly without 404 errors.

---

<a id="license"></a>
## 📄 License

This project is created for educational and portfolio demonstration purposes. All rights reserved by ByteSpace.
