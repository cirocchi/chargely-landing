// Section 4 — Quanto puoi guadagnare
// Section 5 — Perché ora

const EARNINGS = [
  {
    tag: "Il caso più comune",
    type: "Presa Schuko standard",
    freq: "1 ricarica notturna ogni 2 giorni",
    min: 45,
    max: 60,
    note: "Ricarica lenta, perfetta per chi parcheggia tutta la notte.",
    highlight: false,
    kW: "2,3 kW",
  },
  {
    tag: "Il caso medio",
    type: "Wallbox 3,7 kW",
    freq: "3 ricariche parziali a settimana",
    min: 55,
    max: 75,
    note: "Il punto dolce: tempi ragionevoli, margine solido.",
    highlight: true,
    kW: "3,7 kW",
  },
  {
    tag: "Il caso top",
    type: "Wallbox 7 kW",
    freq: "2 ricariche complete a settimana",
    min: 80,
    max: 110,
    note: "Ricarica veloce. Adatto se hai un contatore potenziato.",
    highlight: false,
    kW: "7 kW",
  },
];

const GuadagnoSection = () => (
  <Section id="guadagno" bg="var(--paper)" label="04 Guadagno">
    <SectionHeader
      num="04"
      eyebrow="Quanto puoi guadagnare"
      title={<>Tre esempi reali,<br/><em style={{ fontStyle: "italic", color: "var(--forest)" }}>dal più comune al più raro.</em></>}
      align="center"
    >
      Le stime sono al netto della commissione di piattaforma e si basano su una
      tariffa media domestica di 0,28 €/kWh e un prezzo di vendita di 0,45 €/kWh.
      I valori reali dipendono dalla tua bolletta specifica.
    </SectionHeader>

    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 20,
    }}>
      {EARNINGS.map((e, i) => {
        const hi = e.highlight;
        const cardBg = hi ? "var(--forest)" : "var(--bg)";
        const fg = hi ? "var(--bg)" : "var(--ink)";
        const accent = hi ? "var(--lime)" : "var(--forest)";
        return (
          <div key={i} style={{
            background: cardBg, color: fg,
            border: `1px solid ${hi ? "var(--forest)" : "var(--rule)"}`,
            borderRadius: 6,
            padding: "32px 28px 28px",
            position: "relative",
            display: "flex", flexDirection: "column", gap: 18,
            minHeight: 380,
            boxShadow: hi ? "0 20px 60px -30px rgba(13,31,20,0.4)" : "none",
            transform: hi ? "translateY(-8px)" : "none",
          }}>
            {hi && (
              <span style={{
                position: "absolute", top: -12, left: 28,
                font: "500 10px/1 var(--mono)", letterSpacing: "0.18em", textTransform: "uppercase",
                background: "var(--lime)", color: "var(--ink)",
                padding: "8px 12px", borderRadius: 999, border: "1.5px solid var(--ink)",
              }}>Più scelto</span>
            )}

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span className="mono" style={{
                font: "500 11px/1 var(--mono)", letterSpacing: "0.16em", textTransform: "uppercase",
                color: accent,
              }}>{e.tag}</span>
              <span className="mono" style={{
                font: "500 11px/1 var(--mono)", letterSpacing: "0.08em",
                color: hi ? "rgba(242,239,230,0.6)" : "rgba(13,31,20,0.55)",
              }}>{e.kW}</span>
            </div>

            <h3 style={{
              font: "400 30px/1.05 var(--display)", margin: 0, letterSpacing: "-0.015em",
            }}>{e.type}</h3>

            <p style={{
              font: "400 14px/1.5 var(--sans)", margin: 0,
              opacity: hi ? 0.75 : 0.7,
            }}>{e.freq}</p>

            <div style={{
              marginTop: "auto",
              borderTop: `1px solid ${hi ? "rgba(242,239,230,0.18)" : "var(--rule)"}`,
              paddingTop: 18,
            }}>
              <div className="mono" style={{
                font: "500 10px/1 var(--mono)", letterSpacing: "0.18em", textTransform: "uppercase",
                color: hi ? "rgba(242,239,230,0.55)" : "rgba(13,31,20,0.55)",
                marginBottom: 6,
              }}>Margine netto stimato / mese</div>
              <div style={{
                font: "400 56px/0.9 var(--display)", color: hi ? "var(--lime)" : "var(--ink)",
                letterSpacing: "-0.025em",
              }}>
                {e.min}–{e.max} <span style={{ fontSize: "0.5em", fontStyle: "italic", color: hi ? "var(--bg)" : "var(--forest)" }}>€</span>
              </div>
              <p style={{
                font: "400 13px/1.5 var(--sans)", margin: "12px 0 0",
                opacity: hi ? 0.7 : 0.65,
              }}>{e.note}</p>
            </div>
          </div>
        );
      })}
    </div>

    {/* Reassurance block */}
    <div style={{
      marginTop: 40,
      background: "var(--bg)",
      border: "1px solid var(--rule)",
      borderRadius: 6,
      padding: "28px 32px",
      display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, alignItems: "center",
    }}>
      <div style={{
        font: "400 64px/0.85 var(--display)", color: "var(--forest)",
        fontStyle: "italic", letterSpacing: "-0.03em",
      }}>“</div>
      <p style={{ margin: 0, font: "400 18px/1.5 var(--sans)", color: "var(--ink)", textWrap: "pretty" }}>
        Anche con una semplice <strong style={{ fontWeight: 600 }}>presa Schuko di casa</strong> puoi
        generare un reddito interessante. La ricarica è più lenta — circa 10-15 km
        di autonomia per ogni ora — ma per chi parcheggia tutta la notte è perfetta.
      </p>
    </div>
  </Section>
);

const STATS = [
  { big: "365K", small: "auto elettriche circolanti in Italia, a fine 2025." },
  { big: "+46%", small: "crescita delle immatricolazioni EV nel 2025." },
  { big: "1 su 5", small: "EV italiani circola tra Roma e il Lazio." },
  { big: "Priorità", small: "I primi host ottengono massima visibilità sulla futura mappa.", italic: true },
];

const PercheOraSection = () => (
  <Section id="perche-ora" bg="var(--forest)" label="05 Perche' ora">
    <div style={{ color: "var(--bg)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)", gap: 56, alignItems: "end", marginBottom: 64 }}>
        <div>
          <div className="eyebrow" style={{ color: "var(--lime)" }}>
            <span className="num" style={{ color: "rgba(242,239,230,0.6)" }}>N°05</span>
            <span className="line" style={{ background: "var(--lime)" }}></span>
            <span>Perché ora</span>
          </div>
          <h2 style={{
            font: "400 clamp(38px, 5.4vw, 68px)/0.98 var(--display)",
            letterSpacing: "-0.02em", margin: 0, textWrap: "balance",
          }}>
            Roma è la città italiana<br/>
            <em style={{ fontStyle: "italic", color: "var(--lime)" }}>con più EV e meno colonnine.</em>
          </h2>
        </div>
        <p style={{
          font: "400 17px/1.6 var(--sans)", margin: 0, opacity: 0.8,
          maxWidth: 480, textWrap: "pretty",
        }}>
          La rete pubblica romana è sottodimensionata. La maggior parte dei
          condomini non ha box auto. Significa che gli EV driver in città
          stanno cercando, oggi, dove ricaricare la sera. Tu hai la presa giusta
          al momento giusto.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 1,
        background: "rgba(242,239,230,0.2)",
        border: "1px solid rgba(242,239,230,0.2)",
        borderRadius: 6,
        overflow: "hidden",
      }}>
        {STATS.map((s, i) => (
          <div key={i} style={{
            background: "var(--forest)",
            padding: "40px 28px 32px",
            display: "flex", flexDirection: "column", gap: 16,
            minHeight: 220,
          }}>
            <div className="mono" style={{
              font: "500 10px/1 var(--mono)", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "var(--lime)", opacity: 0.85,
            }}>FATTO 0{i + 1}</div>
            <div style={{
              font: `400 ${s.big.length > 4 ? "56px" : "84px"}/0.9 var(--display)`,
              color: "var(--lime)",
              letterSpacing: "-0.03em",
              fontStyle: s.italic ? "italic" : "normal",
            }}>{s.big}</div>
            <p style={{
              font: "400 14px/1.55 var(--sans)", margin: 0,
              color: "var(--bg)", opacity: 0.78,
            }}>{s.small}</p>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 32, paddingTop: 18, borderTop: "1px solid rgba(242,239,230,0.18)",
        font: "500 11px/1.5 var(--mono)", letterSpacing: "0.16em", textTransform: "uppercase",
        color: "rgba(242,239,230,0.55)",
        display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16,
      }}>
        <span>Fonte → Motus-E, UNRAE, ANFIA · fine 2025</span>
        <span>Aggiornato 22.05.26</span>
      </div>
    </div>
  </Section>
);

Object.assign(window, { GuadagnoSection, PercheOraSection });
