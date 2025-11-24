"use client";

import { motion } from "framer-motion";

export default function ProjectsClient({ projects }) {
  return (
    <section className='w-full py-20 px-6 bg-green-50/40'>
      <div className='max-w-6xl mx-auto'>
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl font-extrabold text-green-900 text-center'
        >
          My <span className='text-green-700'>Projects</span>
        </motion.h1>

        {/* Grid */}
        <div className='mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {projects.map((project) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='relative bg-white rounded-2xl shadow-lg border border-green-200 overflow-hidden group'
            >
              {/* Image */}
              <div className='w-full h-52 overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition duration-300'
                />
              </div>

              {/* Hover Overlay */}
              <div
                className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
                transition duration-300 flex items-center justify-center'
                style={{ pointerEvents: "none" }} // Ensures links still clickable
              >
                <p className='text-white text-lg font-semibold px-4 text-center'>
                  {project.description}
                </p>
              </div>

              {/* Details */}
              <div className='p-5'>
                <h3 className='text-xl font-bold text-green-900'>
                  {project.title}
                </h3>

                {/* Tech Stack */}
                <div className='mt-3 flex flex-wrap gap-2'>
                  {project.techStack?.map((tag, i) => (
                    <span
                      key={i}
                      className='bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className='mt-4 flex gap-4 pointer-events-auto'>
                  {project.github && (
                    <a
                      href={project.github}
                      target='_blank'
                      className='text-green-700 underline hover:text-green-900'
                    >
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target='_blank'
                      className='text-green-700 underline hover:text-green-900'
                    >
                      Live Demo
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
