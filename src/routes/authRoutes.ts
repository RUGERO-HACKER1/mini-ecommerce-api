import { Router } from "express";
import { body } from "express-validator";
import { signup, login } from "../controllers/authController";
import { validateRequest } from "../middleware/validateRequest";

const router = Router();

router.post(
  "/signup",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  ],
  validateRequest,
  signup
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  validateRequest,
  login
);

export default router;
