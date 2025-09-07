import { Router } from "express";
import { body } from "express-validator";
import { createProduct, getProducts , deleteProduct} from "../controllers/productController";
import { validateRequest } from "../middleware/validateRequest";

const router = Router();

router.post(
  "/",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("price").isFloat({ min: 0 }).withMessage("Price must be a positive number"),
  ],
  validateRequest,
  createProduct
);

router.get("/", getProducts);

export default router;
