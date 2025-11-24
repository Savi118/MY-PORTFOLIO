"use client";

import { motion } from "framer-motion";

export default function ExperienceClient({ experiences }) {
  return (
    <section className='w-full py-20 px-6 bg-green-50/40'>
      <div className='max-w-5xl mx-auto'>
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl font-extrabold text-green-900 text-center'
        >
          Experience <span className='text-green-700'>Timeline</span>
        </motion.h1>

        {/* Timeline */}
        <div className='relative mt-16 border-l-4 border-green-500 ml-4 space-y-14'>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp._id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='relative ml-6'
            >
              {/* Dot */}
              <div className='absolute -left-[34px] top-1 w-5 h-5 bg-green-600 rounded-full border-4 border-green-200'></div>

              {/* Card */}
              <div className='bg-white shadow-lg rounded-2xl p-6 border border-green-200'>
                <h3 className='text-xl font-bold text-green-900'>{exp.role}</h3>
                <p className='text-green-700 font-semibold'>{exp.company}</p>
                <p className='text-sm text-green-600'>
                  {exp.start} – {exp.end}
                </p>

                <p className='mt-3 text-green-800 leading-relaxed'>
                  {exp.description}
                </p>

                {/* Offer Letter + Certificate Buttons */}
                <div className='mt-4 flex gap-3'>
                  {exp.offerLetterUrl && (
                    <a
                      href={exp.offerLetterUrl}
                      target='_blank'
                      className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700'
                    >
                      Offer Letter
                    </a>
                  )}

                  {exp.certificateUrl && (
                    <a
                      href={exp.certificateUrl}
                      target='_blank'
                      className='px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800'
                    >
                      Certificate
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
