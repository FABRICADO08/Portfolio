import { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'

const fallbackProjects = [
  {
    id: '1',
    image: '/images/project-budget-tracker.png',
    title: 'Budget Tracker',
    tech: 'React, Firebase',
    live: '#',
    github: '#',
  },
  {
    id: '2',
    image: '/images/project-mendix-app.png',
    title: 'Mendix Business App',
    tech: 'Mendix, REST APIs',
    live: '#',
    github: '#',
  },
]

export default function Projects() {
  const [projects, setProjects] = useState(fallbackProjects)

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setProjects(data)
      })
      .catch(() => {})
  }, [])

  return (
    <section id="projects" className="PX-2 pt-30 pb-10 bg-gray-950 text-gray-100">
      <h2 className="text-3xl font-bold mb-8 flex justify-center text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            tech={project.tech}
            live={project.live}
            github={project.github}
          />
        ))}
      </div>
    </section>
  )
}
