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
            SEO Optimization
          </h1>

          <p className="mt-6 text-white/50">
            We help businesses improve their online visibility and search engine rankings through effective SEO strategies focused
            on driving organic traffic and increasing conversions.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}