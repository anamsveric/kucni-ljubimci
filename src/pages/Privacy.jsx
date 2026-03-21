export default function Privacy() {
  return (
    <main className="flex flex-col flex-1 px-6 pt-24 pb-16 max-w-2xl mx-auto w-full">
      <h1 className="text-4xl md:text-5xl font-semibold mb-2" style={{ color: 'var(--text-h)' }}>
        Politika privatnosti
      </h1>
      <p className="text-sm mb-10" style={{ color: 'var(--text)' }}>
        Zadnja izmjena: 21. ožujka 2026.
      </p>

      <div className="flex flex-col gap-8 leading-relaxed" style={{ color: 'var(--text)' }}>
        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-h)' }}>1. Uvod</h2>
          <p>
            Dobrodošli na stranicu <strong style={{ color: 'var(--text-h)' }}>Naši kućni ljubimci</strong>.
            Ova politika privatnosti objašnjava kako prikupljamo, koristimo i štitimo vaše podatke
            kada posjećujete ovu stranicu. Molimo pažljivo pročitajte ove informacije.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-h)' }}>2. Kolačići (cookies)</h2>
          <p className="mb-3">
            Ova stranica koristi kolačiće kako bi poboljšala vaše korisničko iskustvo.
            Kolačići su male tekstualne datoteke koje se pohranjuju na vašem uređaju.
          </p>
          <p className="mb-3">Koristimo sljedeće vrste kolačića:</p>
          <ul className="list-disc list-inside flex flex-col gap-2 pl-2">
            <li>
              <strong style={{ color: 'var(--text-h)' }}>Nužni kolačići</strong> — potrebni za
              ispravno funkcioniranje stranice (npr. pamćenje vaše odluke o kolačićima).
            </li>
            <li>
              <strong style={{ color: 'var(--text-h)' }}>Funkcionalni kolačići</strong> — pamte
              vaše postavke radi boljeg iskustva pri ponovnom posjetu.
            </li>
          </ul>
          <p className="mt-3">
            Možete upravljati kolačićima putem postavki vašeg preglednika. Odbijanjem kolačića
            neke funkcionalnosti stranice mogu biti ograničene.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-h)' }}>3. Prikupljanje podataka</h2>
          <p>
            Ova stranica <strong style={{ color: 'var(--text-h)' }}>ne prikuplja osobne podatke</strong> posjetitelja
            automatski. Ne koristimo analitiku, reklamne mreže ni alate za praćenje treće strane.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-h)' }}>4. Kontakt podaci</h2>
          <p>
            Ako nas kontaktirate putem kontakt obrasca ili e-maila, vaši podaci (ime, adresa
            e-pošte i poruka) koristit će se isključivo za odgovor na vaš upit i neće biti
            dijeljeni s trećim stranama.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-h)' }}>5. Vanjske poveznice</h2>
          <p>
            Stranica može sadržavati veze prema vanjskim web stranicama (npr. Unsplash za slike).
            Nismo odgovorni za politiku privatnosti tih stranica. Preporučujemo da pregledate
            njihove politike privatnosti.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-h)' }}>6. Vaša prava</h2>
          <p className="mb-3">U skladu s GDPR regulativom, imate pravo na:</p>
          <ul className="list-disc list-inside flex flex-col gap-1.5 pl-2">
            <li>Pristup vašim osobnim podacima</li>
            <li>Ispravak netočnih podataka</li>
            <li>Brisanje vaših podataka</li>
            <li>Prigovor na obradu podataka</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-h)' }}>7. Promjene politike</h2>
          <p>
            Zadržavamo pravo izmjene ove politike privatnosti u bilo kojem trenutku.
            Promjene stupaju na snagu objavom na ovoj stranici, a datum zadnje izmjene
            bit će ažuriran na vrhu dokumenta.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-h)' }}>8. Kontakt</h2>
          <p>
            Za sva pitanja u vezi s ovom politikom privatnosti, možete nas kontaktirati
            putem{' '}
            <a
              href="/kontakt"
              className="underline underline-offset-2 hover:no-underline transition-all"
              style={{ color: 'var(--accent)' }}
            >
              kontakt stranice
            </a>
            {' '}ili posjetom{' '}
            <a
              href="https://anamsveric.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:no-underline transition-all"
              style={{ color: 'var(--accent)' }}
            >
              anamsveric.github.io
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  )
}
