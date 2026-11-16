import { NavLink } from 'react-router-dom'
export default function Navbar() {
return <header className="site-header"><nav className="content-width navigation" aria-label="Main navigation"><NavLink to="/" className="brand" aria-label="Anele Simbela home">AS<span aria-hidden="true">.</span><span className="brand-name">Anele Simbela</span></NavLink><div className="nav-links">{[['/', 'Home'], ['/projects', 'Projects'], ['/about', 'About'], ['/skills', 'Skills'], ['/timeline', 'Experience'], ['/contact', 'Contact']].map(([to,label])=><NavLink key={to} to={to} end={to==='/'}>{label}</NavLink>)}</div></nav></header>
}
