import { certifications } from '../data/portfolioData'
const roles = [
  { role: 'Graduate Trainee', dates: 'February 2026 – Present', detail: 'Graduate Trainee at Mercedes-Benz South Africa.' },
  { role: 'Internal Intern', dates: 'August 2024 – January 2026', detail: 'Internal internship at Mercedes-Benz South Africa.' },
  { role: 'External Intern · NetCampus', dates: 'July 2023 – July 2024', detail: 'External internship at Mercedes-Benz South Africa through NetCampus.' },
]
export default function Timeline() {
  return (
    <section id="timeline" className="timeline-page content-width" aria-labelledby="timeline-title">
      <header className="timeline-heading"><p className="eyebrow">Career journey</p><h1 id="timeline-title">Experience, education &amp; certifications</h1><p>Career progression, academic foundations and continued learning.</p></header>
      <section className="timeline-section" aria-labelledby="experience-heading"><h2 id="experience-heading">Professional experience</h2><ol className="experience-list">{roles.map((item) => <li className="experience-item" key={item.role}><p className="experience-date">{item.dates}</p><h3>{item.role}</h3><p>{item.detail}</p></li>)}</ol></section>
      <section className="timeline-section" aria-labelledby="education-heading"><h2 id="education-heading">Education</h2><div className="education-grid"><article className="education-card"><p className="experience-date">Currently studying</p><h3>Honours in Computing</h3><p>University of South Africa (UNISA)</p></article><article className="education-card"><p className="experience-date">Graduated · May 2023</p><h3>BSc Computer Science and Physics</h3><p>University of Fort Hare, South Africa</p></article></div></section>
      <section className="timeline-section" aria-labelledby="certifications-heading"><div className="certifications-heading"><div><h2 id="certifications-heading">Professional certifications</h2><p>Selected credentials and continued professional development.</p></div></div><div className="certification-grid">{certifications.map((cert) => <article className="certification-card" key={cert.id}>{cert.image && <img src={cert.image} alt="" loading="lazy" width="76" height="76" />}<div><h3>{cert.title}</h3><p>{cert.description}</p></div></article>)}</div></section>
    </section>
  )
}
