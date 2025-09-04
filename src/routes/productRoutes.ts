import { Router } from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";

const router = Router();

router.post("/", createProduct);       // POST /products
router.get("/", getProducts);          // GET /products
router.get("/:id", getProductById);    // GET /products/:id
router.put("/:id", updateProduct);     // PUT /products/:id
router.delete("/:id", deleteProduct);  // DELETE /products/:id

export default router;
