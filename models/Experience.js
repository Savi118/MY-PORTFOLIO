import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema(
  {
    role: { type: String, required: true },
    company: { type: String, required: true },
    start: { type: String, required: true },
    end: { type: String, default: "Present" },
    description: { type: String },
    offerLetterUrl: { type: String, default: "" },
    certificateUrl: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.models.Experience ||
  mongoose.model("Experience", ExperienceSchema);
