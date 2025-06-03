import ip from "ip";
export const toBinaryIP = (ipStr: string): string => {
  return ipStr
    .split(".")
    .map((octet) => Number(octet).toString(2).padStart(8, "0"))
    .join(".");
};

export const calcularClase = (ipStr: string): string => {
  const firstOctet = Number(ipStr.split(".")[0]);
  if (firstOctet >= 1 && firstOctet <= 126) return "CLASE A";
  if (firstOctet >= 128 && firstOctet <= 191) return "CLASE B";
  if (firstOctet >= 192 && firstOctet <= 223) return "CLASE C";
  return "CLASE DESCONOCIDA";
};

export const esRedPrivada = (ipStr: string): string => {
  return ip.isPrivate(ipStr) ? "RED PRIVADA" : "RED PÚBLICA";
};

export const calcularBitsBinarios = (
  bits: number
): {
  decimal: string;
  binario: string;
} => {
  const value = 2 ** bits - 1;
  const octets = [
    (value >>> 24) & 0xff,
    (value >>> 16) & 0xff,
    (value >>> 8) & 0xff,
    value & 0xff,
  ];
  return {
    decimal: octets.join("."),
    binario: octets.map((n) => n.toString(2).padStart(8, "0")).join("."),
  };
};
