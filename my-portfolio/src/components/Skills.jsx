const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Mendix', 'REST APIs']


export default function Skills() {
return (
<section className="bg-slate-900 py-24">
<div className="max-w-6xl mx-auto px-4">
<h2 className="text-3xl font-bold mb-8">Skills</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
{skills.map(skill => (
<div key={skill} className="bg-slate-800 p-4 rounded-lg text-center">
{skill}
</div>
))}
</div>
</div>
</section>
)
}