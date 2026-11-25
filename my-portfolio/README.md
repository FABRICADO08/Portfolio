# Anele Simbela — Portfolio

A static React + Vite portfolio. This is a pure frontend application: it does not use a custom backend, API routes, database, serverless functions, authentication provider or server-side content store.

## Run locally

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Update portfolio content

Edit `src/data/portfolioData.js` to update projects, skills and certifications. Commit and deploy the frontend to publish changes.

There is intentionally no browser-based admin dashboard. A static frontend cannot securely write shared content back to the deployed website. Browser storage would only save changes on one device, so content updates are maintained in source control and published through deployment.

## Deployment

Deploy the `my-portfolio` directory as a static site. The included `netlify.toml` only provides the single-page-app route fallback; it does not configure serverless functions or a database.
