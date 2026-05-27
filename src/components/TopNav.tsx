"use client";

export default function TopNav({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <nav className="sticky top-0 z-50 bg-[rgba(242,239,230,0.85)] backdrop-blur-xl border-b border-rule">
      <div className="max-w-[1240px] mx-auto px-8 max-md:px-5 flex items-center justify-between h-16">
        <a
          href="#top"
          className="flex items-baseline gap-1 no-underline text-ink"
        >
          <span className="font-display text-[28px] leading-[0.85] tracking-[-0.03em]">
            charge
          </span>
          <span className="font-display text-[28px] leading-[0.85] tracking-[-0.03em] italic text-forest">
            ly
          </span>
          <span className="inline-block w-1.5 h-1.5 bg-lime rounded-sm" />
        </a>

        <div className="flex items-center gap-6">
          <a
            href="#come-funziona"
            className="hidden md:inline font-mono text-[11px] font-medium tracking-[0.16em] uppercase text-ink/70 no-underline hover:text-ink transition-colors"
          >
            Come funziona
          </a>
          <a
            href="#guadagno"
            className="hidden md:inline font-mono text-[11px] font-medium tracking-[0.16em] uppercase text-ink/70 no-underline hover:text-ink transition-colors"
          >
            Guadagno
          </a>
          <a
            href="#faq"
            className="hidden md:inline font-mono text-[11px] font-medium tracking-[0.16em] uppercase text-ink/70 no-underline hover:text-ink transition-colors"
          >
            FAQ
          </a>
          <a
            href="#form"
            className="inline-flex items-center gap-2.5 font-sans text-[13px] font-semibold px-4 py-2.5 bg-lime text-ink border-[1.5px] border-ink rounded-full shadow-[3px_3px_0_0_var(--ink)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0_0_var(--ink)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_0_var(--ink)] transition-all no-underline"
          >
            Diventa host
            <span className="font-display italic text-lg">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
