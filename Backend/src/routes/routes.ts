import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.json({
    ok: true,
    routes: ["api/subnet"],
  });
});

router.post("/api/subnet", (req, res) => {
  res.json({
    ok: true,
    subnet: {ip: "ok"},
  });
});


export default router;
