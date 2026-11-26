import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProjectArt from './ProjectArt'
import { projects } from '../data/portfolioData'

const isWebLink = (value) => {
  try {
    return ['https:', 'http:'].includes(new URL(value).protocol)
  } catch {
    return false
  }
}

function FeaturedCard({ title, card, art, github, live }) {
  const { summary: description, tags } = card
  const href = [live, github].find(isWebLink)
  const inner = (
    <>
      <div className="d-card-art"><ProjectArt name={art} /></div>
      <div className="d-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
      </div>
      <span className="d-card-go" aria-hidden="true"><ArrowRight size={16} /></span>
    </>
  )
  return href
    ? <a className="d-project-card" href={href} target="_blank" rel="noopener noreferrer" aria-label={`${title} (opens in a new tab)`}>{inner}</a>
    : <Link className="d-project-card" to="/projects" aria-label={`${title} – view project details`}>{inner}</Link>
}

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="content-width d-featured" aria-labelledby="featured-heading">
      <div className="d-section-head">
        <div>
          <h2 id="featured-heading" className="d-title">Featured Projects</h2>
          <p>Real-world solutions built with modern technologies</p>
        </div>
        <Link to="/projects" className="d-view-all">View All Projects <ArrowRight size={14} aria-hidden="true" /></Link>
      </div>
      <div className="d-project-grid">
        {projects.filter((project) => project.card).map((project) => <FeaturedCard key={project.id} {...project} />)}
      </div>
    </section>
  )
}
