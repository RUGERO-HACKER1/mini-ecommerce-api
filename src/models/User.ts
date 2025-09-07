import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcryptjs";


export interface IUser extends Document {
  email: string;
  password: string;
  role: "user" | "admin";
  comparePassword(candidate: string): Promise<boolean>;
}

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  const user = this as IUser;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});


UserSchema.methods.comparePassword = async function (candidate: string): Promise<boolean> {
  const user = this as IUser;
  return bcrypt.compare(candidate, user.password);
};


export const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);
