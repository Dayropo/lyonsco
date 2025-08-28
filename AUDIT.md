# Lyons Company Website Audit and Redesign Plan

Date: 2025-08-28
Repository: c:\dev\lyonsco (Next.js 15, App Router, Tailwind v4, shadcn config present)

---

## Part 1 — Technical Audit (earlier)

Findings are based on live lookups of lyonsco.com (HTTP worked; HTTPS failed due to certificate mismatch).

- **TLS/HTTPS**
  - HTTPS fails with certificate for `*.securedata.net` instead of `lyonsco.com`/`www.lyonsco.com` (browsers warn/block).
  - No HTTP→HTTPS redirect; canonical hostname not enforced.
- **Robots/Sitemap**
  - `http://lyonsco.com/robots.txt` exists; blocks legacy FrontPage/IIS directories (`/_vti_*`, `/_fpclass`, etc.).
  - No `Sitemap:` directive. `http://lyonsco.com/sitemap.xml` is 404.
- **SEO/Metadata**
  - Title is generic ("Company"); minimal content; no Open Graph/Twitter tags; no canonical; no schema.org.
- **Stack/Hosting Signals**
  - Legacy/FrontPage-era structure implied by robots rules; likely old IIS or similar static hosting.
- **Security Headers**
  - No HSTS/CSP/X-CTO/etc. visible on HTTP.

Recommended fixes (priority order):
1) Provision valid cert(s) for apex and www; 301 redirect HTTP→HTTPS and to a single canonical host. Add HSTS after stable.
2) Move to a modern host/CDN (Vercel/Cloudflare/Netlify) for automatic SSL, HTTP/2/3, Brotli, edge caching.
3) Create sitemap.xml and reference in robots.txt; implement basic and social metadata; add schema.org (`Organization`, `BreadcrumbList`).
4) Add security headers (HSTS, CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy). Publish `/.well-known/security.txt`.
5) Optimize images/caching; enable monitoring and analytics.

---

## Part 2 — Redesign & Modernization Audit

### Current-state UX/content assessment
- **Content**: Single minimal page, lists capabilities and markets; no case studies, proof, or CTAs beyond email/phone.
- **Navigation/IA**: No persistent nav; unclear pathways for prospects (engineers, buyers) to request quotes or see capabilities depth.
- **Visual design**: No system (typography, color, spacing); legacy look; no brand cues.
- **Responsiveness**: Not assessed as modern/responsive; likely static layout.
- **Accessibility**: Unknown heading/landmark structure; likely lacks alt text, focus states, skip links.

### Business and UX goals
- **Goals**: Drive qualified RFQs, communicate manufacturing depth, build trust (certifications, QA, partners), and surface contact quickly.
- **Audiences**: Engineers, supply chain/buyers, startup product teams.
- **KPIs**: RFQ submissions, contact events, time on capability pages, case study views.

### Proposed Information Architecture (sitemap)
- **Home**
- **Capabilities** (overview)
  - Plastic Injection Molding
  - Metal Stamping
  - Machining
  - Powdered Metal Components
  - Circuit Board Manufacturing
  - Product Design
- **Markets**
  - Automotive
  - Aviation
  - Electronics
  - Medical
  - Military
- **Case Studies** (or Work)
- **Quality & Certifications** (ISO/ITAR as applicable)
- **About** (history, team, facilities)
- **Contact / RFQ** (prominent CTA globally)

Optional: Partners, Resources/Blog, FAQs.

### Content strategy
- **Service pages**: Add clear problem/solution, tolerances, materials, finishes, lead times, equipment lists, photos.
- **Proof**: Case studies with before/after, process, outcomes, testimonials; certifications and QA processes.
- **Conversion**: RFQ forms with file upload for drawings, clear SLAs; persistent CTA in header/footer.

### Visual design system
- **Typography**: Keep `Geist` (already in `app/layout.tsx`), define scale (H1–H6), line-length, and readable body.
- **Color**: Establish primary/neutral palette mapped to existing CSS OKLCH tokens in `app/globals.css` for dark/light modes.
- **Iconography**: Use `lucide-react` (already in dependencies) for consistency.
- **Spacing & Grid**: 4/8px scale; container widths 640/768/1024/1280/1536.
- **Components** (via shadcn + Tailwind v4):
  - Header/Nav (sticky), Footer, Section, Card, Button variants, Input, Textarea, Select, Dialog, Tooltip, Accordion.
  - Hero (headline, subcopy, primary CTA), Capabilities grid, Markets icons, Logos strip, Testimonial, Stat list, Feature rows.
  - RFQ form (file upload, validation), Contact card, Breadcrumbs.

### Accessibility (WCAG 2.1 AA)
- Semantic landmarks (`header`, `nav`, `main`, `footer`, `aside`).
- Logical heading hierarchy; skip-to-content link; visible focus; reduced motion preference; color contrast ≥ 4.5:1.
- Form labels, errors, instructions; ARIA only where necessary.

### Performance
- Next.js optimizations: `next/image`, static generation for marketing pages, route segment caching, partial prerendering.
- Asset strategy: modern image formats (WebP/AVIF), responsive sizes, preloading of above-the-fold assets, long-term immutable caching.
- Avoid large JS on marketing pages; prefer server components; code-split by route.

### SEO
- Use Next Metadata API in `app/layout.tsx` for title templates, description, canonical, OG/Twitter.
- Generate sitemap/robots via `next-sitemap` and add `Sitemap:` in robots.
- Structured data:
  - `Organization` (name, URL, logo, sameAs).
  - `LocalBusiness` (if address is available; add phone from current site).
  - `BreadcrumbList` for inner pages; `Service` for capabilities.

### Forms, integrations, analytics
- **RFQ/Contact**: Use Next.js Route Handlers (`app/api/rfq/route.ts`) to email via Resend/SES; optional CRM (HubSpot/Zoho) integration.
- **Analytics**: GA4 or Plausible; **Error monitoring**: Sentry.

### Hosting, security, DevOps
- Host on Vercel for auto SSL, global edge, previews.
- Enforce HTTPS and canonical host in `next.config.ts` headers/redirects.
- Security headers: HSTS (post-cert), CSP, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`.
- Publish `public/.well-known/security.txt`.

### Migration plan (high level)
1. Discovery: confirm copy, photos, certifications, case studies, brand preferences.
2. IA & low-fi wireframes for key templates (home, capability, markets, case study, contact/RFQ).
3. Design system tokens + components (shadcn/Tailwind v4).
4. Build pages as server components; hook up RFQ API; metadata/SEO.
5. Content load and asset optimization; QA (a11y, Lighthouse, responsive); redirects/headers.
6. Go-live on Vercel; set DNS (A/AAAA/CNAME, CAA); validate HTTPS; enable HSTS; submit sitemap to Google/Bing.
7. Post-launch: monitor CWV, error logs, analytics; iteration backlog.

### Deliverables checklist
- [ ] Design system (tokens, components) documented
- [ ] Pages: Home, Capabilities index + 6 detail pages, Markets index + 5 detail pages, Case studies, Quality/Certs, About, Contact/RFQ
- [ ] RFQ form with file upload + email/CRM integration
- [ ] Accessibility pass (WCAG AA)
- [ ] Performance budget (LCP <2.5s, INP <200ms on 4G mid-tier)
- [ ] SEO (metadata, schema, sitemap/robots)
- [ ] Security headers + HTTPS/HSTS
- [ ] Analytics + Monitoring

---

## Repo implementation notes (alignment with current codebase)
- `package.json`: Next 15.5.2, React 19, Tailwind v4; good foundation for App Router + RSC.
- `app/layout.tsx`: Replace placeholder metadata ("Create Next App"). Add canonical and social metadata using Metadata API.
- `app/page.tsx`: Currently Create Next App template. Replace with Home page sections.
- `app/globals.css`: Already defines OKLCH tokens and dark mode hooks—extend with brand palette.
- `components.json`: shadcn configured; generate UI primitives for consistency.
- `next.config.ts`: Add headers (security), redirects (HTTP→HTTPS, www↔apex canonical), and image domains if needed.
- Add `next-sitemap` for sitemap/robots; add `public/.well-known/security.txt`.

## Suggested next steps
1) Approve IA and initial visual direction (palette/typography/components).
2) I’ll scaffold routes, components, metadata, security headers, and sitemap in this repo.
3) Prepare Vercel project + DNS plan to fix SSL/canonical; then iterative content load and launch.
