"use server";

import { connectDB } from "@/lib/db";
import Service from "@/models/Service";
import { revalidatePath } from "next/cache";

export async function addService(formData) {
  await connectDB();

  const title = formData.get("title");
  const category = formData.get("category");
  const description = formData.get("description");
  const basePrice = Number(formData.get("basePrice"));
  const pricePerPage = Number(formData.get("pricePerPage"));
  const hasPages = formData.get("hasPages") === "on";

  // NEW: Parse add-ons JSON coming from hidden input
  let addOns = [];
  try {
    const raw = formData.get("addOnsJson");
    addOns = raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("❌ Add-on JSON parse failed:", err);
    addOns = [];
  }

  await Service.create({
    title,
    category,
    description,
    basePrice,
    pricePerPage,
    hasPages,
    addOns, // save parsed add-ons array
  });

  revalidatePath("/dashboard/services");
}

export async function deleteService(id) {
  await connectDB();
  await Service.findByIdAndDelete(id);
  revalidatePath("/dashboard/services");
}

export async function addAddOn(serviceId, formData) {
  await connectDB();

  const title = formData.get("addOnTitle");
  const price = Number(formData.get("addOnPrice"));

  await Service.findByIdAndUpdate(serviceId, {
    $push: { addOns: { title, price } },
  });

  revalidatePath("/dashboard/services");
}
