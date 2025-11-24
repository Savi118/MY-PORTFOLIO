"use server";

import { connectDB } from "@/lib/db";
import ServiceRequest from "@/models/ServiceRequest";
import Service from "@/models/Service";
import { revalidatePath } from "next/cache";

export async function submitServiceRequest(formData) {
  await connectDB();

  const serviceId = formData.get("serviceId");
  const customerName = formData.get("customerName");
  const email = formData.get("email");
  const contact = formData.get("contact");
  const projectDetails = formData.get("projectDetails");

  const selectedPages = Number(formData.get("selectedPages"));
  const customPages = Number(formData.get("customPages"));

  const addOns = JSON.parse(formData.get("selectedAddOnsJson") || "[]");
  const transactionId = formData.get("transactionId");

  if (!transactionId || transactionId.trim() === "") {
    throw new Error("Transaction ID is required before submitting request");
  }

  // Calculate total price again for security
  const service = await Service.findById(serviceId);
  let pageCost = 0;

  if (service.hasPages) {
    const pagesToUse =
      selectedPages === 99 ? customPages : selectedPages;

    pageCost =
      pagesToUse > 1 ? (pagesToUse - 1) * service.pricePerPage : 0;
  }

  const addOnCost = addOns.reduce((acc, a) => acc + a.price, 0);
  const totalPrice = service.basePrice + pageCost + addOnCost;

  await ServiceRequest.create({
    serviceId,
    customerName,
    email,
    contact,
    projectDetails,
    selectedPages,
    customPages,
    addOns,
    transactionId,
    totalPrice,
  });

  revalidatePath("/dashboard/requests");
}
