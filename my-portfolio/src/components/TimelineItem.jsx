import { certifications, education, experience } from '../data/portfolioData'

function OrganisationMark({ src, name, variant = '' }) {
  return (
    <span className={`timeline-entity-badge ${variant}`}>
      <img className="timeline-entity-logo" src={src} alt="" loading="lazy" />
      <span>{name}</span>
    </span>
  )
}

export default function Timeline() {
  return (
    <section id="timeline" className="timeline-page content-width" aria-label="Experience and education">
      <section className="timeline-section" aria-labelledby="experience-heading">
        <h2 id="experience-heading">Professional experience</h2>
        <ol className="experience-list">
          {experience.map((item) => (
            <li className="experience-item" key={item.role}>
              <p className="experience-date">{item.dates}</p>
              <h3>{item.role}</h3>
              <OrganisationMark src={item.logo} name={item.organisation} />
              <p>{item.detail}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="timeline-section" aria-labelledby="education-heading">
        <h2 id="education-heading">Education</h2>
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.qualification}>
              <p className="experience-date">{item.dates}</p>
              <h3>{item.qualification}</h3>
              <OrganisationMark src={item.logo} name={item.institution} variant="education-entity-badge" />
            </article>
          ))}
        </div>
      </section>
      <section className="timeline-section" aria-labelledby="certifications-heading">
        <div className="certifications-heading"><div><h2 id="certifications-heading">Certifications and professional development</h2><p>Selected credentials and continuing professional development.</p></div></div>
        <div className="certification-grid">
          {certifications.map((cert) => <article className="certification-card" key={cert.id}>{cert.image && <img src={cert.image} alt="" loading="lazy" width="76" height="76" />}<div><h3>{cert.title}</h3><p>{cert.description}</p></div></article>)}
        </div>
      </section>
    </section>
  )
}
