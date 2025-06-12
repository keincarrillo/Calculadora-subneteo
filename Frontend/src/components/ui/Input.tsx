interface InputFieldProps {
  id: string;
  type: string;
  placeholder: string;
  register: any;
  errors: any;
  validation: any;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  type,
  placeholder,
  register,
  errors,
  validation,
}) => {
  return (
    <div className="mb-4">
      <input
        id={id}
        type={type}
        {...register(id, validation)}
        className={`w-full border rounded px-3 py-2 h-10 focus:outline-none focus:ring-2 transition duration-300 ${
          errors[id]
            ? "border-red-500 ring-red-300 animate-shake"
            : "border-gray-300 ring-aquamarine-500/50 dark:bg-aquamarine-800 dark:border-aquamarine-700"
        }`}
        placeholder={placeholder}
      />
      {errors[id] ? (
        <p className="text-red-600 text-xs mt-1 h-4">{errors[id].message}</p>
      ) : (
        <p className="invisible text-xs mt-1 h-4">Error placeholder</p>
      )}
    </div>
  );
};

export default InputField;

{
  /* <input
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
      : "border-gray-300 ring-aquamarine-500/50 dark:bg-aquamarine-800 dark:border-aquamarine-700"
  }`}
  placeholder="Ej: 192.168.0.1"
/>;
{
  errors.ip ? (
    <p className="text-red-600 text-xs mt-1 h-4">{errors.ip.message}</p>
  ) : (
    <p className="invisible text-xs mt-1 h-4">Error placeholder</p>
  );
} */
}

{
  /* <input
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
      : "border-gray-300 ring-aquamarine-500/50 dark:bg-aquamarine-800 dark:border-aquamarine-700"
  }`}
  placeholder="Ej: 24"
/>;
{
  errors.mascara ? (
    <p className="text-red-600 text-xs mt-1 h-4">{errors.mascara.message}</p>
  ) : (
    <p className="invisible text-xs mt-1 h-4">Error placeholder</p>
  );
} */
}
