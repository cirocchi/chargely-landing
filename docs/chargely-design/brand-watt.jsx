// Direction 3 — WATT
// Editorial, bold, brand-led. High-contrast ivory + deep forest + acid lime.
// Big display serif (Instrument Serif italic) + grotesque body. Ambizioso.

const WattSheet = () => {
  const C = {
    bg:      "#F2EFE6",
    paper:   "#FFFFFF",
    ink:     "#0D1F14",
    forest:  "#16331F",
    lime:    "#C6F24D",
    stone:   "#6B6F62",
    rule:    "#0D1F141a",
  };
  const display = `"Instrument Serif", Georgia, serif`;
  const sans = `"Geist", system-ui, sans-serif`;
  const mono = `"Geist Mono", ui-monospace, monospace`;

  const Swatch = ({ bg, name, hex, fg = C.ink }) => (
    <div style={{
      background: bg, color: fg, height: 120,
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      padding: "14px 14px", borderRadius: 4,
      boxShadow: bg === C.paper || bg === C.bg ? `inset 0 0 0 1px ${C.rule}` : "none",
    }}>
      <span style={{ font: `500 11px/1 ${mono}`, letterSpacing: ".06em", textTransform: "uppercase" }}>{name}</span>
      <span style={{ font: `400 13px/1 ${mono}` }}>{hex}</span>
    </div>
  );

  const Label = ({ children, n }) => (
    <div style={{
      font: `500 11px/1 ${mono}`, letterSpacing: ".16em", textTransform: "uppercase",
      color: C.ink, opacity: .7, marginBottom: 14, display: "flex", gap: 12,
    }}>
      <span style={{ color: C.forest }}>—{n}</span>
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
        font: `500 11px/1 ${mono}`, letterSpacing: ".16em", textTransform: "uppercase",
        color: C.ink, opacity: .55, paddingBottom: 18, borderBottom: `1px solid ${C.rule}`,
      }}>
        <span>Direzione 03 / Watt</span>
        <span>Roma · 2026</span>
      </div>

      {/* heading */}
      <div style={{ marginTop: 48, position: "relative" }}>
        <div style={{ font: `500 12px/1 ${mono}`, letterSpacing: ".16em", textTransform: "uppercase", color: C.forest, marginBottom: 18 }}>
          Editoriale · Coraggiosa · Brand-led
        </div>
        <h1 style={{ font: `400 96px/0.9 ${display}`, margin: 0, letterSpacing: "-0.02em" }}>
          <span style={{ fontStyle: "italic", color: C.forest }}>Watt.</span>
          <span style={{ display: "inline-block", width: 16, height: 16, background: C.lime, marginLeft: 12, marginBottom: 8, borderRadius: 3 }}></span>
          <br/>
          La presa<br/>
          come <em style={{ fontStyle: "italic", color: C.forest }}>infrastruttura</em>.
        </h1>
        <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, maxWidth: 760 }}>
          <p style={{ font: `400 15px/1.55 ${sans}`, margin: 0, color: C.ink }}>
            Direzione editoriale, quasi rivista. Il serif italico costruisce
            personalità; il lime acido la rende elettrica.
          </p>
          <p style={{ font: `400 15px/1.55 ${sans}`, margin: 0, color: C.ink }}>
            Funziona se vuoi che Chargely sia un brand <em>discusso</em>,
            non solo un servizio. Più visibile sui social, più "owned".
          </p>
          <p style={{ font: `400 15px/1.55 ${sans}`, margin: 0, color: C.ink }}>
            Adatta se l'obiettivo a lungo termine include espansione, stampa,
            PR. Più rischiosa con target 60+.
          </p>
        </div>
      </div>

      {/* LOGO */}
      <div style={{ marginTop: 56 }}>
        <Label n="01">Logotipo</Label>
        <div style={{
          background: C.forest, padding: "72px 48px", borderRadius: 4,
          display: "flex", alignItems: "flex-end", justifyContent: "space-between", color: C.bg,
          position: "relative", overflow: "hidden",
        }}>
          {/* faux band */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: C.lime }}></div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
            <span style={{ font: `400 120px/0.85 ${display}`, letterSpacing: "-0.04em" }}>charge</span>
            <span style={{ font: `400 120px/0.85 ${display}`, fontStyle: "italic", color: C.lime, letterSpacing: "-0.04em" }}>ly</span>
          </div>
          <div style={{
            font: `500 10px/1.5 ${mono}`, letterSpacing: ".16em", textTransform: "uppercase",
            color: C.bg, opacity: .65, textAlign: "right",
          }}>
            ROMA · RETE PRIVATA<br/>
            DI RICARICA EV · 2026
          </div>
        </div>
      </div>

      {/* PALETTE */}
      <div style={{ marginTop: 48 }}>
        <Label n="02">Palette</Label>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10 }}>
          <Swatch bg={C.bg}     name="Avorio"   hex="#F2EFE6" />
          <Swatch bg={C.ink}    name="Nero"     hex="#0D1F14" fg={C.bg} />
          <Swatch bg={C.forest} name="Foresta"  hex="#16331F" fg={C.bg} />
          <Swatch bg={C.lime}   name="Watt"     hex="#C6F24D" />
          <Swatch bg={C.stone}  name="Pietra"   hex="#6B6F62" fg={C.bg} />
        </div>
        <div style={{ font: `400 13px/1.5 ${sans}`, marginTop: 14, color: C.stone }}>
          Foresta porta il peso del brand. Watt-lime è l'unico colore "elettrico" — sempre come highlight, mai come fondo grande.
        </div>
      </div>

      {/* TYPOGRAPHY */}
      <div style={{ marginTop: 48 }}>
        <Label n="03">Tipografia</Label>
        <div style={{ background: C.paper, padding: 32, borderRadius: 4, boxShadow: `inset 0 0 0 1px ${C.rule}` }}>
          <div style={{ font: `500 11px/1 ${mono}`, letterSpacing: ".16em", textTransform: "uppercase", color: C.forest, marginBottom: 14 }}>
            Instrument Serif · Display
          </div>
          <h2 style={{ font: `400 56px/1.0 ${display}`, margin: "0 0 6px", letterSpacing: "-0.025em" }}>
            La presa di casa,<br/>
            <em style={{ fontStyle: "italic", color: C.forest }}>oggi vale un piccolo stipendio.</em>
          </h2>
          <div style={{ height: 22 }}></div>
          <div style={{ font: `500 11px/1 ${mono}`, letterSpacing: ".16em", textTransform: "uppercase", color: C.forest, marginBottom: 14 }}>
            Geist · Body 400
          </div>
          <p style={{ font: `400 17px/1.6 ${sans}`, margin: 0, maxWidth: 640 }}>
            A Roma circola un'auto elettrica ogni cinque della rete nazionale, ma
            la rete pubblica di ricarica non sta tenendo il passo. Apriamo la tua
            presa di casa al quartiere — e ti facciamo guadagnare mentre lo fai.
          </p>
          <div style={{ height: 22 }}></div>
          <div style={{ font: `500 11px/1 ${mono}`, letterSpacing: ".16em", textTransform: "uppercase", color: C.forest, marginBottom: 14 }}>
            Geist Mono · Numeri & cifre
          </div>
          <div style={{ display: "flex", gap: 32, font: `500 13px/1 ${mono}` }}>
            <span>365K EV / IT</span>
            <span>+46% YOY</span>
            <span>20% LAZIO</span>
          </div>
        </div>
      </div>

      {/* COMPONENTS */}
      <div style={{ marginTop: 48 }}>
        <Label n="04">Componenti UI</Label>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {/* Buttons */}
          <div style={{ background: C.paper, padding: 28, borderRadius: 4, boxShadow: `inset 0 0 0 1px ${C.rule}` }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
              <button style={{
                font: `600 15px/1 ${sans}`, padding: "16px 22px", background: C.lime, color: C.ink,
                border: `1.5px solid ${C.ink}`, borderRadius: 999, cursor: "pointer",
                display: "inline-flex", alignItems: "center", gap: 10,
                boxShadow: `3px 3px 0 0 ${C.ink}`,
              }}>
                Calcola il tuo guadagno
                <span style={{ font: `400 16px/1 ${display}`, fontStyle: "italic" }}>→</span>
              </button>
              <button style={{
                font: `600 15px/1 ${sans}`, padding: "16px 22px", background: "transparent",
                color: C.ink, border: `1.5px solid ${C.ink}`, borderRadius: 999, cursor: "pointer",
              }}>
                Scopri come funziona
              </button>
              <div style={{ display: "flex", gap: 8, marginTop: 4, flexWrap: "wrap" }}>
                <span style={{ font: `500 11px/1 ${mono}`, padding: "8px 12px", background: C.forest, color: C.bg, borderRadius: 999, letterSpacing: ".08em", textTransform: "uppercase" }}>Gratuita</span>
                <span style={{ font: `500 11px/1 ${mono}`, padding: "8px 12px", background: C.lime, color: C.ink, borderRadius: 999, letterSpacing: ".08em", textTransform: "uppercase" }}>+ Beta Roma</span>
              </div>
            </div>
          </div>

          {/* Form field */}
          <div style={{ background: C.paper, padding: 28, borderRadius: 4, boxShadow: `inset 0 0 0 1px ${C.rule}` }}>
            <div style={{ font: `500 11px/1 ${mono}`, letterSpacing: ".16em", textTransform: "uppercase", color: C.forest, marginBottom: 12 }}>
              02 · Indirizzo
            </div>
            <div style={{
              background: C.bg, border: `1px solid ${C.ink}`, padding: "14px 16px",
              font: `400 16px/1.4 ${sans}`, color: C.ink, borderRadius: 999,
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span>Via dei Coronari 12, Roma</span>
              <span style={{ font: `400 13px/1 ${display}`, fontStyle: "italic", color: C.forest }}>verificato ✓</span>
            </div>
            <div style={{ font: `400 12px/1.4 ${sans}`, color: C.stone, marginTop: 10 }}>
              Lo usiamo per la mappa interna · mai pubblico.
            </div>
          </div>
        </div>
      </div>

      {/* MINI HERO PREVIEW */}
      <div style={{ marginTop: 48 }}>
        <Label n="05">Hero · anteprima</Label>
        <div style={{
          background: C.bg, padding: 0, borderRadius: 4, overflow: "hidden",
          boxShadow: `inset 0 0 0 1px ${C.rule}`,
          display: "grid", gridTemplateColumns: "1.6fr 1fr",
        }}>
          <div style={{ padding: "40px 40px", background: C.bg }}>
            <div style={{ font: `500 11px/1 ${mono}`, letterSpacing: ".16em", textTransform: "uppercase", color: C.forest, marginBottom: 18 }}>
              N°01 — Roma, 2026
            </div>
            <h3 style={{ font: `400 52px/0.95 ${display}`, margin: 0, letterSpacing: "-0.025em" }}>
              Una città piena<br/>
              di prese.<br/>
              <em style={{ fontStyle: "italic", color: C.forest }}>Ora anche di<br/>elettrico.</em>
            </h3>
            <div style={{ display: "flex", gap: 10, marginTop: 28, flexWrap: "wrap" }}>
              <button style={{ font: `600 14px/1 ${sans}`, padding: "14px 18px", background: C.lime, color: C.ink, border: `1.5px solid ${C.ink}`, borderRadius: 999, boxShadow: `3px 3px 0 0 ${C.ink}`, cursor: "pointer" }}>
                Diventa host →
              </button>
              <button style={{ font: `600 14px/1 ${sans}`, padding: "14px 18px", background: "transparent", color: C.ink, border: `1.5px solid ${C.ink}`, borderRadius: 999, cursor: "pointer" }}>
                Come funziona
              </button>
            </div>
          </div>
          <div style={{ background: C.forest, padding: 32, color: C.bg, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ font: `500 10px/1.5 ${mono}`, letterSpacing: ".16em", textTransform: "uppercase", color: C.lime }}>
              Margine medio · mese
            </div>
            <div>
              <div style={{ font: `400 96px/0.85 ${display}`, color: C.lime, letterSpacing: "-0.03em" }}>
                <em style={{ fontStyle: "italic" }}>75€</em>
              </div>
              <div style={{ font: `400 13px/1.5 ${sans}`, color: C.bg, opacity: .75, marginTop: 12, maxWidth: 220 }}>
                Wallbox 3,7 kW · 3 ricariche/settimana, tariffa media domestica.
              </div>
            </div>
            <div style={{ font: `500 10px/1.5 ${mono}`, letterSpacing: ".16em", textTransform: "uppercase", color: C.bg, opacity: .55, borderTop: `1px solid ${C.bg}33`, paddingTop: 14 }}>
              Fonte → bolletta media domestica 0,28 €/kWh
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: 48, paddingTop: 18, borderTop: `1px solid ${C.rule}`,
        font: `500 11px/1.5 ${mono}`, letterSpacing: ".16em", textTransform: "uppercase",
        color: C.ink, opacity: .55, display: "flex", justifyContent: "space-between",
      }}>
        <span>Quando usarla → ambizione brand, PR, identità forte</span>
        <span>Rischio → più "alto" sul target maturo</span>
      </div>
    </div>
  );
};

window.WattSheet = WattSheet;
