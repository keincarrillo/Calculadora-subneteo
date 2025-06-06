import ip from "ip";
import type { ResultadoSubneteo } from "../types/subnetTypes";
import { calcularSubneteo } from "./ipDatos";

export function calcularSubredes(
  ipBase: string,
  mascaraBitsOriginal: number,
  mascaraBitsNueva: number
): ResultadoSubneteo[] {
  if (mascaraBitsNueva <= mascaraBitsOriginal) {
    throw new Error(
      "La nueva máscara debe ser mayor que la máscara original para subdividir."
    );
  }

  const numSubredes = 2 ** (mascaraBitsNueva - mascaraBitsOriginal);
  const totalHostsPorSubred = 2 ** (32 - mascaraBitsNueva);

  const subredes: ResultadoSubneteo[] = [];

  // Asegurándonos de que la IP base es calculada correctamente a partir de la IP proporcionada
  const baseRed = ip.cidrSubnet(`${ipBase}/${mascaraBitsOriginal}`).networkAddress;
  let baseInt = ip.toLong(baseRed); // Usar la red base calculada

  for (let i = 0; i < numSubredes; i++) {
    const subredInt = baseInt + i * totalHostsPorSubred; // Incrementamos según el total de hosts por subred
    const subredIp = ip.fromLong(subredInt);

    const resultado = calcularSubneteo(
      subredIp,
      mascaraBitsNueva,
      mascaraBitsNueva
    );

    subredes.push(resultado);
  }

  return subredes;
}

