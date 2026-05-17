import Image from "next/image"
import logo from "./assets/novio-logo-white-transparent.png"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black">

      <section className="relative h-screen overflow-hidden">

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

        <div className="absolute inset-0 bg-black/65" />

        {/* Header */}
        <header className="absolute top-0 left-0 z-20 w-full px-6 py-6 md:px-10">

          <div className="flex items-center justify-between">

            <Image
              src={logo}
              alt="Novio Technologies"
              className="w-32 md:w-44 h-auto"
              priority
            />

            <div className="hidden xl:flex items-center gap-6 text-white">

              <nav className="flex items-center gap-7 text-[14px] font-medium text-white/80">

                <a href="#" className="transition hover:text-white">
                  Home
                </a>

                <a href="#" className="transition hover:text-white">
                  About Us
                </a>

                <div className="flex items-center gap-1 cursor-pointer transition hover:text-white">

                  <span>Services</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>

                </div>

                <a href="#" className="transition hover:text-white">
                  Contact Us
                </a>

                <a href="#" className="transition hover:text-white">
                  Referral Program
                </a>

              </nav>

              <div className="h-8 w-px bg-white/10" />

              <div className="flex items-center gap-4">

                <button
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-full
                    bg-white
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-black
                    transition
                    hover:scale-105
                    hover:bg-[#b3a5ff]
                  "
                >

                  <span>Get Started</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition group-hover:translate-x-1"
                  >
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>

                </button>

                <div className="leading-tight">

                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                    Call us now:
                  </p>

                  <p className="mt-1 text-[17px] font-semibold text-white">
                    +49 177 8932219
                  </p>

                </div>

              </div>

            </div>

          </div>

        </header>

        {/* Hero */}
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

      </section>

      {/* Section */}
      <section className="relative z-20 bg-[#050505] px-6 py-28 text-white md:px-10">

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

      {/* Footer */}
      <footer className="relative bg-black px-6 pt-24 pb-8 text-white md:px-10">

        <div className="mx-auto grid max-w-7xl gap-14 border-t border-white/10 pt-16 md:grid-cols-4">

          <div>

            <Image
              src={logo}
              alt="Novio Technologies"
              className="w-36 h-auto"
            />

            <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/50">
              Novio Technologies creates premium websites and digital experiences
              for modern service based businesses.
            </p>

            <div className="mt-8">

              <p className="text-lg font-semibold text-white">
                +49 177 8932219
              </p>

              <p className="mt-1 text-sm text-white/45">
                Got questions? Call us 24/7
              </p>

            </div>

          </div>

          <div>

            <h3 className="text-lg font-semibold">
              Working Hours
            </h3>

            <div className="mt-6 space-y-4 text-sm text-white/55">

              <p>Monday – Friday</p>
              <p className="text-white">08:00 am – 06:00 pm</p>

              <p className="pt-2">Saturday</p>
              <p className="text-white">09:00 am – 05:00 pm</p>

            </div>

          </div>

          <div>

            <h3 className="text-lg font-semibold">
              Navigation
            </h3>

            <nav className="mt-6 flex flex-col gap-4 text-sm text-white/55">

              <a href="#" className="hover:text-white">
                Home
              </a>

              <a href="#" className="hover:text-white">
                About Us
              </a>

              <a href="#" className="hover:text-white">
                Services
              </a>

              <a href="#" className="hover:text-white">
                Referral Program
              </a>

              <a href="#" className="hover:text-white">
                Contact Us
              </a>

            </nav>

          </div>

          <div>

            <h3 className="text-lg font-semibold">
              Contact Us
            </h3>

            <div className="mt-6 space-y-4 text-sm text-white/55">

              <div>
                <p className="text-white">Address:</p>
                <p>Based in Germany</p>
              </div>

              <div>
                <p className="text-white">Email:</p>
                <p>contact@noviotechnologies.com</p>
              </div>

            </div>

            <div className="mt-8 flex gap-3">

<div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/15">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 90 90"
    className="w-6 h-6 fill-white"
  >
    <path d="M 62.263 90 H 27.738 C 12.443 90 0 77.557 0 62.263 V 27.738 C 0 12.443 12.443 0 27.738 0 h 34.525 C 77.557 0 90 12.443 90 27.738 v 34.525 C 90 77.557 77.557 90 62.263 90 z M 27.738 7 C 16.303 7 7 16.303 7 27.738 v 34.525 C 7 73.697 16.303 83 27.738 83 h 34.525 C 73.697 83 83 73.697 83 62.263 V 27.738 C 83 16.303 73.697 7 62.263 7 H 27.738 z"/>
    <path d="M 45.255 70.47 c -13.904 0 -25.215 -11.312 -25.215 -25.215 S 31.352 20.04 45.255 20.04 s 25.215 11.312 25.215 25.215 S 59.159 70.47 45.255 70.47 z M 45.255 27.04 c -10.044 0 -18.215 8.171 -18.215 18.215 c 0 10.044 8.171 18.215 18.215 18.215 c 10.044 0 18.215 -8.171 18.215 -18.215 C 63.471 35.211 55.3 27.04 45.255 27.04 z"/>
    <circle cx="70.557" cy="19.937" r="4.897"/>
  </svg>
</div>

            </div>

          </div>

        </div>

        <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">

          <p>
            Copyright © 2026 Novio Technologies. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>

          </div>

        </div>

      </footer>

    </main>
  )
}
