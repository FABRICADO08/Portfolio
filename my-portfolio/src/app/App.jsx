import { useEffect } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Timeline from '../components/TimelineItem'

const pageMeta = {
  '/': ['Web & Mendix Developer', 'Anele Simbela is a software developer and Graduate Trainee in South Africa. Explore selected React, Mendix, mobile development and enterprise application work.'],
  '/projects': ['Projects', 'Explore Anele Simbela’s selected software projects, including Android development, React applications and enterprise Mendix solutions.'],
  '/about': ['About', 'Learn about Anele Simbela’s software development background, experience and approach to building practical digital solutions.'],
  '/skills': ['Skills', 'Explore Anele Simbela’s technical skills across Mendix, React, TypeScript, Kotlin, cloud technologies, APIs and agile delivery.'],
  '/contact': ['Contact', 'Get in touch with Anele Simbela about software development opportunities, collaboration and technical work.'],
  '/timeline': ['Experience & Education', 'View Anele Simbela’s professional experience and education timeline.'],
}
const pageHeadings = {
  '/projects': 'Project portfolio',
  '/about': 'About Anele',
  '/skills': 'Technical skills',
  '/contact': 'Contact Anele',
}

function NotFound() {
  return (
    <section className="content-width timeline-page" aria-labelledby="not-found-title">
      <div className="timeline-heading">
        <p className="eyebrow">404 · Page not found</p>
        <h1 id="not-found-title">This page isn’t here.</h1>
        <p>The address may be incorrect, or the page may have moved. Head back to the portfolio home page.</p>
        <Link to="/" className="button primary">Back to home <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  )
}

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    const [title, description] = pageMeta[pathname] || ['Page not found', 'The requested page could not be found. Return to Anele Simbela’s portfolio home page.']
    document.title = `Anele Simbela | ${title} | South Africa`
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.name = 'description'
      document.head.appendChild(tag)
    }
    tag.content = description
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.getElementById('main-content')?.focus()
  }, [pathname])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="main-content">
        {pageHeadings[pathname] && <h1 className="content-width page-title">{pageHeadings[pathname]}</h1>}
        <Routes>
          <Route path="/" element={<><Hero /><Projects /><About /><Skills /><Contact /></>} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
