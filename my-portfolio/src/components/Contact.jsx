export default function Contact() {
  const email = 'anelefabricado@gmail.com'
  const subject = encodeURIComponent('Portfolio enquiry')
  const body = encodeURIComponent('Hi Anele,\n\nI would like to get in touch regarding...')
  return (
    <section id="contact" className="section content-width contact-layout">
      <div><p className="eyebrow">Start a conversation</p><h2>Let’s discuss your next opportunity.</h2><p className="section-intro">Hiring for software development, low-code development or a related technical role in South Africa? Get in touch to discuss my background, project work and suitability for your team.</p><a href={`mailto:${email}`}>{email}</a><p className="muted">My CV is available on request.</p><a href="https://www.linkedin.com/in/anele-simbela-2202b9349" target="_blank" rel="noopener noreferrer">Connect on LinkedIn ↗</a></div>
      <div className="contact-card"><h3>Send me an email</h3><p>Choose your email app to write a message directly. No form service, database or server is used.</p><a className="button primary" href={`mailto:${email}?subject=${subject}&body=${body}`}>Email Anele</a></div>
    </section>
  )
}
