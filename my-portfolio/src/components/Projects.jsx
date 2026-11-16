import { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => { if (!res.ok) throw new Error('Projects unavailable'); return res.json() })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error('Invalid project data')
        setProjects(data)
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <section id="projects" className="section content-width">
      <p className="eyebrow">Application development</p><h2>Projects &amp; technical work</h2><p className="section-intro">Explore the technologies and applications behind my development work. Contact me to discuss my contribution and implementation decisions.</p>
      {status === 'loading' && <p role="status">Loading projects…</p>}
      {status === 'error' && <p role="alert">Projects could not be loaded. Please refresh or contact me for details.</p>}
      {status === 'ready' && projects.length === 0 && <p>Project case studies are being prepared. <a href="/contact">Contact me to discuss my work.</a></p>}
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            tech={project.tech}
            live={project.live}
            github={project.github}
            description={project.description}
          />
        ))}
      </div>
    </section>
  )
}
