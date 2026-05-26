"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Header from "../components/header"
import Footer from "../components/footer"

export default function ReferralProgramPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [showToast, setShowToast] = useState(false)
  const [toastLeaving, setToastLeaving] = useState(false)

  useEffect(() => {
    if (status !== "success") return

    setShowToast(true)
    setToastLeaving(false)

    const leaveTimer = setTimeout(() => {
      setToastLeaving(true)
    }, 9500)

    const removeTimer = setTimeout(() => {
      setShowToast(false)
      setStatus("idle")
    }, 10000)

    return () => {
      clearTimeout(leaveTimer)
      clearTimeout(removeTimer)
    }
  }, [status])

  function closeToast() {
    setToastLeaving(true)

    setTimeout(() => {
      setShowToast(false)
      setStatus("idle")
    }, 350)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    setStatus("loading")

    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          yourName: formData.get("yourName"),
          yourEmail: formData.get("yourEmail"),
          businessName: formData.get("businessName"),
          website: formData.get("website"),
          contactName: formData.get("contactName"),
          contactEmail: formData.get("contactEmail"),
          additionalInfo: formData.get("additionalInfo"),
        }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const inputClass =
    "h-14 w-full rounded-2xl border border-white/10 bg-black/40 px-5 text-white outline-none transition placeholder:text-white/20 focus:border-[#b3a5ff] focus:bg-black/60"

  const labelClass =
    "mb-2 block text-xs uppercase tracking-[0.22em] text-white/40"

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <Header />

      <section className="relative overflow-hidden px-6 pb-24 pt-40 md:px-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#8b5cf6]/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-[#b3a5ff]">
            REFERRAL PROGRAM
          </p>

          <h1 className="max-w-5xl text-[52px] font-semibold leading-[0.9] tracking-[-0.08em] md:text-[120px]">
            Earn 20%
            <br />
            for every referral.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/55">
            Refer businesses that need a premium website, branding or digital
            growth and earn 20% of the final project value.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-5">
              <Image
                src="/referr_someone.png"
                alt="Referral Program"
                width={1200}
                height={1200}
                className="h-auto w-full rounded-[24px] object-contain"
                priority
              />
            </div>
          </div>

          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-[#b3a5ff]">
              REFER & EARN
            </p>

            <h2 className="max-w-2xl text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Refer businesses.
              <br />
              Earn 20%.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/50">
              Know a business that needs a premium website, branding or digital
              growth? Send them our way and earn 20% of the final project value
              once the deal closes.
            </p>

            <div className="mt-10 grid gap-4">
              {[
                ["01", "Submit a referral", "Fill out the referral form with the business information."],
                ["02", "We close the deal", "We handle strategy, communication and execution."],
                ["03", "You earn 20%", "Once the client pays, you receive 20% of the project value."],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="grid grid-cols-[auto_1fr] gap-5 rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b3a5ff]/20 bg-[#b3a5ff]/10 text-sm text-[#b3a5ff]">
                    {number}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em]">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-white/45">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-10">
        <div className="mx-auto rounded-[36px] border border-white/10 bg-white/[0.03] p-6 md:max-w-7xl md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-[#b3a5ff]">
                SUBMIT REFERRAL
              </p>

              <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-6xl">
                Send us your referral.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-white/50">
                Fill out the information and we’ll reach out professionally and
                discreetly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <h3 className="mb-5 text-2xl font-semibold tracking-[-0.04em]">
                  Your Information
                </h3>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className={labelClass}>
                      Your Name <span className="text-[#b3a5ff]">*</span>
                    </label>
                    <input
                      name="yourName"
                      required
                      type="text"
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Your Email <span className="text-[#b3a5ff]">*</span>
                    </label>
                    <input
                      name="yourEmail"
                      required
                      type="email"
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-5 text-2xl font-semibold tracking-[-0.04em]">
                  Referral Information
                </h3>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className={labelClass}>
                      Business Name <span className="text-[#b3a5ff]">*</span>
                    </label>
                    <input
                      name="businessName"
                      required
                      type="text"
                      placeholder="Business name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Website</label>
                    <input
                      name="website"
                      type="text"
                      placeholder="example.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Contact Name <span className="text-[#b3a5ff]">*</span>
                    </label>
                    <input
                      name="contactName"
                      required
                      type="text"
                      placeholder="Contact person"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Contact Email <span className="text-[#b3a5ff]">*</span>
                    </label>
                    <input
                      name="contactEmail"
                      required
                      type="email"
                      placeholder="contact@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className={labelClass}>Additional Information</label>
                  <textarea
                    name="additionalInfo"
                    placeholder="Tell us anything important about the referral..."
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 p-5 text-white outline-none transition placeholder:text-white/20 focus:border-[#b3a5ff] focus:bg-black/60"
                  />
                </div>
              </div>

              <button
                disabled={status === "loading"}
                type="submit"
                className="group flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-white text-sm font-semibold text-black transition hover:bg-[#b3a5ff] disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Submit Referral"}
                <span className="transition group-hover:translate-x-1">→</span>
              </button>

              {status === "error" && (
                <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {showToast && (
        <div
          className="
            fixed right-8 top-8 z-[9999]
            w-[390px] overflow-hidden rounded-[1.45rem]
            border border-white/10 bg-[#080808]/90
            shadow-[0_24px_90px_rgba(0,0,0,0.55)]
            backdrop-blur-2xl
          "
          style={{
            animation: toastLeaving
              ? "toastOut 0.35s ease-in forwards"
              : "toastIn 0.45s cubic-bezier(0.16,1,0.3,1) forwards",
          }}
        >
          <div className="relative p-5">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#b3a5ff]/15 blur-3xl" />

            <div className="relative flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#b3a5ff]/25 bg-[#b3a5ff]/10">
                <span className="text-lg text-[#b3a5ff]">✓</span>
              </div>

              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#b3a5ff]">
                  Referral sent
                </p>

                <h3 className="mt-2 text-lg font-semibold tracking-[-0.035em] text-white">
                  We received your referral.
                </h3>

                <p className="mt-1.5 text-sm leading-relaxed text-white/45">
                  Thanks for the referral. We’ll review it and get back to you shortly.
                </p>
              </div>

              <button
                type="button"
                onClick={closeToast}
                className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/35 transition hover:border-white/20 hover:text-white"
              >
                ×
              </button>
            </div>

            <div className="mt-5 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-[#b3a5ff]"
                style={{
                  animation: "progressFill 10s linear forwards",
                }}
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}