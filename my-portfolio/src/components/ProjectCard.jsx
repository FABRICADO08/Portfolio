const isWebLink = (value) => {
  try {
    const url = new URL(value)
    return ['https:', 'http:'].includes(url.protocol)
  } catch {
    return false
  }
}

export default function ProjectCard({ image, title, tech, live, github, description }) {
  const technologies = typeof tech === 'string'
    ? tech.split(',').map((item) => item.trim()).filter(Boolean)
    : []

  return (
    <article className="project-card">
      <div className="project-visual">
        {image ? (
          <img src={image} alt={`${title} project preview`} loading="lazy" width="640" height="360" />
        ) : (
          <div className="project-placeholder" aria-label="Project preview not available">
            <span aria-hidden="true">{(title || 'P').slice(0, 1).toUpperCase()}</span>
            <small>Project overview</small>
          </div>
        )}
        <span className="project-index" aria-hidden="true">PROJECT / CASE STUDY</span>
      </div>
      <div className="project-body">
        <div className="project-card-heading"><p className="eyebrow">Selected work</p><span className="project-mark" aria-hidden="true">↗</span></div>
        <h3>{title}</h3>
        {description && <p className="project-description">{description}</p>}
        {technologies.length > 0 && <ul className="project-tech-list" aria-label="Technologies used">{technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>}
        <div className="project-links">
          {isWebLink(live) && <a href={live} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} live demo (opens in a new tab)`}>Live demo <span aria-hidden="true">↗</span></a>}
          {isWebLink(github) && <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} source code (opens in a new tab)`}>Source code <span aria-hidden="true">↗</span></a>}
          {!isWebLink(live) && !isWebLink(github) && <span className="project-private-note">Details available on request</span>}
        </div>
      </div>
    </article>
  )
}
