import { usePortfolioData } from '../context/PortfolioDataContext'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const { projects } = usePortfolioData()

  return (
    <section id="projects" className="section content-width" aria-labelledby="projects-heading">
      <div className="projects-section-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 id="projects-heading">Projects and technical work</h2>
          <p className="section-intro">Selected work spanning mobile application development, modern web technologies and enterprise low-code solutions.</p>
        </div>
        <span className="projects-count">{String(projects.length).padStart(2, '0')} <small>projects</small></span>
      </div>
      <div className="project-grid">
        {projects.map((project) => <ProjectCard key={project.id} {...project} />)}
      </div>
      {!projects.length && <p className="admin-muted">Projects will appear here when published.</p>}
    </section>
  )
}
