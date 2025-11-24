"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaTools,
  FaProjectDiagram,
  FaCog,
  FaSignOutAlt,
  FaLayerGroup,
  FaInbox,
  FaChartLine,
} from "react-icons/fa";
import { signOut } from "next-auth/react";

export default function DashboardClient({ children }) {
  const pathname = usePathname();

  const links = [
    { name: "Overview", href: "/dashboard", icon: <FaChartLine /> },
    { name: "Skills", href: "/dashboard/skills", icon: <FaTools /> },
    {
      name: "Projects",
      href: "/dashboard/projects",
      icon: <FaProjectDiagram />,
    },
    {
      name: "Experience",
      href: "/dashboard/experience",
      icon: <FaLayerGroup />,
    },
    { name: "Services", href: "/dashboard/services", icon: <FaCog /> },
    { name: "Requests", href: "/dashboard/requests", icon: <FaInbox /> },
    { name: "Settings", href: "/dashboard/settings", icon: <FaCog /> },
  ];

  return (
    <div className='w-full min-h-screen flex bg-green-50'>
      {/* Sidebar */}
      <aside className='w-64 h-screen bg-white/80 backdrop-blur-lg border-r border-green-200 p-6 fixed left-0 top-0 flex flex-col'>
        <h1 className='text-2xl font-bold text-green-900 mb-10'>
          Admin <span className='text-green-700'>Panel</span>
        </h1>

        {/* Nav Links */}
        <nav className='flex flex-col gap-4'>
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg font-semibold
                  ${
                    active
                      ? "bg-green-100 text-green-900 border border-green-300"
                      : "text-green-700 hover:bg-green-50"
                  }
                `}
              >
                <span className='text-xl'>{link.icon}</span>
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Sign Out */}
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className='
            mt-auto px-4 py-3 rounded-lg 
            bg-red-500 text-white font-semibold 
            hover:bg-red-600 transition flex items-center gap-2
          '
        >
          <FaSignOutAlt />
          Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className='ml-64 w-full p-10'>{children}</main>
    </div>
  );
}
