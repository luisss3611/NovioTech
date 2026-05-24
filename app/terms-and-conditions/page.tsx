"use client"
import { useEffect, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
const sections = [
  { id: "agreement", label: "Agreement" },
  { id: "services", label: "Our Services" },
  { id: "ip", label: "Intellectual Property" },
  { id: "userreps", label: "User Representations" },
  { id: "prohibited", label: "Prohibited Activities" },
  { id: "ugc", label: "User Contributions" },
  { id: "license", label: "Contribution License" },
  { id: "thirdparty", label: "Third-Party Links" },
  { id: "sitemanage", label: "Services Management" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "terms", label: "Termination" },
  { id: "modifications", label: "Modifications" },
  { id: "law", label: "Governing Law" },
  { id: "disputes", label: "Disputes" },
  { id: "corrections", label: "Corrections" },
  { id: "disclaimer", label: "Disclaimer" },
  { id: "liability", label: "Liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "userdata", label: "User Data" },
  { id: "electronic", label: "Electronic Communications" },
  { id: "california", label: "California Users" },
  { id: "misc", label: "Miscellaneous" },
  { id: "contact", label: "Contact" },
]
export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState("agreement")
  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0].id
      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 180) {
            current = section.id
          }
        }
      })
      setActiveSection(current)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
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
  const textClass = "mt-6 max-w-4xl text-lg leading-relaxed text-white/55"
  const titleClass = "text-4xl font-semibold tracking-[-0.05em]"
  const linkClass = "text-white/80 underline underline-offset-4 transition hover:text-[#b3a5ff]"
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
              Terms and Conditions
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/50">
              Effective Date: 20/05/2026
            </p>
          </div>
          <div className="grid gap-20 md:grid-cols-[280px_1fr]">
<aside className="sticky top-32 hidden self-start overflow-hidden pr-4 md:block">
  <div
    className="space-y-5 transition-transform duration-500 ease-out"
    style={{
      transform: `translateY(-${Math.max(
        0,
        sections.findIndex((section) => section.id === activeSection) * 46 - 220
      )}px)`,
    }}
  >
    {sections.map((section) => (
      <button
        key={section.id}
        onClick={() => scrollToSection(section.id)}
        className={`
          group relative block border-l pl-5 text-left transition-all duration-300
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
              absolute -bottom-1 left-0 h-px bg-[#b3a5ff] transition-all duration-300
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
  </div>
</aside>            <div className="space-y-24">
              <section id="agreement" className="scroll-mt-32">
                <h2 className={titleClass}>Agreement to Our Legal Terms</h2>
                <p className={textClass}>
                  We are Novio Technologies (“Company,” “we,” “us,” “our”), a company registered in Germany at Josef-Aberger-Str. 17, Unterwoessen, Bavaria 83246.
                </p>
                <p className={textClass}>
                  We operate the website{" "}
                  <a href="https://noviotechnologies.com" className={linkClass}>
                    noviotechnologies.com
                  </a>{" "}
                  (the “Site”), as well as any other related products and services that refer or link to these legal terms (the “Legal Terms”) (collectively, the “Services”).
                </p>
                <p className={textClass}>
                  Novio Technologies is a digital agency providing website development, branding, SEO, advertising and digital growth services for businesses.
                </p>
                <p className={textClass}>
                  You can contact us by phone at{" "}
                  <a href="tel:+491778932219" className={linkClass}>
                    +49 177 8932219
                  </a>
                  , email at{" "}
                  <a href="mailto:contact@noviotechnologies.com" className={linkClass}>
                    contact@noviotechnologies.com
                  </a>
                  , or by mail to Josef-Aberger-Str. 17, Unterwoessen, Bavaria 83246, Germany.
                </p>
                <p className={textClass}>
                  These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”), and Novio Technologies, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. If you do not agree with all of these Legal Terms, then you are expressly prohibited from using the Services and must discontinue use immediately.
                </p>
                <p className={textClass}>
                  We will provide you with prior notice of any scheduled changes to the Services you are using. Changes to these Legal Terms will become effective thirty (30) days after the notice is given, except if the changes apply to security updates, bug fixes, and a court order, in which case the changes will be effective immediately.
                </p>
                <p className={textClass}>
                  The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
                </p>
              </section>
              <section id="services" className="scroll-mt-32">
                <h2 className={titleClass}>1. Our Services</h2>
                <p className={textClass}>
                  The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation.
                </p>
                <p className={textClass}>
                  The Services are not tailored to comply with industry-specific regulations such as HIPAA or FISMA. If your interactions would be subjected to such laws, you may not use the Services.
                </p>
              </section>
              <section id="ip" className="scroll-mt-32">
                <h2 className={titleClass}>2. Intellectual Property Rights</h2>
                <h3 className="mt-8 text-2xl font-semibold">Our intellectual property</h3>
                <p className={textClass}>
                  We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services, as well as the trademarks, service marks, and logos contained therein.
                </p>
                <p className={textClass}>
                  Our Content and Marks are protected by copyright and trademark laws and treaties worldwide.
                </p>
                <h3 className="mt-10 text-2xl font-semibold">Your use of our Services</h3>
                <p className={textClass}>
                  Subject to your compliance with these Legal Terms, we grant you a non-exclusive, non-transferable, revocable license to access the Services and download or print a copy of any portion of the Content to which you have properly gained access, solely for your personal, non-commercial use or internal business purpose.
                </p>
                <p className={textClass}>
                  No part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose without our express prior written permission.
                </p>
                <p className={textClass}>
                  If you wish to make any use of the Services, Content, or Marks, please contact us at{" "}
                  <a href="mailto:contact@noviotechnologies.com" className={linkClass}>
                    contact@noviotechnologies.com
                  </a>
                  .
                </p>
              </section>
              <section id="userreps" className="scroll-mt-32">
                <h2 className={titleClass}>3. User Representations</h2>
                <p className={textClass}>
                  By using the Services, you represent and warrant that you have the legal capacity to comply with these Legal Terms, you are not a minor, you will not access the Services through automated or non-human means, you will not use the Services for any illegal or unauthorized purpose, and your use of the Services will not violate any applicable law or regulation.
                </p>
                <p className={textClass}>
                  If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse current or future use of the Services.
                </p>
              </section>
              <section id="prohibited" className="scroll-mt-32">
                <h2 className={titleClass}>4. Prohibited Activities</h2>
                <p className={textClass}>
                  You may not access or use the Services for any purpose other than that for which we make the Services available.
                </p>
                <ul className="mt-8 max-w-4xl list-disc space-y-3 pl-6 text-lg leading-relaxed text-white/55">
                  <li>Systematically retrieve data or other content without written permission.</li>
                  <li>Trick, defraud, or mislead us and other users.</li>
                  <li>Circumvent or interfere with security-related features.</li>
                  <li>Use the Services in violation of laws or regulations.</li>
                  <li>Upload viruses, malware, Trojan horses, or harmful code.</li>
                  <li>Engage in automated use such as bots, scripts, or scraping tools.</li>
                  <li>Attempt to impersonate another user or person.</li>
                  <li>Interfere with or disrupt the Services or connected networks.</li>
                  <li>Copy, adapt, reverse engineer, decompile, or disassemble software forming part of the Services.</li>
                  <li>Use the Services for unauthorized advertising, spam, competition, or commercial purposes.</li>
                </ul>
              </section>
              <section id="ugc" className="scroll-mt-32">
                <h2 className={titleClass}>5. User Generated Contributions</h2>
                <p className={textClass}>
                  The Services may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials including text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information (“Contributions”).
                </p>
                <ul className="mt-8 max-w-4xl list-disc space-y-3 pl-6 text-lg leading-relaxed text-white/55">
                  <li>Your Contributions do not infringe the rights of any third party.</li>
                  <li>You own or have the required licenses and permissions.</li>
                  <li>Your Contributions are not false, inaccurate, or misleading.</li>
                  <li>Your Contributions are not unlawful, abusive, obscene, defamatory, or harmful.</li>
                  <li>Your Contributions do not violate privacy or publicity rights.</li>
                  <li>Your Contributions do not include spam, unauthorized advertising, or malicious software.</li>
                </ul>
              </section>
              <section id="license" className="scroll-mt-32">
                <h2 className={titleClass}>6. Contribution License</h2>
                <p className={textClass}>
                  You and Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices.
                </p>
                <p className={textClass}>
                  By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
                </p>
                <p className={textClass}>
                  We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights associated with your Contributions.
                </p>
              </section>
              <section id="thirdparty" className="scroll-mt-32">
                <h2 className={titleClass}>7. Third-Party Websites and Content</h2>
                <p className={textClass}>
                  The Services may contain links to third-party websites and content. Such third-party websites are not investigated, monitored, or checked for accuracy or completeness by us, and we are not responsible for any third-party websites accessed through the Services.
                </p>
                <p className={textClass}>
                  Any purchases you make through third-party websites are exclusively between you and the applicable third party.
                </p>
              </section>
              <section id="sitemanage" className="scroll-mt-32">
                <h2 className={titleClass}>8. Services Management</h2>
                <p className={textClass}>
                  We reserve the right, but not the obligation, to monitor the Services for violations, take legal action where appropriate, restrict or disable access to Contributions, and otherwise manage the Services to protect our rights and ensure proper functionality.
                </p>
              </section>
              <section id="privacy" className="scroll-mt-32">
                <h2 className={titleClass}>9. Privacy Policy</h2>
                <p className={textClass}>
                  We care about data privacy and security. Please review our Privacy Policy at{" "}
                  <a href="/privacy-policy" className={linkClass}>
                    noviotechnologies.com/privacy-policy
                  </a>
                  . By using the Services, you agree to be bound by our Privacy Policy.
                </p>
              </section>
              <section id="terms" className="scroll-mt-32">
                <h2 className={titleClass}>10. Term and Termination</h2>
                <p className={textClass}>
                  These Legal Terms shall remain in full force and effect while you use the Services. We reserve the right to deny access to and use of the Services to any person for any reason, including breach of these Legal Terms or applicable law.
                </p>
                <p className={textClass}>
                  We may terminate your use of the Services or delete any content posted by you at any time without warning.
                </p>
              </section>
              <section id="modifications" className="scroll-mt-32">
                <h2 className={titleClass}>11. Modifications and Interruptions</h2>
                <p className={textClass}>
                  We reserve the right to change, modify, or remove the contents of the Services at any time without notice.
                </p>
                <p className={textClass}>
                  We cannot guarantee the Services will always be available and may experience interruptions, delays, or errors.
                </p>
              </section>
              <section id="law" className="scroll-mt-32">
                <h2 className={titleClass}>12. Governing Law</h2>
                <p className={textClass}>
                  These Legal Terms are governed by and interpreted following the laws of Germany.
                </p>
                <p className={textClass}>
                  If your habitual residence is in the EU and you are a consumer, you additionally possess the protection provided by mandatory provisions of the law in your country of residence.
                </p>
                <p className={textClass}>
                  Novio Technologies and yourself both agree to submit to the non-exclusive jurisdiction of the courts of Bavaria, Germany.
                </p>
              </section>
              <section id="disputes" className="scroll-mt-32">
                <h2 className={titleClass}>13. Dispute Resolution</h2>
                <p className={textClass}>
                  The European Commission provides information on consumer dispute resolution platforms and consumer redress bodies.
                </p>
                <p className={textClass}>
                  You can access the official European consumer redress website here:{" "}
                  <a
                    href="https://consumer-redress.ec.europa.eu/index_en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    consumer-redress.ec.europa.eu
                  </a>
                  .
                </p>
              </section>
              <section id="corrections" className="scroll-mt-32">
                <h2 className={titleClass}>14. Corrections</h2>
                <p className={textClass}>
                  There may be information on the Services containing typographical errors, inaccuracies, or omissions. We reserve the right to correct any errors and update information at any time without prior notice.
                </p>
              </section>
              <section id="disclaimer" className="scroll-mt-32">
                <h2 className={titleClass}>15. Disclaimer</h2>
                <p className={textClass}>
                  The Services are provided on an “as-is” and “as-available” basis. You agree that your use of the Services is at your sole risk.
                </p>
                <p className={textClass}>
                  To the fullest extent permitted by law, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
                <p className={textClass}>
                  We are not responsible for errors, interruptions, viruses, data loss, or damages arising from the use of the Services.
                </p>
              </section>
              <section id="liability" className="scroll-mt-32">
                <h2 className={titleClass}>16. Limitations of Liability</h2>
                <p className={textClass}>
                  In no event will we or our directors, employees, or agents be liable for any indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the Services.
                </p>
                <p className={textClass}>
                  Our liability shall at all times be limited to the amount paid, if any, by you to us.
                </p>
              </section>
              <section id="indemnification" className="scroll-mt-32">
                <h2 className={titleClass}>17. Indemnification</h2>
                <p className={textClass}>
                  You agree to defend, indemnify, and hold us harmless from any loss, damage, liability, claim, or demand arising out of your use of the Services, breach of these Legal Terms, or violation of the rights of a third party.
                </p>
              </section>
              <section id="userdata" className="scroll-mt-32">
                <h2 className={titleClass}>18. User Data</h2>
                <p className={textClass}>
                  We maintain certain data that you transmit to the Services for the purpose of managing performance and operations. Although we perform routine backups, you are solely responsible for your data.
                </p>
              </section>
              <section id="electronic" className="scroll-mt-32">
                <h2 className={titleClass}>19. Electronic Communications, Transactions, and Signatures</h2>
                <p className={textClass}>
                  You consent to receive electronic communications and agree that all agreements, notices, disclosures, and other communications provided electronically satisfy legal requirements.
                </p>
                <p className={textClass}>
                  You agree to the use of electronic signatures, contracts, orders, and records.
                </p>
              </section>
              <section id="california" className="scroll-mt-32">
                <h2 className={titleClass}>20. California Users and Residents</h2>
                <p className={textClass}>
                  If any complaint with us is not satisfactorily resolved, California residents may contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs.
                </p>
              </section>
              <section id="misc" className="scroll-mt-32">
                <h2 className={titleClass}>21. Miscellaneous</h2>
                <p className={textClass}>
                  These Legal Terms and any policies or operating rules posted by us on the Services constitute the entire agreement and understanding between you and us.
                </p>
                <p className={textClass}>
                  Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision.
                </p>
                <p className={textClass}>
                  If any provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision shall be deemed severable and shall not affect the validity and enforceability of any remaining provisions.
                </p>
              </section>
              <section id="contact" className="scroll-mt-32">
                <h2 className={titleClass}>22. Contact Us</h2>
                <p className={textClass}>
                  In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
                </p>
                <div className="mt-8 space-y-3 text-lg text-white/55">
                  <p>Novio Technologies</p>
                  <p>Josef-Aberger-Str. 17</p>
                  <p>Unterwoessen, Bavaria 83246</p>
                  <p>Germany</p>
                  <p>
                    Phone:{" "}
                    <a href="tel:+491778932219" className={linkClass}>
                      +49 177 8932219
                    </a>
                  </p>
                  <p>
                    Email:{" "}
                    <a href="mailto:contact@noviotechnologies.com" className={linkClass}>
                      contact@noviotechnologies.com
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