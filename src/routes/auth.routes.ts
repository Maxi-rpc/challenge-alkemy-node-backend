import { Router } from "express";

const router: Router = Router();

router.post("/login", (req, res) => {
  res.json({
    message: "route login",
  });
});

router.post("/register", (req, res) => {
  res.json({
    message: "route register",
  });
});

export default router;
