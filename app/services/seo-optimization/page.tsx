import Header from "../../components/header"
import Footer from "../../components/footer"
import {
  Search,
  Gauge,
  MapPin,
  FileText,
  BarChart3,
  TrendingUp,
} from "lucide-react"

export default function SEOOptimizationPage() {
  const features = [
    {
      title: "Technical SEO",
      icon: <Gauge size={26} />,
      text: "We improve structure, speed and technical basics so search engines can understand your website better.",
    },
    {
      title: "Keyword Strategy",
      icon: <Search size={26} />,
      text: "We identify the search terms your potential customers are actually using.",
    },
    {
      title: "Local SEO",
      icon: <MapPin size={26} />,
      text: "We optimize your online presence so local customers can find your business more easily.",
    },
    {
      title: "Content Optimization",
      icon: <FileText size={26} />,
      text: "We structure your pages with clear content, headings and search focused messaging.",
    },
    {
      title: "Performance Tracking",
      icon: <BarChart3 size={26} />,
      text: "We track visibility, traffic and rankings so improvements are based on real data.",
    },
    {
      title: "Growth Focused",
      icon: <TrendingUp size={26} />,
      text: "SEO is built to create long term visibility and consistent inbound opportunities.",
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
              SEO Optimization
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Get found by the people already searching.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 md:text-lg">
              We optimize your website for search visibility, better structure and long term organic growth
              so more potential customers can discover your business.
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
                    <p className="text-sm text-white/40">Search Visibility</p>
                    <p className="mt-1 text-2xl font-semibold">SEO Growth</p>
                  </div>

                  <div className="rounded-full bg-[#b3a5ff] px-4 py-2 text-sm font-medium text-black">
                    Optimized
                  </div>
                </div>

                <div className="rounded-3xl bg-white/[0.04] p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <Search size={22} className="text-[#b3a5ff]" />
                    <div className="h-4 flex-1 rounded-full bg-white/10" />
                  </div>

                  <div className="space-y-3">
                    {[
                      ["Website Development Agency", "Top 3"],
                      ["Local Business Website", "+86%"],
                      ["SEO Optimization Service", "+124%"],
                    ].map(([keyword, value]) => (
                      <div
                        key={keyword}
                        className="flex items-center justify-between rounded-2xl bg-black/50 p-4"
                      >
                        <p className="text-sm text-white/70">{keyword}</p>
                        <p className="text-sm font-semibold text-[#b3a5ff]">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-white/[0.04] p-4">
                    <p className="text-2xl font-semibold">92</p>
                    <p className="mt-1 text-xs text-white/40">SEO Score</p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.04] p-4">
                    <p className="text-2xl font-semibold">+68%</p>
                    <p className="mt-1 text-xs text-white/40">Visibility</p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.04] p-4">
                    <p className="text-2xl font-semibold">24/7</p>
                    <p className="mt-1 text-xs text-white/40">Organic</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-6 rounded-3xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl">
              <p className="text-3xl font-semibold">More</p>
              <p className="mt-1 text-sm text-white/45">organic traffic</p>
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
              SEO built for long term visibility.
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

                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#b3a5ff]">
            Ready to rank?
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
            Let’s make your business easier to find.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50">
            Improve your website structure, search visibility and organic growth with a clean SEO foundation.
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