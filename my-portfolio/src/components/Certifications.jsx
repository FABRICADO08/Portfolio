import { usePortfolioData } from '../context/PortfolioDataContext'

export default function Certifications() {
  const { certifications } = usePortfolioData()

  return (
    <section id="certifications" className="timeline-page content-width" aria-label="Certifications">
      <div className="certification-grid">
        {certifications.map((cert) => (
          <article className="certification-card" key={cert.id}>
            <img src={cert.image || '/img/AZ-900.png'} alt="" loading="lazy" width="76" height="76" />
            <div><h3>{cert.title}</h3><p>{cert.description}</p>{cert.credentialUrl && <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">View credential ↗</a>}</div>
          </article>
        ))}
      </div>
      {!certifications.length && <p className="admin-muted">Certifications will appear here when published.</p>}
    </section>
  )
}
