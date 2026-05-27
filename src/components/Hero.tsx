"use client";

function RomaMap() {
  const pins: { x: number; y: number; size: number; label?: string; live?: boolean }[] = [
    { x: 28, y: 32, size: 14, label: "Trastevere", live: true },
    { x: 54, y: 22, size: 10, label: "Prati" },
    { x: 68, y: 48, size: 12, label: "San Lorenzo" },
    { x: 42, y: 62, size: 11, label: "Testaccio", live: true },
    { x: 78, y: 70, size: 9, label: "Ostiense" },
    { x: 18, y: 70, size: 9, label: "Monteverde" },
    { x: 60, y: 80, size: 8 },
    { x: 86, y: 28, size: 8 },
  ];

  return (
    <div className="relative w-full aspect-[1/1.05] bg-forest text-bg rounded-md overflow-hidden shadow-[0_30px_80px_-30px_rgba(13,31,20,0.5)]">
      {/* dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(242,239,230,0.18) 1.2px, transparent 1.2px)",
          backgroundSize: "26px 26px",
          backgroundPosition: "13px 13px",
        }}
      />
      {/* river */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full opacity-50"
      >
        <path
          d="M -5 35 C 20 30, 30 55, 45 50 S 65 40, 80 60 S 95 85, 110 80"
          stroke="rgba(198,242,77,0.45)"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>
      {/* pins */}
      {pins.map((p, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
        >
          <div
            className="rounded-full"
            style={{
              width: p.size,
              height: p.size,
              background: p.live ? "var(--lime)" : "var(--bg)",
              boxShadow: p.live
                ? `0 0 0 ${p.size * 0.5}px rgba(198,242,77,0.25), 0 0 0 ${p.size * 1.1}px rgba(198,242,77,0.1)`
                : `0 0 0 ${p.size * 0.4}px rgba(242,239,230,0.18)`,
              animation: p.live ? "pulse-dot 2.4s ease-in-out infinite" : "none",
            }}
          />
          {p.label && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 translate-y-1.5 font-mono text-[10px] font-medium tracking-[0.08em] text-[var(--bg)] opacity-85 whitespace-nowrap">
              {p.label}
            </div>
          )}
        </div>
      ))}
      {/* corner label */}
      <div className="absolute top-[18px] left-5 font-mono text-[10px] font-medium tracking-[0.18em] uppercase text-lime">
        Roma — rete in formazione
      </div>
      <div className="absolute top-[18px] right-5 flex gap-3.5 items-center font-mono text-[10px] font-medium tracking-[0.12em] uppercase text-[var(--bg)] opacity-65">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-lime" /> attivo
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[var(--bg)]" /> in arrivo
        </span>
      </div>
      {/* bottom card */}
      <div className="absolute bottom-5 left-5 right-5 bg-[rgba(13,31,20,0.65)] backdrop-blur-[10px] border border-[rgba(242,239,230,0.18)] p-[14px_18px] rounded flex justify-between items-center gap-4">
        <div>
          <div className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase text-lime">
            Host attivi — Trastevere
          </div>
          <div className="font-display text-[22px] leading-none mt-1.5">
            <em className="italic">3 prese</em> · 2 wallbox
          </div>
        </div>
        <div className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase text-[var(--bg)] opacity-70 text-right leading-[1.4]">
          Aggiornata
          <br />
          22.05.26
        </div>
      </div>
    </div>
  );
}

export default function Hero({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <section id="top" className="relative pt-16 pb-[120px] max-md:pt-10 max-md:pb-16 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(13,31,20,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="max-w-[1240px] mx-auto px-8 max-md:px-5 grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-14 items-center relative">
        <div>
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-[0.12em] uppercase px-3 py-2 rounded-full bg-lime text-ink border border-ink">
            ● Beta Roma · 2026
          </span>
          <h1 className="font-display text-[clamp(48px,7.5vw,96px)] leading-[0.93] tracking-[-0.025em] mt-7 mb-6 text-balance">
            Hai una presa
            <br />
            elettrica?
            <br />
            <em className="italic text-forest">
              Falla guadagnare
              <br />
              per te.
            </em>
          </h1>
          <p className="font-sans text-[19px] leading-[1.55] text-ink/80 max-w-[560px] mb-9">
            Wallbox, presa Schuko in garage, in cortile, nel vialetto, sotto
            casa: se un&apos;auto elettrica può collegarsi, puoi diventare host.
            Stiamo costruendo a{" "}
            <strong className="font-semibold">Roma</strong> la prima rete di
            ricarica tra privati. Analizziamo gratis la tua bolletta e ti
            diciamo quanto puoi guadagnare ogni mese.
          </p>
          <div className="flex gap-3 flex-wrap items-center">
            <a
              href="#form"
              className="inline-flex items-center gap-2.5 font-sans text-[15px] font-semibold px-[22px] py-4 bg-lime text-ink border-[1.5px] border-ink rounded-full shadow-[3px_3px_0_0_var(--ink)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0_0_var(--ink)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_0_var(--ink)] transition-all no-underline"
            >
              Calcola il tuo guadagno
              <span className="font-display italic text-lg">→</span>
            </a>
            <a
              href="#come-funziona"
              className="inline-flex items-center gap-2.5 font-sans text-[15px] font-semibold px-[22px] py-4 bg-transparent text-ink border-[1.5px] border-ink rounded-full hover:bg-ink hover:text-[var(--bg)] transition-all no-underline"
            >
              Come funziona
            </a>
          </div>
          <div className="flex gap-6 mt-9 flex-wrap">
            {["Iscrizione gratuita", "Nessun impegno", "Risposta in 48 ore"].map(
              (t) => (
                <div
                  key={t}
                  className="flex items-center gap-2 font-sans text-[13px] font-medium text-ink/75"
                >
                  <span className="w-[18px] h-[18px] rounded-full border-[1.5px] border-forest inline-flex items-center justify-center text-forest text-[11px] font-bold">
                    ✓
                  </span>
                  {t}
                </div>
              )
            )}
          </div>
        </div>
        <div className="max-lg:hidden">
          <RomaMap />
        </div>
      </div>
    </section>
  );
}
