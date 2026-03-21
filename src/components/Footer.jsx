import { Link } from 'react-router-dom'

function PawIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <ellipse cx="12" cy="20" rx="6" ry="9" />
      <ellipse cx="26" cy="12" rx="6" ry="9" />
      <ellipse cx="40" cy="12" rx="6" ry="9" />
      <ellipse cx="54" cy="20" rx="6" ry="9" />
      <path d="M32 28c-10 0-20 8-18 20 1.5 9 8 12 18 12s16.5-3 18-12c2-12-8-20-18-20z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--footer-bg)' }}>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex items-center gap-2 font-semibold text-sm" style={{ color: 'var(--accent)', fontFamily: 'var(--heading)' }}>
            <PawIcon />
            Oskar &amp; Oryx
          </div>

          {/* Copyright */}
          <p className="text-xs text-center" style={{ color: 'var(--footer-text)' }}>
            © {new Date().getFullYear()}{' '}
            <a
              href="https://anamsveric.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Oskar &amp; Oryx
            </a>
            {' '}• Sva prava pridržana
          </p>

          {/* Links */}
          <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--footer-text)' }}>
            <Link to="/politika-privatnosti" className="underline underline-offset-2 hover:text-white transition-colors">
              Politika privatnosti
            </Link>
          </div>

        </div>
      </div>
    </footer>
  )
}
