import Image from "next/image"
import logo from "./assets/novio-logo-white-transparent.png"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black">

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">

        {/* Desktop Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 hidden h-full w-full object-cover opacity-70 md:block"
        >
          <source
            src="https://res.cloudinary.com/dky0vdva5/video/upload/q_auto/f_auto/v1779053491/v1_landing_page_vid_vzmz4x.mov"
            type="video/mp4"
          />
        </video>

        {/* Mobile Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-70 md:hidden"
        >
          <source
            src="https://res.cloudinary.com/dky0vdva5/video/upload/q_auto/f_auto/v1779053480/0517_xovrnq.mov"
            type="video/mp4"
          />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Navbar */}
        <header className="absolute top-0 left-0 z-20 w-full px-6 py-6 md:px-10">
          <Image
            src={logo}
            alt="Novio Technologies"
            className="w-32 md:w-44 h-auto"
            priority
          />
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">

          <p className="mb-4 text-[10px] md:text-sm uppercase tracking-[0.35em] text-white/50">
            DIGITAL EXPERIENCES
          </p>

          <h1 className="max-w-5xl text-[52px] md:text-[140px] font-semibold tracking-[-0.08em] leading-[0.9]">
            Novio Technologies
          </h1>

          <p className="mt-5 max-w-xl text-sm md:text-xl leading-relaxed text-white/65">
            Modern websites and digital experiences
            for businesses that want to stand out.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <button className="rounded-full bg-white px-7 py-3 md:px-8 md:py-4 text-sm font-medium text-black transition hover:scale-105">
              Book a Call
            </button>

            <button className="rounded-full border border-white/20 bg-white/5 px-7 py-3 md:px-8 md:py-4 text-sm font-medium backdrop-blur-md transition hover:bg-white/10">
              View Work
            </button>

          </div>

        </div>

{/* Real Torn Paper Transition */}
<div className="absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-none">

  {/* Shadow */}
  <div className="absolute inset-x-0 top-0 h-12 bg-black/40 blur-2xl" />

  <svg
    viewBox="0 0 1440 220"
    preserveAspectRatio="none"
    className="relative h-40 md:h-56 w-full"
  >
    <path
      d="
      M0,80
      C60,120 120,60 180,100
      C240,140 300,70 360,110
      C420,150 480,75 540,120
      C600,160 660,85 720,130
      C780,170 840,95 900,135
      C960,175 1020,90 1080,125
      C1140,160 1200,85 1260,115
      C1320,145 1380,95 1440,120
      L1440,220
      L0,220
      Z
      "
      fill="#050505"
    />

    {/* subtle paper edge */}
    <path
      d="
      M0,80
      C60,120 120,60 180,100
      C240,140 300,70 360,110
      C420,150 480,75 540,120
      C600,160 660,85 720,130
      C780,170 840,95 900,135
      C960,175 1020,90 1080,125
      C1140,160 1200,85 1260,115
      C1320,145 1380,95 1440,120
      "
      fill="none"
      stroke="rgba(255,255,255,0.06)"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>

</div>

      </section>

      {/* Second Section */}
      <section className="relative z-30 bg-[#050505] px-6 py-28 text-white md:px-10">

        <div className="mx-auto max-w-6xl">

          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/40">
            WHAT WE DO
          </p>

          <h2 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-8xl">
            Premium websites for businesses that want to look expensive.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/55">
            We design clean, cinematic and high converting digital experiences
            for local businesses, service providers and modern brands.
          </p>

        </div>

      </section>

    </main>
  )
}
