import { Link } from 'react-router-dom'
import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="site-footer content-width">
      <Link to="/" className="footer-brand" aria-label="Anele Simbela home">
        <span className="brand-monogram" aria-hidden="true"><img src="/img/ANELE.Simbela.profile.png" alt="" /></span>
        <strong>{profile.name}</strong>
        <span className="footer-divider" aria-hidden="true">|</span>
        <small>Software Developer &amp; Innovator</small>
      </Link>
      <p className="footer-motto" aria-hidden="true">Build <i /> Learn <i /> Grow</p>
      <p className="footer-copy">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  )
}
