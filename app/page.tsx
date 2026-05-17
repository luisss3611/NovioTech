export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden bg-black">

      <div className="absolute inset-0 overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 scale-[3] md:scale-150 pointer-events-none"
          src="https://www.youtube.com/embed/8BsVwcr4UT4?autoplay=1&mute=1&controls=0&loop=1&playlist=8BsVwcr4UT4&playsinline=1&showinfo=0&modestbranding=1&rel=0"
          title="Background Video"
          allow="autoplay; fullscreen"
        />
      </div>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-[clamp(60px,10vw,170px)] font-semibold tracking-[-0.08em]">
          Novio Technologies
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-white/70">
          Modern websites and digital experiences for businesses that want to stand out.
        </p>
      </div>
    </main>
  )
}
