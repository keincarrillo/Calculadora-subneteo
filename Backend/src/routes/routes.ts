import { Router } from "express";
import type { Request, Response } from "express";
import type { SubnetRequest } from "../types/subnetTypes";
import { calcularSubneteo } from "../utils/subnetCalculos";

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
  let { ip, mascara, mascaraNueva } = req.body as SubnetRequest;
  const mascaraNum = Number(mascara);
  const mascaraNuevaNum = mascaraNueva ? Number(mascaraNueva) : undefined;

  !ip || isNaN(mascaraNum)
    ? res.status(400).json({ error: "Faltan datos requeridos" })
    : null;

  const resultado = calcularSubneteo(ip, mascaraNum, mascaraNuevaNum);

  return res.json(resultado);
});

export default router;
