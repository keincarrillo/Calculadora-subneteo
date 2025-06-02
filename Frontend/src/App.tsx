import Inputs from "./components/Inputs";
import ResultadosRed from "./components/ResultRed";
import type { resultRed } from "./types/resultRed";
import { useState } from "react";

const App = () => {
  const [resultado, setResultado] = useState<resultRed | null>(null);
  return (
    <>
      <h1 className="text-center text-3xl py-5">Calculadora Subneteo</h1>
      <div className="grid grid-cols-2">
        <div className="max-w-full mx-auto flex flex-col gap-6 px-4">
          <Inputs onResultado={setResultado} />
          {resultado && <ResultadosRed datos={resultado} />}
        </div>
      </div>
    </>
  );
};

export default App;
