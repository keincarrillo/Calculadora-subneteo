import ip from "ip";
import type { ResultadoSubneteo } from "../types/subnetTypes";
import {
  toBinaryIP,
  calcularClase,
  calcularBitsBinarios,
  esRedPrivada,
} from "./ipConversiones";

const BITS_IP = 32;

export function calcularSubneteo(
  ipStr: string,
  mascaraBits: number,
  mascaraNuevaBits?: number
): ResultadoSubneteo {
  const mascaraFinalBits = mascaraNuevaBits ?? mascaraBits; // Asigna mascaraNuevaBits si existe, de lo contrario, usa mascaraBits
  const mascaraDecimal = ip.fromPrefixLen(mascaraBits); // Devuelve la mascara en formato de ip
  const nuevaMascaraDecimal = ip.fromPrefixLen(mascaraFinalBits);
  const subnetInfo = ip.cidrSubnet(`${ipStr}/${mascaraFinalBits}`); // Pasa la ip y la mascara a la función cidrSubnet

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
    red: `${subnetInfo.networkAddress}/${mascaraFinalBits}`,
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
