// Shared atoms for the Chargely Watt brand landing.

const SectionHeader = ({ num, eyebrow, title, children, align = "left", maxWidth = 720 }) => (
  <div style={{ textAlign: align, maxWidth: align === "center" ? maxWidth : "none", margin: align === "center" ? "0 auto 56px" : "0 0 56px" }}>
    <div className="eyebrow" style={{ justifyContent: align === "center" ? "center" : "flex-start" }}>
      <span className="num">N°{num}</span>
      <span className="line"></span>
      <span>{eyebrow}</span>
    </div>
    <h2 style={{
      font: "400 clamp(38px, 5.4vw, 64px)/1.0 var(--display)",
      letterSpacing: "-0.02em",
      margin: "0 0 18px",
      textWrap: "balance",
    }}>{title}</h2>
    {children && (
      <p style={{
        font: "400 18px/1.55 var(--sans)",
        margin: 0,
        color: "var(--ink)",
        opacity: 0.78,
        maxWidth: align === "center" ? maxWidth : 620,
        textWrap: "pretty",
      }}>
        {children}
      </p>
    )}
  </div>
);

const Pill = ({ children, tone = "default" }) => {
  const tones = {
    default: { bg: "transparent", color: "var(--ink)", border: "1px solid var(--rule-strong)" },
    forest:  { bg: "var(--forest)", color: "var(--bg)", border: "1px solid var(--forest)" },
    lime:    { bg: "var(--lime)", color: "var(--ink)", border: "1px solid var(--ink)" },
    ghost:   { bg: "rgba(13,31,20,.04)", color: "var(--ink)", border: "1px solid var(--rule)" },
  };
  const s = tones[tone] || tones.default;
  return (
    <span className="mono" style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      font: "500 11px/1 var(--mono)", letterSpacing: "0.12em", textTransform: "uppercase",
      padding: "8px 12px", borderRadius: 999,
      background: s.bg, color: s.color, border: s.border,
    }}>{children}</span>
  );
};

// Tiny inline glyph used as a "mark" in the logo lockup, etc.
const Spark = ({ size = 14, color = "var(--lime)" }) => (
  <span style={{
    display: "inline-block", width: size, height: size,
    background: color, borderRadius: 3, verticalAlign: "baseline",
  }}></span>
);

// Section wrapper — alternating bg
const Section = ({ id, bg = "var(--bg)", py = 120, children, label }) => (
  <section id={id} data-screen-label={label} style={{
    background: bg,
    padding: `clamp(72px, 9vw, ${py}px) 0`,
    position: "relative",
  }}>
    <div className="container">{children}</div>
  </section>
);

Object.assign(window, { SectionHeader, Pill, Spark, Section });
