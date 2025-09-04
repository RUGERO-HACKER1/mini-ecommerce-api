import { Router } from "express";
import {
  addToCart,
  getCart,
  updateCartItem,
  removeCartItem,
} from "../controllers/cartController";

const router = Router();

router.post("/", addToCart);                  // POST /cart
router.get("/", getCart);                     // GET /cart
router.put("/:productId", updateCartItem);    // PUT /cart/:productId
router.delete("/:productId", removeCartItem); // DELETE /cart/:productId

export default router;
