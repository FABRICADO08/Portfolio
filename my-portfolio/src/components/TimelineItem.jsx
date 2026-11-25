import { certifications } from '../data/portfolioData'

const roles = [
  {
    role: 'Graduate Trainee',
    organisation: 'Mercedes-Benz South Africa',
    dates: 'February 2026 – Present',
    detail: 'Contributing to enterprise application delivery, with experience in Mendix development, requirements analysis, integrations, testing and technical documentation.',
  },
  {
    role: 'Internal Intern',
    organisation: 'Mercedes-Benz South Africa',
    dates: 'August 2024 – January 2026',
    detail: 'Supported the development and improvement of internal business applications, collaborating with developers and stakeholders on requirements, implementation, testing and support.',
  },
  {
    role: 'External Intern',
    organisation: 'Mercedes-Benz South Africa · NetCampus',
    dates: 'July 2023 – July 2024',
    detail: 'Completed an external internship placement, gaining practical experience in enterprise IT and software development within a corporate environment.',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="timeline-page content-width" aria-labelledby="timeline-title">
      <header className="timeline-heading">
        <p className="eyebrow">Career journey</p>
        <h1 id="timeline-title">Experience, education and certifications</h1>
        <p>A record of my professional experience, academic background and ongoing development.</p>
      </header>

      <section className="timeline-section" aria-labelledby="experience-heading">
        <h2 id="experience-heading">Professional experience</h2>
        <ol className="experience-list">
          {roles.map((item) => (
            <li className="experience-item" key={item.role}>
              <p className="experience-date">{item.dates}</p>
              <h3>{item.role}</h3>
              <p className="experience-organisation">{item.organisation}</p>
              <p>{item.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline-section" aria-labelledby="education-heading">
        <h2 id="education-heading">Education</h2>
        <div className="education-grid">
          <article className="education-card">
            <p className="experience-date">In progress</p>
            <h3>Honours in Computing</h3>
            <p>University of South Africa (UNISA)</p>
          </article>
          <article className="education-card">
            <p className="experience-date">Completed · May 2023</p>
            <h3>BSc in Computer Science and Physics</h3>
            <p>University of Fort Hare, South Africa</p>
          </article>
        </div>
      </section>

      <section className="timeline-section" aria-labelledby="certifications-heading">
        <div className="certifications-heading">
          <div>
            <h2 id="certifications-heading">Certifications and professional development</h2>
            <p>Selected credentials and continuing professional development.</p>
          </div>
        </div>
        <div className="certification-grid">
          {certifications.map((cert) => (
            <article className="certification-card" key={cert.id}>
              {cert.image && <img src={cert.image} alt="" loading="lazy" width="76" height="76" />}
              <div><h3>{cert.title}</h3><p>{cert.description}</p></div>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
