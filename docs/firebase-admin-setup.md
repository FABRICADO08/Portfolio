# Firebase portfolio content manager

The portfolio now supports a private `/admin` area for creating, editing and deleting projects and certifications. Public pages read live Firestore data and continue to show the current source-controlled content until the initial import is published.

## Firebase services

- **Authentication:** Email/password sign-in. Only the owner email is authorised.
- **Cloud Firestore:** Stores `projects`, `certifications` and `settings/content`.
- **Cloud Storage:** Stores uploaded project and certification images.

## 1. Register the Firebase web app

In Firebase Console, open project **portfolio-27b98** and add a Web app (or use the existing web app). Copy its Firebase web configuration.

In GitHub, open **Settings → Secrets and variables → Actions → Variables** and add:

| Variable | Value |
| --- | --- |
| `VITE_FIREBASE_API_KEY` | Firebase web app API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Usually `portfolio-27b98.firebaseapp.com` |
| `VITE_FIREBASE_PROJECT_ID` | `portfolio-27b98` |
| `VITE_FIREBASE_APP_ID` | Firebase web app appId |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID (if shown) |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase Storage bucket name (after creating the bucket) |
| `VITE_ADMIN_EMAIL` | `anelefabricado@gmail.com` |

These are public client configuration values, not service-account credentials. Never place a service-account JSON or private key in a `VITE_*` variable.

For local development, copy `.env.example` to `.env.local` and fill in the same values.

## 2. Enable Authentication

In **Build → Authentication → Sign-in method**, enable **Email/Password**. Under **Users**, add the owner account using `anelefabricado@gmail.com` and set a strong password. Do not add a public sign-up page.

## 3. Create Firestore

In **Build → Firestore Database**, create the database in production mode. Choose a region close to your audience (for example, a South African region if available and appropriate).

Publish the rules from the repository's `firestore.rules` file. The rules allow public reads and restrict all writes to the owner email.

## 4. Enable image uploads (billing requirement)

**Important:** Cloud Storage for Firebase requires the Blaze pay-as-you-go plan as of 3 February 2026. Link a billing account before creating or using the Storage bucket. The Blaze plan includes no-cost usage quotas, but usage above those quotas can be billed.

After upgrading, open **Build → Storage**, create the default bucket, and copy its bucket name into `VITE_FIREBASE_STORAGE_BUCKET`. Publish the rules from `storage.rules`. Uploads are limited to image files smaller than 5 MB and only the owner can upload or delete them.

If you remain on Spark, the admin still supports image URLs; direct file uploads will not work.

## 5. Deploy and initialise content

1. Add the GitHub Actions variables above.
2. Merge the feature pull request and let the existing Firebase Hosting workflow deploy.
3. Open `https://portfolio-27b98.web.app/admin`.
4. Sign in with the owner account.
5. Select **Publish existing content** once. This imports the current projects and certifications into Firestore without overwriting existing documents.
6. Add, edit or delete content. Changes appear on the public site automatically.

The Firestore and Storage rules are included in this repository. Publish them in the Firebase Console (or deploy them with the Firebase CLI) before using the admin panel. Hosting deployment alone does not publish security rules.

## Data model

- `projects/{id}`: title, description, tech, image, imagePath, github, live, card, featured, order.
- `certifications/{id}`: title, label, code, description, image, imagePath, credentialUrl, issuedAt, featured, order.
- `settings/content`: `initialized: true` marks the Firestore collections as the source of truth, including when a collection is intentionally empty.

The website never exposes an account creation route. Firestore and Storage rules enforce owner-only writes independently of the UI.

The admin route is intentionally omitted from the public navigation; open the `/admin` path directly when you need to manage content.


## Google admin sign-in

Enable the **Google** provider in Firebase Console → Authentication → Sign-in method. Ensure `portfolio-27b98.firebaseapp.com` and `portfolio-27b98.web.app` are listed under Authentication → Settings → Authorized domains. The admin page uses Google sign-in; Google may reuse the browser's active account or offer an account chooser when multiple accounts are signed in. Only `anelefabricado@gmail.com` is authorised to manage the portfolio.
