import Header from "../../components/header"
import Footer from "../../components/footer"
import {
  MousePointerClick,
  Target,
  TrendingUp,
  BarChart3,
  Users,
  Megaphone,
} from "lucide-react"

export default function PaidAdvertisingPage() {
  const features = [
    {
      title: "Targeted Campaigns",
      icon: <Target size={26} />,
      text: "Ads built around the right audience, offer and customer intent.",
    },
    {
      title: "Google Ads",
      icon: <MousePointerClick size={26} />,
      text: "Search campaigns designed to capture people who are already looking for your service.",
    },
    {
      title: "Meta Ads",
      icon: <Users size={26} />,
      text: "Facebook and Instagram campaigns that create attention and generate leads.",
    },
    {
      title: "Performance Tracking",
      icon: <BarChart3 size={26} />,
      text: "Clear tracking so you know what works, what costs money and what should scale.",
    },
    {
      title: "Lead Generation",
      icon: <Megaphone size={26} />,
      text: "Campaigns focused on turning attention into real inquiries for your business.",
    },
    {
      title: "Scaling Strategy",
      icon: <TrendingUp size={26} />,
      text: "We optimize and scale winning campaigns instead of guessing.",
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
              Paid Advertising
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Ads built to generate real business.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 md:text-lg">
              We create and optimize paid advertising campaigns that help your business reach the right people,
              generate leads and scale with clear performance data.
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
                    <p className="text-sm text-white/40">Campaign Dashboard</p>
                    <p className="mt-1 text-2xl font-semibold">Ad Performance</p>
                  </div>

                  <div className="rounded-full bg-[#b3a5ff] px-4 py-2 text-sm font-medium text-black">
                    Active
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-white/[0.04] p-4">
                    <p className="text-2xl font-semibold">4.8x</p>
                    <p className="mt-1 text-xs text-white/40">ROAS</p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.04] p-4">
                    <p className="text-2xl font-semibold">32%</p>
                    <p className="mt-1 text-xs text-white/40">Lower CPC</p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.04] p-4">
                    <p className="text-2xl font-semibold">128</p>
                    <p className="mt-1 text-xs text-white/40">Leads</p>
                  </div>
                </div>

                <div className="mt-6 flex h-56 items-end gap-3 rounded-3xl bg-white/[0.03] p-5">
                  {[40, 65, 50, 80, 70, 95, 85].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-xl bg-[#b3a5ff]"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-6 rounded-3xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl">
              <p className="text-3xl font-semibold">More</p>
              <p className="mt-1 text-sm text-white/45">qualified leads</p>
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
              Campaigns focused on profitable growth.
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
            Ready to scale?
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
            Let’s turn ad spend into real opportunities.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50">
            Launch paid campaigns with clear targeting, strong creatives and performance tracking from day one.
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