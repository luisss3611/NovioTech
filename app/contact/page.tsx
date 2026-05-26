"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { MapPin, Phone, Mail } from "lucide-react"

import Header from "../components/header"
import Footer from "../components/footer"

export default function ContactPage() {
  const [showToast, setShowToast] = useState(false)
const [toastLeaving, setToastLeaving] = useState(false)
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")

  useEffect(() => {
    if (status !== "success") return

    const timer = setTimeout(() => {
      setStatus("idle")
    }, 10000)

    return () => clearTimeout(timer)
  }, [status])

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


async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

function closeToast() {
  setToastLeaving(true)

  setTimeout(() => {
    setShowToast(false)
    setStatus("idle")
  }, 350)
}
  e.preventDefault()

  const form = e.currentTarget
  const formData = new FormData(form)

  setStatus("loading")

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        website: formData.get("website"),
        company: formData.get("company"),
        message: formData.get("message"),
      }),
    })

    const data = await res.json()

    if (res.ok && data.success) {
      setStatus("success")
      form.reset()
    } else {
      setStatus("error")
    }
  } catch (error) {
    console.error(error)
    setStatus("error")
  }
}
  function closeToast() {
    setStatus("idle")
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <Header />

      <section className="px-6 pb-16 pt-24 md:px-10 md:pt-28">
        <div className="mx-auto max-w-7xl">

          <section className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#b3a5ff]">
                CONTACT US
              </p>

              <h1 className="mt-6 text-6xl font-semibold leading-[0.9] tracking-[-0.075em] md:text-8xl">
                Let's build
                <br />
                something
                <br />
                premium.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/50">
                Tell us about your idea and book a short strategy call.
                We'll help you find the cleanest way to bring your digital
                presence to life.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 rounded-[3rem] bg-[#b3a5ff]/10 blur-[100px]" />

              <div className="relative rounded-[2.2rem] border border-white/10 bg-white/[0.035] p-8 shadow-[0_0_80px_rgba(179,165,255,0.06)]">

                <p className="text-xs uppercase tracking-[0.35em] text-[#b3a5ff]">
                  CONTACT INFO
                </p>

                <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.055em]">
                  Our Contact
                  <br />
                  Information
                </h2>

                <div className="mt-8 space-y-4">

                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/30 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b3a5ff]/10">
                      <MapPin className="h-5 w-5 text-[#b3a5ff]" />
                    </div>

                    <div>
                      <p className="text-sm text-white/40">
                        Our Location
                      </p>

                      <p className="mt-1 text-lg font-medium">
                        Based in Germany
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/30 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b3a5ff]/10">
                      <Phone className="h-5 w-5 text-[#b3a5ff]" />
                    </div>

                    <div>
                      <p className="text-sm text-white/40">
                        Phone Number
                      </p>

                      <p className="mt-1 text-lg font-medium">
                        +49 177 8932219
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/30 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b3a5ff]/10">
                      <Mail className="h-5 w-5 text-[#b3a5ff]" />
                    </div>

                    <div>
                      <p className="text-sm text-white/40">
                        Email Us At
                      </p>

                      <p className="mt-1 text-lg font-medium">
                        contact@noviotechnologies.com
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </section>

          <section className="mt-24">

            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#b3a5ff]">
                STRATEGY CALL
              </p>

              <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-6xl">
                Book a 15 Minute
                <br />
                Strategy Call
              </h2>
            </div>

            <div className="flex justify-center overflow-hidden">
              <div
                id="my-cal-inline-30min"
                className="w-full max-w-6xl"
                style={{
                  height: "650px",
                  overflow: "hidden",
                }}
              />

              <Script
                id="cal-inline-embed"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    (function (C, A, L) {
                      let p = function (a, ar) { a.q.push(ar); };
                      let d = C.document;

                      C.Cal = C.Cal || function () {
                        let cal = C.Cal;
                        let ar = arguments;

                        if (!cal.loaded) {
                          cal.ns = {};
                          cal.q = cal.q || [];
                          d.head.appendChild(d.createElement("script")).src = A;
                          cal.loaded = true;
                        }

                        if (ar[0] === L) {
                          const api = function () { p(api, arguments); };
                          const namespace = ar[1];
                          api.q = api.q || [];

                          if (typeof namespace === "string") {
                            cal.ns[namespace] = cal.ns[namespace] || api;
                            p(cal.ns[namespace], ar);
                            p(cal, ["initNamespace", namespace]);
                          } else {
                            p(cal, ar);
                          }

                          return;
                        }

                        p(cal, ar);
                      };
                    })(window, "https://app.cal.com/embed/embed.js", "init");

                    Cal("init", "30min", {
                      origin: "https://app.cal.com"
                    });

                    Cal.ns["30min"]("inline", {
                      elementOrSelector: "#my-cal-inline-30min",
                      config: {
                        layout: "month_view",
                        theme: "dark",
                        hideBranding: true
                      },
                      calLink: "luis-edc75g/30min",
                    });

                    Cal.ns["30min"]("ui", {
                      theme: "dark",
                      hideEventTypeDetails: false,
                      layout: "month_view"
                    });
                  `,
                }}
              />
            </div>

          </section>

          <section className="mt-20 border-t border-white/10 pt-20">

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#b3a5ff]">
                  SEND A MESSAGE
                </p>

                <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-6xl">
                  Tell us about
                  <br />
                  your project.
                </h2>

                <p className="mt-6 max-w-md text-lg leading-relaxed text-white/45">
                  Prefer writing instead of booking a call? Send us a few
                  details and we will get back to you shortly.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-[2.2rem] border border-white/10 bg-white/[0.035] p-6 md:p-8"
              >

                <div className="grid gap-5 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/40">
                      Name <span className="text-[#b3a5ff]">*</span>
                    </label>

                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="
                        h-14 w-full rounded-2xl border border-white/10
                        bg-black/30 px-5 text-white outline-none
                        placeholder:text-white/20
                        focus:border-[#b3a5ff]
                      "
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/40">
                      Email <span className="text-[#b3a5ff]">*</span>
                    </label>

                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="
                        h-14 w-full rounded-2xl border border-white/10
                        bg-black/30 px-5 text-white outline-none
                        placeholder:text-white/20
                        focus:border-[#b3a5ff]
                      "
                    />
                  </div>

                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/40">
                      Website
                    </label>

                    <input
                      name="website"
                      type="text"
                      placeholder="noviotechnologies.com"
                      className="
                        h-14 w-full rounded-2xl border border-white/10
                        bg-black/30 px-5 text-white outline-none
                        placeholder:text-white/20
                        focus:border-[#b3a5ff]
                      "
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/40">
                      Company
                    </label>

                    <input
                      name="company"
                      type="text"
                      placeholder="Your Company"
                      className="
                        h-14 w-full rounded-2xl border border-white/10
                        bg-black/30 px-5 text-white outline-none
                        placeholder:text-white/20
                        focus:border-[#b3a5ff]
                      "
                    />
                  </div>

                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/40">
                    Message <span className="text-[#b3a5ff]">*</span>
                  </label>

                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what you want to build..."
                    className="
                      w-full resize-none rounded-2xl border border-white/10
                      bg-black/30 p-5 text-white outline-none
                      placeholder:text-white/20
                      focus:border-[#b3a5ff]
                    "
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="
                    group mt-6 flex h-14 w-full items-center
                    justify-center gap-3 rounded-2xl
                    bg-white text-sm font-semibold text-black
                    transition-all duration-300
                    hover:bg-[#b3a5ff]
                    disabled:opacity-60
                  "
                >
                  {status === "loading"
                    ? "Sending..."
                    : "Send Project Request"}

                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </button>

                {status === "error" && (
                  <p className="mt-4 text-sm text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}

              </form>

            </div>

          </section>

        </div>
      </section>

      {status === "success" && (
 <div
    className="
      fixed right-8 top-8 z-[9999]
      w-[430px] overflow-hidden rounded-[1.7rem]
      border border-white/10 bg-[#070707]/90
      shadow-[0_30px_120px_rgba(0,0,0,0.65)]
      backdrop-blur-2xl
    "
    style={{
      animation: toastLeaving
        ? "toastOut 0.35s ease-in forwards"
        : "toastIn 0.45s cubic-bezier(0.16,1,0.3,1) forwards",
    }}
  >
    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#b3a5ff]/20 blur-3xl" />

    <div className="relative p-5">
<div className="flex items-start justify-between gap-5">
  <div className="flex gap-4">
    <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#b3a5ff]/20 bg-[#b3a5ff]/10">
      <div className="absolute inset-0 rounded-full bg-[#b3a5ff]/20 blur-xl" />

      <svg
        className="relative z-10"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6 12.5L10 16.5L18 7.5"
          stroke="#c4b5fd"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 24,
            strokeDashoffset: 24,
            animation: "checkDraw 0.6s ease forwards 0.2s",
          }}
        />
      </svg>
    </div>

    <div>
      <p className="text-[11px] uppercase tracking-[0.35em] text-[#b3a5ff]">
        Request sent
      </p>

      <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-white">
        We received your message.
      </h3>

      <p className="mt-2 max-w-[310px] text-sm leading-relaxed text-white/45">
        Thanks for reaching out. We will get back to you shortly.
      </p>
    </div>
  </div>

  <button
    type="button"
    onClick={closeToast}
    className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/40 transition hover:border-white/20 hover:text-white"
  >
    ×
  </button>
</div>
      <div className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-white"
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