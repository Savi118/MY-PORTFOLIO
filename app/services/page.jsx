export const dynamic = "force-dynamic";
export const revalidate = 0;

import { connectDB } from "@/lib/db";
import Service from "@/models/Service";
import Settings from "@/models/Settings";
import ServicesClient from "./ServicesClient";

export default async function ServicesPage() {
  await connectDB();

  const services = await Service.find();
  const settings = await Settings.findOne();

  return (
    <ServicesClient
      services={JSON.parse(JSON.stringify(services))}
      settings={JSON.parse(JSON.stringify(settings))}
    />
  );
}
