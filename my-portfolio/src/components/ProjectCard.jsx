import { useState } from 'react'
const webLink = (value) => { try { return ['https:', 'http:'].includes(new URL(value).protocol) } catch { return false } }
export default function ProjectCard({ image, title, tech, live, github, description }) {
const [failed, setFailed] = useState(false)
return <article className="project-card">
{image && !failed && <img src={image} alt={`${title} application preview`} loading="lazy" width="640" height="360" onError={()=>setFailed(true)} />}
<div className="project-body"><p className="eyebrow">{tech}</p><h3>{title}</h3>{description && <p>{description}</p>}<div className="actions">{webLink(live) && <a href={live} aria-label={`View ${title} live demo`}>Live demo ↗</a>}{webLink(github) && <a href={github} aria-label={`Read ${title} source code`}>Source code ↗</a>}</div>{!webLink(live) && !webLink(github) && <p className="muted">Demo and source links are not yet published.</p>}</div></article>
}
