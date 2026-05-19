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

            <p className="text-lg font-semibold text-white hover:text-white/80">
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
              <p><a href="mailto:contact@noviotechnologies.com" className="hover:text-white">contact@noviotechnologies.com</a></p>
            </div>

            <div>
              <p className="text-white">Phone:</p>
              <p><a href="tel:+491778932219" className="hover:text-white">+49 177 8932219</a></p>
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
<a
  href="https://wa.me/491778932219"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/15"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
    className="h-6 w-6 fill-white"
  >
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
  </svg>
</a>
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