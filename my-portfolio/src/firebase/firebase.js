const firebaseSdk = window.firebase
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID || 'portfolio-27b98'
const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || `${projectId}.firebaseapp.com`,
  projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
}

export const adminEmail = (import.meta.env.VITE_ADMIN_EMAIL || 'anelefabricado@gmail.com').toLowerCase()
export const firebaseReady = Boolean(firebaseSdk && config.apiKey && config.appId && config.projectId)
export const firebaseApp = firebaseReady
  ? (firebaseSdk.apps.length ? firebaseSdk.app() : firebaseSdk.initializeApp(config))
  : null
export const firebaseAuth = firebaseApp ? firebaseApp.auth() : null
export const firebaseDb = firebaseApp ? firebaseApp.firestore() : null
export const firebaseStorage = firebaseApp && config.storageBucket ? firebaseApp.storage() : null
export const firebaseStorageReady = Boolean(firebaseStorage)

if (firebaseDb) {
  firebaseDb.settings({ ignoreUndefinedProperties: true })
}
