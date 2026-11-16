# Portfolio audit and improvement package

Updated with your confirmed education and employment history: BSc Computer Science and Physics, University of Fort Hare, graduated May 2023; currently studying Honours in Computing at UNISA; Mercedes-Benz South Africa external intern through NetCampus July 2023–July 2024, internal intern August 2024–January 2026, Graduate Trainee February 2026–present. Specific work responsibilities and outcomes have not been supplied.

Reviewed 16 November 2026 from the repository for afsportfolio.netlify.app. This is a source-based audit, not a rendered-browser certification. Stored API content may differ from fallback records. No job advert, detailed project evidence or time budget was supplied. The added interests are software development, cyber security and technical support; they are not treated as proven professional experience. The plan assumes two hours per day.

## Recruiter assessment

Before changes, the first ten seconds communicated “Web & Low-Code Developer” and a broad claim to build “scalable, secure, and user-friendly applications.” Your name appeared in navigation, but your studies, location, specific stack and target level were absent from the hero. After thirty seconds, a recruiter still lacked your contribution to a real project, working source/demo evidence, qualification status and a CV. Your latest clarification confirms graduation in May 2023. The earlier undergraduate wording was incorrect and has been replaced with your completed degree, current UNISA honours studies and career progression.

I would need further evidence before inviting you to a developer interview from this portfolio alone. React components and API integrations show tangible development activity, but the Budget Tracker and Mendix Business App records contain only names and stacks. Security+ artwork and an Azure badge are not sufficient evidence of credential ownership or operational security experience. Technical support has no troubleshooting examples, ticket write-ups or diagnostic evidence. These gaps are not evidence that you lack the abilities; they are reasons a reviewer cannot assess them.

The five highest-value changes are accurate education status; an explicit identity/role/stack hero; two verified project case studies; working project/CV/contact routes; and mobile/keyboard checks. The first, second and core navigation/contact code changes have been implemented. Project details and qualification verification still require your evidence.

## Findings, exact locations and changes

| Priority | Location and exact issue | Why it matters | Specific change and example | Status |
|---|---|---|---|---|
| High | `TimelineItem.jsx`: outdated undergraduate wording | Misstates your completed qualification and omits your current studies and work. | BSc Computer Science and Physics, University of Fort Hare — graduated May 2023; Honours in Computing at UNISA — currently studying; dated Mercedes-Benz South Africa career progression. | Corrected using your clarification |
| High | `Hero.jsx`: “I build scalable, secure…” without supporting evidence | Security and scalability are engineering claims that require architecture/tests. | Name React, TypeScript and Mendix; state Graduate Trainee role, completed BSc and current honours studies. | Implemented |
| High | `App.jsx`: home rendered only Hero | A recruiter had to leave the landing page to find any evidence. | Hero → projects → background → skills → contact. Education remains a linked page. | Implemented |
| High | `Navbar.jsx`: fixed header, `mr-90`, nonwrapping links | Large reserved margin and competing content cause narrow-screen pressure. | Normal-flow header; wrapping links with 44px minimum height; single-column header below 800px. | Implemented; needs device verification |
| High | `Footer.jsx`: fixed bottom footer | Covers content and focused controls, particularly with mobile keyboards. | Normal document-flow footer after main. | Implemented |
| High | `Projects.jsx`, `api-seed.mts`: Budget Tracker and Mendix Business App have `/images/…` assets absent from public and `#` links | Looks unfinished and prevents technical review. | Remove invented frontend fallback records; show explicit load/empty/error states. Suppress invalid links and failed previews for stored records. Replace seeded content with verified records through admin. | Frontend fixed; existing stored/seed records need owner evidence |
| High | `ProjectCard.jsx`: title and technology only | Cannot judge users, individual work, design decisions or value. | Add description support. Example draft: “Budget Tracker — React/Firebase project; [ADD DETAILS: user, contribution, challenge and result].” Do not publish draft placeholders as achievements. | Rendering supports descriptions; authoring/evidence pending |
| High | `About.jsx`: “passionate developer”, generic problem-solving claim, missing `/images/profile.jpg` | Little differentiation and broken image. | Specific Bizana/UFH background and stated stack; use existing portrait in hero. | Implemented |
| High | `Contact.jsx`: placeholders as labels; email field was text; no required fields or status | Fields lose accessible meaning during entry; failures are opaque. | Explicit labels, email type, native required validation, sending/success/error messages and direct email fallback. | Implemented |
| High | React-only Netlify contact form had no static definition | Deploy-time form detection cannot see React output. | Add `public/__forms.html`, matching fields and URL-encoded POST; enable Forms feature. | Implemented; deployed submission verification pending |
| High | API write handlers use `getUser()` without an admin-role check | Any authenticated account appears sufficient for content writes. Actual exposure depends on signup settings. | Verify invite-only account policy and require trusted server-controlled admin authorization on all writes, including seed. Example proposal below. | Open; backend policy needs verification |
| Medium | API write handlers accept raw `req.json()` | Invalid records can break rendering; inputs lack schema/size checks. | Validate arrays, item counts, field lengths, URL protocols and reject malformed input before storing. | Open |
| Medium | `Skills.jsx`: flat list omitted stated TypeScript/PostgreSQL/Azure/Docker | Recruiters cannot quickly match application stack. | Add stated tools and explanatory grouping text, without numerical ratings. | Implemented fallback; API-managed list may override |
| Medium | No CV asset in public | A recruiter cannot quickly export qualifications to hiring workflow. | “My CV is available on request” until an accessible, verified PDF exists; then add “Download CV (PDF, [size])”. | Honest request copy implemented |
| Medium | `TimelineItem.jsx`: credential logos/titles without dates or verification | Claims cannot be independently checked. | Add issuer URL, award/expiry date and credential identifier only after verification; remove any unearned credential. | Verification notice added; evidence pending |
| Medium | `index.html`: “AFS Portfolio”, missing description/share metadata; absent favicon | Search/social result does not identify role or location. | Person name, truthful role/region title, description, Open Graph, Person JSON-LD and real SVG favicon. | Implemented |
| Medium | SPA has shared initial metadata and soft redirects for unknown pages | Per-route indexing/social previews are limited and nonexistent pages return success. | Add prerendered route metadata and a true 404 response in a later routing pass. | Open |
| Medium | `index.css`: smooth scrolling without reduced-motion alternative | Can cause discomfort for motion-sensitive users. | Disable smooth scrolling under `prefers-reduced-motion: reduce`. | Implemented |
| Medium | Images lacked alt attributes; links said only “Live” | Screen-reader users lack context. | Portrait alt “Anele Simbela”; decorative certification badges `alt=""`; project-specific accessible link names. | Implemented |
| Low | `App.css`: unused Vite demo styles; `.vite` included in lint | Adds confusion and generated-code lint noise. | Exclude generated caches from ESLint. Remove unused demo assets/styles when confirmed unused. | Lint ignore fixed; demo cleanup optional |
| Low | `public/img/background.png` is about 396KB but unused in current pages | Unused files do not affect page transfer until requested; deleting them alone will not speed rendering. | Keep portrait (about 172KB) dimensioned; measure before further image optimization. | Dimensions and lazy loading implemented |

No evidence supports a claim of unnecessary React re-renders as a current bottleneck. Avoid speculative memoization. The frontend uses JavaScript/JSX, not TypeScript; do not describe this repository as a TypeScript application. Existing `.mts` handlers are outside the JavaScript ESLint configuration.

## Homepage copy and layout

Implemented headline: **Web & Mendix developer. Practical problems. Thoughtful solutions.**

Name directly above headline: **Anele Simbela**. Eyebrow: **Bizana, Eastern Cape · South Africa**.

Supporting paragraph: “I’m a Graduate Trainee at Mercedes-Benz South Africa and a BSc Computer Science and Physics graduate. I’m currently studying towards Honours in Computing at UNISA. I use React, TypeScript and Mendix to develop web applications, with experience in PostgreSQL, Azure and Docker.”

Primary CTA: **Explore projects**. Secondary: **Get in touch**. These lead to existing routes. The contact section also provides email and LinkedIn; a CV download is deliberately not fabricated.

Section order/headings: hero; **Projects & technical work**; **From Bizana, building with purpose.**; **Technologies I work with**; **Let’s discuss your next opportunity.**

Featured-project introduction: “Explore the technologies and applications behind my development work. Contact me to discuss my contribution and implementation decisions.” Add a named featured case study only once its evidence is supplied.

Contact copy: “Hiring for junior software development, cyber security or technical support in South Africa? Get in touch to discuss my background, project work and suitability for your team.” These are opportunities to discuss, not claims of experience in all three fields.

Desktop keeps the slate/blue visual identity with left-aligned copy and a right portrait; content width caps at 1152px. Mobile below 800px uses one column, wrapping navigation and stacked project cards. Below 400px CTA buttons fill the available width. No content carousel, hover-only interaction or entrance animation blocks evidence.

## About Me alternatives

### Concise

I’m Anele Simbela, from Bizana in the Eastern Cape. I graduated from the University of Fort Hare with a BSc in Computer Science and Physics in May 2023 and now study Honours in Computing at UNISA. I’m a Graduate Trainee at Mercedes-Benz South Africa, following external and internal internships there since July 2023. My technical experience includes Mendix, React, TypeScript, JavaScript, CSS, Azure, Docker and PostgreSQL. I want to use these skills to solve practical problems and contribute to my community.

### Professional

I’m Anele Simbela, a Graduate Trainee at Mercedes-Benz South Africa and an Honours in Computing student at the University of South Africa (UNISA). I graduated from the University of Fort Hare with a BSc in Computer Science and Physics in May 2023.

My career at Mercedes-Benz South Africa began in July 2023 as an external intern through NetCampus. I continued until July 2024, became an internal intern in August 2024, and moved into my current Graduate Trainee role in February 2026.

Originally from Bizana in the Eastern Cape, I’m interested in using technology to address practical problems and contribute to my community. My technical experience includes Mendix, React, TypeScript, JavaScript, CSS, Azure, Docker and PostgreSQL. I’m continuing to develop these skills alongside my postgraduate studies.

### Personal storytelling

I’m from Bizana in the Eastern Cape, and my interest in technology is connected to a practical question: how can the things I learn become useful to the people around me?

In May 2023, I graduated from the University of Fort Hare with a BSc in Computer Science and Physics. Two months later, I joined Mercedes-Benz South Africa as an external intern through NetCampus. That internship continued until July 2024, followed by an internal internship from August 2024 to January 2026. Since February 2026, I’ve been a Graduate Trainee at Mercedes-Benz South Africa.

Alongside this career progression, I’m currently studying towards Honours in Computing at UNISA. My technical experience includes Mendix, React, TypeScript, JavaScript, CSS, Azure, Docker and PostgreSQL.

I want to keep developing my technical judgement and use software to address practical problems. Contributing to my community remains part of that goal, as I continue building on my education and taking the next steps in my career.

## Project descriptions: evidence-limited drafts

The two project names below occur in frontend/backend defaults. They are not verified completed projects. Firebase and REST API usage are repository claims awaiting confirmation. Do not turn these drafts into factual personal achievements without that confirmation.

### Budget Tracker

- One sentence: “Budget Tracker is a React/Firebase project intended to address [ADD DETAILS: budgeting problem] for [ADD DETAILS: users].”
- Card: “React and Firebase budgeting project. [ADD DETAILS: personally implemented feature], [ADD DETAILS: data challenge] and [ADD DETAILS: demonstrated outcome].”
- Case-study introduction: “The project addresses [ADD DETAILS: user budgeting difficulty]. My role was [ADD DETAILS: ownership and team context]. I used React and Firebase to [ADD DETAILS: technical approach], resolving [ADD DETAILS: challenge] through [ADD DETAILS: decision and trade-off]. Evidence: [ADD DETAILS: repository/demo].”
- Conditional CV bullets: “Implemented [ADD DETAILS: transaction workflow] in React for [ADD DETAILS: users].”; “Designed [ADD DETAILS: Firebase data model and access rules] to support [ADD DETAILS: requirement].”; “Verified [ADD DETAILS: behaviour] using [ADD DETAILS: tests], with [ADD METRIC: measured result].”
- Missing: real problem, user definition, dates, solo/team role, screenshot, source link, Firebase services/security rules, input validation, tests, deployment, actual result.

### Mendix Business App

- One sentence: “Mendix Business App explores [ADD DETAILS: business workflow] for [ADD DETAILS: users] using Mendix and [ADD DETAILS: confirmed REST integration].”
- Card: “Mendix application for [ADD DETAILS: workflow]. My contribution: [ADD DETAILS: domain model, pages or microflows]. Technical focus: [ADD DETAILS: integration challenge and result].”
- Case-study introduction: “The application addresses [ADD DETAILS: business process]. I personally implemented [ADD DETAILS: scope] using Mendix, with [ADD DETAILS: integration]. The key challenge was [ADD DETAILS: permissions, data mapping or failure handling actually encountered]. I chose [ADD DETAILS: solution] because [ADD DETAILS: trade-off].”
- Conditional CV bullets: “Modelled [ADD DETAILS: entities and relationships] for [ADD DETAILS: workflow].”; “Implemented [ADD DETAILS: microflows and role permissions] for [ADD DETAILS: users].”; “Integrated [ADD DETAILS: API] with [ADD DETAILS: validation/error handling], demonstrated by [ADD DETAILS: test evidence].”
- Missing: business context, app access, domain model, actual contribution, Mendix version, integration contract, access model, tests, screenshots/video, deployment and outcome.

## Reusable case study

1. **Project overview:** [ADD DETAILS: name, dates, course/personal/team context, verified technologies, source/demo/video].
2. **The problem:** [ADD DETAILS: specific user, existing workflow, pain point and evidence].
3. **My role and responsibilities:** [ADD DETAILS: personal scope, collaborators and what others implemented].
4. **Technical approach:** [ADD DETAILS: UI, data model, API flow, deployment and rationale]. Include a small architecture diagram drawn from the actual implementation.
5. **Key features:** [ADD DETAILS: three implemented workflows; link screenshots to each].
6. **Most difficult challenge:** [ADD DETAILS: reproducible symptom, constraint and why obvious approaches failed].
7. **Solution and trade-offs:** [ADD DETAILS: chosen solution, alternative considered, cost and remaining limitation].
8. **Results:** [ADD DETAILS: what demonstrably works, who evaluated it]. [ADD METRIC: task completion, tested cases or measured timing with method]. If nobody uses it, say “personal prototype” rather than implying adoption.
9. **What I learned:** [ADD DETAILS: specific technical understanding connected to a decision].
10. **What I would improve next:** [ADD DETAILS: test coverage, access controls or user feedback, ranked by need].

25-word card template (placeholders count as one token): “A [PROJECT] application for [USERS], addressing [PROBLEM] using [STACK]. I implemented [CONTRIBUTION], resolved [CHALLENGE], and demonstrated [OUTCOME] through [EVIDENCE], with [NEXT-STEP] identified for future development work.”

60-word summary template: “Built [PROJECT] for [USERS] to address [PROBLEM]. My responsibility was [SCOPE], using [STACK] for [APPROACH]. The main challenge was [CHALLENGE]; I chose [SOLUTION] over [ALTERNATIVE] because [REASON]. The result was [OUTCOME], supported by [EVIDENCE]. This work strengthened my understanding of [LEARNING]. Next, I would improve [LIMITATION] and measure [METRIC] through [METHOD] before expanding the application to support additional real user needs.” Replace placeholders only with verified facts; use [ADD DETAILS] and [ADD METRIC] while drafting.

CV bullet patterns: “Implemented [ADD DETAILS: workflow] using [ADD DETAILS: stack] for [ADD DETAILS: user need].”; “Resolved [ADD DETAILS: reproducible issue] by [ADD DETAILS: decision], validated with [ADD DETAILS: evidence].”; “Deployed [ADD DETAILS: application] with [ADD DETAILS: data/access/test approach], achieving [ADD METRIC].”

README introduction: “# [ADD DETAILS: project name]\n\nA [ADD DETAILS: prototype/course/team] application for [ADD DETAILS: users and problem]. I implemented [ADD DETAILS: personal scope] with [ADD DETAILS: verified stack]. See [ADD DETAILS: demo] and the architecture, setup instructions, tests and known limitations below.” Do not publish installation steps until tested on a clean checkout.

## Accessibility and UX audit (WCAG 2.2 AA target)

No complete conformance claim is made. These are source findings plus manual checks still required on a deployed or locally rendered site. No critical accessibility blocker was established from source alone.

| Priority | Element / requirement | Barrier and corrected code or CSS | Manual verification |
|---|---|---|---|
| High | Contact fields; 1.3.1, 3.3.2, 1.3.5 | Placeholder-only labels vanish. Implemented `<label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" required />`. | Tab into each field; screen reader should announce its label, required state and input purpose. |
| High | Fixed footer/header; 2.4.11 | Fixed overlays can obscure focused content. Both now use normal flow. | At 200% zoom, Tab through the form including the send button; no focused item should be covered. |
| High | Project and profile images; 1.1.1 | Missing alternative text. Portrait now has a name; project preview has contextual alt; badge graphics are decorative alongside visible titles. | Disable images and review meaningful text; inspect preview-specific alt for any uploaded screenshot. |
| High | Link names; 2.4.4 | Repeated “Live”/“GitHub” lacks context outside a card. Added project-specific accessible names and removed placeholder links. | Screen-reader links list should identify project and destination. |
| Medium | Main navigation/landmarks; 2.4.1, 2.4.3 | Repeated navigation precedes all content. Added skip link and focusable `<main id="main-content" tabIndex={-1}>`; route changes reset focus to main. | First Tab reveals skip link; activate and verify next Tab enters content. Navigate routes and verify announcement. |
| Medium | Forms status; 4.1.3, 3.3.1 | No submission feedback. Implemented polite success/sending context and `role="alert"` on failure. | Simulate offline submission; hear error and retain input; retry online after deployment. |
| Medium | Focus visibility; 2.4.7, 1.4.11 | No deliberate focus treatment. Added `:focus-visible {outline:3px solid #fbbf24;outline-offset:5px}`. | Tab through every route and admin panel; ensure no clipping. |
| Medium | Mobile layout; 1.4.10, 1.4.4 | Header margin and fixed elements risk overflow. Grid collapses at 800px; CTA buttons expand at 400px. | Test 320, 375, 768 and 1280 CSS pixels plus 400% zoom; no two-dimensional scrolling. |
| Medium | Motion; 2.3.3 (AAA enhancement), 2.2.2 when applicable | Smooth scrolling ignored system preference. `@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}`. No automatic content animation added. | Enable reduced motion in OS/devtools and activate skip link. |
| Medium | Admin managers' labels; 1.3.1, 3.3.2 | Existing sibling labels lack `htmlFor`/input IDs in manager components. | Follow-up: bind unique IDs such as `project-${id}-title`; click label to focus control, inspect accessible name. |
| Low | Certification hierarchy; 1.3.1 | Degree h3 preceded the next h2; badge titles used h4. Corrected to degree h2 and certification h3. | Review headings list for ordered hierarchy. |

Design tokens: body 16px with 1.75 line-height; long paragraphs limited to about 70 characters; headings scale with `clamp`; sections use 80px vertical spacing desktop and 48px mobile. Primary white-on-#1d4ed8 text has approximately 6.7:1 contrast; #b4c1d3 body text against #020617 exceeds 10:1. Verify all states and retained admin Tailwind classes with a contrast tool: AA needs 4.5:1 normal text, 3:1 large text, and 3:1 relevant control boundaries. Text links use blue plus underlining on hover, active navigation stays underlined. Controls target 44–48px height (above WCAG 2.5.8's 24px minimum, subject to exceptions). Retained admin icon buttons and links still need a rendered target-size audit.

## Production code review and remaining backend work

Implemented corrections are in `Hero.jsx`, `About.jsx`, `Navbar.jsx`, `Footer.jsx`, `Projects.jsx`, `ProjectCard.jsx`, `Skills.jsx`, `Contact.jsx`, `TimelineItem.jsx`, `App.jsx`, `index.css` and `index.html`. Existing admin routes, API fetches, content managers and authentication remain. Broken or placeholder project actions no longer appear as working links. Real project content is still fetched from the existing endpoint. GET failures in Projects are visible; there is no invented success fallback.

Recommended component structure: keep route-level composition in App; extract HomePage and shared PageLayout as the site grows; keep ProjectCard presentational; centralize public collection fetching/validation in a hook; add a shared FormField with label/id/error associations; keep admin editors separate from public pages. No new dependency or speculative memoization is necessary. Add a route error boundary for malformed remote content. Validate external image URLs and record shapes before publishing. `ProjectCard` currently filters action protocols to HTTP(S); for verified GitHub links, additionally check the host.

The high-priority backend authorization finding needs a verified role policy. Proposed server-side guard, to be adapted to the installed Identity user typing and applied to every write and seed handler:

```ts
const user = await getUser()
if (!user) return new Response('Unauthorized', { status: 401 })
const roles = user.app_metadata?.roles
if (!Array.isArray(roles) || !roles.includes('admin')) {
  return new Response('Forbidden', { status: 403 })
}
```

Assign roles only through trusted administrative tooling; do not read permissions from user-editable metadata. Verify existing owner access before enforcing the role. Add request size/schema validation and malformed-JSON 400 responses. Test unauthenticated, authenticated non-admin, and authorized admin requests against every mutating endpoint. Authentication alone does not prove admin authorization. No backend changes or storage migration were made in this frontend/content pass; existing structured collections in Blobs should be migrated to the platform database in a separate verified data migration, preserving current records. Do not overwrite stored collections with demo seed data.

## SEO recommendations and implemented metadata

Implemented title: **Anele Simbela | Web & Mendix Developer | South Africa**.

Implemented description (under 160 characters): “Anele Simbela, Graduate Trainee at Mercedes-Benz South Africa, BSc graduate and UNISA Honours in Computing student. Explore my development work.”

Home uses one h1 (developer proposition), then project/background/skills/contact h2 sections, and project h3 titles. Standalone public routes now have a route h1. Education retains its own h1. Person JSON-LD contains name, public profile URL, stated technologies and South Africa; it does not claim a completed degree or certification. Open Graph has title, description, type, URL, image and image alt. Twitter uses a summary card. Current share image is the real portrait, not an invented project screenshot.

`index.html` contains the corrected HTML, and route title updates are in App. A later prerendering pass should emit route-specific titles/descriptions, canonical URLs and social tags before JavaScript executes. Avoid one homepage canonical applied to every distinct route. Add unique contact/about/project descriptions when prerendering.

Truthful keywords in natural prose: junior software developer South Africa; BSc Computer Science and Physics graduate; React developer; Mendix application development; TypeScript; PostgreSQL; Azure; Docker. Graduate developer opportunities align with your confirmed completed BSc; keep UNISA honours clearly marked as ongoing. Cyber security and technical support are interests until substantiated with work samples. Do not claim seniority, incident response experience, Azure certification ownership or production deployment expertise based on logos.

Sitemap and robots files now list the public routes and reference the production domain; admin and form skeleton are excluded from crawling. Robots rules are not access control. After deployment, check that both files return XML/plain text rather than the SPA, submit the sitemap to Search Console, confirm indexing of public routes, and verify share previews. Internal links retain descriptive navigation and project/contact routes. Add case-study links from cards once those pages and evidence exist. No fictitious GitHub account URL was inferred from the repository owner.

## Role evidence matrix (not an advert comparison)

No job advertisement was supplied; no employer-specific requirements can be classified. This matrix evaluates the named target areas against repository evidence only.

| Area | Classification | Evidence and gap |
|---|---|---|
| React / JavaScript frontend | Partly demonstrated | Working component structure, routing and API fetching; requires demo, tests and contribution narrative. |
| TypeScript | Mentioned but not proven | Stated background; frontend is JSX; backend `.mts` files offer limited evidence. |
| Mendix | Mentioned but not proven | Named app and certification; missing domain model/microflows and verified app access. |
| Qualification | Partly demonstrated | User confirmed BSc graduation in May 2023 and ongoing Honours in Computing at UNISA; no honours dates supplied. |
| Communication | Partly demonstrated | Improved written portfolio; no support documentation or case-study reasoning yet. |
| Deployment | Partly demonstrated | Netlify project/configuration exists; personal deployment ownership and Azure/Docker deployments unverified. |
| Database modelling | Mentioned but not proven | PostgreSQL stated; no relational schema/query evidence in reviewed app. |
| Testing | Missing | No app test scripts or test suites found in the inspected file list. Lint is not a functional test. |
| Version control | Partly demonstrated | Repository exists; individual Git workflow/PR history not inspected. |
| Cyber security | Mentioned but not proven | Security+ title/logo; no verification, threat model, security tests or incident evidence. |
| Technical support | Missing | No diagnostic log, troubleshooting guide, ticket or customer support example. |

Emphasize the React portfolio itself and whichever of the two named projects you can substantiate. Rewrite both project descriptions using the drafts above. Add real screenshots, source/demo links, tests and contribution explanations before claiming delivery. For Mendix roles, show a domain model and one annotated microflow; for support roles, show a reproducible troubleshooting guide. A realistic gap-closing project is a small support-request tracker with React/TypeScript, PostgreSQL, role-based access, ticket status/history, validation, tests, deployment documentation and a brief threat model. Build it incrementally; do not describe it as an existing project. Do not claim pentesting, production incident response, commercial full-stack experience or measured user impact without evidence.

## Prioritized action plan

**Today:** review the implemented hero and education and employment corrections; test navigation/contact on a phone; verify credential ownership; replace stale admin records and placeholder URLs only with real evidence. **This week:** complete one React and one Mendix case study, add a verified CV, fix admin authorization/validation and run accessibility checks. **Longer term:** add purposeful tests, server-rendered/prerendered metadata, measured performance evidence and a small support/security work sample.

Assumption: two hours per day, one developer. Security findings take precedence over optional appearance changes. If admin access is publicly available to non-owner accounts, resolve the authorization gap before other publication work.

| Day | Task | Expected result | Priority | Time | Dependency | Definition of done |
|---|---|---|---|---|---|---|
| 1 | Review implemented identity, degree status and target-role copy | Accurate recruiter introduction including current Graduate Trainee role | Essential / High | 2h | User confirmation of facts | Hero and education agree with current CV; no unsupported claims |
| 2 | Verify admin permissions; implement/test trusted role policy | Content writes restricted | Essential / High | 2h | Owner access/role policy | Anonymous and non-admin writes denied; owner retains access |
| 3 | Validate API payloads and error states | Invalid data rejected predictably | Essential / High | 2h | Day 2 | Bad JSON, shapes and URLs rejected; valid edit saved |
| 4 | Gather Budget Tracker evidence | Clear ownership and working links | Essential / High | 2h | Actual repository/demo | User, scope, challenge, screenshot and result documented |
| 5 | Write first case study and README | Assessable React evidence | Essential / High | 2h | Day 4 | Case study follows ten sections with no invented outcomes |
| 6 | Gather Mendix workflow/model evidence | Assessable low-code evidence | Essential / High | 2h | Access to actual app | Domain model, microflow and personal scope documented |
| 7 | Publish second case study and update project records | Recruiter can inspect two projects | Essential / High | 2h | Days 5–6 | Real links work; no placeholder screenshots or seed claims |
| 8 | Verify CV and certification records | Trustworthy qualification evidence | Essential / High | 2h | Credential/CV source | Accessible PDF and verified dates/links; unearned claims removed |
| 9 | Keyboard, zoom, labels and screen-reader pass | Accessible main journeys | Essential / High | 2h | Current UI | All public routes usable without pointer; admin labels bound |
| 10 | Phone/reflow and form submission check | Mobile/contact confidence | Essential / High | 2h | Deployed preview | 320px layout works; genuine submission recorded; failure clear |
| 11 | Add one meaningful project workflow test | Executable credibility | Essential / Medium | 2h | Real project behaviour | Test catches a realistic validation or authorization regression |
| 12 | Check search/share output and transfer sizes | Baseline SEO/performance | Essential / Medium | 2h | Public deployment | Sitemap loads; metadata verified; performance result recorded |
| 13 | Document one support diagnostic or security review | Evidence for additional interests | Essential / Medium | 2h | A reproducible issue | Symptom, diagnosis, fix, verification and limitations documented |
| 14 | Recruiter rehearsal and final checklist | Launch-ready evidence | Essential / High | 1.5h | Days 1–13 | Another reader identifies role/stack/projects/contact in 10 seconds |
| 14 | Optional spacing/type refinements | Visual polish | Optional / Low | 0.5h | Essential checks pass | No usability regression; no added animation dependency |

If evidence collection exceeds the timebox, finish one strong project rather than inventing a second. Prerendering, database migration and a new support tracker are longer-term work, not hidden inside this 28-hour plan.

## Final pre-launch checklist

- [ ] Confirm spelling, education and employment status, location, stack and employment wording with CV.
- [ ] Remove or verify every credential claim and add issuer/date evidence.
- [ ] Replace stored seed projects with real evidence; check source/demo URLs and screenshots.
- [ ] Include personal scope, trade-off and observed result for each featured project.
- [ ] Publish accessible CV or keep the honest request option.
- [ ] Test keyboard, visible focus, main landmark, route headings and meaningful link names.
- [ ] Test 320px width, 200% text zoom, 400% page zoom, touch controls and reduced motion.
- [ ] Submit a genuine contact message on the deployed preview; verify receipt and error retry.
- [ ] Verify administrator authorization and payload validation on every write endpoint.
- [ ] Check API empty/error states and malformed-data handling; no console failures.
- [ ] Confirm robots/sitemap delivery, social previews and route metadata limitations.
- [ ] Run functional/accessibility checks in a rendered browser and document results.
- [x] Run JavaScript lint successfully after changes.

Validation performed: `npm run lint` passed after excluding generated `.vite`/`.netlify` files and removing unused admin imports. Form enablement script completed successfully. Builds were left to the platform validation workflow. Local HTTP smoke checks passed for home, projects, the static form, robots, sitemap, and Vite transforms of App and Contact. These checks verified delivery/compilation, not visual rendering or persistence. No live contact submission, browser layout review, screen-reader session or credential verification was performed; those items remain explicit checks above.


## Projects bucket update

The Projects tab in `/admin` now provides a complete collection editor with project descriptions, technologies, screenshot URLs, GitHub repositories and live-demo links. Project writes now validate payloads and require the confirmed portfolio-owner account or an admin role. This resolves those findings for `/api/projects`; the other write endpoints still require their own review. Projects are saved to Netlify Database, with existing Blob records read until the first successful database save. Saving an empty collection intentionally keeps it empty. Database migrations apply through the deployment workflow.
