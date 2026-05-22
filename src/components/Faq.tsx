"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "Devo avere per forza una wallbox?",
    a: "No. Anche una semplice presa Schuko di casa va bene, purché sia raggiungibile da un'auto parcheggiata. La ricarica sarà più lenta (10-15 km di autonomia ogni ora), ma per chi lascia l'auto tutta la notte è perfetta. Verifichiamo noi che la tua presa e il tuo impianto reggano un uso prolungato — senza costi a tuo carico.",
  },
  {
    q: "È legale offrire ricariche da privato?",
    a: "Sì, l'uso occasionale tra privati è consentito. Per chi avrà volumi più alti, stiamo predisponendo una soluzione che gestisce automaticamente gli aspetti fiscali (regime forfettario semplificato o partita IVA dedicata). Te ne parliamo nel dettaglio quando ti contattiamo.",
  },
  {
    q: "Chi mi paga e come?",
    a: "I driver pagano direttamente tramite app al momento della ricarica. Tu ricevi un accredito mensile sul tuo conto, al netto della commissione di piattaforma. Riceverai un riepilogo dettagliato di ogni ricarica con i kWh erogati e il margine generato.",
  },
  {
    q: "E se qualcuno danneggia il mio impianto?",
    a: "Ogni ricarica sarà coperta da un'assicurazione inclusa nel servizio. Inoltre verifichiamo a monte che l'impianto sia a norma, così eventuali criticità emergono prima.",
  },
  {
    q: "Devo modificare il mio impianto elettrico?",
    a: "Nella maggior parte dei casi no. Verifichiamo che la tua presa o wallbox attuale sia adeguata. Se servono modifiche minori (es. una protezione aggiuntiva), ti mettiamo in contatto con installatori partner che abbiamo già selezionato.",
  },
  {
    q: "Quanto tempo richiede gestire le ricariche?",
    a: "Pochissimo. L'app gestisce prenotazione, sblocco e pagamento in autonomia. Tu intervieni solo se vuoi modificare gli orari di disponibilità o mettere la presa in pausa per un periodo.",
  },
  {
    q: "Quando partirà davvero il servizio?",
    a: "Stiamo raccogliendo le prime adesioni a Roma in questa fase di validazione. L'app sarà disponibile entro fine 2026. Chi si iscrive ora avrà priorità sulla mappa e tariffe agevolate sulla commissione di piattaforma per i primi 12 mesi.",
  },
];

function FaqItem({
  q,
  a,
  open,
  onToggle,
  idx,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  idx: number;
}) {
  return (
    <div className="border-b border-rule">
      <button
        onClick={onToggle}
        className="w-full text-left bg-transparent border-none py-6 cursor-pointer flex gap-5 items-center justify-between text-ink"
      >
        <span className="flex gap-[18px] items-baseline flex-1">
          <span className="font-mono text-xs font-medium tracking-[0.16em] text-forest shrink-0">
            {String(idx + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-[22px] leading-[1.25] tracking-[-0.01em] text-balance">
            {q}
          </span>
        </span>
        <span
          className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-display text-[22px] italic transition-all"
          style={{
            background: open ? "var(--lime)" : "transparent",
            border: "1.5px solid var(--ink)",
          }}
        >
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="pl-[50px] pr-14 max-md:pl-0 max-md:pr-0 pb-7 font-sans text-base leading-[1.6] text-ink/[0.82] max-w-[760px]">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-paper py-[clamp(72px,9vw,120px)] relative scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-8 max-md:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] gap-16 items-start">
          <div className="lg:sticky lg:top-[100px]">
            <div className="flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-forest mb-[18px]">
              <span className="text-ink/55">N°07</span>
              <span className="w-7 h-px bg-forest/60" />
              <span>Domande frequenti</span>
            </div>
            <h2 className="font-display text-[clamp(38px,5.4vw,60px)] leading-[0.98] tracking-[-0.02em] mb-6 text-balance">
              Tutto quello
              <br />
              che vorresti
              <br />
              <em className="italic text-forest">chiederci.</em>
            </h2>
            <p className="font-sans text-base leading-[1.55] text-ink/75 mb-5">
              Se la tua domanda non è qui, scrivici. Ti rispondiamo entro 24
              ore.
            </p>
            <a
              href="mailto:ciao@chargely.it"
              className="inline-flex items-center gap-2.5 font-sans text-[13px] font-semibold px-[18px] py-3 bg-transparent text-ink border-[1.5px] border-ink rounded-full hover:bg-ink hover:text-[var(--bg)] transition-all no-underline"
            >
              ciao@chargely.it
              <span className="font-display italic text-lg">→</span>
            </a>
          </div>
          <div>
            {FAQ_ITEMS.map((it, i) => (
              <FaqItem
                key={i}
                idx={i}
                q={it.q}
                a={it.a}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
