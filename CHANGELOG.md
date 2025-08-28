# Changelog

All notable changes to this project will be documented in this file.

## [0.2.0] - 2025-08-28
### Added
- Mobile hamburger menu component `components/MobileMenu.tsx` with accessible overlay, keyboard support, and Framer Motion animations.
- Framer Motion integration across the app:
  - Animated hero heading, subtext, and CTA group in `app/page.tsx`.
  - Micro-interactions on capability cards.
  - Contact section reveal-on-scroll.
  - Animated mobile menu overlay fade-in and panel slide-in.
- Architecture documentation: `ARCHITECTURE.md`.
- Project-specific README with stack, scripts, structure, and docs links.

### Changed
- Updated `components/Header.tsx` to integrate mobile menu and adjust responsive behavior.
- Improved hero section layout calculations using dynamic viewport units.

### Fixed
- Duplicate Tailwind min-height utility in hero section.
- Menu overlay close behavior (backdrop and X button reliability).

## [0.1.0] - 2025-08-28
- Initial project scaffolding with Next.js 15 App Router, Tailwind CSS, and base components.
