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
          <span className="brand-monogram" aria-hidden="true">AS</span>
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
