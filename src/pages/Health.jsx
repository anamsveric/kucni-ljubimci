
export default function Health() {
  return (
    <main className="flex flex-col items-center flex-1 px-12 md:px-24 pt-24 pb-24 w-full">

      <h1 className="text-4xl md:text-5xl font-semibold text-(--text-h) mb-12 text-center">
        Zdravlje
      </h1>

      <div className="w-full grid md:grid-cols-2 gap-10">

        {/* Oskar */}
        <section className="flex flex-col gap-8">
          <h2 className="text-2xl font-semibold text-(--text-h) text-center border-b border-(--border) pb-3">Oskar</h2>

          <div>
            <h3 className="text-lg font-medium text-(--text-h) mb-2">Hrana</h3>
            <p className="text-(--text) leading-relaxed">
              Oskar jede suhu hranu za male pasmine, dva puta dnevno. Pazi se na
              grickalice i hranu s visokim udjelom masti.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-(--text-h) mb-2">Koža</h3>
            <p className="text-(--text) leading-relaxed">
              Oskarska koža je u dobrom stanju. Povremeno se pojavi suhoća
              oko njuške, naročito zimi, što se rješava prirodnim balzamima.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-(--text-h) mb-2">Održavanje kože</h3>
            <p className="text-(--text) leading-relaxed">
              Četkanje svaki drugi dan, kupanje jednom u dva tjedna. Koriste se
              proizvodi bez parfema prilagođeni malim pasminama.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-(--text-h) mb-2">Alergije</h3>
            <p className="text-(--text) leading-relaxed">
              Oskar nema dijagnosticiranih alergija. Preventivno se izbjegava
              hrana s umjetnim bojilima i konzervansima.
            </p>
          </div>
        </section>

        {/* Oryx */}
        <section className="flex flex-col gap-8">
          <h2 className="text-2xl font-semibold text-(--text-h) text-center border-b border-(--border) pb-3">Oryx</h2>

          <div>
            <h3 className="text-lg font-medium text-(--text-h) mb-2">Hrana</h3>
            <p className="text-(--text) leading-relaxed">
              Oryx ima osjetljiv probavni sustav pa je na prilagođenoj prehrani.
              Jede obroke s ograničenim sastojcima i bez žitarica.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-(--text-h) mb-2">Koža</h3>
            <p className="text-(--text) leading-relaxed">
              Oryx ima nešto osjetljiviju kožu ispod dlake. Redovito se prati
              hipoalergijskim šamponom kako bi se izbjeglo iritiranje.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-(--text-h) mb-2">Održavanje kože</h3>
            <p className="text-(--text) leading-relaxed">
              Oryx se češlja svakodnevno zbog duge svilenkaste dlake. Kupanje
              jednom tjedno s hipoalergijskim šamponom i regeneratorom za pse.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-(--text-h) mb-2">Alergije</h3>
            <p className="text-(--text) leading-relaxed">
              Oryx ima potvrđenu alergiju na određene vrste proteina. Pod
              veterinarskim nadzorom i na dijeti koja isključuje pšenicu i
              neke vrste mesa.
            </p>
          </div>
        </section>

      </div>
    </main>
  )
}
