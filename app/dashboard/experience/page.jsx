export const dynamic = "force-dynamic";
export const revalidate = 0;

import { connectDB } from "@/lib/db";
import Experience from "@/models/Experience";
import ExperienceClient from "./ExperienceClient";

export default async function Page() {
  await connectDB();

  let experiences = await Experience.find().sort({ createdAt: -1 });

  // SAFETY FIX: Clean all fields to avoid hydration crashes
  experiences = experiences.map((exp) => {
    const obj = exp.toObject();

    return {
      ...obj,

      // Prevent null/undefined end value
      end: obj.end && obj.end.trim() !== "" ? obj.end : "Present",

      // Prevent undefined URLs (Next.js hates undefined)
      offerLetterUrl: obj.offerLetterUrl || "",
      certificateUrl: obj.certificateUrl || "",
    };
  });

  // Convert MongoDB objects to plain JSON-safe objects
  const safeData = JSON.parse(JSON.stringify(experiences));

  return <ExperienceClient experiences={safeData} />;
}
