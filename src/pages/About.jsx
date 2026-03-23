import { useState, useEffect } from 'react'

const base = import.meta.env.BASE_URL
const slides = [`${base}mi.jpg`, `${base}mi1.jpg`, `${base}mi2.jpg`, `${base}mi3.jpg`, `${base}mi4.jpg`]

function AboutSlider() {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4000)
    return () => clearInterval(t)
  }, [])
  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent(c => (c + 1) % slides.length)
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md" style={{ border: '1px solid var(--border)' }}>
      <div className="relative" style={{ aspectRatio: '4/3' }}>
        {slides.map((src, i) => (
          <img key={src} src={src} alt={`Mi ${i + 1}`}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${i === current ? 'opacity-100' : 'opacity-0'}`}
            style={{ objectFit: 'contain', background: 'var(--bg)' }} />
        ))}
        <button onClick={prev} aria-label="Prethodna" className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow cursor-pointer transition-all" style={{ color: 'var(--text-h)' }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="11 14 5 8 11 2" /></svg>
        </button>
        <button onClick={next} aria-label="Sljedeća" className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow cursor-pointer transition-all" style={{ color: 'var(--text-h)' }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="5 14 11 8 5 2" /></svg>
        </button>
      </div>
      <div className="flex justify-center gap-2 py-3" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`Slika ${i + 1}`} className="rounded-full cursor-pointer transition-all duration-300"
            style={{ width: i === current ? '24px' : '8px', height: '8px', background: i === current ? 'var(--accent)' : 'var(--border)' }} />
        ))}
      </div>
    </div>
  )
}

const facts = [
  { label: 'Podrijetlo', value: 'Sredozemlje, 2000+ godina povijesti' },
  { label: 'Težina', value: '2–4 kg' },
  { label: 'Visina', value: '20–25 cm' },
  { label: 'Životni vjek', value: '12–15 godina' },
  { label: 'Dlaka', value: 'Bijela, svilenkasta, dugačka' },
  { label: 'Karakter', value: 'Nježan, veseo, odan, pametan' },
]

function PawDivider() {
  return (
    <div className="flex items-center gap-4 my-10" style={{ color: 'var(--accent)' }}>
      <div className="flex-1" style={{ height: '1px', background: 'var(--border)' }} />
      <svg width="22" height="22" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
        <ellipse cx="12" cy="20" rx="6" ry="9" />
        <ellipse cx="26" cy="12" rx="6" ry="9" />
        <ellipse cx="40" cy="12" rx="6" ry="9" />
        <ellipse cx="54" cy="20" rx="6" ry="9" />
        <path d="M32 28c-10 0-20 8-18 20 1.5 9 8 12 18 12s16.5-3 18-12c2-12-8-20-18-20z" />
      </svg>
      <div className="flex-1" style={{ height: '1px', background: 'var(--border)' }} />
    </div>
  )
}

const tags = [
  'Odani prijatelji',
  'Savršeni za stan',
  'Nježnog karaktera',
  'Pametni i veseli',
  'Duga dlaka, kratke noge',
]

export default function About() {
  return (
    <main className="flex-1 pt-16" style={{ background: 'var(--bg)' }}>

      {/* Hero */}
      <section className="py-14 px-6 text-center" style={{ borderBottom: '1px solid var(--border)' }}>
        <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--accent)' }}>
          Naša priča
        </p>
        <h1
          className="text-5xl md:text-6xl font-semibold mb-4"
          style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}
        >
          O nama
        </h1>
        <div className="mx-auto rounded-full" style={{ width: '48px', height: '3px', background: 'var(--accent)' }} />
      </section>

      {/* Slider */}
      <section className="px-6 pt-14 relative">
        <div className="max-w-2xl mx-auto">
          <AboutSlider />
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => document.getElementById('about-content').scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center cursor-pointer border-0 p-0"
            style={{ animation: 'scrollBounce 1.8s ease-in-out infinite', width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
            aria-label="Scroll dolje"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </section>

      {/* Sadržaj — grid */}
      <section id="about-content" className="py-14 px-4 md:px-10">
        <div className="w-full">

          {/* Dva stupca */}
          <div className="grid md:grid-cols-2 gap-10 mb-4">

            {/* Kako je sve počelo */}
            <div>
              <h2
                className="text-3xl font-semibold mb-6"
                style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}
              >
                Kako je sve počelo
              </h2>
              <p className="leading-relaxed mb-5" style={{ color: 'var(--text)' }}>
                Sve je počelo s jednim pogledom — onim malim, crnim, sjajevitim pogledom koji te
                potpuno osvoji. Kada smo donijeli Oskara kući, znali smo da nam je život zauvijek
                promijenjen. A onda je stigao i Oryx, i kuća je postala premala za toliku ljubav.
              </p>
              <p className="leading-relaxed mb-5" style={{ color: 'var(--text)' }}>
                Ova stranica nastala je iz žele da dokumentiramo svakodnevni život naših dvaju
                maltezera — njihove avanture, navike, zdravlje i one sitne momente koji te rasplaču
                od sreće. Ujedno je to i mjesto gdje možemo podijeliti iskustva s drugim vlasnicima
                maltezera i ljubiteljima pasa.
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--text)' }}>
                Bilo da ste ovdje zbog savjeta o prehrani, njezi krzna ili jednostavno zbog slatkih
                fotografija — dobrodošli ste u naš mali kutić interneta.
              </p>
            </div>

            {/* Zašto Maltezeri */}
            <div>
              <h2
                className="text-3xl font-semibold mb-6"
                style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}
              >
                Zašto Maltezeri?
              </h2>
              <p className="leading-relaxed mb-5" style={{ color: 'var(--text)' }}>
                Maltezer je jedna od najstarijih pasmina pasa na svijetu, s poviješću dugom više
                od 2000 godina. Mali su, ali srce im je golemo. Njihova bijela, svilenkasta dlaka
                i nježan karakter osvajaju sve koji ih upoznaju.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'var(--text)' }}>
                Lojalni su, pametni, veseli i iznimno odani svojim vlasnicima. Savršeni su za stan,
                ne trebaju puno prostora — ali trebaju puno ljubavi. I to im uvijek vraćate višestruko.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm"
                    style={{
                      color: 'var(--accent)',
                      border: '1px solid var(--accent)',
                      background: 'var(--accent-light)',
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <PawDivider />

          {/* O pasmini — centrirano */}
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}
            >
              O pasmini
            </h2>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {facts.map((f) => (
                <div key={f.label} className="px-4 py-3 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: 'var(--text)' }}>{f.label}</p>
                  <p className="font-semibold text-sm" style={{ color: 'var(--text-h)' }}>{f.value}</p>
                </div>
              ))}
            </div>

            <p className="leading-relaxed" style={{ color: 'var(--text)' }}>
              Maltezeri su jedna od najstarijih pasmina na svijetu. Idealni su za stanove i manje
              kuće jer ne trebaju veliku površinu za kretanje. Iznimno su privrženi vlasnicima i
              ne vole dugo biti sami. Njihova bijela dlaka zahtijeva redovitu njegu, ali svaki
              trud se isplati kad vidite kako sjaje.
            </p>
          </div>

        </div>
      </section>

    </main>
  )
}
