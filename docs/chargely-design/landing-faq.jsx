// Section 7 — FAQ accordion
// Section 8 — Footer

const FAQ_ITEMS = [
  {
    q: "Devo avere per forza una wallbox?",
    a: <>
      <p style={{ margin: 0 }}>
        No. Anche una <strong>semplice presa Schuko</strong> di casa va bene,
        purché sia raggiungibile da un'auto parcheggiata. La ricarica sarà più
        lenta (10-15 km di autonomia ogni ora), ma per chi lascia l'auto tutta
        la notte è perfetta.
      </p>
      <p style={{ margin: "12px 0 0" }}>
        Verifichiamo noi che la tua presa e il tuo impianto reggano un uso
        prolungato — senza costi a tuo carico.
      </p>
    </>,
  },
  {
    q: "È legale offrire ricariche da privato?",
    a: <p style={{ margin: 0 }}>
      Sì, l'uso occasionale tra privati è consentito. Per chi avrà volumi più alti,
      stiamo predisponendo una soluzione che gestisce automaticamente gli aspetti
      fiscali (<strong>regime forfettario semplificato</strong> o partita IVA dedicata).
      Te ne parliamo nel dettaglio quando ti contattiamo.
    </p>,
  },
  {
    q: "Chi mi paga e come?",
    a: <p style={{ margin: 0 }}>
      I driver pagano direttamente tramite app al momento della ricarica. Tu
      ricevi un <strong>accredito mensile sul tuo conto</strong>, al netto della
      commissione di piattaforma. Riceverai un riepilogo dettagliato di ogni
      ricarica con i kWh erogati e il margine generato.
    </p>,
  },
  {
    q: "E se qualcuno danneggia il mio impianto?",
    a: <p style={{ margin: 0 }}>
      Ogni ricarica sarà coperta da un'<strong>assicurazione inclusa</strong> nel
      servizio (l'abbiamo già negoziata, te la diciamo in dettaglio durante il
      contatto). Inoltre verifichiamo a monte che l'impianto sia a norma, così
      eventuali criticità emergono prima.
    </p>,
  },
  {
    q: "Devo modificare il mio impianto elettrico?",
    a: <p style={{ margin: 0 }}>
      <strong>Nella maggior parte dei casi no.</strong> Verifichiamo che la tua
      presa o wallbox attuale sia adeguata. Se servono modifiche minori (es. una
      protezione aggiuntiva), ti mettiamo in contatto con installatori partner
      che abbiamo già selezionato.
    </p>,
  },
  {
    q: "Quanto tempo richiede gestire le ricariche?",
    a: <p style={{ margin: 0 }}>
      <strong>Pochissimo.</strong> L'app gestisce prenotazione, sblocco e
      pagamento in autonomia. Tu intervieni solo se vuoi modificare gli orari di
      disponibilità o mettere la presa in pausa per un periodo (es. quando sei
      fuori casa).
    </p>,
  },
  {
    q: "Quando partirà davvero il servizio?",
    a: <p style={{ margin: 0 }}>
      Stiamo raccogliendo le prime adesioni a Roma in questa fase di validazione.
      L'app sarà disponibile <strong>entro fine 2026</strong>. Chi si iscrive ora
      avrà <strong>priorità sulla mappa</strong> e tariffe agevolate sulla
      commissione di piattaforma per i primi 12 mesi.
    </p>,
  },
];

const FaqItem = ({ q, a, open, onToggle, idx }) => (
  <div style={{
    borderBottom: "1px solid var(--rule)",
  }}>
    <button onClick={onToggle} style={{
      width: "100%", textAlign: "left", background: "transparent", border: "none",
      padding: "24px 0",
      cursor: "pointer",
      display: "flex", gap: 20, alignItems: "center", justifyContent: "space-between",
      color: "var(--ink)",
    }}>
      <span style={{
        display: "flex", gap: 18, alignItems: "baseline", flex: 1,
      }}>
        <span className="mono" style={{
          font: "500 12px/1 var(--mono)", letterSpacing: "0.16em",
          color: "var(--forest)", flex: "0 0 auto",
        }}>{String(idx + 1).padStart(2, "0")}</span>
        <span style={{
          font: "400 22px/1.25 var(--display)", letterSpacing: "-0.01em",
          textWrap: "balance",
        }}>{q}</span>
      </span>
      <span style={{
        flex: "0 0 auto", width: 36, height: 36, borderRadius: 999,
        background: open ? "var(--lime)" : "transparent",
        border: "1.5px solid var(--ink)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        font: "400 22px/1 var(--display)", fontStyle: "italic",
        transition: "all .15s ease",
      }}>{open ? "−" : "+"}</span>
    </button>
    {open && (
      <div style={{
        paddingLeft: 50, paddingRight: 56, paddingBottom: 28,
        font: "400 16px/1.6 var(--sans)", color: "var(--ink)", opacity: 0.82,
        maxWidth: 760,
      }}>{a}</div>
    )}
  </div>
);

const FaqSection = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <Section id="faq" bg="var(--paper)" label="07 FAQ">
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 380px) minmax(0, 1fr)", gap: 64, alignItems: "start" }}>
        <div style={{ position: "sticky", top: 100 }}>
          <div className="eyebrow">
            <span className="num">N°07</span>
            <span className="line"></span>
            <span>Domande frequenti</span>
          </div>
          <h2 style={{
            font: "400 clamp(38px, 5.4vw, 60px)/0.98 var(--display)",
            letterSpacing: "-0.02em", margin: "0 0 24px", textWrap: "balance",
          }}>
            Tutto quello<br/>che vorresti<br/>
            <em style={{ fontStyle: "italic", color: "var(--forest)" }}>chiederci.</em>
          </h2>
          <p style={{ font: "400 16px/1.55 var(--sans)", margin: "0 0 20px", color: "var(--ink)", opacity: 0.75 }}>
            Se la tua domanda non è qui, scrivici. Ti rispondiamo entro 24 ore.
          </p>
          <a href="mailto:ciao@chargely.it" className="btn btn-ghost" style={{ padding: "12px 18px", font: "600 13px/1 var(--sans)" }}>
            ciao@chargely.it
            <span className="arrow">→</span>
          </a>
        </div>
        <div>
          {FAQ_ITEMS.map((it, i) => (
            <FaqItem key={i} idx={i} q={it.q} a={it.a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </Section>
  );
};

const Footer = ({ tweaks, onCtaClick }) => (
  <footer style={{
    background: "var(--ink)", color: "var(--bg)",
    padding: "80px 0 32px",
  }}>
    <div className="container">
      {/* big CTA strip */}
      <div style={{
        display: "grid", gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 1fr)",
        gap: 40, alignItems: "center",
        paddingBottom: 64, borderBottom: "1px solid rgba(242,239,230,0.18)",
      }}>
        <div>
          <h3 style={{
            font: "400 clamp(36px, 5vw, 60px)/0.98 var(--display)",
            letterSpacing: "-0.02em", margin: 0,
            textWrap: "balance",
          }}>
            Pronto a far guadagnare<br/>
            <em style={{ fontStyle: "italic", color: "var(--lime)" }}>la tua presa?</em>
          </h3>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
          <button onClick={onCtaClick} className="btn btn-primary">
            Diventa host adesso
            <span className="arrow">→</span>
          </button>
          {tweaks.showCounter && (
            <div className="mono" style={{
              font: "500 11px/1.5 var(--mono)", letterSpacing: "0.16em", textTransform: "uppercase",
              color: "var(--lime)", display: "inline-flex", alignItems: "center", gap: 10,
            }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--lime)", display: "inline-block", boxShadow: "0 0 0 4px rgba(198,242,77,0.25)" }}></span>
              {tweaks.counterHosts} host già iscritti a Roma
            </div>
          )}
        </div>
      </div>

      {/* meta row */}
      <div style={{
        marginTop: 32,
        display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) repeat(3, minmax(0, 1fr))",
        gap: 32, alignItems: "start",
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 14 }}>
            <span style={{ font: "400 32px/0.85 var(--display)", letterSpacing: "-0.03em" }}>charge</span>
            <span style={{ font: "400 32px/0.85 var(--display)", fontStyle: "italic", color: "var(--lime)", letterSpacing: "-0.03em" }}>ly</span>
            <Spark size={8} color="var(--lime)" />
          </div>
          <p style={{ font: "400 14px/1.55 var(--sans)", color: "rgba(242,239,230,0.7)", margin: "0 0 8px", maxWidth: 320 }}>
            La rete di ricarica tra privati per le auto elettriche di Roma.
            In fase di validazione — beta entro fine 2026.
          </p>
          <p style={{ font: "400 13px/1.55 var(--sans)", color: "rgba(242,239,230,0.45)", margin: 0 }}>
            Chargely è un progetto in fase pilota.
          </p>
        </div>

        <div>
          <div className="mono" style={{
            font: "500 11px/1 var(--mono)", letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--lime)", marginBottom: 16,
          }}>Progetto</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {["Come funziona", "Quanto guadagno", "FAQ"].map((t, i) => (
              <li key={t}>
                <a href={`#${["come-funziona", "guadagno", "faq"][i]}`} style={{
                  color: "rgba(242,239,230,0.85)", font: "400 14px/1.5 var(--sans)",
                  textDecoration: "none",
                }}>{t}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mono" style={{
            font: "500 11px/1 var(--mono)", letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--lime)", marginBottom: 16,
          }}>Contatti</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            <li><a href="mailto:ciao@chargely.it" style={{ color: "rgba(242,239,230,0.85)", font: "400 14px/1.5 var(--sans)", textDecoration: "none" }}>ciao@chargely.it</a></li>
            <li><a href="#" style={{ color: "rgba(242,239,230,0.85)", font: "400 14px/1.5 var(--sans)", textDecoration: "none" }}>Roma, Italia</a></li>
          </ul>
        </div>

        <div>
          <div className="mono" style={{
            font: "500 11px/1 var(--mono)", letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--lime)", marginBottom: 16,
          }}>Legale</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            <li><a href="#" style={{ color: "rgba(242,239,230,0.85)", font: "400 14px/1.5 var(--sans)", textDecoration: "none" }}>Privacy policy</a></li>
            <li><a href="#" style={{ color: "rgba(242,239,230,0.85)", font: "400 14px/1.5 var(--sans)", textDecoration: "none" }}>Cookie policy</a></li>
            <li><a href="#" style={{ color: "rgba(242,239,230,0.85)", font: "400 14px/1.5 var(--sans)", textDecoration: "none" }}>Termini</a></li>
          </ul>
        </div>
      </div>

      <div style={{
        marginTop: 64, paddingTop: 24,
        borderTop: "1px solid rgba(242,239,230,0.18)",
        display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16,
        font: "500 11px/1.5 var(--mono)", letterSpacing: "0.16em", textTransform: "uppercase",
        color: "rgba(242,239,230,0.45)",
      }}>
        <span>© 2026 Chargely — un esperimento di rete energetica peer-to-peer.</span>
        <span>Beta Roma · v1.0</span>
      </div>
    </div>
  </footer>
);

Object.assign(window, { FaqSection, Footer });
