import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10">
      <div className="max-w-281.5 mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-xs text-white/60">
          © {new Date().getFullYear()}{' '}
          <a
            href="https://anamsveric.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Anamaria Sveric
          </a>
          . Sva prava pridržana.
        </p>
        <p className="text-xs text-white/60">Napravljeno s React + Tailwind</p>
        <Link to="/politika-privatnosti" className="text-xs text-white/60 hover:text-white transition-colors">
          Politika privatnosti
        </Link>
      </div>
    </footer>
  )
}
