"use client"

import Image from "next/image"
import { useState } from "react"
import logo from "../assets/novio-logo-white-transparent.png"

export default function ContactPage() {
  const [open, setOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* Header */}
      <header className="absolute top-0 left-0 z-30 w-full px-6 py-6 md:px-10">

        <div className="flex items-center justify-between">

          <a href="/">
            <Image
              src={logo}
              alt="Novio Technologies"
              className="w-40 md:w-44 h-auto"
              priority
            />
          </a>

          {/* Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md"
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

          {/* Desktop */}
          <div className="hidden xl:flex items-center gap-6 text-white">

            <nav className="flex items-center gap-7 text-[14px] font-medium text-white/80">
              <a href="/" className="hover:text-white">Home</a>
              <a href="#" className="hover:text-white">About Us</a>
              <a href="#" className="hover:text-white">Services</a>
              <a href="/contact" className="text-white">Contact Us</a>
              <a href="#" className="hover:text-white">Referral Program</a>
            </nav>

            <div className="h-8 w-px bg-white/10" />

            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-105 hover:bg-[#b3a5ff]">
              Get Started
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-5 rounded-3xl border border-white/10 bg-black/80 p-6 backdrop-blur-xl xl:hidden">

            <nav className="flex flex-col gap-5 text-sm font-medium text-white/80">
              <a href="/">Home</a>
              <a href="#">About Us</a>
              <a href="#">Services</a>
              <a href="/contact">Contact Us</a>
              <a href="#">Referral Program</a>
            </nav>

          </div>
        )}

      </header>

      {/* Content */}
      <section className="flex min-h-screen items-center justify-center px-6 pt-40 pb-24">

        <div className="w-full max-w-3xl">

          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/40">
            CONTACT
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.06em] md:text-8xl">
            Let’s build something modern.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/55">
            Reach out to Novio Technologies for premium websites,
            digital experiences and creative solutions tailored to your business.
          </p>

          {/* Form */}
          <div className="mt-14 grid gap-5">

            <input
              type="text"
              placeholder="Your Name"
              className="h-14 rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none placeholder:text-white/35"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="h-14 rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none placeholder:text-white/35"
            />

            <textarea
              placeholder="Tell us about your project"
              rows={6}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white outline-none placeholder:text-white/35"
            />

            <button className="mt-2 flex w-fit items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-105 hover:bg-[#b3a5ff]">
              Send Message →
            </button>

          </div>

        </div>

      </section>

    </main>
  )
}
