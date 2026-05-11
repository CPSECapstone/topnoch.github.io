import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/features-list', label: 'Features List' },
  { to: '/install', label: 'Install Guide' },
  { to: '/feedback', label: 'Feedback' },
  { to: '/eula', label: 'EULA' },
  { to: '/privacy-policy', label: 'Privacy' },
  // { to: '/developer', label: 'Developer Docs' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">NOCH</Link>
        <button className="navbar-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? '✕' : '☰'}
        </button>
        <ul className={`navbar-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={location.pathname === l.to ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
