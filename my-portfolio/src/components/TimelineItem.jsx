import { useEffect, useState } from 'react'

const fallbackCertifications = [
  { id: '1', image: '/img/SecurityPlus Logo Certified CE.png', title: 'CompTIA Security+', description: 'Cybersecurity fundamentals, risk management and security protocols.' },
  { id: '2', image: '/img/azure-developer-associate-600x600.png', title: 'Azure Developer Associate (AZ-204)', description: 'Developing cloud applications and services on Microsoft Azure.' },
  { id: '3', image: '/img/CERT-Fundamentals-Power-Platform.png', title: 'Power Platform Fundamentals (PL-900)', description: 'Microsoft Power Platform tools, including Power Apps and Power Automate.' },
  { id: '4', image: '/img/AZ-900.png', title: 'Azure Fundamentals (AZ-900)', description: 'Core Azure services, security, compliance and pricing.' },
  { id: '5', image: '/img/Rapid-min.png', title: 'Mendix Rapid Developer Certification', description: 'Mendix application development, data modelling and deployment.' },
  { id: '6', image: '/img/Agile_Project_Management_Foundation__600PX.png', title: 'AgilePM Foundation', description: 'Agile project management principles, practices and frameworks.' },
]

const roles = [
  { role: 'Graduate Trainee', dates: 'February 2026 – Present', detail: 'Graduate Trainee at Mercedes-Benz South Africa.' },
  { role: 'Internal Intern', dates: 'August 2024 – January 2026', detail: 'Internal internship at Mercedes-Benz South Africa.' },
  { role: 'External Intern · NetCampus', dates: 'July 2023 – July 2024', detail: 'External internship at Mercedes-Benz South Africa through NetCampus.' },
]

export default function Timeline() {
  const [certifications, setCertifications] = useState(fallbackCertifications)

  useEffect(() => {
    let active = true
    fetch('/api/certifications')
      .then((response) => {
        if (!response.ok) throw new Error('Certifications unavailable')
        return response.json()
      })
      .then((data) => {
        if (active && Array.isArray(data) && data.length > 0) setCertifications(data)
      })
      .catch(() => {})
    return () => { active = false }
  }, [])

  return (
    <section id="timeline" className="timeline-page content-width" aria-labelledby="timeline-title">
      <header className="timeline-heading">
        <p className="eyebrow">Career journey</p>
        <h1 id="timeline-title">Experience, education &amp; certifications</h1>
        <p>Career progression, academic foundations and continued learning.</p>
      </header>

      <section className="timeline-section" aria-labelledby="experience-heading">
        <h2 id="experience-heading">Professional experience</h2>
        <ol className="experience-list">
          {roles.map((item) => (
            <li className="experience-item" key={item.role}>
              <p className="experience-date">{item.dates}</p>
              <h3>{item.role}</h3>
              <p>{item.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline-section" aria-labelledby="education-heading">
        <h2 id="education-heading">Education</h2>
        <div className="education-grid">
          <article className="education-card">
            <p className="experience-date">Currently studying</p>
            <h3>Honours in Computing</h3>
            <p>University of South Africa (UNISA)</p>
          </article>
          <article className="education-card">
            <p className="experience-date">Graduated · May 2023</p>
            <h3>BSc Computer Science and Physics</h3>
            <p>University of Fort Hare, South Africa</p>
          </article>
        </div>
      </section>

      <section className="timeline-section" aria-labelledby="certifications-heading">
        <div className="certifications-heading">
          <div>
            <h2 id="certifications-heading">Professional certifications</h2>
            <p>Selected credentials and continued professional development.</p>
          </div>
        </div>
        <div className="certification-grid">
          {certifications.map((cert) => (
            <article className="certification-card" key={cert.id}>
              {cert.image && <img src={cert.image} alt="" loading="lazy" width="76" height="76" />}
              <div>
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
