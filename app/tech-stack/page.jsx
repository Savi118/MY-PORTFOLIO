import { connectDB } from "@/lib/db";
import Skill from "@/models/Skill";
import TechStackClient from "./TechStackClient";

export default async function TechPage() {
  await connectDB();

  const skills = await Skill.find().sort({ createdAt: -1 });

  return <TechStackClient skills={JSON.parse(JSON.stringify(skills))} />;
}
