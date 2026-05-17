"use client"

import Image from "next/image"
import { useState } from "react"
import logo from "./assets/novio-logo-white-transparent.png"

export default function Home() {
  const [open, setOpen] = useState(false)

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

        <header className="absolute top-0 left-0 z-30 w-full px-6 py-6 md:px-10">

          <div className="flex items-center justify-between">

            <Image
              src={logo}
              alt="Novio Technologies"
              className="w-44 md:w-44 h-auto"
              priority
            />

            <button
              onClick={() => setOpen(!open)}
              className="xl:hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md"
              aria-label="Toggle menu"
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </svg>
              )}
            </button>

            <div className="hidden xl:flex items-center gap-6 text-white">

              <nav className="flex items-center gap-7 text-[14px] font-medium text-white/80">
                <a href="#" className="transition hover:text-white">Home</a>
                <a href="#" className="transition hover:text-white">About Us</a>
                <a href="#" className="transition hover:text-white">Services</a>
                <a href="#" className="transition hover:text-white">Contact Us</a>
                <a href="#" className="transition hover:text-white">Referral Program</a>
              </nav>

              <div className="h-8 w-px bg-white/10" />

              <div className="flex items-center gap-4">

                <button className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-105 hover:bg-[#b3a5ff]">
                  <span>Get Started</span>
                  <span className="transition group-hover:translate-x-1">→</span>
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

          {open && (
            <div className="mt-5 rounded-3xl border border-white/10 bg-black/80 p-6 text-white shadow-2xl backdrop-blur-xl xl:hidden">

              <nav className="flex flex-col gap-5 text-sm font-medium text-white/80">
                <a href="#" onClick={() => setOpen(false)}>Home</a>
                <a href="#" onClick={() => setOpen(false)}>About Us</a>
                <a href="#" onClick={() => setOpen(false)}>Services</a>
                <a href="#" onClick={() => setOpen(false)}>Contact Us</a>
                <a href="#" onClick={() => setOpen(false)}>Referral Program</a>
              </nav>

              <button className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black">
                Get Started →
              </button>

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                  Call us now:
                </p>
                <p className="mt-1 text-[17px] font-semibold text-white">
                  +49 177 8932219
                </p>
              </div>

            </div>
          )}

        </header>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">

          <p className="mb-4 text-[10px] md:text-sm uppercase tracking-[0.35em] text-white/50">
            DIGITAL EXPERIENCES
          </p>

          <h1 className="max-w-5xl text-[52px] md:text-[140px] font-semibold tracking-[-0.08em] leading-[0.9]">
            Novio Technologies
          </h1>

          <p className="mt-5 max-w-xl text-sm md:text-xl leading-relaxed text-white/65">
            Modern websites and digital experiences for businesses that want to stand out.
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

      {/* Footer bleibt wie bei dir */}

    </main>
  )
}
