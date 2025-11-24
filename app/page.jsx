import { connectDB } from "@/lib/db";
import Project from "@/models/Project";
import Settings from "@/models/Settings";
import Experience from "@/models/Experience";
import HomeClient from "./HomeClient";

export default async function Home() {
  await connectDB();

  const settings = await Settings.findOne();
  const highlightProject = settings?.highlightProjectId
    ? await Project.findById(settings.highlightProjectId)
    : null;

  const totalProjects = await Project.countDocuments();
  const currentRole = await Experience.findOne({ end: "Present" });

  return (
    <HomeClient
      settings={JSON.parse(JSON.stringify(settings))}
      highlightProject={JSON.parse(JSON.stringify(highlightProject))}
      totalProjects={totalProjects}
      currentRole={JSON.parse(JSON.stringify(currentRole))}
    />
  );
}
