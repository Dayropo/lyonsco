# Lyons Company Web App — Architecture

## Overview
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict)
- **Runtime**: React 19
- **Styling**: Tailwind CSS v4
- **Icons**: lucide-react
- **Animation**: Framer Motion

The project uses the Next.js App Router with `app/`-scoped layouts and pages. Server Components are preferred by default; Client Components are used only where interactivity is required (e.g., the mobile menu and animated sections).

## Directory Structure
- `app/`
  - `layout.tsx`: Root layout, global fonts and header, metadata.
  - `page.tsx`: Landing page composed of the hero, capabilities, markets, and contact sections.
  - `globals.css`: Tailwind CSS base and global tokens.
- `components/`
  - `Header.tsx`: Site header with brand, desktop nav, and CTA.
  - `MobileMenu.tsx`: Client-side mobile overlay menu with accessibility and animations.
- `styles/`
  - `font.ts`: Local font configuration with CSS variables.
- `lib/`
  - `utils.ts`: Small shared helpers (e.g., class name mergers).

## Styling and Theming
- Tailwind CSS v4 with utility-first styling.
- Design tokens are applied through Tailwind and CSS variables in `globals.css` and `styles/font.ts`.
- Buttons and interactive elements follow focus-visible outlines for accessibility.

## Client vs Server Components
- Server Components for static/streamed content to reduce bundle size.
- Client Components where state, effects, or event handlers are necessary:
  - `components/MobileMenu.tsx` (menu toggle, overlay, Escape handling)
  - `app/page.tsx` (page-level animations via Framer Motion)

## Animations
- Framer Motion provides entrance animations for the hero and contact sections, hover/tap micro-interactions for capability cards, and overlay transitions for the mobile menu.
- Animations are intentionally subtle and performant.

## Accessibility
- Semantic HTML in sections and nav.
- Mobile menu uses `role="dialog"`, `aria-modal="true"`, and keyboard handling (Escape to close).
- Color contrast meets typical WCAG defaults; refine as branding evolves.

## Performance Considerations
- `next/image` for the hero background (optimized fill, priority, and responsive sizes).
- Light Client Component footprint; most rendering is server-side.
- Minimal runtime JS outside interactive components.

## Build and Deployment
- Scripts in `package.json`:
  - `dev`: Development server using Turbopack.
  - `build`: Production build using Turbopack.
  - `start`: Start production server.
  - `lint`: Run ESLint.
- Deploy to any Next-compatible hosting (e.g., Vercel). No provider-specific config is committed.

## Future Enhancements
- SEO: enrich `metadata` in `app/layout.tsx`, add `app/robots.ts` and `app/sitemap.ts`.
- Forms and validation: React Hook Form + Zod for RFQ flow.
- Data fetching/state: add TanStack Query and Zustand once dynamic data is introduced.
- UI components: layer in shadcn UI primitives when needed.
