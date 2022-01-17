import { Router } from "express";
import { authController } from "../controllers/index.controllers";

const router: Router = Router();

router.post("/login", authController.login);

router.post("/register", authController.register);

export default router;
