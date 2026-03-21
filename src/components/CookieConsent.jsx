import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Obavijest o kolačićima"
      className={`fixed bottom-0 left-0 right-0 z-[100] transition-transform duration-500 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div
        className="max-w-5xl mx-auto m-4 rounded-2xl px-6 py-5 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4"
        style={{ background: 'var(--footer-bg)', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        {/* Ikona */}
        <span className="text-3xl flex-shrink-0">🍪</span>

        {/* Tekst */}
        <div className="flex-1">
          <p className="text-sm leading-relaxed" style={{ color: '#b09a88' }}>
            Ova stranica koristi kolačiće kako bi poboljšala vaše iskustvo pregledavanja.
            Prihvaćanjem pristajete na korištenje kolačića u skladu s našom{' '}
            <Link
              to="/politika-privatnosti"
              className="underline hover:no-underline transition-all"
              style={{ color: 'var(--accent)' }}
            >
              Politikom privatnosti
            </Link>
            .
          </p>
        </div>

        {/* Gumbi */}
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm rounded-lg border transition-colors duration-200 cursor-pointer hover:bg-white/10"
            style={{ color: '#b09a88', borderColor: 'rgba(255,255,255,0.15)' }}
          >
            Odbij
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm rounded-lg font-semibold transition-all duration-200 cursor-pointer hover:opacity-90"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            Prihvati
          </button>
        </div>
      </div>
    </div>
  )
}
