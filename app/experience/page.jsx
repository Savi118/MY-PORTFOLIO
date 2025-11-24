export const dynamic = "force-dynamic";
export const revalidate = 0;

import { connectDB } from "@/lib/db";
import Experience from "@/models/Experience";
import ExperienceClient from "./ExperienceClient";

export default async function Page() {
  await connectDB();

  const experience = await Experience.find().sort({ createdAt: -1 });

  return (
    <ExperienceClient experiences={JSON.parse(JSON.stringify(experience))} />
  );
}
