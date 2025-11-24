"use server";

import { connectDB } from "@/lib/db";
import Settings from "@/models/Settings";
import { uploadToCloudinary } from "@/lib/uploadToCloudinary";
import { revalidatePath } from "next/cache";

export async function updateSettings(formData) {
  await connectDB();

  let settings = await Settings.findOne();
  if (!settings) settings = await Settings.create({});

  // Basic fields
  const adminName = formData.get("adminName");
  const email = formData.get("email");
  const contact = formData.get("contact");
  const bio = formData.get("bio");

  const github = formData.get("github");
  const linkedin = formData.get("linkedin");
  const instagram = formData.get("instagram");
  const twitter = formData.get("twitter");
  const portfolio = formData.get("portfolio");

  const upiId = formData.get("upiId");
  const highlightProjectId = formData.get("highlightProjectId");
  const allowServiceRequests = formData.get("allowServiceRequests") === "on";

  // Profile Image
  const profileFile = formData.get("profileImage");
  let profileImageUrl = settings.profileImage || "";

  if (profileFile && profileFile.size > 0) {
    profileImageUrl = await uploadToCloudinary(profileFile, "profile_images");
  }

  // Update DB
  await Settings.findByIdAndUpdate(
    settings._id,
    {
      adminName,
      email,
      contact,
      bio,
      github,
      linkedin,
      instagram,
      twitter,
      portfolio,
      upiId,
      highlightProjectId,
      allowServiceRequests,
      profileImage: profileImageUrl,
    },
    { new: true }
  );

  console.log("FINAL SAVE:", profileImageUrl);

  revalidatePath("/dashboard/settings");
}
