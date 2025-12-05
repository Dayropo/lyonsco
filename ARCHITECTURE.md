# Manufacturing Solutions Partner — Architecture

## Overview

This is a website for a sales representative organization representing four precision manufacturing companies: **Pardev** (prototyping), **PTI** (injection molding), **CGR Tech** (precision metal/medical), and **Minic Precision** (Swiss machining).

## Current Implementation

- Homepage with lifecycle timeline, value propositions, companies overview, and CTA.
- Capabilities section with individual capability pages for injection molding, metal stamping, CNC machining, screw machining, and urethane/silicone casting.
- Company profile pages for all four partners using structured about sections and detailed specialties.
- Industry pages for Automotive, Aerospace, Electronics, Medical, and Military that share a common lifecycle and expose industry-specific component groups.

### Tech Stack

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

### Dependencies to Install

```bash
pnpm add react-hook-form @hookform/resolvers zod @tanstack/react-query zustand date-fns
```

## Core Strategy

Position as a **"One-Stop Manufacturing Solutions Partner"** - clients get access to multiple specialized manufacturers through one sales team, covering the entire product lifecycle from prototype to production.

## Site Structure

### Pages

1. **Homepage** (`app/page.tsx`)
   - Hero: "Your Complete Manufacturing Partner - From Prototype to Production"
   - Visual timeline: Concept → Prototype → Tooling → Production → Precision Components
   - Value propositions and CTAs

2. **Capabilities** (`app/capabilities/page.tsx`)
   - Comprehensive capability matrix with filtering
   - Filter by: stage, material, volume, industry, process
   - Links to relevant partner companies

3. **Company Profiles** (`app/companies/[slug]/page.tsx`)
   - Individual pages for Pardev, PTI, CGR Tech, Minic Precision
   - Specialties, use cases, certifications, equipment, case studies

4. **Solutions by Stage** (`app/solutions/page.tsx`)
   - Prototyping → Low-Volume → High-Volume Manufacturing

5. **Industries** (`app/industries/page.tsx` + `app/industries/[slug]/page.tsx`)
   - Medical Devices, Aerospace/Defense, Consumer Electronics, Automotive
   - Show multi-company collaboration examples

6. **Why Work With Us** (`app/why-us/page.tsx`)
   - Single point of contact, streamlined quoting, project management
   - Cost optimization, quality assurance

7. **RFQ Form** (`app/rfq/page.tsx`)
   - Intelligent form routing to appropriate companies
   - File upload for CAD files and drawings
   - Project stage, material, volume, timeline, industry fields

8. **Resources** (`app/resources/page.tsx`)
   - Manufacturing guides, process comparisons, cost calculators
   - Blog, facility video tours

## Directory Structure

```
app/
├── layout.tsx                 # Root layout with navigation
├── page.tsx                   # Homepage
├── globals.css                # Global styles, design tokens
├── capabilities/
│   └── page.tsx              # Capabilities matrix
├── companies/
│   ├── page.tsx              # All companies overview
│   └── [slug]/
│       └── page.tsx          # Individual company profile
├── solutions/
│   └── page.tsx              # Solutions by stage
├── industries/
│   ├── page.tsx              # Industries overview
│   └── [slug]/
│       └── page.tsx          # Individual industry page
├── why-us/
│   └── page.tsx              # Why work with us
├── rfq/
│   └── page.tsx              # RFQ form
└── resources/
    └── page.tsx              # Resource center

components/
├── ui/                        # shadcn/ui components
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── select.tsx
│   ├── badge.tsx
│   └── ...
├── layout/
│   ├── Header.tsx            # Main navigation
│   ├── Footer.tsx            # Site footer
│   └── MobileMenu.tsx        # Mobile navigation
├── home/
│   ├── HeroSection.tsx
│   ├── TimelineSection.tsx
│   ├── ValuePropsSection.tsx
│   └── CompaniesOverview.tsx
├── capabilities/
│   ├── CapabilityMatrix.tsx
│   ├── CapabilityFilter.tsx
│   └── CapabilityCard.tsx
├── companies/
│   ├── CompanyHero.tsx
│   ├── CompanySpecs.tsx
│   └── CompanyCaseStudy.tsx
├── rfq/
│   ├── RFQForm.tsx
│   ├── ProjectStageSelector.tsx
│   ├── FileUpload.tsx
│   └── SmartRouting.tsx
└── shared/
    ├── ProcessTimeline.tsx
    ├── CertificationBadges.tsx
    └── IndustryCard.tsx

lib/
├── utils.ts                   # Utility functions
├── constants.ts               # App constants
└── animations.ts              # GSAP animation helpers

types/
├── company.ts                 # Company data types
├── capability.ts              # Capability types
├── industry.ts                # Industry types
├── rfq.ts                     # RFQ form types
└── index.ts                   # Type exports

data/
├── companies.ts               # Company data
├── capabilities.ts            # Capability data
├── industries.ts              # Industry data
└── certifications.ts          # Certification data

store/
├── rfq-store.ts              # RFQ form state
├── filter-store.ts           # Capability filter state
└── ui-store.ts               # UI state (modals, etc.)
```

## Design System

### Color Palette

- **Primary**: Blue tones (precision, reliability)
- **Secondary**: Gray tones (technical, professional)
- **Accent**: Subtle highlights for CTAs
- **Background**: Clean whites and light grays

### Typography

- Professional, technical aesthetic
- Clear hierarchy for readability
- Engineering-focused but accessible

### Components

- Built with shadcn/ui for consistency
- Custom components for domain-specific needs
- Responsive and accessible by default

## Animations (GSAP)

- Hero entrance animations
- Timeline scroll animations
- Capability card interactions
- Page transitions
- Parallax effects for imagery
- Smooth scrolling between sections

## Key Features

### Intelligent RFQ Routing

- Form analyzes project requirements
- Routes to appropriate company/companies
- Suggests optimal manufacturing partner(s)
- File upload for CAD files and technical drawings

### Capability Matrix

- Interactive filtering system
- Multi-dimensional search (stage, material, volume, industry, process)
- Visual representation of company strengths
- Direct links to company profiles

### Trust Elements

- Combined certifications (ISO, ITAR, cleanroom)
- "Made in USA" prominence
- Client testimonials
- Multi-vendor collaboration case studies

## Performance & SEO

- Server Components by default
- Client Components only for interactivity
- Image optimization with next/image
- Metadata and structured data for SEO
- Fast loading with code splitting
- Mobile-first responsive design

## Accessibility

- WCAG 2.1 AA compliance
- Semantic HTML
- Keyboard navigation
- Screen reader support
- Focus management
- Color contrast standards

## Build and Deployment

- Scripts in `package.json`:
  - `dev`: Development server using Turbopack
  - `build`: Production build using Turbopack
  - `start`: Start production server
  - `lint`: Run ESLint
- Deploy to Vercel or similar Next.js-compatible hosting
- Environment variables for API keys and CRM integration

## Future Enhancements

- Client portal for quotes, orders, and project tracking
- CRM integration for lead management across four companies
- Real-time quote status tracking
- Advanced analytics dashboard
- Multi-language support
- Interactive 3D part viewers
- Cost estimation calculators
- Virtual facility tours
