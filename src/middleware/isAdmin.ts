import { Request, Response, NextFunction } from "express";
import { fail } from "../utils/apiResponse";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json(fail("Access denied"));
  }
  next();
};
