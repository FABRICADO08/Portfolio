# Anele Simbela | Software Developer Portfolio

A responsive, frontend-only professional portfolio built with React 19 and Vite. The site presents selected software projects, technical capabilities, professional experience, education and contact information.

- **Production website:** https://portfolio-27b98.web.app/
- **Source repository:** https://github.com/FABRICADO08/Portfolio
- **Technology stack:** React, JavaScript, React Router, Vite, CSS, Tailwind CSS 4 and Lucide React
- **Hosting and delivery:** Firebase Hosting with GitHub Actions

## Application features

- Professional profile and selected project portfolio
- Dedicated About, Projects, Skills, Experience and Contact routes
- Source-controlled content with no runtime database dependency
- Responsive layouts and keyboard-accessible navigation
- Direct email and LinkedIn contact options
- Firebase Hosting rewrite for client-side route handling
- Automated linting and production-build checks

## Architecture

This repository contains a static React frontend. It intentionally does not include a custom backend, database, authentication service or administration dashboard. Portfolio content is maintained in source control and published through the deployment workflow.

Never commit credentials, private keys, access tokens or confidential employer information. Deployment credentials must be stored as protected GitHub Actions secrets.

## Local development

**Requirements:** Node.js 22 and npm.

```bash
cd my-portfolio
npm ci
npm run dev
```

## Quality assurance

Run the following checks before submitting changes:

```bash
npm run lint
npm run build
npm run preview
```

GitHub Actions runs ESLint and the Vite production build for relevant pull requests and pushes to the main branch.

## Content management

Update `src/data/portfolioData.js` to maintain:

- Project titles, summaries, technology stacks and verified links
- Technical skills
- Certification titles, descriptions and image paths

Place public assets in `public/` and reference them with root-relative paths, such as `/img/profile.png`. Publish only accurate credentials and approved project information. Omit confidential details relating to employer systems, internal processes and organisation data.

## Repository structure

```text
Portfolio/
├── .github/
│   └── workflows/
│       ├── portfolio-checks.yml
│       └── deploy-firebase.yml
├── firebase.json
└── my-portfolio/
    ├── public/
    │   ├── img/
    │   ├── robots.txt
    │   └── sitemap.xml
    ├── src/
    │   ├── app/
    │   ├── components/
    │   ├── data/
    │   └── styles/
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## Maintainer

**Anele Simbela** | Software Developer

- **GitHub:** https://github.com/FABRICADO08
- **LinkedIn:** https://www.linkedin.com/in/anele-simbela-2202b9349/
