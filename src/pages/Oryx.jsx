const facts = [
  { label: 'Podrijetlo', value: 'Sredozemlje, 2000+ godina povijesti' },
  { label: 'Težina', value: '2–4 kg' },
  { label: 'Visina', value: '20–25 cm' },
  { label: 'Životni vjek', value: '12–15 godina' },
  { label: 'Dlaka', value: 'Bijela, svilenkasta, dugačka' },
  { label: 'Karakter', value: 'Nježan, veseo, odan, pametan' },
]

export default function Oryx() {
  return (
    <main className="flex-1 pt-16" style={{ background: 'var(--bg)' }}>

      {/* Hero — roze pozadina */}
      <section
        className="py-14 px-6 text-center"
        style={{ background: '#fdf2f2', borderBottom: '1px solid #f0dede' }}
      >
        <h1
          className="text-5xl md:text-6xl font-semibold mb-3"
          style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}
        >
          Oryx
        </h1>
        <p className="text-lg italic mb-4" style={{ fontFamily: 'var(--heading)', color: 'var(--text)' }}>
          Naš istraživač
        </p>
        <div className="mx-auto rounded-full" style={{ width: '48px', height: '3px', background: '#c4828a' }} />
      </section>

      {/* Sadržaj */}
      <section className="py-14 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Slika */}
          <div className="flex justify-center mb-12">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=500&fit=crop&auto=format"
              alt="Oryx"
              className="rounded-2xl shadow-md"
              style={{ maxWidth: '380px', width: '100%', border: '1px solid var(--border)' }}
            />
          </div>

          {/* Opis */}
          <div className="mb-10">
            <h2
              className="flex items-center gap-2.5 text-xl font-semibold mb-4"
              style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#c4828a' }}>
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Opis
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--text)' }}>
              Oryx je mlađi od dvojice i ima nešto mirniji karakter. Radoznao je i voli istraživati
              svaki kutak kuće i dvorišta. Posebno voli ležati u sunčevim zrakama i promatrati
              svijet oko sebe s mudrim pogledom. Njegov mirni duh savršeno nadopunjuje Oskarovu
              energičnost.
            </p>
          </div>

          {/* O pasmini */}
          <div className="mb-10">
            <h2
              className="flex items-center gap-2.5 text-xl font-semibold mb-5"
              style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#c4828a' }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              O pasmini
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="px-4 py-3 rounded-xl"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: 'var(--text)' }}>
                    {f.label}
                  </p>
                  <p className="font-semibold text-sm" style={{ color: 'var(--text-h)' }}>
                    {f.value}
                  </p>
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
