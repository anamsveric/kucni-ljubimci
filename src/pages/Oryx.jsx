
function oryxAge() {
  const born = new Date(2023, 2, 10) // 10.03.2023
  const now = new Date()
  let years = now.getFullYear() - born.getFullYear()
  let months = now.getMonth() - born.getMonth()
  let days = now.getDate() - born.getDate()
  if (days < 0) { months--; days += new Date(now.getFullYear(), now.getMonth(), 0).getDate() }
  if (months < 0) { years--; months += 12 }
  return `${years} god. ${months} mj. ${days} dana (r. 10.03.2023.)`
}

const facts = [
  { label: 'Početak života', value: 'obitelj sa više pasa /štanceraj' },
  { label: 'Težina', value: '3 kg' },
  { label: 'Geni', value: 'maltezer ' },
  { label: 'Starost', value: oryxAge() },
  { label: 'Dlaka', value: 'Bijela, svilenkasta, sjajna, srednja' },
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
          <div className="flex justify-center mb-6">
            <img
              src="/oryx.jpg"
              alt="Oryx"
              className="rounded-2xl shadow-md"
              style={{ maxWidth: '380px', width: '100%', border: '1px solid var(--border)' }}
            />
          </div>

          <div className="flex justify-center mb-6">
            <button
              onClick={() => document.getElementById('oryx-opis').scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center cursor-pointer border-0 p-0"
              style={{
                animation: 'scrollBounce 1.8s ease-in-out infinite',
                width: '48px', height: '48px', borderRadius: '50%',
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
              aria-label="Scroll dolje"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c4828a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>

          {/* Opis */}
          <div id="oryx-opis" className="mb-10">
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
              Oryx je mlađi od dvojice i ima hypan karakter. Voli bit pod nogama, u centru pažnje, da zna sve što se dešava. 
              Iznimno je privržen s obzirom na prethodne traume (zanemarivanje, borba za život). Posebno voli svoju obitelj, igru sa bracom Oskarom. 
              Njegov hypan duh savršeno nadopunjuje Oskarovu mirnu narav. 
              Ono po čemu se tiče od brace, lajavac je na sve što mu je nesigurno (TV, odlazak osoba iz prostoje bez njega, čuvanje dvorišta).
            </p>
          </div>

          {/* O Oryxu */}
          <div className="mb-10">
            <h2
              className="flex items-center gap-2.5 text-xl font-semibold mb-5"
              style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#c4828a' }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              O Oryxu
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

        </div>
      </section>

    </main>
  )
}
