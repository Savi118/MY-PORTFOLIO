export const dynamic = "force-dynamic";
export const revalidate = 0;


import { connectDB } from "@/lib/db";
import Project from "@/models/Project";
import Settings from "@/models/Settings";
import Experience from "@/models/Experience";
import HomeClient from "./HomeClient";

export default async function Home() {
  await connectDB();

  // Settings (includes highlightProject ID)
  const settings = await Settings.findOne();

  // Highlight Project
  const highlightProject = settings?.highlightProjectId
    ? await Project.findById(settings.highlightProjectId)
    : null;

  // Project Count
  const projectsCount = await Project.countDocuments();

  // Current Role
  const currentRole = await Experience.findOne({ end: "Present" });

  return (
    <HomeClient
      settings={JSON.parse(JSON.stringify(settings))}
      highlightProject={JSON.parse(JSON.stringify(highlightProject))}
      projectsCount={projectsCount}
      currentRole={JSON.parse(JSON.stringify(currentRole))}
    />
  );
}
