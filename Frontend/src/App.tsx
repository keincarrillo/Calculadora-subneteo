import Inputs from "./components/Inputs";
import ResultadosRed from "./components/ResultRed";

const App = () => {
  return (
    <>
      <h1 className="text-center text-3xl py-5">Calculadora Subneteo</h1>
      <div className="grid grid-cols-2">
        <div className="max-w-full mx-auto flex flex-col gap-6 px-4">
          <Inputs />
          <ResultadosRed />
        </div>
        
      </div>
    </>
  );
};

export default App;
