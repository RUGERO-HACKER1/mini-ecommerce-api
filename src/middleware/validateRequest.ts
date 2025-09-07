import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { fail } from "../utils/apiResponse";

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(fail("Validation failed", errors.array()));
  }
  next();
};
