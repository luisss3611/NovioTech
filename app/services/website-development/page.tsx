import Header from "../../components/header"
import Footer from "../../components/footer"
import {
  Palette,
  Smartphone,
  Search,
  Zap,
  TrendingUp,
  Code2,
} from "lucide-react"

export default function WebsiteDevelopmentPage() {
  const features = [
    {
      title: "Premium Design",
      icon: <Palette size={26} />,
      text: "A clean and modern website that instantly makes your brand feel more professional.",
    },
    {
      title: "Mobile Optimized",
      icon: <Smartphone size={26} />,
      text: "Every section is designed to work smoothly on phones, tablets and desktop.",
    },
    {
      title: "SEO Ready",
      icon: <Search size={26} />,
      text: "Clean structure, strong page hierarchy and technical basics for better visibility.",
    },
    {
      title: "Fast Performance",
      icon: <Zap size={26} />,
      text: "Optimized assets and lightweight layouts for a smooth user experience.",
    },
    {
      title: "Conversion Focused",
      icon: <TrendingUp size={26} />,
      text: "Clear sections, strong messaging and call-to-actions that guide visitors.",
    },
    {
      title: "Custom Built",
      icon: <Code2 size={26} />,
      text: "No generic template look. Your website is built around your brand and offer.",
    },
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
              Website Development
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Websites that look premium and convert visitors.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 md:text-lg">
              We build modern, fast and responsive websites for businesses that want to generate trust,
              attract customers and turn traffic into real inquiries.
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
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-black p-5">
                <div className="mb-5 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-white/30" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/10" />
                </div>

                <div className="space-y-4">
                  <div className="h-10 w-3/4 rounded-xl bg-white" />
                  <div className="h-4 w-full rounded-full bg-white/20" />
                  <div className="h-4 w-2/3 rounded-full bg-white/10" />

                  <div className="grid grid-cols-3 gap-3 pt-5">
                    <div className="h-24 rounded-2xl bg-[#b3a5ff]" />
                    <div className="h-24 rounded-2xl bg-white/10" />
                    <div className="h-24 rounded-2xl bg-white/10" />
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="h-32 rounded-2xl bg-white/10" />
                    <div className="h-32 rounded-2xl bg-white/5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-6 rounded-3xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl">
              <p className="text-3xl font-semibold">100%</p>
              <p className="mt-1 text-sm text-white/45">Responsive</p>
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
              Built for design, speed and conversion.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition hover:border-[#b3a5ff]/40 hover:bg-white/[0.05]"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b3a5ff] text-black">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-white/50">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="bg-black px-6 py-24 md:px-10 md:py-32">
  <div className="mx-auto max-w-6xl">

    <div className="mb-16 text-center">
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#b3a5ff]">
        WHY IT WORKS
      </p>

      <h2 className="mx-auto max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
        Built to help your business grow.
      </h2>
    </div>

    <div className="grid gap-6 md:grid-cols-3">

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
        <div className="mb-8 text-5xl">⚡</div>

        <h3 className="mb-3 text-2xl font-semibold">
          Fast
        </h3>

        <p className="text-white/50">
          Optimized for performance, smooth user experience and fast loading times.
        </p>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
        <div className="mb-8 text-5xl">🎯</div>

        <h3 className="mb-3 text-2xl font-semibold">
          Focused
        </h3>

        <p className="text-white/50">
          Designed to guide visitors toward booking calls, inquiries and conversions.
        </p>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
        <div className="mb-8 text-5xl">🚀</div>

        <h3 className="mb-3 text-2xl font-semibold">
          Scalable
        </h3>

        <p className="text-white/50">
          Built with a structure that can grow alongside your business.
        </p>
      </div>

    </div>

    <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 text-center md:p-16">

      <p className="text-sm uppercase tracking-[0.3em] text-[#b3a5ff]">
        Premium Development
      </p>

      <h3 className="mt-4 text-4xl font-semibold md:text-6xl">
        Modern websites that look good and perform.
      </h3>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50">
        Every website is custom built, fully responsive and designed to create trust from the first second.
      </p>

    </div>

  </div>
</section>

<section className="bg-[#050607] px-6 py-20 text-center md:px-10 md:py-28">
  <div className="mx-auto max-w-4xl">          
<p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#b3a5ff]">
  Ready to start?
</p>

<h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
  Let’s build a website your business can grow with.
</h2>

<p className="mx-auto mt-6 max-w-2xl text-lg text-white/50">
  Modern design, clean development and a website that helps your business stand out.
</p>

<a
  href="/book-a-call"
  className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:scale-105"
>
  Book a Call
</a>
        </div>
      </section>

      <Footer />
    </main>
  )
}