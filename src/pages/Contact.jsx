export default function Contact() {
  return (
    <main className="flex-1 pt-16" style={{ background: 'var(--bg)' }}>

      {/* Hero */}
      <section className="py-14 px-6" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto">
          <h1
            className="text-5xl md:text-6xl font-semibold"
            style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}
          >
            Želite li nas upoznati? 
          </h1>
        </div>
      </section>

      {/* Sadržaj */}
      <section className="py-14 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">

          {/* Lijevo — tekst + linkovi */}
          <div>
            {/* Zašto pisati */}
            <h2
              className="text-2xl font-semibold"
              style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)', marginBottom: '2rem' }}
            >
              Tu sam za sve!
            </h2>
            <ul className="mb-10 flex flex-col gap-2.5" style={{ color: 'var(--text)' }}>
              {[
                'Savjeti o prehrani i njezi pasa',
                'Iskustva s alergijama i veterinarima',
                'Druženje pasa — pa se i upoznamo!',
                'Sve što vas zanima o Oskaru i Oryxu',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <span style={{ color: 'var(--accent)', marginTop: '2px' }}>•</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Linkovi */}
            <div className="flex flex-col gap-3">
              
              {/* Telefon */}
              <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold tracking-widest text-muted uppercase mb-1">Telefon</p>
                    <p className="font-body text-sm text-muted italic">privremeno nedostupno</p>
                  </div>
                </div>
              </div>

            <a
              href="mailto:anamaria.sveric@gmail.com"
              className="flex items-center gap-3 px-5 py-3.5 rounded-xl transition-all duration-200 hover:shadow-md"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-h)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)', flexShrink: 0 }}>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="text-sm font-medium">anamaria.sveric@gmail.com</span>
            </a>

            <a
              href="https://www.instagram.com/anamsveric"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3.5 rounded-xl transition-all duration-200 hover:shadow-md"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-h)' }}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#E1306C', flexShrink: 0 }}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <span className="text-sm font-medium">Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/anamaria.1058"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3.5 rounded-xl transition-all duration-200 hover:shadow-md"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-h)' }}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#1877F2', flexShrink: 0 }}>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-sm font-medium">Facebook</span>
            </a>

            </div>
          </div>

          {/* Desno — mapa */}
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
            <div className="px-4 py-3 flex items-center gap-2.5" style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)', flexShrink: 0 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>Lokacija</p>
                <p className="text-sm font-medium" style={{ color: 'var(--text-h)' }}>Pula — u blizini Bazilike M. Formoze i Foruma</p>
              </div>
            </div>
            <iframe
              title="Lokacija Pula"
              src="https://www.openstreetmap.org/export/embed.html?bbox=13.845%2C44.865%2C13.860%2C44.875&layer=mapnik&marker=44.870%2C13.852"
              width="100%"
              height="260"
              style={{ display: 'block', border: 0 }}
              loading="lazy"
            />
          </div>

        </div>
      </section>

    </main>
  )
}
