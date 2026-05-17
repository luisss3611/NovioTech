export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden bg-black">

      {/* Desktop Video */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <iframe
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 scale-100 pointer-events-none opacity-70"
          src="https://www.youtube.com/embed/8BsVwcr4UT4?autoplay=1&mute=1&controls=0&loop=1&playlist=8BsVwcr4UT4&playsinline=1&showinfo=0&modestbranding=1&rel=0"
          title="Desktop Background Video"
          allow="autoplay; fullscreen"
        />
      </div>

      {/* Mobile Video */}
      <div className="absolute inset-0 overflow-hidden md:hidden">
        <iframe
          className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 scale-[1.7] pointer-events-none opacity-70"
          src="https://www.youtube.com/embed/TU1-KB3I_4s?autoplay=1&mute=1&controls=0&loop=1&playlist=TU1-KB3I_4s&playsinline=1&showinfo=0&modestbranding=1&rel=0"
          title="Mobile Background Video"
          allow="autoplay; fullscreen"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">

        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-white/50">
          Digital Experiences
        </p>

        <h1 className="text-[clamp(60px,10vw,170px)] font-semibold tracking-[-0.08em] leading-none">
          Novio Technologies
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/70">
          Modern websites and digital experiences for businesses that want to stand out.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:scale-105">
            Book a Call
          </button>

          <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-medium backdrop-blur-md transition hover:bg-white/10">
            View Work
          </button>
        </div>

      </div>

    </main>
  )
}
