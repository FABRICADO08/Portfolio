# Firebase portfolio content manager

The portfolio includes a private `/admin` area for creating, editing and deleting projects and certifications. Public pages use the source-controlled portfolio content until the initial import is published, then read the live Firestore collections.

## Firebase services

- **Authentication:** Google sign-in. Only the configured owner email is authorised.
- **Cloud Firestore:** Stores `projects`, `certifications` and `settings/content`.
- **Cloud Storage:** Optional storage for uploaded project and certification images.
- **Performance Monitoring:** Initialised in supported browser environments over HTTPS to collect page-load and network performance data.

## 1. Firebase web app configuration

In Firebase Console, open project **portfolio-27b98** and register or select the Web app. Copy its Firebase web configuration.

In GitHub, open **Settings → Secrets and variables → Actions → Secrets** and add these repository secrets:

| Secret | Value |
| --- | --- |
| `VITE_FIREBASE_API_KEY` | Firebase web app API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Usually `portfolio-27b98.firebaseapp.com` |
| `VITE_FIREBASE_PROJECT_ID` | `portfolio-27b98` |
| `VITE_FIREBASE_APP_ID` | Firebase web app appId |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase Storage bucket name, when Storage is configured |
| `VITE_ADMIN_EMAIL` | Authorised portfolio owner email |

The deployment workflow currently requires all seven values to be present. The Firebase web configuration is used by the browser and is not a privileged credential, even though the workflow reads it from GitHub Secrets. Never put service-account JSON, private keys or other privileged credentials in a `VITE_*` variable.

For local development, create `my-portfolio/.env.local` with the same `VITE_*` names and values. Do not commit this file.

## 2. Configure deployment credentials

Add the following GitHub Actions repository secret:

- `FIREBASE_SERVICE_ACCOUNT` — the full Firebase deployment service-account JSON for the `portfolio-27b98` project.

The Firebase Hosting workflow builds the application and deploys `my-portfolio/dist` to the live Hosting channel when relevant files change on `main`. The Hosting workflow does not deploy Firestore or Storage security rules.

## 3. Enable Google Authentication

In **Firebase Console → Build → Authentication → Sign-in method**, enable **Google**. Add the Firebase Hosting domains to **Authentication → Settings → Authorized domains**:

- `portfolio-27b98.firebaseapp.com`
- `portfolio-27b98.web.app`

The admin page uses Google sign-in. Google may reuse the browser's active account or display an account chooser when multiple accounts are signed in. Only the email configured by `VITE_ADMIN_EMAIL` is authorised by the admin UI. The email must also match the owner email in `firestore.rules` and `storage.rules`.

## 4. Create Firestore and publish its rules

In **Firebase Console → Build → Firestore Database**, create the database. Publish the rules from the repository's `firestore.rules` file.

The supplied rules allow public reads of portfolio content and restrict writes to the authorised owner. If the owner email changes, update the email in both security-rules files and the `VITE_ADMIN_EMAIL` configuration.

## 5. Optional image uploads

Cloud Storage for Firebase requires the Blaze pay-as-you-go plan under Firebase's current billing requirements. If you enable it:

1. Link a billing account and create the default Storage bucket.
2. Set `VITE_FIREBASE_STORAGE_BUCKET` to the bucket name.
3. Publish the rules from `storage.rules`.

Uploads are limited by the application to image files up to 5 MB, and the rules restrict writes and deletes to the authorised owner. If Storage is not configured, the admin can still use externally hosted image URLs.

## 6. Deploy and initialise portfolio content

1. Add the seven `VITE_*` repository secrets and `FIREBASE_SERVICE_ACCOUNT`.
2. Enable Google Authentication and create Firestore.
3. Publish `firestore.rules` and, if using uploads, `storage.rules`.
4. Push to `main` or manually run **Deploy portfolio to Firebase Hosting** in GitHub Actions.
5. Open [https://portfolio-27b98.web.app/admin](https://portfolio-27b98.web.app/admin).
6. Sign in with the authorised Google account.
7. Select **Publish existing content** once. This imports the existing source-controlled projects and certifications into Firestore only when their respective collections are empty.
8. Manage projects and certifications from the admin page. Firestore listeners update the public portfolio when content changes.

## Data model

- `projects/{id}`: title, description, tech (array), image, imagePath, github, live, card.tags (array), featured, order.
- `certifications/{id}`: title, label, code, description, image, imagePath, credentialUrl, issuedAt (YYYY-MM-DD), expiryDate (YYYY-MM-DD or empty), noExpiry, featured, order.
- `settings/content`: `initialized: true` marks Firestore as the source of truth, including when a collection is intentionally empty.

## Admin content fields

- Project technologies and tags are selected through multi-select dropdowns and stored as arrays.
- Certification issue and expiry dates use calendar inputs.
- Select **This certification does not expire** when no expiry date applies. Public cards show **No Expiry** for credentials without an expiry date; credentials with an expiry date are shown as **Expired**, **Expiring soon** (within 30 days), or **Active**.
- Certification image URLs are optional. Existing image data is retained when a record is edited without selecting a replacement image.

## Performance Monitoring

The Firebase Performance Monitoring compat SDK is loaded by `my-portfolio/index.html` and initialised alongside the existing Firebase app in `src/firebase/firebase.js`. It collects supported automatic performance traces in supported browsers over HTTPS. Data can take time to appear in **Firebase Console → Performance Monitoring**. Monitoring does not replace Firebase Analytics.

## Security notes

- The admin route is intentionally not linked in public navigation; open `/admin` directly.
- Hiding or marking the route `noindex` is not access control. Firebase Authentication and Firestore/Storage security rules enforce access.
- Public reads are expected for portfolio content; only the authorised owner should be able to write.
- Never commit `.env.local`, service-account JSON, private keys, access tokens or confidential employer information.
