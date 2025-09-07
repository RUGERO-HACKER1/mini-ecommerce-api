import { Router } from "express";
import productRoutes from "./productRoutes";
import cartRoutes from "./cartRoutes";
import orderRoutes from "./orderRoutes";
import authRoutes from "./authRoutes";

const router = Router();

router.use("/auth", authRoutes); // ✅ Enables /api/auth/signup and /api/auth/login
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/orders", orderRoutes);

export default router;
