import { Request, Response } from "express";
import { Product } from "../models/Product";
import { CartItem } from "../models/CartItem";
import { Order } from "../models/Order";
import { asyncHandler } from "../utils/asyncHandler";
import { ok, fail } from "../utils/apiResponse";

export const placeOrder = asyncHandler(async (_req: Request, res: Response) => {
  const cartItems = await CartItem.find();
  if (!cartItems.length) return res.status(400).json(fail("Cart is empty"));

  // Validate all products still exist & compute totals
  const items = [];
  let totalPrice = 0;

  for (const ci of cartItems) {
    const product = await Product.findById(ci.productId);
    if (!product) return res.status(400).json(fail("One or more products no longer exist"));

    const price = product.price;
    const subtotal = price * ci.quantity;
    items.push({
      productId: product._id,
      quantity: ci.quantity,
      priceAtPurchase: price,
      subtotal,
    });
    totalPrice += subtotal;
  }

  const order = await Order.create({ items, totalPrice });

  // Clear cart after successful order
  await CartItem.deleteMany({});

  res.status(201).json(ok(order, "Order placed"));
});

export const getOrders = asyncHandler(async (_req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(ok(orders));
});

export const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) return res.status(404).json(fail("Order not found"));
  res.json(ok(order));
});

export const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findByIdAndDelete(req.params.id);
  if (!order) return res.status(404).json(fail("Order not found"));
  res.json(ok(order, "Order cancelled"));
});
