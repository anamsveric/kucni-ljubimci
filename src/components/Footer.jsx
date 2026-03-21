import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-auto" style={{ background: 'rgba(0,0,0,0.25)' }}>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Branding */}
          <div className="text-center md:text-left">
            <p className="text-white font-semibold mb-1">Naši kućni ljubimci 🐾</p>
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()}{' '}
              <a
                href="https://anamsveric.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/90 transition-colors underline underline-offset-2"
              >
                Anamaria Sveric
              </a>
              . Sva prava pridržana.
            </p>
          </div>

          {/* Navigacija */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            <Link to="/" className="text-xs text-white/50 hover:text-white transition-colors">Početna</Link>
            <Link to="/o-stranici" className="text-xs text-white/50 hover:text-white transition-colors">O stranici</Link>
            <Link to="/oskar" className="text-xs text-white/50 hover:text-white transition-colors">Oskar</Link>
            <Link to="/oryx" className="text-xs text-white/50 hover:text-white transition-colors">Oryx</Link>
            <Link to="/zdravlje" className="text-xs text-white/50 hover:text-white transition-colors">Zdravlje</Link>
            <Link to="/kontakt" className="text-xs text-white/50 hover:text-white transition-colors">Kontakt</Link>
          </nav>

          {/* Legal */}
          <div className="flex flex-col items-center md:items-end gap-1">
            <Link to="/politika-privatnosti" className="text-xs text-white/50 hover:text-white transition-colors">
              Politika privatnosti
            </Link>
            <p className="text-xs text-white/30">Napravljeno s React + Tailwind</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
