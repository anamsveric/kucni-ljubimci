
export default function About() {
  return (
    <main className="flex flex-col items-center flex-1 px-12 md:px-24 pt-24 pb-16 w-full">

      {/* Intro */}
      <h1 className="text-4xl md:text-5xl font-semibold text-(--text-h) mb-10 text-center">
        O stranici
      </h1>
      <p className="text-(--text) text-lg leading-relaxed text-center mb-30">
        Ova stranica nastala je iz ljubavi prema životinjama. Ovdje možete
        saznati više o različitim vrstama kućnih ljubimaca, njihovoj njezi i
        životu s njima.
      </p>

      <div className="w-full grid md:grid-cols-2 gap-8 mt-8">
        {/* Sekcija 1 */}
        <section>
          <h2 className="text-2xl font-semibold text-(--text-h) mb-4">
            Što možete pronaći ovdje?
          </h2>
          <p className="text-(--text) leading-relaxed mb-3">
            Svaki ljubimac poseban je na svoj način — od karaktera i navika do
            specifičnih potreba njege. Na ovoj stranici donosimo priče i informacije
            o našim ljubimcima Oskaru i Oryxu.
          </p>
          <p className="text-(--text) leading-relaxed">
            Bez obzira jeste li iskusni vlasnik ili tek razmišljate o usvajanju
            ljubimca, ovdje ćete naći nešto korisno.
          </p>
        </section>

        {/* Sekcija 2 */}
        <section>
          <h2 className="text-2xl font-semibold text-(--text-h) mb-4">
            Zašto baš ovi ljubimci?
          </h2>
          <p className="text-(--text) leading-relaxed mb-3">
            Oskar i Oryx nisu samo kućni ljubimci — oni su dio obitelji. Svaki dan
            donose radost, smijeh i ponekad malo kaosa.
          </p>
          <p className="text-(--text) leading-relaxed">
            Pratite nas, upoznajte njihove osobnosti i možda se i sami pronađete
            u nekim situacijama koje opisujemo.
          </p>
        </section>
      </div>

    </main>
  )
}
