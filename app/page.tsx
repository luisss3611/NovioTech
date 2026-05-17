Hier der komplette Code:

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
        <header className="absolute top-0 left-0 z-20 w-full px-6 py-6 md:px-10">
          <Image
            src={logo}
            alt="Novio Technologies"
            className="w-32 md:w-44 h-auto"
            priority
          />
        </header>
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
        {/* Real Paper Rip Transition */}
        <div className="absolute bottom-0 left-0 z-30 w-full overflow-hidden leading-none">
          <div className="absolute inset-x-0 top-6 h-16 bg-black/60 blur-2xl" />
          <svg
            viewBox="0 0 1440 220"
            preserveAspectRatio="none"
            className="relative h-40 w-full md:h-56"
          >
            <path
              d="
              M0,70
              L55,92 L100,58 L160,105 L220,68
              L280,116 L350,62 L430,122 L500,72
              L580,128 L660,78 L740,135 L825,70
              L905,124 L990,64 L1070,116 L1160,72
              L1240,126 L1320,68 L1380,108 L1440,82
              L1440,220
              L0,220
              Z
              "
              fill="#f5f5f2"
            />
            <path
              d="
              M0,70
              L55,92 L100,58 L160,105 L220,68
              L280,116 L350,62 L430,122 L500,72
              L580,128 L660,78 L740,135 L825,70
              L905,124 L990,64 L1070,116 L1160,72
              L1240,126 L1320,68 L1380,108 L1440,82
              "
              fill="none"
              stroke="rgba(0,0,0,0.35)"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="
              M0,88
              L55,104 L100,80 L160,122 L220,86
              L280,136 L350,82 L430,140 L500,92
              L580,146 L660,96 L740,152 L825,88
              L905,142 L990,84 L1070,134 L1160,92
              L1240,144 L1320,86 L1380,124 L1440,100
              "
              fill="none"
              stroke="rgba(255,255,255,0.55)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </section>
      <section className="relative z-30 bg-[#f5f5f2] px-6 py-28 text-black md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-black/40">
            WHAT WE DO
          </p>
          <h2 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-8xl">
            Premium websites for businesses that want to look expensive.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/55">
            We design clean, cinematic and high converting digital experiences
            for local businesses, service providers and modern brands.
          </p>
        </div>
      </section>
    </main>
  )
}
