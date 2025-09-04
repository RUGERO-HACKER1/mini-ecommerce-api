import { Router } from "express";
import {
  placeOrder,
  getOrders,
  getOrderById,
  deleteOrder,
} from "../controllers/orderController";

const router = Router();

router.post("/", placeOrder);        // POST /orders
router.get("/", getOrders);          // GET /orders
router.get("/:id", getOrderById);    // GET /orders/:id
router.delete("/:id", deleteOrder);  // DELETE /orders/:id

export default router;
