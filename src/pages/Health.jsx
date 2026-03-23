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
      <div className="text-sm leading-relaxed" style={{ color: 'var(--text)' }}>
        {children}
      </div>
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
          Savjeti o prehrani, njezi krzna i alergijama za naše Maltezere
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
            <p style={{ marginBottom: '12px' }}>Oskar kao alergičar, nakon masu isprobane suhe hrane (počevši kao štene sa Royal Caninom, pa Brit premium, Happy dog Skin, Carnilove salmon,
            Happy dog (HD) Naturcroq) prešli smo na savjet veterinara (Pula - Punta, dr. Kočar i dr. Samante (dermatologice)) na
            HD Hypersensitivity. Kako je ta hrana i dalje radila probleme kože, tako smo prešli na Natures protection white fish koja se pokazala
            odlična ali se Oskaru nije svidjela veličina krokića (jako su sitni, nema se šta grist on) pa sam ga prebacila na čistu hranu,
            bez "pileće masti" na <b>Fish 4 dogs white fish (žuta linija)</b>. Mogu samo reći da je preporođen.</p>
            <p style={{ marginBottom: '12px' }}>Također svakodnevno koristim dodatke hrani: losos ulje, povremeno kim ulje te maslinovo ulje koje je specifično za dozirat i samu konzumaciju.
            Uz to za analne žljezde dajem ili psilium ili prah Bundeva i skliski brijest koji pomogne cijeloj probavi.</p>
            <p>U našem slučaju ova hrana odgovara, treba pratiti probavu psa te davati DOZU koja je na vrečici po kg ili preporuka od veterinara!</p>
            
          </Card>
          <Card icon={<IconHrana />} title="Hrana">
            Oryx preferira mokru hranu pomiješanu sa suhom. Jede 2x dnevno u manjim
            obrocima. Njegova hrana je bila Select gold konj sa tripicama ali kako je imao probleme sa analnim žljezdama, veterinar je savjetovao da ga se prebaci
            na Hills sensitive mokru (konzerve) i suhu. 
          </Card>

          {/* Koža i krzno */}
          <Card icon={<IconKoza />} title="Koža i krzno">
            Oskarovo bijelo krzno zahtijeva redovito četkanje svaki dan. Kupam ga svakih 1 mjesec doma zbog stavljanja ampule (alergičar) i to najjače 
            Ataxxa ili Fypryst. Svakih 3 mjeseca ide u salon na šišanje. Ja doma redovno skraćujem područje oko očiju, mekuši/šapice trimerom, oko repa i spolovila. 
            Za uši koristim otopinu jabučnog octa i vode (isti omjer) ili otopinu za uši od Animology (Pet centar). Dlačice se počupaju - smetaju ali ne boli.
            Analne žljezde praznim ja sama, nakon što mi je veterinar pokazao kako se radi, čim krene sa simptomoma češkanja ušiju, grickanja repa. 
          </Card>
          <Card icon={<IconKoza />} title="Koža i krzno">
            Oryxevo krzno je nešto finijeg tipa i traži posebnu pažnju jer sve lako kupi sa poda. Četkamo ga dva
            puta dnevno. Koristimo specijalni šampon od groomerke. Kupamo svakih 10–14 dana.
          </Card>

          {/* Alergije */}
          <Card icon={<IconAlergije />} title="Alergije">
            <p style={{ marginBottom: '12px' }}>Oskar ima "sve alergije". Testiran je zbog osipa i ljuštenja kože (ljeto 2023, krv se slala u Laboklin). Ima kontaktnu alergiju na sve trave,
            buhe, hranu sa acarus siro (brašnenu grinju tj sva hrana sa žitaricama), udišne alergene peludi. Simptomi uključuju kihanje i suzne oči koje održavamo.
            Redovito čišćenje šapa nakon šetnje i prije spavanja pomaže. Po savjetu veterinara išli smo na terapiju za jačanje imuniteta godinu i pol. Počeli odmah
            po dobivenom nalazu i završili za Božić 2025. Mogu samo reći da je terapija uspješna, koža mu je stabilizirana, pogotovo jer je i hrana jako utjecala.</p>
            <p>Drugi test - test na hranu, napravljen je na zimu 2023 (Biovet SLO, vet Marko Nabergoj), slali uzorak sline. Nalaz je pokazao da ima smetnje
              kontaktnih alergena: perad, divljač (svinjetina, govedina), ovčju vunu, jabuku, jaja, laktozu, kravlje mlijeko, žitarice (ječam, heljda, pšenica,
              kukuruz, riža, pšenica-gluten /vidi šta sve spada na Google-u pod dobre i loše žitarice). Tako da mu je riba spas, čista hrana sa ribom. Od divljači
              je isprobano konja i paše mu donekle, radi mu suzne oči, pa se i to prestalo koristit. Naglašavam da svu hranu koju jede - je suha hrana, kroketi.
              Nakon ovog prvog testa napravljen je na zimu 2025 ponovno test na hranu, ali za prelaz na barf hranu - NE SMIJE.
            </p>
          </Card>
          <Card icon={<IconAlergije />} title="Alergije">
            Oryx nije tolko osjetljiv kao Oskar. Napravila se "kontrola" testom na hranu (Biovet, Marko Nabergoj) gdje je potvrđeno da smije jest samo konja što je 
            postojano već i jeo. Zbog analnih žljezda jede Hills.
          </Card>

        </div>
      </section>

    </main>
  )
}
