import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUp, Github, Linkedin, Mail, Send } from 'lucide-react'
import { certifications, featuredCertificationIds, profile, skillLevels } from '../data/portfolioData'

const featuredCerts = featuredCertificationIds
  .map((id) => certifications.find((cert) => cert.id === id))
  .filter(Boolean)

export default function HomePanels() {
  return (
    <section className="content-width d-panels" aria-label="Profile overview">
      <article className="d-panel d-about" aria-labelledby="home-about-title">
        <h2 id="home-about-title" className="d-title">About Me</h2>
        <p>
          A passionate Software Developer with a strong foundation in Computer Science and Physics,
          specialising in Mendix, Java, React and Azure. I thrive on solving complex problems and building
          scalable solutions.
        </p>
        <Link to="/about" className="d-pill-link">Learn More <ArrowRight size={14} aria-hidden="true" /></Link>
        <span className="d-about-art" aria-hidden="true" />
      </article>

      <article className="d-panel" aria-labelledby="home-skills-title">
        <h2 id="home-skills-title" className="d-title">My Skills</h2>
        <ul className="d-skill-bars">
          {skillLevels.map((skill) => (
            <li key={skill.name}>
              <span>{skill.name}</span>
              <div
                className="d-bar"
                role="progressbar"
                aria-label={`${skill.name} proficiency`}
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
              ><i style={{ width: `${skill.level}%` }} /></div>
              <b>{skill.level}%</b>
            </li>
          ))}
        </ul>
      </article>

      <article className="d-panel" aria-labelledby="home-certs-title">
        <h2 id="home-certs-title" className="d-title">Certifications</h2>
        <ul className="d-cert-list">
          {featuredCerts.map((cert) => (
            <li key={cert.id}>
              <img src={cert.image} alt="" loading="lazy" width="36" height="36" />
              <span>{cert.label}{cert.code && <><br />{cert.code}</>}</span>
            </li>
          ))}
        </ul>
      </article>

      <article className="d-panel d-contact" aria-labelledby="home-contact-title">
        <h2 id="home-contact-title" className="d-title">Get In Touch</h2>
        <div className="d-contact-row">
          <Mail size={44} strokeWidth={1.4} aria-hidden="true" />
          <p>Let’s collaborate on your next big idea.</p>
        </div>
        <Link to="/contact" className="button primary d-send">Send Message <Send size={15} aria-hidden="true" /></Link>
        <div className="d-socials">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)"><Github size={22} /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)"><Linkedin size={22} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email Anele"><Mail size={22} /></a>
          <button type="button" className="d-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowUp size={20} /></button>
        </div>
      </article>
    </section>
  )
}
