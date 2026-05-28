import Header from "../components/header"
import Footer from "../components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <Header />

<section className="px-6 pb-20 pt-24 md:px-10 md:pt-28">
          <div className="mx-auto max-w-7xl">

          <section className="grid min-h-[680px] gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#b3a5ff]">
                ABOUT NOVIO
              </p>

              <h1 className="mt-6 text-6xl font-semibold leading-[0.92] tracking-[-0.075em] md:text-8xl">
                Digital presence,
                <br />
                built with purpose.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/50">
                We help businesses look sharper, feel more trustworthy and build
                online experiences that create real attention.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-105"
                >
                  Work With Us
                </a>

              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 rounded-[3rem] bg-[#b3a5ff]/10 blur-[120px]" />

              <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.03]">
                <img
                  src="/office.jpeg"
                  alt="Novio Technologies website preview"
                  className="h-[580px] w-full object-cover opacity-70 brightness-75"
                />
              </div>
            </div>
          </section>

<section className="mt-36 border-t border-white/10 pt-24">
  <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
    <div>
      <p className="text-xs uppercase tracking-[0.35em] text-[#b3a5ff]">
        WHAT WE DO
      </p>

      <h2 className="mt-6 max-w-2xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-6xl">
        Modern digital experiences for businesses that want to stand out.
      </h2>
    </div>

    <div className="max-w-2xl text-lg leading-relaxed text-white/50">
      <p>
        We help businesses build a stronger online presence through modern
        websites, branding, digital strategy and premium visual experiences.
      </p>

      <p className="mt-6">
        Focused on clarity, trust and strong first impressions — designed to
        make businesses look more professional online.
      </p>
    </div>
  </div>

  <div className="mx-auto mt-20 max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] shadow-[0_0_80px_rgba(179,165,255,0.06)]">
    <img
      src="/about_us_picture.png"
      alt="Website showcase by Novio Technologies"
      className="w-full object-cover opacity-85"
    />
  </div>
</section>
          <section className="mt-36 border-t border-white/10 pt-24">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#b3a5ff]">
                  FOUNDER
                </p>

                <h2 className="mt-6 max-w-xl text-5xl font-semibold leading-[1] tracking-[-0.06em]">
                  Built with a focus on clean and modern digital experiences.
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-xl leading-relaxed text-white/55">
                  I’m Luis, the founder of Novio Technologies. I focus on
                  creating websites and digital experiences that feel modern,
                  trustworthy and visually strong.
                </p>

                <p className="mt-8 text-lg leading-relaxed text-white/45">
                  My goal is simple: help businesses build an online presence
                  that leaves a strong first impression and actually feels
                  premium.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-36 rounded-[2.2rem] border border-white/10 bg-gradient-to-r from-[#b3a5ff]/15 via-white/[0.035] to-white/[0.015] p-10 md:p-14">
            <div className="grid gap-12 md:grid-cols-[1fr_0.9fr] md:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#b3a5ff]">
                  PROCESS
                </p>

                <h2 className="mt-6 max-w-2xl text-5xl font-semibold leading-[1] tracking-[-0.06em]">
                  Simple direction. Clean execution.
                </h2>
              </div>

              <div className="space-y-5 text-lg text-white/55">
                <p>01. Understand the business</p>
                <p>02. Define the digital direction</p>
                <p>03. Build a premium online presence</p>
              </div>
            </div>
          </section>

          <section className="mt-28 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#b3a5ff]">
              READY TO START?
            </p>

            <h2 className="mx-auto mt-6 max-w-3xl text-5xl font-semibold leading-[1] tracking-[-0.06em]">
              Let’s build something that makes your business look stronger.
            </h2>

            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </section>

        </div>
      </section>

      <Footer />
    </main>
  )
}