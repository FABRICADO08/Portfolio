import { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()
    fetch('/api/projects', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Projects unavailable')
        return response.json()
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error('Invalid project data')
        setProjects(data)
        setStatus('ready')
      })
      .catch((error) => {
        if (error.name !== 'AbortError') setStatus('error')
      })
    return () => controller.abort()
  }, [])

  return (
    <section id="projects" className="section content-width" aria-labelledby="projects-heading">
      <div className="projects-section-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 id="projects-heading">Projects &amp; technical work</h2>
          <p className="section-intro">A selection of applications and technical work across web development, low-code platforms and digital solutions. Each project highlights the tools used and the problem being addressed.</p>
        </div>
        <span className="projects-count">{String(projects.length).padStart(2, '0')} <small>projects</small></span>
      </div>
      {status === 'loading' && <p className="project-state" role="status">Loading project case studies…</p>}
      {status === 'error' && <p className="project-state error" role="alert">Projects could not be loaded. Please refresh or contact me for details.</p>}
      {status === 'ready' && projects.length === 0 && <div className="project-empty-public"><h3>New work is on the way.</h3><p>Project case studies are being prepared. <a href="/contact">Get in touch</a> to discuss my experience and technical work.</p></div>}
      {status === 'ready' && projects.length > 0 && <div className="project-grid">{projects.map((project) => <ProjectCard key={project.id} {...project} />)}</div>}
    </section>
  )
}
