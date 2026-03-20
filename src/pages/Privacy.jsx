export default function Privacy() {
  return (
    <main className="flex flex-col flex-1 px-6 pt-24 pb-24 max-w-2xl mx-auto w-full">
      <h1 className="text-4xl md:text-5xl font-semibold text-(--text-h) mb-10">
        Politika privatnosti
      </h1>

      <div className="flex flex-col gap-8 text-(--text) leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-(--text-h) mb-2">Prikupljanje podataka</h2>
          <p>
            Ova stranica ne prikuplja osobne podatke posjetitelja. Ne koristimo kolačiće
            za praćenje niti dijeljenje podataka s trećim stranama.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-(--text-h) mb-2">Kontakt podaci</h2>
          <p>
            Ako nas kontaktirate putem e-maila, vaši podaci (ime, adresa e-pošte i poruka)
            koristit će se isključivo za odgovor na vaš upit.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-(--text-h) mb-2">Vanjske poveznice</h2>
          <p>
            Stranica može sadržavati veze prema vanjskim web stranicama. Nismo odgovorni
            za politiku privatnosti tih stranica.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-(--text-h) mb-2">Promjene politike</h2>
          <p>
            Zadržavamo pravo izmjene ove politike privatnosti u bilo kojem trenutku.
            Promjene stupaju na snagu objavom na ovoj stranici.
          </p>
        </section>
      </div>
    </main>
  )
}
