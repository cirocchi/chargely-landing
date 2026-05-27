# Brief Landing Page — Rete P2P di Ricarica EV a Roma

> Documento di brief per designer e sviluppatore frontend
> Versione: 1.0 — Maggio 2026

---

## 1. Contesto del progetto

Stiamo costruendo una piattaforma peer-to-peer che mette in contatto possessori di wallbox o prese domestiche (host) con possessori di auto elettriche che hanno bisogno di ricaricare (driver). Il modello è simile ad Airbnb, ma per la ricarica EV.

**Fase attuale:** validazione della domanda lato host. Prima di costruire l'app, vogliamo verificare che esista interesse reale da parte di privati a mettere a disposizione la propria presa/wallbox in cambio di un guadagno.

**Strumento:** landing page collegata a Supabase, che permette agli host potenziali di registrarsi, indicare la propria posizione, caricare una bolletta elettrica e ricevere una proposta personalizzata di tariffa di vendita al kWh.

---

## 2. Città di lancio: Roma

Scelta basata su dati:

- Il Lazio è la prima regione italiana per parco circolante di auto elettriche (20,17% del totale nazionale)
- Roma da sola assorbe quasi tutto il parco regionale
- La rete pubblica di ricarica romana è sottodimensionata rispetto alla domanda
- La maggior parte dei condomini romani non ha box auto, quindi molti EV driver non hanno modo di ricaricare a casa
- Accesso ZTL gratuito per veicoli elettrici → incentivo all'acquisto già in atto

Il "dolore" del driver EV romano è significativamente più alto di quello milanese, quindi la disponibilità a usare host privati è più alta.

---

## 3. Obiettivo della landing page

**Obiettivo unico:** raccogliere iscrizioni di host potenziali a Roma, completi di dati anagrafici, indirizzo geolocalizzato e bolletta elettrica, in modo da poterli ricontattare con una proposta di tariffa personalizzata.

**Soglie di validazione:**
- 30 host iscritti in 30 giorni = buon segnale, si procede
- 50+ host in 60 giorni = via libera allo sviluppo MVP
- Meno di 10 in 60 giorni = il valore proposto non funziona, pivot

---

## 4. Target utente (per la landing)

**Profilo primario: l'host potenziale.**

- Età: 30-70 anni
- Profilo: chiunque abbia una presa elettrica raggiungibile da un'auto parcheggiata. Include proprietari di casa con vialetto, box auto, posto auto privato in cortile condominiale, garage al piano terra con presa al muro, presa accessibile sotto una finestra al piano terra, cantina o magazzino con accesso veicolare
- Tipo di presa: dalla semplice Schuko domestica fino alla wallbox dedicata
- Non serve possedere un'auto elettrica per essere host
- Sensibile al tema risparmio e sostenibilità
- Tecnologicamente medio: usa smartphone e app di servizi (Telepass, banche, food delivery) ma non è early adopter spinto

**Importante:** il messaggio deve essere inclusivo. La maggior parte degli host potenziali non ha una wallbox, ha solo una presa Schuko. Non dobbiamo escluderli — anzi, sono il segmento più ampio e meno servito dalla concorrenza.

**Tono di comunicazione:** concreto, fiducioso, italiano semplice. Mai gergo da startup, mai inglesismi inutili. L'utente deve capire in 5 secondi: cosa offriamo, perché conviene, cosa deve fare.

---

## 5. Struttura della landing page

### Sezione 1 — Hero

**Headline:** Hai una presa elettrica raggiungibile da un'auto? Trasformala in un guadagno extra.

**Sottotitolo:** Wallbox, presa Schuko in garage, in cortile, nel vialetto, sotto casa: se un'auto elettrica può collegarsi, puoi diventare host. Stiamo costruendo a Roma la prima rete di ricarica per auto elettriche tra privati. Analizziamo la tua bolletta e ti diciamo quanto puoi guadagnare.

**CTA primaria:** Calcola il tuo guadagno potenziale → (scroll al form)

**Visual suggerito:** mockup pulito di mappa di Roma con pin sparsi che rappresentano host. Anche se in fase MVP sono pochi o zero, comunica la visione. Alternativa: foto reale di una wallbox/Schuko in un contesto domestico italiano riconoscibile.

---

### Sezione 2 — Chi può diventare host

Sezione dedicata a chiarire subito che non serve una wallbox. Layout a griglia con icone illustrative.

**Titolo:** Non serve essere un esperto. Basta una presa.

**Sottotitolo:** Se hai una presa elettrica che un'auto può raggiungere quando è parcheggiata, sei già a metà dell'opera.

**Casi tipici (card o griglia con icone):**

- **Box auto privato** con presa Schuko o wallbox
- **Vialetto o cortile** con presa al muro
- **Posto auto condominiale** con presa raggiungibile
- **Garage al piano terra** con presa interna
- **Cantina o magazzino** con accesso veicolare
- **Presa esterna sotto casa** raggiungibile dall'auto in sosta

*Nota sotto la sezione:* La tua presa funziona già per qualsiasi elettrodomestico? Allora funziona anche per ricaricare un'auto elettrica. Ti aiutiamo noi a verificare che sia tutto a norma.

---

### Sezione 3 — Come funziona

Tre step numerati, layout orizzontale con icone.

**Step 1 — Ci mandi la tua bolletta**
Analizziamo gratis il tuo costo reale al kWh. Servono 24-48 ore.

**Step 2 — Ti diciamo a quanto puoi vendere**
Calcoliamo una tariffa concorrenziale che ti garantisce un margine netto su ogni ricarica.

**Step 3 — Ricevi richieste di ricarica vicino a te**
Quando non usi la tua presa, altri EV driver pagano per ricaricarci. Guadagni mentre dormi o sei al lavoro.

---

### Sezione 4 — Quanto puoi guadagnare

Sezione critica per la conversione. Tre esempi numerici concreti in card affiancate, ordinati dal caso più comune al più raro.

**Esempio 1 — Presa Schuko standard**
1 ricarica notturna ogni 2 giorni
Margine netto stimato: 45-60 €/mese

**Esempio 2 — Wallbox 3,7 kW**
3 ricariche parziali a settimana
Margine netto stimato: 55-75 €/mese

**Esempio 3 — Wallbox 7 kW**
2 ricariche complete a settimana
Margine netto stimato: 80-110 €/mese

*Disclaimer sotto le card:* Le stime si basano su una tariffa media domestica di 0,28 €/kWh e prezzo di vendita di 0,45 €/kWh. I valori reali dipendono dalla tua bolletta specifica e dalla frequenza d'uso.

*Box rassicurante in fondo alla sezione:* Anche con una semplice presa Schuko di casa puoi generare un reddito interessante. La ricarica è più lenta, ma per chi parcheggia tutta la notte è perfetta.

---

### Sezione 5 — Perché ora

Layout a 4 dati chiave, stile "statistiche", grandi e leggibili.

- **365.000** auto elettriche circolanti in Italia (fine 2025)
- **+46%** crescita immatricolazioni nel 2025
- **1 EV su 5** in Italia circola a Roma e nel Lazio
- **Primi host = massima visibilità** sulla futura mappa dell'app

---

### Sezione 6 — Form di iscrizione (cuore della pagina)

Form a step singolo, layout pulito, validazione inline. Tutti i campi marcati come obbligatori tranne dove indicato.

**Campi:**

1. **Nome e cognome** — testo
2. **Email** — email, validazione formato
3. **Telefono** — numero, validazione formato italiano
4. **Indirizzo completo** — autocomplete Google Places, restituisce anche lat/lng e CAP
5. **Che tipo di presa metti a disposizione?** — radio button (ordinati dal più comune):
   - Presa Schuko standard (la classica presa di casa)
   - Presa industriale (CEE blu o rossa)
   - Wallbox 3,7 kW
   - Wallbox 7,4 kW
   - Wallbox 11 kW
   - Wallbox 22 kW
   - Non lo so, aiutatemi voi a capirlo

6. **Dove si trova la presa?** — radio button:
   - Box auto privato
   - Vialetto o cortile privato
   - Posto auto condominiale
   - Garage al piano terra
   - Presa esterna raggiungibile dalla strada o dal marciapiede
   - Altro (campo testo libero)
7. **Potenza contrattuale del tuo contatore** — radio button:
   - 3 kW
   - 4,5 kW
   - 6 kW
   - Più di 6 kW
   - Non lo so
8. **Quando potresti rendere disponibile la presa?** — radio:
   - Di giorno (mentre sono al lavoro)
   - Di notte
   - Sempre
   - Solo nei weekend
9. **Carica una foto o PDF della tua ultima bolletta** — file upload, max 5 MB, formati: PDF, JPG, PNG. Rassicurazione visibile sotto: *La usiamo solo per calcolare il tuo costo reale al kWh. Non la condividiamo con nessuno.*
10. **Checkbox privacy** (obbligatoria) — "Ho letto e accetto la [privacy policy]"
11. **Checkbox marketing** (opzionale) — "Voglio ricevere aggiornamenti sul progetto"

**CTA finale:** Invia la mia candidatura come host

**Messaggio post-submit:** Grazie! Abbiamo ricevuto la tua candidatura. Entro 48 ore analizziamo la tua bolletta e ti contattiamo con la proposta di tariffa.

---

### Sezione 7 — FAQ

Accordion espandibile, 6-7 domande.

**Devo avere per forza una wallbox?**
No. Anche una semplice presa Schuko di casa va bene, purché sia raggiungibile da un'auto parcheggiata. La ricarica sarà più lenta (10-15 km di autonomia ogni ora), ma per chi lascia l'auto tutta la notte è perfetta. Verifichiamo noi che la tua presa e il tuo impianto reggano un uso prolungato.

**È legale offrire ricariche da privato?**
Sì, l'uso occasionale tra privati è consentito. Per chi avrà volumi più alti, stiamo predisponendo una soluzione che gestisce automaticamente gli aspetti fiscali (regime forfettario semplificato o partita IVA dedicata).

**Chi mi paga e come?**
I driver pagano direttamente tramite app al momento della ricarica. Tu ricevi un accredito mensile sul tuo conto, al netto della commissione di piattaforma.

**E se qualcuno danneggia il mio impianto?**
Ogni ricarica sarà coperta da un'assicurazione inclusa nel servizio. Inoltre verifichiamo a monte che l'impianto sia a norma.

**Devo modificare il mio impianto elettrico?**
Nella maggior parte dei casi no. Verifichiamo che la tua presa o wallbox attuale sia adeguata. Se servono modifiche, ti mettiamo in contatto con installatori partner.

**Quanto tempo richiede gestire le ricariche?**
Pochissimo. L'app gestisce prenotazione, sblocco e pagamento in autonomia. Tu intervieni solo se vuoi modificare gli orari di disponibilità.

**Quando partirà davvero il servizio?**
Stiamo raccogliendo le prime adesioni a Roma. L'app sarà disponibile entro fine 2026. Chi si iscrive ora avrà priorità sulla mappa e tariffe agevolate.

---

### Sezione 8 — Footer

- Logo
- Link a privacy policy e cookie policy
- Contatto email
- Contatore live (anche solo lato CMS, aggiornato manualmente): "X host già iscritti a Roma"

---

## 6. Linee guida di design

### Palette colori (suggerita)

- **Primario:** verde scuro o teal (associazione mobilità sostenibile, ma evitare il verde "ambientalista" stereotipato — meglio un verde più tecnologico, tipo #0B6E4F o #00897B)
- **Accento:** giallo o arancione caldo per le CTA (#FFC107 o simili) — deve risaltare sul verde
- **Neutri:** bianco, grigio chiaro per le sezioni alternate, grigio scuro per i testi
- **No nero puro**, meglio un grigio molto scuro tipo #1A1A1A

### Tipografia

- Sans-serif moderna e leggibile
- Suggerimenti: Inter, DM Sans, Manrope, oppure system font stack
- Gerarchia chiara: headline grandi (48-64px desktop), sottotitoli medi (20-24px), body 16-18px
- Line-height generoso (1.5-1.7) per la leggibilità

### Layout

- Mobile-first (almeno il 60% del traffico arriverà da smartphone)
- Larghezza massima contenuto: 1200px
- Sezioni alternate bianco/grigio chiaro per ritmo visivo
- Spaziature generose tra sezioni (80-120px desktop, 48-64px mobile)

### Tone visivo

- Pulito, professionale ma non freddo
- Niente immagini generiche da banca immagini stile "uomo in giacca sorride al laptop"
- Se servono immagini, preferire foto reali di wallbox, auto elettriche, scene domestiche italiane
- Icone lineari, coerenti tra loro (Lucide, Phosphor, Heroicons)

### Elementi di fiducia

- Inserire bordi/ombre soft sui form per dare senso di sicurezza
- Usare badge tipo "Dati protetti", "Iscrizione gratuita", "Nessun impegno"
- Mostrare in modo visibile la rassicurazione sulla bolletta caricata

---

## 7. Stack tecnico

### Frontend
- **Framework:** Next.js (consigliato per SEO) o Astro
- **Styling:** Tailwind CSS
- **Componenti UI:** shadcn/ui se Next.js, altrimenti componenti custom
- **Form:** React Hook Form + Zod per validazione
- **Mappa/Autocomplete indirizzo:** Google Places API

### Backend / Database
- **Supabase** per database, autenticazione admin e storage delle bollette
- **Hosting:** Vercel (perfetta integrazione con Next.js)
- **Notifiche:** webhook Supabase → Telegram o email per avvisare quando arriva un nuovo host

---

## 8. Schema database Supabase

Da eseguire nell'editor SQL di Supabase dopo aver creato il progetto.

```sql
-- Tabella host registrati
create table hosts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  updated_at timestamptz default now(),

  -- Anagrafica
  full_name text not null,
  email text not null unique,
  phone text not null,

  -- Localizzazione
  address text not null,
  city text default 'Roma',
  postal_code text,
  latitude numeric(10, 7),
  longitude numeric(10, 7),

  -- Impianto
  socket_type text check (socket_type in (
    'schuko', 'cee_industrial', 'wallbox_3.7', 'wallbox_7.4',
    'wallbox_11', 'wallbox_22', 'unknown'
  )),
  socket_location text check (socket_location in (
    'private_box', 'private_driveway', 'condo_parking',
    'ground_floor_garage', 'external_streetside', 'other'
  )),
  socket_location_notes text, -- per il campo "altro"
  contract_power numeric(3, 1),
  contract_power_unknown boolean default false,

  -- Disponibilità
  availability text check (availability in (
    'day', 'night', 'both', 'weekend'
  )),

  -- Pipeline status
  status text default 'new' check (status in (
    'new', 'bill_analyzed', 'tariff_proposed',
    'contacted', 'active', 'rejected'
  )),

  -- Tariffa proposta (compilata da admin dopo analisi bolletta)
  bill_cost_per_kwh numeric(5, 4),
  proposed_selling_price numeric(5, 4),
  host_margin numeric(5, 4),
  notes text,

  -- Consensi
  privacy_consent boolean not null default false,
  marketing_consent boolean default false
);

-- Tabella bollette caricate
create table bills (
  id uuid primary key default gen_random_uuid(),
  host_id uuid references hosts(id) on delete cascade,
  created_at timestamptz default now(),

  file_path text not null,
  file_size_kb integer,
  file_type text check (file_type in ('pdf', 'image')),

  -- Dati estratti dall'analisi
  provider text,
  billing_period_start date,
  billing_period_end date,
  total_kwh numeric(10, 2),
  total_cost numeric(10, 2),
  cost_per_kwh numeric(5, 4),
  analyzed boolean default false,
  analyzed_at timestamptz
);

-- Waitlist driver EV (per futuro lato domanda)
create table drivers_waitlist (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),

  email text not null unique,
  full_name text,
  city text default 'Roma',
  zone text,
  ev_model text,
  charging_frequency text check (charging_frequency in (
    'daily', 'weekly', 'monthly', 'occasional'
  ))
);

-- Indici
create index idx_hosts_status on hosts(status);
create index idx_hosts_city on hosts(city);
create index idx_bills_host on bills(host_id);

-- Row Level Security
alter table hosts enable row level security;
alter table bills enable row level security;
alter table drivers_waitlist enable row level security;

-- Policy: chiunque può iscriversi
create policy "Anyone can register as host" on hosts
  for insert with check (true);

create policy "Anyone can upload bills" on bills
  for insert with check (true);

create policy "Anyone can join driver waitlist" on drivers_waitlist
  for insert with check (true);

-- Policy: solo admin autenticato può leggere
create policy "Only admins can read hosts" on hosts
  for select using (auth.role() = 'authenticated');

create policy "Only admins can read bills" on bills
  for select using (auth.role() = 'authenticated');

create policy "Only admins can read drivers" on drivers_waitlist
  for select using (auth.role() = 'authenticated');
```

### Setup Supabase Storage

1. Creare un bucket chiamato `bills`, **non public** (privato)
2. Policy di accesso:

```sql
create policy "Anyone can upload bills"
  on storage.objects for insert
  with check (bucket_id = 'bills');

create policy "Only authenticated can read bills"
  on storage.objects for select
  using (bucket_id = 'bills' and auth.role() = 'authenticated');
```

---

## 9. Flusso operativo (admin)

1. L'host compila il form sulla landing
2. Si crea una riga in `hosts` con `status = 'new'`
3. Il file bolletta finisce in Supabase Storage + riga in `bills`
4. Notifica via webhook → email/Telegram all'admin
5. L'admin apre la bolletta, compila manualmente in `bills`:
   - `total_kwh`, `total_cost`, `cost_per_kwh`
   - Marca `analyzed = true`
6. Decide `proposed_selling_price` e aggiorna `hosts.status = 'tariff_proposed'`
7. Contatta l'host con la proposta
8. Se accetta → `status = 'active'`, pronto per il lancio dell'app

---

## 10. Metriche da tracciare

Integrare almeno **Plausible** o **Umami** (analytics privacy-friendly, no banner cookie pesante).

**KPI principali:**
- Numero iscrizioni host (obiettivo: 30 in 30 giorni)
- Tasso di completamento form (chi inizia vs chi finisce)
- Percentuale di chi carica davvero la bolletta
- Tasso di accettazione delle proposte di tariffa

**Eventi da tracciare:**
- `landing_view`
- `cta_calculate_clicked`
- `form_started`
- `form_step_completed`
- `bill_uploaded`
- `form_submitted`

---

## 11. Cosa NON includere nella landing

- Niente prezzi precisi per i driver (non è il loro touchpoint)
- Niente sezione "chi siamo" autocelebrativa
- Niente blog o contenuti non funzionali alla conversione
- Niente menu di navigazione complesso: la pagina è una sola, scroll lineare
- Niente popup di benvenuto, exit-intent o newsletter non richieste
- Niente cookie banner invadente (usare analytics che non richiedono consenso esplicito)

---

## 12. Deliverable attesi dal designer

1. Wireframe in bassa fedeltà delle 7 sezioni
2. Mockup in alta fedeltà desktop e mobile
3. Componenti riutilizzabili (Figma library)
4. Eventuali asset grafici (mappa Roma stilizzata, icone custom se servono)
5. Eventuale logo provvisorio se non disponibile

---

## 13. Timeline indicativa

- **Settimana 1:** wireframe + revisione
- **Settimana 2:** mockup alta fedeltà + revisione
- **Settimana 3-4:** sviluppo frontend + integrazione Supabase
- **Settimana 5:** test, fix, deploy
- **Settimana 6 in poi:** raccolta iscrizioni + analisi dati

---

## 14. Contatti progetto

[Da compilare]
