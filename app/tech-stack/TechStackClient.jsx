"use client";

import { motion } from "framer-motion";

export default function TechStackClient({ skills }) {
  // Soft skills manual (unchanged)
  const softSkills = [
    "Problem Solving",
    "Communication",
    "Time Management",
    "Team Collaboration",
    "Leadership",
    "Adaptability",
  ];

  return (
    <section className='w-full py-20 px-6 bg-green-50/40'>
      <div className='max-w-5xl mx-auto'>
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl font-extrabold text-green-900 text-center'
        >
          My <span className='text-green-700'>Tech Stack</span>
        </motion.h1>

        {/* Tech Skills */}
        <div className='mt-10'>
          <h2 className='text-2xl font-bold text-green-900 mb-4'>
            Technical Skills
          </h2>

          <div className='space-y-6'>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className='flex justify-between mb-1'>
                  <p className='text-green-900 font-semibold'>{skill.name}</p>
                  <p className='text-green-700 font-medium'>{skill.level}%</p>
                </div>

                {/* Progress Bar */}
                <div className='w-full h-3 bg-green-200 rounded-full overflow-hidden'>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='h-full bg-green-600'
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className='mt-16'>
          <h2 className='text-2xl font-bold text-green-900 mb-4'>
            Soft Skills
          </h2>

          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className='
                  bg-white/80 backdrop-blur-lg 
                  border border-green-200 px-5 py-3 
                  rounded-xl shadow-sm 
                  text-green-800 font-medium 
                  text-center cursor-default
                '
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
