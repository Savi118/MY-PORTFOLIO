export const dynamic = "force-dynamic";
export const revalidate = 0;


import { connectDB } from "@/lib/db";
import Settings from "@/models/Settings";
import ContactClient from "./ContactClient";

export default async function ContactPage() {
  await connectDB();

  // Fetch settings, fallback to empty object if not found
  const settings = await Settings.findOne();
  const safeSettings = settings
    ? JSON.parse(JSON.stringify(settings))
    : {
        email: "",
        github: "",
        linkedin: "",
        instagram: "",
        twitter: "",
        portfolio: "",
      };

  return <ContactClient settings={safeSettings} />;
}
