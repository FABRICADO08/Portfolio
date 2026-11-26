import { certifications } from '../data/portfolioData'

export default function Certifications() {
  return (
    <section id="certifications" className="timeline-page content-width" aria-label="Certifications">
      <div className="certification-grid">
        {certifications.map((cert) => (
          <article className="certification-card" key={cert.id}>
            <img src={cert.image} alt="" loading="lazy" width="76" height="76" />
            <div><h3>{cert.title}</h3><p>{cert.description}</p></div>
          </article>
        ))}
      </div>
    </section>
  )
}
