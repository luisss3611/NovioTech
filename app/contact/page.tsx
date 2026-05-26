"use client"

import { useEffect } from "react"
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react"

import Header from "../components/header"
import Footer from "../components/footer"

export default function ContactPage() {
  useEffect(() => {
    ;(function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar)
      }

      const d = document

      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal
          const ar = arguments

          if (!cal.loaded) {
            cal.ns = {}
            cal.q = cal.q || []

            const script = d.createElement("script")
            script.src = A
            d.head.appendChild(script)

            cal.loaded = true
          }

          if (ar[0] === L) {
            const api = function () {
              p(api, arguments)
            }

            const namespace = ar[1]
            api.q = api.q || []

            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api
              p(cal.ns[namespace], ar)
              p(cal, ["initNamespace", namespace])
            } else {
              p(cal, ar)
            }

            return
          }

          p(cal, ar)
        }
    })(window, "https://app.cal.com/embed/embed.js", "init")

    // @ts-ignore
    window.Cal("init", "30min", {
      origin: "https://app.cal.com",
    })

    // @ts-ignore
    window.Cal.ns["30min"]("inline", {
      elementOrSelector: "#my-cal-inline",
      config: {
        layout: "month_view",
        useSlotsViewOnSmallScreen: true,
      },
      calLink: "luis-edc75g/30min",
    })

    // @ts-ignore
    window.Cal.ns["30min"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    })
  }, [])

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <Header />

      <section className="px-6 pb-20 pt-24 md:px-10 md:pt-28">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-5xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#b3a5ff]">
              CONTACT US
            </p>

            <h1 className="mt-6 text-6xl font-semibold leading-[0.9] tracking-[-0.075em] md:text-8xl">
              Let’s talk about
              <br />
              your next project.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/50">
              Schedule a free consultation with Novio Technologies
              and let’s create a digital presence that actually
              stands out.
            </p>
          </div>

          <section className="mt-28">
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.35em] text-[#b3a5ff]">
                CONTACT INFO
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
                Our Contact Information
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b3a5ff]/10">
                  <MapPin className="h-6 w-6 text-[#b3a5ff]" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  Our Location
                </h3>

                <p className="mt-4 text-white/50">
                  Based in Germany
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b3a5ff]/10">
                  <Phone className="h-6 w-6 text-[#b3a5ff]" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  Phone Number
                </h3>

                <p className="mt-4 text-white/50">
                  +49 177 8932219
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b3a5ff]/10">
                  <Mail className="h-6 w-6 text-[#b3a5ff]" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  Email Us At
                </h3>

                <p className="mt-4 text-white/50">
                  contact@noviotechnologies.com
                </p>
              </div>

            </div>
          </section>

          <section className="mt-36">
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.35em] text-[#b3a5ff]">
                STRATEGY CALL
              </p>

              <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-6xl">
                Book a 15 Minute
                <br />
                Strategy Call
              </h2>
            </div>

            <div
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]"
            >
              <div
                id="my-cal-inline"
                style={{ height: "850px" }}
              />
            </div>
          </section>

        </div>
      </section>

      <Footer />
    </main>
  )
}