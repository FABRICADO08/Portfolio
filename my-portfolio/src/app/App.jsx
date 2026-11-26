import { useEffect } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'
import HomePanels from '../components/HomePanels'
import Certifications from '../components/Certifications'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import Timeline from '../components/TimelineItem'
import AdminPage from '../components/AdminPage'

const SITE_URL = 'https://portfolio-27b98.web.app'

function setMeta(attribute, key, content) {
  let tag = document.querySelector(`meta[${attribute}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

const pageMeta = {
  '/': ['Web & Mendix Developer', 'Anele Simbela is a software developer and Graduate Trainee in South Africa. Explore selected React, Mendix, mobile development and enterprise application work.'],
  '/projects': ['Projects', 'Explore Anele Simbela’s selected software projects, including Android development, React applications and enterprise Mendix solutions.'],
  '/about': ['About', 'Learn about Anele Simbela’s software development background, experience and approach to building practical digital solutions.'],
  '/skills': ['Skills', 'Explore Anele Simbela’s technical skills across Mendix, React, TypeScript, Kotlin, cloud technologies, APIs and agile delivery.'],
  '/certifications': ['Certifications', 'Microsoft Azure, CompTIA Security+, Power Platform and Mendix credentials held by Anele Simbela.'],
  '/contact': ['Contact', 'Get in touch with Anele Simbela about software development opportunities, collaboration and technical work.'],
  '/timeline': ['Experience & Education', 'View Anele Simbela’s professional experience and education timeline.'],
  '/admin': ['Admin', 'Private portfolio content management.'],
}
const pageHeroes = {
  '/about': { kicker: 'About me', title: 'About', accent: 'Anele', sub: 'Software developer, problem solver and lifelong learner from South Africa.' },
  '/projects': { kicker: 'Selected work', title: 'Project', accent: 'portfolio', sub: 'Mobile, web and enterprise low-code solutions built with modern technologies.' },
  '/skills': { kicker: 'Tools of the trade', title: 'Technical', accent: 'skills', sub: 'The tools and technologies I use to design, build and support digital solutions.' },
  '/certifications': { kicker: 'Credentials', title: 'Certifications', accent: '& development', sub: 'Selected credentials and continuing professional development.' },
  '/timeline': { kicker: 'Career journey', title: 'Experience &', accent: 'education', sub: 'A record of my professional experience, academic background and ongoing development.' },
  '/contact': { kicker: 'Get in touch', title: 'Contact', accent: 'Anele', sub: 'Let’s collaborate on your next big idea.' },
}

function NotFound() {
  return (
    <>
      <PageHero id="not-found-title" kicker="404 · Page not found" title="This page isn’t" accent="here.">
        The address may be incorrect, or the page may have moved. Head back to the portfolio home page.
      </PageHero>
      <section className="content-width not-found-actions">
        <Link to="/" className="button primary">Back to home <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  )
}

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    const isKnownPage = Object.hasOwn(pageMeta, pathname)
    const [title, description] = pageMeta[pathname] || ['Page not found', 'The requested page could not be found. Return to Anele Simbela’s portfolio home page.']
    const pageTitle = `Anele Simbela | ${title} | South Africa`
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`
    document.title = pageTitle
    setMeta('name', 'description', description)
    setMeta('name', 'robots', pathname === '/admin' ? 'noindex, nofollow' : isKnownPage ? 'index, follow' : 'noindex, follow')
    setMeta('property', 'og:title', pageTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('name', 'twitter:title', pageTitle)
    setMeta('name', 'twitter:description', description)
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.href = canonicalUrl
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.getElementById('main-content')?.focus()
  }, [pathname])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="main-content">
        {pageHeroes[pathname] && (
          <PageHero kicker={pageHeroes[pathname].kicker} title={pageHeroes[pathname].title} accent={pageHeroes[pathname].accent}>
            {pageHeroes[pathname].sub}
          </PageHero>
        )}
        <Routes>
          <Route path="/" element={<><Hero /><FeaturedProjects /><HomePanels /></>} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
