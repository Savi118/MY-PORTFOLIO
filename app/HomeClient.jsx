"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeClient({
  projectsCount,
  highlightProject,
  currentRole,
}) {
  return (
    <section className="relative w-full min-h-screen bg-[url('/images/home.jpg')] bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-10">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className='absolute inset-0 backdrop-blur-md bg-green-200/40'
      />

      {/* Content */}
      <div className='relative z-10 text-center max-w-xl sm:max-w-2xl p-4 sm:p-10'>
        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900'
        >
          Hi, I’m{" "}
          <motion.span
            whileHover={{ scale: 1.1, color: "#15803d" }}
            className='text-white'
          >
            SAKSHAM
          </motion.span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className='mt-4 text-lg sm:text-xl text-green-900 font-semibold'
        >
          Full Stack Developer crafting scalable and modern web apps.
        </motion.p>

        {/* About */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className='mt-3 text-base sm:text-lg text-green-800'
        >
          I build complete applications — from clean frontends to robust
          backends.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='mt-8 flex flex-col sm:flex-row justify-center items-center gap-8'
        >
          <motion.div whileHover={{ scale: 1.08 }}>
            <Link
              href='/projects'
              className='px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition'
            >
              Explore Projects
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.08 }}>
            <a
              href='/files/resume.pdf'
              download
              className='px-6 py-3 border border-green-700 text-green-900 rounded-full hover:bg-green-700 hover:text-white transition'
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className='mt-10 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 text-green-900 font-semibold text-lg'
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <p className='text-3xl font-bold'>{projectsCount}+</p>
            <p className='text-sm text-green-700'>Full-Stack Projects</p>
          </motion.div>

          {currentRole && (
            <motion.div whileHover={{ scale: 1.1 }}>
              <p className='text-3xl font-bold'>🔥</p>
              <p className='text-sm text-green-700'>
                {currentRole.role} @ {currentRole.company}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
