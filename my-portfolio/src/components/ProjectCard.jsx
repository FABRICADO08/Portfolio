export default function ProjectCard({ image, title, tech, live, github }) {
return (
<div className="bg-slate-800 rounded-xl overflow-hidden">
<img src={image} />
<div className="p-4">
<h3 className="font-bold text-xl mb-2">{title}</h3>
<p className="text-slate-400 mb-4">{tech}</p>
<div className="space-x-4">
<a href={live} className="text-blue-400">Live</a>
<a href={github} className="text-blue-400">GitHub</a>
</div>
</div>
</div>
)
}