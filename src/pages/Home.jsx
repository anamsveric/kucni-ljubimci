export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative w-full h-screen flex items-end">

        <img
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&h=1080&fit=crop&auto=format"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 px-8 md:px-16 pb-16 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase mb-4 leading-tight">
            Kućni ljubimci
          </h1>
          <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed">
            Sve o vašim omiljenim ljubimcima — od mačaka i pasa do egzotičnih vrsta.
          </p>
          <a
            href="/o-stranici"
            className="inline-block px-6 py-3 border-2 border-white text-white font-semibold tracking-wide hover:bg-white hover:text-black transition-colors duration-300"
          >
            Saznaj više
          </a>
        </div>

      </section>
    </main>
  )
}
