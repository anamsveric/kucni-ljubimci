import { useState, useCallback } from 'react'

const images = [
  { src: '/oskar3.jpg', fit: 'contain' },
  { src: '/oskar0.jpg', fit: 'cover' },
  { src: '/oskar4.jpg', fit: 'cover' },
]

function oskarAge() {
  const born = new Date(2021, 8, 15) // 15.09.2021
  const now = new Date()
  let years = now.getFullYear() - born.getFullYear()
  let months = now.getMonth() - born.getMonth()
  let days = now.getDate() - born.getDate()
  if (days < 0) { months--; days += new Date(now.getFullYear(), now.getMonth(), 0).getDate() }
  if (months < 0) { years--; months += 12 }
  return `${years} god. ${months} mj. ${days} dana (r. 15.09.2021.)`
}

const facts = [
  { label: 'Početak života', value: 'proputovan svijetom kao štene - putovnica Grčke' },
  { label: 'Težina', value: '7,5 kg' },
  { label: 'Geni', value: 'zbog  rano otkrivenih alergija sa 1.godinom, testiran je te ima gene lovnih pasa: labrador, terijer, američki mini ovčar. Sve je to vidno u njegovom karakteru. ' },
  { label: 'Starost', value: oskarAge() },
  { label: 'Dlaka', value: 'Bijela, svilenkasta, sjajna, kraća' },
  { label: 'Karakter', value: 'Nježan, veseo, odan, pametan, lovni nos' },
]

function Slider({ images }) {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => setCurrent(c => (c - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent(c => (c + 1) % images.length), [images.length])

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md mb-12" style={{ border: '1px solid var(--border)' }}>
      <div className="relative" style={{ aspectRatio: '4/3' }}>
        {images.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={`Oskar ${i + 1}`}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${i === current ? 'opacity-100' : 'opacity-0'}`}
            style={{ objectFit: img.fit, background: 'var(--bg-card)' }}
          />
        ))}

        <button onClick={prev} aria-label="Prethodna" className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow cursor-pointer transition-all" style={{ color: 'var(--text-h)' }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="11 14 5 8 11 2" /></svg>
        </button>
        <button onClick={next} aria-label="Sljedeća" className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow cursor-pointer transition-all" style={{ color: 'var(--text-h)' }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="5 14 11 8 5 2" /></svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 py-3" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
        {images.map((__, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slika ${i + 1}`}
            className="rounded-full cursor-pointer transition-all duration-300"
            style={{ width: i === current ? '24px' : '8px', height: '8px', background: i === current ? 'var(--accent)' : 'var(--border)' }}
          />
        ))}
      </div>
    </div>
  )
}

export default function Oskar() {
  return (
    <main className="flex-1 pt-16" style={{ background: 'var(--bg)' }}>

      {/* Hero */}
      <section className="py-14 px-6 text-center" style={{ borderBottom: '1px solid var(--border)' }}>
        <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--accent)' }}>
          Naš stariji
        </p>
        <h1 className="text-5xl md:text-6xl font-semibold mb-3" style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}>
          Oskar
        </h1>
        <p className="text-lg italic mb-4" style={{ fontFamily: 'var(--heading)', color: 'var(--text)' }}>
          Naš veseljak
        </p>
        <div className="mx-auto rounded-full" style={{ width: '48px', height: '3px', background: 'var(--accent)' }} />
      </section>

      {/* Sadržaj */}
      <section className="py-14 px-6">
        <div className="max-w-2xl mx-auto">

          <Slider images={images} />

          {/* Opis */}
          <div className="mb-10">
            <h2 className="flex items-center gap-2.5 text-xl font-semibold mb-4" style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}>
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Opis
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--text)' }}>
              Oskar je naš stariji pas, pun energije i ljubavi. Uvijek spreman za igru i mazanje. 
              Obožava šetnje, vožnju, provocirat na zabavu. Svako jutro počinje s radošću i željom za novom avanturom. 
              Bez Oskara kuća bi bila puno drugačija — ali i puno dosadnija.
            </p>
          </div>

          {/* O Oskaru */}
          <div className="mb-10">
            <h2 className="flex items-center gap-2.5 text-xl font-semibold mb-5" style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              O Oskaru
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {facts.map((f) => (
                <div key={f.label} className="px-4 py-3 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: 'var(--text)' }}>{f.label}</p>
                  <p className="font-semibold text-sm" style={{ color: 'var(--text-h)' }}>{f.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Završni paragraf */}
          <p className="leading-relaxed" style={{ color: 'var(--text)' }}>
            Maltežani su jedna od najstarijih pasmina na svijetu. Idealni su za stanove i manje
            kuće jer ne trebaju veliku površinu za kretanje. Iznimno su privrženi vlasnicima i
            ne vole dugo biti sami. Njihova bijela dlaka zahtijeva redovitu njegu, ali svaki
            trud se isplati kad vidite kako sjaje.
          </p>

        </div>
      </section>

    </main>
  )
}
