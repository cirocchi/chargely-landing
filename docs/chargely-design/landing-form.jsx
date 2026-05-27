// Section 6 — Form di iscrizione (cuore della pagina)
// React useState-driven form with inline validation, file upload, and success state.

const SOCKET_TYPES = [
  { value: "schuko", label: "Presa Schuko standard", sub: "la classica presa di casa" },
  { value: "cee_industrial", label: "Presa industriale", sub: "CEE blu o rossa" },
  { value: "wallbox_3.7", label: "Wallbox 3,7 kW" },
  { value: "wallbox_7.4", label: "Wallbox 7,4 kW" },
  { value: "wallbox_11", label: "Wallbox 11 kW" },
  { value: "wallbox_22", label: "Wallbox 22 kW" },
  { value: "unknown", label: "Non lo so", sub: "ci pensiamo noi a capirlo insieme" },
];
const SOCKET_LOCATIONS = [
  { value: "private_box", label: "Box auto privato" },
  { value: "private_driveway", label: "Vialetto o cortile privato" },
  { value: "condo_parking", label: "Posto auto condominiale" },
  { value: "ground_floor_garage", label: "Garage al piano terra" },
  { value: "external_streetside", label: "Presa esterna sotto casa" },
  { value: "other", label: "Altro" },
];
const CONTRACT_POWER = [
  { value: "3", label: "3 kW" },
  { value: "4.5", label: "4,5 kW" },
  { value: "6", label: "6 kW" },
  { value: "6+", label: "Più di 6 kW" },
  { value: "unknown", label: "Non lo so" },
];
const AVAILABILITY = [
  { value: "day", label: "Di giorno", sub: "mentre sono al lavoro" },
  { value: "night", label: "Di notte" },
  { value: "both", label: "Sempre" },
  { value: "weekend", label: "Solo nei weekend" },
];

const Field = ({ num, label, hint, error, children }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
      <label style={{ font: "500 17px/1.3 var(--sans)", color: "var(--ink)" }}>
        <span className="mono" style={{
          font: "500 11px/1 var(--mono)", letterSpacing: "0.16em", color: "var(--forest)",
          marginRight: 10,
        }}>{num} ·</span>
        {label}
      </label>
      {error && (
        <span className="mono" style={{
          font: "500 11px/1 var(--mono)", letterSpacing: "0.1em",
          color: "#B85C3C", textTransform: "uppercase",
        }}>↳ {error}</span>
      )}
    </div>
    {children}
    {hint && (
      <p style={{
        margin: 0, font: "400 13px/1.5 var(--sans)",
        color: "var(--ink)", opacity: 0.6,
      }}>{hint}</p>
    )}
  </div>
);

const TextInput = ({ value, onChange, placeholder, type = "text", invalid }) => (
  <input
    type={type} value={value || ""}
    onChange={e => onChange(e.target.value)}
    placeholder={placeholder}
    style={{
      width: "100%",
      background: "var(--paper)",
      border: `1.5px solid ${invalid ? "#B85C3C" : "var(--ink)"}`,
      borderRadius: 999,
      padding: "16px 22px",
      font: "400 16px/1.3 var(--sans)",
      color: "var(--ink)",
      outline: "none",
      transition: "box-shadow .15s ease",
    }}
    onFocus={e => e.target.style.boxShadow = `0 0 0 4px ${invalid ? "rgba(184,92,60,0.18)" : "rgba(22,51,31,0.15)"}`}
    onBlur={e => e.target.style.boxShadow = "none"}
  />
);

const RadioGrid = ({ name, options, value, onChange, cols = 2 }) => (
  <div style={{
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
    gap: 10,
  }}>
    {options.map(o => {
      const selected = value === o.value;
      return (
        <label key={o.value} style={{
          cursor: "pointer", display: "flex", gap: 12, alignItems: "flex-start",
          padding: "14px 18px",
          background: selected ? "var(--lime)" : "var(--paper)",
          border: `1.5px solid ${selected ? "var(--ink)" : "var(--rule-strong)"}`,
          borderRadius: 14,
          boxShadow: selected ? "3px 3px 0 0 var(--ink)" : "none",
          transition: "all .15s ease",
        }}>
          <input type="radio" name={name} value={o.value} checked={selected} onChange={() => onChange(o.value)}
            style={{ position: "absolute", opacity: 0, pointerEvents: "none" }} />
          <span style={{
            flex: "0 0 auto", width: 18, height: 18, borderRadius: 999,
            background: selected ? "var(--ink)" : "transparent",
            border: `1.5px solid var(--ink)`,
            marginTop: 2,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {selected && <span style={{ width: 6, height: 6, background: "var(--lime)", borderRadius: 999 }}></span>}
          </span>
          <div>
            <div style={{ font: "500 15px/1.3 var(--sans)", color: "var(--ink)" }}>{o.label}</div>
            {o.sub && (
              <div style={{ font: "400 13px/1.4 var(--sans)", color: "var(--ink)", opacity: selected ? 0.75 : 0.6, marginTop: 2 }}>
                {o.sub}
              </div>
            )}
          </div>
        </label>
      );
    })}
  </div>
);

const FileDrop = ({ file, onChange, invalid }) => {
  const inputRef = React.useRef(null);
  const [drag, setDrag] = React.useState(false);
  const onSelect = (f) => {
    if (!f) return;
    if (f.size > 5 * 1024 * 1024) { onChange({ error: "Massimo 5 MB", name: f.name }); return; }
    onChange({ name: f.name, size: f.size, type: f.type });
  };
  return (
    <div>
      <div
        onDragOver={e => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={e => { e.preventDefault(); setDrag(false); onSelect(e.dataTransfer.files?.[0]); }}
        onClick={() => inputRef.current?.click()}
        style={{
          cursor: "pointer",
          background: file ? "var(--lime)" : (drag ? "rgba(198,242,77,0.4)" : "var(--paper)"),
          border: `1.5px ${file || drag ? "solid" : "dashed"} ${invalid ? "#B85C3C" : "var(--ink)"}`,
          borderRadius: 18,
          padding: "28px 24px",
          display: "flex", alignItems: "center", gap: 18,
          transition: "all .15s ease",
        }}>
        <div style={{
          flex: "0 0 auto", width: 48, height: 48, borderRadius: 12,
          background: file ? "var(--ink)" : "var(--bg)",
          color: file ? "var(--lime)" : "var(--forest)",
          display: "flex", alignItems: "center", justifyContent: "center",
          font: "400 28px/1 var(--display)", fontStyle: "italic",
        }}>
          {file ? "✓" : "+"}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          {file ? (
            <>
              <div style={{ font: "500 16px/1.3 var(--sans)", color: "var(--ink)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{file.name}</div>
              <div className="mono" style={{ font: "500 11px/1 var(--mono)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink)", opacity: 0.7, marginTop: 6 }}>
                {file.error ? file.error : `${Math.round((file.size || 0) / 1024)} kB · Allegata`}
              </div>
            </>
          ) : (
            <>
              <div style={{ font: "500 16px/1.3 var(--sans)", color: "var(--ink)" }}>
                Trascina qui la bolletta o clicca per caricarla
              </div>
              <div style={{ font: "400 13px/1.4 var(--sans)", color: "var(--ink)", opacity: 0.65, marginTop: 4 }}>
                PDF, JPG o PNG · massimo 5 MB
              </div>
            </>
          )}
        </div>
        {file && (
          <button onClick={e => { e.stopPropagation(); onChange(null); }} style={{
            background: "transparent", border: "1.5px solid var(--ink)", borderRadius: 999,
            padding: "6px 12px", cursor: "pointer", font: "500 12px/1 var(--mono)", letterSpacing: "0.1em",
            color: "var(--ink)", textTransform: "uppercase",
          }}>Rimuovi</button>
        )}
        <input ref={inputRef} type="file" accept=".pdf,.jpg,.jpeg,.png" style={{ display: "none" }}
          onChange={e => onSelect(e.target.files?.[0])} />
      </div>
    </div>
  );
};

const Checkbox = ({ checked, onChange, children, required }) => (
  <label style={{
    display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer",
    padding: "12px 0",
  }}>
    <input type="checkbox" checked={!!checked} onChange={e => onChange(e.target.checked)}
      style={{ position: "absolute", opacity: 0, pointerEvents: "none" }} />
    <span style={{
      flex: "0 0 auto", width: 22, height: 22, borderRadius: 6,
      background: checked ? "var(--ink)" : "transparent",
      border: "1.5px solid var(--ink)",
      display: "flex", alignItems: "center", justifyContent: "center",
      color: "var(--lime)", font: "700 14px/1 var(--sans)",
      marginTop: 1,
    }}>{checked && "✓"}</span>
    <span style={{ font: "400 15px/1.5 var(--sans)", color: "var(--ink)" }}>
      {children}
      {required && <span style={{ color: "#B85C3C" }}> *</span>}
    </span>
  </label>
);

const SuccessState = () => (
  <div style={{
    background: "var(--forest)",
    color: "var(--bg)",
    borderRadius: 8,
    padding: "64px 48px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  }}>
    <div style={{
      width: 80, height: 80, borderRadius: 999,
      background: "var(--lime)", color: "var(--ink)",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      font: "400 48px/1 var(--display)", fontStyle: "italic",
      border: "2px solid var(--ink)",
      boxShadow: "4px 4px 0 0 var(--ink)",
      marginBottom: 28,
    }}>✓</div>
    <h3 style={{
      font: "400 48px/1 var(--display)", margin: "0 0 16px",
      letterSpacing: "-0.02em",
    }}>
      Grazie! <em style={{ fontStyle: "italic", color: "var(--lime)" }}>Ci siamo.</em>
    </h3>
    <p style={{
      font: "400 18px/1.55 var(--sans)", margin: "0 auto 28px",
      maxWidth: 480, opacity: 0.85, textWrap: "pretty",
    }}>
      Abbiamo ricevuto la tua candidatura. Entro <strong style={{ fontWeight: 600, color: "var(--lime)" }}>48 ore</strong> analizziamo la
      tua bolletta e ti contattiamo con la proposta di tariffa personalizzata.
    </p>
    <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
      <Pill tone="lime">Posizione · #48 a Roma</Pill>
      <Pill tone="default" >
        <span style={{ color: "var(--bg)", opacity: 0.85 }}>Email di conferma in arrivo</span>
      </Pill>
    </div>
  </div>
);

const FormSection = React.forwardRef((_, ref) => {
  const [data, setData] = React.useState({
    fullName: "", email: "", phone: "", address: "",
    socketType: "", socketLocation: "", socketLocationOther: "",
    contractPower: "", availability: "",
    bill: null,
    privacy: false, marketing: false,
  });
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const update = (k, v) => {
    setData(d => ({ ...d, [k]: v }));
    if (errors[k]) setErrors(e => ({ ...e, [k]: null }));
  };

  const validate = () => {
    const err = {};
    if (!data.fullName.trim() || data.fullName.trim().split(" ").length < 2) err.fullName = "Nome e cognome";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) err.email = "Email non valida";
    if (!/^(\+39\s?)?[0-9\s]{8,14}$/.test(data.phone.replace(/\s/g, ""))) err.phone = "Telefono non valido";
    if (!data.address.trim()) err.address = "Indirizzo richiesto";
    if (!data.socketType) err.socketType = "Seleziona un'opzione";
    if (!data.socketLocation) err.socketLocation = "Seleziona un'opzione";
    if (data.socketLocation === "other" && !data.socketLocationOther.trim()) err.socketLocationOther = "Specifica";
    if (!data.contractPower) err.contractPower = "Seleziona un'opzione";
    if (!data.availability) err.availability = "Seleziona un'opzione";
    if (!data.bill || data.bill.error) err.bill = "Carica la bolletta";
    if (!data.privacy) err.privacy = "Obbligatorio";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) {
      // scroll to first error
      const first = document.querySelector(".form-error-anchor");
      first?.scrollIntoView?.({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.scrollTo?.({ top: ref.current?.offsetTop - 40, behavior: "smooth" });
    }, 900);
  };

  return (
    <section ref={ref} id="form" data-screen-label="06 Form" style={{
      background: "var(--bg)", padding: "clamp(72px, 9vw, 120px) 0", scrollMarginTop: 80,
    }}>
      <div className="container">
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {!submitted ? (
            <>
              <SectionHeader
                num="06"
                eyebrow="Form di iscrizione"
                title={<>Candidati come host.<br/><em style={{ fontStyle: "italic", color: "var(--forest)" }}>Gratis e in 3 minuti.</em></>}
                align="center"
                maxWidth={620}
              >
                Compila il form sotto. Ti contattiamo entro 48 ore con una proposta
                di tariffa personalizzata sulla tua bolletta.
              </SectionHeader>

              <form onSubmit={submit} style={{
                background: "var(--paper)",
                borderRadius: 12,
                border: "1px solid var(--rule)",
                padding: "44px 40px",
                display: "flex", flexDirection: "column", gap: 36,
                boxShadow: "0 30px 80px -40px rgba(13,31,20,0.25)",
              }}>
                {/* Group 1: Anagrafica */}
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  <div className="mono" style={{
                    font: "500 11px/1 var(--mono)", letterSpacing: "0.18em", textTransform: "uppercase",
                    color: "var(--forest)", borderBottom: "1px solid var(--rule)", paddingBottom: 12,
                  }}>Parte 1 · Tu</div>
                  <div className={errors.fullName ? "form-error-anchor" : ""}>
                    <Field num="01" label="Nome e cognome" error={errors.fullName}>
                      <TextInput value={data.fullName} onChange={v => update("fullName", v)} placeholder="Es. Giulia Romano" invalid={errors.fullName}/>
                    </Field>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                    <Field num="02" label="Email" error={errors.email}>
                      <TextInput type="email" value={data.email} onChange={v => update("email", v)} placeholder="giulia@email.it" invalid={errors.email}/>
                    </Field>
                    <Field num="03" label="Telefono" error={errors.phone}>
                      <TextInput type="tel" value={data.phone} onChange={v => update("phone", v)} placeholder="+39 333 1234567" invalid={errors.phone}/>
                    </Field>
                  </div>
                </div>

                {/* Group 2: Indirizzo + presa */}
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  <div className="mono" style={{
                    font: "500 11px/1 var(--mono)", letterSpacing: "0.18em", textTransform: "uppercase",
                    color: "var(--forest)", borderBottom: "1px solid var(--rule)", paddingBottom: 12,
                  }}>Parte 2 · La tua presa</div>
                  <Field num="04" label="Indirizzo completo" error={errors.address} hint="Iniziamo a digitare per usare l'autocomplete. Non lo pubblichiamo mai.">
                    <TextInput value={data.address} onChange={v => update("address", v)} placeholder="Via, numero civico, Roma" invalid={errors.address}/>
                  </Field>
                  <Field num="05" label="Che tipo di presa metti a disposizione?" error={errors.socketType}>
                    <RadioGrid name="socketType" options={SOCKET_TYPES} value={data.socketType} onChange={v => update("socketType", v)} />
                  </Field>
                  <Field num="06" label="Dove si trova la presa?" error={errors.socketLocation}>
                    <RadioGrid name="socketLocation" options={SOCKET_LOCATIONS} value={data.socketLocation} onChange={v => update("socketLocation", v)} />
                    {data.socketLocation === "other" && (
                      <div style={{ marginTop: 12 }}>
                        <TextInput value={data.socketLocationOther} onChange={v => update("socketLocationOther", v)} placeholder="Descrivi brevemente dove si trova" invalid={errors.socketLocationOther}/>
                      </div>
                    )}
                  </Field>
                  <Field num="07" label="Potenza contrattuale del tuo contatore" error={errors.contractPower} hint="Lo trovi in alto a destra sulla bolletta, voce 'Potenza disponibile'.">
                    <RadioGrid name="contractPower" options={CONTRACT_POWER} value={data.contractPower} onChange={v => update("contractPower", v)} cols={3} />
                  </Field>
                  <Field num="08" label="Quando puoi rendere disponibile la presa?" error={errors.availability}>
                    <RadioGrid name="availability" options={AVAILABILITY} value={data.availability} onChange={v => update("availability", v)} />
                  </Field>
                </div>

                {/* Group 3: Bolletta */}
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div className="mono" style={{
                    font: "500 11px/1 var(--mono)", letterSpacing: "0.18em", textTransform: "uppercase",
                    color: "var(--forest)", borderBottom: "1px solid var(--rule)", paddingBottom: 12,
                  }}>Parte 3 · La tua bolletta</div>
                  <Field num="09" label="Carica foto o PDF dell'ultima bolletta" error={errors.bill}>
                    <FileDrop file={data.bill} onChange={v => update("bill", v)} invalid={errors.bill}/>
                  </Field>
                  <div style={{
                    background: "var(--bg)", border: "1px solid var(--rule)", borderRadius: 10,
                    padding: "16px 20px", display: "flex", gap: 14, alignItems: "flex-start",
                  }}>
                    <span style={{
                      flex: "0 0 auto", width: 28, height: 28, borderRadius: 999,
                      background: "var(--forest)", color: "var(--lime)",
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      font: "400 16px/1 var(--display)", fontStyle: "italic",
                    }}>🔒</span>
                    <p style={{ margin: 0, font: "400 14px/1.5 var(--sans)", color: "var(--ink)", opacity: 0.78 }}>
                      La usiamo <strong style={{ fontWeight: 600 }}>solo</strong> per calcolare il
                      tuo costo reale al kWh. Non la condividiamo con nessuno. Cancellata su
                      richiesta in qualsiasi momento.
                    </p>
                  </div>
                </div>

                {/* Consensi */}
                <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 24 }}>
                  <Checkbox checked={data.privacy} onChange={v => update("privacy", v)} required>
                    Ho letto e accetto la <a href="#" style={{ color: "var(--forest)", textDecoration: "underline" }}>privacy policy</a>.
                  </Checkbox>
                  <Checkbox checked={data.marketing} onChange={v => update("marketing", v)}>
                    Voglio ricevere aggiornamenti sul progetto via email (opzionale).
                  </Checkbox>
                </div>

                {/* Submit */}
                <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "stretch" }}>
                  <button type="submit" disabled={submitting} style={{
                    background: "var(--lime)", color: "var(--ink)",
                    border: "1.5px solid var(--ink)", borderRadius: 999,
                    padding: "20px 28px",
                    font: "600 17px/1 var(--sans)",
                    cursor: submitting ? "wait" : "pointer",
                    boxShadow: "4px 4px 0 0 var(--ink)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 12,
                    transition: "all .15s ease",
                    opacity: submitting ? 0.7 : 1,
                  }}>
                    {submitting ? "Invio in corso…" : "Invia la mia candidatura come host"}
                    {!submitting && <span className="arrow">→</span>}
                  </button>
                  {Object.keys(errors).length > 0 && (
                    <p style={{
                      margin: 0, font: "400 13px/1.5 var(--sans)", color: "#B85C3C",
                      textAlign: "center",
                    }}>
                      Controlla i campi segnalati e riprova.
                    </p>
                  )}
                </div>
              </form>
            </>
          ) : (
            <SuccessState />
          )}
        </div>
      </div>
    </section>
  );
});

Object.assign(window, { FormSection });
