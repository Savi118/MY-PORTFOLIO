import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true }, // e.g., "Web Development"

    description: { type: String },

    basePrice: { type: Number, required: true }, // Example: 3000
    pricePerPage: { type: Number, default: 0 }, // For multi-page sites
    hasPages: { type: Boolean, default: false },

    addOns: [
      {
        title: String,
        price: Number,
      },
    ],

    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Service ||
  mongoose.model("Service", ServiceSchema);
