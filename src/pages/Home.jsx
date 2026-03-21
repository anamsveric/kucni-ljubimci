import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1920&h=700&fit=crop&auto=format',
    title: 'Život s maltežanima',
    subtitle: 'Ljubav, igra i beskrajna nježnost',
  },
  {
    url: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=1920&h=700&fit=crop&auto=format',
    title: 'Naši mali junaci',
    subtitle: 'Svaki dan pun smijeha i avantura',
  },
]

export default function Home() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((index) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 400)
  }, [animating])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    const id = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5500)
    return () => clearInterval(id)
  }, [])

  const slide = slides[current]

  return (
    <main className="flex-1" style={{ background: 'var(--bg)' }}>

      {/* ── Hero slider ── */}
      <section className="relative w-full overflow-hidden" style={{ height: 'clamp(320px, 50vh, 520px)' }}>
        {slides.map((s, i) => (
          <img
            key={s.url}
            src={s.url}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Gradient overlay — darker at centre for readability */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.35) 100%)' }} />

        {/* Centered text */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-opacity duration-400 ${animating ? 'opacity-0' : 'opacity-100'}`}>
          <h1
            className="text-3xl md:text-5xl font-semibold text-white mb-3 leading-tight"
            style={{ fontFamily: 'var(--heading)', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
          >
            {slide.title}
          </h1>
          <p className="text-white/85 text-base md:text-lg" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
            {slide.subtitle}
          </p>
        </div>

        {/* Arrow left */}
        <button
          onClick={prev}
          aria-label="Prethodna slika"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2.5 transition-all duration-200 cursor-pointer"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="13 16 7 10 13 4" />
          </svg>
        </button>

        {/* Arrow right */}
        <button
          onClick={next}
          aria-label="Sljedeća slika"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2.5 transition-all duration-200 cursor-pointer"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="7 16 13 10 7 4" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slika ${i + 1}`}
              className="rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: i === current ? '28px' : '10px',
                height: '10px',
                background: i === current ? '#fff' : 'rgba(255,255,255,0.45)',
              }}
            />
          ))}
        </div>
      </section>

      {/* ── Cards sekcija ── */}
      <section className="py-16 px-6 md:px-12">
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
            {/* Orange underline */}
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
                  src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=600&h=400&fit=crop&auto=format"
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
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop&auto=format"
                  alt="Oryx"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
