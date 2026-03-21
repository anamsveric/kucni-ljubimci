import { Link } from 'react-router-dom'

const facts = [
  { icon: '🐾', label: 'Pasmina', value: 'Maltezer' },
  { icon: '🏠', label: 'Dom', value: 'Stan, Zagreb' },
  { icon: '❤️', label: 'Karakter', value: 'Nježni i veseli' },
  { icon: '📅', label: 'Stranica od', value: '2024.' },
]

export default function About() {
  return (
    <main className="flex-1 pt-16" style={{ background: 'var(--bg)' }}>

      {/* Hero naslov */}
      <section
        className="py-16 px-6 text-center"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
          O nama
        </p>
        <h1
          className="text-4xl md:text-5xl font-semibold mb-4"
          style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}
        >
          Oskar &amp; Oryx
        </h1>
        <div className="mx-auto mb-6 rounded-full" style={{ width: '48px', height: '3px', background: 'var(--accent)' }} />
        <p className="max-w-xl mx-auto text-base leading-relaxed" style={{ color: 'var(--text)' }}>
          Stranica nastala iz ljubavi prema našim malim maltežanima. Ovdje
          dijelimo svakodnevne trenutke, savjete o njezi i sve što smo naučili
          živući s njima.
        </p>
      </section>

      {/* Brzi fakti */}
      <section className="py-10 px-6" style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {facts.map((f) => (
            <div key={f.label}>
              <div className="text-3xl mb-2">{f.icon}</div>
              <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: 'var(--accent)' }}>
                {f.label}
              </p>
              <p className="font-semibold" style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}>
                {f.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Glavni sadržaj */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Slika */}
          <div className="rounded-2xl overflow-hidden shadow-md" style={{ border: '1px solid var(--border)' }}>
            <img
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=700&h=500&fit=crop&auto=format"
              alt="Oskar i Oryx"
              className="w-full h-full object-cover"
              style={{ minHeight: '280px' }}
            />
          </div>

          {/* Tekst */}
          <div className="flex flex-col justify-center gap-6">
            <div>
              <h2 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}>
                Što možete pronaći ovdje?
              </h2>
              <p className="leading-relaxed text-sm" style={{ color: 'var(--text)' }}>
                Svaki ljubimac poseban je na svoj način — od karaktera i navika
                do specifičnih potreba njege. Na ovoj stranici donosimo priče
                i informacije o našim ljubimcima Oskaru i Oryxu.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}>
                Zašto baš ovi ljubimci?
              </h2>
              <p className="leading-relaxed text-sm" style={{ color: 'var(--text)' }}>
                Oskar i Oryx nisu samo kućni ljubimci — oni su dio obitelji.
                Svaki dan donose radost, smijeh i ponekad malo kaosa.
                Pratite nas i upoznajte njihove osobnosti.
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <Link
                to="/oskar"
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                Upoznaj Oskara
              </Link>
              <Link
                to="/oryx"
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-black/5"
                style={{ color: 'var(--accent)', border: '2px solid var(--accent)' }}
              >
                Upoznaj Oryxa
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Maltezer info strip */}
      <section className="py-12 px-6" style={{ background: 'var(--footer-bg)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-semibold mb-4"
            style={{ fontFamily: 'var(--heading)', color: '#fff' }}
          >
            O pasmini maltezer
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: '#b09a88' }}>
            Maltezer je jedna od najstarijih i najvoljenijih pasmina na svijetu.
            Poznat po svilenkastoj bijeloj dlaci, živahnom karakteru i
            bezuvjetnoj privrženosti obitelji — idealan pas za život u stanu.
          </p>
          <Link
            to="/zdravlje"
            className="inline-block px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            Zdravlje i njega →
          </Link>
        </div>
      </section>

    </main>
  )
}
