// App that mounts the 3 brand directions inside a design canvas.

const { DesignCanvas, DCSection, DCArtboard } = window;
const { CivicaSheet, CorrenteSheet, WattSheet } = window;

const App = () => (
  <DesignCanvas>
    <DCSection id="directions" title="Direzioni di brand">
      <DCArtboard id="civica"   label="01 · Civica — editoriale utility italiana"        width={1100} height={1900}>
        <CivicaSheet />
      </DCArtboard>
      <DCArtboard id="corrente" label="02 · Corrente — fintech friendly"                  width={1100} height={1900}>
        <CorrenteSheet />
      </DCArtboard>
      <DCArtboard id="watt"     label="03 · Watt — editoriale brand-led"                  width={1100} height={1900}>
        <WattSheet />
      </DCArtboard>
    </DCSection>
  </DesignCanvas>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
