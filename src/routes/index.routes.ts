import { Router } from "express";

// auth
import authRoutes from "./auth.routes";

const router: Router = Router();

//routes
router.use("/auth", authRoutes);

export default router;
