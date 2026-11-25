import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section id="about" className="section content-width about-section" aria-labelledby="about-heading">
      <div className="about-kicker">
        <p className="eyebrow">Professional profile</p>
        <span className="about-number">01 <i /> ABOUT</span>
      </div>
      <div className="about-grid">
        <h2 id="about-heading">Curious by nature.<br /><span>Developer by choice.</span></h2>
        <div className="reading-copy">
          <p>I’m Anele Simbela, a software developer from Bizana in the Eastern Cape, South Africa. I hold a BSc in Computer Science and Physics from the University of Fort Hare and am currently pursuing an Honours degree in Computing at the University of South Africa (UNISA).</p>
          <p>My professional experience includes enterprise Mendix application development and modern frontend technologies. I have contributed to requirements analysis, application development, REST API integrations, testing, debugging and technical documentation.</p>
          <p>I value clear communication, maintainable solutions and thoughtful user experiences. I approach software development with a focus on understanding business needs and translating them into reliable, practical applications.</p>
          <Link className="text-link" to="/timeline">View my experience and education <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  )
}
