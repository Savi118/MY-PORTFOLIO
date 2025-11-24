import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    level: { type: Number, required: true }, // proficiency %
  },
  { timestamps: true }
);

export default mongoose.models.Skill || mongoose.model("Skill", SkillSchema);
