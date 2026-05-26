"use client"

import Header from "../../components/header"
import Footer from "../../components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-6xl font-semibold tracking-[-0.06em]">
            Website Development
          </h1>

          <p className="mt-6 text-white/50">
            We create modern websites, branding and digital experiences focused
            on clarity, trust and strong first impressions.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}