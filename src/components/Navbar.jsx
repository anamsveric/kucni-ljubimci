import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Početna' },
  { to: '/o-stranici', label: 'O nama' },
  { to: '/oskar', label: 'Oskar' },
  { to: '/oryx', label: 'Oryx' },
  { to: '/zdravlje', label: 'Zdravlje' },
  { to: '/kontakt', label: 'Kontakt' },
]

function PawIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <ellipse cx="12" cy="20" rx="6" ry="9" />
      <ellipse cx="26" cy="12" rx="6" ry="9" />
      <ellipse cx="40" cy="12" rx="6" ry="9" />
      <ellipse cx="54" cy="20" rx="6" ry="9" />
      <path d="M32 28c-10 0-20 8-18 20 1.5 9 8 12 18 12s16.5-3 18-12c2-12-8-20-18-20z" />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
      style={{ background: 'var(--nav-bg)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 font-semibold text-base"
          style={{ color: 'var(--accent)', fontFamily: 'var(--heading)' }}
        >
          <PawIcon />
          Oskar &amp; Oryx
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-1 list-none m-0 p-0">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  'text-sm px-4 py-1.5 rounded-full transition-all duration-200 font-medium ' +
                  (isActive
                    ? 'text-white'
                    : 'hover:bg-black/5')
                }
                style={({ isActive }) =>
                  isActive
                    ? { background: 'var(--accent)', color: '#fff' }
                    : { color: 'var(--text-h)' }
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg cursor-pointer transition-colors hover:bg-black/5"
          style={{ color: 'var(--text-h)' }}
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
        <ul className="md:hidden list-none m-0 p-3 flex flex-col gap-1" style={{ borderTop: '1px solid var(--border)', background: 'var(--nav-bg)' }}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  'block px-4 py-2.5 text-sm rounded-xl transition-colors font-medium ' +
                  (isActive ? 'text-white' : '')
                }
                style={({ isActive }) =>
                  isActive
                    ? { background: 'var(--accent)', color: '#fff' }
                    : { color: 'var(--text-h)' }
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
