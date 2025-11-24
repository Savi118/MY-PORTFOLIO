export const dynamic = "force-dynamic";
export const revalidate = 0;

import { connectDB } from "@/lib/db";
import Skill from "@/models/Skill";
import SkillsClient from "./SkillsClient";

export default async function Page() {
  await connectDB();

  const skills = JSON.parse(JSON.stringify(await Skill.find()));

  return <SkillsClient skills={skills} />;
}
