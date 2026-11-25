# Portfolio audit — 25 November 2026

This document describes the current React/Vite frontend in this repository. It is a source-code and GitHub configuration review, not a visual browser certification. The project is intentionally frontend-only.

## Confirmed implementation

- React 19 and Vite 7 application under my-portfolio/.
- Routes: Home, Projects, About, Skills, Experience and Contact.
- Portfolio content is maintained in src/data/portfolioData.js.
- Static assets are served from public/.
- Firebase Hosting publishes my-portfolio/dist from the main branch.
- The application has no custom backend, database, admin panel or authentication flow.
- Accessibility provisions include a skip link, main landmark, focus handling, image alternatives, descriptive project links and reduced-motion styling.

## Changes in the current audit branch

- Widened the shared desktop content container and timeline heading.
- Replaced the header's AS text monogram with the profile photo in a chrome-style frame.
- Clarified the completed BSc and ongoing UNISA Honours study in the hero.
- Removed misleading technology-brand icons for generic concepts such as REST APIs and Agile.
- Added a .vite ignore rule and removed generated Vite cache files from version control.
- Added ESLint to the pull-request quality workflow before the production build.
- Aligned robots.txt and sitemap.xml with the Firebase production hostname.
- Added canonical and social-sharing metadata using the Firebase production URL and profile image.
- Rewrote the README to match the actual source tree, deployment and frontend-only architecture.

## Findings still requiring attention

| Priority | Finding | Why it matters | Next action |
|---|---|---|---|
| High | Certification artwork and titles are listed without issuer verification URLs, award dates or credential IDs. | Images alone do not prove active credential status. | Confirm each credential and add verifiable issuer links/dates, or remove any item that is not earned. |
| High | Project cards have no real screenshots and two projects have no public source/demo links. | Recruiters cannot inspect implementation evidence. | Add approved screenshots and accurate links; keep confidential employer work appropriately abstract. |
| High | Project descriptions do not yet explain individual contribution, technical decisions or measurable outcomes. | Technology lists do not show depth or ownership. | Add evidence-based case studies without inventing results. |
| Medium | The app updates title and description after client-side route changes, but social crawlers initially receive shared HTML metadata. | Route-specific search/share previews are limited. | Consider prerendering public routes if search visibility becomes a priority. |
| Medium | Unknown client-side routes redirect to Home. | Mistyped URLs do not receive a helpful not-found page. | Add a dedicated 404 route and, if required, host-level 404 handling. |
| Medium | No automated component or end-to-end test suite is configured. | Lint and build cannot verify navigation, forms or responsive behaviour. | Add tests for key journeys after selecting a test framework. |
| Medium | External technology logos depend on jsDelivr. | A third-party outage can leave logos unavailable. | Consider local assets or text-only badges for reliability. |
| Medium | Contact is a direct email link rather than a web form. | Users need a configured mail app to compose a message. | Keep this intentional unless a form provider is explicitly selected. |
| Low | The old Netlify configuration remains for preview hosting while Firebase is production. | Two hosting configurations can confuse maintainers. | Keep both only if Netlify previews are still used; otherwise remove obsolete Netlify configuration. |

## Manual verification still needed

- Review the live site at desktop and mobile widths (320px, 375px, 768px, 1280px and wide desktop).
- Navigate every route using keyboard only; verify focus visibility and skip-link behaviour.
- Confirm the profile image crop and chrome-style header treatment on real devices.
- Check that all images, favicon, canonical URL, robots.txt and sitemap.xml load from Firebase.
- Verify external project and LinkedIn links.
- Confirm credential status and public project permissions.
- Review browser console and network failures on the deployed site.

## Guardrails

- Do not add an admin panel, backend, database or authentication unless the project scope changes.
- Do not publish internal Mercedes-Benz information, screenshots or source code without approval.
- Do not describe the frontend as TypeScript: the app source is JavaScript/JSX, although TypeScript is listed among the user's skills and project technologies.
- Do not claim a certification is current or earned solely because a badge image exists.
- Do not claim a project outcome, production impact or performance metric without evidence.
