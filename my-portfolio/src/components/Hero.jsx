import { Link } from 'react-router-dom'
export default function Hero() {
  return <section className="hero content-width" aria-labelledby="hero-title">
    <div><p className="eyebrow">Bizana, Eastern Cape · South Africa</p>
      <p className="hero-name">Anele Simbela</p>
      <h1 id="hero-title">Web &amp; Mendix developer.<br /><span>Practical problems. Thoughtful solutions.</span></h1>
      <p className="intro">I’m a Graduate Trainee at Mercedes-Benz South Africa and a BSc Computer Science and Physics graduate. I’m currently studying towards Honours in Computing at UNISA. I use React, TypeScript and Mendix to develop web applications, with experience in PostgreSQL, Azure and Docker.</p>
      <p className="muted">Exploring junior software developer opportunities, with interests in cyber security and technical support.</p>
      <div className="actions"><Link to="/projects" className="button primary">Explore projects <span aria-hidden="true">↗</span></Link><Link to="/contact" className="button secondary">Get in touch</Link></div>
    </div>
    <figure className="portrait"><img src="/img/ANELE.Simbela.profile.png" alt="Anele Simbela" width="480" height="540" /><figcaption>BSc graduate · Honours in Computing at UNISA</figcaption></figure>
  </section>
}
