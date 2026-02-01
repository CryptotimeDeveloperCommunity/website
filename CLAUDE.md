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
1. Navigation (fixed header with "Contact Us" CTA)
2. HeroSection - Core positioning and value proposition
3. WhatWeDoSection - Network capabilities (100+ communities, 20+ cities)
4. PartnershipScenariosSection - 6 key service offerings
5. ShowcaseSection - Success stories and case studies (NEW)
6. PartnershipSection - Partnership opportunities and contact
7. FAQSection - Common questions
8. FooterSection

**About Page (`app/about/page.tsx`)** - Team and vision:
1. Navigation
2. About Hero
3. TeamSection - Founder and team introductions
4. VisionSection - Long-term vision
5. ValueSection - Core values
6. FooterSection

### Component Organization

- **`components/`**: All React components are standalone section components
  - Core sections: HeroSection, WhatWeDoSection, PartnershipScenariosSection, ShowcaseSection, PartnershipSection, FAQSection, FooterSection
  - Utility components: Navigation, ScrollAnimation, EnhancedButton, EnhancedCard, LoadingSpinner
- **`app/`**: Next.js App Router structure
  - `layout.tsx`: Root layout with font configuration and metadata
  - `page.tsx`: Main homepage that composes all sections
  - `globals.css`: Global styles, animations, and visual effects
- **`public/logos/`**: Static assets (team photos, logos, QR codes)
- **`public/showcase/`**: Event photos and case study images (to be added)

### Navigation System

The Navigation component (`components/Navigation.tsx`) uses:
- Client-side component (`'use client'`)
- Page-based navigation (Home, About)
- "Contact Us" CTA button linking to Telegram
- Mobile-responsive hamburger menu
- Fixed positioning with backdrop blur
- Glassmorphism effects and smooth transitions

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
- `shimmer`: Flowing light effect (NEW)
- `bounce-subtle`: Gentle bounce animation (NEW)
- `scale-in`: Scale entrance effect (NEW)
- `gradient-x`, `gradient-y`: Animated gradients (NEW)

### Cosmic Background

The site uses a custom cosmic gradient background defined in `globals.css`:
- `.cosmic-bg` class with radial gradient from red center to black edges
- Pseudo-element with star field effect using multiple radial gradients

### Advanced Visual Effects (NEW)

Modern design enhancements added to `globals.css`:
- `.glass-effect`: Frosted glass appearance with backdrop blur
- `.glass-effect-strong`: Enhanced glass effect for emphasis
- `.card-3d`: 3D hover transformation for cards
- `.magnetic-button`: Interactive button with spring animation
- `.text-shimmer`: Animated gradient text effect
- `.text-glow`: Subtle red glow for text emphasis
- `.text-glow-strong`: Intense glow for hero elements
- `.card-shadow-glow`: Glowing shadow on hover
- `.gradient-border`: Animated gradient border effect

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
- Performance optimizations:
  - 3D effects disabled on mobile devices
  - Simplified backdrop-blur on smaller screens
  - Decorative elements (planets, orbits) hidden on mobile
  - Reduced animation complexity for better performance

## Image Handling

Next.js Image component is used with:
- WebP and AVIF format support configured in `next.config.js`
- Priority loading for above-the-fold images (logo)
- Responsive sizing with Tailwind classes

## Client vs Server Components

- **Navigation**: Client component (uses `useState` for mobile menu)
- **ShowcaseSection**: Client component (interactive case studies)
- **FAQSection**: Client component (uses `useState` for accordion)
- **FooterSection**: Client component (uses `useState` for QR code modals)
- **ScrollAnimation**: Client component (uses IntersectionObserver)
- **Other sections**: Most are client components for animations and interactivity
- When adding interactivity (state, effects, event handlers), add `'use client'` directive at the top

## Deployment Notes

- Recommended platform: Vercel
- The site uses Next.js App Router (experimental flag in config)
- Static assets are in `public/` directory
- No environment variables or API routes currently configured

## Recent Updates (2026-02-01)

### New Components
- **ShowcaseSection**: Displays success stories, case studies, and event highlights
- **EnhancedButton**: Reusable button component with multiple variants
- **EnhancedCard**: Reusable card component with glassmorphism effects
- **LoadingSpinner**: Branded loading state component

### Design Enhancements
- Added glassmorphism effects throughout the site
- Implemented 3D card hover transformations
- Added magnetic button interactions
- Enhanced shadow and glow effects
- Improved mobile performance optimizations

### Navigation Updates
- Changed "DeAI Handbook" to "Contact Us" button
- Removed external handbook links from footer
- Streamlined navigation for business focus

### Documentation
- Created `FRONTEND_OPTIMIZATION.md` with detailed design system documentation
- Updated component structure and organization
- Added performance optimization guidelines
