import { useState } from "react";
import type { PropsS, resultRed } from "../types/resultRed";

const ResultadosSubredes = ({ subredes }: PropsS) => {
  const headerClass = "text-center text-sm font-semibold mb-4 text-gray-900";

  const [paginaActual, setPaginaActual] = useState(1);
  const [busqueda, setBusqueda] = useState("");
  const itemsPorPagina = 5;

  const totalPaginas = Math.ceil(subredes.length / itemsPorPagina);
  const inicio = (paginaActual - 1) * itemsPorPagina;
  const fin = inicio + itemsPorPagina;
  const subredesPagina = subredes.slice(inicio, fin);

  const paginaAnterior = () => {
    if (paginaActual > 1) setPaginaActual(paginaActual - 1);
  };
  const paginaSiguiente = () => {
    if (paginaActual < totalPaginas) setPaginaActual(paginaActual + 1);
  };

  const buscarPorNumeroSubred = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value.trim();
    setBusqueda(valor);

    if (valor === "") {
      setPaginaActual(1);
      return;
    }

    const num = Number(valor);
    if (!isNaN(num) && num >= 1 && num <= subredes.length) {
      const indiceEncontrado = num - 1;
      const nuevaPagina = Math.floor(indiceEncontrado / itemsPorPagina) + 1;
      setPaginaActual(nuevaPagina);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 border border-blue-600 rounded-md bg-white font-sans animate-pop flex flex-col min-h-[700px]">
      <h3 className={headerClass}>Resultados de las Subredes</h3>

      <input
        type="number"
        placeholder={`Buscar por número de subred... (${subredes.length} totales)`}
        value={busqueda}
        onChange={buscarPorNumeroSubred}
        min={1}
        max={subredes.length}
        className="mb-6 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex-grow space-y-6 overflow-auto">
        {subredesPagina.map((datos, idx) => (
          <SubredItem key={inicio + idx} idx={inicio + idx} datos={datos} />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={paginaAnterior}
          disabled={paginaActual === 1}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 animate-scaleIn hover:animate-pop"
        >
          Anterior
        </button>
        <span className="self-center text-gray-700">
          Página {paginaActual} de {totalPaginas}
        </span>
        <button
          onClick={paginaSiguiente}
          disabled={paginaActual === totalPaginas}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 animate-scaleIn hover:animate-pop"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

type SubredItemProps = {
  idx: number;
  datos: resultRed;
};

const SubredItem = ({ idx, datos }: SubredItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 bg-white rounded-md shadow-sm border border-blue-600 w-full">
      <h4
        className="font-bold mb-3 text-gray-900 cursor-pointer select-none flex justify-between items-center group"
        onClick={() => setIsOpen(!isOpen)}
      >
        Subred {idx + 1}
        <span
          className={`transition-transform duration-300 group-hover:text-blue-600 ${
            isOpen ? "rotate-y-180" : ""
          }`}
        >
          {isOpen ? "▲" : "▼"}
        </span>
      </h4>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-[10rem_1fr_1fr] gap-1 items-start text-xs py-1">
          <div className="font-semibold text-right text-gray-700">RED:</div>
          <div className="text-left whitespace-nowrap text-gray-900">
            {datos.red}
          </div>
          <div className="font-mono text-left text-gray-600 text-xs">
            {datos.redBinario}
          </div>
        </div>

        <div className="grid grid-cols-[10rem_1fr_1fr] gap-1 items-start text-xs py-1">
          <div className="font-semibold text-right text-gray-700">
            HOST MÍNIMO:
          </div>
          <div className="text-left whitespace-nowrap text-gray-900">
            {datos.hostMinimo}
          </div>
          <div className="font-mono text-left text-gray-600 text-xs">
            {datos.hostMinimoBinario}
          </div>
        </div>

        <div className="grid grid-cols-[10rem_1fr_1fr] gap-1 items-start text-xs py-1">
          <div className="font-semibold text-right text-gray-700">
            HOST MÁXIMO:
          </div>
          <div className="text-left whitespace-nowrap text-gray-900">
            {datos.hostMaximo}
          </div>
          <div className="font-mono text-left text-gray-600 text-xs">
            {datos.hostMaximoBinario}
          </div>
        </div>

        <div className="grid grid-cols-[10rem_1fr_1fr] gap-1 items-start text-xs py-1">
          <div className="font-semibold text-right text-gray-700">
            BROADCAST:
          </div>
          <div className="text-left whitespace-nowrap text-gray-900">
            {datos.broadcast}
          </div>
          <div className="font-mono text-left text-gray-600 text-xs">
            {datos.broadcastBinario}
          </div>
        </div>

        <div className="grid grid-cols-[10rem_1fr_1fr] gap-1 items-start text-xs py-1 font-bold">
          <div className="font-semibold text-right text-gray-700">
            TOTAL DE HOSTS:
          </div>
          <div className="text-left whitespace-nowrap text-gray-900">
            {datos.totalHosts}
          </div>
          <div className="text-left text-sm font-semibold text-gray-900">
            {datos.clase} {datos.tipoRed}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultadosSubredes;
