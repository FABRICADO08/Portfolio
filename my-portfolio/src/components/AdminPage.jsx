import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, Check, CloudUpload, FileImage, LogOut, Pencil, Plus, Save, ShieldCheck, Trash2, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { certifications as staticCertifications, projects as staticProjects } from '../data/portfolioData'
import { adminEmail, firebaseAuth, firebaseDb, firebaseReady, firebaseStorage, firebaseStorageReady } from '../firebase/firebase'
import { usePortfolioData } from '../context/PortfolioDataContext'
import '../styles/admin.css'

const blankProject = () => ({ title: '', description: '', tech: '', github: '', live: '', image: '', summary: '', tags: '', featured: true, art: 'code' })
const blankCertification = () => ({ title: '', label: '', code: '', description: '', image: '', credentialUrl: '', issuedAt: '', featured: true })
const slugify = (value) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'item'

function AdminLogin() {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  async function signInWithGoogle() {
    setBusy(true)
    setError('')
    try {
      const provider = new window.firebase.auth.GoogleAuthProvider()
      // Let Google reuse the browser's active account when possible, and show
      // its account chooser when the user has multiple signed-in accounts.
      await firebaseAuth.signInWithPopup(provider)
    } catch (err) {
      if (err.code === 'auth/popup-closed-by-user') {
        setError('The Google sign-in window was closed before authentication finished.')
      } else if (err.code === 'auth/popup-blocked') {
        setError('Your browser blocked the Google sign-in window. Allow pop-ups for this site and try again.')
      } else if (err.code === 'auth/operation-not-allowed') {
        setError('Google sign-in is not enabled yet. Enable Google under Firebase Authentication → Sign-in method.')
      } else {
        setError(err.message || 'Google sign-in could not be completed.')
      }
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="admin-login-wrap">
      <div className="admin-login">
        <span className="admin-icon"><ShieldCheck size={26} /></span>
        <p className="admin-eyebrow">PORTFOLIO CONTROL CENTRE</p>
        <h1>Welcome back</h1>
        <p className="admin-muted">Continue with the Google account already signed in to this browser.</p>
        {error && <p className="admin-error" role="alert">{error}</p>}
        <button className="button primary admin-submit" type="button" onClick={signInWithGoogle} disabled={busy}>
          {busy ? 'Connecting to Google…' : 'Continue with Google'}
        </button>
        <p className="admin-muted admin-login-note">Only the authorised portfolio owner account can access the content manager.</p>
      </div>
    </div>
  )
}

export default function AdminPage() {
  const { projects, certifications, initialized } = usePortfolioData()
  const [user, setUser] = useState(null)
  const [authLoaded, setAuthLoaded] = useState(false)
  const [tab, setTab] = useState('projects')
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState(blankProject())
  const [imageFile, setImageFile] = useState(null)
  const [busy, setBusy] = useState(false)
  const [notice, setNotice] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!firebaseAuth) {
      setAuthLoaded(true)
      return undefined
    }
    return firebaseAuth.onAuthStateChanged((nextUser) => {
      setUser(nextUser)
      setAuthLoaded(true)
    })
  }, [])

  const items = tab === 'projects' ? projects : certifications
  const collectionName = tab
  const authorized = user && user.email?.toLowerCase() === adminEmail

  const formTitle = useMemo(() => editing ? `Edit ${tab === 'projects' ? 'project' : 'certification'}` : `Add ${tab === 'projects' ? 'project' : 'certification'}`, [editing, tab])

  function switchTab(nextTab) {
    setTab(nextTab)
    setEditing(null)
    setImageFile(null)
    setForm(nextTab === 'projects' ? blankProject() : blankCertification())
    setError('')
    setNotice('')
  }

  function startNew() {
    setEditing(null)
    setImageFile(null)
    setForm(tab === 'projects' ? blankProject() : blankCertification())
    setError('')
    setNotice('')
  }

  function startEdit(item) {
    setEditing(item)
    setImageFile(null)
    setForm(tab === 'projects'
      ? { ...blankProject(), ...item, tech: item.tech || '', summary: item.card?.summary || item.description || '', tags: (item.card?.tags || []).join(', '), featured: item.featured ?? Boolean(item.card) }
      : { ...blankCertification(), ...item, featured: item.featured ?? true })
    setError('')
    setNotice('')
  }

  function updateField(event) {
    const { name, value, type, checked } = event.target
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  async function uploadImage(recordId) {
    if (!imageFile) return { image: form.image || '', imagePath: form.imagePath || '' }
    if (!firebaseStorageReady) {
      throw new Error('Firebase Storage is not available. Upgrade the Firebase project to Blaze, create the default Storage bucket, and configure VITE_FIREBASE_STORAGE_BUCKET. You can use an image URL in the meantime.')
    }
    if (!imageFile.type.startsWith('image/')) throw new Error('Choose an image file.')
    if (imageFile.size > 5 * 1024 * 1024) throw new Error('Image must be 5 MB or smaller.')

    const safeName = imageFile.name.replace(/[^a-zA-Z0-9._-]/g, '-')
    const fileRef = firebaseStorage.ref().child(`portfolio/${collectionName}/${recordId}/${Date.now()}-${safeName}`)
    await fileRef.put(imageFile, { contentType: imageFile.type })
    return { image: await fileRef.getDownloadURL(), imagePath: fileRef.fullPath }
  }

  async function saveRecord(event) {
    event.preventDefault()
    setBusy(true)
    setError('')
    setNotice('')
    let uploadedPath = ''
    try {
      if (!firebaseDb) throw new Error('Firebase is not configured yet. Complete the setup in docs/firebase-admin-setup.md.')
      const baseId = editing?.id || slugify(tab === 'projects' ? form.title : form.title)
      let recordId = baseId
      if (!editing) {
        const existing = await firebaseDb.collection(collectionName).doc(recordId).get()
        if (existing.exists) recordId = `${baseId}-${Date.now().toString(36)}`
      }

      const image = await uploadImage(recordId)
      uploadedPath = image.imagePath !== (editing?.imagePath || '') ? image.imagePath : ''
      const order = editing?.order ?? items.length
      let data

      if (tab === 'projects') {
        const tags = form.tags.split(',').map((tag) => tag.trim()).filter(Boolean)
        data = {
          id: recordId,
          title: form.title.trim(),
          description: form.description.trim(),
          tech: form.tech.trim(),
          github: form.github.trim(),
          live: form.live.trim(),
          image: image.image,
          imagePath: image.imagePath,
          art: form.art || 'code',
          featured: Boolean(form.featured),
          card: { summary: (form.summary || form.description).trim(), tags },
          order,
          updatedAt: firebaseSdkTimestamp(),
        }
      } else {
        data = {
          id: recordId,
          title: form.title.trim(),
          label: (form.label || form.title).trim(),
          code: form.code.trim(),
          description: form.description.trim(),
          image: image.image,
          imagePath: image.imagePath,
          credentialUrl: form.credentialUrl.trim(),
          issuedAt: form.issuedAt.trim(),
          featured: Boolean(form.featured),
          order,
          updatedAt: firebaseSdkTimestamp(),
        }
      }

      await firebaseDb.collection(collectionName).doc(recordId).set(data)
      if (editing?.imagePath && editing.imagePath !== image.imagePath) {
        await firebaseStorage?.ref().child(editing.imagePath).delete().catch(() => {})
      }
      setEditing(null)
      setImageFile(null)
      setNotice(`${tab === 'projects' ? 'Project' : 'Certification'} saved successfully.`)
      setForm(tab === 'projects' ? blankProject() : blankCertification())
    } catch (err) {
      if (uploadedPath) await firebaseStorage?.ref().child(uploadedPath).delete().catch(() => {})
      setError(err.message || 'Could not save this item.')
    } finally {
      setBusy(false)
    }
  }

  async function deleteRecord(item) {
    if (!window.confirm(`Delete “${item.title}”? This cannot be undone.`)) return
    setBusy(true)
    setError('')
    setNotice('')
    try {
      await firebaseDb.collection(collectionName).doc(item.id).delete()
      if (item.imagePath && firebaseStorage) await firebaseStorage.ref().child(item.imagePath).delete().catch(() => {})
      if (editing?.id === item.id) startNew()
      setNotice(`${tab === 'projects' ? 'Project' : 'Certification'} deleted.`)
    } catch (err) {
      setError(err.message || 'Could not delete this item.')
    } finally {
      setBusy(false)
    }
  }

  async function publishExistingContent() {
    setBusy(true)
    setError('')
    setNotice('')
    try {
      const batch = firebaseDb.batch()
      const currentProjects = await firebaseDb.collection('projects').get()
      const currentCertifications = await firebaseDb.collection('certifications').get()
      if (currentProjects.empty) {
        staticProjects.forEach((item, index) => {
          batch.set(firebaseDb.collection('projects').doc(item.id), { ...item, order: index, featured: Boolean(item.card) })
        })
      }
      if (currentCertifications.empty) {
        staticCertifications.forEach((item, index) => {
          batch.set(firebaseDb.collection('certifications').doc(item.id), { ...item, order: index, featured: ['az-900', 'az-204', 'security-plus', 'pl-900'].includes(item.id) })
        })
      }
      batch.set(firebaseDb.doc('settings/content'), { initialized: true, updatedAt: firebaseSdkTimestamp() })
      await batch.commit()
      setNotice('Your existing projects and certifications are now published to Firestore. Future edits are managed here.')
    } catch (err) {
      setError(err.message || 'Could not publish the existing content.')
    } finally {
      setBusy(false)
    }
  }

  function firebaseSdkTimestamp() {
    return window.firebase.firestore.FieldValue.serverTimestamp()
  }

  if (!firebaseReady) {
    return <section className="admin-page content-width"><div className="admin-notice error"><strong>Firebase is not configured.</strong><p>Add the Firebase web app settings as GitHub repository variables, then redeploy. Follow the setup guide linked below.</p><a href="https://github.com/FABRICADO08/Portfolio/blob/main/docs/firebase-admin-setup.md" target="_blank" rel="noreferrer">Open Firebase setup guide ↗</a></div></section>
  }
  if (!authLoaded) return <section className="admin-page content-width"><p className="admin-muted">Checking admin session…</p></section>
  if (!user) return <AdminLogin />
  if (!authorized) return <section className="admin-page content-width"><div className="admin-notice error"><strong>This account is not authorised.</strong><p>Sign in with {adminEmail} to manage this portfolio.</p><button className="button secondary" onClick={() => firebaseAuth.signOut()}>Sign out</button></div></section>

  return (
    <section className="admin-page content-width">
      <div className="admin-heading">
        <div><p className="admin-eyebrow">PORTFOLIO CONTROL CENTRE</p><h1>Content manager</h1><p className="admin-muted">Manage the projects and certifications shown on your public portfolio.</p></div>
        <div className="admin-heading-actions"><Link to="/" className="admin-back"><ArrowLeft size={16} /> View portfolio</Link><button className="admin-signout" onClick={() => firebaseAuth.signOut()}><LogOut size={16} /> Sign out</button></div>
      </div>

      {!firebaseStorageReady && <div className="admin-notice"><strong>Image uploads need Firebase Storage.</strong><p>Firebase requires the Blaze plan to use Storage as of 3 February 2026. You can still add image URLs below while on Spark.</p></div>}
      {!initialized && <div className="admin-notice"><strong>Connect your existing portfolio content.</strong><p>Import the current projects and certifications into Firestore once. This preserves your existing content and makes it editable here.</p><button className="button primary" disabled={busy} onClick={publishExistingContent}><CloudUpload size={16} /> {busy ? 'Publishing…' : 'Publish existing content'}</button></div>}

      <div className="admin-workspace">
        <div className="admin-toolbar">
          <div className="admin-tabs" role="tablist" aria-label="Content type">
            <button className={tab === 'projects' ? 'active' : ''} onClick={() => switchTab('projects')} role="tab" aria-selected={tab === 'projects'}>Projects <span>{projects.length}</span></button>
            <button className={tab === 'certifications' ? 'active' : ''} onClick={() => switchTab('certifications')} role="tab" aria-selected={tab === 'certifications'}>Certifications <span>{certifications.length}</span></button>
          </div>
          <button className="button primary" onClick={startNew}><Plus size={16} /> Add {tab === 'projects' ? 'project' : 'certification'}</button>
        </div>

        {notice && <p className="admin-success" role="status"><Check size={16} /> {notice}</p>}
        {error && <p className="admin-error" role="alert">{error}</p>}

        <div className="admin-grid">
          <div className="admin-list">
            <h2>{tab === 'projects' ? 'Your projects' : 'Your certifications'}</h2>
            {items.map((item) => (
              <article className={editing?.id === item.id ? 'admin-item selected' : 'admin-item'} key={item.id}>
                <div className="admin-item-image">{item.image ? <img src={item.image} alt="" /> : <FileImage size={22} />}</div>
                <div className="admin-item-copy"><strong>{item.title}</strong><small>{tab === 'projects' ? item.tech : item.code || item.label}</small></div>
                <button title="Edit" aria-label={`Edit ${item.title}`} onClick={() => startEdit(item)}><Pencil size={16} /></button>
                <button title="Delete" aria-label={`Delete ${item.title}`} onClick={() => deleteRecord(item)} disabled={busy}><Trash2 size={16} /></button>
              </article>
            ))}
            {!items.length && <p className="admin-muted">No items yet. Add your first one.</p>}
          </div>

          <form className="admin-editor" onSubmit={saveRecord}>
            <div className="admin-editor-heading"><div><p className="admin-eyebrow">CONTENT DETAILS</p><h2>{formTitle}</h2></div>{editing && <button type="button" className="admin-icon-button" onClick={startNew} aria-label="Cancel editing"><X size={18} /></button>}</div>
            <label>Title<input name="title" value={form.title} onChange={updateField} required maxLength={120} /></label>
            {tab === 'projects' ? (
              <>
                <label>Description<textarea name="description" value={form.description} onChange={updateField} rows="4" required maxLength={1200} /></label>
                <label>Technologies (comma-separated)<input name="tech" value={form.tech} onChange={updateField} placeholder="React, Firebase, TypeScript" /></label>
                <label>Featured card summary<input name="summary" value={form.summary} onChange={updateField} maxLength={180} /></label>
                <label>Tags (comma-separated)<input name="tags" value={form.tags} onChange={updateField} placeholder="React, Web app" /></label>
                <div className="admin-two-fields"><label>GitHub URL<input name="github" type="url" value={form.github} onChange={updateField} /></label><label>Live URL<input name="live" type="url" value={form.live} onChange={updateField} /></label></div>
                <label>Illustration style<select name="art" value={form.art} onChange={updateField}><option value="code">Code</option><option value="calendar">Calendar</option><option value="shield">Security</option><option value="chart">Analytics</option></select></label>
              </>
            ) : (
              <>
                <label>Display label<input name="label" value={form.label} onChange={updateField} placeholder="Microsoft Azure Developer" /></label>
                <label>Certification code<input name="code" value={form.code} onChange={updateField} placeholder="(AZ-204)" /></label>
                <label>Description<textarea name="description" value={form.description} onChange={updateField} rows="3" required maxLength={1000} /></label>
                <div className="admin-two-fields"><label>Issue date<input name="issuedAt" value={form.issuedAt} onChange={updateField} placeholder="November 2026" /></label><label>Credential URL<input name="credentialUrl" type="url" value={form.credentialUrl} onChange={updateField} /></label></div>
              </>
            )}
            <label>Image URL<input name="image" type="url" value={form.image} onChange={updateField} placeholder="https://… (optional if uploading)" /></label>
            <label className="admin-upload"><CloudUpload size={18} /><span>{imageFile ? imageFile.name : 'Upload image from your device'}<small>PNG, JPG, WEBP · max 5 MB</small></span><input type="file" accept="image/png,image/jpeg,image/webp,image/gif" onChange={(event) => setImageFile(event.target.files?.[0] || null)} /></label>
            {form.image && <img className="admin-image-preview" src={form.image} alt="Selected preview" />}
            <label className="admin-check"><input type="checkbox" name="featured" checked={Boolean(form.featured)} onChange={updateField} /> {tab === 'projects' ? 'Show on home page' : 'Feature in home page certifications panel'}</label>
            <div className="admin-editor-actions"><button type="submit" className="button primary" disabled={busy}><Save size={16} /> {busy ? 'Saving…' : 'Save changes'}</button>{editing && <button type="button" className="button secondary" onClick={startNew}>Cancel</button>}</div>
          </form>
        </div>
      </div>
    </section>
  )
}
