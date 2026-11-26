import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="site-footer content-width">
      <p>© {new Date().getFullYear()} Anele Simbela · South Africa</p>
      <nav aria-label="Professional links">
        <a href={profile.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </nav>
    </footer>
  )
}
