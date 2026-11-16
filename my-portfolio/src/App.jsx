import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Timeline from './components/TimelineItem'
import AdminDashboard from './components/admin/AdminDashboard'
import { useEffect, useState } from 'react'
import { getUser, handleAuthCallback, onAuthChange } from '@netlify/identity'
import { isPortfolioOwner } from './auth/admin-access.mjs'
import { Routes,Route,Navigate,useLocation } from 'react-router-dom'


export default function App() {
const { pathname } = useLocation()
const [user, setUser] = useState(null)
const [authReady, setAuthReady] = useState(false)
const [authError, setAuthError] = useState('')
useEffect(() => {
  let active = true
  const unsubscribe = onAuthChange((_event, currentUser) => {
    if (active) setUser(currentUser)
  })
  async function restoreSession() {
    try {
      await handleAuthCallback()
      const currentUser = await getUser()
      if (active) setUser(currentUser)
    } catch {
      if (active) setAuthError('Sign-in could not be completed. Please try again.')
    } finally {
      if (active) setAuthReady(true)
    }
  }
  restoreSession()
  return () => { active = false; unsubscribe() }
}, [])
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
            <Route path="/admin" element={<AdminDashboard user={user} authReady={authReady} authError={authError} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
</main>
<Footer isAdmin={isPortfolioOwner(user)} />
</div>
)
}
