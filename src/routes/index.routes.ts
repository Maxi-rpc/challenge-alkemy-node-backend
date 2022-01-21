import { Router } from "express";

// auth
import authRoutes from "./auth.routes";

const router: Router = Router();

//routes
router.use("/auth", authRoutes);
//router.use('/characters');
//router.use('/movies');

export default router;
