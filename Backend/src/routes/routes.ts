import { Router} from "express";
import type { Request, Response } from "express";
import { calcularSubneteo } from "../utils/subnetCalculos";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({
    ok: true,
    routes: ["api/subnet"],
  });
});

router.post(
  "/api/subnet",
  (
    req: Request<{}, {}, { ip: string; mascara: number; mascaraNueva?: number }>,
    res: Response
  ) => {
    const { ip, mascara, mascaraNueva } = req.body;

    if (!ip || typeof mascara !== "number") {
      return res.status(400).json({ error: "Faltan datos requeridos" });
    }

    const resultado = calcularSubneteo(ip, mascara, mascaraNueva);

    return res.json({
      ok: true,
      resultado,
    });
  }
);

export default router;
