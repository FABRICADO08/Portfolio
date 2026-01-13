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
<div className="min-h-screen flex flex-col">

        <Navbar />
        
        <main className="flex-grow"><Routes>
            <Route
            path="/"
            element={
              <>
                <Hero />
                
                </>
            }
            />
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