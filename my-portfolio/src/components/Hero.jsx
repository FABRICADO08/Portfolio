import About from './components/About'
import Contact from './components/Contact'
export default function Hero() {
return (
<section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
<h1 className="text-5xl font-extrabold mb-4">Web & Low‑Code Developer</h1>
<p className="max-w-xl text-slate-300 mb-8">
I build scalable, secure, and user‑friendly applications using modern web and low‑code technologies.
</p>
<div className="space-x-4">
<a href="#projects" className="bg-blue-600 px-6 py-3 rounded-lg">View Projects</a>
<a href="#contact" className="border border-blue-600 px-6 py-3 rounded-lg">Contact Me</a>

</div>
</section>
)
}