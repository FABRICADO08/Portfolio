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
  const [loadError, setLoadError] = useState('')
  const [saving, setSaving] = useState(false)
  const [dirty, setDirty] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [pendingRemoval, setPendingRemoval] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    fetch('/api/projects', { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error('Your projects could not be loaded.')
        const data = await response.json()
        if (!Array.isArray(data)) throw new Error('The project collection returned an unexpected response.')
        return data.map((project) => ({ ...project, github: project.github === '#' ? '' : project.github || '', live: project.live === '#' ? '' : project.live || '' }))
      })
      .then(setProjects)
      .catch((err) => { if (err.name !== 'AbortError') setLoadError(err.message) })
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
      const response = await fetch('/api/projects', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(projects) })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Projects could not be saved.')
      setMessage('Projects saved. Your public portfolio now reflects these changes.')
      setDirty(false)
    } catch (err) {
      setError(err.message || 'Unable to save. Your edits are still here; please try again.')
    } finally {
      setSaving(false)
    }
  }

  function addProject() {
    setProjects((items) => [...items, { id: crypto.randomUUID(), title: '', description: '', tech: '', github: '', live: '', image: '' }])
    setDirty(true)
    setMessage('')
  }

  if (loading) return <p className="admin-loading" role="status">Loading your projects…</p>
  if (loadError) return <div className="admin-alert" role="alert"><p>{loadError} Editing is disabled to protect your saved content.</p><button type="button" className="button secondary" onClick={() => window.location.reload()}>Try again</button></div>

  return (
    <form className="project-manager" onSubmit={save}>
      <div className="manager-heading">
        <div><p className="eyebrow">Your work, in one place</p><h2>Project case studies</h2><p className="muted">Show recruiters what you built, the tools you used and the value you delivered.</p></div>
        <Link to="/projects" target="_blank" rel="noopener noreferrer">Preview public projects ↗</Link>
      </div>

      <div className="case-study-guide">
        <strong>A useful project description answers three questions:</strong>
        <ol><li><b>Challenge:</b> What problem or need did the project address?</li><li><b>Your contribution:</b> What did you design, develop, integrate or test?</li><li><b>Outcome:</b> What changed, improved or became possible?</li></ol>
        <p>For confidential work, describe the business problem at a high level and leave private source/demo links empty.</p>
      </div>

      <fieldset disabled={saving}>
        <div className="manager-toolbar">
          <span className="manager-count"><strong>{projects.length}</strong> {projects.length === 1 ? 'project' : 'projects'} <span>·</span> {dirty ? 'Unsaved changes' : 'All changes saved'}</span>
          <div><button type="button" className="button secondary" disabled={projects.length >= 100} onClick={addProject}>+ Add project</button><button type="submit" className="button primary" disabled={!dirty}>{saving ? 'Saving…' : 'Save changes'}</button></div>
        </div>
        {projects.length === 0 && <div className="project-empty"><h3>Your first case study starts here.</h3><p>Add a project name, a short explanation of your contribution and the technologies you used.</p></div>}
        <div className="manager-projects">
          {projects.map((project, index) => (
            <section key={project.id} className="project-editor" aria-labelledby={`project-heading-${project.id}`}>
              <div className="project-editor-heading"><div><span className="project-editor-number">{String(index + 1).padStart(2, '0')}</span><h3 id={`project-heading-${project.id}`}>{project.title || 'Untitled project'}</h3></div><button type="button" className="remove-project" onClick={() => setPendingRemoval(project.id)} aria-label={`Remove ${project.title || 'new project'}`}>Remove</button></div>
              <div className="project-fields">
                {fields.map(([field, label, type, maxLength]) => <div key={field}><label htmlFor={`project-${project.id}-${field}`}>{label}{field === 'title' ? ' *' : ''}</label><input id={`project-${project.id}-${field}`} type={type} required={field === 'title'} maxLength={maxLength} value={project[field] || ''} onChange={(event) => updateProject(project.id, field, event.target.value)} placeholder={field === 'github' ? 'https://github.com/your-name/project' : field === 'live' ? 'https://your-project.netlify.app' : field === 'tech' ? 'React, TypeScript, PostgreSQL' : undefined} /></div>)}
              </div>
              <label htmlFor={`project-${project.id}-description`}>Case study description</label>
              <textarea id={`project-${project.id}-description`} rows={5} maxLength={3000} value={project.description || ''} onChange={(event) => updateProject(project.id, 'description', event.target.value)} placeholder={'Challenge: …\n\nMy contribution: …\n\nOutcome: …'} aria-describedby={`project-help-${project.id}`} />
              <div className="project-editor-meta"><p id={`project-help-${project.id}`}>Up to 3,000 characters. Keep confidential details, credentials and internal URLs out of public descriptions.</p><span>{(project.description || '').length}/3000</span></div>
              {pendingRemoval === project.id && <div className="removal-confirmation"><p>Remove this project from the collection? It will be deleted when you save.</p><div><button type="button" className="button secondary" onClick={() => setPendingRemoval(null)}>Keep project</button><button type="button" className="button danger" onClick={() => { setProjects((items) => items.filter((item) => item.id !== project.id)); setPendingRemoval(null); setDirty(true); setMessage('') }}>Confirm removal</button></div></div>}
            </section>
          ))}
        </div>
      </fieldset>
      <div className="manager-save-footer"><p role="status" aria-live="polite">{message}</p>{error && <p role="alert">{error} Your unsaved edits have been kept.</p>}{dirty && <span>Remember to save before leaving this page.</span>}</div>
    </form>
  )
}
