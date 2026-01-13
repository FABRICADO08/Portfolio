import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Timeline from './components/TimelineItem'
import { Routes,Route,Navigate } from 'react-router-dom'


export default function App() {
return (
<div>
<Navbar />
        <main><Routes>
            <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Timeline/>
                <Contact />
                </>
            }
            />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
</main>
<Footer />
</div>
)
}