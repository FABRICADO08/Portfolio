# Anele Simbela | Software Developer Portfolio

This directory contains the React 19 + Vite application deployed to [portfolio-27b98.web.app](https://portfolio-27b98.web.app/).

For repository overview, features, local setup, quality checks, Firebase configuration, deployment, architecture and security guidance, see the [root README](../README.md).

## Quick start

Requirements: Node.js 22 and npm.

```bash
npm ci
npm run dev
```

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Application source

- `src/app/` — React application entry point and routes.
- `src/components/` — public pages, reusable components and admin content manager.
- `src/context/` — shared Firestore/source-content data provider.
- `src/data/portfolioData.js` — source-controlled fallback projects, certifications, skills, experience and profile content.
- `src/firebase/` — Firebase app, Authentication, Firestore, Storage and Performance Monitoring initialisation.
- `src/utils/generateCV.js` — generates a downloadable CV from current portfolio data.
- `public/` — static images, icons and search-engine files.

## Firebase-backed content

The private `/admin` page uses Google Authentication and supports managing projects and certifications in Firestore. Public pages switch to Firestore content after the one-time **Publish existing content** action has initialised the content collections. Until then, the source-controlled data is used.

Read [the Firebase admin setup guide](../docs/firebase-admin-setup.md) before configuring or using the admin page. Firebase security rules in the repository must be published separately from Hosting.
