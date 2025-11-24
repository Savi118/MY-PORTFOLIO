export const dynamic = "force-dynamic";
export const revalidate = 0;

import { connectDB } from "@/lib/db";
import ServiceRequest from "@/models/ServiceRequest";
import Service from "@/models/Service";
import RequestClient from "./RequestClient";

export default async function Page() {
  await connectDB();

  const requests = await ServiceRequest.find()
    .sort({ createdAt: -1 })
    .populate("serviceId");

  const safeData = JSON.parse(JSON.stringify(requests));

  return <RequestClient requests={safeData} />;
}
