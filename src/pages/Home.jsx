import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1920&h=1080&fit=crop&auto=format',
    title: 'Naši kućni ljubimci',
    subtitle: 'Upoznajte Oskara i Oryxa — dva mala malteza s velikim srcima.',
  },
  {
    url: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=1920&h=1080&fit=crop&auto=format',
    title: 'Bezuvjetna ljubav',
    subtitle: 'Svaki dan s njima je nova avantura i puno smijeha.',
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
    const id = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length)
    }, 5500)
    return () => clearInterval(id)
  }, [])

  const slide = slides[current]

  return (
    <main className="flex-1">
      {/* Hero slider */}
      <section className="relative w-full h-screen overflow-hidden">
        {slides.map((s, i) => (
          <img
            key={s.url}
            src={s.url}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/40" />

        <div
          className={`absolute inset-0 flex items-end px-8 md:px-16 pb-20 md:pb-28 transition-opacity duration-400 ${
            animating ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white uppercase mb-4 leading-tight drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-white/85 text-base md:text-lg mb-8 leading-relaxed">
              {slide.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/oskar"
                className="px-7 py-2.5 border-2 border-white text-white font-semibold tracking-wide hover:bg-white hover:text-black transition-colors duration-300"
              >
                Oskar
              </Link>
              <Link
                to="/oryx"
                className="px-7 py-2.5 border-2 border-white text-white font-semibold tracking-wide hover:bg-white hover:text-black transition-colors duration-300"
              >
                Oryx
              </Link>
            </div>
          </div>
        </div>

        {/* Strelice */}
        <button
          onClick={prev}
          aria-label="Prethodna slika"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/25 hover:bg-black/50 rounded-full p-3 transition-all duration-200 cursor-pointer"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Sljedeća slika"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/25 hover:bg-black/50 rounded-full p-3 transition-all duration-200 cursor-pointer"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Točkice */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slika ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === current ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Cards sekcija */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3" style={{ color: 'var(--text-h)' }}>
            Upoznajte naše pse
          </h2>
          <p className="text-center mb-12 text-lg" style={{ color: 'var(--text)' }}>
            Dva mala malteza, dva velika karaktera.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to="/oskar"
              className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'rgba(0,0,0,0.18)' }}
            >
              <div className="overflow-hidden h-60">
                <img
                  src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=600&h=400&fit=crop&auto=format"
                  alt="Oskar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-h)' }}>Oskar</h3>
                <p style={{ color: 'var(--text)' }}>Energičan, veseo i uvijek spreman za igru. Pravi mali vođa čopora.</p>
                <span className="inline-block mt-4 text-sm font-semibold tracking-wide" style={{ color: 'var(--accent)' }}>
                  Saznaj više →
                </span>
              </div>
            </Link>

            <Link
              to="/oryx"
              className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'rgba(0,0,0,0.18)' }}
            >
              <div className="overflow-hidden h-60">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop&auto=format"
                  alt="Oryx"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-h)' }}>Oryx</h3>
                <p style={{ color: 'var(--text)' }}>Miran, razborit i dostojanstven. Uvijek pronađe najudobnije mjesto u kući.</p>
                <span className="inline-block mt-4 text-sm font-semibold tracking-wide" style={{ color: 'var(--accent)' }}>
                  Saznaj više →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
