
export default function Oryx() {
  return (
    <main className="flex flex-col items-center flex-1 px-12 md:px-24 pt-24 pb-16 w-full">

      <h1 className="text-4xl md:text-5xl font-semibold text-(--text-h) mb-10 text-center">
        Oryx
      </h1>

      {/* 1. Slika */}
      <section className="w-full mb-12">
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format"
          alt="Oryx"
          className="max-w-full h-auto rounded-xl"
        />
      </section>

      <div className="w-full grid md:grid-cols-2 gap-8 mb-4">
        {/* 2. Opis */}
        <section>
          <h2 className="text-2xl font-semibold text-(--text-h) mb-3">Ukratko</h2>
          <p className="text-(--text) leading-relaxed">
            Oryx je miran i razborit pas s jedinstvenim karakterom. Voli promatrati
            okolinu, odabire kome će se pribliziti i uvijek pronađe najudobnije
            mjesto u kući za odmor.
          </p>
        </section>

        {/* 3. Pasmina */}
        <section>
          <h2 className="text-2xl font-semibold text-(--text-h) mb-3">Pasmina</h2>
          <p className="text-(--text) leading-relaxed">
            Maltezer. Čistokrvna pasmina poznata po dugoj, bijeloj i svilenkastoj
            dlaci. Inteligentni i lako prilagodljivi psi koji dobro podnose život
            u stanu.
          </p>
        </section>
      </div>


    </main>
  )
}
