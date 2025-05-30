import { Router } from "express";
import type { Request, Response } from "express";
import { calcularSubneteo } from "../utils/subnetCalculos";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({
    routes: ["api/subnet"],
  });
});

type SubnetRequest = {
  ip: string;
  mascara: number;
  mascaraNueva?: number;
};

router.post("/api/subnet", (req: any, res: any) => {
  const { ip, mascara, mascaraNueva } = req.body as SubnetRequest;

  if (!ip || typeof mascara !== "number") {
    return res.status(400).json({ error: "Faltan datos requeridos" });
  }

  const resultado = calcularSubneteo(ip, mascara, mascaraNueva);

  return res.json(resultado);
});

export default router;
