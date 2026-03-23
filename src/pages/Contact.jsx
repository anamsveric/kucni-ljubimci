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
              className="text-2xl font-semibold mb-4"
              style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}
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

            <div
              className="flex items-center gap-3 px-5 py-3.5 rounded-xl"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-h)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)', flexShrink: 0 }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.95a16 16 0 0 0 6.06 6.06l.95-1.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="text-sm font-medium flex-1">097 600 2059</span>
              <div className="flex items-center gap-2">
                {/* WhatsApp */}
                <a href="https://wa.me/385976002059" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#25D366' }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </a>
                {/* Viber */}
                <a href="viber://chat?number=%2B385976002059" title="Viber">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#7360F2' }}>
                    <path d="M11.4 0C5.5.3.8 5.1.8 11c0 2.2.6 4.2 1.7 6L.8 24l7.2-1.7c1.7.9 3.6 1.4 5.6 1.4 5.9 0 10.7-4.8 10.7-10.7S17.3 0 11.4 0zm5.8 16.4c-.3.8-1.5 1.5-2.1 1.6-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-5-4.3-5.1-4.5-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2.3-.2.6-.3.8-.3h.6c.2 0 .4.1.6.5l.8 2c.1.2.1.4 0 .6-.1.2-.2.3-.3.5-.1.1-.3.3-.4.4-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.5 1.5.3.1.5.1.7-.1.2-.2.8-.9.9-1.2.2-.3.4-.2.6-.1l2 .9c.2.1.4.2.5.4.1.3-.1 1.1-.4 1.8z"/>
                  </svg>
                </a>
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
