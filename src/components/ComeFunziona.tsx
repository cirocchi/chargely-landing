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

export default function ComeFunziona() {
  return (
    <section id="come-funziona" className="bg-bg py-[clamp(72px,9vw,120px)] relative scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-8 max-md:px-5">
        <div className="text-center max-w-[720px] mx-auto mb-14">
          <div className="flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-forest mb-[18px] justify-center">
            <span className="text-ink/55">N°03</span>
            <span className="w-7 h-px bg-forest/60" />
            <span>Come funziona</span>
          </div>
          <h2 className="font-display text-[clamp(38px,5.4vw,64px)] leading-[1.0] tracking-[-0.02em] mb-[18px] text-balance">
            Tre passaggi.
            <br />
            <em className="italic text-forest">Niente di complicato.</em>
          </h2>
          <p className="font-sans text-lg leading-[1.55] text-ink/[0.78] max-w-[720px]">
            Tutto parte dalla tua bolletta. Senza app da scaricare, senza
            tecnici a casa in questa fase. Quando partirà il servizio, tu sarai
            già pronto.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 relative">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="bg-paper border border-rule rounded-md p-[36px_32px_28px] relative flex flex-col gap-4 min-h-[320px]"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-[84px] leading-[0.85] text-forest tracking-[-0.04em]">
                  {s.n}
                </span>
                {i < STEPS.length - 1 && (
                  <span className="font-display italic text-[28px] text-forest/60 max-md:hidden">
                    →
                  </span>
                )}
              </div>
              <h3 className="font-display text-[28px] leading-[1.05] tracking-[-0.01em] text-balance">
                {s.title}
              </h3>
              <p className="font-sans text-[15px] leading-[1.6] text-ink/75 flex-1">
                {s.body}
              </p>
              <div className="font-mono text-[11px] font-medium tracking-[0.14em] uppercase text-forest pt-3.5 border-t border-rule">
                {s.micro}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
