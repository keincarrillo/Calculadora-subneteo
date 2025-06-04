import { Router } from "express";
import type { Request, Response } from "express";
import type { SubnetRequest } from "../types/subnetTypes";
import { calcularSubneteo } from "../utils/ipDatos";
import { calcularSubredes } from "../utils/subredesCalculos";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({
    status: "OK",
    routes: ["api/subnet", "api/subredes"],
  });
});

router.post("/api/subnet", (req: any, res: any) => {
  let { ip, mascara, mascaraNueva } = req.body as SubnetRequest;

  const mascaraNum = Number(mascara);
  const mascaraNuevaNum = mascaraNueva ? Number(mascaraNueva) : undefined;

  if (!ip || isNaN(mascaraNum)) {
    return res.status(400).json({ error: "Faltan datos requeridos" });
  }

  const resultado = calcularSubneteo(ip, mascaraNum, mascaraNuevaNum);

  return res.json(resultado);
});

router.post("/api/subredes", (req: any, res: any) => {
  const { ip, mascara, mascaraNueva } = req.body as SubnetRequest;

  const mascaraNum = Number(mascara);
  const mascaraNuevaNum = Number(mascaraNueva);

  if (!ip || isNaN(mascaraNum) || isNaN(mascaraNuevaNum)) {
    return res.status(400).json({ error: "Faltan datos requeridos" });
  }

  if (mascaraNuevaNum <= mascaraNum) {
    return res.status(400).json({
      error: "La nueva máscara debe ser mayor que la máscara original.",
    });
  }

  try {
    const subredes = calcularSubredes(ip, mascaraNum, mascaraNuevaNum);
    return res.json(subredes);
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error.message || "Error al calcular subredes." });
  }
});

export default router;
