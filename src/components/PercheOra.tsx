const STATS = [
  { big: "365K", small: "auto elettriche circolanti in Italia, a fine 2025." },
  { big: "+46%", small: "crescita delle immatricolazioni EV nel 2025." },
  { big: "1 su 5", small: "EV italiani circola tra Roma e il Lazio." },
  {
    big: "Priorità",
    small: "I primi host ottengono massima visibilità sulla futura mappa.",
    italic: true,
  },
];

export default function PercheOra() {
  return (
    <section id="perche-ora" className="bg-forest py-[clamp(72px,9vw,120px)] relative">
      <div className="max-w-[1240px] mx-auto px-8 max-md:px-5 text-[var(--bg)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-lime mb-[18px]">
              <span className="text-[rgba(242,239,230,0.6)]">N°05</span>
              <span className="w-7 h-px bg-lime" />
              <span>Perché ora</span>
            </div>
            <h2 className="font-display text-[clamp(38px,5.4vw,68px)] leading-[0.98] tracking-[-0.02em] text-balance">
              Roma è la città italiana
              <br />
              <em className="italic text-lime">
                con più EV e meno colonnine.
              </em>
            </h2>
          </div>
          <p className="font-sans text-[17px] leading-[1.6] opacity-80 max-w-[480px]">
            La rete pubblica romana è sottodimensionata. La maggior parte dei
            condomini non ha box auto. Significa che gli EV driver in città
            stanno cercando, oggi, dove ricaricare la sera. Tu hai la presa
            giusta al momento giusto.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-px bg-[rgba(242,239,230,0.2)] border border-[rgba(242,239,230,0.2)] rounded-md overflow-hidden">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="bg-forest p-[40px_28px_32px] flex flex-col gap-4 min-h-[220px]"
            >
              <div className="font-mono text-[10px] font-medium tracking-[0.2em] uppercase text-lime opacity-85">
                FATTO 0{i + 1}
              </div>
              <div
                className="font-display tracking-[-0.03em] text-lime"
                style={{
                  fontSize: s.big.length > 4 ? "56px" : "84px",
                  lineHeight: "0.9",
                  fontStyle: s.italic ? "italic" : "normal",
                }}
              >
                {s.big}
              </div>
              <p className="font-sans text-[14px] leading-[1.55] text-[var(--bg)] opacity-[0.78]">
                {s.small}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-[18px] border-t border-[rgba(242,239,230,0.18)] font-mono text-[11px] font-medium tracking-[0.16em] uppercase text-[rgba(242,239,230,0.55)] flex justify-between flex-wrap gap-4">
          <span>Fonte → Motus-E, UNRAE, ANFIA · fine 2025</span>
          <span>Aggiornato 22.05.26</span>
        </div>
      </div>
    </section>
  );
}
