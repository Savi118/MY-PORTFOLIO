"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaUser, FaLock } from "react-icons/fa";

export default function ProfileClient({
  currentRole,
  highlightProject,
  settings,
}) {
  return (
    <section className='w-full min-h-screen py-20 px-6 bg-green-50/40'>
      <div className='max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12'>
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-green-600 shadow-xl bg-green-200'
        >
          <img
            src={settings?.profileImage || "/images/profile.png"}
            alt='Profile'
            className='w-full h-full object-cover'
          />
        </motion.div>

        {/* INFO SECTION */}
        <div className='flex-1'>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='text-4xl font-extrabold text-green-900'
          >
            {settings?.adminName || "Your Name"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='mt-3 text-lg text-green-800 leading-relaxed max-w-xl'
          >
            {settings?.bio ||
              "Full-Stack Developer focusing on MERN & modern web apps."}
          </motion.p>

          {/* Resume + Admin Buttons */}
          <div className='mt-8 flex flex-col sm:flex-row gap-4 items-start'>
            <motion.a
              whileHover={{ scale: 1.05 }}
              className='px-5 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition inline-flex items-center gap-2'
              href='/files/resume.pdf'
              download
            >
              <FaUser /> Download Resume
            </motion.a>

            <motion.div whileHover={{ scale: 1.03 }}>
              <Link
                href='/admin/login'
                className='px-5 py-3 border border-green-600 text-green-900 rounded-xl shadow-sm hover:bg-green-100 inline-flex items-center gap-2'
              >
                <FaLock /> Admin Panel
              </Link>
            </motion.div>
          </div>

          {/* Current Role */}
          {currentRole && (
            <div className='mt-4 p-4 bg-green-100/50 rounded-xl border border-green-200'>
              <h2 className='text-lg font-bold text-green-900'>Current Role</h2>
              <p className='text-green-800 font-medium mt-1'>
                {currentRole.role} @ {currentRole.company}
              </p>
              <p className='text-green-700 text-sm'>
                Since {currentRole.start}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Highlight Project */}
      {highlightProject && (
        <div className='max-w-4xl mx-auto mt-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='bg-white/80 backdrop-blur-xl border border-green-200 rounded-2xl shadow-lg p-8'
          >
            <h2 className='text-2xl font-bold text-green-900 mb-4'>
              Highlight Project
            </h2>

            <div className='flex flex-col md:flex-row items-start gap-6'>
              <div className='w-full md:w-48 h-32 rounded-xl overflow-hidden border border-green-300 shadow'>
                <img
                  src={highlightProject.image}
                  alt={highlightProject.title}
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='flex-1'>
                <h3 className='text-xl font-bold text-green-900'>
                  {highlightProject.title}
                </h3>

                <p className='mt-2 text-green-800 leading-relaxed'>
                  {highlightProject.description}
                </p>

                {/* Tech Stack */}
                <div className='mt-3 flex flex-wrap gap-2'>
                  {highlightProject.techStack?.map((tech, i) => (
                    <span
                      key={i}
                      className='px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
