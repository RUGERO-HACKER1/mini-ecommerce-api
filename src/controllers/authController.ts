import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/User";
import { ok, fail } from "../utils/apiResponse";
import { asyncHandler } from "../utils/asyncHandler";

const generateToken = (userId: string) =>
  jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: "1h" });

export const signup = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json(fail("Email already in use"));
  }

  const user = await User.create({ email, password });
  const token = generateToken(user._id.toString());

  res.status(201).json(ok({ token }, "Signup successful"));
});


export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json(fail("Invalid credentials"));
  }
  const token = generateToken(user._id.toString());
  res.json(ok({ token }, "Login successful"));
});
