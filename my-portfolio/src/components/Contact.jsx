export default function Contact() {
  const email = 'anelefabricado@gmail.com'
  const subject = encodeURIComponent('Portfolio enquiry')
  const body = encodeURIComponent('Hello Anele,\n\nI would like to discuss a professional opportunity or collaboration with you.')
  return (
    <section id="contact" className="section content-width contact-layout" aria-labelledby="contact-heading">
      <div>
        <p className="eyebrow">Contact</p>
        <h2 id="contact-heading">Let’s discuss how I can contribute.</h2>
        <p className="section-intro">For enquiries about software development opportunities, enterprise application delivery or professional collaboration, please get in touch. I’d welcome the opportunity to discuss my experience and how I could contribute to your team.</p>
        <a href={`mailto:${email}`}>{email}</a>
        <p className="muted">Curriculum vitae available on request.</p>
        <a href="https://www.linkedin.com/in/anele-simbela-2202b9349" target="_blank" rel="noopener noreferrer">Connect on LinkedIn ↗</a>
      </div>
      <div className="contact-card">
        <h3>Get in touch</h3>
        <p>Send an email to start a conversation about an opportunity, project or collaboration.</p>
        <a className="button primary" href={`mailto:${email}?subject=${subject}&body=${body}`}>Email Anele</a>
      </div>
    </section>
  )
}
