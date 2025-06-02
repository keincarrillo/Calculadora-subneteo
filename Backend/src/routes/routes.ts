import { Router } from "express";
import type { Request, Response } from "express";
import type { SubnetRequest } from "../types/subnetTypes";
import { calcularSubneteo } from "../utils/subnetCalculos";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({
    routes: ["api/subnet"],
  });
});

router.post("/api/subnet", (req: any, res: any) => {
  let { ip, mascara, mascaraNueva } = req.body as SubnetRequest;

  // Parseo explícito
  const mascaraNum = Number(mascara);
  const mascaraNuevaNum =
    mascaraNueva !== undefined ? Number(mascaraNueva) : undefined;

  // Validación
  if (!ip || isNaN(mascaraNum)) {
    return res.status(400).json({ error: "Faltan datos requeridos" });
  }

  // Usar los datos ya parseados
  const resultado = calcularSubneteo(ip, mascaraNum, mascaraNuevaNum);

  return res.json(resultado);
});

export default router;
