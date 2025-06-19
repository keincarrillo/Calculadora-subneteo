import type { FormData } from "../types/formValues";

const consultarApi = async (
  ruta: string,
  datos?: FormData,
  metodo: "GET" | "POST" = "GET"
) => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const config: RequestInit = {
    method: metodo,
    headers,
  };

  if (metodo === "POST" && datos) {
    config.body = JSON.stringify(datos);
  }

  const url = `https://calculadora-subneteo-fb5t.onrender.com/${ruta}`;

  const res = await fetch(url, config);

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Respuesta del servidor:", errorText);
    throw new Error("Error al consultar la API");
  }

  const resultado = await res.json();
  return resultado;
};

export default consultarApi;
