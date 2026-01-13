export default function Navbar() {
return (
<header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur z-50">
<nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
<span className="font-bold text-xl">AFS</span>
<div className="space-x-6">
<a href="#about" className="hover:text-blue-400">About</a>
<a href="#projects" className="hover:text-blue-400">Projects</a>
<a href="#contact" className="hover:text-blue-400">Contact</a>
</div>
</nav>
</header>
)
}