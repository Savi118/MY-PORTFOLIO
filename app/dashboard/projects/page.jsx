import { connectDB } from "@/lib/db";
import Project from "@/models/Project";
import ProjectsClient from "./ProjectsClient";

export default async function Page() {
  await connectDB();
  const projects = JSON.parse(JSON.stringify(await Project.find()));

  return <ProjectsClient projects={projects} />;
}
