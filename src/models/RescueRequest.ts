import mongoose from "mongoose";

const RescueRequestSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    mediaUrl: { type: String, default: "" },
  },
  { timestamps: true }
);

export const RescueRequest = mongoose.models.RescueRequest || mongoose.model("RescueRequest", RescueRequestSchema);
