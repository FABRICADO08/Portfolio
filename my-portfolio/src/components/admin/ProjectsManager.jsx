import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const fields = [
  ['title', 'Project name', 'text', 160],
  ['tech', 'Technologies', 'text', 500],
  ['github', 'GitHub repository link', 'url', 2048],
  ['live', 'Live demo link', 'url', 2048],
  ['image', 'Screenshot URL or site image path (optional)', 'text', 2048],
]

export default function ProjectsManager() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)
  const [saving, setSaving] = useState(false)
  const [dirty, setDirty] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [pendingRemoval, setPendingRemoval] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    fetch('/api/projects', { signal: controller.signal })
      .then(async (res) => {
        if (!res.ok) throw new Error('Projects could not be loaded.')
        const data = await res.json()
        if (!Array.isArray(data)) throw new Error('Invalid collection.')
        return data.map((project) => ({ ...project, github: project.github === '#' ? '' : project.github || '', live: project.live === '#' ? '' : project.live || '' }))
      })
      .then(setProjects)
      .catch((err) => { if (err.name !== 'AbortError') setLoadError(true) })
      .finally(() => { if (!controller.signal.aborted) setLoading(false) })
    return () => controller.abort()
  }, [])

  useEffect(() => {
    if (!dirty) return
    const warn = (event) => { event.preventDefault(); event.returnValue = '' }
    window.addEventListener('beforeunload', warn)
    return () => window.removeEventListener('beforeunload', warn)
  }, [dirty])

  function updateProject(id, field, value) {
    setProjects((items) => items.map((project) => project.id === id ? { ...project, [field]: value } : project))
    setDirty(true)
    setMessage('')
    setError('')
  }

  async function save(event) {
    event.preventDefault()
    setSaving(true)
    setMessage('')
    setError('')
    try {
      const res = await fetch('/api/projects', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(projects) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Projects could not be saved.')
      setMessage('Projects saved. Your project collection is now updated on the portfolio.')
      setDirty(false)
    } catch (err) { setError(err.message || 'Unable to save. Your edits are still here; please try again.') }
    finally { setSaving(false) }
  }

  if (loading) return <p role="status">Loading your projects…</p>
  if (loadError) return <div role="alert"><p>Your projects could not be loaded. Editing is disabled to protect saved projects.</p><button className="button secondary" onClick={() => window.location.reload()}>Retry loading</button></div>

  return <form className="project-manager" onSubmit={save}>
    <div className="manager-heading"><div><p className="eyebrow">Your work, in one place</p><h2>Projects bucket</h2><p className="muted">Add projects you’ve worked on, describe your contribution, and include GitHub and live-demo links. Saved projects appear publicly on your portfolio.</p></div><Link to="/projects" target="_blank" rel="noopener noreferrer">View portfolio projects ↗</Link></div>
    <fieldset disabled={saving}>
      <div className="manager-toolbar"><button type="button" className="button secondary" disabled={projects.length >= 100} onClick={() => { setProjects((items) => [...items, { id: crypto.randomUUID(), title: '', description: '', tech: '', github: '', live: '', image: '' }]); setDirty(true); setMessage('') }}>+ Add project</button><button type="submit" className="button primary" disabled={!dirty}>{saving ? 'Saving…' : 'Save projects'}</button><span className="muted">{projects.length} {projects.length === 1 ? 'project' : 'projects'} · {dirty ? 'Unsaved changes' : 'Up to date'}</span></div>
      {projects.length === 0 && <div className="project-empty"><h3>Make room for your first project.</h3><p>Add a project name, your contribution and links so recruiters can explore your work.</p></div>}
      <div className="manager-projects">{projects.map((project, index) => <section key={project.id} className="project-editor" aria-labelledby={`project-heading-${project.id}`}>
        <div className="manager-heading"><h3 id={`project-heading-${project.id}`}>{String(index + 1).padStart(2, '0')} / {project.title || 'New project'}</h3><button type="button" className="remove-project" onClick={() => setPendingRemoval(project.id)} aria-label={`Remove ${project.title || 'new project'}`}>Remove</button></div>
        <div className="project-fields">{fields.map(([field, label, type, maxLength]) => <div key={field}><label htmlFor={`project-${project.id}-${field}`}>{label}{field === 'title' ? ' *' : ''}</label><input id={`project-${project.id}-${field}`} type={type} required={field === 'title'} maxLength={maxLength} value={project[field] || ''} onChange={(event) => updateProject(project.id, field, event.target.value)} placeholder={field === 'github' ? 'https://github.com/your-name/project' : field === 'live' ? 'https://your-project.netlify.app' : undefined} /></div>)}</div>
        <label htmlFor={`project-${project.id}-description`}>Project description and your contribution</label><textarea id={`project-${project.id}-description`} rows={4} maxLength={3000} value={project.description || ''} onChange={(event) => updateProject(project.id, 'description', event.target.value)} aria-describedby={`project-help-${project.id}`} /><p id={`project-help-${project.id}`} className="muted text-sm">Explain the problem, what you personally built, and the technologies used. Links can be left empty for private work.</p>
        {pendingRemoval === project.id && <div className="removal-confirmation"><p>Remove this project? The change takes effect when you save.</p><button type="button" className="button secondary" onClick={() => setPendingRemoval(null)}>Keep project</button><button type="button" className="button secondary" onClick={() => { setProjects((items) => items.filter((item) => item.id !== project.id)); setPendingRemoval(null); setDirty(true); setMessage('') }}>Remove project</button></div>}
      </section>)}</div>
    </fieldset>
    <p role="status" aria-live="polite">{message}</p>{error && <p role="alert">{error} Your unsaved edits have been kept.</p>}
  </form>
}
