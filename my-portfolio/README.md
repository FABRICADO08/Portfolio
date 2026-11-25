# Anele Simbela | Software Developer Portfolio

A modern, responsive portfolio built with **React 19** and **Vite**. It presents my software development experience, selected projects, technical skills, education and certifications in a clean, accessible interface.

**Live portfolio:** https://afsportfolio.netlify.app  
**Source code:** https://github.com/FABRICADO08/Portfolio

---

## Overview

The portfolio is designed as a lightweight, static frontend. It highlights work across enterprise low-code development, web applications and Android development, with an emphasis on practical engineering, clean UI and continuous learning.

### What's included

- **Home** — introduction, professional profile and primary links.
- **About** — background, development interests and professional focus.
- **Projects** — selected work, technologies and relevant project links.
- **Skills** — grouped technical capabilities and tools.
- **Experience & education** — professional and academic journey.
- **Certifications** — professional certifications and credentials.
- **Contact** — direct contact options and external profile links.

### Technology

| Area | Technologies |
|---|---|
| Frontend | React 19, JavaScript, React Router |
| Build tooling | Vite 7 |
| Styling | CSS, Tailwind CSS 4 |
| Icons | Lucide React |
| Quality checks | ESLint, GitHub Actions |
| Hosting | Static-site hosting (Netlify supported) |

---

## Run locally

### Requirements

- Node.js 22 (the version used by the repository's CI workflow)
- npm

### Setup

From the portfolio application directory:

```bash
cd my-portfolio
npm ci
npm run dev
```

Vite will print the local development URL in the terminal.

### Available commands

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

Before publishing changes, run:

```bash
npm run lint
npm run build
```

---

## Update portfolio content

The portfolio uses source-controlled data rather than a database or admin dashboard.

Most project, skill and certification content is maintained in:

```text
src/data/portfolioData.js
```

Update the relevant arrays:

- `projects` — project title, description, technologies and links.
- `skills` — skills displayed in the portfolio.
- `certifications` — certification title, description and image path.

Place images and other static assets in the `public/` directory. Reference public assets from the application using root-relative paths, for example `/img/profile.png`.

After editing, run the lint and build commands, commit the changes and deploy the updated static site.

> **Why there is no admin dashboard:** this project intentionally has no custom backend, database, authentication service or content-management API. A browser-only editor cannot securely publish shared content to the live website; browser storage would only affect the current browser. Keeping content in source control makes updates reviewable and deployable.

---

## Deployment

The application can be deployed to any static hosting provider that supports a Vite build.

### Netlify

Configure the site with:

| Setting | Value |
|---|---|
| Base directory | `my-portfolio` |
| Build command | `npm run build` |
| Publish directory | `dist` |

The `netlify.toml` file includes the single-page application fallback so client-side routes resolve to `index.html`.

Connect the GitHub repository and configure deployments from `main` to publish changes automatically. Confirm the deployment status in the hosting provider after each update.

### Other static hosts

Build the application with `npm run build` and publish the generated `my-portfolio/dist` directory. Configure the host to serve `index.html` for client-side routes.

---

## Continuous integration

GitHub Actions runs the portfolio build workflow when relevant files are changed in a pull request targeting `main` or pushed to `main`.

The workflow:

1. Checks out the repository.
2. Sets up Node.js 22.
3. Installs dependencies with `npm ci`.
4. Runs the Vite production build.

Workflow definition: `.github/workflows/portfolio-checks.yml`.

---

## Project structure

```text
Portfolio/
├── .github/
│   └── workflows/
│       └── portfolio-checks.yml
└── my-portfolio/
    ├── public/
    │   └── img/
    ├── src/
    │   ├── components/
    │   ├── data/
    │   │   └── portfolioData.js
    │   ├── pages/
    │   ├── App.jsx
    │   └── index.css
    ├── index.html
    ├── netlify.toml
    ├── package.json
    └── vite.config.js
```

---

## Notes

- This repository contains the public portfolio frontend; confidential employer or internal project information is intentionally excluded.
- Do not commit API keys, passwords, tokens or other secrets. A static frontend cannot keep secrets private.
- Keep project descriptions, links and images accurate and ensure you have permission to publish any third-party material.

---

## Maintainer

**Anele Simbela**  
Software Developer | Mendix | React | Cloud & Application Development

- GitHub: https://github.com/FABRICADO08
- LinkedIn: https://www.linkedin.com/in/anele-simbela-2202b9349/
