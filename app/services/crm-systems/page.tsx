import Header from "../../components/header"
import Footer from "../../components/footer"
import {
  Database,
  Users,
  Workflow,
  Bell,
  Mail,
  BarChart3,
} from "lucide-react"

export default function CRMSystemsPage() {
  const features = [
    {
      title: "Lead Management",
      icon: <Users size={26} />,
      text: "Organize new leads, inquiries and customer conversations in one clear system.",
    },
    {
      title: "Automations",
      icon: <Workflow size={26} />,
      text: "Automate follow-ups, notifications and internal workflows to save time.",
    },
    {
      title: "Customer Database",
      icon: <Database size={26} />,
      text: "Keep important customer information structured, searchable and easy to access.",
    },
    {
      title: "Follow-Up Reminders",
      icon: <Bell size={26} />,
      text: "Never lose potential customers because of forgotten replies or missed follow-ups.",
    },
    {
      title: "Email Integration",
      icon: <Mail size={26} />,
      text: "Connect your communication tools and make your sales process easier to manage.",
    },
    {
      title: "Performance Overview",
      icon: <BarChart3 size={26} />,
      text: "Track leads, deals and customer activity with a clean overview of your pipeline.",
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
              CRM Systems
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Keep every lead organized.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 md:text-lg">
              We create simple CRM systems and workflows that help your business manage leads,
              follow-ups and customer communication without chaos.
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
                    <p className="text-sm text-white/40">Sales Pipeline</p>
                    <p className="mt-1 text-2xl font-semibold">CRM Overview</p>
                  </div>

                  <div className="rounded-full bg-[#b3a5ff] px-4 py-2 text-sm font-medium text-black">
                    Synced
                  </div>
                </div>

                <div className="grid gap-4">
                  {[
                    ["New Lead", "Website inquiry", "2 min ago"],
                    ["Follow-Up", "Strategy call booked", "Today"],
                    ["Proposal", "Offer sent", "Pending"],
                    ["Client", "Project started", "Active"],
                  ].map(([stage, detail, status]) => (
                    <div
                      key={stage}
                      className="flex items-center justify-between rounded-2xl bg-white/[0.04] p-4"
                    >
                      <div>
                        <p className="font-medium">{stage}</p>
                        <p className="mt-1 text-sm text-white/40">{detail}</p>
                      </div>

                      <span className="rounded-full bg-black/60 px-3 py-1 text-xs text-white/50">
                        {status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-white/[0.04] p-4">
                    <p className="text-2xl font-semibold">42</p>
                    <p className="mt-1 text-xs text-white/40">Leads</p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.04] p-4">
                    <p className="text-2xl font-semibold">18</p>
                    <p className="mt-1 text-xs text-white/40">Follow-Ups</p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.04] p-4">
                    <p className="text-2xl font-semibold">9</p>
                    <p className="mt-1 text-xs text-white/40">Deals</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-6 rounded-3xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl">
              <p className="text-3xl font-semibold">Less</p>
              <p className="mt-1 text-sm text-white/45">sales chaos</p>
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
              Systems that make follow-ups easier.
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
            Ready to organize your leads?
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
            Let’s build a system that keeps your business moving.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50">
            Turn inquiries into structured leads, follow-ups and opportunities with a clean CRM workflow.
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