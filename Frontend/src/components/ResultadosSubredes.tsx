import { useState } from "react";
import type { PropsS } from "../types/resultRed";
import { SubredItem } from "./SubredItem";

const ResultadosSubredes = ({ subredes }: PropsS) => {
  const headerClass =
    "text-center text-sm font-semibold mb-4 text-gray-900 dark:text-white";

  const [paginaActual, setPaginaActual] = useState(1);
  const [busqueda, setBusqueda] = useState("");
  const itemsPorPagina = 8;

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
    <div className="max-w-full sm:max-w-3xl mx-auto p-4 border border-aquamarine-600 rounded-md bg-white dark:bg-gray-950 font-sans animate-pop flex flex-col min-h-[550px] mt-2">
      <h3 className={headerClass}>Resultados de las Subredes</h3>

      <input
        type="number"
        placeholder={`Buscar por número de subred... (${subredes.length} totales)`}
        value={busqueda}
        onChange={buscarPorNumeroSubred}
        min={1}
        max={subredes.length}
        className="mb-6 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-aquamarine-500/50 dark:bg-aquamarine-800 dark:border-aquamarine-700 dark:text-white"
      />

      <div className="space-y-3 overflow-auto max-h-[400px] pr-2 scrollbar-custom">
        {subredesPagina.map((datos, idx) => (
          <SubredItem key={inicio + idx} idx={inicio + idx} datos={datos} />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={paginaAnterior}
          disabled={paginaActual === 1}
          className="px-4 py-2 bg-aquamarine-700 text-white rounded disabled:opacity-50 animate-scaleIn hover:animate-pop hover:cursor-pointer dark:bg-aquamarine-600/40 dark:hover:bg-aquamarine-600/70"
        >
          Anterior
        </button>
        <span className="self-center text-gray-700 dark:text-white text-sm">
          Página {paginaActual} de {totalPaginas}
        </span>
        <button
          onClick={paginaSiguiente}
          disabled={paginaActual === totalPaginas}
          className="px-4 py-2 bg-aquamarine-700 dark:bg-aquamarine-600/40 text-white rounded disabled:opacity-50 animate-scaleIn hover:animate-pop hover:cursor-pointer dark:hover:bg-aquamarine-600/70"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ResultadosSubredes;
