export type resultRed = {
  ip: string;
  mascara: string;
  mascaraBits: number;

  // Bits host de la red original
  bitsHostOriginal: number;
  bitsHostOriginalDecimal: string;
  bitsHostOriginalBinario: string;

  // Bits host en la subred
  bitsHostSubred: number;
  bitsHostSubredDecimal: string;
  bitsHostSubredBinario: string;

  red: string;
  hostMinimo: string;
  hostMaximo: string;
  broadcast: string;
  totalHosts: number;
  clase: string;
  tipoRed: string;

  ipBinario: string;
  mascaraBinario: string;
  redBinario: string;
  hostMinimoBinario: string;
  hostMaximoBinario: string;
  broadcastBinario: string;

  // Nuevos campos para la subred
  bitsRedes: number;
  bitsRedesDecimal: string;
  bitsRedesBinario: string;
  nuevaMascaraBits: number;
  nuevaMascaraDecimal: string;
  nuevaMascaraBinario: string;
};

export type PropsR = {
  datos: resultRed;
};

export interface PropsI {
  onResultado: (res: resultRed) => void;
  onSubredes?: (subreds: resultRed[]) => void;
}

export type PropsS = {
  subredes: resultRed[];
};

export type SubredItemProps = {
  idx: number;
  datos: resultRed;
};
