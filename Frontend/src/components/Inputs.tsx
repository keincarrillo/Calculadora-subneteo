import { useForm } from "react-hook-form";
import type { FormData } from "../types/formValues";

const IPForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Aquí llamarías a tu API con fetch o axios
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow space-y-6 animate-fadeIn"
    >
      <div className="animate-slideInUp">
        <label htmlFor="ip" className="block font-semibold mb-1">
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
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 transition duration-300 ${
            errors.ip
              ? "border-red-500 ring-red-300 animate-shake"
              : "border-gray-300 ring-blue-300"
          }`}
          placeholder="192.168.0.1"
        />
        {errors.ip && (
          <p className="text-red-600 text-sm mt-1">{errors.ip.message}</p>
        )}
      </div>

      <div className="animate-slideInUp delay-100">
        <label htmlFor="mascara" className="block font-semibold mb-1">
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
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 transition duration-300 ${
            errors.mascara
              ? "border-red-500 ring-red-300 animate-shake"
              : "border-gray-300 ring-blue-300"
          }`}
          placeholder="24"
        />
        {errors.mascara && (
          <p className="text-red-600 text-sm mt-1">{errors.mascara.message}</p>
        )}
      </div>

      <div className="animate-slideInUp delay-200">
        <label htmlFor="mascaraNueva" className="block font-semibold mb-1">
          Máscara Nueva (bits)
        </label>
        <input
          id="mascaraNueva"
          type="number"
          {...register("mascaraNueva", {
            required: "Máscara Nueva es requerida",
            min: { value: 0, message: "Debe ser mínimo 0" },
            max: { value: 32, message: "Debe ser máximo 32" },
          })}
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 transition duration-300 ${
            errors.mascaraNueva
              ? "border-red-500 ring-red-300 animate-shake"
              : "border-gray-300 ring-blue-300"
          }`}
          placeholder="25"
        />
        {errors.mascaraNueva && (
          <p className="text-red-600 text-sm mt-1">
            {errors.mascaraNueva.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition transform hover:scale-105 active:scale-95 animate-bounce"
      >
        Calcular
      </button>
    </form>
  );
};

export default IPForm;
