import { usePortfolioData } from '../context/PortfolioDataContext'

function getCertificationStatus(cert) {
  if (cert.noExpiry || !cert.expiryDate) return { label: 'No expiry', className: 'neutral' }
  const expiry = new Date(`${cert.expiryDate}T23:59:59`)
  if (Number.isNaN(expiry.getTime())) return { label: 'Date not set', className: 'neutral' }
  const remaining = expiry.getTime() - Date.now()
  if (remaining < 0) return { label: 'Expired', className: 'expired' }
  if (remaining <= 30 * 24 * 60 * 60 * 1000) return { label: 'Expiring soon', className: 'warning' }
  return { label: 'Active', className: 'active' }
}

function formatDate(value) {
  if (!value) return ''
  const date = new Date(`${value}T00:00:00`)
  return Number.isNaN(date.getTime()) ? value : new Intl.DateTimeFormat('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' }).format(date)
}

export default function Certifications() {
  const { certifications } = usePortfolioData()

  return (
    <section id="certifications" className="timeline-page content-width" aria-label="Certifications">
      <div className="certification-grid">
        {certifications.map((cert) => {
          const status = getCertificationStatus(cert)
          return (
            <article className="certification-card" key={cert.id}>
              {cert.image ? <img src={cert.image} alt="" loading="lazy" width="76" height="76" /> : <div className="certification-image-placeholder" aria-hidden="true">✦</div>}
              <div>
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
                {(cert.issuedAt || cert.expiryDate) && <p className="certification-dates">
                  {cert.issuedAt && <span>Issued: {formatDate(cert.issuedAt)}</span>}
                  {cert.expiryDate && <span>Expires: {formatDate(cert.expiryDate)}</span>}
                </p>}
                <span className={`certification-status ${status.className}`}>{status.label}</span>
                {cert.credentialUrl && <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">View credential ↗</a>}
              </div>
            </article>
          )
        })}
      </div>
      {!certifications.length && <p className="admin-muted">Certifications will appear here when published.</p>}
    </section>
  )
}
