export const dynamic = "force-dynamic";
export const revalidate = 0;

import { connectDB } from "@/lib/db";
import Project from "@/models/Project";
import ProjectsClient from "./ProjectsClient";

export default async function ProjectsPage() {
  await connectDB();

  const projects = await Project.find().sort({ createdAt: -1 });

  return <ProjectsClient projects={JSON.parse(JSON.stringify(projects))} />;
}
