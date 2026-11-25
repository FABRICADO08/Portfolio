export default function About() {
  return (
    <section id="about" className="section content-width about-section" aria-labelledby="about-heading">
      <div className="about-kicker">
        <p className="eyebrow">A little about me</p>
        <span className="about-number">01 <i /> ABOUT</span>
      </div>
      <div className="about-grid">
        <h2 id="about-heading">Curious by nature.<br /><span>Developer by choice.</span></h2>
        <div className="reading-copy">
          <p>I’m Anele Simbela, a software developer from Bizana in the Eastern Cape. I graduated from the University of Fort Hare with a BSc in Computer Science and Physics, and I’m currently studying towards Honours in Computing at UNISA.</p>
          <p>My experience spans enterprise Mendix development and modern frontend technologies. I’ve contributed to requirements analysis, application development, integrations, testing, debugging and technical documentation.</p>
          <p>I’m motivated by practical problem-solving, thoughtful user experiences and building software that makes work simpler.</p>
          <a className="text-link" href="/timeline">Explore my journey <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}
