import Header from "../components/header"
import Footer from "../components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <section className="px-6 pb-28 pt-44 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              About Novio
            </p>

            <h1 className="mt-6 text-6xl font-semibold tracking-[-0.07em] md:text-8xl">
              About Us
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/50">
              We build modern websites, brands and digital growth systems for businesses that want to stand out.
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#b3a5ff]">
                Our Vision
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-5xl">
                Your digital presence should not just look good.
                <span className="text-[#b3a5ff]"> It should generate results.</span>
              </h2>

              <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
                <img
                  src="/about/team.jpg"
                  alt="Novio Technologies team working together"
                  className="h-[420px] w-full object-cover opacity-90"
                />
              </div>
            </div>

            <div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <img
                    src="/about/project-1.jpg"
                    alt="Website project preview"
                    className="h-44 w-full object-cover opacity-90"
                  />
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <img
                    src="/about/project-2.jpg"
                    alt="Branding project preview"
                    className="h-44 w-full object-cover opacity-90"
                  />
                </div>
              </div>

              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-white/55">
                Novio Technologies is a digital agency focused on websites, branding,
                SEO, advertising and digital growth. We combine clean design,
                strong strategy and modern technology to help businesses turn visitors
                into leads and customers.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
                <div>
                  <p className="text-4xl font-semibold tracking-[-0.05em]">10+</p>
                  <p className="mt-2 text-sm text-white/40">Completed Projects</p>
                </div>

                <div>
                  <p className="text-4xl font-semibold tracking-[-0.05em]">15k+</p>
                  <p className="mt-2 text-sm text-white/40">Monthly Impressions</p>
                </div>

                <div>
                  <p className="text-4xl font-semibold tracking-[-0.05em]">10k+</p>
                  <p className="mt-2 text-sm text-white/40">Traffic Generated</p>
                </div>

                <div>
                  <p className="text-4xl font-semibold tracking-[-0.05em]">45+</p>
                  <p className="mt-2 text-sm text-white/40">Creative Ideas</p>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-5">
                <a
                  href="/contact"
                  className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-105"
                >
                  Work With Us
                </a>

                <a
                  href="/services"
                  className="text-sm text-white/50 transition hover:text-[#b3a5ff]"
                >
                  View Services →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}