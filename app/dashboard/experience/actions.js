"use server";

import { connectDB } from "@/lib/db";
import { uploadToCloudinary } from "@/lib/uploadToCloudinary";
import Experience from "@/models/Experience";
import { revalidatePath } from "next/cache";

export async function addExperience(formData) {
  await connectDB();

  const role = formData.get("role");
  const company = formData.get("company");
  const start = formData.get("start");
  const end = formData.get("end") || "Present";
  const description = formData.get("description");
  const fileOffer = formData.get("offerLetter");
  const fileCertificate = formData.get("certificate");

  let offerUrl = "";
  let certificateUrl = "";

  if (fileOffer && fileOffer.size > 0) {
    offerUrl = await uploadToCloudinary(fileOffer, "offer_letters");
  }

  if (fileCertificate && fileCertificate.size > 0) {
    certificateUrl = await uploadToCloudinary(fileCertificate, "certificates");
  }

  await Experience.create({
    role,
    company,
    start,
    end,
    description,
    offerLetterUrl: offerUrl,
    certificateUrl: certificateUrl,
  });

  revalidatePath("/dashboard/experience");
}

export async function deleteExperience(id) {
  await connectDB();
  await Experience.findByIdAndDelete(id);
  revalidatePath("/dashboard/experience");
}

export async function updateExperience(id, formData) {
  await connectDB();

  const role = formData.get("role");
  const company = formData.get("company");
  const start = formData.get("start");
  const end = formData.get("end") || "Present";
  const description = formData.get("description");

  const fileOffer = formData.get("offerLetter");
  const fileCertificate = formData.get("certificate");

  // OLD existing URLs (hidden inputs)
  let existingOffer = formData.get("existingOffer");
  let existingCertificate = formData.get("existingCertificate");

  let offerUrl = existingOffer || "";
  let certificateUrl = existingCertificate || "";

  // Upload NEW offer letter if provided
  if (fileOffer && fileOffer.size > 0) {
    offerUrl = await uploadToCloudinary(fileOffer, "offer_letters");
  }

  // Upload NEW certificate if provided
  if (fileCertificate && fileCertificate.size > 0) {
    certificateUrl = await uploadToCloudinary(fileCertificate, "certificates");
  }

  await Experience.findByIdAndUpdate(id, {
    role,
    company,
    start,
    end,
    description,
    offerLetterUrl: offerUrl,
    certificateUrl: certificateUrl,
  });

  revalidatePath("/dashboard/experience");
}
