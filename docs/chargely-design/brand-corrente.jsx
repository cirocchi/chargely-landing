// Direction 2 — CORRENTE
// Soft fintech / approachable. Like Telepass or N26 evolved.
// Rounded geometric sans (Manrope) + mono labels. Deep teal + warm coral.

const CorrenteSheet = () => {
  const C = {
    bg:       "#FAFAF7",
    card:     "#FFFFFF",
    tint:     "#E6F2F1",
    ink:      "#0F1B2A",
    inkSoft:  "#445566",
    teal:     "#0E7C7B",
    tealDeep: "#0A5C5B",
    coral:    "#FF7A5C",
    sun:      "#FFC857",
  };
  const sans = `"Manrope", system-ui, sans-serif`;
  const mono = `"JetBrains Mono", ui-monospace, monospace`;

  const Swatch = ({ bg, name, hex, fg = C.ink }) => (
    <div style={{
      background: bg, color: fg, height: 120,
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      padding: "14px 16px", borderRadius: 14,
      boxShadow: bg === C.card ? "inset 0 0 0 1px #0F1B2A14" : "none",
    }}>
      <span style={{ font: `600 12px/1 ${sans}`, letterSpacing: ".01em" }}>{name}</span>
      <span style={{ font: `500 13px/1 ${mono}` }}>{hex}</span>
    </div>
  );

  const Label = ({ children }) => (
    <div style={{
      font: `600 11px/1 ${mono}`, letterSpacing: ".14em", textTransform: "uppercase",
      color: C.teal, marginBottom: 14, display: "flex", alignItems: "center", gap: 10,
    }}>
      <span style={{ width: 22, height: 1, background: C.teal, opacity: .5 }}></span>
      <span>{children}</span>
    </div>
  );

  return (
    <div style={{
      width: 1100, minHeight: 1900, background: C.bg, color: C.ink,
      fontFamily: sans, padding: "56px 64px", boxSizing: "border-box",
      position: "relative", overflow: "hidden",
    }}>
      {/* top meta */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "baseline",
        font: `600 11px/1 ${mono}`, letterSpacing: ".14em", textTransform: "uppercase",
        color: C.inkSoft, paddingBottom: 18, borderBottom: `1px solid ${C.ink}14`,
      }}>
        <span>Direzione 02 / Corrente</span>
        <span>Roma · 2026</span>
      </div>

      {/* heading */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 40 }}>
        <div>
          <div style={{ font: `700 12px/1 ${mono}`, letterSpacing: ".14em", textTransform: "uppercase", color: C.coral, marginBottom: 16 }}>
            Friendly · Fintech · Rassicurante
          </div>
          <h1 style={{ font: `800 64px/0.95 ${sans}`, margin: 0, letterSpacing: "-0.035em" }}>
            Corrente.<br/>
            <span style={{ color: C.teal }}>Come Telepass,<br/>ma per la presa.</span>
          </h1>
        </div>
        <div style={{ alignSelf: "end" }}>
          <p style={{ font: `400 16px/1.55 ${sans}`, margin: 0, maxWidth: 380, color: C.inkSoft }}>
            Approccio fintech moderno: forme arrotondate, ombre soft, copy in italiano
            colloquiale. Un servizio che ti accompagna, non un prodotto tecnico.
            Adatto a target 30-55 tecnologicamente medio.
          </p>
          <div style={{ display: "flex", gap: 8, marginTop: 24, flexWrap: "wrap" }}>
            {["Accogliente", "Familiare", "Moderna", "Calda"].map(t => (
              <span key={t} style={{
                font: `600 12px/1 ${sans}`,
                padding: "9px 14px", background: C.tint, color: C.tealDeep, borderRadius: 999,
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* LOGO */}
      <div style={{ marginTop: 56 }}>
        <Label>Logotipo</Label>
        <div style={{
          background: C.card, padding: "64px 48px", borderRadius: 24,
          boxShadow: "0 1px 0 #0F1B2A0a, 0 24px 48px -24px #0F1B2A22",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {/* mark = rounded plug abstract */}
            <div style={{
              width: 64, height: 64, borderRadius: 18, background: C.teal,
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative",
            }}>
              <div style={{ position: "absolute", top: 16, left: 22, width: 8, height: 14, borderRadius: 4, background: C.bg }}></div>
              <div style={{ position: "absolute", top: 16, right: 22, width: 8, height: 14, borderRadius: 4, background: C.bg }}></div>
              <div style={{ position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)", width: 28, height: 6, borderRadius: 3, background: C.coral }}></div>
            </div>
            <span style={{
              font: `800 64px/0.85 ${sans}`, color: C.ink, letterSpacing: "-0.04em",
            }}>chargely</span>
          </div>
          <div style={{
            font: `500 13px/1.45 ${sans}`, color: C.inkSoft, textAlign: "right",
          }}>
            la rete tra vicini<br/>
            per ricaricare l'auto
          </div>
        </div>
      </div>

      {/* PALETTE */}
      <div style={{ marginTop: 48 }}>
        <Label>Palette</Label>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
          <Swatch bg={C.card}     name="Bianco"   hex="#FAFAF7" />
          <Swatch bg={C.ink}      name="Notte"    hex="#0F1B2A" fg="#fff" />
          <Swatch bg={C.teal}     name="Corrente" hex="#0E7C7B" fg="#fff" />
          <Swatch bg={C.coral}    name="Corallo"  hex="#FF7A5C" fg="#fff" />
          <Swatch bg={C.tint}     name="Marea"    hex="#E6F2F1" />
        </div>
        <div style={{ font: `400 13px/1.5 ${sans}`, marginTop: 14, color: C.inkSoft }}>
          Corrente = brand · Corallo = solo CTA (alto contrasto) · Marea per sezioni alternate e card morbide.
        </div>
      </div>

      {/* TYPOGRAPHY */}
      <div style={{ marginTop: 48 }}>
        <Label>Tipografia</Label>
        <div style={{ background: C.card, padding: 32, borderRadius: 20, boxShadow: "0 1px 0 #0F1B2A0a" }}>
          <div style={{ font: `600 11px/1 ${mono}`, letterSpacing: ".14em", textTransform: "uppercase", color: C.teal, marginBottom: 12 }}>
            Manrope · Display 800
          </div>
          <h2 style={{ font: `800 44px/1.05 ${sans}`, margin: "0 0 6px", letterSpacing: "-0.035em" }}>
            La tua presa di casa<br/>
            <span style={{ color: C.teal }}>vale fino a 110 € al mese.</span>
          </h2>
          <div style={{ height: 18 }}></div>
          <div style={{ font: `600 11px/1 ${mono}`, letterSpacing: ".14em", textTransform: "uppercase", color: C.teal, marginBottom: 12 }}>
            Manrope · Body 400/500
          </div>
          <p style={{ font: `400 17px/1.6 ${sans}`, margin: 0, maxWidth: 620, color: C.inkSoft }}>
            Ti aiutiamo a capire quanto vale, in modo semplice. Carichi la bolletta,
            noi facciamo i conti, tu decidi se ti conviene. Senza impegno e senza
            stravolgere niente nel tuo impianto.
          </p>
          <div style={{ height: 18 }}></div>
          <div style={{ font: `600 11px/1 ${mono}`, letterSpacing: ".14em", textTransform: "uppercase", color: C.teal, marginBottom: 12 }}>
            JetBrains Mono · Numeri & micro-label
          </div>
          <div style={{ display: "flex", gap: 24, font: `500 13px/1 ${mono}`, color: C.ink }}>
            <span>+46% EV 2025</span>
            <span>365.000 auto</span>
            <span>1 su 5 a Roma</span>
          </div>
        </div>
      </div>

      {/* COMPONENTS */}
      <div style={{ marginTop: 48 }}>
        <Label>Componenti UI</Label>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {/* Buttons */}
          <div style={{ background: C.card, padding: 28, borderRadius: 20, boxShadow: "0 1px 0 #0F1B2A0a" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
              <button style={{
                font: `700 15px/1 ${sans}`, padding: "16px 22px", background: C.coral, color: "#fff",
                border: "none", borderRadius: 14, cursor: "pointer",
                boxShadow: "0 8px 20px -8px #FF7A5C99",
                display: "inline-flex", alignItems: "center", gap: 10,
              }}>
                Calcola il tuo guadagno
                <span>→</span>
              </button>
              <button style={{
                font: `700 15px/1 ${sans}`, padding: "16px 22px", background: C.tint,
                color: C.tealDeep, border: "none", borderRadius: 14, cursor: "pointer",
              }}>
                Scopri come funziona
              </button>
              <div style={{ display: "flex", gap: 8, marginTop: 4, flexWrap: "wrap" }}>
                <span style={{ font: `600 12px/1 ${sans}`, padding: "8px 12px", background: C.tint, color: C.tealDeep, borderRadius: 999 }}>● Iscrizione gratuita</span>
                <span style={{ font: `600 12px/1 ${sans}`, padding: "8px 12px", background: "#FFF2E5", color: "#A04420", borderRadius: 999 }}>🔒 Dati protetti</span>
              </div>
            </div>
          </div>

          {/* Form field */}
          <div style={{ background: C.card, padding: 28, borderRadius: 20, boxShadow: "0 1px 0 #0F1B2A0a" }}>
            <div style={{ font: `600 12px/1 ${sans}`, color: C.ink, marginBottom: 10 }}>
              Indirizzo della tua presa
            </div>
            <div style={{
              background: C.bg, border: `1.5px solid ${C.teal}`, padding: "14px 16px",
              font: `500 15px/1.4 ${sans}`, color: C.ink, borderRadius: 14,
              display: "flex", justifyContent: "space-between", alignItems: "center",
              boxShadow: `0 0 0 4px ${C.teal}1a`,
            }}>
              <span>Via dei Coronari 12, Roma</span>
              <span style={{ color: C.teal, font: `600 13px/1 ${sans}` }}>✓ verificato</span>
            </div>
            <div style={{ font: `400 13px/1.4 ${sans}`, color: C.inkSoft, marginTop: 10 }}>
              Lo usiamo solo per la mappa interna. Non viene mai pubblicato.
            </div>
          </div>
        </div>
      </div>

      {/* MINI HERO PREVIEW */}
      <div style={{ marginTop: 48 }}>
        <Label>Hero · anteprima</Label>
        <div style={{
          background: `linear-gradient(135deg, ${C.tint} 0%, ${C.bg} 100%)`,
          padding: 40, borderRadius: 24, position: "relative", overflow: "hidden",
        }}>
          {/* faux pin */}
          <div style={{ position: "absolute", top: 32, right: 48, width: 18, height: 18, borderRadius: 999, background: C.coral, boxShadow: `0 0 0 8px ${C.coral}33, 0 0 0 16px ${C.coral}1a` }}></div>
          <div style={{ position: "absolute", top: 80, right: 120, width: 12, height: 12, borderRadius: 999, background: C.teal, boxShadow: `0 0 0 6px ${C.teal}33` }}></div>
          <div style={{ position: "absolute", bottom: 32, right: 200, width: 14, height: 14, borderRadius: 999, background: C.coral, boxShadow: `0 0 0 7px ${C.coral}33` }}></div>

          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 32, alignItems: "center" }}>
            <div>
              <div style={{ font: `700 11px/1 ${mono}`, letterSpacing: ".14em", color: C.coral, marginBottom: 16 }}>
                ROMA · RETE TRA VICINI
              </div>
              <h3 style={{ font: `800 40px/1.05 ${sans}`, margin: 0, letterSpacing: "-0.035em" }}>
                Hai una presa?<br/>
                <span style={{ color: C.teal }}>Falla lavorare per te.</span>
              </h3>
              <button style={{
                marginTop: 22, font: `700 15px/1 ${sans}`, padding: "14px 20px", background: C.coral, color: "#fff",
                border: "none", borderRadius: 12, cursor: "pointer", boxShadow: "0 8px 18px -8px #FF7A5C99",
              }}>
                Calcola il tuo guadagno →
              </button>
            </div>
            <div style={{
              background: C.card, padding: 24, borderRadius: 18,
              boxShadow: "0 24px 48px -20px #0F1B2A22",
            }}>
              <div style={{ font: `600 11px/1 ${mono}`, letterSpacing: ".14em", color: C.inkSoft, marginBottom: 6 }}>
                MARGINE MEDIO / MESE
              </div>
              <div style={{ font: `800 56px/1 ${sans}`, color: C.teal, letterSpacing: "-0.04em" }}>
                75 €
              </div>
              <div style={{ font: `500 13px/1.5 ${sans}`, color: C.inkSoft, marginTop: 6 }}>
                Wallbox 3,7 kW · 3 ricariche/settimana
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: 48, paddingTop: 18, borderTop: `1px solid ${C.ink}14`,
        font: `600 11px/1.5 ${mono}`, letterSpacing: ".14em", textTransform: "uppercase",
        color: C.inkSoft, display: "flex", justifyContent: "space-between",
      }}>
        <span>Quando usarla → conversione, target ampio, mobile-first</span>
        <span>Rischio → meno "memorabile"</span>
      </div>
    </div>
  );
};

window.CorrenteSheet = CorrenteSheet;
