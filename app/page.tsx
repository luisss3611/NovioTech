"use client"

import { useEffect, useRef } from "react"
import Header from "./components/header"
import Footer from "./components/footer"

export default function Home() {
  const desktopVideoRef = useRef<HTMLVideoElement | null>(null)
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null)

  const startVideos = () => {
    desktopVideoRef.current?.play().catch(() => {})
    mobileVideoRef.current?.play().catch(() => {})
  }

  useEffect(() => {
    startVideos()

    const timeout = setTimeout(() => {
      startVideos()
    }, 800)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black">
      <section
        onClick={startVideos}
        onTouchStart={startVideos}
        className="relative h-screen overflow-hidden"
      >
        <video
          ref={desktopVideoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 hidden h-full w-full object-cover opacity-70 md:block"
        >
          <source src="/desktop_vid.mp4" type="video/mp4" />
        </video>

        <video
          ref={mobileVideoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-70 md:hidden"
        >
          <source src="/mobile_vid.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/65" />

        <Header />

        <div className="absolute left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 md:flex">
          <a
            href="https://instagram.com/noviotechnologies"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl transition hover:scale-110 hover:bg-white/20"
          >
            IG
          </a>

          <a
            href="https://wa.me/491778932219"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl transition hover:scale-110 hover:bg-white/20"
          >
            WA
          </a>
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#b3a5ff] md:text-sm">
            DIGITAL EXPERIENCES
          </p>

          <h1 className="max-w-5xl text-[52px] font-semibold leading-[0.9] tracking-[-0.08em] md:text-[140px]">
            Novio Technologies
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/65 md:text-xl">
            Modern websites and digital experiences for businesses that want to stand out.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://cal.com/noviotechnologies"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:scale-105 md:px-8 md:py-4"
            >
              Book a Call
            </a>

            <a
              href="/about-us"
              className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10 md:px-8 md:py-4"
            >
              View Work
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-20 bg-[#050505] px-6 py-28 text-white md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#b3a5ff]">
            WHAT WE DO
          </p>

          <h2 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-8xl">
            Premium digital experiences for businesses that want to look modern.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/55">
            We create modern websites, branding and digital experiences focused
            on clarity, trust and strong first impressions.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}