import { certifications } from '../data/portfolioData'

export default function Certifications() {
  return (
    <section id="certifications" className="timeline-page content-width" aria-labelledby="certifications-title">
      <header className="timeline-heading">
        <p className="eyebrow">Credentials</p>
        <h1 id="certifications-title">Certifications and professional development</h1>
        <p>Selected credentials and continuing professional development.</p>
      </header>
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
