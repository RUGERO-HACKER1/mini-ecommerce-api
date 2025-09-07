import { Router } from "express";
import {
  placeOrder,
  getOrders,
  getOrderById,
  deleteOrder,
} from "../controllers/orderController";
import { protect } from "../middleware/protect";

const router = Router();

// Protected routes — only logged-in users can access
router.post("/", protect, placeOrder);        // Create an order
router.get("/", protect, getOrders);          // Get all orders
router.get("/:id", protect, getOrderById);    // Get order by ID
router.delete("/:id", protect, deleteOrder);  // Delete order by ID

export default router;
