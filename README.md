# Lyons Company Website
 
 A modern, responsive Next.js app for Lyons Company. Built with TypeScript, Tailwind CSS, and Framer Motion.
 
 ## Tech Stack
 - Next.js 15 (App Router), React 19
 - TypeScript (strict)
 - Tailwind CSS v4
 - lucide-react for icons
 - Framer Motion for animations
 
 ## Getting Started
 ```bash
 pnpm install
 pnpm dev
 ```
 - Dev server runs with Turbopack (see `package.json`).
 - Open http://localhost:3322/ (port set in scripts) in your browser.
 
 ## Scripts
 - `pnpm dev` — start dev server
 - `pnpm build` — build for production
 - `pnpm start` — run production server
 - `pnpm lint` — run ESLint
 
 ## Project Structure
 - `app/` — App Router entry points
   - `layout.tsx` — global layout, fonts, header
   - `page.tsx` — landing page (hero, capabilities, markets, contact)
 - `components/` — UI components
   - `Header.tsx`, `MobileMenu.tsx`
 - `styles/` — fonts, global styles
 - `lib/` — utilities
 
 ## Development Guidelines
 - Follow Airbnb style and strict TypeScript (no any)
 - Prefer functional React components and hooks
 - Tailwind for styling; accessible focus states
 - Keep functions small and single-purpose
 
 ## Animations
 - Framer Motion powers hero entrance, capability card micro-interactions, contact section reveal, and the mobile menu overlay.
 
 ## Documentation
 - See `ARCHITECTURE.md` for a deeper dive into structure and decisions.
 - See `CHANGELOG.md` for release notes.
 
 ## License
 - Proprietary. All rights reserved.
