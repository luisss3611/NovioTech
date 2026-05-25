"use client"

import Image from "next/image"
import { useState } from "react"
import logo from "./assets/novio-logo-white-transparent.png"
import Header from "./components/header"
import Footer from "./components/footer"

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
            src="pc_vid.mov"
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
            src="mobile_vid.mov"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/65" />

        <Header />

        {/* Social Buttons Left */}
        <div className="absolute left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 md:flex">

          {/* Instagram */}
          <a
            href="https://instagram.com/noviotechnologies"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl transition hover:scale-110 hover:bg-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 90 90"
              className="h-6 w-6 fill-white"
              width="18"
              height="18"
            >
              <path d="M 62.263 90 H 27.738 C 12.443 90 0 77.557 0 62.263 V 27.738 C 0 12.443 12.443 0 27.738 0 h 34.525 C 77.557 0 90 12.443 90 27.738 v 34.525 C 90 77.557 77.557 90 62.263 90 z M 27.738 7 C 16.303 7 7 16.303 7 27.738 v 34.525 C 7 73.697 16.303 83 27.738 83 h 34.525 C 73.697 83 83 73.697 83 62.263 V 27.738 C 83 16.303 73.697 7 62.263 7 H 27.738 z"/>
              <path d="M 45.255 70.47 c -13.904 0 -25.215 -11.312 -25.215 -25.215 S 31.352 20.04 45.255 20.04 s 25.215 11.312 25.215 25.215 S 59.159 70.47 45.255 70.47 z M 45.255 27.04 c -10.044 0 -18.215 8.171 -18.215 18.215 c 0 10.044 8.171 18.215 18.215 18.215 c 10.044 0 18.215 -8.171 18.215 -18.215 C 63.471 35.211 55.3 27.04 45.255 27.04 z"/>
              <circle cx="70.557" cy="19.937" r="4.897"/>
            </svg>
          </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/491778932219"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl transition hover:scale-110 hover:bg-white/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="h-6 w-6 fill-white"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
          </svg>
        </a>

        </div>

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

      <Footer />

    </main>
  )
}