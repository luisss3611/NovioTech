import Header from "../../components/header"
import Footer from "../../components/footer"
import { Sparkles, Target, TrendingUp, Layers, MessageCircle, Rocket } from "lucide-react"

export default function BrandScalingPage() {
  const features = [
    ["Brand Positioning", "We help define how your brand should be seen and remembered.", <Target key="target" size={26} />],
    ["Visual Identity", "Clean design systems that make your business look consistent and premium.", <Sparkles key="sparkles" size={26} />],
    ["Messaging", "Clear words that explain your offer and make people trust your business.", <MessageCircle key="message" size={26} />],
    ["Growth Strategy", "A focused direction for reaching more people and converting attention.", <TrendingUp key="trending" size={26} />],
    ["Content Structure", "Better structure for your website, socials and customer journey.", <Layers key="layers" size={26} />],
    ["Scale Ready", "A brand foundation that can grow with your business over time.", <Rocket key="rocket" size={26} />],
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="relative overflow-hidden px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#b3a5ff26,transparent_35%)]" />
        <div className="absolute left-1/2 top-32 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#b3a5ff]/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#b3a5ff]">
              Brand Scaling
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Build a brand people remember.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 md:text-lg">
              We help businesses create a stronger brand presence through clear positioning,
              premium visuals and messaging that builds trust.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/book-a-call"
                className="rounded-full bg-white px-8 py-4 text-center text-sm font-medium text-black transition hover:scale-105"
              >
                Book a Call
              </a>

              <a
                href="/contact"
                className="rounded-full border border-white/15 px-8 py-4 text-center text-sm font-medium text-white transition hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-black p-6">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/40">Brand System</p>
                    <p className="mt-1 text-2xl font-semibold">Novio Growth Framework</p>
                  </div>

                  <div className="rounded-full bg-[#b3a5ff] px-4 py-2 text-sm font-medium text-black">
                    Scale
                  </div>
                </div>

                <div className="space-y-4">
                  {["Identity", "Positioning", "Messaging", "Growth"].map((item, index) => (
                    <div key={item} className="flex items-center gap-4 rounded-2xl bg-white/[0.04] p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b3a5ff] text-sm font-semibold text-black">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="mb-2 flex items-center justify-between">
                          <p className="font-medium">{item}</p>
                          <p className="text-sm text-white/40">{80 + index * 5}%</p>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div
                            className="h-2 rounded-full bg-[#b3a5ff]"
                            style={{ width: `${80 + index * 5}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-6 rounded-3xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl">
              <p className="text-3xl font-semibold">Premium</p>
              <p className="mt-1 text-sm text-white/45">Brand presence</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050607] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#b3a5ff]">
              What you get
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
              A stronger brand foundation.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {features.map(([title, text, icon]) => (
              <div
                key={String(title)}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition hover:border-[#b3a5ff]/40 hover:bg-white/[0.05]"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b3a5ff] text-black">
                  {icon}
                </div>

                <h3 className="mb-3 text-xl font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#b3a5ff]">
            Ready to scale?
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
            Let’s turn your business into a brand.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50">
            Build a brand that looks premium, communicates clearly and creates more trust online.
          </p>

          <a
            href="/book-a-call"
            className="mt-10 inline-flex rounded-full bg-white px-9 py-4 text-sm font-medium text-black transition hover:scale-105"
          >
            Book a Call
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}