export const dynamic = "force-dynamic";
export const revalidate = 0;

import { connectDB } from "@/lib/db";
import Settings from "@/models/Settings";
import SettingsClient from "./SettingsClient";
import Project from "@/models/Project";

export default async function Page() {
  await connectDB();

  const settings = await Settings.findOne();
  const projects = await Project.find().sort({ createdAt: -1 });

  return (
    <SettingsClient
      settings={JSON.parse(JSON.stringify(settings || {}))}
      projects={JSON.parse(JSON.stringify(projects || []))}
    />
  );
}
