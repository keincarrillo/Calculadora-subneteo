import ip from "ip";
import type { ResultadoSubneteo } from "../types/subnetTypes";

const BITS_IP = 32;

export const toBinaryIP = (ipStr: string): string => {
  return ipStr
    .split(".")
    .map((octet) => Number(octet).toString(2).padStart(8, "0"))
    .join(".");
};

export const calcularClase = (ipStr: string): string => {
  const firstOctet = Number(ipStr.split(".")[0]);
  if (firstOctet >= 1 && firstOctet <= 126) return "CLASE A";
  if (firstOctet >= 128 && firstOctet <= 191) return "CLASE B";
  if (firstOctet >= 192 && firstOctet <= 223) return "CLASE C";
  return "CLASE DESCONOCIDA";
};

export const esRedPrivada = (ipStr: string): string => {
  return ip.isPrivate(ipStr) ? "RED PRIVADA" : "RED PÚBLICA";
};

export const calcularBitsBinarios = (
  bits: number
): {
  decimal: string;
  binario: string;
} => {
  const value = 2 ** bits - 1;
  const octets = [
    (value >>> 24) & 0xff,
    (value >>> 16) & 0xff,
    (value >>> 8) & 0xff,
    value & 0xff,
  ];
  return {
    decimal: octets.join("."),
    binario: octets.map((n) => n.toString(2).padStart(8, "0")).join("."),
  };
};

export function calcularSubneteo(
  ipStr: string,
  mascaraBits: number,
  mascaraNuevaBits?: number
): ResultadoSubneteo {
  const mascaraFinalBits = mascaraNuevaBits ?? mascaraBits;
  
  // CALCULAR LA RED BASE CON LA MÁSCARA ORIGINAL (/24)
  const mascaraDecimal = ip.fromPrefixLen(mascaraBits); // Máscara original
  const nuevaMascaraDecimal = ip.fromPrefixLen(mascaraFinalBits);

  // CALCULAR LA RED BASE CON LA MÁSCARA ORIGINAL
  const subnetInfo = ip.cidrSubnet(`${ipStr}/${mascaraBits}`);

  const bitsHostOriginal = BITS_IP - mascaraBits;
  const { decimal: bitsHostOriginalDecimal, binario: bitsHostOriginalBinario } =
    calcularBitsBinarios(bitsHostOriginal);

  const bitsHostSubred = BITS_IP - mascaraFinalBits;
  const { decimal: bitsHostSubredDecimal, binario: bitsHostSubredBinario } =
    calcularBitsBinarios(bitsHostSubred);

  let bitsRedes = 0;
  let bitsRedesDecimal = "0.0.0.0";
  let bitsRedesBinario = "00000000.00000000.00000000.00000000";

  if (mascaraNuevaBits && mascaraNuevaBits > mascaraBits) {
    bitsRedes = mascaraNuevaBits - mascaraBits;
    const { decimal, binario } = calcularBitsBinarios(bitsRedes);
    bitsRedesDecimal = decimal;
    bitsRedesBinario = binario;
  }

  // Cálculo de los hosts
  // Para la red base, los hosts serán los de la máscara original (/24)
  const totalHostsBase = 2 ** bitsHostOriginal - 2; // Total de hosts para la red base (/24)
  
  // Para las subredes, los hosts serán calculados con la nueva máscara (/27)
  const totalHostsSubred = 2 ** bitsHostSubred - 2; // Total de hosts para la subred (/27)

  // CALCULO DEL BROADCAST: Para la red base, se utiliza la máscara original (/24)
  const broadcastBase = ip.toLong(subnetInfo.networkAddress) + totalHostsBase + 1; // Última dirección de la red
  const broadcastBaseIP = ip.fromLong(broadcastBase); // Convertimos a dirección IP

  // CALCULO DEL BROADCAST PARA LA SUBRED: Para las subredes, se usa la nueva máscara (/27)
  const newSubnetInfo = ip.cidrSubnet(`${ipStr}/${mascaraFinalBits}`);
  const broadcastSubred = ip.toLong(newSubnetInfo.networkAddress) + totalHostsSubred + 1; // Última dirección de la subred
  const broadcastSubredIP = ip.fromLong(broadcastSubred); // Convertimos a dirección IP

  return {
    ip: ipStr,
    mascara: mascaraDecimal,
    mascaraBits,
    bitsHostOriginal,
    bitsHostOriginalDecimal,
    bitsHostOriginalBinario,
    bitsHostSubred,
    bitsHostSubredDecimal,
    bitsHostSubredBinario,
    bitsRedes,
    bitsRedesDecimal,
    bitsRedesBinario,
    nuevaMascaraBits: mascaraFinalBits,
    nuevaMascaraDecimal,
    nuevaMascaraBinario: toBinaryIP(nuevaMascaraDecimal),
    
    // RED BASE CON LA MÁSCARA ORIGINAL
    red: `${subnetInfo.networkAddress}/${mascaraBits}`,  // Red base siempre con /24
    
    // Los hosts para la red base
    hostMinimo: subnetInfo.firstAddress,
    hostMaximo: subnetInfo.lastAddress,
    broadcast: broadcastBaseIP, // El broadcast para la red base calculado correctamente
    totalHosts: totalHostsBase, // Total de hosts con máscara original
    
    // Los hosts para la subred (con nueva máscara)
    hostMinimoSubred: newSubnetInfo.firstAddress,
    hostMaximoSubred: newSubnetInfo.lastAddress,
    broadcastSubred: broadcastSubredIP, // El broadcast para la subred calculado correctamente
    totalHostsSubred: totalHostsSubred, // Total de hosts con máscara nueva (/27)

    clase: calcularClase(ipStr),
    tipoRed: esRedPrivada(ipStr),
    ipBinario: toBinaryIP(ipStr),
    mascaraBinario: toBinaryIP(mascaraDecimal),
    redBinario: toBinaryIP(newSubnetInfo.networkAddress),
    hostMinimoBinario: toBinaryIP(newSubnetInfo.firstAddress),
    hostMaximoBinario: toBinaryIP(newSubnetInfo.lastAddress),
    broadcastBinario: toBinaryIP(newSubnetInfo.broadcastAddress),
  };
}
