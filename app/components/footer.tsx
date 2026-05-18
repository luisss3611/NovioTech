import Image from "next/image"
import logo from "../assets/novio-logo-white-transparent.png"

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] px-6 pt-24 pb-8 text-white md:px-10">

      <div className="mx-auto grid max-w-7xl gap-14 border-t border-white/10 pt-16 md:grid-cols-4">

        <div>

          <a href="/">
            <Image
              src={logo}
              alt="Novio Technologies"
              className="w-36 h-auto"
            />
          </a>

          <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/50">
            Novio Technologies creates premium websites and digital experiences
            for modern service based businesses.
          </p>

          <div className="mt-8">

            <p className="text-lg font-semibold text-white">
              <a href="tel:+491778932219">+49 177 8932219</a>
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

            <a href="/" className="hover:text-white">
              Home
            </a>

            <a href="/about-us" className="hover:text-white">
              About Us
            </a>

            <a href="#" className="hover:text-white">
              Services
            </a>

            <a href="/referral-program" className="hover:text-white">
              Referral Program
            </a>

            <a href="/contact" className="hover:text-white">
              Contact Us
            </a>

          </nav>

        </div>

        <div>

          <a href="/contact" className="text-lg font-semibold">
            Contact Us
          </a>

          <div className="mt-6 space-y-4 text-sm text-white/55">

            <div>
              <p className="text-white">Address:</p>
              <p>Based in Germany</p>
            </div>

            <div>
              <p className="text-white">Email:</p>
              <p><a href="mailto:contact@noviotechnologies.com">contact@noviotechnologies.com</a></p>
            </div>

          </div>

          <div className="mt-8 flex gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/15">
              <a href="https://www.instagram.com/noviotechnologies" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 90 90"
                  className="h-6 w-6 fill-white"
                >
                  <path d="M 62.263 90 H 27.738 C 12.443 90 0 77.557 0 62.263 V 27.738 C 0 12.443 12.443 0 27.738 0 h 34.525 C 77.557 0 90 12.443 90 27.738 v 34.525 C 90 77.557 77.557 90 62.263 90 z M 27.738 7 C 16.303 7 7 16.303 7 27.738 v 34.525 C 7 73.697 16.303 83 27.738 83 h 34.525 C 73.697 83 83 73.697 83 62.263 V 27.738 C 83 16.303 73.697 7 62.263 7 H 27.738 z"/>
                <path d="M 45.255 70.47 c -13.904 0 -25.215 -11.312 -25.215 -25.215 S 31.352 20.04 45.255 20.04 s 25.215 11.312 25.215 25.215 S 59.159 70.47 45.255 70.47 z M 45.255 27.04 c -10.044 0 -18.215 8.171 -18.215 18.215 c 0 10.044 8.171 18.215 18.215 18.215 c 10.044 0 18.215 -8.171 18.215 -18.215 C 63.471 35.211 55.3 27.04 45.255 27.04 z"/>
                <circle cx="70.557" cy="19.937" r="4.897"/>
              </svg>
              </a>
            </div>

          </div>

        </div>

      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">

        <p>
          Copyright © 2026 Novio Technologies. All rights reserved.
        </p>

        <div className="flex gap-6">

          <a href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </a>

          <a href="/terms-and-conditions" className="hover:text-white">
            Terms & Conditions
          </a>

        </div>

      </div>

    </footer>
  )
}