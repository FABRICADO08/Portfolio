import ProjectCard from './ProjectCard'


export default function Projects() {
return (
<section id="projects" className="PX-2 pt-30 pb-10 bg-gray-950 text-gray-100">
<h2 className="text-3xl font-bold mb-8 flex justify-center text-center">Projects</h2>
<div className="grid md:grid-cols-3 gap-8">
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