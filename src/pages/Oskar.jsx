
export default function Oskar() {
  return (
    <main className="flex flex-col items-center flex-1 px-12 md:px-24 pt-24 pb-16 w-full">

      <h1 className="text-4xl md:text-5xl font-semibold text-(--text-h) mb-10 text-center">
        Oskar
      </h1>

      {/* 1. Slika */}
      <section className="w-full mb-12">
        <img
          src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=800&auto=format"
          alt="Oskar"
          className="max-w-full h-auto rounded-xl"
        />
      </section>

      <div className="w-full grid md:grid-cols-2 gap-8 mb-4">
        {/* 2. Opis */}
        <section>
          <h2 className="text-2xl font-semibold text-(--text-h) mb-3">Ukratko</h2>
          <p className="text-(--text) leading-relaxed">
            Oskar je pun energije i bezuvjetne ljubavi. Uvijek je prvi na vratima
            kad se netko vrati kući i nikad ne propušta priliku za igru. Voli
            šetnje, trčanje i maziti se navečer na kauču.
          </p>
        </section>

        {/* 3. Pasmina */}
        <section>
          <h2 className="text-2xl font-semibold text-(--text-h) mb-3">Pasmina</h2>
          <p className="text-(--text) leading-relaxed">
            Maltezer mješanac. Sitne građe, bijele dlake i velikih tamnih očiju.
            Pasmina poznata po toplom karakteru i privrženosti obitelji.
          </p>
        </section>
      </div>


    </main>
  )
}
