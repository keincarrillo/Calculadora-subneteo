const consultarApi = async (ruta: string) => {
  const res = await fetch(`http://localhost:3000/${ruta}`);
  const { routes } = await res.json();
  return routes;
};

export default consultarApi;
