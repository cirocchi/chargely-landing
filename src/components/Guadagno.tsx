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

export default function Guadagno() {
  return (
    <section id="guadagno" className="bg-paper py-[clamp(72px,9vw,120px)] relative scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-8 max-md:px-5">
        <div className="text-center max-w-[720px] mx-auto mb-14">
          <div className="flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-forest mb-[18px] justify-center">
            <span className="text-ink/55">N°04</span>
            <span className="w-7 h-px bg-forest/60" />
            <span>Quanto puoi guadagnare</span>
          </div>
          <h2 className="font-display text-[clamp(38px,5.4vw,64px)] leading-[1.0] tracking-[-0.02em] mb-[18px] text-balance">
            Tre esempi reali,
            <br />
            <em className="italic text-forest">
              dal più comune al più raro.
            </em>
          </h2>
          <p className="font-sans text-lg leading-[1.55] text-ink/[0.78] max-w-[720px]">
            Le stime sono al netto della commissione di piattaforma e si basano
            su una tariffa media domestica di 0,28 €/kWh e un prezzo di vendita
            di 0,45 €/kWh. I valori reali dipendono dalla tua bolletta
            specifica.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {EARNINGS.map((e, i) => {
            const hi = e.highlight;
            return (
              <div
                key={i}
                className="rounded-md relative flex flex-col gap-[18px] min-h-[380px]"
                style={{
                  background: hi ? "var(--forest)" : "var(--bg)",
                  color: hi ? "var(--bg)" : "var(--ink)",
                  border: `1px solid ${hi ? "var(--forest)" : "var(--rule)"}`,
                  padding: "32px 28px 28px",
                  boxShadow: hi
                    ? "0 20px 60px -30px rgba(13,31,20,0.4)"
                    : "none",
                  transform: hi ? "translateY(-8px)" : "none",
                }}
              >
                {hi && (
                  <span className="absolute -top-3 left-7 font-mono text-[10px] font-medium tracking-[0.18em] uppercase bg-lime text-ink px-3 py-2 rounded-full border-[1.5px] border-ink">
                    Più scelto
                  </span>
                )}

                <div className="flex justify-between items-baseline">
                  <span
                    className="font-mono text-[11px] font-medium tracking-[0.16em] uppercase"
                    style={{
                      color: hi ? "var(--lime)" : "var(--forest)",
                    }}
                  >
                    {e.tag}
                  </span>
                  <span
                    className="font-mono text-[11px] font-medium tracking-[0.08em]"
                    style={{
                      color: hi
                        ? "rgba(242,239,230,0.6)"
                        : "rgba(13,31,20,0.55)",
                    }}
                  >
                    {e.kW}
                  </span>
                </div>

                <h3 className="font-display text-[30px] leading-[1.05] tracking-[-0.015em]">
                  {e.type}
                </h3>

                <p
                  className="font-sans text-[14px] leading-[1.5]"
                  style={{ opacity: hi ? 0.75 : 0.7 }}
                >
                  {e.freq}
                </p>

                <div
                  className="mt-auto pt-[18px]"
                  style={{
                    borderTop: `1px solid ${hi ? "rgba(242,239,230,0.18)" : "var(--rule)"}`,
                  }}
                >
                  <div
                    className="font-mono text-[10px] font-medium tracking-[0.18em] uppercase mb-1.5"
                    style={{
                      color: hi
                        ? "rgba(242,239,230,0.55)"
                        : "rgba(13,31,20,0.55)",
                    }}
                  >
                    Margine netto stimato / mese
                  </div>
                  <div
                    className="font-display text-[56px] leading-[0.9] tracking-[-0.025em]"
                    style={{
                      color: hi ? "var(--lime)" : "var(--ink)",
                    }}
                  >
                    {e.min}–{e.max}{" "}
                    <span
                      className="text-[0.5em] italic"
                      style={{
                        color: hi ? "var(--bg)" : "var(--forest)",
                      }}
                    >
                      €
                    </span>
                  </div>
                  <p
                    className="font-sans text-[13px] leading-[1.5] mt-3"
                    style={{ opacity: hi ? 0.7 : 0.65 }}
                  >
                    {e.note}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance */}
        <div className="mt-10 bg-bg border border-rule rounded-md p-[28px_32px] grid grid-cols-[auto_1fr] gap-6 items-center max-md:grid-cols-1">
          <div className="font-display text-[64px] leading-[0.85] text-forest italic tracking-[-0.03em]">
            &ldquo;
          </div>
          <p className="font-sans text-lg leading-[1.5] text-ink">
            Anche con una semplice{" "}
            <strong className="font-semibold">presa Schuko di casa</strong> puoi
            generare un reddito interessante. La ricarica è più lenta — circa
            10-15 km di autonomia per ogni ora — ma per chi parcheggia tutta la
            notte è perfetta.
          </p>
        </div>
      </div>
    </section>
  );
}
