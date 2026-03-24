import { useState, useEffect, useCallback } from 'react'
import { logout, getUser } from '@netlify/identity'
import AdminLogin from './AdminLogin'
import ProjectsManager from './ProjectsManager'
import SkillsManager from './SkillsManager'
import CertificationsManager from './CertificationsManager'

export default function AdminDashboard() {
  const [user, setUser] = useState(null)
  const [activeTab, setActiveTab] = useState('projects')
  const [seeding, setSeeding] = useState(false)
  const [seedMessage, setSeedMessage] = useState('')

  const handleLogin = useCallback((loggedInUser) => {
    setUser(loggedInUser)
  }, [])

  const handleLogout = async () => {
    await logout()
    setUser(null)
  }

  const handleSeed = async () => {
    setSeeding(true)
    setSeedMessage('')
    try {
      const res = await fetch('/api/seed', { method: 'POST' })
      const data = await res.json()
      if (data.success) {
        const seeded = Object.entries(data.seeded)
          .filter(([, v]) => v)
          .map(([k]) => k)
        setSeedMessage(
          seeded.length > 0
            ? `Seeded: ${seeded.join(', ')}. Refresh each tab to see the data.`
            : 'All data already exists. Nothing was seeded.'
        )
      }
    } catch {
      setSeedMessage('Failed to seed data. Make sure you are logged in.')
    } finally {
      setSeeding(false)
    }
  }

  if (!user) return <AdminLogin onLogin={handleLogin} />

  const tabs = [
    { key: 'projects', label: 'Projects' },
    { key: 'skills', label: 'Skills' },
    { key: 'certifications', label: 'Certifications' },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 pt-28 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-3 items-center">
            <span className="text-gray-400 text-sm">{user.email}</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-4 mb-6 flex items-center justify-between">
          <p className="text-gray-300 text-sm">
            First time? Seed the database with your existing portfolio data.
          </p>
          <button
            onClick={handleSeed}
            disabled={seeding}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition disabled:opacity-50"
          >
            {seeding ? 'Seeding...' : 'Seed Initial Data'}
          </button>
        </div>
        {seedMessage && (
          <div className="bg-blue-500/20 border border-blue-500 text-blue-300 rounded-lg p-3 mb-6 text-sm">
            {seedMessage}
          </div>
        )}

        <div className="flex gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === tab.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          {activeTab === 'projects' && <ProjectsManager />}
          {activeTab === 'skills' && <SkillsManager />}
          {activeTab === 'certifications' && <CertificationsManager />}
        </div>
      </div>
    </div>
  )
}
