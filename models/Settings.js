import mongoose from "mongoose";

const SettingsSchema = new mongoose.Schema(
  {
    adminName: String,
    email: String,
    contact: String,
    bio: String,

    profileImage: String,

    github: String,
    linkedin: String,
    instagram: String,
    twitter: String,
    portfolio: String,

    upiId: String,

    highlightProjectId: String,
    allowServiceRequests: Boolean,
  },
  { timestamps: true }
);

export default mongoose.models.Settings ||
  mongoose.model("Settings", SettingsSchema);
