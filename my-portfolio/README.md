# Anele Simbela — Software Developer Portfolio

A responsive, frontend-only portfolio built with React 19 and Vite. It presents selected projects, technical skills, professional experience, education and contact links.

- **Production site:** https://portfolio-27b98.web.app/
- **Source:** https://github.com/FABRICADO08/Portfolio
- **Stack:** React, JavaScript/JSX, React Router, Vite, CSS, Tailwind CSS 4 and Lucide React
- **Hosting:** Firebase Hosting

## Features

- Home page with profile, introduction and selected work
- About, projects, skills, experience and contact routes
- Source-controlled portfolio content
- Responsive layout and keyboard-accessible navigation
- Direct email and LinkedIn contact links
- Firebase Hosting single-page application routing

This repository is intentionally a static frontend. It does not include a custom backend, database, admin dashboard or authentication flow. Update content in source control and redeploy; do not place private credentials in frontend code.

## Run locally

Requirements: Node.js 22 and npm.

```bash
cd my-portfolio
npm ci
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
npm run preview
```

GitHub Actions runs ESLint and the Vite production build for relevant pull requests and pushes to main.

## Update content

Edit src/data/portfolioData.js:

- projects — project names, descriptions, technology lists and verified links
- skills — the skills shown on the portfolio
- certifications — credential titles, descriptions and image paths

Place public images in public/ and reference them with root-relative paths, for example /img/profile.png. Only publish project details, images and credentials that are accurate and approved for public sharing. Keep confidential employer information out of the repository.

After changing content, run the quality checks, commit the changes and merge them into main. The Firebase Hosting workflow builds and deploys the site from main.

## Project structure

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
    │   │   ├── App.jsx
    │   │   └── main.jsx
    │   ├── components/
    │   ├── data/
    │   │   └── portfolioData.js
    │   └── styles/
    │       └── index.css
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## Maintainer

**Anele Simbela** — Software Developer

- GitHub: https://github.com/FABRICADO08
- LinkedIn: https://www.linkedin.com/in/anele-simbela-2202b9349/
