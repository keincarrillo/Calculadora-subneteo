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
    console.log("Body enviado:", config.body);
  }

  const url = `http://localhost:3000/${ruta}`;
  console.log("URL solicitada:", url);

  const res = await fetch(url, config);

  if (!res.ok) {
    const errorText = await res.text(); // Muestra más detalle del error
    console.error("Respuesta del servidor:", errorText);
    throw new Error("Error al consultar la API");
  }

  const resultado = await res.json();
  return resultado;
};

export default consultarApi;
