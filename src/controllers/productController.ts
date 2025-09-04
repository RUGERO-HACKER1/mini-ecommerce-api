import { Request, Response } from "express";
import { Product } from "../models/Product";
import { asyncHandler } from "../utils/asyncHandler";
import { ok, fail } from "../utils/apiResponse";

interface ProductBody {
  name?: string;
  description?: string;
  price?: number;
  imageUrl?: string;
  category?: string;
}

export const createProduct = asyncHandler(async (req: Request<{}, {}, ProductBody>, res: Response) => {
  const { name, description, price, imageUrl, category } = req.body;

  if (!name || !description || price === undefined) {
    return res.status(400).json(fail("name, description and price are required"));
  }

  const product = await Product.create({ name, description, price, imageUrl, category });
  return res.status(201).json(ok(product, "Product created"));
});

export const getProducts = asyncHandler(async (_req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(ok(products));
});

export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json(fail("Product not found"));
  res.json(ok(product));
});

export const updateProduct = asyncHandler(async (req: Request<{ id: string }, {}, ProductBody>, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!product) return res.status(404).json(fail("Product not found"));
  res.json(ok(product, "Product updated"));
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).json(fail("Product not found"));
  res.json(ok(product, "Product deleted"));
});
