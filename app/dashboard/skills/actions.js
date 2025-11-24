"use server";

import { connectDB } from "@/lib/db";
import Skill from "@/models/Skill";
import { revalidatePath } from "next/cache";

export async function addSkill(formData) {
  await connectDB();

  const name = formData.get("name");
  const level = formData.get("level");

  await Skill.create({ name, level });

  revalidatePath("/dashboard/skills");
}

export async function deleteSkill(id) {
  await connectDB();

  await Skill.findByIdAndDelete(id);

  revalidatePath("/dashboard/skills");
}

export async function updateSkill(id, formData) {
  await connectDB();

  const name = formData.get("name");
  const level = formData.get("level");

  await Skill.findByIdAndUpdate(id, { name, level });

  revalidatePath("/dashboard/skills");
}
