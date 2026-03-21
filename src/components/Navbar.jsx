import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Početna' },
  { to: '/o-stranici', label: 'O stranici' },
  { to: '/oskar', label: 'Oskar' },
  { to: '/oryx', label: 'Oryx' },
  { to: '/zdravlje', label: 'Zdravlje' },
  { to: '/kontakt', label: 'Kontakt' },
]

const linkClass = ({ isActive }) =>
  'text-sm transition-colors ' +
  (isActive ? 'text-white font-medium' : 'text-white/70 hover:text-white')

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-black/70 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <NavLink to="/" className="text-white font-semibold text-lg drop-shadow">
          Naši kućni ljubimci 🐾
        </NavLink>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6 list-none m-0 p-0">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Izbornik"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="12" x2="19" y2="12" />
                <line x1="3" y1="18" x2="19" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden list-none m-0 p-0 border-t border-white/10">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  'block px-6 py-3 text-sm transition-colors ' +
                  (isActive ? 'text-white font-medium' : 'text-white/70 hover:text-white')
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
