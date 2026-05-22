const HOST_CASES = [
  { tag: "01", title: "Box auto privato", body: "Con presa Schuko al muro o wallbox dedicata. Il caso più semplice e sicuro." },
  { tag: "02", title: "Vialetto o cortile", body: "Presa esterna sotto tettoia o sul muro di casa, raggiungibile dall'auto in sosta." },
  { tag: "03", title: "Posto auto condominiale", body: "Presa nel garage comune o nel cortile, se raggiungibile dal tuo stallo." },
  { tag: "04", title: "Garage al piano terra", body: "Anche la presa interna del garage va benissimo: lasci la porta socchiusa al cavo." },
  { tag: "05", title: "Cantina o magazzino", body: "Con accesso veicolare e una presa a muro. Perfetto per le ricariche notturne." },
  { tag: "06", title: "Presa esterna sotto casa", body: "Sul prospetto al piano terra, raggiungibile dall'auto parcheggiata in strada." },
];

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
          {HOST_CASES.map((c, i) => (
            <div
              key={c.tag}
              className="bg-paper p-[32px_28px] flex flex-col gap-3.5 min-h-[200px]"
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-[11px] font-medium tracking-[0.16em] text-forest">
                  CASO · {c.tag}
                </span>
                <span
                  className="w-6 h-6 rounded"
                  style={{
                    background: i % 3 === 0 ? "var(--lime)" : "transparent",
                    border: i % 3 === 0 ? "none" : "1px solid var(--rule-strong)",
                  }}
                />
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
