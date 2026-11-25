import { NavLink } from 'react-router-dom'

const links = [
  ['/', 'Home'],
  ['/projects', 'Projects'],
  ['/about', 'About'],
  ['/skills', 'Skills'],
  ['/timeline', 'Experience'],
  ['/contact', 'Contact'],
]

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="content-width navigation" aria-label="Main navigation">
        <NavLink to="/" className="brand" aria-label="Anele Simbela home">
          <span
            className="brand-monogram"
            aria-hidden="true"
            style={{
              width: 48,
              height: 48,
              padding: 2,
              border: '2px solid #d9e7f5',
              background: 'linear-gradient(145deg, #ffffff, #8b9bad 35%, #f5fbff 58%, #60758d)',
              boxShadow: '0 0 0 1px rgba(105, 184, 255, .45), 0 5px 20px rgba(0, 0, 0, .35)',
            }}
          >
            <img
              src="/img/ANELE.Simbela.profile.png"
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </span>
          <span className="brand-copy"><strong>Anele Simbela</strong><small>Software Developer</small></span>
        </NavLink>
        <div className="nav-links">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'}>
              {label}
            </NavLink>
          ))}
        </div>
        <NavLink to="/contact" className="nav-cta">Let’s talk <span aria-hidden="true">↗</span></NavLink>
      </nav>
    </header>
  )
}
