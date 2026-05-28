"use client"

import Header from "../components/header"
import Footer from "../components/footer"
import Script from "next/script"

export default function BookACallPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="relative overflow-hidden px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#b3a5ff22,transparent_35%)]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#b3a5ff]">
              BOOK A CALL
            </p>

            <h1 className="mx-auto max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Let’s talk about your business.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
              Schedule a quick strategy call and let’s discuss your goals, website,
              branding and how Novio Technologies can help you grow online.
            </p>
          </div>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl">
            <div
              id="my-cal-inline-30min"
              className="w-full"
              style={{
                height: "500px",
                overflow: "hidden",
                borderRadius: "1.5rem",
              }}
            />
          </div>

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

      <Footer />
    </main>
  )
}