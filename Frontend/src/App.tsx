import Inputs from "./components/Inputs";
import ResultadosRed from "./components/ResultadosRed";
import ResultadosSubredes from "./components/ResultadosSubredes";
import type { resultRed } from "./types/resultRed";
import { useState } from "react";

const App = () => {
  const [resultado, setResultado] = useState<resultRed | null>(null);
  const [subredes, setSubredes] = useState<resultRed[]>([]);

  return (
    <>
      <h1 className="text-center text-3xl py-5">Calculadora Subneteo</h1>

      <div className="flex justify-center gap-20 px-4">
        <div className="flex flex-col gap-6 max-w-2xl w-full items-center">
          <Inputs onResultado={setResultado} onSubredes={setSubredes} />
          {resultado && <ResultadosRed datos={resultado} />}
        </div>

        <div className="flex flex-col gap-6 max-w-xl w-full">
          {subredes.length > 0 && <ResultadosSubredes subredes={subredes} />}
        </div>
      </div>
    </>
  );
};

export default App;
