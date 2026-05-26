"use client"

import { useEffect, useRef } from "react"
import Header from "./components/header"
import Footer from "./components/footer"
import Script from "next/script"

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 90 90"
              className="h-6 w-6 fill-white"
            >
              <path d="M 62.263 90 H 27.738 C 12.443 90 0 77.557 0 62.263 V 27.738 C 0 12.443 12.443 0 27.738 0 h 34.525 C 77.557 0 90 12.443 90 27.738 v 34.525 C 90 77.557 77.557 90 62.263 90 z M 27.738 7 C 16.303 7 7 16.303 7 27.738 v 34.525 C 7 73.697 16.303 83 27.738 83 h 34.525 C 73.697 83 83 73.697 83 62.263 V 27.738 C 83 16.303 73.697 7 62.263 7 H 27.738 z" />
              <path d="M 45.255 70.47 c -13.904 0 -25.215 -11.312 -25.215 -25.215 S 31.352 20.04 45.255 20.04 s 25.215 11.312 25.215 25.215 S 59.159 70.47 45.255 70.47 z M 45.255 27.04 c -10.044 0 -18.215 8.171 -18.215 18.215 c 0 10.044 8.171 18.215 18.215 18.215 c 10.044 0 18.215 -8.171 18.215 -18.215 C 63.471 35.211 55.3 27.04 45.255 27.04 z" />
              <circle cx="70.557" cy="19.937" r="4.897" />
            </svg>
          </a>

          <a
            href="https://wa.me/491778932219"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl transition hover:scale-110 hover:bg-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-6 w-6 fill-white"
            >
              <path d="M16.004 3C8.82 3 3 8.82 3 16.004c0 2.82.9 5.43 2.43 7.56L3 29l5.61-2.37a12.94 12.94 0 0 0 7.394 2.31C23.18 28.94 29 23.12 29 15.936 29 8.82 23.18 3 16.004 3zm0 23.56a10.9 10.9 0 0 1-5.56-1.53l-.4-.24-3.33 1.41 1.44-3.24-.26-.42a10.9 10.9 0 1 1 8.11 4.02zm6.01-8.18c-.33-.17-1.95-.96-2.25-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.39.25-.72.08-.33-.17-1.38-.51-2.63-1.63-.97-.87-1.63-1.95-1.82-2.28-.19-.33-.02-.51.14-.68.15-.15.33-.39.5-.58.17-.19.22-.33.33-.55.11-.22.06-.41-.03-.58-.08-.17-.74-1.79-1.01-2.45-.27-.65-.54-.56-.74-.57h-.63c-.22 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.74s1.18 3.18 1.34 3.4c.17.22 2.32 3.54 5.62 4.96.79.34 1.41.54 1.89.69.79.25 1.51.21 2.08.13.63-.09 1.95-.8 2.22-1.57.28-.77.28-1.43.19-1.57-.08-.14-.3-.22-.63-.39z" />
            </svg>
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

<section className="relative z-20 px-6 py-20 md:px-10">
  <div className="mx-auto max-w-6xl">

    <div className="flex justify-center overflow-hidden">
      <div
        id="my-cal-inline-30min"
        className="w-full max-w-6xl"
        style={{
          height: "500px",
          overflow: "hidden",
        }}
      />

      <Script
        id="cal-inline-embed"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function (C, A, L) {
              let p = function (a, ar) { a.q.push(ar); };
              let d = C.document;

              C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;

                if (!cal.loaded) {
                  cal.ns = {};
                  cal.q = cal.q || [];
                  d.head.appendChild(d.createElement("script")).src = A;
                  cal.loaded = true;
                }

                if (ar[0] === L) {
                  const api = function () { p(api, arguments); };
                  const namespace = ar[1];
                  api.q = api.q || [];

                  if (typeof namespace === "string") {
                    cal.ns[namespace] = cal.ns[namespace] || api;
                    p(cal.ns[namespace], ar);
                    p(cal, ["initNamespace", namespace]);
                  } else {
                    p(cal, ar);
                  }

                  return;
                }

                p(cal, ar);
              };
            })(window, "https://app.cal.com/embed/embed.js", "init");

            Cal("init", "30min", {
              origin: "https://app.cal.com"
            });

            Cal.ns["30min"]("inline", {
              elementOrSelector: "#my-cal-inline-30min",
              config: {
                layout: "month_view",
                theme: "dark",
                hideBranding: true
              },
              calLink: "luis-edc75g/30min",
            });

            Cal.ns["30min"]("ui", {
              theme: "dark",
              hideEventTypeDetails: false,
              layout: "month_view"
            });
          `,
        }}
      />
    </div>

  </div>
</section>

      <Footer />
    </main>
  )
}