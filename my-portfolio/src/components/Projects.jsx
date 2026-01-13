import ProjectCard from './ProjectCard'


export default function Projects() {
return (
<section id="projects" className="max-w-6xl mx-auto py-24 px-4">
<h2 className="text-3xl font-bold mb-8">Projects</h2>
<div className="grid md:grid-cols-2 gap-8">
<ProjectCard
image="/images/project-budget-tracker.png"
title="Budget Tracker"
tech="React, Firebase"
live="#"
github="#"
/>
<ProjectCard
image="/images/project-mendix-app.png"
title="Mendix Business App"
tech="Mendix, REST APIs"
live="#"
github="#"
/>
</div>
</section>
)
}