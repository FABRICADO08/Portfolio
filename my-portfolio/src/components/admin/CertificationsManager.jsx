import { useState, useEffect } from 'react'

export default function CertificationsManager() {
  const [certs, setCerts] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/certifications')
      .then((res) => res.json())
      .then((data) => setCerts(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false))
  }, [])

  const save = async () => {
    setSaving(true)
    setMessage('')
    try {
      const res = await fetch('/api/certifications', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(certs),
      })
      if (res.ok) setMessage('Certifications saved successfully!')
      else setMessage('Failed to save. Are you logged in?')
    } catch {
      setMessage('Error saving certifications.')
    } finally {
      setSaving(false)
    }
  }

  const addCert = () => {
    setCerts([
      ...certs,
      { id: Date.now().toString(), image: '', title: '', description: '' },
    ])
  }

  const removeCert = (id) => {
    setCerts(certs.filter((c) => c.id !== id))
  }

  const updateCert = (id, field, value) => {
    setCerts(certs.map((c) => (c.id === id ? { ...c, [field]: value } : c)))
  }

  if (loading) return <p className="text-gray-400">Loading certifications...</p>

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Manage Certifications</h2>
        <div className="flex gap-2">
          <button
            onClick={addCert}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition"
          >
            + Add Certification
          </button>
          <button
            onClick={save}
            disabled={saving}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save All'}
          </button>
        </div>
      </div>

      {message && (
        <div className="bg-blue-500/20 border border-blue-500 text-blue-300 rounded-lg p-3 mb-4 text-sm">
          {message}
        </div>
      )}

      {certs.length === 0 ? (
        <p className="text-gray-400">No certifications yet. Add one or seed the initial data.</p>
      ) : (
        <div className="space-y-4">
          {certs.map((cert) => (
            <div key={cert.id} className="bg-gray-700 rounded-lg p-4 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Title</label>
                  <input
                    value={cert.title}
                    onChange={(e) => updateCert(cert.id, 'title', e.target.value)}
                    className="w-full bg-gray-600 text-white rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Image URL</label>
                  <input
                    value={cert.image}
                    onChange={(e) => updateCert(cert.id, 'image', e.target.value)}
                    className="w-full bg-gray-600 text-white rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 text-xs mb-1">Description</label>
                <textarea
                  value={cert.description}
                  onChange={(e) => updateCert(cert.id, 'description', e.target.value)}
                  rows={2}
                  className="w-full bg-gray-600 text-white rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={() => removeCert(cert.id)}
                className="text-red-400 hover:text-red-300 text-sm transition"
              >
                Remove Certification
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
