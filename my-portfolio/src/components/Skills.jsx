import { useState, useEffect } from 'react'

const fallbackSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Mendix', 'Azure', 'Docker', 'PostgreSQL', 'Git', 'GitHub']

export default function Skills() {
  const [skills, setSkills] = useState(fallbackSkills)

  useEffect(() => {
    fetch('/api/skills')
      .then((res) => { if (!res.ok) throw new Error('Skills unavailable'); return res.json() })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setSkills(data)
      })
      .catch(() => {})
  }, [])

  return (
    <section className="section">
      <div className="content-width">
        <p className="eyebrow">Technical toolkit</p><h2>Technologies I work with</h2><p className="section-intro">Web development: React, TypeScript, JavaScript, HTML and CSS. Application platforms and infrastructure: Mendix, Azure, Docker and PostgreSQL. These describe my technical experience, rather than proficiency ratings.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill} className="bg-slate-800 p-4 rounded-lg text-center">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
