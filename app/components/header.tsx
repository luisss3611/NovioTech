"use client"

import Image from "next/image"
import { useState } from "react"
import logo from "../assets/novio-logo-white-transparent.png"

const services = [
  { name: "Website Development", href: "/services/website-development" },
  { name: "Brand Scaling", href: "/services/brand-scaling" },
  { name: "Paid Advertising", href: "/services/paid-advertising" },
  { name: "SEO Optimization", href: "/services/seo-optimization" },
  { name: "CRM Systems", href: "/services/crm-systems" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 z-30 w-full px-6 py-6 md:px-10">
      <div className="flex items-center justify-between">
        <a href="/">
          <Image src={logo} alt="Novio Technologies" className="w-40 md:w-44 h-auto" priority />
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md"
        >
          {open ? "✕" : "☰"}
        </button>

        <div className="hidden xl:flex items-center gap-6 text-white">
          <nav className="flex items-center gap-7 text-[14px] font-medium text-white/80">
            <a href="/" className="transition hover:text-white">Home</a>
            <a href="/about-us" className="transition hover:text-white">About Us</a>

                <div className="group relative py-4 -my-4">
                  <button className="flex items-center gap-1 transition hover:text-white">
                Services <svg
  xmlns="http://www.w3.org/2000/svg"
  width="14"
  height="14"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="mt-[1px]"
>
  <path d="m6 9 6 6 6-6"/>
</svg>
              </button>

              <div className="invisible absolute left-0 top-full w-64 rounded-2xl border border-white/10 bg-black/80 p-3 opacity-0 shadow-2xl backdrop-blur-xl transition group-hover:visible group-hover:opacity-100">
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block rounded-xl px-4 py-3 text-sm text-white/65 transition hover:bg-white/10 hover:text-white"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            <a href="/contact" className="transition hover:text-white">Contact Us</a>
            <a href="/referral-program" className="transition hover:text-white">Referral Program</a>
          </nav>

          <div className="h-8 w-px bg-white/10" />

          <div className="flex items-center gap-4">
            <button className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-105 hover:bg-[#b3a5ff]">
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
</svg>            </button>

            <div className="leading-tight">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">Call us now:</p>
              <p className="mt-1 text-[17px] font-semibold text-white">+49 177 8932219</p>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="mt-5 rounded-3xl border border-white/10 bg-black/80 p-6 text-white shadow-2xl backdrop-blur-xl xl:hidden">
          <nav className="flex flex-col gap-5 text-sm font-medium text-white/80">
            <a href="/" onClick={() => setOpen(false)}>Home</a>
            <a href="/about-us" onClick={() => setOpen(false)}>About Us</a>

            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between text-left"
            >
              <span>Services</span>
              <span>{servicesOpen ? "−" : "+"}</span>
            </button>

            {servicesOpen && (
              <div className="ml-4 flex flex-col gap-4 border-l border-white/10 pl-4 text-white/55">
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    onClick={() => setOpen(false)}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            )}

            <a href="/contact" onClick={() => setOpen(false)}>Contact Us</a>
            <a href="/referral-program" onClick={() => setOpen(false)}>Referral Program</a>
          </nav>

          <button className="group mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#b3a5ff]">
            <span>Get Started</span>
            <span className="transition group-hover:translate-x-1">→</span>
          </button>

          <div className="mt-5 border-t border-white/10 pt-5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">Call us now:</p>
            <p className="mt-1 text-[17px] font-semibold text-white">+49 177 8932219</p>
          </div>
        </div>
      )}
    </header>
  )
}