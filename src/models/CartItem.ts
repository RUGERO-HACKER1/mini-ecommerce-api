import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface ICartItem extends Document {
  productId: Types.ObjectId;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

const CartItemSchema = new Schema<ICartItem>(
  {
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true, min: 1 },
  },
  { timestamps: true }
);

// Ensures one cart entry per product (global cart for this assignment)
CartItemSchema.index({ productId: 1 }, { unique: true });

export const CartItem: Model<ICartItem> = mongoose.model<ICartItem>("CartItem", CartItemSchema);
