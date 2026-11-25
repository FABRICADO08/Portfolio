import { Link } from 'react-router-dom'

const technologies = ['Mendix', 'React', 'Java', 'Azure', 'JavaScript', 'TypeScript', 'PostgreSQL']

export default function Hero() {
  return (
    <section className="hero content-width" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Software developer · South Africa</p>
        <p className="hero-name">Hello, I’m Anele Simbela</p>
        <h1 id="hero-title">
          I build digital
          <span> experiences that work.</span>
        </h1>
        <p className="intro">
          I develop enterprise applications and digital solutions, with a focus on Mendix,
          Java and React. With a foundation in Computer Science and Physics, I bring a
          structured, analytical approach to turning business requirements into reliable software.
        </p>
        <p className="hero-subcopy">
          Graduate Trainee at Mercedes-Benz South Africa · BSc graduate · Pursuing an Honours degree in Computing at UNISA
        </p>
        <div className="actions">
          <Link to="/projects" className="button primary">Explore my work <span aria-hidden="true">↗</span></Link>
          <a href="/Anele_Simbela_CV.pdf" className="button secondary" download="Anele_Simbela_CV.pdf">
            Download CV <span aria-hidden="true">↓</span>
          </a>
          <Link to="/contact" className="button secondary">Contact me</Link>
        </div>
        <ul className="hero-stack" aria-label="Core technologies">
          {technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </div>
      <figure className="portrait">
        <div className="portrait-frame">
          <img
            src="/img/ANELE.Simbela.profile.png"
            alt="Portrait of Anele Simbela"
            width="480"
            height="540"
            fetchPriority="high"
          />
          <span className="portrait-orbit portrait-orbit-one" aria-hidden="true" />
          <span className="portrait-orbit portrait-orbit-two" aria-hidden="true" />
        </div>
        <figcaption><span className="portrait-caption-dot" /> Building, learning and improving — one solution at a time.</figcaption>
      </figure>
      <div className="hero-scroll" aria-hidden="true"><span /> Scroll to explore</div>
    </section>
  )
}
