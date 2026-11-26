import ProjectArt from './ProjectArt'

const artById = { 'budget-tracker': 'chart', gps4mps: 'calendar', 'mendix-enterprise': 'code' }

const stackLogo = {
  Kotlin: 'kotlin',
  Android: 'android',
  'Jetpack Compose': 'jetpackcompose',
  React: 'react',
  TypeScript: 'typescript',
  Vite: 'vite',
  Mendix: 'mendix',
  Java: 'openjdk',
  JavaScript: 'javascript',
  PostgreSQL: 'postgresql',
}

const logoUrl = (technology) => {
  const slug = stackLogo[technology]
  return slug ? `https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/${slug}.svg` : ''
}

const isWebLink = (value) => {
  try {
    const url = new URL(value)
    return ['https:', 'http:'].includes(url.protocol)
  } catch {
    return false
  }
}

export default function ProjectCard({ id, image, title, tech, live, github, description }) {
  const technologies = typeof tech === 'string'
    ? tech.split(',').map((item) => item.trim()).filter(Boolean)
    : []

  return (
    <article className="project-card">
      <div className="project-visual">
        {image ? (
          <img src={image} alt={`${title} project preview`} loading="lazy" width="640" height="360" />
        ) : (
          <div className="project-placeholder" role="img" aria-label={`${title} illustration`}>
            <ProjectArt name={artById[id] || 'code'} />
          </div>
        )}
        <span className="project-index" aria-hidden="true">PROJECT / CASE STUDY</span>
      </div>
      <div className="project-body">
        <div className="project-card-heading"><p className="eyebrow">Selected work</p><span className="project-mark" aria-hidden="true">↗</span></div>
        <h3>{title}</h3>
        {description && <p className="project-description">{description}</p>}
        {technologies.length > 0 && (
          <div className="project-stack" aria-label={`Technology stack used for ${title}`}>
            <span className="stack-label">BUILT WITH</span>
            <ul className="project-tech-list">
              {technologies.map((technology) => {
                const logo = logoUrl(technology)
                return (
                  <li key={technology} title={technology}>
                    {logo ? <img src={logo} alt="" loading="lazy" /> : <span className="stack-fallback" aria-hidden="true">{technology.slice(0, 2).toUpperCase()}</span>}
                    <span>{technology}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
        <div className="project-links">
          {isWebLink(live) && <a href={live} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} live demo (opens in a new tab)`}>Live demo <span aria-hidden="true">↗</span></a>}
          {isWebLink(github) && <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} source code (opens in a new tab)`}>Source code <span aria-hidden="true">↗</span></a>}
          {!isWebLink(live) && !isWebLink(github) && <span className="project-private-note">Details available on request</span>}
        </div>
      </div>
    </article>
  )
}
