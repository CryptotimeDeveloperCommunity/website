# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CryptoTime - China Market Entry Service Provider. Professional service helping international AI products enter and succeed in China's market. Built with Next.js 14, featuring a dark cosmic theme with red/black branding.

**Core Business**: End-to-end market entry services leveraging 100+ AI communities and KOLs across 20+ cities in China.

**Key Services**:
1. Product Launch & Promotion
2. User Growth Services
3. Community Marketing
4. User Research & Feedback
5. Market Validation
6. Hardware Supply Chain Access

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS with custom theme
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Orbitron, Exo 2)
- **Deployment**: Vercel (recommended)

## Architecture

### Multi-Page Application Structure

The website now has two main pages:

**Homepage (`app/page.tsx`)** - Business-focused landing page:
1. Navigation (fixed header)
2. HeroSection - Core positioning and value proposition
3. WhatWeDoSection - Network capabilities (100+ communities, 20+ cities)
4. PartnershipScenariosSection - 5 key use cases for partners
5. PartnershipSection - Partnership opportunities
6. FAQSection
7. FooterSection

**About Page (`app/about/page.tsx`)** - Team and vision:
1. Navigation
2. About Hero
3. TeamSection - Founder and team introductions
4. VisionSection - Long-term vision
5. ValueSection - Core values
6. FooterSection

### Component Organization

- **`components/`**: All React components are standalone section components
- **`app/`**: Next.js App Router structure
  - `layout.tsx`: Root layout with font configuration and metadata
  - `page.tsx`: Main homepage that composes all sections
  - `globals.css`: Global styles and Tailwind directives
- **`public/logos/`**: Static assets (team photos, logos, QR codes)

### Navigation System

The Navigation component (`components/Navigation.tsx`) uses:
- Client-side component (`'use client'`)
- Page-based navigation (Home, About)
- Mobile-responsive hamburger menu
- Fixed positioning with backdrop blur
- Links to external resources (GitHub, DeAI Handbook)

### Path Aliases

TypeScript is configured with path alias `@/*` pointing to the root directory:
```typescript
import Navigation from '@/components/Navigation'
```

## Design System

### Color Palette

The design uses a red/black theme matching the CryptoTime logo:

```javascript
// Primary colors (red theme)
'primary-glow': '#DC2626'      // Main red (logo color)
'primary-light': '#FF4444'     // Lighter red
'primary-highlight': '#FF3333' // Highlight red

// Background colors (dark theme)
'bg-primary': '#000000'        // Pure black (logo background)
'bg-secondary': '#0A0A0A'      // Slightly lighter black

// Text colors
'text-primary': '#FFFFFF'      // Pure white (logo text)
'text-secondary': '#CCCCCC'    // Light gray
```

### Custom Animations

Tailwind config includes custom animations:
- `breathe`: Pulsing scale effect
- `float`: Gentle vertical floating
- `glow`: Box shadow glow effect
- `twinkle`: Opacity twinkling
- `orbit`: 360° rotation
- `fade-in-up`, `fade-in`, `slide-in-left`, `slide-in-right`: Entrance animations

### Cosmic Background

The site uses a custom cosmic gradient background defined in `globals.css`:
- `.cosmic-bg` class with radial gradient from red center to black edges
- Pseudo-element with star field effect using multiple radial gradients

### Typography

Three Google Fonts are loaded in `app/layout.tsx`:
- **Inter**: Default sans-serif (body text)
- **Orbitron**: Display font (CSS variable `--font-orbitron`)
- **Exo 2**: Secondary display font (CSS variable `--font-exo2`)

## Mobile Optimization

The site includes mobile-specific optimizations in `globals.css`:
- Touch-optimized scrolling (`-webkit-overflow-scrolling: touch`)
- Font smoothing for better rendering
- Minimum touch target sizes (44px) for buttons/links on touch devices
- Responsive breakpoints throughout components

## Image Handling

Next.js Image component is used with:
- WebP and AVIF format support configured in `next.config.js`
- Priority loading for above-the-fold images (logo)
- Responsive sizing with Tailwind classes

## Client vs Server Components

- **Navigation**: Client component (uses `useState` for mobile menu)
- **Other sections**: Check individual components, but most are likely server components unless they use interactivity
- When adding interactivity (state, effects, event handlers), add `'use client'` directive at the top

## Deployment Notes

- Recommended platform: Vercel
- The site uses Next.js App Router (experimental flag in config)
- Static assets are in `public/` directory
- No environment variables or API routes currently configured
