"use client"

import { useEffect, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "scope", label: "Scope" },
  { id: "collection", label: "Data Collection" },
  { id: "storage", label: "Data Storage" },
  { id: "sharing", label: "Data Sharing" },
  { id: "rights", label: "Your Rights" },
  { id: "cookies", label: "Cookies" },
  { id: "transfers", label: "International Transfers" },
  { id: "marketing", label: "Marketing" },
  { id: "breach", label: "Data Breach" },
  { id: "updates", label: "Policy Updates" },
  { id: "contact", label: "Contact" },
]

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("introduction")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0px -70% 0px",
      }
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: "smooth",
      })
    }
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <section className="px-6 pb-24 pt-44 md:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-28">
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              Legal
            </p>

            <h1 className="mt-6 text-6xl font-semibold tracking-[-0.07em] md:text-8xl">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/50">
              Effective Date: 20/05/2026
            </p>
          </div>

          <div className="grid gap-20 md:grid-cols-[280px_1fr]">

            {/* SIDEBAR */}
            <aside className="sticky top-32 hidden h-fit space-y-6 md:block">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`
                    group
                    relative
                    block
                    border-l
                    pl-5
                    text-left
                    transition-all
                    duration-300
                    ${
                      activeSection === section.id
                        ? "border-[#b3a5ff] text-[#b3a5ff]"
                        : "border-white/10 text-white/45 hover:border-[#b3a5ff] hover:text-[#b3a5ff]"
                    }
                  `}
                >
                  <span className="relative inline-block">
                    {section.label}

                    <span
                      className={`
                        absolute
                        -bottom-1
                        left-0
                        h-px
                        bg-[#b3a5ff]
                        transition-all
                        duration-300
                        ${
                          activeSection === section.id
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }
                      `}
                    />
                  </span>
                </button>
              ))}
            </aside>

            {/* CONTENT */}
            <div className="space-y-24">

              <section id="introduction" className="scroll-mt-32">
                <h2 className="text-4xl font-semibold tracking-[-0.05em]">
                  Introduction and Organizational Info
                </h2>

                <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/55">
                  We, at Novio Technologies, are dedicated to serving our customers and contacts to the best of our abilities. Part of our commitment involves the responsible management of personal information collected through our website <a href="https://noviotechnologies.com" className="transition hover:text-white">noviotechnologies.com</a> and related interactions.
                </p>

                <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/55">
                  Our primary goals include enhancing the user experience, providing timely support, improving our products and services, and conducting necessary business operations such as billing and account management.
                </p>

                <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/55">
                  We do not have a designated Data Protection Officer, but remain committed to addressing privacy concerns. You can contact us at{" "}
                  <a href="mailto:contact@noviotechnologies.com" className="transition hover:text-white">
                    contact@noviotechnologies.com
                  </a>{" "}
                  or{" "}
                  <a href="tel:+491778932219" className="transition hover:text-white">
                    +49 1778932219
                  </a>.
                </p>
              </section>

              <section id="scope" className="scroll-mt-32">
                <h2 className="text-4xl font-semibold tracking-[-0.05em]">
                  Scope and Application
                </h2>

                <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/55">
                  This Privacy Policy applies to website visitors, registered users and customers. Whether you browse our website, use our services or engage with us as a customer, we process your data with high standards of privacy and security.
                </p>
              </section>

              <section id="collection" className="scroll-mt-32">
                <h2 className="text-4xl font-semibold tracking-[-0.05em]">
                  Data Collection and Processing
                </h2>

                <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/55">
                  We may collect personal data when you use our services, contact us directly or interact with our website. This may include information related to web development, design, online marketing, branding, advertising, technical support and optimization of digital projects.
                </p>

                <ul className="mt-8 grid max-w-4xl gap-3 text-lg text-white/55 md:grid-cols-2">
                  <li>First and last name</li>
                  <li>Email address and phone number</li>
                  <li>Address and city</li>
                  <li>Device ID</li>
                  <li>IP address</li>
                  <li>Browser information and language</li>
                  <li>Operating system and version</li>
                  <li>Approximate IP-based location</li>
                  <li>Interaction logs</li>
                </ul>
              </section>

              <section id="storage" className="scroll-mt-32">
                <h2 className="text-4xl font-semibold tracking-[-0.05em]">
                  Data Storage and Protection
                </h2>

                <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/55">
                  Personal information may be stored on secure servers located in the United States and Germany.
                </p>
              </section>

              <section id="sharing" className="scroll-mt-32">
                <h2 className="text-4xl font-semibold tracking-[-0.05em]">
                  Data Sharing and Disclosure
                </h2>

                <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/55">
                  We may share personal information with trusted third-party service providers who perform services on our behalf.
                </p>
              </section>

              <section id="rights" className="scroll-mt-32">
                <h2 className="text-4xl font-semibold tracking-[-0.05em]">
                  User Rights and Choices
                </h2>

                <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/55">
                  Under GDPR and applicable laws, you may have rights including access, deletion, correction and restriction of processing.
                </p>
              </section>

              <section id="cookies" className="scroll-mt-32">
                <h2 className="text-4xl font-semibold tracking-[-0.05em]">
                  Cookies and Tracking Technologies
                </h2>

                <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/55">
                  Our website may use cookies and tracking technologies to improve user experience and analyze website performance.
                </p>
              </section>

              <section id="transfers" className="scroll-mt-32">
                <h2 className="text-4xl font-semibold tracking-[-0.05em]">
                  International Data Transfers
                </h2>

                <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/55">
                  We may transfer personal information outside your country in compliance with GDPR and applicable laws.
                </p>
              </section>

              <section id="marketing" className="scroll-mt-32">
                <h2 className="text-4xl font-semibold tracking-[-0.05em]">
                  Direct Marketing and Communications
                </h2>

                <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/55">
                  We may send marketing communications where legally permitted or where consent has been provided.
                </p>
              </section>

              <section id="breach" className="scroll-mt-32">
                <h2 className="text-4xl font-semibold tracking-[-0.05em]">
                  Data Breach Notification Procedures
                </h2>

                <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/55">
                  In the event of a data breach, we may notify affected users and authorities where required by law.
                </p>
              </section>

              <section id="updates" className="scroll-mt-32">
                <h2 className="text-4xl font-semibold tracking-[-0.05em]">
                  Policy Updates and Changes
                </h2>

                <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/55">
                  We may update this Privacy Policy periodically to reflect legal or operational changes.
                </p>
              </section>

              <section id="contact" className="scroll-mt-32">
                <h2 className="text-4xl font-semibold tracking-[-0.05em]">
                  Contact
                </h2>

                <div className="mt-8 space-y-3 text-lg text-white/55">
                  <p>
                    <a href="mailto:contact@noviotechnologies.com" className="transition hover:text-white">
                      contact@noviotechnologies.com
                    </a>
                  </p>

                  <p>
                    <a href="tel:+491778932219" className="transition hover:text-white">
                      +49 1778932219
                    </a>
                  </p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}