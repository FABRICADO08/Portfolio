
import { NavLink } from 'react-router-dom';
export default function Navbar() {
return (
<header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur z-50">
<nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
   <div className="mx-auto h-20 w-20 overflow-hidden rounded-full shadow-xl">
    <img
        src="/img/ANELE.Simbela.profile.png"

            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-2xl"
    />
    </div>
    <span className="font-bold text-xl mr-90">Anele Simbela</span>

<div className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "hover:text-blue-400 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-blue-400 transition"
          >
            About
          </NavLink>
          <NavLink
            to="/timeline"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "hover:text-blue-400 transition"
            }
          >            
            Timeline
          </NavLink>
          <NavLink
            to="/projects"
            className="hover:text-blue-400 transition"
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className="hover:text-blue-400 transition"
          >
            Skills
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-blue-400 transition"
          >
            
            Contact
          </NavLink>
</div> 
</nav>
</header>
)
}