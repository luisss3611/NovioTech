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
  const playVideos = () => {
    ;[desktopVideoRef.current, mobileVideoRef.current].forEach((video) => {
      if (!video) return

      video.muted = true
      video.defaultMuted = true

      const promise = video.play()

      if (promise !== undefined) {
        promise.catch(() => {})
      }
    })
  }

  playVideos()

  const timeout1 = setTimeout(playVideos, 300)
  const timeout2 = setTimeout(playVideos, 1000)
  const timeout3 = setTimeout(playVideos, 2000)

  window.addEventListener("load", playVideos)
  window.addEventListener("pageshow", playVideos)

  return () => {
    clearTimeout(timeout1)
    clearTimeout(timeout2)
    clearTimeout(timeout3)

    window.removeEventListener("load", playVideos)
    window.removeEventListener("pageshow", playVideos)
  }
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
  disablePictureInPicture
  onCanPlay={startVideos}
  onLoadedData={startVideos}
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
  disablePictureInPicture
  onCanPlay={startVideos}
  onLoadedData={startVideos}
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" className="h-6 w-6 fill-white">
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-6 w-6 fill-white">
              <path d="M16.004 3C8.82 3 3 8.82 3 16.004c0 2.82.9 5.43 2.43 7.56L3 29l5.61-2.37a12.94 12.94 0 0 0 7.394 2.31C23.18 28.94 29 23.12 29 15.936 29 8.82 23.18 3 16.004 3zm0 23.56a10.9 10.9 0 0 1-5.56-1.53l-.4-.24-3.33 1.41 1.44-3.24-.26-.42a10.9 10.9 0 1 1 8.11 4.02zm6.01-8.18c-.33-.17-1.95-.96-2.25-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.39.25-.72.08-.33-.17-1.38-.51-2.63-1.63-.97-.87-1.63-1.95-1.82-2.28-.19-.33-.02-.51.14-.68.15-.15.33-.39.5-.58.17-.19.22-.33.33-.55.11-.22.06-.41-.03-.58-.08-.17-.74-1.79-1.01-2.45-.27-.65-.54-.56-.74-.57h-.63c-.22 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.74s1.18 3.18 1.34 3.4c.17.22 2.32 3.54 5.62 4.96.79.34 1.41.54 1.89.69.79.25 1.51.21 2.08.13.63-.09 1.95-.8 2.22-1.57.28-.77.28-1.43.19-1.57-.08-.14-.3-.22-.63-.39z" />
            </svg>
          </a>
        </div>

<div className="absolute inset-0 bg-black/75 md:bg-black/65" />

<div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center text-white md:pt-0">
  <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#b3a5ff] md:text-sm">
    DIGITAL EXPERIENCES
  </p>

  <h1 className="max-w-[360px] text-[46px] font-semibold leading-[0.92] tracking-[-0.07em] sm:max-w-xl sm:text-[56px] md:max-w-5xl md:text-[140px]">
    Novio Technologies
  </h1>

  <p className="mt-5 max-w-[340px] text-[17px] leading-relaxed text-white/65 md:max-w-xl md:text-xl">
    Modern websites and digital experiences for businesses that want to stand out.
  </p>

  <div className="mt-9 flex justify-center">
    <a
      href="/book-a-call"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-white px-10 py-5 text-base font-medium text-black transition hover:scale-105 md:px-10 md:py-4 md:text-sm"
    >
      Book a Call
    </a>
  </div>
</div>      </section>

      <section className="relative z-20 bg-[#050607] px-6 py-24 text-white md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#b3a5ff]">
                HOW WE WORK
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
                Get a high performing website without the agency chaos.
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-base leading-relaxed text-white/55 md:text-lg">
                We design and build clean, modern websites for businesses that want to look premium,
                generate trust and turn visitors into real leads.
              </p>

              <a
                href="/book-a-call"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex rounded-full bg-[#b3a5ff] px-7 py-3 text-sm font-semibold text-black transition hover:scale-105"
              >
                Book a Call
              </a>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            <div>
              <div className="mb-7 flex items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#b3a5ff] text-black">
                  🚀
                </div>
                <div className="ml-5 hidden h-[1px] flex-1 bg-[#b3a5ff]/60 md:block" />
              </div>

              <h3 className="mb-3 text-xl font-semibold tracking-[-0.03em]">
                Strategy & direction
              </h3>

              <p className="text-sm leading-relaxed text-white/50">
                We look at your business, your offer and your target audience before touching the design.
              </p>
            </div>

            <div>
              <div className="mb-7 flex items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#b3a5ff] text-black">
                  ✨
                </div>
                <div className="ml-5 hidden h-[1px] flex-1 bg-[#b3a5ff]/60 md:block" />
              </div>

              <h3 className="mb-3 text-xl font-semibold tracking-[-0.03em]">
                Design & development
              </h3>

              <p className="text-sm leading-relaxed text-white/50">
                We create a premium looking website and build it clean, fast and responsive for all devices.
              </p>
            </div>

            <div>
              <div className="mb-7 flex items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#b3a5ff] text-black">
                  📈
                </div>
              </div>

              <h3 className="mb-3 text-xl font-semibold tracking-[-0.03em]">
                Launch & improve
              </h3>

              <p className="text-sm leading-relaxed text-white/50">
                After launch, we refine the website so it does not just look good, but actually works.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 bg-black px-6 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#b3a5ff]">
              WHY NOVIO TECHNOLOGIES
            </p>

            <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
              Why Novio is the right choice for your business.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
              We combine premium design, clean development and growth focused systems to build websites that actually support your business.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                ⚡
              </div>

              <h3 className="mb-3 text-xl font-semibold">
                Fast & optimized
              </h3>

              <p className="text-sm leading-relaxed text-white/50">
                Your website is built to feel fast, clean and smooth on every device.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                🎯
              </div>

              <h3 className="mb-3 text-xl font-semibold">
                Built around your brand
              </h3>

              <p className="text-sm leading-relaxed text-white/50">
                We create a digital presence that looks premium, trustworthy and unique.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                📈
              </div>

              <h3 className="mb-3 text-xl font-semibold">
                Growth focused
              </h3>

              <p className="text-sm leading-relaxed text-white/50">
                Every page is structured to build trust, improve visibility and convert visitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 bg-[#050607] px-6 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
            <img
              src="/1.jpg"
              alt="Novio Technologies"
              className="h-[360px] w-full object-cover opacity-90"
            />
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#b3a5ff]">
              ABOUT NOVIO TECHNOLOGIES
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
              Digital solutions built for businesses that want to grow.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-white/55 md:text-lg">
              Novio Technologies creates modern websites, scalable brand systems and digital growth
              solutions for businesses that want to look more professional, generate more leads and build
              a stronger online presence.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/10 bg-black/40 p-5">
                <p className="text-3xl font-semibold text-white">5+</p>
                <p className="mt-2 text-sm text-white/45">Digital services</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/40 p-5">
                <p className="text-3xl font-semibold text-white">100%</p>
                <p className="mt-2 text-sm text-white/45">Custom built</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/40 p-5">
                <p className="text-3xl font-semibold text-white">24/7</p>
                <p className="mt-2 text-sm text-white/45">Online presence</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/40 p-5">
                <p className="text-3xl font-semibold text-white">1:1</p>
                <p className="mt-2 text-sm text-white/45">Personal support</p>
              </div>
            </div>
          </div>

        </div>
      </section>

<section className="relative z-20 bg-black px-4 py-16 text-white sm:px-6 md:px-10 md:py-24">
  <div className="mx-auto max-w-5xl">
    <div className="mb-10 text-center">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#b3a5ff]">
        BOOK A CALL
      </p>

      <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
        Let’s build something exceptional together.
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
        Schedule a quick strategy call and let’s talk about your goals, branding and how Novio Technologies can help your business grow online.
      </p>
    </div>

<div className="w-full overflow-hidden">
  <div
    id="my-cal-inline-30min"
    className="h-[1180px] w-full sm:h-[1080px] md:h-[760px]"
    style={{
      overflow: "hidden",
    }}
  />
</div>

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
</section>

      <Footer />
    </main>
  )
}