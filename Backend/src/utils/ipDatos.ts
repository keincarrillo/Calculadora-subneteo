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
  mascaraBits: number,   // Esto es la máscara original
  mascaraNuevaBits?: number  // Esto es la máscara nueva para subredes
): ResultadoSubneteo {
  // Usamos mascaraBits para la red y mascaraNuevaBits para las subredes
  const mascaraFinalBits = mascaraNuevaBits ?? mascaraBits;  // Si no se pasa mascaraNuevaBits, usa mascaraBits para la red
  
  const mascaraDecimal = ip.fromPrefixLen(mascaraBits); // Usamos la máscara original para la red
  const nuevaMascaraDecimal = ip.fromPrefixLen(mascaraFinalBits);  // Usamos la máscara nueva para las subredes
  
  // Aquí cambiamos para que siempre se use mascaraBits para calcular la red base
  const subnetInfo = ip.cidrSubnet(`${ipStr}/${mascaraBits}`);  // Usamos mascaraBits para calcular la red base

  // Bits para host de la red original
  const bitsHostOriginal = BITS_IP - mascaraBits;
  const { decimal: bitsHostOriginalDecimal, binario: bitsHostOriginalBinario } =
    calcularBitsBinarios(bitsHostOriginal);

  // Bits para host en la subred
  const bitsHostSubred = BITS_IP - mascaraFinalBits;
  const { decimal: bitsHostSubredDecimal, binario: bitsHostSubredBinario } =
    calcularBitsBinarios(bitsHostSubred);

  // Bits para redes (si aplica)
  let bitsRedes = 0;
  let bitsRedesDecimal = "0.0.0.0";
  let bitsRedesBinario = "00000000.00000000.00000000.00000000";

  if (mascaraNuevaBits && mascaraNuevaBits > mascaraBits) {
    bitsRedes = mascaraNuevaBits - mascaraBits;
    const { decimal, binario } = calcularBitsBinarios(bitsRedes);
    bitsRedesDecimal = decimal;
    bitsRedesBinario = binario;
  }

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
    red: `${subnetInfo.networkAddress}/${mascaraBits}`,  // Usamos mascaraBits para la red
    hostMinimo: subnetInfo.firstAddress,
    hostMaximo: subnetInfo.lastAddress,
    broadcast: subnetInfo.broadcastAddress,
    totalHosts: subnetInfo.numHosts,
    clase: calcularClase(ipStr),
    tipoRed: esRedPrivada(ipStr),
    ipBinario: toBinaryIP(ipStr),
    mascaraBinario: toBinaryIP(mascaraDecimal),
    redBinario: toBinaryIP(subnetInfo.networkAddress),
    hostMinimoBinario: toBinaryIP(subnetInfo.firstAddress),
    hostMaximoBinario: toBinaryIP(subnetInfo.lastAddress),
    broadcastBinario: toBinaryIP(subnetInfo.broadcastAddress),
  };
}

