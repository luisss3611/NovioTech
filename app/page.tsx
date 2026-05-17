export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#050505",
      color: "#ffffff",
      fontFamily: "Arial, Helvetica, sans-serif",
    }}>
      <nav style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "28px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <strong style={{ fontSize: "20px" }}>Novio Technologies</strong>
        <a href="mailto:contact@noviotechnologies.com" style={{
          background: "#ffffff",
          color: "#000",
          padding: "12px 22px",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: 600,
        }}>
          Get Started
        </a>
      </nav>

      <section style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "120px 24px 80px",
        textAlign: "center",
      }}>
        <p style={{ color: "#9ca3af", fontSize: "18px" }}>
          Digital solutions for service based businesses
        </p>

        <h1 style={{
          fontSize: "clamp(52px, 9vw, 120px)",
          lineHeight: "0.95",
          letterSpacing: "-0.07em",
          margin: "20px 0",
        }}>
          We build websites that turn visitors into customers.
        </h1>

        <p style={{
          maxWidth: "760px",
          margin: "0 auto 36px",
          color: "#b5b5b5",
          fontSize: "22px",
          lineHeight: "1.6",
        }}>
          Novio Technologies creates clean, fast and premium websites for businesses
          that want to look more professional and generate more inquiries online.
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "14px",
          flexWrap: "wrap",
        }}>
          <a href="mailto:contact@noviotechnologies.com" style={{
            background: "#ffffff",
            color: "#000000",
            padding: "15px 28px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: 700,
          }}>
            Contact Us
          </a>

          <a href="#services" style={{
            border: "1px solid rgba(255,255,255,0.25)",
            color: "#ffffff",
            padding: "15px 28px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: 700,
          }}>
            View Services
          </a>
        </div>
      </section>

      <section id="services" style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 24px",
      }}>
        <p style={{ color: "#9ca3af" }}>Our Services</p>
        <h2 style={{
          fontSize: "clamp(36px, 6vw, 72px)",
          letterSpacing: "-0.05em",
          marginTop: "10px",
        }}>
          How we help your business grow.
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
          marginTop: "40px",
        }}>
          {[
            ["Lead Generating Websites", "Modern websites designed to build trust and turn visitors into real leads."],
            ["Website Redesigns", "We transform outdated websites into premium digital experiences."],
            ["Landing Pages", "Focused pages built for campaigns, offers and high conversion rates."],
            ["Brand Positioning", "Clean visuals and messaging that make your business look more professional."],
            ["Fast Development", "Responsive, fast and mobile optimized websites built with modern tech."],
            ["Ongoing Support", "Updates, improvements and technical support when your business grows."],
          ].map(([title, text]) => (
            <div key={title} style={{
              background: "linear-gradient(180deg, #151515, #0c0c0c)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "28px",
              padding: "32px",
              minHeight: "190px",
            }}>
              <h3 style={{ fontSize: "24px", marginTop: 0 }}>{title}</h3>
              <p style={{ color: "#b5b5b5", lineHeight: "1.7" }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 24px",
      }}>
        <div style={{
          background: "#ffffff",
          color: "#000000",
          borderRadius: "36px",
          padding: "60px 32px",
          textAlign: "center",
        }}>
          <p style={{ color: "#666" }}>Ready to upgrade your online presence?</p>
          <h2 style={{
            fontSize: "clamp(38px, 6vw, 78px)",
            letterSpacing: "-0.06em",
            margin: "12px 0 28px",
          }}>
            Let’s build something clean.
          </h2>
          <a href="mailto:contact@noviotechnologies.com" style={{
            background: "#000",
            color: "#fff",
            padding: "15px 28px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: 700,
          }}>
            contact@noviotechnologies.com
          </a>
        </div>
      </section>
    </main>
  )
}
