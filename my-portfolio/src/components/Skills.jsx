import { skills } from '../data/portfolioData'

const groups = [
  { title: 'Application development', items: ['Mendix', 'Java', 'React', 'JavaScript', 'TypeScript', 'Kotlin', 'Jetpack Compose'] },
  { title: 'Platforms & integration', items: ['Microsoft Azure', 'REST APIs', 'PostgreSQL', 'Docker'] },
  { title: 'Engineering practice', items: ['HTML', 'CSS', 'Git', 'Agile Project Management'] },
]

export default function Skills() {
  return (
    <section id="skills" className="section content-width skills-section" aria-labelledby="skills-heading">
      <div className="section-heading-row">
        <div><p className="eyebrow">Tools of the trade</p><h2 id="skills-heading">My technical toolkit</h2><p className="section-intro">A growing set of tools and technologies I use to design, build and support digital solutions.</p></div>
        <span className="about-number">02 <i /> CAPABILITIES</span>
      </div>
      <div className="skill-groups">
        {groups.map((group, index) => (
          <article className="skill-group" key={group.title}>
            <span className="skill-index">0{index + 1}</span>
            <h3>{group.title}</h3>
            <ul>{group.items.filter((item) => skills.includes(item)).map((item) => <li key={item}>{item}<span aria-hidden="true">↗</span></li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  )
}
