# Manufacturing Solutions Partner Website

A comprehensive website for a sales representative organization representing four precision manufacturing companies: **Pardev** (prototyping), **PTI** (injection molding), **CGR Tech** (precision metal/medical), and **Minic Precision** (Swiss machining).

## Overview

This website positions the organization as a **"One-Stop Manufacturing Solutions Partner"** - providing clients access to multiple specialized manufacturers through one sales team, covering the entire product lifecycle from prototype to production.

## Features

- **Modern Stack**: Next.js 15 App Router, React 19, TypeScript, Tailwind CSS v4
- **GSAP Animations**: Smooth scroll-triggered animations and transitions
- **Comprehensive Data Models**: Companies, capabilities, industries, and RFQ system
- **Professional Design**: Blue/gray color palette for technical, engineering-focused aesthetic
- **Responsive**: Mobile-first design optimized for all devices
- **Performance**: Server Components by default, optimized images, code splitting

## Getting Started

### Prerequisites
- Node.js 20+ and pnpm

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. **Important**: Install additional required dependencies:
```bash
pnpm add react-hook-form @hookform/resolvers zod @tanstack/react-query zustand date-fns
```

3. Install GSAP ScrollTrigger plugin:
```bash
pnpm add gsap-trial
```
Or use the GSAP package already installed (gsap@3.13.0 includes ScrollTrigger).

### Development
```bash
pnpm dev
```
Open [http://localhost:3322](http://localhost:3322) in your browser.

### Build
```bash
pnpm build
pnpm start
```

### Lint
```bash
pnpm lint
```

## Project Structure

```
app/
├── layout.tsx                 # Root layout with navigation
├── page.tsx                   # Homepage
├── globals.css                # Global styles, design tokens
├── capabilities/              # Capabilities pages (to be built)
├── companies/                 # Company profile pages (to be built)
├── solutions/                 # Solutions pages (to be built)
├── industries/                # Industry pages (to be built)
├── why-us/                    # Why work with us page (to be built)
├── rfq/                       # RFQ form page (to be built)
└── resources/                 # Resource center (to be built)

components/
├── home/                      # Homepage components
│   ├── HeroSection.tsx
│   ├── TimelineSection.tsx
│   ├── ValuePropsSection.tsx
│   ├── CompaniesOverview.tsx
│   └── CTASection.tsx
├── Header.tsx                 # Main navigation
└── MobileMenu.tsx             # Mobile navigation

data/
├── companies.ts               # Four manufacturing companies data
├── capabilities.ts            # Manufacturing capabilities data
└── industries.ts              # Industry solutions data

types/
├── company.ts                 # Company type definitions
├── capability.ts              # Capability type definitions
├── industry.ts                # Industry type definitions
├── rfq.ts                     # RFQ form type definitions
└── index.ts                   # Type exports

lib/
├── utils.ts                   # Utility functions
├── constants.ts               # App constants
└── animations.ts              # GSAP animation helpers
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict)
- **Runtime**: React 19
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Icons**: lucide-react
- **Animation**: GSAP (primary) + Framer Motion (secondary)
- **Forms**: React Hook Form + Zod validation
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **Date Handling**: date-fns

## Key Pages to Build

### Completed
- ✅ Homepage with hero, timeline, value props, companies overview, and CTA
- ✅ Updated header with new navigation
- ✅ Data models for companies, capabilities, and industries
- ✅ GSAP animation helpers
- ✅ Blue/gray professional color palette

### To Build
- [ ] Capabilities page with filtering and matrix view
- [ ] Individual company profile pages (4 pages)
- [ ] Solutions by stage page
- [ ] Industry pages (4 pages: Medical, Aerospace, Electronics, Automotive)
- [ ] Why Work With Us page
- [ ] RFQ form with intelligent routing
- [ ] Resources/blog page
- [ ] Footer component
- [ ] Zustand stores for state management
- [ ] shadcn/ui component integration

## Design System

### Color Palette
- **Primary**: `#1E40AF` (Blue 800) - Precision, reliability
- **Accent**: `#0EA5E9` (Sky 500) - Technical highlights
- **Foreground**: `#1E293B` (Slate 800) - Main text
- **Muted**: `#64748B` (Slate 500) - Secondary text
- **Background**: `#FFFFFF` - Clean, professional

### Typography
- Professional, technical aesthetic
- Clear hierarchy for readability
- Engineering-focused but accessible

## Four Manufacturing Partners

1. **Pardev** - Early-stage prototyping and concept models
   - 3D Printing, CNC Prototyping, Design Consultation
   - Volume: 1-100 pieces
   - Lead Time: 3-5 days

2. **PTI** - Mid-to-high volume plastic injection molding
   - Injection Molding, Tool Design, Insert Molding
   - Volume: 1,000-10,000,000 pieces
   - Lead Time: 4-8 weeks (including tooling)

3. **CGR Tech** - Precision metal components and medical device parts
   - CNC Machining, EDM, Cleanroom Manufacturing
   - Volume: 100-100,000 pieces
   - Lead Time: 2-6 weeks

4. **Minic Precision** - Ultra-precise Swiss machining for small parts
   - Swiss Turning, Micro-Machining, Thread Rolling
   - Volume: 500-5,000,000 pieces
   - Lead Time: 2-4 weeks

## Contact Information

- **Email**: info@lyonsco.com
- **Phone**: (847) 742-7714

## Documentation

- See `ARCHITECTURE.md` for detailed architecture and structure
- See `CHANGELOG.md` for release notes

## License
Private
