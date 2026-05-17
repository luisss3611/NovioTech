export default function Home() {
  return (
    <main
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        background: "black",
      }}
    >
      <iframe
        src="https://www.youtube.com/embed/8BsVwcr4UT4?autoplay=1&mute=1&controls=0&loop=1&playlist=8BsVwcr4UT4&playsinline=1"
        title="Background Video"
        allow="autoplay"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "120vw",
          height: "120vh",
          transform: "translate(-50%, -50%)",
          border: "none",
          pointerEvents: "none",
          zIndex: -2,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
          zIndex: -1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          textAlign: "center",
          padding: "20px",
          fontFamily: "Arial",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(60px, 10vw, 140px)",
            letterSpacing: "-0.07em",
            marginBottom: "10px",
          }}
        >
          Novio Technologies
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.75)",
            maxWidth: "700px",
            lineHeight: 1.6,
          }}
        >
          Modern websites and digital experiences for businesses that want to stand out.
        </p>
      </div>
    </main>
  )
}
