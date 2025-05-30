const consultarApi = async (ruta: string, datos?: any, metodo: "GET" | "POST" = "GET") => {
  const config: RequestInit = {
    method: metodo,
    headers: {
      "Content-Type": "application/json",
    },
  };

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
