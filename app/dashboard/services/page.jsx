export const dynamic = "force-dynamic";
export const revalidate = 0;

import { connectDB } from "@/lib/db";
import Service from "@/models/Service";
import ServiceClient from "./ServiceClient";

export default async function Page() {
  await connectDB();

  const services = await Service.find().sort({ createdAt: -1 });
  const safeData = JSON.parse(JSON.stringify(services));

  return <ServiceClient services={safeData} />;
}
