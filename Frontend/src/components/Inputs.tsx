import consultarApi from "../services/api";
import { useForm } from "react-hook-form";
import type { FormData } from "../types/formValues";
import type { PropsI } from "../types/resultRed";

const IPForm = ({ onResultado, onSubredes }: PropsI) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const mascara = watch("mascara");

  const onSubmit = async (data: FormData) => {
    try {
      const resultado = await consultarApi("api/subnet", data, "POST");
      onResultado(resultado);

      if (
        data.mascaraNueva &&
        Number(data.mascaraNueva) > Number(data.mascara) &&
        onSubredes
      ) {
        const subredes = await consultarApi("api/subredes", data, "POST");
        onSubredes(subredes);
      } else if (onSubredes) {
        onSubredes([]);
      }
    } catch (error) {
      console.error("Error al consultar la API:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-full mx-auto mt-10 p-6 bg-white rounded shadow flex items-end space-x-6 animate-fadeIn"
    >
      <div className="flex flex-col w-40 animate-slideInUp">
        <label htmlFor="ip" className="font-semibold mb-2 text-center">
          Dirección IP
        </label>
        <input
          id="ip"
          {...register("ip", {
            required: "IP es requerida",
            pattern: {
              value:
                /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/,
              message: "IP no válida",
            },
          })}
          className={`w-full border rounded px-3 py-2 h-10 focus:outline-none focus:ring-2 transition duration-300 ${
            errors.ip
              ? "border-red-500 ring-red-300 animate-shake"
              : "border-gray-300 ring-aquamarine-500/50"
          }`}
          placeholder="Ej: 192.168.0.1"
        />
        {errors.ip ? (
          <p className="text-red-600 text-xs mt-1 h-4">{errors.ip.message}</p>
        ) : (
          <p className="invisible text-xs mt-1 h-4">Error placeholder</p>
        )}
      </div>

      <div className="flex flex-col w-40 animate-slideInUp delay-100">
        <label htmlFor="mascara" className="font-semibold mb-2 text-center">
          Máscara (bits)
        </label>
        <input
          id="mascara"
          type="number"
          {...register("mascara", {
            required: "Máscara es requerida",
            min: { value: 0, message: "Debe ser mínimo 0" },
            max: { value: 32, message: "Debe ser máximo 32" },
          })}
          className={`w-full border rounded px-3 py-2 h-10 focus:outline-none focus:ring-2 transition duration-300 ${
            errors.mascara
              ? "border-red-500 ring-red-300 animate-shake"
              : "border-gray-300 ring-aquamarine-500/50"
          }`}
          placeholder="Ej: 24"
        />
        {errors.mascara ? (
          <p className="text-red-600 text-xs mt-1 h-4">
            {errors.mascara.message}
          </p>
        ) : (
          <p className="invisible text-xs mt-1 h-4">Error placeholder</p>
        )}
      </div>

      <div className="flex flex-col w-40 animate-slideInUp delay-200">
        <label
          htmlFor="mascaraNueva"
          className="font-semibold mb-2 text-center whitespace-normal"
        >
          Máscara Nueva (bits)
        </label>
        <input
          id="mascaraNueva"
          type="number"
          {...register("mascaraNueva", {
            min: { value: 0, message: "Debe ser mínimo 0" },
            max: { value: 32, message: "Debe ser máximo 32" },
            validate: (value) =>
              !value ||
              Number(value) > Number(mascara) ||
              "Debe ser mayor que la Máscara",
          })}
          className={`w-full border rounded px-3 py-2 h-10 focus:outline-none focus:ring-2 transition duration-300 ${
            errors.mascaraNueva
              ? "border-red-500 ring-red-300 animate-shake"
              : "border-gray-300 ring-aquamarine-500/50"
          }`}
          placeholder="Opcional"
        />
        {errors.mascaraNueva ? (
          <p className="text-red-600 text-xs mt-1 h-4">
            {errors.mascaraNueva.message}
          </p>
        ) : (
          <p className="invisible text-xs mt-1 h-4">Error placeholder</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-aquamarine-600 hover:bg-aquamarine-700 text-white font-bold px-6 rounded transition transform hover:scale-105 active:scale-95 animate-bounce h-10 self-end mb-5"
      >
        Calcular
      </button>
    </form>
  );
};

export default IPForm;
