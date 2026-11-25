import { useState } from 'react'
import { logout } from '@netlify/identity'
import { isPortfolioOwner } from '../../auth/admin-access.mjs'
import AdminLogin from './AdminLogin'
import ProjectsManager from './ProjectsManager'
import SkillsManager from './SkillsManager'
import CertificationsManager from './CertificationsManager'

const tabs = [
  { key: 'projects', label: 'Projects', description: 'Case studies and source links' },
  { key: 'skills', label: 'Skills', description: 'Your technical toolkit' },
  { key: 'certifications', label: 'Certifications', description: 'Credentials and learning' },
]

export default function AdminDashboard({ user, authReady, authError }) {
  const [activeTab, setActiveTab] = useState('projects')
  const [seeding, setSeeding] = useState(false)
  const [seedMessage, setSeedMessage] = useState('')
  const [logoutError, setLogoutError] = useState('')

  async function handleLogout() {
    setLogoutError('')
    try {
      await logout()
    } catch {
      setLogoutError('Sign-out failed. Please try again.')
    }
  }

  async function handleSeed() {
    setSeeding(true)
    setSeedMessage('')
    try {
      const response = await fetch('/api/seed', { method: 'POST' })
      const data = await response.json()
      if (!response.ok || !data.success) throw new Error(data.error || 'Initial data could not be loaded.')
      const seeded = Object.entries(data.seeded || {}).filter(([, value]) => value).map(([key]) => key)
      setSeedMessage(seeded.length ? `Initial data added for: ${seeded.join(', ')}. Reload the relevant tab to see it.` : 'Your content is already set up. No changes were made.')
    } catch (error) {
      setSeedMessage(error.message || 'Could not load initial data. Check your connection and try again.')
    } finally {
      setSeeding(false)
    }
  }

  if (!authReady) return <div className="admin-loading content-width" role="status"><span className="admin-spinner" /> Checking your secure session…</div>
  if (!isPortfolioOwner(user)) return <AdminLogin user={user} authError={authError} />

  return (
    <section className="admin-shell">
      <div className="admin-container">
        <header className="admin-header">
          <div>
            <p className="eyebrow">Portfolio control centre</p>
            <h1>Good to see you.</h1>
            <p>Keep your work, skills and credentials up to date.</p>
          </div>
          <div className="admin-account">
            <span className="admin-avatar" aria-hidden="true">{(user.email || 'A').slice(0, 1).toUpperCase()}</span>
            <div className="admin-account-copy"><strong>Portfolio owner</strong><span>{user.email}</span></div>
            <button type="button" className="button secondary admin-logout" onClick={handleLogout}>Sign out</button>
          </div>
        </header>

        {logoutError && <p className="admin-alert" role="alert">{logoutError}</p>}

        <section className="admin-welcome" aria-label="Admin dashboard overview">
          <div><span className="admin-status-dot" /> <strong>Content management</strong><p>Changes are saved to your live portfolio when you select Save.</p></div>
          <button type="button" className="button secondary" onClick={handleSeed} disabled={seeding}>{seeding ? 'Checking setup…' : 'Set up initial content'}</button>
        </section>
        {seedMessage && <p className="admin-feedback" role="status" aria-live="polite">{seedMessage}</p>}

        <nav className="admin-tabs" aria-label="Content management sections">
          {tabs.map((tab) => (
            <button key={tab.key} type="button" className={activeTab === tab.key ? 'admin-tab active' : 'admin-tab'} onClick={() => setActiveTab(tab.key)} aria-current={activeTab === tab.key ? 'page' : undefined}>
              <span>{tab.label}</span><small>{tab.description}</small>
            </button>
          ))}
        </nav>

        <div className="admin-panel">
          {activeTab === 'projects' && <ProjectsManager />}
          {activeTab === 'skills' && <SkillsManager />}
          {activeTab === 'certifications' && <CertificationsManager />}
        </div>
        <footer className="admin-footer"><span>Private workspace · Only the portfolio owner can make changes</span><a href="/" target="_blank" rel="noopener noreferrer">Open public portfolio ↗</a></footer>
      </div>
    </section>
  )
}
