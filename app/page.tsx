export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #f5f5f7 0%, #ffffff 100%)",
      color: "#1d1d1f",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      padding: "40px 24px"
    }}>
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1100px",
        margin: "0 auto"
      }}>
        <strong style={{ fontSize: "20px" }}>Novio Technologies</strong>
        <a href="mailto:contact@noviotechnologies.com" style={{
          color: "#1d1d1f",
          textDecoration: "none",
          fontSize: "15px"
        }}>
          Contact
        </a>
      </nav>

      <section style={{
        maxWidth: "900px",
        margin: "140px auto 0",
        textAlign: "center"
      }}>
        <p style={{
          color: "#6e6e73",
          fontSize: "18px",
          marginBottom: "16px"
        }}>
          Modern websites for modern businesses
        </p>

        <h1 style={{
          fontSize: "clamp(48px, 8vw, 96px)",
          lineHeight: "1.02",
          letterSpacing: "-0.06em",
          margin: "0 0 24px"
        }}>
          Websites that feel premium.
        </h1>

        <p style={{
          maxWidth: "680px",
          margin: "0 auto 36px",
          fontSize: "22px",
          lineHeight: "1.5",
          color: "#6e6e73"
        }}>
          We design and build clean, fast and high-converting websites
          for brands that want to look more professional online.
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "14px",
          flexWrap: "wrap"
        }}>
          <a href="mailto:contact@noviotechnologies.com" style={{
            background: "#0071e3",
            color: "white",
            padding: "14px 26px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: 500
          }}>
            Get in touch
          </a>

          <a href="#services" style={{
            background: "white",
            color: "#1d1d1f",
            padding: "14px 26px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: 500,
            boxShadow: "0 8px 30px rgba(0,0,0,0.08)"
          }}>
            View services
          </a>
        </div>
      </section>

      <section id="services" style={{
        maxWidth: "1100px",
        margin: "140px auto 0",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {[
          ["Website Redesigns", "We turn outdated websites into modern, trustworthy online experiences."],
          ["Landing Pages", "Clean pages built to convert visitors into real inquiries."],
          ["Fast Development", "Responsive, fast and optimized websites built with modern technology."]
        ].map(([title, text]) => (
          <div key={title} style={{
            background: "rgba(255,255,255,0.8)",
            borderRadius: "28px",
            padding: "32px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.06)"
          }}>
            <h2 style={{ marginTop: 0, fontSize: "24px" }}>{title}</h2>
            <p style={{ color: "#6e6e73", lineHeight: "1.6" }}>{text}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
