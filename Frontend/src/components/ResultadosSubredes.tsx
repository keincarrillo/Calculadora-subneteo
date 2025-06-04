import { useState } from "react";
import type { PropsS, resultRed } from "../types/resultRed";

const ResultadosSubredes = ({ subredes }: PropsS) => {
  const headerClass = "text-center text-sm font-semibold mb-4 text-gray-900";

  return (
    <div className="max-w-3xl mx-auto p-4 border border-blue-600 rounded-md bg-white font-sans animate-pop space-y-6">
      <h3 className={headerClass}>Resultados de las Subredes</h3>
      {subredes.map((datos, idx) => (
        <SubredItem key={idx} idx={idx} datos={datos} />
      ))}
    </div>
  );
};

type SubredItemProps = {
  idx: number;
  datos: resultRed;
};

const SubredItem = ({ idx, datos }: SubredItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const rowClass =
    "grid grid-cols-[10rem_1fr_1fr] gap-1 items-start text-xs py-1";
  const labelClass = "font-semibold text-right text-gray-700";
  const valueClass = "text-left whitespace-nowrap text-gray-900";
  const monoClass = "font-mono text-left text-gray-600 text-xs";

  return (
    <div className="p-4 bg-white rounded-md shadow-sm border border-blue-600 w-full">
      <h4
        className="font-bold mb-3 text-gray-900 cursor-pointer select-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        Subred {idx + 1}
        <span>{isOpen ? "▲" : "▼"}</span>
      </h4>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={rowClass}>
          <div className={labelClass}>RED:</div>
          <div className={valueClass}>{datos.red}</div>
          <div className={monoClass}>{datos.redBinario}</div>
        </div>

        <div className={rowClass}>
          <div className={labelClass}>HOST MÍNIMO:</div>
          <div className={valueClass}>{datos.hostMinimo}</div>
          <div className={monoClass}>{datos.hostMinimoBinario}</div>
        </div>

        <div className={rowClass}>
          <div className={labelClass}>HOST MÁXIMO:</div>
          <div className={valueClass}>{datos.hostMaximo}</div>
          <div className={monoClass}>{datos.hostMaximoBinario}</div>
        </div>

        <div className={rowClass}>
          <div className={labelClass}>BROADCAST:</div>
          <div className={valueClass}>{datos.broadcast}</div>
          <div className={monoClass}>{datos.broadcastBinario}</div>
        </div>

        <div className={`${rowClass} font-bold`}>
          <div className={labelClass}>TOTAL DE HOSTS:</div>
          <div className={valueClass}>{datos.totalHosts}</div>
          <div className="text-left text-sm font-semibold text-gray-900">
            {datos.clase} {datos.tipoRed}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultadosSubredes;
