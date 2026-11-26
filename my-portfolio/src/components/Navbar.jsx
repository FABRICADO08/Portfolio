import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Download, Home, Moon, Sun } from 'lucide-react'
import { certifications, education, experience, profile, projects, skills } from '../data/portfolioData'
import { generateCV } from '../utils/generateCV'

const links = [
  ['/about', 'About'],
  ['/projects', 'Projects'],
  ['/skills', 'Skills'],
  ['/certifications', 'Certifications'],
  ['/timeline', 'Experience'],
  ['/contact', 'Contact'],
]

function readTheme() {
  try {
    return localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

export default function Navbar() {
  const [theme, setTheme] = useState(readTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme])

  const handleDownloadCV = () => generateCV({ profile, experience, education, projects, skills, certifications })

  return (
    <header className="site-header">
      <nav className="content-width navigation" aria-label="Main navigation">
        <NavLink to="/" className="brand" aria-label="Anele Simbela home">
          <span className="brand-monogram" aria-hidden="true">
            <img src="/img/ANELE.Simbela.profile.png" alt="" />
          </span>
          <span className="brand-copy"><strong>{profile.name}</strong><small>Software Developer</small></span>
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" end className="nav-home"><Home size={16} aria-hidden="true" /> Home</NavLink>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to}>{label}</NavLink>
          ))}
        </div>
        <div className="nav-actions">
          <button type="button" className="nav-cta" onClick={handleDownloadCV}><Download size={16} aria-hidden="true" /> Download CV</button>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Moon size={20} aria-hidden="true" /> : <Sun size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  )
}
