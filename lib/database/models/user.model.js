import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String },
  photo: { type: String, required: true },
  plan: { type: String, required: true, default: "Starter" },
  credits: { type: Number, required: true, default: 150 },
  createdAt: { type: Date, default: Date.now },
  lastCreditReset: { type: Date, default: Date.now }
});

const User = models.User || model("User", UserSchema);

export default User;