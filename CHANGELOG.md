# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.4.0] - 2025-12-05

### Added

- Shared lifecycle data model for Lyons-wide 9-step process used across industries and home timeline.
- Industry components section with grouped component data for Automotive, Electronics, Medical, and Military pages.
- Structured company about sections (`aboutSections`) with support for multiple bullet groups per section.
- Rich about content for CGR Tech and Minic Precision mirroring source documentation (stamping, precision machining, screw machining).
- New capabilities for CNC machining, screw machining, and urethane/silicone casting.

### Changed

- Updated industry pages to use shared lifecycle steps instead of per-industry process copy.
- Refined company pages and companies value proposition content to better reflect Lyons positioning.
- Adjusted capabilities routing and data to use `cnc-machining` slug and new capability entries.
- Updated README and ARCHITECTURE documentation to reflect current implementation state.

### Technical

- Extended `Company` types with `aboutSections` and `CompanyAboutBulletGroup` for structured content.
- Updated `CompanyAbout` component to render titled bullet groups and support multiple lists per section.
- Added new `IndustryComponents` section component powered by typed `IndustryComponentGroup` with icon mapping.

## [0.3.0] - 2025-10-19

### Added

- Complete project revamp for Manufacturing Solutions Partner website
- Comprehensive data models for four manufacturing companies (Pardev, PTI, CGR Tech, Minic Precision)
- Type definitions for companies, capabilities, industries, and RFQ system
- GSAP animation system with scroll triggers and timeline animations
- New homepage sections:
  - Hero section with GSAP animations
  - Product lifecycle timeline with scroll-triggered animations
  - Value propositions section
  - Companies overview with links to individual profiles
  - CTA section with gradient background
- Updated design system with blue/gray professional color palette
- Constants file with navigation, certifications, materials, and processes
- Detailed company data including specialties, equipment, certifications, and volume ranges
- Industry solutions data for Medical Devices, Aerospace/Defense, Consumer Electronics, and Automotive
- Comprehensive capabilities data with 11+ manufacturing processes
- GSAP animation helper functions for common animation patterns
- Updated header with new navigation structure
- Updated ARCHITECTURE.md with complete project overview

### Changed

- Transformed from generic landing page to specialized manufacturing solutions website
- Updated color scheme to professional blue/gray palette (#1E40AF primary, #0EA5E9 accent)
- Redesigned homepage to showcase complete product lifecycle
- Enhanced navigation with capabilities, companies, solutions, industries, and resources
- Improved typography with better hierarchy and tracking

### Technical

- Added type definitions for Company, Capability, Industry, and RFQ
- Created data files with comprehensive information for all four companies
- Implemented GSAP ScrollTrigger animations throughout
- Set up foundation for React Hook Form, Zod, TanStack Query, and Zustand (dependencies to be installed)

## [0.2.0] - 2025-01-15

### Added

- Framer Motion animations for hero, capability cards, and contact section
- Smooth entrance animations and micro-interactions
- Mobile menu overlay with animation

### Changed

- Improved visual hierarchy and spacing
- Enhanced mobile responsiveness
- Updated color scheme for better contrast

## [0.1.0] - 2025-01-14

### Added

- Initial Next.js 15 setup with App Router
- Tailwind CSS v4 configuration
- Basic landing page with hero, capabilities, markets, and contact sections
- Responsive header with mobile menu
- TypeScript strict mode
- ESLint and Prettier configuration.
- Architecture documentation: `ARCHITECTURE.md`.
- Project-specific README with stack, scripts, structure, and docs links.

### Fixed

- Duplicate Tailwind min-height utility in hero section.
- Menu overlay close behavior (backdrop and X button reliability).

## [0.1.0] - 2025-08-28

- Initial project scaffolding with Next.js 15 App Router, Tailwind CSS, and base components.
