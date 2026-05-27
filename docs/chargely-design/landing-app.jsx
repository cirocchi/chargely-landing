// Main app — composes all sections, owns scroll-to-form, wires tweaks panel.

const {
  TopNav, Hero, ChiPuoSection, ComeFunzionaSection,
  GuadagnoSection, PercheOraSection, FormSection,
  FaqSection, Footer,
  TweaksPanel, TweakSection, TweakRadio, TweakToggle, TweakSlider, useTweaks,
} = window;

const App = () => {
  const formRef = React.useRef(null);
  const [tweaks, setTweak] = useTweaks(window.__TWEAK_DEFAULTS);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView?.({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <TopNav onCtaClick={scrollToForm} />
      <Hero tweaks={tweaks} onCtaClick={scrollToForm} />
      <ChiPuoSection marker={tweaks.casoMarker} />
      <ComeFunzionaSection />
      <GuadagnoSection />
      <PercheOraSection />
      <FormSection ref={formRef} />
      <FaqSection />
      <Footer tweaks={tweaks} onCtaClick={scrollToForm} />

      <TweaksPanel title="Tweaks · Chargely">
        <TweakSection label="Sezione 'Chi può'">
          <TweakRadio
            label="Marker delle card"
            value={tweaks.casoMarker}
            onChange={v => setTweak("casoMarker", v)}
            options={[
              { value: "icon", label: "Icone" },
              { value: "diagram", label: "Diagramma" },
            ]}
          />
        </TweakSection>
        <TweakSection label="Hero">
          <TweakRadio
            label="Visual hero"
            value={tweaks.heroVariant}
            onChange={v => setTweak("heroVariant", v)}
            options={[
              { value: "map", label: "Mappa" },
              { value: "photo", label: "Foto" },
            ]}
          />
        </TweakSection>
        <TweakSection label="Footer">
          <TweakToggle
            label="Mostra contatore host"
            value={tweaks.showCounter}
            onChange={v => setTweak("showCounter", v)}
          />
          <TweakSlider
            label="Numero host iscritti"
            value={tweaks.counterHosts}
            min={0} max={200} step={1}
            onChange={v => setTweak("counterHosts", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
