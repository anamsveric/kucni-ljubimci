import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const base = import.meta.env.BASE_URL
const slides = [
  `${base}mi.jpg`,
  `${base}mi1.jpg`,
  `${base}mi2.jpg`,
  `${base}mi3.jpg`,
  `${base}mi4.jpg`,
]

function HomeSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4000)
    return () => clearInterval(t)
  }, [])

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent(c => (c + 1) % slides.length)

  return (
    <section className="w-full relative" style={{ background: 'var(--bg-card)' }}>
      <div className="relative w-full overflow-hidden">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Oskar i Oryx ${i + 1}`}
            className={`w-full h-auto block transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
            style={{ objectFit: 'cover' }}
          />
        ))}
      </div>

      {/* Strelice */}
      <button onClick={prev} aria-label="Prethodna" className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer border-0 p-0" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(4px)', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
        <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 16 7 10 13 4" /></svg>
      </button>
      <button onClick={next} aria-label="Sljedeća" className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer border-0 p-0" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(4px)', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
        <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="7 16 13 10 7 4" /></svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`Slika ${i + 1}`} className="rounded-full cursor-pointer border-0 transition-all duration-300" style={{ width: i === current ? '24px' : '8px', height: '8px', background: i === current ? 'white' : 'rgba(255,255,255,0.5)' }} />
        ))}
      </div>

      {/* Scroll indikator */}
      <button
        onClick={() => document.getElementById('cards').scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center cursor-pointer border-0 p-0"
        style={{ animation: 'scrollBounce 1.8s ease-in-out infinite', width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(4px)', boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}
        aria-label="Scroll dolje"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </section>
  )
}

export default function Home() {
  return (
    <main className="flex-1" style={{ background: 'var(--bg)' }}>

      <HomeSlider />

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
