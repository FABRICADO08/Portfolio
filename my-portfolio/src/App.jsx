import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Timeline from './components/TimelineItem'
import AdminDashboard from './components/admin/AdminDashboard'
import { useEffect } from 'react'
import { Routes,Route,Navigate,useLocation } from 'react-router-dom'


export default function App() {
const { pathname } = useLocation()
useEffect(() => {
  const names = { '/': 'Web & Mendix Developer', '/projects': 'Projects', '/about': 'About', '/skills': 'Skills', '/contact': 'Contact', '/timeline': 'Experience & Education', '/admin': 'Administration' }
  document.title = `Anele Simbela | ${names[pathname] || 'Portfolio'} | South Africa`
  window.scrollTo(0, 0)
  document.getElementById('main-content')?.focus()
}, [pathname])
return (
<div className="min-h-screen flex flex-col">

        <a className="skip-link" href="#main-content">Skip to content</a><Navbar />

        <main id="main-content" tabIndex={-1} className="flex-grow">{({'/projects':'Project portfolio','/about':'About Anele','/skills':'Technical skills','/contact':'Contact Anele'})[pathname] && <h1 className="content-width page-title">{({'/projects':'Project portfolio','/about':'About Anele','/skills':'Technical skills','/contact':'Contact Anele'})[pathname]}</h1>}<Routes>
            <Route
            path="/"
            element={
              <>
                <Hero /><Projects /><About /><Skills /><Contact />

                </>
            }
            />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
</main>
<Footer />
</div>
)
}
