export type resultRed = {
  ip: string;
  mascara: string;
  mascaraBits: number;
  bitsHostDecimal: string;
  bitsHost: number;
  red: string;
  hostMinimo: string;
  hostMaximo: string;
  broadcast: string;
  totalHosts: number;
  clase: string;
  tipoRed: string;

  ipBinario: string;
  mascaraBinario: string;
  bitsHostBinario: string;
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
