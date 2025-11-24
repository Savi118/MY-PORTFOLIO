"use server";

import { connectDB } from "@/lib/db";
import ServiceRequest from "@/models/ServiceRequest";
import { revalidatePath } from "next/cache";

export async function markCompleted(id) {
  await connectDB();
  await ServiceRequest.findByIdAndUpdate(id, { status: "Completed" });
  revalidatePath("/dashboard/requests");
}

export async function deleteRequest(id) {
  await connectDB();
  await ServiceRequest.findByIdAndDelete(id);
  revalidatePath("/dashboard/requests");
}
