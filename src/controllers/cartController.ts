import { Request, Response } from "express";
import { Types } from "mongoose";
import { Product } from "../models/Product";
import { CartItem } from "../models/CartItem";
import { asyncHandler } from "../utils/asyncHandler";
import { ok, fail } from "../utils/apiResponse";

interface CartBody {
  productId?: string;
  quantity?: number;
}

export const addToCart = asyncHandler(async (req: Request<{}, {}, CartBody>, res: Response) => {
  const { productId, quantity } = req.body;

  if (!productId || !Types.ObjectId.isValid(productId)) {
    return res.status(400).json(fail("Valid productId is required"));
  }
  if (!quantity || quantity < 1) {
    return res.status(400).json(fail("quantity must be >= 1"));
  }

  const productExists = await Product.findById(productId);
  if (!productExists) return res.status(404).json(fail("Product not found"));

  const item = await CartItem.findOneAndUpdate(
    { productId },
    { $set: { productId }, $inc: { quantity } },
    { upsert: true, new: true }
  );

  res.status(201).json(ok(item, "Item added to cart"));
});

export const getCart = asyncHandler(async (_req, res) => {
  const items = await CartItem.find().populate("productId").sort({ createdAt: -1 });

  const detailed = items.map(i => {
    const product = i.productId as any;
    const price = product?.price ?? 0;
    const subtotal = price * i.quantity;
    return { _id: i._id, product: product, quantity: i.quantity, subtotal };
  });

  res.json(ok(detailed));
});

export const updateCartItem = (async (req :Request, res:Response) => {
  const { productId } = req.params;
  const { quantity } = req.body;

  if (!Types.ObjectId.isValid(productId)) return res.status(400).json(fail("Invalid productId"));
  if (quantity === undefined || quantity < 1) return res.status(400).json(fail("quantity must be >= 1"));

  const item = await CartItem.findOneAndUpdate({ productId }, { $set: { quantity } }, { new: true });
  if (!item) return res.status(404).json(fail("Cart item not found"));

  res.json(ok(item, "Cart item updated"));
});

export const removeCartItem = (async (req :Request, res:Response) => {
  const { productId } = req.params;
  if (!Types.ObjectId.isValid(productId)) return res.status(400).json(fail("Invalid productId"));

  const item = await CartItem.findOneAndDelete({ productId });
  if (!item) return res.status(404).json(fail("Cart item not found"));

  res.json(ok(item, "Cart item removed"));
});
