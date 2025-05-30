const ResultadosRed = () => {
  const datos = {
    ip: "192.168.1.0",
    mascara: "255.255.254.0",
    mascaraBits: 23,
    bitsRedesDecimal: "0.0.1.255",
    bitsRedes: 9,
    red: "192.168.0.0/23",
    hostMinimo: "192.168.0.1",
    hostMaximo: "192.168.1.254",
    broadcast: "192.168.1.255",
    totalHosts: 510,
    clase: "CLASE C",
    tipoRed: "RED PRIVADA",

    ipBinario: "11000000.10101000.00000001.00000000",
    mascaraBinario: "11111111.11111111.11111110.00000000",
    bitsRedesBinario: "00000000.00000000.00000001.11111111",
    redBinario: "11000000.10101000.00000000.00000000",
    hostMinimoBinario: "11000000.10101000.00000000.00000001",
    hostMaximoBinario: "11000000.10101000.00000001.11111110",
    broadcastBinario: "11000000.10101000.00000001.11111111",
  };

  return (
    <div className="max-w-max mx-auto p-4 border border-blue-600 rounded-md bg-white text-gray-900 font-sans animate-pop">
      <h3 className="text-center text-sm font-semibold mb-4">
        Resultados de la Red
      </h3>
      <table className="w-full text-gray-900 border-collapse text-xs leading-snug text-xs">
        <tbody>
          <tr>
            <td className="py-0.5 font-semibold align-top w-28">IP:</td>
            <td className="align-top pr-6">{datos.ip}</td>
            <td className="font-mono align-top">{datos.ipBinario}</td>
          </tr>
          <tr>
            <td className="py-0.5 font-semibold align-top w-28">
              MÁSCARA DE RED: <br /> {datos.mascara} = {datos.mascaraBits}
            </td>
            <td></td>
            <td className="font-mono align-top">{datos.mascaraBinario}</td>
          </tr>
          <tr>
            <td className="py-0.5 font-semibold align-top w-28">
              BITS PARA REDES: <br /> {datos.bitsRedesDecimal} = {datos.bitsRedes}
            </td>
            <td></td>
            <td className="font-mono align-top">{datos.bitsRedesBinario}</td>
          </tr>
          <tr>
            <td className="py-0.5 font-semibold align-top w-28">RED: {datos.red}</td>
            <td></td>
            <td className="font-mono align-top">{datos.redBinario}</td>
          </tr>
          <tr>
            <td className="py-0.5 font-semibold align-top w-28">HOST MÍNIMO: {datos.hostMinimo}</td>
            <td></td>
            <td className="font-mono align-top">{datos.hostMinimoBinario}</td>
          </tr>
          <tr>
            <td className="py-0.5 font-semibold align-top w-28t">HOST MÁXIMO: {datos.hostMaximo}</td>
            <td></td>
            <td className="font-mono align-top">{datos.hostMaximoBinario}</td>
          </tr>
          <tr>
            <td className="py-0.5 font-semibold align-top w-28">BROADCAST: {datos.broadcast}</td>
            <td></td>
            <td className="font-mono align-top">{datos.broadcastBinario}</td>
          </tr>
          <tr>
            <td className="py-0.5 font-bold align-top w-28">TOTAL DE HOSTS EN LA RED: {datos.totalHosts}</td>
            <td></td>
            <td className="align-top text-sm">
              {datos.clase} {datos.tipoRed}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultadosRed;