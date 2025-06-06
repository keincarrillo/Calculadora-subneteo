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

  // Resultados de la red base
  red: string;
  hostMinimo: string;
  hostMaximo: string;
  broadcast: string;
  totalHosts: number;
  clase: string;
  tipoRed: string;

  // Datos binarios
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

  // Nuevos campos adicionales para la subred
  hostMinimoSubred?: string;  // Host mínimo de la subred (opcional)
  hostMaximoSubred?: string;  // Host máximo de la subred (opcional)
  broadcastSubred?: string;   // Broadcast de la subred (opcional)
  totalHostsSubred?: number;  // Total de hosts en la subred (opcional)

  // Opcionales si es necesario para más información de la red o subred
  nuevaRed?: string;  // Nueva red calculada después de aplicar la máscara (opcional)
  nuevaSubred?: string; // Detalles adicionales sobre la subred (opcional)

  // Agregando los valores binarios de la subred
  hostMinimoSubredBinario?: string;  // Binario del host mínimo de la subred
  hostMaximoSubredBinario?: string;  // Binario del host máximo de la subred
  broadcastSubredBinario?: string;   // Binario del broadcast de la subred
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
