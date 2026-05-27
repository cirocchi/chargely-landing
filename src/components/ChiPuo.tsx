const HOST_CASES = [
  { tag: "01", title: "Box auto privato", body: "Con presa Schuko al muro o wallbox dedicata. Il caso più semplice e sicuro." },
  { tag: "02", title: "Vialetto o cortile", body: "Presa esterna sotto tettoia o sul muro di casa, raggiungibile dall'auto in sosta." },
  { tag: "03", title: "Posto auto condominiale", body: "Presa nel garage comune o nel cortile, se raggiungibile dal tuo stallo." },
  { tag: "04", title: "Garage al piano terra", body: "Anche la presa interna del garage va benissimo: lasci la porta socchiusa al cavo." },
  { tag: "05", title: "Cantina o magazzino", body: "Con accesso veicolare e una presa a muro. Perfetto per le ricariche notturne." },
  { tag: "06", title: "Presa esterna sotto casa", body: "Sul prospetto al piano terra, raggiungibile dall'auto parcheggiata in strada." },
];

function CaseIcon({ tag }: { tag: string }) {
  const common = {
    width: 30,
    height: 30,
    viewBox: "0 0 28 28",
    fill: "none",
    stroke: "var(--forest)",
    strokeWidth: 1.35,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (tag) {
    case "01":
      return (
        <svg {...common}>
          <path d="M3.5 12 14 5 24.5 12" />
          <path d="M5.5 12v11h17V12" />
          <path d="M8.5 16h11M8.5 19h11" />
        </svg>
      );
    case "02":
      return (
        <svg {...common}>
          <path d="M5 12 14 5 23 12v11H5z" />
          <path d="M12 23v-5h4v5" />
          <path d="M9 26 14 23 19 26" />
        </svg>
      );
    case "03":
      return (
        <svg {...common}>
          <path d="M6 4h16v20H6z" />
          <path d="M9.5 8h1.5M13.25 8h1.5M17 8h1.5M9.5 12h1.5M13.25 12h1.5M17 12h1.5M9.5 16h1.5M17 16h1.5" />
          <path d="M12 24v-4h4v4" />
        </svg>
      );
    case "04":
      return (
        <svg {...common}>
          <path d="M3.5 12 14 5 24.5 12v12H3.5z" />
          <path d="M7 19h14l-1.6-3.2H8.6z" />
          <circle cx="10" cy="21" r="1" />
          <circle cx="18" cy="21" r="1" />
        </svg>
      );
    case "05":
      return (
        <svg {...common}>
          <path d="M4.5 6h19v6h-19z" />
          <path d="M4.5 14h19v8h-19z" />
          <path d="M10 9h2M16 9h2M10 17h2M16 17h2" />
        </svg>
      );
    case "06":
      return (
        <svg {...common}>
          <path d="M3 6v16" />
          <circle cx="15" cy="14" r="7" />
          <circle cx="12.5" cy="12" r="0.9" fill="var(--forest)" stroke="none" />
          <circle cx="17.5" cy="12" r="0.9" fill="var(--forest)" stroke="none" />
          <path d="M12.5 16.5h5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ChiPuo() {
  return (
    <section id="chi-puo" className="bg-paper py-[clamp(72px,9vw,120px)] relative">
      <div className="max-w-[1240px] mx-auto px-8 max-md:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-end mb-14">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-forest mb-[18px]">
              <span className="text-ink/55">N°02</span>
              <span className="w-7 h-px bg-forest/60" />
              <span>Chi può diventare host</span>
            </div>
            <h2 className="font-display text-[clamp(38px,5.4vw,64px)] leading-[1.0] tracking-[-0.02em] text-balance">
              Non serve essere un esperto.
              <br />
              <em className="italic text-forest">Basta una presa.</em>
            </h2>
          </div>
          <p className="font-sans text-lg leading-[1.55] opacity-[0.78] max-w-[460px]">
            Se hai una presa elettrica che un&apos;auto può raggiungere quando è
            parcheggiata, sei già a metà dell&apos;opera. La maggior parte dei
            nostri host parte da una semplice Schuko di casa — quella che usi
            ogni giorno per il phon o l&apos;aspirapolvere.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-px bg-rule border border-rule rounded-md overflow-hidden">
          {HOST_CASES.map((c) => (
            <div
              key={c.tag}
              className="bg-paper p-[32px_28px] flex flex-col gap-3.5 min-h-[200px]"
            >
              <div className="flex justify-between items-start gap-3">
                <span className="font-mono text-[11px] font-medium tracking-[0.16em] text-forest mt-1.5">
                  CASO · {c.tag}
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 flex items-center opacity-[0.85]"
                >
                  <CaseIcon tag={c.tag} />
                </span>
              </div>
              <h3 className="font-display text-[26px] leading-[1.1] tracking-[-0.01em]">
                {c.title}
              </h3>
              <p className="font-sans text-[15px] leading-[1.55] text-ink/[0.72]">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 bg-bg border border-dashed border-rule-strong rounded-md flex gap-[18px] items-center">
          <div className="shrink-0 w-9 h-9 rounded-full bg-forest text-lime flex items-center justify-center font-display text-[22px] italic">
            i
          </div>
          <p className="font-sans text-[15px] leading-[1.55] text-ink/85">
            <strong className="font-semibold">
              La tua presa funziona già per qualsiasi elettrodomestico?
            </strong>{" "}
            Allora funziona anche per ricaricare un&apos;auto elettrica. Ti aiutiamo
            noi a verificare che sia tutto a norma — gratis e senza impegno.
          </p>
        </div>
      </div>
    </section>
  );
}
