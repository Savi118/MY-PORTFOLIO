export const dynamic = "force-dynamic";
export const revalidate = 0;

import { connectDB } from "@/lib/db";
import Experience from "@/models/Experience";
import Settings from "@/models/Settings";
import AboutClient from "./AboutClient";

export default async function AboutPage() {
  await connectDB();

  const settings = await Settings.findOne();
  const currentRole = await Experience.findOne({ end: "Present" });

  return (
    <AboutClient
      settings={JSON.parse(JSON.stringify(settings))}
      currentRole={JSON.parse(JSON.stringify(currentRole))}
    />
  );
}
