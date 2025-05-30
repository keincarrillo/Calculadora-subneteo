import ip from "ip";

export interface ResultadoSubneteo {
  ip: string;
  mascara: string;
  mascaraBits: number;
  bitsRedesDecimal: string;
  bitsRedes: number;
  red: string;
  hostMinimo: string;
  hostMaximo: string;
  broadcast: string;
  totalHosts: number;
  clase: string;
  tipoRed: string;
  ipBinario: string;
  mascaraBinario: string;
  bitsRedesBinario: string;
  redBinario: string;
  hostMinimoBinario: string;
  hostMaximoBinario: string;
  broadcastBinario: string;
}

export function toBinaryIP(ipStr: string) {
  return ipStr
    .split(".")
    .map((octet) => Number(octet).toString(2).padStart(8, "0"))
    .join(".");
}

export function calcularClase(ipStr: string): string {
  const firstOctet = Number(ipStr.split(".")[0]);
  if (firstOctet >= 1 && firstOctet <= 126) return "CLASE A";
  if (firstOctet >= 128 && firstOctet <= 191) return "CLASE B";
  if (firstOctet >= 192 && firstOctet <= 223) return "CLASE C";
  return "CLASE DESCONOCIDA";
}

export function esRedPrivada(ipStr: string): string {
  return ip.isPrivate(ipStr) ? "RED PRIVADA" : "RED PÚBLICA";
}

export function calcularSubneteo(
  ipStr: string,
  mascaraBits: number,
  mascaraNuevaBits?: number
): ResultadoSubneteo {
  const mascaraDecimal = ip.fromPrefixLen(mascaraBits);

  let bitsRedes = 0;
  if (mascaraNuevaBits && mascaraNuevaBits > mascaraBits) {
    bitsRedes = mascaraNuevaBits - mascaraBits;
  }
  const bitsRedesDecimal = bitsRedes > 0 ? `0.0.0.${2 ** bitsRedes - 1}` : "0.0.0.0";

  const subnetInfo = ip.subnet(ipStr, mascaraDecimal);

  return {
    ip: ipStr,
    mascara: mascaraDecimal,
    mascaraBits,
    bitsRedesDecimal,
    bitsRedes,
    red: `${subnetInfo.networkAddress}/${mascaraBits}`,
    hostMinimo: subnetInfo.firstAddress,
    hostMaximo: subnetInfo.lastAddress,
    broadcast: subnetInfo.broadcastAddress,
    totalHosts: subnetInfo.numHosts,
    clase: calcularClase(ipStr),
    tipoRed: esRedPrivada(ipStr),

    ipBinario: toBinaryIP(ipStr),
    mascaraBinario: toBinaryIP(mascaraDecimal),
    bitsRedesBinario: toBinaryIP(bitsRedesDecimal),
    redBinario: toBinaryIP(subnetInfo.networkAddress),
    hostMinimoBinario: toBinaryIP(subnetInfo.firstAddress),
    hostMaximoBinario: toBinaryIP(subnetInfo.lastAddress),
    broadcastBinario: toBinaryIP(subnetInfo.broadcastAddress),
  };
}
