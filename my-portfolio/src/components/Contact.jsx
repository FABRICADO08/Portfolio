import { useState } from 'react'
export default function Contact() {
const [status, setStatus] = useState('idle')
async function submit(event) {
  event.preventDefault()
  const form = event.currentTarget
  const body = new URLSearchParams(new FormData(form)).toString()
  setStatus('sending')
  try {
    const response = await fetch('/__forms.html', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body })
    if (!response.ok) throw new Error('Submission failed')
    form.reset()
    setStatus('success')
  } catch { setStatus('error') }
}
return <section id="contact" className="section content-width contact-layout"><div><p className="eyebrow">Start a conversation</p><h2>Let’s discuss your next opportunity.</h2><p className="section-intro">Hiring for junior software development, cyber security or technical support in South Africa? Get in touch to discuss my background, project work and suitability for your team.</p><a href="mailto:anelefabricado@gmail.com">anelefabricado@gmail.com</a><p className="muted">My CV is available on request.</p><a href="https://www.linkedin.com/in/simbela-anele-2202b9349">Connect on LinkedIn ↗</a></div>
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit}>
<input type="hidden" name="form-name" value="contact" /><p hidden><label>Leave this blank<input name="bot-field" /></label></p>
<label htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" required maxLength={120} />
<label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} />
<label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows={5} required maxLength={5000} />
<p className="muted text-sm">Your details are used to respond to your enquiry. Please avoid sending sensitive personal information.</p>
<button className="button primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}</button>
<p role="status" aria-live="polite">{status === 'success' && 'Thank you. Your message has been submitted.'}</p>
{status === 'error' && <p role="alert">Your message could not be sent. Please try again or email me directly.</p>}
</form></section>
}
