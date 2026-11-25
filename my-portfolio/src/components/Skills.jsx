import { skills } from '../data/portfolioData'
export default function Skills() {
  return (
    <section className="section"><div className="content-width">
      <p className="eyebrow">Technical toolkit</p><h2>Technologies I work with</h2>
      <p className="section-intro">A practical toolkit spanning application development, low-code platforms, cloud services and collaborative delivery.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{skills.map((skill) => <div key={skill} className="bg-slate-800 p-4 rounded-lg text-center">{skill}</div>)}</div>
    </div></section>
  )
}
