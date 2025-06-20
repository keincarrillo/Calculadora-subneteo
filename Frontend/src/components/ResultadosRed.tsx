import type { PropsR } from "../types/resultRed";

const ResultadosRed = ({ datos }: PropsR) => {
  const headerClass = "text-center text-sm font-semibold mb-4";
  const rowClass =
    "grid grid-cols-1 sm:grid-cols-[10rem_1fr_1fr] gap-4 items-start text-xs sm:text-sm py-1 text-left";
  const labelClass = "font-semibold text-left";
  const valueClass = "text-left whitespace-nowrap";
  const monoClass = "font-mono text-left";

  return (
    <div className="max-w-full sm:max-w-2xl mx-auto p-4 border border-aquamarine-600 rounded-md bg-white text-gray-900 font-sans dark:bg-gray-950 dark:text-white dark:border-aquamarine-600/40 animate-pop">
      <h3 className={headerClass}>Resultados de la Red</h3>

      <div className={rowClass}>
        <div className={labelClass}>IP:</div>
        <div className={valueClass}>{datos.ip}</div>
        <div className={monoClass}>{datos.ipBinario}</div>
      </div>

      <div className={rowClass}>
        <div className={labelClass}>MÁSCARA DE RED:</div>
        <div className={valueClass}>
          {datos.mascara} = {datos.mascaraBits}
        </div>
        <div className={monoClass}>{datos.mascaraBinario}</div>
      </div>

      <div className={rowClass}>
        <div className={labelClass}>BITS PARA HOST:</div>
        <div className={valueClass}>
          {datos.bitsHostOriginalDecimal} = {datos.bitsHostOriginal}
        </div>
        <div className={monoClass}>{datos.bitsHostOriginalBinario}</div>
      </div>

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
        <div className={labelClass}>TOTAL DE HOSTS EN LA RED:</div>
        <div className={valueClass}>{datos.totalHosts}</div>
        <div className="text-left text-sm font-semibold">
          {datos.clase} {datos.tipoRed}
        </div>
      </div>

      {datos.bitsRedes > 0 && (
        <>
          <hr className="my-2 border-aquamarine-600 dark:border-aquamarine-600/40" />
          <h3 className={`${headerClass} mt-4`}>Para la subred</h3>

          <div className={rowClass}>
            <div className={labelClass}>NUEVA MÁSCARA:</div>
            <div className={valueClass}>
              {datos.nuevaMascaraDecimal} = {datos.nuevaMascaraBits}
            </div>
            <div className={monoClass}>{datos.nuevaMascaraBinario}</div>
          </div>

          <div className={rowClass}>
            <div className={labelClass}>BITS PARA HOST:</div>
            <div className={valueClass}>
              {datos.bitsHostSubredDecimal} = {datos.bitsHostSubred}
            </div>
            <div className={monoClass}>{datos.bitsHostSubredBinario}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ResultadosRed;
