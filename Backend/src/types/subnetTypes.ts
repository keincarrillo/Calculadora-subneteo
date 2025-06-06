export type SubnetRequest = {
  ip: string;
  mascara: string;
  mascaraNueva?: string;
};

export interface ResultadoSubneteo {
  ip: string;
  mascara: string;
  mascaraBits: number;

  // Bits de host para la red original
  bitsHostOriginal: number;
  bitsHostOriginalDecimal: string;
  bitsHostOriginalBinario: string;

  // Bits de host para las subredes
  bitsHostSubred: number;
  bitsHostSubredDecimal: string;
  bitsHostSubredBinario: string;

  // Bits de redes, para cuando se divide la red
  bitsRedes: number;
  bitsRedesDecimal: string;
  bitsRedesBinario: string;

  // Nueva máscara para las subredes
  nuevaMascaraBits: number;
  nuevaMascaraDecimal: string;
  nuevaMascaraBinario: string;

  // Resultados relacionados con la red base
  red: string;
  hostMinimo: string;
  hostMaximo: string;
  broadcast: string;
  totalHosts: number;

  // Datos adicionales para subredes
  hostMinimoSubred?: string;  // Opcional, solo para subredes
  hostMaximoSubred?: string;  // Opcional, solo para subredes
  broadcastSubred?: string;   // Opcional, solo para subredes
  totalHostsSubred?: number;  // Opcional, solo para subredes

  // Cálculos binarios
  ipBinario: string;
  mascaraBinario: string;
  redBinario: string;
  hostMinimoBinario: string;
  hostMaximoBinario: string;
  broadcastBinario: string;

  // Para mostrar tipo de red (privada/pública) y clase
  clase: string;
  tipoRed: string;
}

