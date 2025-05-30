import type { FormData } from "../types/formValues";

const consultarApi = async (
  ruta: string,
  datos?: FormData,
  metodo: "GET" | "POST" = "GET"
) => {
  // Validar que los POST incluyan datos
  if (metodo === "POST" && !datos) {
    throw new Error("No se proporcionaron datos para la solicitud POST");
  }

  // Headers configurados solo si es POST
  const headers: HeadersInit = {};
  if (metodo === "POST") {
    headers["Content-Type"] = "application/json";
  }

  const config: RequestInit = {
    method: metodo,
    headers,
  };

  // Incluir body si es POST con datos
  if (metodo === "POST" && datos) {
    config.body = JSON.stringify(datos);
  }

  const res = await fetch(`http://localhost:3000/${ruta}`, config);

  if (!res.ok) {
    throw new Error("Error al consultar la API");
  }

  const resultado = await res.json();
  return resultado;
};

export default consultarApi;
