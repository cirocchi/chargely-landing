"use client";

import { useState, useRef, useEffect, useCallback, forwardRef, type ChangeEvent } from "react";
import { supabase } from "@/lib/supabase";

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

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  latitude: number | null;
  longitude: number | null;
  postalCode: string;
  socketType: string;
  socketLocation: string;
  socketLocationOther: string;
  contractPower: string;
  availability: string;
  bill: File | null;
  privacy: boolean;
  marketing: boolean;
}

interface FieldProps {
  num: string;
  label: string;
  hint?: string;
  error?: string | null;
  children: React.ReactNode;
}

function Field({ num, label, hint, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-baseline justify-between gap-3">
        <label className="font-sans text-[17px] font-medium leading-[1.3] text-ink">
          <span className="font-mono text-[11px] font-medium tracking-[0.16em] text-forest mr-2.5">
            {num} ·
          </span>
          {label}
        </label>
        {error && (
          <span className="font-mono text-[11px] font-medium tracking-[0.1em] text-[#B85C3C] uppercase">
            ↳ {error}
          </span>
        )}
      </div>
      {children}
      {hint && (
        <p className="font-sans text-[13px] leading-[1.5] text-ink/60">{hint}</p>
      )}
    </div>
  );
}

function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
  invalid,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  invalid?: boolean;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-paper rounded-full px-[22px] py-4 font-sans text-base text-ink outline-none transition-shadow focus:ring-4"
      style={{
        border: `1.5px solid ${invalid ? "#B85C3C" : "var(--ink)"}`,
        ...(invalid
          ? { "--tw-ring-color": "rgba(184,92,60,0.18)" } as React.CSSProperties
          : { "--tw-ring-color": "rgba(22,51,31,0.15)" } as React.CSSProperties),
      }}
    />
  );
}

function AddressAutocomplete({
  onPlaceSelect,
  placeholder,
  invalid,
}: {
  value: string;
  onChange: (v: string) => void;
  onPlaceSelect: (place: {
    address: string;
    lat: number | null;
    lng: number | null;
    postalCode: string;
  }) => void;
  placeholder: string;
  invalid?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const onPlaceSelectRef = useRef(onPlaceSelect);
  onPlaceSelectRef.current = onPlaceSelect;

  const initAutocomplete = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const google = (window as any).google;
    if (!google?.maps?.importLibrary || !containerRef.current || initialized.current) return;

    initialized.current = true;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { PlaceAutocompleteElement } = await google.maps.importLibrary("places") as any;

    const el = new PlaceAutocompleteElement({
      includedRegionCodes: ["it"],
      locationBias: { lat: 41.9028, lng: 12.4964, radius: 50000 },
    });

    el.style.cssText = "width:100%;";
    el.setAttribute("placeholder", placeholder);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    el.addEventListener("gmp-select", async (e: any) => {
      const place = e.placePrediction.toPlace();
      await place.fetchFields({
        fields: ["formattedAddress", "location", "addressComponents"],
      });

      const lat = place.location?.lat() ?? null;
      const lng = place.location?.lng() ?? null;
      const address = place.formattedAddress || "";
      let postalCode = "";

      if (place.addressComponents) {
        for (const comp of place.addressComponents) {
          if (comp.types.includes("postal_code")) {
            postalCode = comp.longText;
            break;
          }
        }
      }

      onPlaceSelectRef.current({ address, lat, lng, postalCode });
    });

    containerRef.current?.appendChild(el);
  }, [placeholder]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const google = (window as any).google;
    if (google?.maps?.importLibrary) {
      initAutocomplete();
      return;
    }

    const checkInterval = setInterval(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const g = (window as any).google;
      if (g?.maps?.importLibrary) {
        clearInterval(checkInterval);
        initAutocomplete();
      }
    }, 300);

    return () => clearInterval(checkInterval);
  }, [initAutocomplete]);

  return (
    <div
      ref={containerRef}
      className="address-autocomplete-wrapper w-full"
      style={{
        border: `1.5px solid ${invalid ? "#B85C3C" : "var(--ink)"}`,
        borderRadius: 999,
        overflow: "hidden",
      }}
    />
  );
}

function RadioGrid({
  name,
  options,
  value,
  onChange,
  cols = 2,
}: {
  name: string;
  options: { value: string; label: string; sub?: string }[];
  value: string;
  onChange: (v: string) => void;
  cols?: number;
}) {
  return (
    <div
      className="grid gap-2.5"
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {options.map((o) => {
        const selected = value === o.value;
        return (
          <label
            key={o.value}
            className="cursor-pointer flex gap-3 items-start transition-all"
            style={{
              padding: "14px 18px",
              background: selected ? "var(--lime)" : "var(--paper)",
              border: `1.5px solid ${selected ? "var(--ink)" : "var(--rule-strong)"}`,
              borderRadius: 14,
              boxShadow: selected ? "3px 3px 0 0 var(--ink)" : "none",
            }}
          >
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={selected}
              onChange={() => onChange(o.value)}
              className="sr-only"
            />
            <span
              className="shrink-0 w-[18px] h-[18px] rounded-full mt-0.5 flex items-center justify-center"
              style={{
                background: selected ? "var(--ink)" : "transparent",
                border: "1.5px solid var(--ink)",
              }}
            >
              {selected && (
                <span className="w-1.5 h-1.5 bg-lime rounded-full" />
              )}
            </span>
            <div>
              <div className="font-sans text-[15px] font-medium leading-[1.3] text-ink">
                {o.label}
              </div>
              {o.sub && (
                <div
                  className="font-sans text-[13px] leading-[1.4] text-ink mt-0.5"
                  style={{ opacity: selected ? 0.75 : 0.6 }}
                >
                  {o.sub}
                </div>
              )}
            </div>
          </label>
        );
      })}
    </div>
  );
}

function FileDrop({
  file,
  onChange,
  invalid,
}: {
  file: File | null;
  onChange: (f: File | null) => void;
  invalid?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [drag, setDrag] = useState(false);

  const onSelect = (f: File | undefined) => {
    if (!f) return;
    if (f.size > 5 * 1024 * 1024) {
      alert("Il file supera il limite di 5 MB.");
      return;
    }
    onChange(f);
  };

  return (
    <div>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDrag(true);
        }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDrag(false);
          onSelect(e.dataTransfer.files?.[0]);
        }}
        onClick={() => inputRef.current?.click()}
        className="cursor-pointer flex items-center gap-[18px] transition-all"
        style={{
          background: file
            ? "var(--lime)"
            : drag
              ? "rgba(198,242,77,0.4)"
              : "var(--paper)",
          border: `1.5px ${file || drag ? "solid" : "dashed"} ${invalid ? "#B85C3C" : "var(--ink)"}`,
          borderRadius: 18,
          padding: "28px 24px",
        }}
      >
        <div
          className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-display text-[28px] italic"
          style={{
            background: file ? "var(--ink)" : "var(--bg)",
            color: file ? "var(--lime)" : "var(--forest)",
          }}
        >
          {file ? "✓" : "+"}
        </div>
        <div className="flex-1 min-w-0">
          {file ? (
            <>
              <div className="font-sans text-base font-medium text-ink truncate">
                {file.name}
              </div>
              <div className="font-mono text-[11px] font-medium tracking-[0.1em] uppercase text-ink/70 mt-1.5">
                {Math.round(file.size / 1024)} kB · Allegata
              </div>
            </>
          ) : (
            <>
              <div className="font-sans text-base font-medium text-ink">
                Trascina qui la bolletta o clicca per caricarla
              </div>
              <div className="font-sans text-[13px] text-ink/65 mt-1">
                PDF, JPG o PNG · massimo 5 MB
              </div>
            </>
          )}
        </div>
        {file && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onChange(null);
            }}
            className="bg-transparent border-[1.5px] border-ink rounded-full px-3 py-1.5 cursor-pointer font-mono text-xs font-medium tracking-[0.1em] text-ink uppercase"
          >
            Rimuovi
          </button>
        )}
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          className="hidden"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onSelect(e.target.files?.[0])
          }
        />
      </div>
    </div>
  );
}

function Checkbox({
  checked,
  onChange,
  children,
  required,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="flex gap-3 items-start cursor-pointer py-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <span
        className="shrink-0 w-[22px] h-[22px] rounded-md flex items-center justify-center text-lime text-sm font-bold mt-0.5"
        style={{
          background: checked ? "var(--ink)" : "transparent",
          border: "1.5px solid var(--ink)",
        }}
      >
        {checked && "✓"}
      </span>
      <span className="font-sans text-[15px] leading-[1.5] text-ink">
        {children}
        {required && <span className="text-[#B85C3C]"> *</span>}
      </span>
    </label>
  );
}

function SuccessState() {
  return (
    <div className="bg-forest text-[var(--bg)] rounded-lg p-[64px_48px] max-md:p-[40px_24px] text-center relative overflow-hidden">
      <div className="w-20 h-20 rounded-full bg-lime text-ink inline-flex items-center justify-center font-display text-5xl italic border-2 border-ink shadow-[4px_4px_0_0_var(--ink)] mb-7">
        ✓
      </div>
      <h3 className="font-display text-5xl max-md:text-4xl leading-none tracking-[-0.02em] mb-4">
        Grazie! <em className="italic text-lime">Ci siamo.</em>
      </h3>
      <p className="font-sans text-lg leading-[1.55] mx-auto max-w-[480px] opacity-85 mb-7">
        Abbiamo ricevuto la tua candidatura. Entro{" "}
        <strong className="font-semibold text-lime">48 ore</strong> analizziamo
        la tua bolletta e ti contattiamo con la proposta di tariffa
        personalizzata.
      </p>
      <div className="flex gap-3 justify-center flex-wrap">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-[0.12em] uppercase px-3 py-2 rounded-full bg-lime text-ink border border-ink">
          Email di conferma in arrivo
        </span>
      </div>
    </div>
  );
}

const HostForm = forwardRef<HTMLElement>(function HostForm(_, ref) {
  const [data, setData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    latitude: null,
    longitude: null,
    postalCode: "",
    socketType: "",
    socketLocation: "",
    socketLocationOther: "",
    contractPower: "",
    availability: "",
    bill: null,
    privacy: false,
    marketing: false,
  });
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const update = (k: keyof FormData, v: FormData[keyof FormData]) => {
    setData((d) => ({ ...d, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: null }));
  };

  const validate = () => {
    const err: Record<string, string> = {};
    if (!data.fullName.trim() || data.fullName.trim().split(" ").length < 2)
      err.fullName = "Nome e cognome";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email))
      err.email = "Email non valida";
    if (!/^(\+39\s?)?[0-9\s]{8,14}$/.test(data.phone.replace(/\s/g, "")))
      err.phone = "Telefono non valido";
    if (!data.address.trim()) err.address = "Indirizzo richiesto";
    if (!data.socketType) err.socketType = "Seleziona un'opzione";
    if (!data.socketLocation) err.socketLocation = "Seleziona un'opzione";
    if (data.socketLocation === "other" && !data.socketLocationOther.trim())
      err.socketLocationOther = "Specifica";
    if (!data.contractPower) err.contractPower = "Seleziona un'opzione";
    if (!data.availability) err.availability = "Seleziona un'opzione";
    if (!data.bill) err.bill = "Carica la bolletta";
    if (!data.privacy) err.privacy = "Obbligatorio";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;

    setSubmitting(true);

    try {
      const { data: hostData, error: hostError } = await supabase
        .from("hosts")
        .insert({
          full_name: data.fullName.trim(),
          email: data.email.trim().toLowerCase(),
          phone: data.phone.trim(),
          address: data.address.trim(),
          latitude: data.latitude,
          longitude: data.longitude,
          postal_code: data.postalCode || null,
          socket_type: data.socketType,
          socket_location: data.socketLocation,
          socket_location_notes:
            data.socketLocation === "other"
              ? data.socketLocationOther.trim()
              : null,
          contract_power: data.contractPower === "unknown" ? null : data.contractPower,
          contract_power_unknown: data.contractPower === "unknown",
          availability: data.availability,
          privacy_consent: data.privacy,
          marketing_consent: data.marketing,
        })
        .select("id")
        .single();

      if (hostError) throw hostError;

      if (data.bill && hostData?.id) {
        const ext = data.bill.name.split(".").pop()?.toLowerCase() || "pdf";
        const filePath = `${hostData.id}/${Date.now()}.${ext}`;

        const { error: uploadError } = await supabase.storage
          .from("bills")
          .upload(filePath, data.bill, {
            cacheControl: "3600",
            upsert: false,
          });

        if (uploadError) throw uploadError;

        const fileType = ext === "pdf" ? "pdf" : "image";
        await supabase.from("bills").insert({
          host_id: hostData.id,
          file_path: filePath,
          file_size_kb: Math.round(data.bill.size / 1024),
          file_type: fileType,
        });
      }

      setSubmitted(true);
      if (ref && "current" in ref && ref.current) {
        window.scrollTo({
          top: ref.current.offsetTop - 40,
          behavior: "smooth",
        });
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Errore durante l'invio";
      if (message.includes("duplicate key")) {
        setSubmitError(
          "Questa email è già registrata. Se hai bisogno di aiuto, scrivici a ciao@chargely.it"
        );
      } else {
        setSubmitError(
          "Si è verificato un errore. Riprova tra qualche istante."
        );
      }
      console.error("Submit error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      ref={ref}
      id="form"
      className="bg-bg py-[clamp(72px,9vw,120px)] scroll-mt-20"
    >
      <div className="max-w-[1240px] mx-auto px-8 max-md:px-5">
        <div className="max-w-[760px] mx-auto">
          {!submitted ? (
            <>
              <div className="text-center max-w-[620px] mx-auto mb-14">
                <div className="flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-forest mb-[18px] justify-center">
                  <span className="text-ink/55">N°06</span>
                  <span className="w-7 h-px bg-forest/60" />
                  <span>Form di iscrizione</span>
                </div>
                <h2 className="font-display text-[clamp(38px,5.4vw,64px)] leading-[1.0] tracking-[-0.02em] mb-[18px] text-balance">
                  Candidati come host.
                  <br />
                  <em className="italic text-forest">
                    Gratis e in 3 minuti.
                  </em>
                </h2>
                <p className="font-sans text-lg leading-[1.55] text-ink/[0.78]">
                  Compila il form sotto. Ti contattiamo entro 48 ore con una
                  proposta di tariffa personalizzata sulla tua bolletta.
                </p>
              </div>

              <form
                onSubmit={submit}
                className="bg-paper rounded-xl border border-rule p-[44px_40px] max-md:p-6 flex flex-col gap-9 shadow-[0_30px_80px_-40px_rgba(13,31,20,0.25)]"
              >
                {/* Part 1: Anagrafica */}
                <div className="flex flex-col gap-6">
                  <div className="font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-forest border-b border-rule pb-3">
                    Parte 1 · Tu
                  </div>
                  <Field num="01" label="Nome e cognome" error={errors.fullName}>
                    <TextInput
                      value={data.fullName}
                      onChange={(v) => update("fullName", v)}
                      placeholder="Es. Giulia Romano"
                      invalid={!!errors.fullName}
                    />
                  </Field>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field num="02" label="Email" error={errors.email}>
                      <TextInput
                        type="email"
                        value={data.email}
                        onChange={(v) => update("email", v)}
                        placeholder="giulia@email.it"
                        invalid={!!errors.email}
                      />
                    </Field>
                    <Field num="03" label="Telefono" error={errors.phone}>
                      <TextInput
                        type="tel"
                        value={data.phone}
                        onChange={(v) => update("phone", v)}
                        placeholder="+39 333 1234567"
                        invalid={!!errors.phone}
                      />
                    </Field>
                  </div>
                </div>

                {/* Part 2: Presa */}
                <div className="flex flex-col gap-6">
                  <div className="font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-forest border-b border-rule pb-3">
                    Parte 2 · La tua presa
                  </div>
                  <Field
                    num="04"
                    label="Indirizzo completo"
                    error={errors.address}
                    hint="Inizia a digitare per usare l'autocomplete. Non lo pubblichiamo mai."
                  >
                    <AddressAutocomplete
                      value={data.address}
                      onChange={(v) => update("address", v)}
                      onPlaceSelect={({ address, lat, lng, postalCode }) => {
                        setData((d) => ({
                          ...d,
                          address,
                          latitude: lat,
                          longitude: lng,
                          postalCode,
                        }));
                        if (errors.address) setErrors((e) => ({ ...e, address: null }));
                      }}
                      placeholder="Via, numero civico, Roma"
                      invalid={!!errors.address}
                    />
                  </Field>
                  <Field
                    num="05"
                    label="Che tipo di presa metti a disposizione?"
                    error={errors.socketType}
                  >
                    <RadioGrid
                      name="socketType"
                      options={SOCKET_TYPES}
                      value={data.socketType}
                      onChange={(v) => update("socketType", v)}
                    />
                  </Field>
                  <Field
                    num="06"
                    label="Dove si trova la presa?"
                    error={errors.socketLocation}
                  >
                    <RadioGrid
                      name="socketLocation"
                      options={SOCKET_LOCATIONS}
                      value={data.socketLocation}
                      onChange={(v) => update("socketLocation", v)}
                    />
                    {data.socketLocation === "other" && (
                      <div className="mt-3">
                        <TextInput
                          value={data.socketLocationOther}
                          onChange={(v) => update("socketLocationOther", v)}
                          placeholder="Descrivi brevemente dove si trova"
                          invalid={!!errors.socketLocationOther}
                        />
                      </div>
                    )}
                  </Field>
                  <Field
                    num="07"
                    label="Potenza contrattuale del tuo contatore"
                    error={errors.contractPower}
                    hint="Lo trovi in alto a destra sulla bolletta, voce 'Potenza disponibile'."
                  >
                    <RadioGrid
                      name="contractPower"
                      options={CONTRACT_POWER}
                      value={data.contractPower}
                      onChange={(v) => update("contractPower", v)}
                      cols={3}
                    />
                  </Field>
                  <Field
                    num="08"
                    label="Quando puoi rendere disponibile la presa?"
                    error={errors.availability}
                  >
                    <RadioGrid
                      name="availability"
                      options={AVAILABILITY}
                      value={data.availability}
                      onChange={(v) => update("availability", v)}
                    />
                  </Field>
                </div>

                {/* Part 3: Bolletta */}
                <div className="flex flex-col gap-[18px]">
                  <div className="font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-forest border-b border-rule pb-3">
                    Parte 3 · La tua bolletta
                  </div>
                  <Field
                    num="09"
                    label="Carica foto o PDF dell'ultima bolletta"
                    error={errors.bill}
                  >
                    <FileDrop
                      file={data.bill}
                      onChange={(f) => update("bill", f)}
                      invalid={!!errors.bill}
                    />
                  </Field>
                  <div className="bg-bg border border-rule rounded-[10px] p-[16px_20px] flex gap-3.5 items-start">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-forest text-lime inline-flex items-center justify-center text-base">
                      🔒
                    </span>
                    <p className="font-sans text-[14px] leading-[1.5] text-ink/[0.78]">
                      La usiamo{" "}
                      <strong className="font-semibold">solo</strong> per
                      calcolare il tuo costo reale al kWh. Non la condividiamo
                      con nessuno. Cancellata su richiesta in qualsiasi momento.
                    </p>
                  </div>
                </div>

                {/* Consensi */}
                <div className="border-t border-rule pt-6">
                  <Checkbox
                    checked={data.privacy}
                    onChange={(v) => update("privacy", v)}
                    required
                  >
                    Ho letto e accetto la{" "}
                    <a
                      href="#"
                      className="text-forest underline"
                      onClick={(e) => e.preventDefault()}
                    >
                      privacy policy
                    </a>
                    .
                  </Checkbox>
                  <Checkbox
                    checked={data.marketing}
                    onChange={(v) => update("marketing", v)}
                  >
                    Voglio ricevere aggiornamenti sul progetto via email
                    (opzionale).
                  </Checkbox>
                </div>

                {/* Submit */}
                <div className="flex flex-col gap-3.5 items-stretch">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-lime text-ink border-[1.5px] border-ink rounded-full py-5 px-7 font-sans text-[17px] font-semibold shadow-[4px_4px_0_0_var(--ink)] inline-flex items-center justify-center gap-3 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-wait hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0_0_var(--ink)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_0_var(--ink)]"
                  >
                    {submitting
                      ? "Invio in corso…"
                      : "Invia la mia candidatura come host"}
                    {!submitting && (
                      <span className="font-display italic text-xl">→</span>
                    )}
                  </button>
                  {submitError && (
                    <p className="font-sans text-[13px] leading-[1.5] text-[#B85C3C] text-center">
                      {submitError}
                    </p>
                  )}
                  {Object.values(errors).some(Boolean) && (
                    <p className="font-sans text-[13px] leading-[1.5] text-[#B85C3C] text-center">
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

export default HostForm;
