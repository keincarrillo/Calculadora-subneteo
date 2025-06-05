import { useState, useEffect } from "react";
import Inputs from "./components/Inputs";
import ResultadosRed from "./components/ResultadosRed";
import ResultadosSubredes from "./components/ResultadosSubredes";
import type { resultRed } from "./types/resultRed";
import { FaMoon, FaSun } from 'react-icons/fa'; // Iconos para el modo oscuro

const App = () => {
  const [resultado, setResultado] = useState<resultRed | null>(null);
  const [subredes, setSubredes] = useState<resultRed[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen bg-white text-black dark:bg-gray-950 dark:text-white`}>
      <div className="flex justify-between items-center px-10 py-6">
        <h1 className="text-3xl text-center">Calculadora Subneteo</h1>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-gray-900 dark:text-white animate-bounce hover:animate-wiggle"
        >
          {isDarkMode ? (
            <FaSun size={24} className="hover:animate-pop hover:cursor-pointer"/> 
          ) : (
            <FaMoon size={24} className="hover:animate-pop hover:cursor-pointer"/> 
          )}
        </button>
      </div>

      <div className="flex justify-center gap-20 px-4">
        <div className="flex flex-col gap-6 max-w-2xl w-full items-center">
          <Inputs onResultado={setResultado} onSubredes={setSubredes} />
          {resultado && <ResultadosRed datos={resultado} />}
        </div>

        <div className="flex flex-col gap-6 max-w-xl w-full">
          {subredes.length > 0 && <ResultadosSubredes subredes={subredes} />}
        </div>
      </div>
    </div>
  );
};

export default App;
