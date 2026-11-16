export default function Footer({ isAdmin = false }) {
return <footer className="site-footer content-width"><p>© {new Date().getFullYear()} Anele Simbela · South Africa</p><div><a href="https://www.linkedin.com/in/simbela-anele-2202b9349">LinkedIn</a><a href="mailto:anelefabricado@gmail.com">Email Anele</a>{isAdmin && <a href="/admin">Admin</a>}</div></footer>
}
