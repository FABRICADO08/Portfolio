import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Timeline from './components/TimelineItem'

const pageMeta = {
  '/': {
    title: 'Web & Mendix Developer',
    description: 'Anele Simbela is a software developer and Graduate Trainee in South Africa. Explore selected React, Mendix, mobile development and enterprise application work.',
  },
  '/projects': {
    title: 'Projects',
    description: 'Explore Anele Simbela’s selected software projects, including Android development, React applications and enterprise Mendix solutions.',
  },
  '/about': {
    title: 'About',
    description: 'Learn about Anele Simbela’s software development background, experience and approach to building practical digital solutions.',
  },
  '/skills': {
    title: 'Skills',
    description: 'Explore Anele Simbela’s technical skills across Mendix, React, TypeScript, Kotlin, cloud technologies, APIs and agile delivery.',
  },
  '/contact': {
    title: 'Contact',
    description: 'Get in touch with Anele Simbela about software development opportunities, collaboration and technical work.',
  },
  '/timeline': {
    title: 'Experience & Education',
    description: 'View Anele Simbela’s professional experience and education timeline.',
  },
}

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    const page = pageMeta[pathname] || { title: 'Portfolio', description: 'Explore Anele Simbela’s software development portfolio.' }
    document.title = `Anele Simbela | ${page.title} | South Africa`

    let descriptionTag = document.querySelector('meta[name="description"]')
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.setAttribute('name', 'description')
      document.head.appendChild(descriptionTag)
    }
    descriptionTag.setAttribute('content', page.description)

    window.scrollTo({ top: 0, behavior: 'instant' })
    document.getElementById('main-content')?.focus()
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-grow">
        {({ '/projects': 'Project portfolio', '/about': 'About Anele', '/skills': 'Technical skills', '/contact': 'Contact Anele' })[pathname] && (
          <h1 className="content-width page-title">{({ '/projects': 'Project portfolio', '/about': 'About Anele', '/skills': 'Technical skills', '/contact': 'Contact Anele' })[pathname]}</h1>
        )}
        <Routes>
          <Route path="/" element={<><Hero /><Projects /><About /><Skills /><Contact /></>} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
