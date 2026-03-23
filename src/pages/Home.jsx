import { Link } from 'react-router-dom'

const base = import.meta.env.BASE_URL

export default function Home() {
  return (
    <main className="flex-1" style={{ background: 'var(--bg)' }}>

      {/* ── Slika puna širina ── */}
      <section className="w-full relative" style={{ background: 'var(--bg-card)' }}>
        <img
          src={`${base}oba1.jpg`}
          alt="Oskar i Oryx"
          className="w-full h-auto block"
        />
        {/* Scroll indikator */}
        <button
          onClick={() => document.getElementById('cards').scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center cursor-pointer border-0 p-0"
          style={{ animation: 'scrollBounce 1.8s ease-in-out infinite', width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(4px)', boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}
          aria-label="Scroll dolje"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </section>

      {/* ── Cards sekcija ── */}
      <section id="cards" className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
              Upoznajte ih
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-3"
              style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}
            >
              Naši psi
            </h2>
            <div className="mx-auto rounded-full" style={{ width: '48px', height: '3px', background: 'var(--accent)' }} />
          </div>

          {/* Two cards */}
          <div className="grid md:grid-cols-2 gap-7">

            {/* Oskar */}
            <Link
              to="/oskar"
              className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow)', border: '1px solid var(--border)' }}
            >
              <div className="overflow-hidden" style={{ height: '220px' }}>
                <img
                  src={`${base}oskar3.jpg`}
                  alt="Oskar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1.5" style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}>
                  Oskar
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text)' }}>
                  Veseli dječak pun energije i bezuvjetne ljubavi
                </p>
                <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>
                  Upoznaj ga →
                </span>
              </div>
            </Link>

            {/* Oryx */}
            <Link
              to="/oryx"
              className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow)', border: '1px solid var(--border)' }}
            >
              <div className="overflow-hidden" style={{ height: '220px' }}>
                <img
                  src={`${base}oryx.jpg`}
                  alt="Oryx"
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  style={{ objectFit: 'contain', background: 'var(--bg-card)' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1.5" style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}>
                  Oryx
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text)' }}>
                  Nježan i radoznao istraživač s mudrim pogledom
                </p>
                <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>
                  Upoznaj ga →
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>

    </main>
  )
}
