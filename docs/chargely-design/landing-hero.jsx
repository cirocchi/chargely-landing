// Hero section + top nav.

const TopNav = ({ onCtaClick }) => (
  <div style={{
    position: "sticky", top: 0, zIndex: 50,
    background: "rgba(242,239,230,0.85)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid var(--rule)",
  }}>
    <div className="container" style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "16px 32px", height: 64,
    }}>
      <a href="#top" style={{ display: "flex", alignItems: "baseline", gap: 4, textDecoration: "none", color: "var(--ink)" }}>
        <span style={{ font: "400 28px/0.85 var(--display)", letterSpacing: "-0.03em" }}>charge</span>
        <span style={{ font: "400 28px/0.85 var(--display)", fontStyle: "italic", color: "var(--forest)", letterSpacing: "-0.03em" }}>ly</span>
        <Spark size={6} />
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <a href="#come-funziona" className="mono" style={{
          font: "500 11px/1 var(--mono)", letterSpacing: "0.16em", textTransform: "uppercase",
          color: "var(--ink)", opacity: 0.7, textDecoration: "none",
        }}>Come funziona</a>
        <a href="#guadagno" className="mono" style={{
          font: "500 11px/1 var(--mono)", letterSpacing: "0.16em", textTransform: "uppercase",
          color: "var(--ink)", opacity: 0.7, textDecoration: "none",
        }}>Guadagno</a>
        <a href="#faq" className="mono" style={{
          font: "500 11px/1 var(--mono)", letterSpacing: "0.16em", textTransform: "uppercase",
          color: "var(--ink)", opacity: 0.7, textDecoration: "none",
        }}>FAQ</a>
        <button
          onClick={onCtaClick}
          className="btn btn-primary"
          style={{ padding: "10px 16px", font: "600 13px/1 var(--sans)" }}>
          Diventa host
          <span className="arrow">→</span>
        </button>
      </div>
    </div>
  </div>
);

// Abstract "Roma" map: dot grid + a few pulsing pins.
const RomaMap = () => {
  const pins = [
    { x: 28, y: 32, size: 14, label: "Trastevere", live: true },
    { x: 54, y: 22, size: 10, label: "Prati" },
    { x: 68, y: 48, size: 12, label: "San Lorenzo" },
    { x: 42, y: 62, size: 11, label: "Testaccio", live: true },
    { x: 78, y: 70, size: 9,  label: "Ostiense" },
    { x: 18, y: 70, size: 9,  label: "Monteverde" },
    { x: 60, y: 80, size: 8 },
    { x: 86, y: 28, size: 8 },
  ];
  return (
    <div style={{
      position: "relative", width: "100%", aspectRatio: "1 / 1.05",
      background: "var(--forest)", color: "var(--bg)",
      borderRadius: 6, overflow: "hidden",
      boxShadow: "0 30px 80px -30px rgba(13,31,20,0.5)",
    }}>
      {/* dot grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(rgba(242,239,230,0.18) 1.2px, transparent 1.2px)",
        backgroundSize: "26px 26px",
        backgroundPosition: "13px 13px",
      }}></div>
      {/* faint river meander */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5 }}>
        <path d="M -5 35 C 20 30, 30 55, 45 50 S 65 40, 80 60 S 95 85, 110 80" stroke="rgba(198,242,77,0.45)" strokeWidth="1.2" fill="none" />
      </svg>
      {/* pins */}
      {pins.map((p, i) => (
        <div key={i} style={{
          position: "absolute", left: `${p.x}%`, top: `${p.y}%`,
          transform: "translate(-50%, -50%)",
        }}>
          <div style={{
            width: p.size, height: p.size, borderRadius: 999,
            background: p.live ? "var(--lime)" : "var(--bg)",
            boxShadow: p.live
              ? `0 0 0 ${p.size * 0.5}px rgba(198,242,77,0.25), 0 0 0 ${p.size * 1.1}px rgba(198,242,77,0.1)`
              : `0 0 0 ${p.size * 0.4}px rgba(242,239,230,0.18)`,
            animation: p.live ? "pulse 2.4s ease-in-out infinite" : "none",
          }}></div>
          {p.label && (
            <div className="mono" style={{
              position: "absolute", top: "100%", left: "50%",
              transform: "translate(-50%, 6px)",
              font: "500 10px/1 var(--mono)", letterSpacing: "0.08em",
              color: "var(--bg)", opacity: 0.85, whiteSpace: "nowrap",
            }}>{p.label}</div>
          )}
        </div>
      ))}
      {/* corner label */}
      <div style={{
        position: "absolute", top: 18, left: 20,
        font: "500 10px/1.5 var(--mono)", letterSpacing: "0.18em", textTransform: "uppercase",
        color: "var(--lime)",
      }}>
        Roma — rete in formazione
      </div>
      <div style={{
        position: "absolute", top: 18, right: 20, display: "flex", gap: 14, alignItems: "center",
        font: "500 10px/1.5 var(--mono)", letterSpacing: "0.12em", textTransform: "uppercase",
        color: "var(--bg)", opacity: 0.65,
      }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--lime)" }}></span> attivo
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--bg)" }}></span> in arrivo
        </span>
      </div>
      {/* bottom card overlay */}
      <div style={{
        position: "absolute", bottom: 20, left: 20, right: 20,
        background: "rgba(13,31,20,0.65)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(242,239,230,0.18)",
        padding: "14px 18px", borderRadius: 4,
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16,
      }}>
        <div>
          <div className="mono" style={{ font: "500 10px/1 var(--mono)", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--lime)" }}>
            Host attivi — Trastevere
          </div>
          <div style={{ font: "400 22px/1 var(--display)", marginTop: 6 }}>
            <em style={{ fontStyle: "italic" }}>3 prese</em> · 2 wallbox
          </div>
        </div>
        <div className="mono" style={{
          font: "500 10px/1.4 var(--mono)", letterSpacing: "0.16em", textTransform: "uppercase",
          color: "var(--bg)", opacity: 0.7, textAlign: "right",
        }}>
          Aggiornata<br/>22.05.26
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
};

const Hero = ({ tweaks, onCtaClick }) => {
  const showMap = tweaks.heroVariant === "map";

  return (
    <section id="top" data-screen-label="01 Hero" style={{
      position: "relative", paddingTop: 64, paddingBottom: 120,
      overflow: "hidden",
    }}>
      {/* faint dot grid bg */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(rgba(13,31,20,0.07) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        pointerEvents: "none",
      }}></div>

      <div className="container" style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.25fr) minmax(0, 1fr)",
        gap: 56,
        alignItems: "center",
        position: "relative",
      }}>
        <div>
          <Pill tone="lime">● Beta Roma · 2026</Pill>
          <h1 style={{
            font: "400 clamp(48px, 7.5vw, 96px)/0.93 var(--display)",
            letterSpacing: "-0.025em",
            margin: "28px 0 24px",
            textWrap: "balance",
          }}>
            Hai una presa<br />
            elettrica?<br />
            <em style={{ fontStyle: "italic", color: "var(--forest)" }}>Falla guadagnare<br/>per te.</em>
          </h1>
          <p style={{
            font: "400 19px/1.55 var(--sans)",
            color: "var(--ink)", opacity: 0.8,
            maxWidth: 560, margin: "0 0 36px",
            textWrap: "pretty",
          }}>
            Wallbox, presa Schuko in garage, in cortile, nel vialetto, sotto casa:
            se un'auto elettrica può collegarsi, puoi diventare host. Stiamo costruendo
            a <strong style={{ fontWeight: 600 }}>Roma</strong> la prima rete di
            ricarica tra privati. Analizziamo gratis la tua bolletta e ti diciamo
            quanto puoi guadagnare ogni mese.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <button onClick={onCtaClick} className="btn btn-primary">
              Calcola il tuo guadagno
              <span className="arrow">→</span>
            </button>
            <a href="#come-funziona" className="btn btn-ghost">
              Come funziona
            </a>
          </div>
          <div style={{ display: "flex", gap: 24, marginTop: 36, flexWrap: "wrap" }}>
            {[
              ["Iscrizione gratuita"],
              ["Nessun impegno"],
              ["Risposta in 48 ore"],
            ].map(([t]) => (
              <div key={t} style={{
                display: "flex", alignItems: "center", gap: 8,
                font: "500 13px/1 var(--sans)", color: "var(--ink)", opacity: 0.75,
              }}>
                <span style={{
                  width: 18, height: 18, borderRadius: 999,
                  border: "1.5px solid var(--forest)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  color: "var(--forest)", fontSize: 11, fontWeight: 700,
                }}>✓</span>
                {t}
              </div>
            ))}
          </div>
        </div>
        {showMap ? <RomaMap /> : (
          <div style={{
            aspectRatio: "1 / 1.05", background: "var(--forest)", borderRadius: 6,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--bg)", padding: 40, textAlign: "center", position: "relative",
          }}>
            <div>
              <div className="mono" style={{ font: "500 11px/1 var(--mono)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--lime)" }}>
                Placeholder
              </div>
              <div style={{ font: "400 36px/1.05 var(--display)", marginTop: 16, color: "var(--bg)" }}>
                <em style={{ fontStyle: "italic" }}>Foto wallbox</em> in contesto domestico romano
              </div>
            </div>
            <div className="mono" style={{
              position: "absolute", bottom: 16, left: 16, right: 16,
              font: "500 10px/1.5 var(--mono)", letterSpacing: "0.16em", textTransform: "uppercase",
              color: "var(--bg)", opacity: 0.45, borderTop: "1px solid rgba(242,239,230,0.2)", paddingTop: 12,
              display: "flex", justifyContent: "space-between",
            }}>
              <span>4 : 3 ritratto</span><span>JPG · max 2 MB</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

Object.assign(window, { TopNav, Hero });
