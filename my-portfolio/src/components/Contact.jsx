export default function Contact() {
return (
<section id="contact" className="bg-slate-900 py-24">
<div className="max-w-xl mx-auto px-4">
<h2 className="text-3xl font-bold mb-8">Contact Me</h2>
<form name="contact" method="POST" data-netlify="true" className="space-y-4">
<input type="hidden" name="form-name" value="contact" />
<input className="w-full p-3 rounded bg-slate-800" name="name" placeholder="Name" />
<input className="w-full p-3 rounded bg-slate-800" name="email" placeholder="Email" />
<textarea className="w-full p-3 rounded bg-slate-800" name="message" placeholder="Message"></textarea>
<button className="bg-blue-600 px-6 py-3 rounded">Send</button>
</form>
</div>
</section>
)
}