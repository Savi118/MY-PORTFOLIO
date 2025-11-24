import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    techStack: [{ type: String }], // array of tags
    image: { type: String }, // image URL
    github: { type: String },
    live: { type: String },
    highlight: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
