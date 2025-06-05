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

  let baseInt = ip.toLong(ipBase);

  for (let i = 0; i < numSubredes; i++) {
    const subredInt = baseInt + i * totalHostsPorSubred;
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
