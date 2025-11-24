"use server";

import { connectDB } from "@/lib/db";
import Project from "@/models/Project";
import cloudinary from "@/lib/cloudinary";
import { revalidatePath } from "next/cache";

export async function addProject(formData) {
  await connectDB();

  const title = formData.get("title");
  const description = formData.get("description");
  const techStack = formData
    .get("techStack")
    .split(",")
    .map((s) => s.trim());

  const github = formData.get("github");
  const live = formData.get("live");
  const highlight = formData.get("highlight") === "on";

  // ⭐ FILE UPLOAD SECTION
  const file = formData.get("image"); // <input type="file" />

  let imageUrl = "";

  if (file && file.size > 0) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploaded = await cloudinary.uploader.upload_stream({
      folder: "saksham_projects_img",
    });

    // cloudinary upload-stream wrapper:
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "saksham_projects" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(buffer);
    });

    imageUrl = result.secure_url;
  }

  await Project.create({
    title,
    description,
    techStack,
    image: imageUrl,
    github,
    live,
    highlight,
  });

  revalidatePath("/dashboard/projects");
}

export async function deleteProject(id) {
  await connectDB();
  await Project.findByIdAndDelete(id);
  revalidatePath("/dashboard/projects");
}

export async function updateProject(id, formData) {
  await connectDB();

  const title = formData.get("title");
  const description = formData.get("description");
  const techStack = formData
    .get("techStack")
    .split(",")
    .map((s) => s.trim());

  const github = formData.get("github");
  const live = formData.get("live");
  const highlight = formData.get("highlight") === "on";

  // OPTIONAL: Handle new image
  let imageUrl = formData.get("existingImage"); // default old image

  const file = formData.get("image");

  if (file && file.size > 0) {
    // Upload to Cloudinary — same as addProject
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "saksham_projects" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(buffer);
    });

    imageUrl = result.secure_url;
  }

  await Project.findByIdAndUpdate(id, {
    title,
    description,
    techStack,
    github,
    live,
    highlight,
    image: imageUrl,
  });

  revalidatePath("/dashboard/projects");
}
