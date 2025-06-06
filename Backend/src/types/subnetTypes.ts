export type SubnetRequest = {
  ip: string;
  mascara: string;
  mascaraNueva?: string;
};

export interface ResultadoSubneteo {
  ip: string;
  mascara: string;
  mascaraBits: number;

  bitsHostOriginal: number;
  bitsHostOriginalDecimal: string;
  bitsHostOriginalBinario: string;

  bitsHostSubred: number;
  bitsHostSubredDecimal: string;
  bitsHostSubredBinario: string;

  bitsRedes: number;
  bitsRedesDecimal: string;
  bitsRedesBinario: string;

  nuevaMascaraBits: number;
  nuevaMascaraDecimal: string;
  nuevaMascaraBinario: string;

  red: string;
  hostMinimo: string;
  hostMaximo: string;
  broadcast: string;
  totalHosts: number;

  hostMinimoSubred?: string;  
  hostMaximoSubred?: string;  
  broadcastSubred?: string;   
  totalHostsSubred?: number;  

  ipBinario: string;
  mascaraBinario: string;
  redBinario: string;
  hostMinimoBinario: string;
  hostMaximoBinario: string;
  broadcastBinario: string;

  clase: string;
  tipoRed: string;
}

