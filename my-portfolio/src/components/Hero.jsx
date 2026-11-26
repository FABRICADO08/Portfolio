import { Link } from 'react-router-dom'
import { ArrowDown, ArrowRight, Mail } from 'lucide-react'
import TechIcon from './TechIcons'
import { techStrip } from '../data/portfolioData'

export default function Hero() {
  return (
    <section className="d-hero" aria-labelledby="hero-title">
      <div className="d-hero-bg" aria-hidden="true">
        <span className="d-hero-glass" />
        <span className="d-hero-streak d-hero-streak-a" />
        <span className="d-hero-streak d-hero-streak-b" />
      </div>
      <div className="content-width d-hero-grid">
        <div className="d-hero-copy">
          <p className="d-kicker">Innovate <i /> Build <i /> Transform</p>
          <h1 id="hero-title">
            Building Smart<br />Solutions with <span>Mendix &amp; React</span>
          </h1>
          <p className="d-hero-sub">
            BSc Computer Science &amp; Physics Graduate | Mendix Low-Code Developer | React Developer | Azure Certified
          </p>
          <div className="actions">
            <Link to="/projects" className="button primary">View My Projects <ArrowRight size={16} aria-hidden="true" /></Link>
            <Link to="/contact" className="button secondary"><Mail size={16} aria-hidden="true" /> Let’s Connect</Link>
          </div>
        </div>
        <figure className="d-portrait">
          <img
            src="/img/ANELE.Simbela.profile.png"
            alt="Portrait of Anele Simbela"
            width="548"
            height="455"
            fetchPriority="high"
          />
          <a className="d-scroll" href="#featured-projects" aria-label="Scroll to featured projects"><ArrowDown size={18} aria-hidden="true" /></a>
        </figure>
        <p className="d-tagline" aria-hidden="true">Turning Ideas<br /><span>into Impact</span></p>
      </div>
      <div className="content-width">
        <ul className="d-tech-strip" aria-label="Core technologies">
          {techStrip.map((tech) => (
            <li key={tech.id}>
              <TechIcon name={tech.id} />
              <span><strong>{tech.name}</strong><small>{tech.note}</small></span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
