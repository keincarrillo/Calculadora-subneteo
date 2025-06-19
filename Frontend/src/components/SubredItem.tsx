import { useState } from "react";
import type { SubredItemProps } from "../types/resultRed";

export const SubredItem = ({ idx, datos }: SubredItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-3 bg-white dark:bg-gray-950 rounded-md shadow-sm border border-aquamarine-600 w-full flex flex-col justify-center mb-4">
      <h4
        className="font-bold mb-1 text-gray-900 dark:text-white cursor-pointer select-none flex justify-between items-center group"
        onClick={() => setIsOpen(!isOpen)}
      >
        Subred {idx + 1}
        <span
          className={`transition-transform duration-300 group-hover:text-aquamarine-600 hover:scale-110 ${
            isOpen ? "rotate-180" : ""
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
        <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr_1fr] gap-3 sm:gap-4 items-start text-xs sm:text-sm py-2 text-left">
          <div className="font-semibold text-left text-gray-700 dark:text-gray-300">
            RED:
          </div>
          <div className="text-left whitespace-nowrap text-gray-900 dark:text-white">
            {datos.red}
          </div>
          <div className="font-mono text-left text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
            {datos.redBinario}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr_1fr] gap-3 sm:gap-4 items-start text-xs sm:text-sm py-2 text-left">
          <div className="font-semibold text-left text-gray-700 dark:text-gray-300">
            HOST MÍNIMO:
          </div>
          <div className="text-left whitespace-nowrap text-gray-900 dark:text-white">
            {datos.hostMinimo}
          </div>
          <div className="font-mono text-left text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
            {datos.hostMinimoBinario}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr_1fr] gap-3 sm:gap-4 items-start text-xs sm:text-sm py-2 text-left">
          <div className="font-semibold text-left text-gray-700 dark:text-gray-300">
            HOST MÁXIMO:
          </div>
          <div className="text-left whitespace-nowrap text-gray-900 dark:text-white">
            {datos.hostMaximo}
          </div>
          <div className="font-mono text-left text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
            {datos.hostMaximoBinario}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr_1fr] gap-3 sm:gap-4 items-start text-xs sm:text-sm py-2 text-left">
          <div className="font-semibold text-left text-gray-700 dark:text-gray-300">
            BROADCAST:
          </div>
          <div className="text-left whitespace-nowrap text-gray-900 dark:text-white">
            {datos.broadcast}
          </div>
          <div className="font-mono text-left text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
            {datos.broadcastBinario}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr_1fr] gap-3 sm:gap-4 items-start text-xs sm:text-sm py-2 font-bold text-left">
          <div className="font-semibold text-left text-gray-700 dark:text-gray-300">
            TOTAL DE HOSTS:
          </div>
          <div className="text-left whitespace-nowrap text-gray-900 dark:text-white">
            {datos.totalHosts}
          </div>
          <div className="text-left text-sm font-semibold text-gray-900 dark:text-white">
            {datos.clase} {datos.tipoRed}
          </div>
        </div>
      </div>
    </div>
  );
};
