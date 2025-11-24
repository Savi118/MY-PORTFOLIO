export const dynamic = "force-dynamic";
export const revalidate = 0;

import ProfileClient from "./ProfileClient";
import { connectDB } from "@/lib/db";
import Experience from "@/models/Experience";
import Settings from "@/models/Settings";
import Project from "@/models/Project";

export default async function Page() {
  await connectDB();

  // CURRENT JOB ROLE
  const currentRole = await Experience.findOne({ end: "Present" }).sort({
    createdAt: -1,
  });

  // SETTINGS
  const settings = await Settings.findOne();

  // Highlighted Project
  let highlightProject = null;
  if (settings?.highlightProjectId) {
    highlightProject = await Project.findById(settings.highlightProjectId);
  }

  return (
    <ProfileClient
      currentRole={JSON.parse(JSON.stringify(currentRole))}
      highlightProject={JSON.parse(JSON.stringify(highlightProject))}
      settings={JSON.parse(JSON.stringify(settings))}
    />
  );
}
