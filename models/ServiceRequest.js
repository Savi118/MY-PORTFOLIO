import mongoose from "mongoose";

const ServiceRequestSchema = new mongoose.Schema(
  {
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
    customerName: String,
    email: String,
    contact: String,
    projectDetails: String,

    selectedPages: Number,
    customPages: Number,

    addOns: [
      {
        title: String,
        price: Number,
      },
    ],

    totalPrice: Number,
    transactionId: String,

    status: {
      type: String,
      enum: ["Pending", "Completed"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.models.ServiceRequest ||
  mongoose.model("ServiceRequest", ServiceRequestSchema);
