// Section 2 — Chi può diventare host
// Section 3 — Come funziona

const HOST_CASES = [
  { tag: "01", title: "Box auto privato",         body: "Con presa Schuko al muro o wallbox dedicata. Il caso più semplice e sicuro." },
  { tag: "02", title: "Vialetto o cortile",       body: "Presa esterna sotto tettoia o sul muro di casa, raggiungibile dall'auto in sosta." },
  { tag: "03", title: "Posto auto condominiale",  body: "Presa nel garage comune o nel cortile, se raggiungibile dal tuo stallo." },
  { tag: "04", title: "Garage al piano terra",    body: "Anche la presa interna del garage va benissimo: lasci la porta socchiusa al cavo." },
  { tag: "05", title: "Cantina o magazzino",      body: "Con accesso veicolare e una presa a muro. Perfetto per le ricariche notturne." },
  { tag: "06", title: "Presa esterna sotto casa", body: "Sul prospetto al piano terra, raggiungibile dall'auto parcheggiata in strada." },
];

// Per-case line icons (option 2). Simple line glyphs, ~28x28.
const CaseIcon = ({ tag }) => {
  const common = {
    width: 30, height: 30, viewBox: "0 0 28 28", fill: "none",
    stroke: "var(--forest)", strokeWidth: 1.35,
    strokeLinecap: "round", strokeLinejoin: "round",
  };
  switch (tag) {
    case "01": // Box auto privato — garage door
      return (
        <svg {...common}>
          <path d="M3.5 12 14 5 24.5 12" />
          <path d="M5.5 12v11h17V12" />
          <path d="M8.5 16h11M8.5 19h11" />
        </svg>
      );
    case "02": // Vialetto / cortile — house + path
      return (
        <svg {...common}>
          <path d="M5 12 14 5 23 12v11H5z" />
          <path d="M12 23v-5h4v5" />
          <path d="M9 26 14 23 19 26" />
        </svg>
      );
    case "03": // Condominio — building
      return (
        <svg {...common}>
          <path d="M6 4h16v20H6z" />
          <path d="M9.5 8h1.5M13.25 8h1.5M17 8h1.5M9.5 12h1.5M13.25 12h1.5M17 12h1.5M9.5 16h1.5M17 16h1.5" />
          <path d="M12 24v-4h4v4" />
        </svg>
      );
    case "04": // Garage piano terra — car under arch
      return (
        <svg {...common}>
          <path d="M3.5 12 14 5 24.5 12v12H3.5z" />
          <path d="M7 19h14l-1.6-3.2H8.6z" />
          <circle cx="10" cy="21" r="1" />
          <circle cx="18" cy="21" r="1" />
        </svg>
      );
    case "05": // Cantina / magazzino — stacked storage
      return (
        <svg {...common}>
          <path d="M4.5 6h19v6h-19z" />
          <path d="M4.5 14h19v8h-19z" />
          <path d="M10 9h2M16 9h2M10 17h2M16 17h2" />
        </svg>
      );
    case "06": // Presa esterna — plug / socket on wall
      return (
        <svg {...common}>
          <path d="M3 6v16" />
          <circle cx="15" cy="14" r="7" />
          <circle cx="12.5" cy="12" r="0.9" fill="var(--forest)" stroke="none" />
          <circle cx="17.5" cy="12" r="0.9" fill="var(--forest)" stroke="none" />
          <path d="M12.5 16.5h5" />
        </svg>
      );
    default: return null;
  }
};

// Consistent presa+cavo vignette (option 3). Same diagram per card.
const CaseDiagram = () => (
  <svg width="44" height="28" viewBox="0 0 44 28" fill="none"
       stroke="var(--forest)" strokeWidth="1.35"
       strokeLinecap="round" strokeLinejoin="round">
    {/* wall */}
    <path d="M3 3v22" />
    {/* socket */}
    <rect x="5" y="9" width="9" height="10" rx="1.5" />
    <circle cx="9.5" cy="12.5" r="0.9" fill="var(--forest)" stroke="none" />
    <circle cx="9.5" cy="15.5" r="0.9" fill="var(--forest)" stroke="none" />
    {/* cable */}
    <path d="M14 14 C 22 14, 24 22, 32 22" />
    {/* bolt */}
    <path d="M37 14l-3 6h3l-1 5 4-7h-3l1-4z" fill="var(--lime)" stroke="var(--forest)" />
  </svg>
);

const ChiPuoSection = ({ marker = "icon" }) => (
  <Section id="chi-puo" bg="var(--paper)" label="02 Chi puo'">
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)", gap: 48, alignItems: "end", marginBottom: 56 }}>
      <div>
        <div className="eyebrow">
          <span className="num">N°02</span>
          <span className="line"></span>
          <span>Chi può diventare host</span>
        </div>
        <h2 style={{
          font: "400 clamp(38px, 5.4vw, 64px)/1.0 var(--display)",
          letterSpacing: "-0.02em", margin: 0, textWrap: "balance",
        }}>
          Non serve essere un esperto.<br/>
          <em style={{ fontStyle: "italic", color: "var(--forest)" }}>Basta una presa.</em>
        </h2>
      </div>
      <p style={{
        font: "400 18px/1.55 var(--sans)", margin: 0, opacity: 0.78, maxWidth: 460, textWrap: "pretty",
      }}>
        Se hai una presa elettrica che un'auto può raggiungere quando è parcheggiata,
        sei già a metà dell'opera. La maggior parte dei nostri host parte da una
        semplice Schuko di casa — quella che usi ogni giorno per il phon o
        l'aspirapolvere.
      </p>
    </div>

    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 1,
      background: "var(--rule)",
      border: "1px solid var(--rule)",
      borderRadius: 6,
      overflow: "hidden",
    }}>
      {HOST_CASES.map((c, i) => (
        <div key={c.tag} style={{
          background: "var(--paper)", padding: "32px 28px",
          display: "flex", flexDirection: "column", gap: 14,
          minHeight: 200,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
            <span className="mono" style={{
              font: "500 11px/1 var(--mono)", letterSpacing: "0.16em",
              color: "var(--forest)", marginTop: 6,
            }}>CASO · {c.tag}</span>
            <span aria-hidden="true" style={{ flex: "0 0 auto", display: "flex", alignItems: "center", opacity: 0.85 }}>
              {marker === "diagram" ? <CaseDiagram /> : <CaseIcon tag={c.tag} />}
            </span>
          </div>
          <h3 style={{
            font: "400 26px/1.1 var(--display)",
            letterSpacing: "-0.01em", margin: 0,
          }}>
            {c.title}
          </h3>
          <p style={{
            font: "400 15px/1.55 var(--sans)", margin: 0, color: "var(--ink)", opacity: 0.72,
          }}>{c.body}</p>
        </div>
      ))}
    </div>

    <div style={{
      marginTop: 32,
      padding: "20px 24px",
      background: "var(--bg)",
      border: "1px dashed var(--rule-strong)",
      borderRadius: 6,
      display: "flex", gap: 18, alignItems: "center",
    }}>
      <div style={{
        flex: "0 0 auto", width: 36, height: 36, borderRadius: 999,
        background: "var(--forest)", color: "var(--lime)",
        display: "flex", alignItems: "center", justifyContent: "center",
        font: "400 22px/1 var(--display)", fontStyle: "italic",
      }}>i</div>
      <p style={{ margin: 0, font: "400 15px/1.55 var(--sans)", color: "var(--ink)", opacity: 0.85 }}>
        <strong style={{ fontWeight: 600 }}>La tua presa funziona già per qualsiasi elettrodomestico?</strong>{" "}
        Allora funziona anche per ricaricare un'auto elettrica. Ti aiutiamo noi a
        verificare che sia tutto a norma — gratis e senza impegno.
      </p>
    </div>
  </Section>
);

const STEPS = [
  {
    n: "01",
    title: "Ci mandi la tua bolletta",
    body: "Carichi PDF o foto della tua ultima bolletta. Analizziamo gratis il tuo costo reale al kWh in 24-48 ore.",
    micro: "Tempo richiesto · 2 minuti",
  },
  {
    n: "02",
    title: "Ti diciamo a quanto puoi vendere",
    body: "Calcoliamo una tariffa concorrenziale che ti garantisce un margine netto su ogni ricarica. Decidi tu se accettare.",
    micro: "Risposta · entro 48 ore",
  },
  {
    n: "03",
    title: "Ricevi richieste di ricarica",
    body: "Quando non usi la presa, altri EV driver pagano per ricaricarci. Guadagni mentre dormi o sei al lavoro.",
    micro: "Accredito · mensile, sul tuo conto",
  },
];

const ComeFunzionaSection = () => (
  <Section id="come-funziona" bg="var(--bg)" label="03 Come funziona">
    <SectionHeader
      num="03"
      eyebrow="Come funziona"
      title={<>Tre passaggi.<br/><em style={{ fontStyle: "italic", color: "var(--forest)" }}>Niente di complicato.</em></>}
      align="center"
    >
      Tutto parte dalla tua bolletta. Senza app da scaricare, senza tecnici a casa
      in questa fase. Quando partirà il servizio, tu sarai già pronto.
    </SectionHeader>

    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 24,
      position: "relative",
    }}>
      {STEPS.map((s, i) => (
        <div key={s.n} style={{
          background: "var(--paper)",
          border: "1px solid var(--rule)",
          borderRadius: 6,
          padding: "36px 32px 28px",
          position: "relative",
          display: "flex", flexDirection: "column", gap: 16,
          minHeight: 320,
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{
              font: "400 84px/0.85 var(--display)",
              color: "var(--forest)",
              letterSpacing: "-0.04em",
            }}>{s.n}</span>
            {i < STEPS.length - 1 && (
              <span className="mono arrow-step" style={{
                font: "400 28px/1 var(--display)", fontStyle: "italic",
                color: "var(--forest)", opacity: 0.6,
              }}>→</span>
            )}
          </div>
          <h3 style={{
            font: "400 28px/1.05 var(--display)",
            letterSpacing: "-0.01em", margin: 0,
            textWrap: "balance",
          }}>{s.title}</h3>
          <p style={{
            font: "400 15px/1.6 var(--sans)", margin: 0, color: "var(--ink)", opacity: 0.75,
            flex: 1,
          }}>{s.body}</p>
          <div className="mono" style={{
            font: "500 11px/1 var(--mono)", letterSpacing: "0.14em", textTransform: "uppercase",
            color: "var(--forest)", paddingTop: 14, borderTop: "1px solid var(--rule)",
          }}>{s.micro}</div>
        </div>
      ))}
    </div>
  </Section>
);

Object.assign(window, { ChiPuoSection, ComeFunzionaSection });
