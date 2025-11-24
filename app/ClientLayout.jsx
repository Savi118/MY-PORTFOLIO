"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  // Hide navbar and footer ONLY in dashboard
  const hideNav = pathname.startsWith("/dashboard");

  return (
    <>
      {!hideNav && <Navbar />}
      <div className={!hideNav ? "pt-14" : ""}>{children}</div>
      {!hideNav && <Footer />}
    </>
  );
}
