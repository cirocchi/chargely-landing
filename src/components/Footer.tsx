"use client";

export default function Footer({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <footer className="bg-ink text-[var(--bg)] pt-20 pb-8">
      <div className="max-w-[1240px] mx-auto px-8 max-md:px-5">
        {/* Big CTA strip */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 items-center pb-16 border-b border-[rgba(242,239,230,0.18)]">
          <div>
            <h3 className="font-display text-[clamp(36px,5vw,60px)] leading-[0.98] tracking-[-0.02em] text-balance">
              Pronto a far guadagnare
              <br />
              <em className="italic text-lime">la tua presa?</em>
            </h3>
          </div>
          <div className="flex flex-col gap-3.5 items-start">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center gap-2.5 font-sans text-[15px] font-semibold px-[22px] py-4 bg-lime text-ink border-[1.5px] border-ink rounded-full shadow-[3px_3px_0_0_var(--ink)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0_0_var(--ink)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_0_var(--ink)] transition-all cursor-pointer"
            >
              Diventa host adesso
              <span className="font-display italic text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Meta row */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)] gap-8 items-start">
          <div>
            <div className="flex items-baseline gap-1 mb-3.5">
              <span className="font-display text-[32px] leading-[0.85] tracking-[-0.03em]">
                charge
              </span>
              <span className="font-display text-[32px] leading-[0.85] tracking-[-0.03em] italic text-lime">
                ly
              </span>
              <span className="inline-block w-2 h-2 bg-lime rounded-sm" />
            </div>
            <p className="font-sans text-[14px] leading-[1.55] text-[rgba(242,239,230,0.7)] max-w-[320px] mb-2">
              La rete di ricarica tra privati per le auto elettriche di Roma. In
              fase di validazione — beta entro fine 2026.
            </p>
            <p className="font-sans text-[13px] leading-[1.55] text-[rgba(242,239,230,0.45)]">
              Chargely è un progetto in fase pilota.
            </p>
          </div>

          <div>
            <div className="font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-lime mb-4">
              Progetto
            </div>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {[
                { label: "Come funziona", href: "#come-funziona" },
                { label: "Quanto guadagno", href: "#guadagno" },
                { label: "FAQ", href: "#faq" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[rgba(242,239,230,0.85)] font-sans text-[14px] leading-[1.5] no-underline hover:text-lime transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-lime mb-4">
              Contatti
            </div>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              <li>
                <a
                  href="mailto:ciao@chargely.it"
                  className="text-[rgba(242,239,230,0.85)] font-sans text-[14px] leading-[1.5] no-underline hover:text-lime transition-colors"
                >
                  ciao@chargely.it
                </a>
              </li>
              <li>
                <span className="text-[rgba(242,239,230,0.85)] font-sans text-[14px] leading-[1.5]">
                  Roma, Italia
                </span>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-lime mb-4">
              Legale
            </div>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {["Privacy policy", "Cookie policy", "Termini"].map((t) => (
                <li key={t}>
                  <a
                    href="#"
                    className="text-[rgba(242,239,230,0.85)] font-sans text-[14px] leading-[1.5] no-underline hover:text-lime transition-colors"
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-6 border-t border-[rgba(242,239,230,0.18)] flex justify-between flex-wrap gap-4 font-mono text-[11px] font-medium tracking-[0.16em] uppercase text-[rgba(242,239,230,0.45)]">
          <span>
            © 2026 Chargely — un esperimento di rete energetica peer-to-peer.
          </span>
          <span>Beta Roma · v1.0</span>
        </div>
      </div>
    </footer>
  );
}
