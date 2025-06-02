export type resultRed = {
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
};

export type PropsR = {
  datos: resultRed;
};

export type PropsI = {
  onResultado: (res: resultRed) => void;
};
