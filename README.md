# 🚀 Achyut Kumar Singh — Portfolio

A world-class personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Designed to feel premium, cinematic, and interactive.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square)

## ✨ Features

- **Premium Design** — Apple/Vercel-inspired dark theme with glassmorphism, gradient accents, and grain texture
- **Cinematic Animations** — Framer Motion powered smooth reveals, stagger effects, and page transitions
- **Interactive Elements** — Custom cursor, magnetic buttons, spotlight effects, particle background
- **Command Palette** — ⌘K to search and navigate (Raycast/Linear-style)
- **Keyboard Shortcuts** — Press 1-5 to navigate between pages
- **Responsive** — Mobile-first design, works flawlessly on all devices
- **SEO Optimized** — Full metadata, Open Graph, sitemap, and robots.txt
- **Loading Screen** — Custom animated loading experience
- **Scroll Progress** — Gradient progress bar at the top
- **Accessibility** — Semantic HTML, ARIA labels, keyboard navigation

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter, Outfit, JetBrains Mono (Google Fonts) |

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── projects/        # Projects page
│   ├── resume/          # Resume page
│   ├── layout.tsx       # Root layout with fonts & metadata
│   ├── page.tsx         # Home page
│   ├── globals.css      # Global styles & design system
│   ├── sitemap.ts       # Dynamic sitemap
│   ├── robots.ts        # Robots.txt
│   └── not-found.tsx    # Custom 404 page
├── components/
│   ├── animations/      # GrainOverlay, ParticleBackground
│   ├── layout/          # Navbar, Footer, ScrollProgress, CustomCursor, CommandPalette, LoadingScreen
│   └── sections/        # HeroSection, AboutSection, ProjectsSection, ExperienceSection, SkillsSection, ContactSection
├── data/
│   └── portfolio.ts     # All editable content (CMS-like)
├── hooks/
│   └── useAnimations.ts # Custom hooks for interactions
├── lib/
│   ├── animations.ts    # Framer Motion variants
│   └── utils.ts         # Utility functions
├── types/
│   └── index.ts         # TypeScript interfaces
└── styles/              # Additional styles (if needed)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/achyut/portfolio.git
cd portfolio

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment (Vercel)

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/achyut/portfolio)

### Manual Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

Set these in your Vercel project settings:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Your production URL | Yes |
| `NEXT_PUBLIC_EMAIL_SERVICE_ID` | EmailJS Service ID | Optional |
| `NEXT_PUBLIC_EMAIL_TEMPLATE_ID` | EmailJS Template ID | Optional |
| `NEXT_PUBLIC_EMAIL_PUBLIC_KEY` | EmailJS Public Key | Optional |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | Optional |

## ✏️ Customization

All content is editable in `src/data/portfolio.ts`:

- **Site Config** — Name, title, description, URLs
- **Projects** — Add/edit/remove projects with categories, metrics, and tech stacks
- **Experience** — Work history and education timeline
- **Skills** — Categorized skills with proficiency levels
- **Social Links** — GitHub, LinkedIn, Twitter, etc.

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `⌘ K` | Open command palette |
| `1` | Navigate to Home |
| `2` | Navigate to Projects |
| `3` | Navigate to About |
| `4` | Navigate to Contact |
| `5` | Navigate to Resume |
| `Esc` | Close command palette |

## 📄 License

MIT License — feel free to use this as inspiration for your own portfolio.
