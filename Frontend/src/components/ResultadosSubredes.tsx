import type { PropsS } from "../types/resultRed";

const ResultadosSubredes = ({ subredes }: PropsS) => {
  const headerClass = "text-center text-sm font-semibold mb-4 text-gray-900";
  const rowClass =
    "grid grid-cols-[10rem_1fr_1fr] gap-4 items-start text-xs py-1";
  const labelClass = "font-semibold text-right text-gray-700";
  const valueClass = "text-left whitespace-nowrap text-gray-900";
  const monoClass = "font-mono text-left text-gray-600 text-xs";

  return (
    <div className="max-w-2xl mx-auto p-4 border border-blue-600 rounded-md bg-white font-sans animate-pop space-y-6">
      <h3 className={headerClass}>Resultados de las Subredes</h3>
      {subredes.map((datos, idx) => (
        <div key={idx} className="p-4 bg-white rounded-md shadow-sm">
          <h4 className="font-bold mb-3 text-gray-900">Subred {idx + 1}</h4>

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
      ))}
    </div>
  );
};

export default ResultadosSubredes;
