export const dynamic = "force-dynamic";
export const revalidate = 0;


import { connectDB } from "@/lib/db";
import Project from "@/models/Project";
import Skill from "@/models/Skill";
import Experience from "@/models/Experience";
import Service from "@/models/Service";
import ServiceRequest from "@/models/ServiceRequest";
import Settings from "@/models/Settings";
import OverviewClient from "./OverviewClient";

export default async function DashboardPage() {
  await connectDB();

  const totalProjects = await Project.countDocuments();
  const totalSkills = await Skill.countDocuments();
  const totalExperience = await Experience.countDocuments();
  const totalServices = await Service.countDocuments();
  const totalRequests = await ServiceRequest.countDocuments();

  const currentRole = await Experience.findOne({ end: "Present" });

  const settings = await Settings.findOne();
  let highlight = null;

  if (settings?.highlightProjectId) {
    highlight = await Project.findById(settings.highlightProjectId);
  }

  return (
    <OverviewClient
      totalProjects={totalProjects}
      totalSkills={totalSkills}
      totalExperience={totalExperience}
      totalServices={totalServices}
      totalRequests={totalRequests}
      currentRole={JSON.parse(JSON.stringify(currentRole))}
      highlight={JSON.parse(JSON.stringify(highlight))}
    />
  );
}
