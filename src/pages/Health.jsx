function PawIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true" style={{ color: 'var(--accent)' }}>
      <ellipse cx="12" cy="20" rx="6" ry="9" />
      <ellipse cx="26" cy="12" rx="6" ry="9" />
      <ellipse cx="40" cy="12" rx="6" ry="9" />
      <ellipse cx="54" cy="20" rx="6" ry="9" />
      <path d="M32 28c-10 0-20 8-18 20 1.5 9 8 12 18 12s16.5-3 18-12c2-12-8-20-18-20z" />
    </svg>
  )
}

function IconHrana() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}>
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
    </svg>
  )
}

function IconKoza() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M20 4 4 20" />
    </svg>
  )
}

function IconAlergije() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}

function Card({ icon, title, children }) {
  return (
    <div
      className="rounded-2xl p-5 h-full"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
    >
      <h3
        className="flex items-center gap-2.5 text-base font-semibold mb-3"
        style={{ fontFamily: 'var(--heading)', color: 'var(--accent)' }}
      >
        {icon}
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text)' }}>
        {children}
      </p>
    </div>
  )
}

export default function Health() {
  return (
    <main className="flex-1 pt-16" style={{ background: 'var(--bg)' }}>

      {/* Hero */}
      <section className="py-14 px-6 text-center" style={{ borderBottom: '1px solid var(--border)' }}>
        <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--accent)' }}>
          Briga o psima
        </p>
        <h1
          className="text-5xl md:text-6xl font-semibold mb-4"
          style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}
        >
          Zdravlje
        </h1>
        <p className="text-base mb-5" style={{ color: 'var(--text)' }}>
          Savjeti o prehrani, njezi krzna i alergijama za naše maltežane
        </p>
        <div className="mx-auto rounded-full" style={{ width: '48px', height: '3px', background: 'var(--accent)' }} />
      </section>

      {/* Sadržaj */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-10 gap-y-4">

          {/* Headers */}
          <h2
            className="flex items-center gap-2.5 text-2xl font-semibold mb-2"
            style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}
          >
            <PawIcon /> Oskar
          </h2>
          <h2
            className="flex items-center gap-2.5 text-2xl font-semibold mb-2"
            style={{ fontFamily: 'var(--heading)', color: 'var(--text-h)' }}
          >
            <PawIcon /> Oryx
          </h2>

          {/* Hrana */}
          <Card icon={<IconHrana />} title="Hrana">
            Oskar jede 2x dnevno premium suhu hranu za male pasmine. Svježe meso dodajemo
            2–3 puta tjedno kao nadopunu. Izbjegavamo: čokoladu, grožđe, luk i slane
            grickalice. Svježa voda uvijek dostupna.
          </Card>
          <Card icon={<IconHrana />} title="Hrana">
            Oryx preferira mokru hranu pomiješanu sa suhom. Jede 2x dnevno u manjim
            obrocima. Ponekad dodajemo kuhanu piletinu ili ribu. Vitaminski dodaci su
            dio njegove svakodnevne rutine.
          </Card>

          {/* Koža i krzno */}
          <Card icon={<IconKoza />} title="Koža i krzno">
            Oskarovo bijelo krzno zahtijeva redovito četkanje svaki dan. Kupamo ga svakih
            2–3 tjedna s blagim šamponom za pse. Trimer posjećujemo svakih 6–8 tjedana.
            Oko očiju brišemo svakodnevno vlažnom krpicom.
          </Card>
          <Card icon={<IconKoza />} title="Koža i krzno">
            Oryxevo krzno je nešto finijeg tipa i traži posebnu pažnju. Četkamo ga dva
            puta dnevno. Koristimo specijalni balzam za sjaj. Kupamo svakih 10–14 dana.
            Redovite kontrole kože zbog osjetljivosti.
          </Card>

          {/* Alergije */}
          <Card icon={<IconAlergije />} title="Alergije">
            Oskar ima blagu osjetljivost na određene trave i pelud u proljeće. Simptomi
            uključuju kihanje i suzne oči. Redovito čišćenje šapa nakon šetnje pomaže.
            Po savjetu veterinara dajemo mu antihistaminik u sezoni cvatnje.
          </Card>
          <Card icon={<IconAlergije />} title="Alergije">
            Oryx ima osjetljiviju kožu i pokazuje reakcije na neke vrste hrane.
            Izbjegavamo žitarice u hrani i biramo grain-free opcije. Koža mu zna biti
            crvena oko šapa — liječimo lokalnim pripravkom preporučenim od veterinara.
          </Card>

        </div>
      </section>

    </main>
  )
}
