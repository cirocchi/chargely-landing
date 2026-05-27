// Direction 1 — CIVICA
// Italian civic-utility aesthetic. Like a well-designed bolletta or a public service.
// Editorial serif headlines + grotesque body + mono labels. Cream + bottle green + signal yellow.

const CivicaSheet = () => {
  const C = {
    paper:    "#F1ECDE",
    paperAlt: "#E7E1D0",
    ink:      "#16201A",
    bottle:   "#1F4D3A",
    bottleHi: "#2C6B52",
    yellow:   "#F2C14E",
    brick:    "#B85C3C",
    rule:     "#1620201A",
  };
  const display = `"Newsreader", Georgia, serif`;
  const body = `"IBM Plex Sans", system-ui, sans-serif`;
  const mono = `"IBM Plex Mono", ui-monospace, monospace`;

  const Swatch = ({ bg, name, hex, fg = C.ink }) => (
    <div style={{
      background: bg, color: fg, height: 120,
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      padding: "14px 14px", border: `1px solid ${C.rule}`,
    }}>
      <span style={{ font: `500 11px/1 ${mono}`, letterSpacing: ".08em", textTransform: "uppercase", opacity: .85 }}>{name}</span>
      <span style={{ font: `500 14px/1 ${mono}` }}>{hex}</span>
    </div>
  );

  const Label = ({ children }) => (
    <div style={{
      font: `500 11px/1 ${mono}`, letterSpacing: ".14em", textTransform: "uppercase",
      color: C.ink, opacity: .55, marginBottom: 14,
      display: "flex", alignItems: "center", gap: 10,
    }}>
      <span>{children}</span>
      <span style={{ flex: 1, height: 1, background: C.ink, opacity: .15 }}></span>
    </div>
  );

  return (
    <div style={{
      width: 1100, minHeight: 1900, background: C.paper, color: C.ink,
      fontFamily: body, padding: "56px 64px", boxSizing: "border-box",
      position: "relative", overflow: "hidden",
    }}>
      {/* top meta strip */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "baseline",
        font: `500 11px/1 ${mono}`, letterSpacing: ".14em", textTransform: "uppercase",
        color: C.ink, opacity: .55, paddingBottom: 18, borderBottom: `1px solid ${C.ink}22`,
      }}>
        <span>Direzione 01 / Civica</span>
        <span>Roma · 2026</span>
      </div>

      {/* heading */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 40 }}>
        <div>
          <div style={{ font: `500 12px/1 ${mono}`, letterSpacing: ".14em", textTransform: "uppercase", color: C.bottle, marginBottom: 16 }}>
            Editoriale · Utility · Italiana
          </div>
          <h1 style={{ font: `500 64px/0.95 ${display}`, margin: 0, letterSpacing: "-0.02em" }}>
            Civica.<br/>
            <em style={{ color: C.bottle, fontStyle: "italic", fontWeight: 400 }}>Come una bolletta<br/>fatta bene.</em>
          </h1>
        </div>
        <div style={{ alignSelf: "end" }}>
          <p style={{ font: `400 16px/1.55 ${body}`, margin: 0, maxWidth: 380 }}>
            Si ispira al design civico italiano e ai servizi pubblici fatti con cura.
            Cream paper, verde bottiglia e segnale giallo. Trasmette concretezza,
            trasparenza e mestiere — non gergo da startup.
          </p>
          <div style={{ display: "flex", gap: 8, marginTop: 24, flexWrap: "wrap" }}>
            {["Concreta", "Trasparente", "Italiana", "Fidata"].map(t => (
              <span key={t} style={{
                font: `500 11px/1 ${mono}`, letterSpacing: ".1em", textTransform: "uppercase",
                padding: "8px 12px", border: `1px solid ${C.ink}33`, borderRadius: 999,
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* LOGO */}
      <div style={{ marginTop: 56 }}>
        <Label>Logotipo</Label>
        <div style={{
          background: C.paperAlt, padding: "64px 48px", border: `1px solid ${C.rule}`,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
            <span style={{
              font: `500 80px/0.85 ${display}`, color: C.ink, letterSpacing: "-0.035em",
            }}>chargely</span>
            <span style={{
              width: 14, height: 14, background: C.yellow, borderRadius: 2,
              alignSelf: "end", marginBottom: 14,
            }}></span>
          </div>
          <div style={{
            font: `500 10px/1.4 ${mono}`, letterSpacing: ".14em", textTransform: "uppercase",
            color: C.ink, opacity: .55, textAlign: "right",
          }}>
            Rete P2P di ricarica<br/>
            per auto elettriche · Roma
          </div>
        </div>
      </div>

      {/* PALETTE */}
      <div style={{ marginTop: 48 }}>
        <Label>Palette</Label>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
          <Swatch bg={C.paper}   name="Carta"      hex="#F1ECDE" />
          <Swatch bg={C.ink}     name="Inchiostro" hex="#16201A" fg={C.paper}/>
          <Swatch bg={C.bottle}  name="Bottiglia"  hex="#1F4D3A" fg={C.paper}/>
          <Swatch bg={C.yellow}  name="Segnale"    hex="#F2C14E" />
          <Swatch bg={C.brick}   name="Mattone"    hex="#B85C3C" fg={C.paper}/>
        </div>
        <div style={{ font: `400 13px/1.5 ${body}`, marginTop: 14, color: C.ink, opacity: .65 }}>
          Bottiglia per fiducia · Segnale per call-to-action · Mattone solo per highlight rari (es. dato chiave).
        </div>
      </div>

      {/* TYPOGRAPHY */}
      <div style={{ marginTop: 48 }}>
        <Label>Tipografia</Label>
        <div style={{ background: C.paperAlt, padding: 32, border: `1px solid ${C.rule}` }}>
          <div style={{ font: `500 11px/1 ${mono}`, letterSpacing: ".14em", textTransform: "uppercase", color: C.bottle, marginBottom: 12 }}>
            Newsreader · Display
          </div>
          <h2 style={{ font: `500 44px/1.0 ${display}`, margin: "0 0 6px", letterSpacing: "-0.02em" }}>
            Hai una presa elettrica?<br/>
            <em style={{ fontStyle: "italic", fontWeight: 400, color: C.bottle }}>Trasformala in guadagno.</em>
          </h2>
          <div style={{ height: 18 }}></div>
          <div style={{ font: `500 11px/1 ${mono}`, letterSpacing: ".14em", textTransform: "uppercase", color: C.bottle, marginBottom: 12 }}>
            IBM Plex Sans · Corpo
          </div>
          <p style={{ font: `400 17px/1.6 ${body}`, margin: 0, maxWidth: 620 }}>
            Wallbox o presa Schuko, in box, cortile o vialetto: se un'auto elettrica può
            collegarsi, puoi diventare host. Analizziamo la tua bolletta e ti diciamo
            quanto puoi guadagnare ogni mese.
          </p>
          <div style={{ height: 18 }}></div>
          <div style={{ font: `500 11px/1 ${mono}`, letterSpacing: ".14em", textTransform: "uppercase", color: C.bottle, marginBottom: 12 }}>
            IBM Plex Mono · Etichette & dati
          </div>
          <div style={{ display: "flex", gap: 24, font: `500 13px/1 ${mono}`, letterSpacing: ".05em" }}>
            <span>STEP 01 — BOLLETTA</span>
            <span>0,28 €/kWh</span>
            <span>ROMA · LAZIO</span>
          </div>
        </div>
      </div>

      {/* COMPONENTS */}
      <div style={{ marginTop: 48 }}>
        <Label>Componenti UI</Label>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {/* Buttons */}
          <div style={{ background: C.paperAlt, padding: 28, border: `1px solid ${C.rule}` }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
              <button style={{
                font: `600 15px/1 ${body}`, padding: "16px 22px", background: C.yellow, color: C.ink,
                border: "none", borderRadius: 2, cursor: "pointer",
                display: "inline-flex", alignItems: "center", gap: 10,
              }}>
                Calcola il tuo guadagno
                <span style={{ font: `500 14px/1 ${mono}` }}>→</span>
              </button>
              <button style={{
                font: `600 15px/1 ${body}`, padding: "16px 22px", background: "transparent",
                color: C.ink, border: `1.5px solid ${C.ink}`, borderRadius: 2, cursor: "pointer",
              }}>
                Scopri come funziona
              </button>
              <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                <span style={{ font: `500 11px/1 ${mono}`, padding: "8px 10px", background: C.bottle, color: C.paper, letterSpacing: ".08em" }}>ISCRIZIONE GRATUITA</span>
                <span style={{ font: `500 11px/1 ${mono}`, padding: "8px 10px", border: `1px solid ${C.ink}55`, letterSpacing: ".08em" }}>DATI PROTETTI</span>
              </div>
            </div>
          </div>

          {/* Form field */}
          <div style={{ background: C.paperAlt, padding: 28, border: `1px solid ${C.rule}` }}>
            <div style={{ font: `500 11px/1 ${mono}`, letterSpacing: ".14em", textTransform: "uppercase", color: C.ink, opacity: .7, marginBottom: 10 }}>
              02 / Indirizzo della tua presa
            </div>
            <div style={{
              background: C.paper, border: `1.5px solid ${C.ink}`, padding: "14px 16px",
              font: `400 16px/1.4 ${body}`, color: C.ink,
            }}>
              Via dei Coronari 12, Roma
              <span style={{ float: "right", color: C.bottle, font: `500 13px/1.4 ${mono}` }}>✓ verificato</span>
            </div>
            <div style={{ font: `400 12px/1.4 ${body}`, color: C.ink, opacity: .65, marginTop: 8 }}>
              Usiamo l'indirizzo solo per la mappa interna. Non viene mai pubblicato.
            </div>
          </div>
        </div>
      </div>

      {/* MINI HERO PREVIEW */}
      <div style={{ marginTop: 48 }}>
        <Label>Hero · anteprima</Label>
        <div style={{
          background: C.ink, color: C.paper, padding: 40, border: `1px solid ${C.ink}`,
          position: "relative", overflow: "hidden",
        }}>
          {/* faux grid bg */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `linear-gradient(${C.paper}10 1px, transparent 1px), linear-gradient(90deg, ${C.paper}10 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}></div>
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 32, alignItems: "center" }}>
            <div>
              <div style={{ font: `500 11px/1 ${mono}`, letterSpacing: ".14em", color: C.yellow, marginBottom: 16 }}>
                ROMA · RETE P2P DI RICARICA
              </div>
              <h3 style={{ font: `500 40px/1.0 ${display}`, margin: 0, letterSpacing: "-0.02em" }}>
                Una presa. Un'auto.<br/>
                <em style={{ fontStyle: "italic", fontWeight: 400, color: C.yellow }}>Un guadagno extra.</em>
              </h3>
            </div>
            <div style={{ borderLeft: `1px solid ${C.paper}33`, paddingLeft: 24 }}>
              <div style={{ font: `500 11px/1 ${mono}`, letterSpacing: ".14em", color: C.paper, opacity: .55, marginBottom: 6 }}>
                MARGINE MEDIO / MESE
              </div>
              <div style={{ font: `500 56px/1 ${display}`, color: C.yellow, letterSpacing: "-0.02em" }}>
                75 €
              </div>
              <div style={{ font: `400 13px/1.5 ${body}`, color: C.paper, opacity: .7, marginTop: 8 }}>
                Wallbox 3,7 kW, 3 ricariche a settimana
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: 48, paddingTop: 18, borderTop: `1px solid ${C.ink}22`,
        font: `500 11px/1.5 ${mono}`, letterSpacing: ".14em", textTransform: "uppercase",
        color: C.ink, opacity: .55, display: "flex", justifyContent: "space-between",
      }}>
        <span>Quando usarla → fiducia, concretezza, target maturo (50+)</span>
        <span>Rischio → poco "tech"</span>
      </div>
    </div>
  );
};

window.CivicaSheet = CivicaSheet;
