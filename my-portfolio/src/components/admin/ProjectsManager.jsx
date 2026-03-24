import { useState, useEffect } from 'react'

export default function ProjectsManager() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false))
  }, [])

  const save = async () => {
    setSaving(true)
    setMessage('')
    try {
      const res = await fetch('/api/projects', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projects),
      })
      if (res.ok) setMessage('Projects saved successfully!')
      else setMessage('Failed to save. Are you logged in?')
    } catch {
      setMessage('Error saving projects.')
    } finally {
      setSaving(false)
    }
  }

  const addProject = () => {
    setProjects([
      ...projects,
      { id: Date.now().toString(), image: '', title: '', tech: '', live: '#', github: '#' },
    ])
  }

  const removeProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id))
  }

  const updateProject = (id, field, value) => {
    setProjects(projects.map((p) => (p.id === id ? { ...p, [field]: value } : p)))
  }

  if (loading) return <p className="text-gray-400">Loading projects...</p>

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Manage Projects</h2>
        <div className="flex gap-2">
          <button
            onClick={addProject}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition"
          >
            + Add Project
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

      {projects.length === 0 ? (
        <p className="text-gray-400">No projects yet. Add one or seed the initial data.</p>
      ) : (
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-700 rounded-lg p-4 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Title</label>
                  <input
                    value={project.title}
                    onChange={(e) => updateProject(project.id, 'title', e.target.value)}
                    className="w-full bg-gray-600 text-white rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Tech Stack</label>
                  <input
                    value={project.tech}
                    onChange={(e) => updateProject(project.id, 'tech', e.target.value)}
                    className="w-full bg-gray-600 text-white rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Image URL</label>
                  <input
                    value={project.image}
                    onChange={(e) => updateProject(project.id, 'image', e.target.value)}
                    className="w-full bg-gray-600 text-white rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Live URL</label>
                  <input
                    value={project.live}
                    onChange={(e) => updateProject(project.id, 'live', e.target.value)}
                    className="w-full bg-gray-600 text-white rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-xs mb-1">GitHub URL</label>
                  <input
                    value={project.github}
                    onChange={(e) => updateProject(project.id, 'github', e.target.value)}
                    className="w-full bg-gray-600 text-white rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <button
                onClick={() => removeProject(project.id)}
                className="text-red-400 hover:text-red-300 text-sm transition"
              >
                Remove Project
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
