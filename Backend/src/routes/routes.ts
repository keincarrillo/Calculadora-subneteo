import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.json({
    ok: true,
    routes: ["api/subnet", "api/scan"],
  });
});

export default router;
