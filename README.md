# Anele Simbela — Software Developer Portfolio

[![Portfolio](https://img.shields.io/badge/Live%20Portfolio-portfolio--27b98.web.app-0b7285?style=flat)](https://portfolio-27b98.web.app/)
[![React](https://img.shields.io/badge/React-19-149eca?style=flat&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?style=flat&logo=vite&logoColor=white)](https://vite.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting%20%7C%20Firestore%20%7C%20Performance-ffca28?style=flat&logo=firebase&logoColor=black)](https://firebase.google.com/)

A responsive personal portfolio presenting Anele Simbela's software development work, technical skills, certifications, professional experience and education.

- **Live website:** https://portfolio-27b98.web.app/
- **Repository:** https://github.com/FABRICADO08/Portfolio
- **Application directory:** `my-portfolio/`

## Features

- Responsive React single-page application with dedicated Home, About, Projects, Skills, Certifications, Experience & Education, and Contact pages.
- Portfolio projects and certifications displayed from Firestore after the initial content import, with source-controlled fallback content.
- Private `/admin` content manager with Google sign-in, authorised-owner checks, and create, edit and delete operations for projects and certifications.
- Multi-select technology and project-tag fields; certification issue and expiry dates, no-expiry option, and optional images.
- Optional image uploads through Firebase Storage, or image URLs.
- CV generated from the portfolio's current data and downloaded by the visitor; no generated CV file is committed to the repository.
- Firebase Performance Monitoring initialised in supported browser environments to collect website performance data.
- Search-engine metadata, social sharing metadata, accessible navigation and client-side route handling.

## Technology

| Area | Technology |
| --- | --- |
| UI | React 19, JavaScript, React Router |
| Build | Vite 7 |
| Styling | CSS, Tailwind CSS 4 |
| Icons | Lucide React |
| Hosting and deployment | Firebase Hosting, GitHub Actions |
| Authentication | Firebase Authentication (Google provider) |
| Content data | Cloud Firestore |
| Optional image storage | Cloud Storage for Firebase |
| Performance | Firebase Performance Monitoring |

## Requirements

- Node.js 22
- npm
- A Firebase project for the connected admin and content features

## Run locally

```bash
cd my-portfolio
npm ci
npm run dev
```

Create `.env.local` in `my-portfolio/` with the Firebase web-app settings used by the application:

```dotenv
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=portfolio-27b98
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_ADMIN_EMAIL=
```

These are Firebase web-app configuration values and are included in the client build; they are not service-account credentials. Never put a Firebase service-account JSON, private key, or other privileged credential in a `VITE_*` variable. Keep `.env.local` out of source control.

The public portfolio can use its source-controlled content when Firebase is not configured. Firebase-backed admin and live content editing require the Firebase setup described in [docs/firebase-admin-setup.md](docs/firebase-admin-setup.md).

## Quality checks

Run from `my-portfolio/`:

```bash
npm run lint
npm run build
npm run preview
```

GitHub Actions runs lint and production-build checks for pushes to `main` and pull requests targeting `main`. The Firebase Hosting workflow builds and deploys `my-portfolio/dist` when application files or Firebase Hosting configuration change.

## Firebase setup and deployment

1. Configure Google Authentication, Firestore and the required security rules in Firebase project `portfolio-27b98`.
2. Add the Firebase web-app configuration values and authorised admin email as GitHub Actions repository secrets.
3. Add `FIREBASE_SERVICE_ACCOUNT` as a GitHub Actions secret containing the Firebase deployment service-account JSON.
4. Configure the Firebase project and hosting target as described in [docs/firebase-admin-setup.md](docs/firebase-admin-setup.md).
5. Deploy the Firestore and Storage rules from `firestore.rules` and `storage.rules`; the Hosting workflow does not publish these rules.
6. Open `/admin`, sign in with the authorised Google account, and select **Publish existing content** once to import the existing projects and certifications into Firestore.

Firebase Storage image uploads require a configured Storage bucket and billing-enabled Firebase plan. Image URLs can be used instead.

See [Firebase admin setup](docs/firebase-admin-setup.md) for the complete configuration, data model and security details.

## Repository layout

```text
.
├── .github/workflows/       # Quality checks and Firebase Hosting deployment
├── docs/                    # Firebase admin setup guide
├── my-portfolio/
│   ├── public/              # Static images, icons and SEO files
│   └── src/
│       ├── app/             # Application entry point and routes
│       ├── components/      # Portfolio pages and UI components
│       ├── context/         # Shared portfolio data provider
│       ├── data/            # Source-controlled fallback portfolio content
│       ├── firebase/        # Firebase app and service initialisation
│       ├── styles/          # Application styles
│       └── utils/           # CV generation and utilities
├── firebase.json            # Firebase Hosting and rules configuration
├── firestore.rules           # Firestore access rules
└── storage.rules             # Storage access rules
```

## Security and content guidelines

- The admin route is not linked in public navigation and is marked `noindex`; this is not a substitute for Firebase security rules.
- Firestore and Storage rules must enforce owner-only writes. Public portfolio content is readable by visitors.
- Only the configured owner email is authorised by the admin interface and the supplied rules. Keep the email consistent if it is changed.
- Firebase web configuration is client-side configuration, not a secret. Never commit service-account JSON, private keys, access tokens or local environment files.
- Publish only accurate credentials and approved project information. Do not disclose confidential employer systems, internal processes or organisation data.

## Maintainer

**Anele Simbela** — Software Developer

- [LinkedIn](https://www.linkedin.com/in/anele-simbela-2202b9349/)
- [GitHub](https://github.com/FABRICADO08)
- [Portfolio](https://portfolio-27b98.web.app/)
