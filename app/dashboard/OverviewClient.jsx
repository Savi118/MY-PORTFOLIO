"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function OverviewClient({
  totalProjects,
  totalSkills,
  totalExperience,
  totalServices,
  totalRequests,
  currentRole,
  highlight,
}) {
  return (
    <div className='w-full'>
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className='text-3xl font-bold text-green-900 mb-6'
      >
        Dashboard Overview
      </motion.h1>

      {/* Stat Cards */}
      <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mb-10'>
        {[
          { title: "Projects", value: totalProjects },
          { title: "Skills", value: totalSkills },
          { title: "Experience", value: totalExperience },
          { title: "Services", value: totalServices },
          { title: "Requests", value: totalRequests },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className='p-6 bg-white/80 rounded-xl shadow border border-green-200'
          >
            <p className='text-green-700'>{card.title}</p>
            <h2 className='text-3xl font-bold text-green-900'>{card.value}</h2>
          </motion.div>
        ))}
      </div>

      {/* Current Role */}
      {currentRole && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className='bg-white/80 p-6 rounded-xl border border-green-200 shadow mb-10'
        >
          <h2 className='text-xl font-bold text-green-900 mb-2'>
            Current Role
          </h2>
          <p className='text-green-800 font-medium'>
            {currentRole.role} @ {currentRole.company}
          </p>
          <p className='text-green-600 text-sm'>Since {currentRole.start}</p>
        </motion.div>
      )}

      {/* Highlight Project */}
      {highlight && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className='bg-white/80 p-6 rounded-xl border border-green-200 shadow mb-10'
        >
          <h2 className='text-xl font-bold text-green-900 mb-4'>
            Highlight Project
          </h2>

          <div className='flex gap-4 items-start'>
            <img
              src={highlight.image}
              className='w-32 h-24 rounded-lg object-cover border border-green-300'
            />

            <div>
              <p className='text-lg font-semibold text-green-900'>
                {highlight.title}
              </p>
              <p className='text-sm text-green-800 mt-1'>
                {highlight.description.slice(0, 100)}...
              </p>

              <Link
                href='/dashboard/projects'
                className='mt-3 inline-block text-green-700 underline'
              >
                Manage Projects →
              </Link>
            </div>
          </div>
        </motion.div>
      )}

      {/* Recent activity */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-white/80 p-6 rounded-xl border border-green-200 shadow'
      >
        <h2 className='text-xl font-bold text-green-900 mb-3'>Quick Actions</h2>

        <div className='flex flex-wrap gap-3'>
          <Link
            href='/dashboard/projects'
            className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700'
          >
            Add Project
          </Link>
          <Link
            href='/dashboard/skills'
            className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700'
          >
            Add Skills
          </Link>
          <Link
            href='/dashboard/experience'
            className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700'
          >
            Add Experience
          </Link>
          <Link
            href='/dashboard/services'
            className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700'
          >
            Manage Services
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
