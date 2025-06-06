export type resultRed = {
  ip: string;
  mascara: string;
  mascaraBits: number;

  bitsHostOriginal: number;
  bitsHostOriginalDecimal: string;
  bitsHostOriginalBinario: string;

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

  bitsRedes: number;
  bitsRedesDecimal: string;
  bitsRedesBinario: string;
  nuevaMascaraBits: number;
  nuevaMascaraDecimal: string;
  nuevaMascaraBinario: string;

  hostMinimoSubred?: string; 
  hostMaximoSubred?: string;  
  broadcastSubred?: string;   
  totalHostsSubred?: number;  

  nuevaRed?: string; 
  nuevaSubred?: string; 

  hostMinimoSubredBinario?: string; 
  hostMaximoSubredBinario?: string; 
  broadcastSubredBinario?: string;  
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
